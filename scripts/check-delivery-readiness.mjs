import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const content = readFileSync("AIDK_W2_Content_Document_Updated.md", "utf8");
const deck = readFileSync("index.html", "utf8");
const attendee = JSON.parse(readFileSync("notebooks/AIDK_W2_Workshop.ipynb", "utf8"));
const completed = JSON.parse(readFileSync("notebooks/AIDK_W2_Workshop_Completed.ipynb", "utf8"));
const requirements = readFileSync("requirements.txt", "utf8");
const readme = readFileSync("README.md", "utf8");
const source = (cell) => Array.isArray(cell.source) ? cell.source.join("") : cell.source;
const notebookText = (notebook) => notebook.cells.map(source).join("\n");
const confirmedSchedule = "Online · 22 July 2026 · 7.00–9.00 PM";

assert.ok(content.includes("**Delivery:** Online"), "content document must identify the online delivery mode");
assert.ok(content.includes("22 July 2026, 7.00 PM-9.00 PM"), "content document must contain the confirmed date and time");
assert.ok(deck.includes(confirmedSchedule), "canonical deck must contain the confirmed online date and time");

for (const timing of ["0-8 mins", "8-18 mins", "18-36 mins", "36-51 mins", "51-61 mins", "61-71 mins", "71-91 mins", "91-101 mins", "101-106 mins", "106-112 mins", "112-118 mins", "118-120 mins"]) {
  assert.ok(content.includes(timing), `content document is missing ${timing}`);
}

const sections = deck.match(/<section\b[\s\S]*?<\/section>/g) ?? [];
assert.equal(sections.length, 44, "canonical deck must contain 44 active slides while the attendance form is hidden");
assert.ok(sections[23].includes('data-title="10-minute break"'), "absolute Slide 24 must be the dedicated break slide after the eight-slide prelude");
assert.ok(sections[23].includes("We resume at 8:01 PM"), "break slide must show the exact resume time");
assert.ok(!deck.includes("Alson calls"), "audience deck must not contain facilitator-only Alson instructions");
assert.ok(!deck.includes("Murugan calls"), "audience deck must not contain facilitator-only Murugan instructions");

for (const notebook of [attendee, completed]) {
  const setup = source(notebook.cells[2]);
  assert.ok(setup.includes("Workshop setup ready"), "setup cell must print a readiness confirmation");
  assert.ok(setup.includes('"figure.figsize": (9, 5.5)'), "setup cell must set a projector-sized figure");
  assert.ok(setup.includes('"axes.titlesize": 18'), "setup cell must enlarge chart titles");
  const text = notebookText(notebook);
  assert.ok(text.includes(confirmedSchedule), "notebook must contain the confirmed online date and time");
  for (const range of ["Slides 1–11", "Slides 12–14", "Slides 15–20", "Slides 21–23", "Slide 24", "Slides 25–28", "Slides 29–36", "Slides 37–38", "Slides 39–40", "Slides 41–44"]) {
    assert.ok(text.includes(range), `notebook is missing ${range}`);
  }
  assert.ok(!text.includes("complete the Workshop 2 feedback form"), "notebook wrap-up must match the active deck and omit the hidden feedback form");
}

assert.ok(readme.includes("canonical 44-slide web deck"), "README must describe the canonical 44-slide deck");
assert.ok(!readme.includes("45-slide"), "README must not retain stale 45-slide references");
assert.ok(readme.includes("two 60-cell notebooks"), "README must describe the final 60-cell notebook contract");
assert.ok(!readme.includes("61-cell"), "README must not retain stale 61-cell references");
assert.ok(readme.includes("release the completed solutions notebook after the workshop"), "README must document the attendee solutions release policy");

for (const dependency of ["pandas>=3.0,<4", "numpy>=2.5,<3", "matplotlib>=3.11,<4", "seaborn>=0.13,<1"]) {
  assert.ok(requirements.includes(dependency), `requirements.txt is missing ${dependency}`);
}

assert.ok(existsSync("materials/facilitator-run-sheet.md"), "facilitator run sheet must exist");
const runSheet = readFileSync("materials/facilitator-run-sheet.md", "utf8");
for (const heading of ["## Before attendees arrive", "## Live run of show", "## Common-error triage", "## Hard-cut plan"]) {
  assert.ok(runSheet.includes(heading), `run sheet is missing ${heading}`);
}
for (const cue of ["low-volume music", "group photo", "feedback form", "17–20", "21–28", "36–37"]) {
  assert.ok(runSheet.includes(cue), `run sheet is missing delivery cue: ${cue}`);
}

console.log("Workshop 2 delivery readiness passed: 120-minute agenda, break, notebooks, timers, music cues, photo, and resources are synchronized; the attendance form is hidden.");
