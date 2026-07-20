import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const attendeePath = "notebooks/AIDK_W2_Workshop.ipynb";
const completedPath = "notebooks/AIDK_W2_Workshop_Completed.ipynb";
const slidePaths = ["index.html", "ai_dont_know_workshop_2.html"];
const attendee = JSON.parse(readFileSync(attendeePath, "utf8"));
const completed = JSON.parse(readFileSync(completedPath, "utf8"));

const source = (cell) => Array.isArray(cell.source) ? cell.source.join("") : cell.source;
const decodeHtml = (value) => value
  .replace(/&nbsp;/gi, " ")
  .replace(/&quot;/gi, '"')
  .replace(/&#39;|&apos;/gi, "'")
  .replace(/&gt;/gi, ">")
  .replace(/&lt;/gi, "<")
  .replace(/&amp;/gi, "&");
const normalize = (value) => decodeHtml(value)
  .replace(/<[^>]+>/g, "")
  .replace(/\r/g, "")
  .replace(/\s+/g, " ")
  .trim();
const sections = (html) => [...html.matchAll(/<section\b[\s\S]*?<\/section>/g)].map(([section]) => section);

assert.equal(attendee.cells.length, 60, "attendee notebook must have 60 cells");
assert.equal(completed.cells.length, 60, "completed notebook must have 60 cells");
assert.deepEqual(attendee.cells.map((cell) => cell.cell_type), completed.cells.map((cell) => cell.cell_type), "notebooks must have matching cell types and order");
assert.equal(attendee.cells.filter((cell) => cell.cell_type === "code").length, 22, "attendee notebook must have 22 code cells");

assert.ok(source(attendee.cells[0]).includes("Attendee workbook"), "attendee notebook must identify itself as the attendee workbook");
assert.ok(source(completed.cells[0]).includes("Completed solutions"), "completed notebook must identify itself as the completed solutions workbook");

const requiredSectionHeadings = new Map([
  [1, "## Start Here — Slides 1–11"],
  [4, "## Ask a Data Question — Slides 12–14"],
  [5, "## pandas: Student Scores — Slides 15–20"],
  [19, "## Activity 1: Who Improved the Most? — Slides 21–23"],
  [32, "## Break / Buffer — Slide 24"],
  [33, "## NumPy: CCA Attendance — Slides 25–28"],
  [40, "## matplotlib: Seeing Patterns — Slides 29–36"],
  [52, "## Activity 2: Most Popular Food — Slides 37–38"],
  [56, "## seaborn: Cleaner Defaults — Slides 39–40"],
  [59, "## Wrap-up — Slides 41–44"],
]);
for (const [index, heading] of requiredSectionHeadings) {
  assert.ok(source(attendee.cells[index]).includes(heading), `attendee cell ${index + 1} must include ${heading}`);
  assert.ok(source(completed.cells[index]).includes(heading), `completed cell ${index + 1} must include ${heading}`);
}

const chartAltText = new Map([
  [43, "Bar chart comparing five food items, with Chicken Rice highest at 35 orders."],
  [45, "Line chart of CCA attendance across sessions S1 to S5, dipping at S3 and peaking at S4."],
  [49, "Scatter plot showing quiz scores generally increasing with hours studied across five students."],
  [53, "Labelled bar chart of food orders, with Chicken Rice the tallest bar at 35."],
  [57, "Seaborn bar chart of food orders, with Chicken Rice highest at 35."],
]);
for (const [index, alt] of chartAltText) {
  assert.equal(attendee.cells[index].metadata?.alt, alt, `attendee chart cell ${index + 1} must include useful alt text`);
  assert.equal(completed.cells[index].metadata?.alt, alt, `completed chart cell ${index + 1} must include useful alt text`);
}

for (const staleRange of ["Slides 1–3", "Slides 4–6", "Slides 7–12", "Slides 13–15", "Slides 17–20", "Slides 21–28", "Slides 29–30", "Slides 31–32", "Slides 33–37"]) {
  assert.ok(!attendee.cells.map(source).join("\n").includes(staleRange), `attendee notebook must not retain stale range ${staleRange}`);
  assert.ok(!completed.cells.map(source).join("\n").includes(staleRange), `completed notebook must not retain stale range ${staleRange}`);
}
assert.ok(!attendee.cells.map(source).join("\n").includes("Optional Extension"), "attendee notebook must not include the removed optional extension");
assert.ok(!completed.cells.map(source).join("\n").includes("Optional Extension"), "completed notebook must not include the removed optional extension");

const attendeeCodeCells = attendee.cells.filter((cell) => cell.cell_type === "code");
assert.ok(attendeeCodeCells.every((cell) => cell.execution_count === null), "attendee code cells must remain unexecuted");
assert.ok(attendeeCodeCells.every((cell) => (cell.outputs ?? []).length === 0), "attendee code cells must not store outputs");

const completedCodeCells = completed.cells.filter((cell) => cell.cell_type === "code");
assert.deepEqual(completedCodeCells.map((cell) => cell.execution_count), Array.from({ length: 22 }, (_, index) => index + 1), "completed code cells must have sequential execution counts");
for (const [index, cell] of completedCodeCells.entries()) {
  assert.ok((cell.outputs ?? []).every((output) => output.output_type !== "error"), `completed code cell ${index + 1} must not store an error`);
  assert.ok((cell.outputs ?? []).every((output) => output.name !== "stderr"), `completed code cell ${index + 1} must not store stderr output`);
}

const changedCells = attendee.cells
  .map((cell, index) => source(cell) === source(completed.cells[index]) ? null : index)
  .filter((index) => index !== null);
assert.deepEqual(changedCells, [0, 22, 24, 26, 28, 30, 53, 55], "completed notebook may differ only in its edition label and the seven approved activity cells");

const attendeeBlanks = new Map([
  [22, "students[____].____()"],
  [24, "students[students[____] ____ ____]"],
  [26, "students[____] = students[____] ____ students[____]"],
  [28, "students.sort_values(____, ascending=____)"],
  [30, "____ and ____"],
  [53, "plt.____(food[____], food[____])"],
  [55, "____ received"],
]);
for (const [index, blank] of attendeeBlanks) assert.ok(source(attendee.cells[index]).includes(blank), `attendee cell ${index + 1} must retain ${blank}`);

const completedLogic = new Map([
  [22, 'students["Quiz1"].mean()'],
  [24, 'students["Quiz2"] > 80'],
  [26, 'students["Quiz2"] - students["Quiz1"]'],
  [28, 'sort_values("Improvement", ascending=False)'],
  [30, "Chen and Ethan improved the most, by 10 points."],
  [53, 'plt.title("Food Orders")'],
  [55, "Chicken Rice received the most orders, with 35."],
]);
for (const [index, expected] of completedLogic) assert.ok(source(completed.cells[index]).includes(expected), `completed cell ${index + 1} is missing ${expected}`);

const requiredOutputCells = [3, 7, 9, 11, 13, 15, 17, 21, 23, 25, 27, 29, 35, 37, 39, 42, 44, 46, 48, 50, 54, 58];
for (const index of requiredOutputCells) {
  assert.equal(attendee.cells[index].cell_type, "markdown", `cell ${index + 1} must be Markdown`);
  assert.ok(source(attendee.cells[index]).startsWith("Output:"), `attendee cell ${index + 1} must begin with Output:`);
  assert.ok(source(completed.cells[index]).startsWith("Output:"), `completed cell ${index + 1} must begin with Output:`);
}

const exactDatasetCells = new Map([
  [6, `student_data = {
    "Name": ["Alex", "Bella", "Chen", "Deepa", "Ethan"],
    "Class": ["A", "A", "B", "B", "A"],
    "Quiz1": [72, 85, 60, 90, 55],
    "Quiz2": [78, 88, 70, 92, 65]
}
students = pd.DataFrame(student_data)
students`],
  [34, `attendance = np.array([20, 25, 18, 30, 28])
attendance`],
  [41, `food_data = {
    "Food": ["Chicken Rice", "Nasi Lemak", "Pasta", "Burger", "Sandwich"],
    "Orders": [35, 28, 18, 22, 15]
}
food = pd.DataFrame(food_data)
food`],
  [47, `study_data = {
    "Student": ["Alex", "Bella", "Chen", "Deepa", "Ethan"],
    "Hours Studied": [2, 4, 1, 5, 3],
    "Quiz Score": [65, 82, 58, 90, 75]
}
study = pd.DataFrame(study_data)
study`],
]);
for (const [index, expected] of exactDatasetCells) {
  assert.equal(source(attendee.cells[index]).trim(), expected, `attendee dataset cell ${index + 1} changed`);
  assert.equal(source(completed.cells[index]).trim(), expected, `completed dataset cell ${index + 1} changed`);
}

const outputText = (index) => JSON.stringify(completed.cells[index].outputs ?? []);
for (const [index, expected] of [
  [14, "78.6"], [14, "65"], [14, "92"], [14, "393"],
  [22, "72.4"], [24, "Bella"], [24, "Deepa"], [26, "10"], [28, "Chen"], [28, "Ethan"],
  [36, "24.2"], [36, "30"], [36, "18"], [38, "0.25"],
]) assert.ok(outputText(index).includes(expected), `completed cell ${index + 1} output must contain ${expected}`);
for (const index of [43, 45, 49, 53, 57]) assert.ok(outputText(index).includes("image/png"), `completed chart cell ${index + 1} must store a PNG output`);

const fullMappings = [7, 9, 13, 15, 17, 35, 37, 39, 42, 44, 46, 48, 50, 54, 58];
for (const slidePath of slidePaths) {
  const html = readFileSync(slidePath, "utf8");
  const slideSections = sections(html);
  assert.equal(slideSections.length, 44, `${slidePath} must contain 44 active slides`);

  const mapped = slideSections
    .map((section) => {
      const cellMatch = section.match(/data-notebook-cell="(\d+)"/);
      if (!cellMatch || section.includes('data-code-mode="excerpt"')) return null;
      const oneBasedIndex = Number(cellMatch[1]);
      return {
        index: oneBasedIndex,
        notebook: section.includes('data-notebook-source="completed"') ? completed : attendee,
        content: normalize(section),
      };
    })
    .filter(Boolean);

  assert.deepEqual(mapped.map(({ index }) => index), fullMappings, `${slidePath} full notebook mappings must match the approved slide order`);
  for (const mapping of mapped) {
    const expectedCode = normalize(source(mapping.notebook.cells[mapping.index - 1]));
    assert.ok(mapping.content.includes(expectedCode), `${slidePath} does not show exact code for mapped cell ${mapping.index}`);
  }

  const locExcerpt = slideSections.find((section) => section.includes('data-title=".iloc[] and .loc[]"'));
  assert.ok(locExcerpt?.includes('data-code-mode="excerpt"'), `${slidePath} must mark the loc/iloc teaching slide as an excerpt`);
  for (const line of ['students.iloc[0:2, 0:3]', 'students.loc[0:1, ["Name", "Class", "Quiz1"]]']) {
    assert.ok(normalize(locExcerpt).includes(normalize(line)), `${slidePath} loc/iloc excerpt is missing ${line}`);
  }

  const activityExcerpt = slideSections.find((section) => section.includes('data-notebook-cells="23,25,27,29"'));
  assert.ok(activityExcerpt?.includes('data-code-mode="excerpt"'), `${slidePath} must mark Slide 15 as an excerpt`);
  let priorPosition = -1;
  for (const line of [
    'average_quiz1 = students["Quiz1"].mean()',
    'above_80 = students[students["Quiz2"] > 80]',
    'students["Improvement"] = students["Quiz2"] - students["Quiz1"]',
    'sorted_students = students.sort_values("Improvement", ascending=False)',
  ]) {
    const position = normalize(activityExcerpt).indexOf(normalize(line));
    assert.ok(position > priorPosition, `${slidePath} Slide 15 excerpt lines must appear in approved order`);
    priorPosition = position;
  }

  const seabornExcerpt = slideSections.find((section) => section.includes('data-notebook-cells="44,58"'));
  assert.ok(seabornExcerpt?.includes('data-code-mode="excerpt"'), `${slidePath} must mark Slide 31 as an excerpt`);
  for (const line of ['plt.bar(food["Food"], food["Orders"])', 'sns.barplot(data=food, x="Food", y="Orders")']) {
    assert.ok(normalize(seabornExcerpt).includes(normalize(line)), `${slidePath} Slide 31 is missing ${line}`);
  }
}

console.log("Workshop 2 alignment passed: 44 active slides, two 60-cell notebooks, exact datasets, outputs, larger blanks, and full/excerpt mappings are synchronised.");
