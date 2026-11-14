/**
 * Generates WebP versions of project artwork under public/images/projects/.
 *
 * The PNG/JPEG files stay the source of truth — drop a new screenshot in and
 * run `npm run dev` or `npm run build`; the matching .webp is regenerated when
 * the source is newer. The generated files are gitignored.
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PROJECT_DIR = path.join(process.cwd(), "public", "images", "projects");
const SOURCE_PATTERN = /\.(png|jpe?g)$/i;
const QUALITY = 82;
const MAX_WIDTH = 1920;

const files = await readdir(PROJECT_DIR);
let converted = 0;
let skipped = 0;

for (const file of files) {
  if (!SOURCE_PATTERN.test(file)) continue;

  const source = path.join(PROJECT_DIR, file);
  const target = source.replace(SOURCE_PATTERN, ".webp");

  const [sourceStat, targetStat] = await Promise.all([
    stat(source),
    stat(target).catch(() => null),
  ]);

  if (targetStat && targetStat.mtimeMs >= sourceStat.mtimeMs) {
    skipped += 1;
    continue;
  }

  const image = sharp(source);
  const { width } = await image.metadata();
  const pipeline =
    width && width > MAX_WIDTH ? image.resize({ width: MAX_WIDTH }) : image;

  const info = await pipeline
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(target);

  converted += 1;
  console.log(
    `webp: ${file} → ${path.basename(target)} (${Math.round(info.size / 1024)} kB)`,
  );
}

console.log(`webp: ${converted} converted, ${skipped} up to date`);
