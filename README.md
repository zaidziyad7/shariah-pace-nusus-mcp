# SHARIAH-PACE Nusus Turath — Render Free prototype

Read-only remote MCP bridge using original `nusus-mcp` and Supergateway, streamable HTTP at `/mcp`.

## Setup from iPhone / Safari
1. Sign in to github.com and create an empty **public** repository, e.g. `shariah-pace-nusus-mcp`. (A public repository holds only this bridge's source code, no confidential research.)
2. Create files in the new repository via **Add file > Create new file** (or upload the files from this ZIP after extracting via Files). Add `package.json`, `start.mjs`, and `render.yaml` exactly as provided.
3. Open dashboard.render.com and create an account via GitHub. Select **New > Web Service**, connect your GitHub repository, choose **Free**, Node runtime, build command `npm install --no-audit --no-fund`, start command `npm start`. If a payment card or paid tier is required, stop.
4. Wait for successful deployment. Your endpoint will be `https://<your-render-subdomain>.onrender.com/mcp`.
5. In chatgpt.com Plugins > Add custom MCP server: Name `SHARIAH-PACE Nusus Turath`, enter endpoint and choose `No Auth` for this *public read-only prototype*; review warnings. Use only for public classical texts. A stronger private production deployment should use a verified supported authentication route.
6. Test `find_books` for `الكافي في فقه أهل المدينة`, then retrieve an exact Arabic passage. Compare with printed edition.

## Caveats
- Not deployed or tested live in this ZIP. Node package releases and hosting may change. Watch deployment logs for errors and contact us with screenshots.
- Free Render services sleep on inactivity; a cold start may take around one minute, which can cause ChatGPT discovery timeouts. Retry after waking service by opening the base URL.
- A hosted public no-auth URL can be used by anyone who discovers it. Avoid confidential content. Avoid distributing the URL.
- Avoid paid upgrades or billing extras. Monitor free-tier quotas.
- Nusus connects to Turath; printed pagination requires independent verification.
- Optional: to set an API key for future compatible clients, define MCP_API_KEY as a Render secret and use an appropriate auth-enabled client. Do not set it for ChatGPT `No Auth`, which would then fail with 401.
