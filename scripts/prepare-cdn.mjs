import { createHash } from "node:crypto";
import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source = path.resolve("public");
const output = path.resolve(".cloudflare/assets");
const widths = [96, 192, 256, 384, 512, 640, 768, 1024, 1280, 1600, 2000];
const versions = {};
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });

async function prepare(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const inputPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await prepare(inputPath);
      continue;
    }
    const relativePath = path.relative(source, inputPath).replaceAll("\\", "/");
    const input = await readFile(inputPath);
    versions[`/${relativePath}`] = createHash("sha256").update(input).digest("hex").slice(0, 12);
    if (!relativePath.endsWith(".webp")) continue;
    for (const width of widths) {
      const variantPath = path.join(output, "responsive", String(width), relativePath);
      await mkdir(path.dirname(variantPath), { recursive: true });
      await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: relativePath.startsWith("certificate-") ? 85 : 78 })
        .toFile(variantPath);
    }
  }
}
await prepare(source);
await writeFile("app/lib/asset-versions.json", JSON.stringify(versions, null, 2) + "\n");
await writeFile(path.join(output, "_headers"), "/*\n  Cache-Control: public, max-age=86400, stale-while-revalidate=604800\n  Access-Control-Allow-Origin: *\n  X-Content-Type-Options: nosniff\n");
console.log(`Prepared ${Object.keys(versions).length} assets and responsive WebP variants for Cloudflare.`);
