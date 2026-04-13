const DEFAULT_OPENVERSE_ENDPOINT = "https://api.openverse.org/v1/images/";
const WIKIMEDIA_ENDPOINT = "https://commons.wikimedia.org/w/api.php";

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const lookupMode = (url.searchParams.get("lookup") || "all").toLowerCase();

  const queryParts = {
    q: url.searchParams.get("q") || "",
    name: url.searchParams.get("name") || "",
    producer: url.searchParams.get("producer") || "",
    vintage: url.searchParams.get("vintage") || "",
    varietal: url.searchParams.get("varietal") || "",
    region: url.searchParams.get("region") || "",
    type: url.searchParams.get("type") || ""
  };

  if (!queryParts.q.trim() && !queryParts.name.trim()) {
    return Response.json({ error: "Missing query" }, { status: 400 });
  }

  const candidateQueries = buildCandidateQueries(queryParts);

  try {
    const imageResult = lookupMode === "price"
      ? { image_url: "", image_source: "", matched_query: "", image_candidates: [] }
      : await lookupImageCandidates(candidateQueries, env);
    const priceResult = lookupMode === "image"
      ? { average_price: "", matched_query: "" }
      : await lookupWinePrice(candidateQueries, env);

    const notes = [];
    if (lookupMode !== "price") {
      notes.push(
        imageResult.image_candidates.length
          ? `${imageResult.image_candidates.length}개의 이미지 후보를 찾았습니다. 검색 결과 페이지는 자동 제외했습니다.`
          : "이미지 후보를 찾지 못했습니다."
      );
    }

    if (lookupMode !== "image") {
      if (priceResult.average_price) {
        notes.push(`가격 메모를 찾았습니다${priceResult.matched_query ? ` (${priceResult.matched_query})` : ""}.`);
      } else if (env.WINE_SEARCHER_API_ENDPOINT && env.WINE_SEARCHER_API_KEY) {
        notes.push("가격 API 응답에서는 평균가를 찾지 못했습니다.");
      } else {
        notes.push("가격은 수동 입력 또는 Wine-Searcher API 연결이 필요합니다.");
      }
    }

    return Response.json({
      image_url: imageResult.image_url,
      image_source: imageResult.image_source,
      image_candidates: imageResult.image_candidates,
      average_price: priceResult.average_price,
      note: notes.join(" ")
    });
  } catch (error) {
    return Response.json(
      {
        image_url: "",
        image_source: "",
        image_candidates: [],
        average_price: "",
        note: `자동 조회 중 오류가 발생했습니다. ${error.message || "Functions 로그를 확인해주세요."}`
      },
      { status: 500 }
    );
  }
}

function buildCandidateQueries(parts) {
  const ordered = [
    [parts.producer, parts.name, parts.vintage, parts.varietal, parts.region],
    [parts.producer, parts.name, parts.vintage],
    [parts.name, parts.vintage, parts.region],
    [parts.producer, parts.name],
    [parts.name, parts.varietal, parts.region],
    [parts.name, parts.region],
    [parts.name, parts.vintage],
    [parts.name]
  ];

  return [...new Set(
    ordered
      .map((items) => items.map((item) => String(item || "").trim()).filter(Boolean).join(" "))
      .filter(Boolean)
  )];
}

async function lookupImageCandidates(queries, env) {
  const candidates = [];

  for (const query of queries) {
    const openverse = await lookupOpenverseImages(query, env);
    mergeCandidates(candidates, openverse, query);
    if (candidates.length >= 6) {
      break;
    }

    const wikimedia = await lookupWikimediaImages(query);
    mergeCandidates(candidates, wikimedia, query);
    if (candidates.length >= 6) {
      break;
    }
  }

  return {
    image_url: candidates[0]?.image_url || "",
    image_source: candidates[0]?.image_source || "",
    matched_query: candidates[0]?.matched_query || "",
    image_candidates: candidates.slice(0, 6)
  };
}

function mergeCandidates(target, incoming, query) {
  (incoming || []).forEach((candidate) => {
    const imageUrl = String(candidate?.image_url || "").trim();
    if (!isUsableImageUrl(imageUrl)) {
      return;
    }
    if (target.some((item) => item.image_url === imageUrl)) {
      return;
    }
    target.push({
      image_url: imageUrl,
      image_source: candidate.image_source || "",
      matched_query: query
    });
  });
}

