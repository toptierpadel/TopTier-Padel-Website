// Pre-generates responsive WebP versions of every photo/logo in public/images for next/image.
// Static export has no image server, so image-loader.ts points next/image at these files.
//
//   public/images/doubles.jpeg -> public/_optimized/images/doubles-{384,640,828,1200,1920}.webp
//
// Widths must match images.imageSizes + images.deviceSizes in next.config.ts. Sources are never
// upscaled: widths larger than the original are written at the original size, so every URL the
// loader can produce exists. Runs before `dev` and `build`; unchanged images are skipped.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export const WIDTHS = [384, 640, 828, 1200, 1920];
const SOURCE_DIR = "public/images";
const OUT_DIR = "public/_optimized/images";
// The share image is referenced by URL in metadata, not rendered with next/image.
const SKIP = new Set(["og-default.jpg"]);

fs.mkdirSync(OUT_DIR, { recursive: true });
let written = 0;

for (const file of fs.readdirSync(SOURCE_DIR)) {
  if (!/\.(jpe?g|png)$/i.test(file) || SKIP.has(file)) continue;
  const source = path.join(SOURCE_DIR, file);
  const sourceTime = fs.statSync(source).mtimeMs;
  const base = file.replace(/\.(jpe?g|png)$/i, "");

  for (const width of WIDTHS) {
    const target = path.join(OUT_DIR, `${base}-${width}.webp`);
    if (fs.existsSync(target) && fs.statSync(target).mtimeMs >= sourceTime) continue;
    await sharp(source)
      .rotate() // respect EXIF orientation
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(target);
    written++;
  }
}

console.log(`optimize-images: ${written} file(s) written to ${OUT_DIR}`);
