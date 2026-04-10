export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  if (!query) {
    return Response.json({ error: "Missing query" }, { status: 400 });
  }

  const fallback = {
    image_url: "",
    average_price: "",
    note: "API 키가 없어 자동 조회는 비활성화되어 있습니다. Cloudflare Pages 환경변수에 키를 넣으면 이 함수에서 실제 연동할 수 있습니다.",
  };

  if (!env.WINE_SEARCHER_API_KEY && !env.OPENVERSE_API_ENDPOINT) {
    return Response.json(fallback);
  }

  try {
    let imageUrl = "";
    let averagePrice = "";

    if (env.OPENVERSE_API_ENDPOINT) {
      const imageResponse = await fetch(`${env.OPENVERSE_API_ENDPOINT}?q=${encodeURIComponent(query)}`);
      if (imageResponse.ok) {
        const imageJson = await imageResponse.json();
        imageUrl = imageJson?.results?.[0]?.url || "";
      }
    }

    if (env.WINE_SEARCHER_API_ENDPOINT && env.WINE_SEARCHER_API_KEY) {
      const priceResponse = await fetch(`${env.WINE_SEARCHER_API_ENDPOINT}?q=${encodeURIComponent(query)}`, {
        headers: {
          Authorization: `Bearer ${env.WINE_SEARCHER_API_KEY}`,
        },
      });
      if (priceResponse.ok) {
        const priceJson = await priceResponse.json();
        averagePrice = priceJson?.average_price || "";
      }
    }

    return Response.json({
      image_url: imageUrl,
      average_price: averagePrice,
      note: "자동 조회 결과를 가져왔습니다. 공급자 API 응답 형식에 맞춰 함수 내부 파싱을 조정하면 됩니다.",
    });
  } catch (error) {
    return Response.json({
      ...fallback,
      note: "외부 조회 중 오류가 발생했습니다. API 엔드포인트와 키를 확인해주세요.",
    });
  }
}
