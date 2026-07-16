import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const notebookPath = "01_AIDK_W1_Starter.ipynb";
const slidePaths = ["index.html", "ai_dont_know_workshop_1.html"];

const notebook = JSON.parse(readFileSync(notebookPath, "utf8"));
const codeCells = notebook.cells
  .map((cell, index) => ({ cell, index }))
  .filter(({ cell }) => cell.cell_type === "code");

function decodeHtml(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&gt;/gi, ">")
    .replace(/&lt;/gi, "<")
    .replace(/&amp;/gi, "&");
}

function normalize(value) {
  return decodeHtml(value)
    .replace(/<[^>]+>/g, "")
    .replace(/\r/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractNotebookSlides(html) {
  const sections = [...html.matchAll(/<section\b[\s\S]*?<\/section>/g)];

  return sections
    .map(([section]) => {
      const cellMatch = section.match(/data-notebook-cell="(\d+)"/);
      if (!cellMatch) return null;

      return {
        cellIndex: Number(cellMatch[1]),
        content: normalize(section),
      };
    })
    .filter(Boolean);
}

for (const slidePath of slidePaths) {
  const html = readFileSync(slidePath, "utf8");
  const notebookSlides = extractNotebookSlides(html);
  const byCellIndex = new Map(
    notebookSlides.map((slide) => [slide.cellIndex, slide.content]),
  );

  assert.equal(
    byCellIndex.size,
    codeCells.length,
    `${slidePath} must map every notebook code cell exactly once`,
  );

  assert.deepEqual(
    notebookSlides.map(({ cellIndex }) => cellIndex),
    codeCells.map(({ index }) => index),
    `${slidePath} notebook code slides must follow notebook order`,
  );

  for (const { cell, index } of codeCells) {
    assert.ok(
      byCellIndex.has(index),
      `${slidePath} is missing notebook code cell ${index}`,
    );

    const expectedCode = normalize(cell.source.join(""));
    assert.ok(
      byCellIndex.get(index).includes(expectedCode),
      `${slidePath} does not show the exact starter code from notebook cell ${index}`,
    );
  }
}

console.log(
  `Alignment check passed: ${codeCells.length} notebook code cells are represented exactly in both slide files.`,
);