async function lookupOpenverseImages(query, env) {
  const endpoint = env.OPENVERSE_API_ENDPOINT || DEFAULT_OPENVERSE_ENDPOINT;
  const target = new URL(endpoint);
  target.searchParams.set("q", query);
  target.searchParams.set("page_size", "8");
  target.searchParams.set("license_type", "commercial");
  target.searchParams.set("mature", "false");

  const response = await fetch(target.toString(), {
    headers: { "User-Agent": "VVR/1.0" }
  });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  const results = Array.isArray(payload?.results) ? payload.results : [];
  return results
    .map((item) => ({
      image_url: item?.thumbnail || item?.url || "",
      image_source: item?.source || "Openverse",
      score: scoreCandidate([item?.title, item?.creator, item?.foreign_landing_url].filter(Boolean).join(" "), query)
    }))
    .filter((item) => item.image_url)
    .sort((a, b) => b.score - a.score)
    .map(({ image_url, image_source }) => ({ image_url, image_source }));
}

async function lookupWikimediaImages(query) {
  const target = new URL(WIKIMEDIA_ENDPOINT);
  target.searchParams.set("origin", "*");
  target.searchParams.set("action", "query");
  target.searchParams.set("generator", "search");
  target.searchParams.set("gsrsearch", query);
  target.searchParams.set("gsrnamespace", "6");
  target.searchParams.set("gsrlimit", "6");
  target.searchParams.set("prop", "imageinfo");
  target.searchParams.set("iiprop", "url");
  target.searchParams.set("iiurlwidth", "640");
  target.searchParams.set("format", "json");

  const response = await fetch(target.toString(), {
    headers: { "User-Agent": "VVR/1.0" }
  });

  if (!response.ok) {
    return [];
  }

  const payload = await response.json();
  const pages = Object.values(payload?.query?.pages || {});
  return pages
    .map((page) => ({
      image_url: page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url || "",
      image_source: "Wikimedia Commons",
      score: scoreCandidate([page?.title, page?.imageinfo?.[0]?.descriptionurl].filter(Boolean).join(" "), query)
    }))
    .filter((item) => item.image_url)
    .sort((a, b) => b.score - a.score)
    .map(({ image_url, image_source }) => ({ image_url, image_source }));
}

function scoreCandidate(text, query) {
  const haystack = String(text || "").toLowerCase();
  const tokens = tokenizeQuery(query);
  const tokenScore = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
  const penalty = /(illustration|template|vector|drawing|logo|search)/i.test(haystack) ? 4 : 0;
  return tokenScore - penalty;
}

function tokenizeQuery(query) {
  return String(query || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token && token.length > 1);
}

function isUsableImageUrl(url) {
  if (!url) {
    return false;
  }
  if (String(url).startsWith("data:image/")) {
    return true;
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const href = parsed.href.toLowerCase();
    const path = parsed.pathname.toLowerCase();

    if (!/^https?:$/.test(parsed.protocol)) {
      return false;
    }
    if (
      host.includes("google.") ||
      host.includes("bing.com") ||
      host.includes("search.yahoo.com") ||
      href.includes("/search?") ||
      href.includes("tbm=isch") ||
      href.includes("/imgres?")
    ) {
      return false;
    }

    return /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(path) ||
      host.includes("openverse") ||
      host.includes("wikimedia") ||
      host.includes("commons.wikimedia");
  } catch (_error) {
    return false;
  }
}

async function lookupWinePrice(queries, env) {
  if (!env.WINE_SEARCHER_API_ENDPOINT || !env.WINE_SEARCHER_API_KEY) {
    return { average_price: "", matched_query: "" };
  }

  for (const query of queries) {
    const target = new URL(env.WINE_SEARCHER_API_ENDPOINT);
    target.searchParams.set("q", query);

    const response = await fetch(target.toString(), {
      headers: {
        Authorization: `Bearer ${env.WINE_SEARCHER_API_KEY}`
      }
    });

    if (!response.ok) {
      continue;
    }

    const payload = await response.json();
    const averagePrice =
      payload?.average_price ||
      payload?.data?.average_price ||
      payload?.results?.[0]?.average_price ||
      "";

    if (averagePrice) {
      return { average_price: averagePrice, matched_query: query };
    }
  }

  return { average_price: "", matched_query: "" };
}
