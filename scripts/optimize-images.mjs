import { readdir, mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import sharp from "sharp";

const output = "public/images/optimized";
await mkdir(output, { recursive: true });
const manifest = {};
let originalBytes = 0;
let optimizedBytes = 0;
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (file !== output) await walk(file);
      continue;
    }
    if (!/\.(jpe?g|png|webp)$/i.test(file) || file.includes("monogram")) continue;
    const metadata = await sharp(file).metadata();
    if (!metadata.width || metadata.width < 480) continue;
    const key = "/" + file.slice("public/".length);
    const hash = createHash("sha1").update(key).digest("hex").slice(0, 12);
    const widths = [...new Set([480, 960, 1600].map(width => Math.min(width, metadata.width)))];
    const variants = [];
    for (const width of widths) {
      const target = path.join(output, hash + "-" + width + ".webp");
      const sourceStat = await stat(file);
      const targetStat = await stat(target).catch(() => null);
      if (!targetStat || targetStat.mtimeMs < sourceStat.mtimeMs) {
        await sharp(file).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(target);
      }
      variants.push({ width, src: "/" + target.slice("public/".length) });
    }
    const largest = variants.at(-1);
    originalBytes += (await stat(file)).size;
    optimizedBytes += (await stat("public" + largest.src)).size;
    manifest[key] = { src: largest.src, srcSet: variants.map(item => item.src + " " + item.width + "w").join(", ") };
  }
}
await walk("public/images");
await writeFile("src/data/image-manifest.json", JSON.stringify(manifest));
console.log(`Optimized ${Object.keys(manifest).length} images: ${(originalBytes / 1e6).toFixed(1)} MB originals → ${(optimizedBytes / 1e6).toFixed(1)} MB largest WebP variants. Originals preserved.`);
