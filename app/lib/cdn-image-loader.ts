"use client";

import type { ImageLoaderProps } from "next/image";
import { assetBaseUrl, assetUrl } from "./assets";

export default function cdnImageLoader({ src, width }: ImageLoaderProps): string {
  if (!src.startsWith("/") || !src.endsWith(".webp")) return assetUrl(src);
  const original = assetUrl(src);
  return original.replace(`${assetBaseUrl}/`, `${assetBaseUrl}/responsive/${width}/`);
}
