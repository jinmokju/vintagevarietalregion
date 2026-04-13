const DEFAULT_OPENVERSE_ENDPOINT = "https://api.openverse.org/v1/images/";
const WIKIMEDIA_ENDPOINT = "https://commons.wikimedia.org/w/api.php";

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

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
    const [imageResult, priceResult] = await Promise.all([
      lookupImageCandidates(candidateQueries, env),
      lookupWinePrice(candidateQueries, env)
    ]);

    const notes = [];
    if (imageResult.image_url) {
      notes.push(`이미지 후보를 찾았습니다 (${imageResult.image_source}${imageResult.matched_query ? ` · ${imageResult.matched_query}` : ""}).`);
    } else {
      notes.push("이미지 후보를 찾지 못했습니다.");
    }

    if (priceResult.average_price) {
      notes.push(`가격 메모를 채웠습니다${priceResult.matched_query ? ` (${priceResult.matched_query})` : ""}.`);
    } else if (env.WINE_SEARCHER_API_ENDPOINT && env.WINE_SEARCHER_API_KEY) {
      notes.push("가격 API 응답에서는 평균가를 찾지 못했습니다.");
    } else {
      notes.push("가격은 수동 입력 또는 Wine-Searcher API 연결이 필요합니다.");
    }

    return Response.json({
      image_url: imageResult.image_url,
      image_source: imageResult.image_source,
      average_price: priceResult.average_price,
      note: notes.join(" ")
    });
  } catch (error) {
    return Response.json(
      {
        image_url: "",
        image_source: "",
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
  for (const query of queries) {
    const openverse = await lookupOpenverseImage(query, env);
    if (openverse.image_url) {
      return { ...openverse, matched_query: query };
    }

    const wikimedia = await lookupWikimediaImage(query);
    if (wikimedia.image_url) {
      return { ...wikimedia, matched_query: query };
    }
  }

  return { image_url: "", image_source: "", matched_query: "" };
}

async function lookupOpenverseImage(query, env) {
  const endpoint = env.OPENVERSE_API_ENDPOINT || DEFAULT_OPENVERSE_ENDPOINT;
  const target = new URL(endpoint);
  target.searchParams.set("q", query);
  target.searchParams.set("page_size", "6");
  target.searchParams.set("license_type", "commercial");
  target.searchParams.set("mature", "false");

  const response = await fetch(target.toString(), {
    headers: {
      "User-Agent": "VVR/1.0"
    }
  });

  if (!response.ok) {
    return { image_url: "", image_source: "" };
  }

  const payload = await response.json();
  const results = Array.isArray(payload?.results) ? payload.results : [];
  const preferred = chooseBestImageResult(results, query, (item) =>
    [item?.title, item?.creator, item?.foreign_landing_url].filter(Boolean).join(" ")
  );

  return {
    image_url: preferred?.thumbnail || preferred?.url || "",
    image_source: preferred?.source || "Openverse"
  };
}

async function lookupWikimediaImage(query) {
  const target = new URL(WIKIMEDIA_ENDPOINT);
  target.searchParams.set("origin", "*");
  target.searchParams.set("action", "query");
  target.searchParams.set("generator", "search");
  target.searchParams.set("gsrsearch", query);
  target.searchParams.set("gsrnamespace", "6");
  target.searchParams.set("gsrlimit", "3");
  target.searchParams.set("prop", "imageinfo");
  target.searchParams.set("iiprop", "url");
  target.searchParams.set("iiurlwidth", "640");
  target.searchParams.set("format", "json");

  const response = await fetch(target.toString(), {
    headers: {
      "User-Agent": "VVR/1.0"
    }
  });

  if (!response.ok) {
    return { image_url: "", image_source: "" };
  }

  const payload = await response.json();
  const pages = Object.values(payload?.query?.pages || {});
  const first = chooseBestImageResult(pages, query, (page) =>
    [page?.title, page?.imageinfo?.[0]?.descriptionurl].filter(Boolean).join(" ")
  );

  return {
    image_url: first?.imageinfo?.[0]?.thumburl || first?.imageinfo?.[0]?.url || "",
    image_source: "Wikimedia Commons"
  };
}

function chooseBestImageResult(items, query, extractor) {
  const normalizedTokens = tokenizeQuery(query);
  const scored = (items || [])
    .map((item) => {
      const haystack = String(extractor(item) || "").toLowerCase();
      const score = normalizedTokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
      const penalty = /(illustration|template|vector|drawing|logo)/i.test(haystack) ? 4 : 0;
      return { item, score: score - penalty };
    })
    .filter((entry) => entry.item);

  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.item || items?.[0];
}

function tokenizeQuery(query) {
  return String(query || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token && token.length > 1);
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
    const averagePrice = payload?.average_price || payload?.data?.average_price || payload?.results?.[0]?.average_price || "";
    if (averagePrice) {
      return {
        average_price: averagePrice,
        matched_query: query
      };
    }
  }

  return { average_price: "", matched_query: "" };
}
