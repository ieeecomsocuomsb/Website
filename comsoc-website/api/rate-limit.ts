// Vercel Edge Function with Upstash Redis rate limiting
// Path: /api/rate-limit
// Required env vars: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN

export const config = {
  runtime: "edge",
};

const RATE_LIMIT = 3;
const RATE_WINDOW = 30; // seconds

async function checkRateLimit(
  ip: string,
): Promise<{ allowed: boolean; count: number }> {
  const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

  // If Upstash is not configured, allow the request (fail open)
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    console.warn("Upstash not configured - rate limiting disabled");
    return { allowed: true, count: 0 };
  }

  const key = `ratelimit:${ip}`;

  try {
    // Use INCR to atomically increment the counter
    const incrResponse = await fetch(`${UPSTASH_URL}/incr/${key}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
    const incrData = await incrResponse.json();
    const count = incrData.result;

    // If this is the first request, set expiry
    if (count === 1) {
      await fetch(`${UPSTASH_URL}/expire/${key}/${RATE_WINDOW}`, {
        headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      });
    }

    return { allowed: count <= RATE_LIMIT, count };
  } catch (error) {
    console.error("Upstash rate limit check failed:", error);
    return { allowed: true, count: 0 }; // Fail open
  }
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
    const { allowed, count } = await checkRateLimit(ip);

    if (!allowed) {
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
