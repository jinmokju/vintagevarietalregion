# VVR (Vintage Varietal Region)

## Cloudflare Pages
- Connect this GitHub repository with Cloudflare Pages using Git integration.
- Build command: leave empty
- Output directory: /
- Check Deployments to confirm the latest Git commit is live.

## Supabase
1. Create a Supabase project.
2. Run `supabase-schema.sql` in the SQL Editor.
3. Add these variables in Cloudflare Pages:
   - `VVR_SUPABASE_URL`
   - `VVR_SUPABASE_ANON_KEY`
4. For local front-end testing, fill `supabase-config.js` with your values.

## Auto Lookup Function
- `/functions/wine-lookup.js` is the Cloudflare Pages Function for wine image / average price lookup.
- `/functions/label-vision.js` sends a bottle label image to OpenAI Vision and returns structured wine fields.
- By default it can fetch a first image candidate from Openverse's public image search API.
- Optional environment variables:
  - `OPENVERSE_API_ENDPOINT`
  - `WINE_SEARCHER_API_ENDPOINT`
  - `WINE_SEARCHER_API_KEY`
  - `OPENAI_API_KEY`
  - `OPENAI_VISION_MODEL` (optional, defaults to `gpt-4.1-mini`)

## Notes
- Before Supabase is configured, the app falls back to localStorage.
- Wine-Searcher pricing/API access should be verified before production use.
