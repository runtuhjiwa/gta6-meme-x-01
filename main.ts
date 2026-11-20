// gta6-meme-x-01 entrypoint.
//
// This entry is a single X post, so the only thing the harness needs to
// see is POST.json, which holds the URL of the posted meme. This script
// copies POST.json from the repository root into the output directory
// so the judges can find it. It uses only the Node standard library.
//
// Environment:
//   MAKEFUN_BOT_DIR     - repo root (default '/bot')
//   MAKEFUN_OUTPUT_DIR  - output directory (default '/output')

const fs = require("fs");
const path = require("path");

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const src = path.join(botDir, "POST.json");
const dest = path.join(outputDir, "POST.json");

try {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
} catch (err) {
  console.error(`Failed to copy POST.json: ${err.message}`);
  process.exit(1);
}
