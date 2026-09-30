import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Keep social-sharing PNGs and the app icon for crawler/browser compatibility.
const directory = path.resolve("public");
const files = (await readdir(directory)).filter(
  (file) => /\.jpe?g$/i.test(file) || file === "logo-ush.png",
);
let originalBytes = 0;
let optimizedBytes = 0;
for (const file of files) {
  const input = await readFile(path.join(directory, file));
  const certificate = file.startsWith("certificate-");
  const output = await sharp(input)
    .rotate()
    .resize({ width: certificate ? 1800 : 1280, withoutEnlargement: true })
    .webp({ quality: certificate ? 80 : 76, effort: 6 })
    .toBuffer();
  await writeFile(path.join(directory, file.replace(/\.[^.]+$/, ".webp")), output);
  originalBytes += input.length;
  optimizedBytes += output.length;
  console.log(`${file}: ${input.length} → ${output.length} bytes`);
}
console.log(JSON.stringify({ files: files.length, originalBytes, optimizedBytes,
  savedPercent: Math.round((1 - optimizedBytes / originalBytes) * 100) }));
