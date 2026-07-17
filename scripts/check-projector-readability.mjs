import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const startMarker = "/* Projector readability scale */";
const endMarker = "/* End projector readability scale */";

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function extractScaleBlock(css, sourceName) {
  const start = css.indexOf(startMarker);
  const end = css.indexOf(endMarker, start + startMarker.length);

  if (start === -1 || end === -1) {
    throw new Error(`Missing projector readability scale block in ${sourceName}`);
  }

  return css.slice(start, end + endMarker.length);
}

function requirePattern(text, pattern, description) {
  if (!pattern.test(text)) {
    throw new Error(`Projector readability contract failed: ${description}`);
  }
}

try {
  const canonicalFiles = [
    "src/styles/globals.css",
    "src/styles/slides.css",
    "src/styles/code.css",
  ];
  const canonicalBlocks = canonicalFiles.map((file) =>
    extractScaleBlock(read(file), file),
  );
  const canonicalScale = canonicalBlocks.join("\n");
  const standalone = read("ai_dont_know_workshop_2.html");

  const requiredPatterns = [
    [/font-size:\s*clamp\(1\.18rem,/, "body copy minimum is 1.18rem"],
    [/font-size:\s*clamp\(1\.24rem,/, "teaching lead minimum is 1.24rem"],
    [/font-size:\s*clamp\(1\.06rem,/, "code minimum is 1.06rem"],
    [/\.code-head[\s\S]*?font-size:\s*0\.92rem/, "code-label text is 0.92rem"],
    [/\.data-table th[\s\S]*?font-size:\s*0\.9rem/, "table-header text is 0.9rem"],
    [/\.activity-meta[\s\S]*?font-size:\s*0\.95rem/, "activity metadata is 0.95rem"],
    [/\.footer[\s\S]*?font-size:\s*0\.92rem/, "footer text is 0.92rem"],
    [/\.nav-btn[\s\S]*?font-size:\s*0\.92rem/, "navigation text is 0.92rem"],
    [/\.chart-figure[\s\S]*?width:\s*min\(700px,\s*100%\)/, "chart width reaches 700px"],
    [/\.chart-figure img[\s\S]*?max-height:\s*500px/, "chart height reaches 500px"],
    [/@media \(max-width:\s*980px\)[\s\S]*?\.slide,\s*\n\s*\.slide\.two[\s\S]*?place-items:\s*start stretch[\s\S]*?align-items:\s*start/, "mobile slides top-align enlarged content"],
  ];

  for (const [pattern, description] of requiredPatterns) {
    requirePattern(canonicalScale, pattern, description);
  }

  for (const block of canonicalBlocks) {
    if (!standalone.includes(block)) {
      throw new Error(
        "Projector readability contract failed: standalone CSS does not match canonical scale blocks",
      );
    }
  }

  requirePattern(
    read("src/scripts/fitSlides.js"),
    /Math\.max\(0\.68,\s*scale\)/,
    "canonical fit floor remains 0.68",
  );
  requirePattern(
    standalone,
    /Math\.max\(0\.68,\s*scale\)/,
    "standalone fit floor remains 0.68",
  );

  console.log(
    "Projector readability contract passed: enlarged typography, components, charts, fit floor, and standalone parity are present.",
  );
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
