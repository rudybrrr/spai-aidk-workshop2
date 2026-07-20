import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const scriptPath = "materials/scripts/AIDK_W2_Speaker_Script.md";
assert.ok(existsSync(scriptPath), `${scriptPath} must exist`);

const markdown = readFileSync(scriptPath, "utf8");
const deck = readFileSync("index.html", "utf8");
const decode = (value) => value
  .replaceAll("&quot;", '"')
  .replaceAll("&amp;", "&")
  .replaceAll("&#39;", "'");

const deckTitles = [...deck.matchAll(/<section\b[^>]*data-title="([^"]+)"[^>]*>/g)]
  .map((match) => decode(match[1]));
const sectionMatches = [...markdown.matchAll(/^## Slide (\d+) — (.+)$/gm)];

assert.equal(deckTitles.length, 44, "implemented deck must contain 44 titled slides");
assert.equal(sectionMatches.length, 44, "speaker script must contain exactly 44 slide sections");
assert.deepEqual(
  sectionMatches.map((match) => Number(match[1])),
  Array.from({ length: 44 }, (_, index) => index + 1),
  "speaker script slide numbers must run from 1 to 44 without gaps",
);
assert.deepEqual(
  sectionMatches.map((match) => match[2]),
  deckTitles,
  "speaker script titles must exactly match the implemented deck",
);

const sectionStarts = sectionMatches.map((match) => match.index);
const slideBlocks = sectionMatches.map((_, index) => markdown.slice(
  sectionStarts[index],
  sectionStarts[index + 1] ?? markdown.indexOf("# Facilitator Quick Reference"),
));

for (const [index, block] of slideBlocks.entries()) {
  const slide = index + 1;
  for (const heading of ["### Purpose", "### Suggested Script", "### Actions", "### Expected Output", "### Speaker Notes"]) {
    assert.ok(block.includes(heading), `Slide ${slide} is missing ${heading}`);
  }
  assert.match(block, /\*\*Speaker:\*\* .+/, `Slide ${slide} must name a speaker`);
  assert.match(block, /\*\*Planned time:\*\* .+/, `Slide ${slide} must state a planned time`);
  assert.match(block, /\*\*Notebook:\*\* .+/, `Slide ${slide} must state a notebook mapping`);
  assert.match(block, /\*\*Delivery type:\*\* .+/, `Slide ${slide} must state a delivery type`);
}

for (let slide = 1; slide <= 23; slide += 1) {
  assert.ok(slideBlocks[slide - 1].includes("**Speaker:** Alson"), `Slide ${slide} must be led by Alson`);
}
assert.ok(slideBlocks[23].includes("**Speaker:** Both"), "Slide 24 break must be led by both speakers");
for (let slide = 25; slide <= 40; slide += 1) {
  assert.ok(slideBlocks[slide - 1].includes("**Speaker:** Murugan"), `Slide ${slide} must be led by Murugan`);
}
for (let slide = 41; slide <= 44; slide += 1) {
  assert.ok(slideBlocks[slide - 1].includes("**Speaker:** Alson"), `Slide ${slide} must be led by Alson with Murugan supporting`);
}

for (const required of [
  "# AI Don’t Know Workshop 2 Speaker Script",
  "22 July 2026",
  "7:00 PM to 9:00 PM",
  "notebooks/AIDK_W2_Workshop.ipynb",
  "notebooks/AIDK_W2_Workshop_Completed.ipynb",
  "Question → Data → Code → Output/Chart → Insight",
  "You have 10 minutes to attempt this.",
  "5-minute reminder",
  "2-minute reminder",
  "Average Quiz 1: 72.4",
  "Bella and Deepa",
  "Chen and Ethan",
  "It is a tie",
  "10-minute break",
  "Mean: 24.2",
  "Maximum: 30",
  "Minimum: 18",
  "Attendance dips at S3, peaks at S4, and ends above S1.",
  "This does not prove that studying more always causes a higher score.",
  "You have 6 minutes to attempt this.",
  "Chicken Rice received the most orders, with 35.",
  "Today we looked for patterns. Next week, machine learning uses patterns to make predictions.",
  "# Facilitator Quick Reference",
  "## Common notebook problems",
  "## How to help",
  "## Timing reminders",
  "## Cut-first content",
]) {
  assert.ok(markdown.includes(required), `speaker script is missing required content: ${required}`);
}

for (const forbidden of ["TBD", "01_AIDK_W1", "AIDK_W1_Starter", "AIDK_W1_Solutions", "Enzo", "3:00 PM to 5:00 PM"]) {
  assert.ok(!markdown.includes(forbidden), `speaker script contains forbidden stale content: ${forbidden}`);
}

console.log("Workshop 2 speaker script passed: 44 exact slide sections, implemented ownership, notebook cues, activity timings, outputs, handovers, and facilitator reference are present.");
