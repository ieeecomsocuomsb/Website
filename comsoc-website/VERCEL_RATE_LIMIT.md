# Vercel Rate Limiting (Edge Function)

What this adds

- `/api/rate-limit` — an Edge Function that enforces IP-based rate limits using a pure in-memory store (per-instance).

Behavior

- Limits requests per IP to `RATE_LIMIT` in a `RATE_WINDOW`-second window.
- By default: `RATE_LIMIT=60`, `RATE_WINDOW=60` (configurable via env).
- This is an endpoint you can call from the client before heavy requests, or use it as a proxy (POST your form to this function, which then forwards to the final destination after checking limits).

Storage/backing store

- This repository uses a pure in-memory Map for rate counters. It does NOT use Redis or any external store by default.
- Caveat: the in-memory store is per-instance (per edge worker) and does not coordinate across instances — it's suitable for simple protections or low-traffic sites.

Setup (recommended)

1. No external setup is required for the default in-memory limiter.
2. (Optional) If you later need a global, strongly-consistent rate limiter across instances, consider Upstash Redis or another centralized store; I can add support for that if desired.
3. (Optional) Override rate limits via env:
   - `RATE_LIMIT` — requests per window
   - `RATE_WINDOW` — seconds

Usage patterns

- Pre-check: Client calls `POST /api/rate-limit` to verify allowance; on 200 proceed, on 429 block the action.
- Proxy: Client POSTs to `/api/rate-limit` with the form payload; the function checks rate limit and then forwards the payload to the final endpoint (you can extend `api/rate-limit` to proxy requests).

Notes and caveats

- Edge Functions run on Vercel's Edge runtime and use the standard Web `Request`/`Response` API.
- Because the limiter is per-instance, it may be bypassed by clients that hit different edge instances; for strict enforcement, use a centralized store.

If you want, I can:

- Add proxying logic to `/api/rate-limit` so your forms POST there and the function forwards to the Google Script URL after enforcing limits (recommended for reliability).
- Narrow protection and add informative headers (remaining quota, reset time) to responses.
