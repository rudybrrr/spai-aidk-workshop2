import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const canonical = readFileSync("index.html", "utf8");
const standalone = readFileSync("ai_dont_know_workshop_2.html", "utf8");
const deckPattern = /  <main class="deck">[\s\S]*?  <\/main>/;
const sectionPattern = /<section\b[\s\S]*?<\/section>/g;

const canonicalDeck = canonical.match(deckPattern)?.[0];
const standaloneDeck = standalone.match(deckPattern)?.[0];
assert.ok(canonicalDeck, "index.html must contain the canonical deck block");
assert.ok(standaloneDeck, "standalone must contain the deck block");
assert.equal(standaloneDeck, canonicalDeck, "standalone deck block must exactly match index.html");

const canonicalSections = canonicalDeck.match(sectionPattern) ?? [];
const standaloneSections = standaloneDeck.match(sectionPattern) ?? [];
assert.equal(canonicalSections.length, 45, "canonical deck must contain 45 slides");
assert.equal(standaloneSections.length, 45, "standalone deck must contain 45 slides");

const titles = canonicalSections.map((section) => section.match(/data-title="([^"]+)"/)?.[1]);
assert.ok(titles.every(Boolean), "every slide must have a data-title");
assert.equal(new Set(titles).size, 45, "slide data-title values must be unique");
assert.ok(canonicalSections[0].includes("slide center active"), "only the first slide starts active");
assert.equal(
  canonicalSections.slice(1).filter((section) => /class="[^"]*\bactive\b/.test(section)).length,
  0,
  "later slides must not start active",
);

const requiredStandaloneRules = [
  ["data table", /\.data-table\s*\{/],
  ["chart figure", /\.chart-figure\s*\{/],
  ["activity metadata", /\.activity-meta\s*\{/],
  ["timer badge", /\.timer-badge\s*\{/],
  ["interactive timer", /\.activity-timer\s*\{/],
  ["quiz rows", /\.quiz-row\s*\{/],
  ["one-column comparison", /\.compare\.one-column\s*\{/],
  ["reduced motion", /@media\s*\(prefers-reduced-motion:\s*reduce\)/],
  ["chart image containment", /\.chart-figure img\s*\{[^}]*object-fit:\s*contain;/s],
  ["native table header style", /\.data-table th\s*\{/],
];
for (const [name, pattern] of requiredStandaloneRules) {
  assert.match(standalone, pattern, `standalone is missing the ${name} style`);
}

for (const id of ["dots", "footerLabel", "slideNo", "topProgress", "prevBtn", "nextBtn"]) {
  assert.match(canonical, new RegExp(`id="${id}"`), `index.html is missing #${id}`);
  assert.match(standalone, new RegExp(`id="${id}"`), `standalone is missing #${id}`);
}
for (const behaviour of ["window.deckSlides", "history.replaceState", "navigator.clipboard.writeText", "--fit-scale", "ActivityTimerTestApi", "data-timer-action"]) {
  assert.ok(standalone.includes(behaviour), `standalone is missing inline behaviour: ${behaviour}`);
}
assert.ok(!standalone.includes('href="./src/styles/'), "standalone must inline its CSS");
assert.ok(!standalone.includes('src="./src/scripts/'), "standalone must inline its JavaScript");

const assets = [
  "public/assets/images/food-orders-bar-basic.svg",
  "public/assets/images/food-orders-bar.svg",
  "public/assets/images/cca-attendance-line.svg",
  "public/assets/images/study-hours-quiz-score-scatter.svg",
  "public/assets/images/food-orders-seaborn-bar.svg",
  "public/assets/images/notebook-download-qr.svg",
  "public/assets/images/workshop-2-feedback-qr.svg",
  "public/assets/images/events/pixels_to_perception.png",
  "public/assets/images/events/graphing_impact.png",
  "public/assets/images/events/n8n.png",
  "public/assets/logos/spai-logo.png",
];
for (const asset of assets) {
  assert.ok(existsSync(asset), `required asset is missing: ${asset}`);
  assert.ok(canonical.includes(asset), `index.html does not reference ${asset}`);
  assert.ok(standalone.includes(asset), `standalone does not reference ${asset}`);
}

const chartContracts = new Map([
  ["public/assets/images/food-orders-bar-basic.svg", ["Chicken Rice"]],
  ["public/assets/images/food-orders-bar.svg", ["Chicken Rice", "Food Orders", "Number of Orders"]],
  ["public/assets/images/cca-attendance-line.svg", ["CCA Attendance by Session", "Attendance", "Session"]],
  ["public/assets/images/study-hours-quiz-score-scatter.svg", ["Study Hours vs Quiz Score", "Hours Studied", "Quiz Score"]],
  ["public/assets/images/food-orders-seaborn-bar.svg", ["Chicken Rice", "Food Orders", "Number of Orders"]],
]);
for (const [asset, labels] of chartContracts) {
  const svg = readFileSync(asset, "utf8");
  assert.match(svg, /<svg\b/, `${asset} must be an SVG`);
  for (const label of labels) {
    assert.ok(svg.includes(label), `${asset} must contain the label ${label}`);
  }
}

for (const requiredText of [
  "Attempt · 10 minutes",
  "Walkthrough · 5 minutes",
  "Attempt · 6 minutes",
  "Walkthrough · 4 minutes",
  "Today we looked for patterns.",
  "Next week, machine learning uses patterns to make predictions.",
]) {
  assert.ok(canonical.includes(requiredText), `index.html is missing required text: ${requiredText}`);
}

const forbiddenActiveTokens = [
  ["ai", "dont", "know", "workshop", "1"].join("_"),
  ["01", "AIDK", "W1"].join("_"),
  ["spai-aidk", "workshop1"].join("-"),
  `${["forms", "gle"].join(".")}/`,
  `${["public", "images"].join("/")}/`,
  ["Attendance", "QR"].join(" "),
];
for (const token of forbiddenActiveTokens) {
  assert.ok(!canonical.includes(token), `index.html contains stale active token: ${token}`);
  assert.ok(!standalone.includes(token), `standalone contains stale active token: ${token}`);
}

console.log("Workshop 2 standalone visual contract passed: 45 synced slides, required styles/assets/timers/shell behaviours, timings, and stale-content checks are present.");
