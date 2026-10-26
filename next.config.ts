import type { NextConfig } from "next";

const isCloudflareBuild = process.env.CLOUDFLARE_BUILD === "1";
const hasAssetCdn = Boolean(process.env.NEXT_PUBLIC_ASSET_BASE_URL);

const nextConfig: NextConfig = {
  ...(isCloudflareBuild ? { output: "export" as const } : {}),
  poweredByHeader: false,
  images: {
    ...(hasAssetCdn
      ? { loader: "custom" as const, loaderFile: "./app/lib/cdn-image-loader.ts" }
      : isCloudflareBuild
        ? { unoptimized: true }
        : {}),
    deviceSizes: [640, 1280],
    imageSizes: [96, 192, 384],
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    minimumCacheTTL: 31536000,
  },
  ...(!isCloudflareBuild
    ? {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
                },
              ],
            },
            {
              source: "/:path*\\.(webp|svg|png|jpe?g|mpeg)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=86400, stale-while-revalidate=604800",
                },
              ],
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
