const DEFAULT_OPENVERSE_ENDPOINT = "https://api.openverse.org/v1/images/";

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  if (!query) {
    return Response.json({ error: "Missing query" }, { status: 400 });
  }

  try {
    const [imageResult, priceResult] = await Promise.all([
      lookupOpenverseImage(query, env),
      lookupWinePrice(query, env)
    ]);

    const notes = [];
    if (imageResult.image_url) {
      notes.push(`이미지 후보를 찾았습니다${imageResult.image_source ? ` (${imageResult.image_source})` : ""}.`);
    } else {
      notes.push("이미지 후보를 찾지 못했습니다.");
    }

    if (priceResult.average_price) {
      notes.push("가격 메모도 함께 채웠습니다.");
    } else if (env.WINE_SEARCHER_API_ENDPOINT && env.WINE_SEARCHER_API_KEY) {
      notes.push("가격 API 응답에서는 평균가를 찾지 못했습니다.");
    } else {
      notes.push("가격은 아직 수동 입력 또는 Wine-Searcher API 연결이 필요합니다.");
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
        note: "외부 조회 중 오류가 발생했습니다. 엔드포인트 또는 네트워크 상태를 확인해주세요."
      },
      { status: 500 }
    );
  }
}

async function lookupOpenverseImage(query, env) {
  const endpoint = env.OPENVERSE_API_ENDPOINT || DEFAULT_OPENVERSE_ENDPOINT;
  const target = new URL(endpoint);
  target.searchParams.set("q", query);
  target.searchParams.set("page_size", "1");
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
  const first = payload?.results?.[0];
  return {
    image_url: first?.thumbnail || first?.url || "",
    image_source: first?.source || "Openverse"
  };
}

async function lookupWinePrice(query, env) {
  if (!env.WINE_SEARCHER_API_ENDPOINT || !env.WINE_SEARCHER_API_KEY) {
    return { average_price: "" };
  }

  const target = new URL(env.WINE_SEARCHER_API_ENDPOINT);
  target.searchParams.set("q", query);

  const response = await fetch(target.toString(), {
    headers: {
      Authorization: `Bearer ${env.WINE_SEARCHER_API_KEY}`
    }
  });

  if (!response.ok) {
    return { average_price: "" };
  }

  const payload = await response.json();
  return {
    average_price: payload?.average_price || ""
  };
}
