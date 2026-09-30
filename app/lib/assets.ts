import versions from "./asset-versions.json";

export const assetBaseUrl = (process.env.NEXT_PUBLIC_ASSET_BASE_URL ?? "").replace(/\/$/, "");

export function assetUrl(src: string): string {
  if (!assetBaseUrl || !src.startsWith("/")) return src;
  const version = versions[src as keyof typeof versions];
  return `${assetBaseUrl}${src}${version ? `?v=${version}` : ""}`;
}
