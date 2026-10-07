import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const source = "public/ahawi-icon.svg";
const outputs = [
  ["app/icon.png", 192],
  ["public/favicon-16x16.png", 16],
  ["public/favicon-32x32.png", 32],
  ["public/favicon-48x48.png", 48],
  ["public/favicon-64x64.png", 64],
  ["public/apple-touch-icon.png", 180],
];

for (const [file, size] of outputs) {
  await sharp(source, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(file);
}

const icoFiles = outputs.slice(1, 5);
const icoImages = await Promise.all(icoFiles.map(([file]) => readFile(file)));
const headerSize = 6 + icoImages.length * 16;
const header = Buffer.alloc(headerSize);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoImages.length, 4);
let offset = headerSize;
icoFiles.forEach(([, size], index) => {
  const entry = 6 + index * 16;
  header[entry] = size === 256 ? 0 : size;
  header[entry + 1] = size === 256 ? 0 : size;
  header[entry + 2] = 0;
  header[entry + 3] = 0;
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(icoImages[index].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += icoImages[index].length;
});
await writeFile("app/favicon.ico", Buffer.concat([header, ...icoImages]));

const versionsPath = "app/lib/asset-versions.json";
const versions = JSON.parse(await readFile(versionsPath, "utf8"));
for (const [file] of outputs.slice(1)) {
  const bytes = await readFile(file);
  versions[`/${file.replace("public/", "")}`] = createHash("sha256")
    .update(bytes)
    .digest("hex")
    .slice(0, 12);
}
const sourceBytes = await readFile(source);
versions["/ahawi-icon.svg"] = createHash("sha256")
  .update(sourceBytes)
  .digest("hex")
  .slice(0, 12);
await writeFile(versionsPath, `${JSON.stringify(versions, null, 2)}\n`);

console.log("Prepared borderless AHAWI favicons at 16, 32, 48, 64, 180, and 192 px.");
