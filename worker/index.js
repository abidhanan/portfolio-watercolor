const IMMUTABLE_ASSET = /\/_next\/static\//;
const MEDIA_ASSET = /\.(?:avif|gif|ico|jpe?g|mpeg|mp3|png|svg|webp|woff2?)$/i;

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.abidhanan.my.id") {
      url.hostname = "abidhanan.my.id";
      return Response.redirect(url, 308);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);

    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "SAMEORIGIN");
    headers.set(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    );
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

    if (IMMUTABLE_ASSET.test(url.pathname)) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (MEDIA_ASSET.test(url.pathname)) {
      headers.set(
        "Cache-Control",
        "public, max-age=86400, stale-while-revalidate=604800",
      );
    } else if (headers.get("Content-Type")?.includes("text/html")) {
      headers.set(
        "Cache-Control",
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      );
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
