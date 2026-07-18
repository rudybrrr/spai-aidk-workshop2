import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const content = readFileSync("AIDK_W2_Content_Document_Updated.md", "utf8");
const deck = readFileSync("index.html", "utf8");
const attendee = JSON.parse(readFileSync("notebooks/AIDK_W2_Workshop.ipynb", "utf8"));
const completed = JSON.parse(readFileSync("notebooks/AIDK_W2_Workshop_Completed.ipynb", "utf8"));
const requirements = readFileSync("requirements.txt", "utf8");
const source = (cell) => Array.isArray(cell.source) ? cell.source.join("") : cell.source;
const notebookText = (notebook) => notebook.cells.map(source).join("\n");

for (const timing of ["0-8 mins", "8-18 mins", "18-36 mins", "36-51 mins", "51-61 mins", "61-71 mins", "71-91 mins", "91-101 mins", "101-106 mins", "106-112 mins", "112-118 mins", "118-120 mins"]) {
  assert.ok(content.includes(timing), `content document is missing ${timing}`);
}

const sections = deck.match(/<section\b[\s\S]*?<\/section>/g) ?? [];
assert.equal(sections.length, 37, "canonical deck must contain 37 slides");
assert.ok(sections[15].includes('data-title="10-minute break"'), "Slide 16 must be the dedicated break slide");
assert.ok(sections[15].includes("We resume at 4:01 PM"), "break slide must show the exact resume time");
assert.ok(!deck.includes("Alson calls"), "audience deck must not contain facilitator-only Alson instructions");
assert.ok(!deck.includes("Murugan calls"), "audience deck must not contain facilitator-only Murugan instructions");

for (const notebook of [attendee, completed]) {
  const setup = source(notebook.cells[2]);
  assert.ok(setup.includes("Workshop setup ready"), "setup cell must print a readiness confirmation");
  assert.ok(setup.includes('"figure.figsize": (9, 5.5)'), "setup cell must set a projector-sized figure");
  assert.ok(setup.includes('"axes.titlesize": 18'), "setup cell must enlarge chart titles");
  const text = notebookText(notebook);
  for (const range of ["Slides 17–20", "Slides 21–28", "Slides 29–30", "Slides 31–32", "Slides 33–37"]) {
    assert.ok(text.includes(range), `notebook is missing ${range}`);
  }
}

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

console.log("Workshop 2 delivery readiness passed: 120-minute agenda, break, notebooks, timers, music cues, photo, resources, and feedback are synchronized.");
