const DEFAULT_OPENVERSE_ENDPOINT = "https://api.openverse.org/v1/images/";
const WIKIMEDIA_ENDPOINT = "https://commons.wikimedia.org/w/api.php";

const OFFICIAL_PRODUCER_DOMAINS = {
  lopezdeheredia: ["https://www.lopezdeheredia.com"],
  lopezdelheredia: ["https://www.lopezdeheredia.com"],
  vinaltondonia: ["https://www.lopezdeheredia.com"],
  viinatondonia: ["https://www.lopezdeheredia.com"],
  kumeuriver: ["https://kumeuriver.co.nz"],
  domainedujac: ["https://www.dujac.com"],
  domainedelacote: ["https://www.domainedelacote.com"],
  realmcellars: ["https://www.realmcellars.com"],
  opusone: ["https://www.opusonewinery.com"],
  sassicaia: ["https://www.tenutasanguido.com"],
  sanguido: ["https://www.tenutasanguido.com"],
  giacomoconterno: ["https://www.giacomoconterno.it"],
  guigal: ["https://www.guigal.com"],
  egguigal: ["https://www.guigal.com"],
  closapalta: ["https://www.lapostollewines.com"],
  lapostolle: ["https://www.lapostollewines.com"]
};

const IMPORTER_DOMAINS = {
  lopezdeheredia: ["https://www.winebow.com"],
  lopezdelheredia: ["https://www.winebow.com"],
  kumeuriver: ["https://www.winebow.com"],
  domainedujac: ["https://www.winebow.com"],
  domainedelacote: ["https://www.vineyardbrands.com"]
};

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
      : await lookupImageCandidates(queryParts, candidateQueries, env);
    const priceResult = lookupMode === "image"
      ? { average_price: "", matched_query: "" }
      : await lookupWinePrice(candidateQueries, env);

    const notes = [];
    if (lookupMode !== "price") {
      notes.push(
        imageResult.image_candidates.length
          ? `${imageResult.image_candidates.length}개의 이미지 후보를 찾았습니다. 공식 와이너리, 수입사, 공개 이미지 순으로 정렬했습니다.`
          : "공식 와이너리, 수입사, 공개 이미지 fallback까지 확인했지만 이미지 후보를 찾지 못했습니다."
      );
    }

    if (lookupMode !== "image") {
      if (priceResult.average_price) {
        notes.push(`가격 메모를 찾았습니다${priceResult.matched_query ? ` (${priceResult.matched_query})` : ""}.`);
      } else if (env.WINE_SEARCHER_API_ENDPOINT && env.WINE_SEARCHER_API_KEY) {
        notes.push("가격 API 응답은 받았지만 평균가를 찾지 못했습니다.");
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

  const base = [...new Set(
    ordered
      .map((items) => items.map((item) => String(item || "").trim()).filter(Boolean).join(" "))
      .filter(Boolean)
  )];

  const normalized = base
    .map((query) => removeDiacritics(query))
    .filter((query) => query && !base.includes(query));

  return [...base, ...normalized];
}

async function lookupImageCandidates(parts, queries, env) {
  const candidates = [];
  const officialDomains = resolveMappedDomains(parts.producer, env.PRODUCER_DOMAIN_MAP_JSON, OFFICIAL_PRODUCER_DOMAINS);
  const importerDomains = resolveMappedDomains(parts.producer, env.IMPORTER_DOMAIN_MAP_JSON, IMPORTER_DOMAINS);

  if (officialDomains.length) {
    for (const domain of officialDomains) {
      const officialCandidates = await lookupMappedDomainCandidates(domain, parts, queries, "Official winery");
      mergeCandidates(candidates, officialCandidates);
      if (candidates.length >= 6) {
        break;
      }
    }
  }

  if (candidates.length < 6 && importerDomains.length) {
    for (const domain of importerDomains) {
      const importerCandidates = await lookupMappedDomainCandidates(domain, parts, queries, "Importer");
      mergeCandidates(candidates, importerCandidates);
      if (candidates.length >= 6) {
        break;
      }
    }
  }

  if (candidates.length < 6) {
    for (const query of queries) {
      const openverse = await lookupOpenverseImages(query, env);
      mergeCandidates(candidates, openverse.map((item) => ({ ...item, matched_query: query })));
      if (candidates.length >= 6) {
        break;
      }

      const wikimedia = await lookupWikimediaImages(query);
      mergeCandidates(candidates, wikimedia.map((item) => ({ ...item, matched_query: query })));
      if (candidates.length >= 6) {
        break;
      }
    }
  }

  return {
    image_url: candidates[0]?.image_url || "",
    image_source: candidates[0]?.image_source || "",
    matched_query: candidates[0]?.matched_query || "",
    image_candidates: candidates.slice(0, 6)
  };
}

function resolveMappedDomains(producer, envJson, builtinMap) {
  const key = normalizeProducerKey(producer);
  const envMap = parseJsonMap(envJson);
  const domains = [
    ...(envMap[key] || []),
    ...(builtinMap[key] || [])
  ];
  return [...new Set(domains.filter(Boolean))];
}

function parseJsonMap(value) {
  if (!value) {
    return {};
  }
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch (_error) {
    return {};
  }
}

function normalizeProducerKey(value) {
  return removeDiacritics(String(value || ""))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

async function lookupMappedDomainCandidates(domain, parts, queries, sourceLabel) {
  const baseUrl = safeCreateUrl(domain, domain);
  const html = await fetchText(baseUrl.toString());
  if (!html) {
    return [];
  }

  const links = extractInternalLinks(html, baseUrl)
    .map((href) => ({ href, score: scorePageUrl(href, parts, queries[0]) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  const pageUrls = [baseUrl.toString(), ...links.map((item) => item.href)];
  const candidates = [];

  for (const pageUrl of pageUrls) {
    const pageHtml = pageUrl === baseUrl.toString() ? html : await fetchText(pageUrl);
    if (!pageHtml) {
      continue;
    }

    const pageCandidates = extractImageCandidatesFromHtml(pageHtml, pageUrl, parts, sourceLabel);
    mergeCandidates(candidates, pageCandidates);
    if (candidates.length >= 4) {
      break;
    }
  }

  return candidates;
}

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "VVR/1.0",
        Accept: "text/html,application/xhtml+xml"
      }
    });
    if (!response.ok) {
      return "";
    }
    const contentType = response.headers.get("content-type") || "";
    if (!/html|xml/i.test(contentType)) {
      return "";
    }
    return await response.text();
  } catch (_error) {
    return "";
  }
}

