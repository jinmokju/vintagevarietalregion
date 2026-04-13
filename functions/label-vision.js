const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const OPENAI_FILES_URL = "https://api.openai.com/v1/files";
const DEFAULT_MODEL = "gpt-4.1-mini";

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.OPENAI_API_KEY) {
    return Response.json(
      { error: "Missing OPENAI_API_KEY in Cloudflare environment variables." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const imageDataUrl = body?.image_data_url;
  if (!imageDataUrl || typeof imageDataUrl !== "string") {
    return Response.json({ error: "Missing image_data_url." }, { status: 400 });
  }

  const candidates = sanitizeCandidates(body?.candidates);
  const wineTypeHint = String(body?.wine_type_hint || "Red");
  const upload = await uploadVisionFile(imageDataUrl, env.OPENAI_API_KEY);

  const prompt = [
    "You are extracting wine label information from a single bottle label image.",
    "Return only the best structured answer from the visible label.",
    "Prefer exact visible text on the label.",
    "Use candidate lists only to improve matching and spelling, never invent unseen details.",
    `Current wine type hint: ${wineTypeHint}.`,
    "Fields:",
    "- producer: winery / domaine / producer name",
    "- name: cuvee or wine name without producer when possible",
    "- vintage: four digit year if visible",
    "- varietal: best matching grape variety if visible or strongly implied",
    "- region: appellation / region / country if visible",
    "- type: one of Red, White, Sparkling, Rose, Orange",
    "- matched_wine_id: if one candidate wine clearly matches, return that candidate id; otherwise empty string",
    "- raw_text: short cleaned OCR-style transcript from the image",
    "- confidence: low, medium, or high",
    "- notes: short bullet-style strings explaining ambiguity or key clues",
    "Candidate wines and terms:",
    JSON.stringify(candidates)
  ].join("\n");

  const schema = {
    name: "wine_label_extraction",
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        producer: { type: "string" },
        name: { type: "string" },
        vintage: { type: "string" },
        varietal: { type: "string" },
        region: { type: "string" },
        type: {
          type: "string",
          enum: ["Red", "White", "Sparkling", "Rose", "Orange"]
        },
        matched_wine_id: { type: "string" },
        raw_text: { type: "string" },
        confidence: {
          type: "string",
          enum: ["low", "medium", "high"]
        },
        notes: {
          type: "array",
          items: { type: "string" }
        }
      },
      required: ["producer", "name", "vintage", "varietal", "region", "type", "matched_wine_id", "raw_text", "confidence", "notes"]
    },
    strict: true
  };

  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: env.OPENAI_VISION_MODEL || DEFAULT_MODEL,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: prompt
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: "Extract the wine label into the required schema."
            },
            {
              type: "input_image",
              file_id: upload.file_id,
              detail: "high"
            }
          ]
        }
      ],
      text: {
        format: {
          type: "json_schema",
          ...schema
        }
      }
    })
  });

  const payload = await response.json();
  if (!response.ok) {
    return Response.json(
      {
        error: payload?.error?.message || "OpenAI vision request failed."
      },
      { status: response.status }
    );
  }

  const parsed = parseStructuredResponse(payload);
  if (!parsed) {
    return Response.json({ error: "OpenAI response could not be parsed." }, { status: 500 });
  }

  return Response.json(parsed);
}

async function uploadVisionFile(imageDataUrl, apiKey) {
  const parsed = parseDataUrl(imageDataUrl);
  if (!parsed) {
    throw new Error("Image upload payload could not be parsed.");
  }

  const form = new FormData();
  form.append("purpose", "vision");
  form.append(
    "file",
    new File([parsed.bytes], `label.${parsed.extension}`, { type: parsed.mimeType })
  );

  const response = await fetch(OPENAI_FILES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    body: form
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error?.message || "OpenAI file upload failed.");
  }

  return { file_id: payload.id };
}

function parseDataUrl(dataUrl) {
  const match = String(dataUrl || "").match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) {
    return null;
  }

  const mimeType = match[1];
  const base64 = match[2];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  const extension = mimeType.includes("png")
    ? "png"
    : mimeType.includes("webp")
      ? "webp"
      : mimeType.includes("gif")
        ? "gif"
        : "jpg";

  return { mimeType, bytes, extension };
}

function sanitizeCandidates(candidates) {
  return {
    wines: Array.isArray(candidates?.wines) ? candidates.wines.slice(0, 80) : [],
    varietals: Array.isArray(candidates?.varietals) ? candidates.varietals.slice(0, 120) : [],
    regions: Array.isArray(candidates?.regions) ? candidates.regions.slice(0, 120) : [],
    producers: Array.isArray(candidates?.producers) ? candidates.producers.slice(0, 120) : []
  };
}

function parseStructuredResponse(payload) {
  const directText = payload?.output_text;
  if (directText) {
    try {
      return JSON.parse(directText);
    } catch {
      // fall through
    }
  }

  const contents = Array.isArray(payload?.output)
    ? payload.output.flatMap((item) => Array.isArray(item?.content) ? item.content : [])
    : [];

  for (const content of contents) {
    if (typeof content?.text === "string") {
      try {
        return JSON.parse(content.text);
      } catch {
        // keep checking
      }
    }
  }

  return null;
}
