import { readFileSync, writeFileSync } from "node:fs";

const sourcePath = "index.html";
const standalonePath = "ai_dont_know_workshop_1.html";
const deckPattern = /  <main class="deck">[\s\S]*?  <\/main>/;

const source = readFileSync(sourcePath, "utf8");
const standalone = readFileSync(standalonePath, "utf8");
const sourceDeck = source.match(deckPattern)?.[0];

if (!sourceDeck) {
  throw new Error(`Could not find the slide deck in ${sourcePath}`);
}

if (!deckPattern.test(standalone)) {
  throw new Error(`Could not find the slide deck in ${standalonePath}`);
}

writeFileSync(
  standalonePath,
  standalone.replace(deckPattern, sourceDeck),
  "utf8",
);

console.log(`Synced slide content from ${sourcePath} to ${standalonePath}.`);
