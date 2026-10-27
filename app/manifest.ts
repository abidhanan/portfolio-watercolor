import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abid Hanan Wicaksono - Developer Relations",
    short_name: "Abid Hanan",
    description:
      "Portfolio Developer Relations Abid Hanan Wicaksono dari Surakarta, Indonesia.",
    start_url: "/",
    display: "standalone",
    background_color: "#F0F7FA",
    theme_color: "#F0F7FA",
    lang: "id",
    icons: [
      { src: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
