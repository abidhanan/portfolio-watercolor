import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Inline the (small, Tailwind) stylesheet so first paint is not blocked by an extra request.
    inlineCss: true,
  },
  images: {
    ...(process.env.NEXT_PUBLIC_ASSET_BASE_URL
      ? { loader: "custom" as const, loaderFile: "./app/lib/cdn-image-loader.ts" }
      : {}),
    deviceSizes: [640, 1024, 1600],
    imageSizes: [96, 192, 256, 384],
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