function extractInternalLinks(html, baseUrl) {
  const links = [];
  const regex = /href=["']([^"'#]+)["']/gi;
  let match;
  while ((match = regex.exec(html))) {
    const raw = match[1].trim();
    if (!raw || raw.startsWith("mailto:") || raw.startsWith("tel:") || raw.startsWith("javascript:")) {
      continue;
    }
    try {
      const resolved = new URL(raw, baseUrl).toString();
      const parsed = new URL(resolved);
      if (parsed.hostname !== baseUrl.hostname) {
        continue;
      }
      links.push(resolved);
    } catch (_error) {
      continue;
    }
  }
  return [...new Set(links)];
}

function scorePageUrl(url, parts, query) {
  const haystack = removeDiacritics(String(url || "")).toLowerCase();
  let score = scoreCandidate(haystack, query) * 2;
  if (parts.name && haystack.includes(removeDiacritics(parts.name).toLowerCase().replace(/\s+/g, "-"))) {
    score += 6;
  }
  if (parts.vintage && haystack.includes(parts.vintage)) {
    score += 3;
  }
  if (/(wine|wines|product|products|shop|bottle|vintage|collection|portfolio)/i.test(haystack)) {
    score += 2;
  }
  if (/(news|blog|visit|club|event|press|contact)/i.test(haystack)) {
    score -= 3;
  }
  return score;
}

function extractImageCandidatesFromHtml(html, pageUrl, parts, sourceLabel) {
  const rawCandidates = [];

  const metaPatterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/gi,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/gi
  ];

  for (const pattern of metaPatterns) {
    let match;
    while ((match = pattern.exec(html))) {
      rawCandidates.push({ image_url: resolveUrl(match[1], pageUrl), context: pageUrl, image_source: sourceLabel });
    }
  }

  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(html))) {
    const tag = imgMatch[0];
    const src = resolveUrl(imgMatch[1], pageUrl);
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    rawCandidates.push({
      image_url: src,
      context: `${pageUrl} ${altMatch?.[1] || ""}`,
      image_source: sourceLabel
    });
  }

  return rawCandidates
    .filter((candidate) => isUsableImageUrl(candidate.image_url))
    .map((candidate) => ({
      ...candidate,
      score: scoreOfficialCandidate(candidate.context, candidate.image_url, parts)
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ image_url, image_source }) => ({ image_url, image_source, matched_query: pageUrl }));
}

