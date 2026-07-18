import { readFileSync, writeFileSync } from "node:fs";

const sourcePath = "index.html";
const standalonePath = "ai_dont_know_workshop_2.html";
const stylePaths = [
  "src/styles/globals.css",
  "src/styles/code.css",
  "src/styles/slides.css",
];
const scriptPaths = [
  "src/scripts/fitSlides.js",
  "src/scripts/navigation.js",
  "src/scripts/copyCode.js",
  "src/scripts/activityTimer.js",
];

let standalone = readFileSync(sourcePath, "utf8");
const styles = stylePaths.map((path) => readFileSync(path, "utf8")).join("\n\n");
const linkedStyles = /  <link rel="stylesheet" href="\.\/src\/styles\/globals\.css" \/>\n  <link rel="stylesheet" href="\.\/src\/styles\/code\.css" \/>\n  <link rel="stylesheet" href="\.\/src\/styles\/slides\.css" \/>/;
standalone = standalone.replace(linkedStyles, `  <style>\n${styles}\n  </style>`);

for (const path of scriptPaths) {
  const fileName = path.split("/").at(-1);
  const sourceTag = `  <script src="./${path}" defer></script>`;
  const marker = fileName === "activityTimer.js" ? "  <!-- ACTIVITY TIMER SOURCE -->\n" : "";
  const inlineTag = `${marker}  <script>\n${readFileSync(path, "utf8")}\n  </script>`;
  if (!standalone.includes(sourceTag)) throw new Error(`Could not find ${sourceTag} in ${sourcePath}`);
  standalone = standalone.replace(sourceTag, inlineTag);
}

if (standalone.includes('href="./src/styles/') || standalone.includes('src="./src/scripts/')) {
  throw new Error("Standalone output still contains canonical CSS or JavaScript dependencies");
}

writeFileSync(standalonePath, standalone, "utf8");
console.log(`Generated self-contained ${standalonePath} from ${sourcePath}.`);
