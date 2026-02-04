// Vercel Edge Function (standard Web Request/Response API)
// Path: /api/rate-limit
// Configure via env vars: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, RATE_LIMIT, RATE_WINDOW

export const config = {
  runtime: "edge",
};

// Pure in-memory rate limiter implementation (per-instance)
// Note: This does not persist across instances and is intended
// for simple protections on small sites or local testing.
const RATE_LIMIT = 3;
const RATE_WINDOW = 30;

const memoryStore = new Map<string, { count: number; expiresAt: number }>();

function incrementKey(ip: string) {
  const key = `ratelimit:${ip}`;
  const now = Date.now();
  const entry = memoryStore.get(key);
  if (!entry || entry.expiresAt <= now) {
    memoryStore.set(key, { count: 1, expiresAt: now + RATE_WINDOW * 1000 });
    return 1;
  }
  entry.count += 1;
  return entry.count;
}

export default async function handler(req: Request) {
  const method = req.method.toUpperCase();
  if (method !== "POST" && method !== "GET") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const ipHeader =
    req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip");
  const ip = ipHeader
    ? ipHeader.split(",")[0].trim()
    : req.headers.get("host") || "unknown";

  try {
    const count = incrementKey(ip as string);
    if (count > RATE_LIMIT) {
      return new Response(JSON.stringify({ message: "Too many requests" }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(
      JSON.stringify({
        allowed: true,
        remaining: Math.max(RATE_LIMIT - count, 0),
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("Rate limit check failed", e);
    return new Response(JSON.stringify({ allowed: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
