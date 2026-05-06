import sharp from "sharp";
import { readdirSync, statSync, existsSync, unlinkSync } from "fs";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "public", "assets");

const THUMB_WIDTH = 1200; // px — targets ~150–200KB+ for webp paintings
const THUMB_QUALITY = 90;
const THUMB_SUFFIX = "thumb";

let generated = 0;
let skipped = 0;

async function processDir(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      await processDir(fullPath);
      continue;
    }
    const ext = extname(entry).toLowerCase();
    if (ext !== ".webp") continue;
    if (basename(entry, ext).endsWith(THUMB_SUFFIX)) continue; // skip existing thumbs

    const thumbPath = fullPath.slice(0, -ext.length) + THUMB_SUFFIX + ext;

    if (existsSync(thumbPath)) {
      unlinkSync(thumbPath);
    }

    await sharp(fullPath)
      .resize(THUMB_WIDTH, null, { withoutEnlargement: true })
      .webp({ quality: THUMB_QUALITY })
      .toFile(thumbPath);

    console.log(`  generated: ${entry}`);
    generated++;
  }
}

console.log("Generating preview thumbnails...\n");
await processDir(ASSETS_DIR);
console.log(`\nDone — ${generated} generated, ${skipped} already up to date.`);
