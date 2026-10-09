import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    ...(process.env.NEXT_PUBLIC_ASSET_BASE_URL
      ? { loader: "custom" as const, loaderFile: "./app/lib/cdn-image-loader.ts" }
      : {}),
    deviceSizes: [640, 1280],
    imageSizes: [96, 192, 384],
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [{
      source: "/:path*\\.(webp|svg|png|jpe?g|mpeg)",
      headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
    }];
  },
};

export default nextConfig;
