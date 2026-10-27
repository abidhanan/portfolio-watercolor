const IMMUTABLE_ASSET = /\/_next\/static\//;
const MEDIA_ASSET = /\.(?:avif|gif|ico|jpe?g|mpeg|mp3|png|svg|webp|woff2?)$/i;
const DEPLOYMENT_VERSION = "2026-10-28-seo-performance-v10";

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www.abidhanan.my.id") {
      url.hostname = "abidhanan.my.id";
      return Response.redirect(url, 308);
    }

    const assetUrl = new URL(request.url);
    if (!MEDIA_ASSET.test(assetUrl.pathname)) {
      assetUrl.searchParams.set("__portfolio_version", DEPLOYMENT_VERSION);
    }

    const response = await env.ASSETS.fetch(new Request(assetUrl, request));
    const headers = new Headers(response.headers);

    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "SAMEORIGIN");
    headers.set(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    );
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("X-Portfolio-Version", DEPLOYMENT_VERSION);

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