function scoreOfficialCandidate(context, imageUrl, parts) {
  const haystack = removeDiacritics(`${context} ${imageUrl}`).toLowerCase();
  const tokens = [parts.producer, parts.name, parts.vintage, parts.region, parts.varietal]
    .flatMap((value) => tokenizeQuery(value))
    .filter(Boolean);

  let score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 2 : 0), 0);
  if (/(bottle|wine|product|label|cuvee|reserve|reserva|gran reserva|rioja|champagne)/i.test(haystack)) {
    score += 4;
  }
  if (/(logo|icon|sprite|banner|hero|team|avatar|map|background)/i.test(haystack)) {
    score -= 6;
  }
  return score;
}

function resolveUrl(value, baseUrl) {
  try {
    return new URL(value, baseUrl).toString();
  } catch (_error) {
    return "";
  }
}

function mergeCandidates(target, incoming) {
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
      matched_query: candidate.matched_query || ""
    });
  });
}

async function lookupOpenverseImages(query, env) {
  try {
    const endpoint = safeCreateUrl(env.OPENVERSE_API_ENDPOINT || DEFAULT_OPENVERSE_ENDPOINT, DEFAULT_OPENVERSE_ENDPOINT);
    endpoint.searchParams.set("q", query);
    endpoint.searchParams.set("page_size", "8");
    endpoint.searchParams.set("license_type", "commercial");
    endpoint.searchParams.set("mature", "false");

    const response = await fetch(endpoint.toString(), {
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
        image_source: "Public image (Openverse)",
        score: scoreCandidate([item?.title, item?.creator, item?.foreign_landing_url].filter(Boolean).join(" "), query)
      }))
      .filter((item) => item.image_url)
      .sort((a, b) => b.score - a.score)
      .map(({ image_url, image_source }) => ({ image_url, image_source }));
  } catch (_error) {
    return [];
  }
}

async function lookupWikimediaImages(query) {
  try {
    const target = safeCreateUrl(WIKIMEDIA_ENDPOINT, WIKIMEDIA_ENDPOINT);
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
        image_source: "Public image (Wikimedia Commons)",
        score: scoreCandidate([page?.title, page?.imageinfo?.[0]?.descriptionurl].filter(Boolean).join(" "), query)
      }))
      .filter((item) => item.image_url)
      .sort((a, b) => b.score - a.score)
      .map(({ image_url, image_source }) => ({ image_url, image_source }));
  } catch (_error) {
    return [];
  }
}

function scoreCandidate(text, query) {
  const haystack = String(text || "").toLowerCase();
  const tokens = tokenizeQuery(query);
  const tokenScore = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? 1 : 0), 0);
  const penalty = /(illustration|template|vector|drawing|logo|search)/i.test(haystack) ? 4 : 0;
  return tokenScore - penalty;
}

function tokenizeQuery(query) {
  return removeDiacritics(String(query || ""))
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token && token.length > 1);
}

function removeDiacritics(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "");
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
      host.includes("commons.wikimedia") ||
      host.includes("cloudfront") ||
      host.includes("shopify") ||
      host.includes("wordpress") ||
      host.includes("cdn");
  } catch (_error) {
    return false;
  }
}

async function lookupWinePrice(queries, env) {
  if (!env.WINE_SEARCHER_API_ENDPOINT || !env.WINE_SEARCHER_API_KEY) {
    return { average_price: "", matched_query: "" };
  }

  for (const query of queries) {
    try {
      const target = safeCreateUrl(env.WINE_SEARCHER_API_ENDPOINT, env.WINE_SEARCHER_API_ENDPOINT);
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
    } catch (_error) {
      continue;
    }
  }

  return { average_price: "", matched_query: "" };
}

function safeCreateUrl(value, fallback) {
  try {
    return new URL(value);
  } catch (_error) {
    return new URL(fallback);
  }
}