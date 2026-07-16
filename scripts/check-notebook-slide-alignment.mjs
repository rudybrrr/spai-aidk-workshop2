import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const attendeePath = "notebooks/AIDK_W2_Workshop.ipynb";
const completedPath = "notebooks/AIDK_W2_Workshop_Completed.ipynb";
const slidePaths = ["index.html", "ai_dont_know_workshop_2.html"];

const attendee = JSON.parse(readFileSync(attendeePath, "utf8"));
const completed = JSON.parse(readFileSync(completedPath, "utf8"));

function source(cell) {
  return Array.isArray(cell.source) ? cell.source.join("") : cell.source;
}

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

function sections(html) {
  return [...html.matchAll(/<section\b[\s\S]*?<\/section>/g)].map(
    ([section]) => section,
  );
}

assert.equal(attendee.cells.length, 57, "attendee notebook must have 57 cells");
assert.equal(completed.cells.length, 57, "completed notebook must have 57 cells");
assert.deepEqual(
  attendee.cells.map((cell) => cell.cell_type),
  completed.cells.map((cell) => cell.cell_type),
  "notebooks must have matching cell types and order",
);
assert.equal(
  attendee.cells.filter((cell) => cell.cell_type === "code").length,
  20,
  "attendee notebook must have 20 code cells",
);

const changedCells = attendee.cells
  .map((cell, index) => (source(cell) === source(completed.cells[index]) ? null : index))
  .filter((index) => index !== null);
assert.deepEqual(
  changedCells,
  [20, 22, 24, 26, 28, 49, 51],
  "completed notebook may fill only the seven approved activity cells",
);

const attendeeBlanks = new Map([
  [20, "____()"],
  [22, "____ 80"],
  [24, "____ students"],
  [26, "ascending=____"],
  [28, "____ and ____"],
  [49, 'food["_____"]'],
  [51, "____ received"],
]);
for (const [index, blank] of attendeeBlanks) {
  assert.ok(
    source(attendee.cells[index]).includes(blank),
    `attendee cell ${index} must retain its guided blank`,
  );
}

const completedLogic = new Map([
  [20, 'students["Quiz1"].mean()'],
  [22, 'students["Quiz2"] > 80'],
  [24, 'students["Quiz2"] - students["Quiz1"]'],
  [26, 'sort_values("Improvement", ascending=False)'],
  [28, "Chen and Ethan improved the most, by 10 points."],
  [49, 'plt.title("Food Orders")'],
  [51, "Chicken Rice received the most orders, with 35."],
]);
for (const [index, expected] of completedLogic) {
  assert.ok(
    source(completed.cells[index]).includes(expected),
    `completed cell ${index} is missing its approved solution`,
  );
}

const requiredOutputCells = [3, 7, 9, 11, 13, 15, 21, 23, 25, 27, 33, 35, 38, 40, 42, 44, 46, 50, 54];
for (const index of requiredOutputCells) {
  assert.equal(attendee.cells[index].cell_type, "markdown", `cell ${index} must be Markdown`);
  assert.ok(
    source(attendee.cells[index]).startsWith("Output:"),
    `attendee cell ${index} must begin with Output:`,
  );
  assert.ok(
    source(completed.cells[index]).startsWith("Output:"),
    `completed cell ${index} must begin with Output:`,
  );
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
  [32, `attendance = np.array([20, 25, 18, 30, 28])
attendance`],
  [37, `food_data = {
    "Food": ["Chicken Rice", "Nasi Lemak", "Pasta", "Burger", "Sandwich"],
    "Orders": [35, 28, 18, 22, 15]
}
food = pd.DataFrame(food_data)
food`],
  [43, `study_data = {
    "Student": ["Alex", "Bella", "Chen", "Deepa", "Ethan"],
    "Hours Studied": [2, 4, 1, 5, 3],
    "Quiz Score": [65, 82, 58, 90, 75]
}
study = pd.DataFrame(study_data)
study`],
]);
for (const [index, expected] of exactDatasetCells) {
  assert.equal(source(attendee.cells[index]).trim(), expected, `dataset cell ${index} changed`);
  assert.equal(source(completed.cells[index]).trim(), expected, `completed dataset cell ${index} changed`);
}

const outputText = (index) => JSON.stringify(completed.cells[index].outputs ?? []);
for (const [index, expected] of [
  [12, "78.6"], [20, "72.4"], [22, "Bella"], [22, "Deepa"],
  [24, "10"], [26, "Chen"], [26, "Ethan"], [34, "24.2"],
  [34, "30"], [34, "18"],
]) {
  assert.ok(outputText(index).includes(expected), `completed cell ${index} output must contain ${expected}`);
}
for (const index of [39, 41, 45, 49, 53]) {
  assert.ok(outputText(index).includes("image/png"), `completed chart cell ${index} must store a PNG output`);
}

const fullMappings = [6, 8, 10, 12, 14, 32, 34, 37, 39, 41, 43, 45, 49, 53];
for (const slidePath of slidePaths) {
  const html = readFileSync(slidePath, "utf8");
  const slideSections = sections(html);
  assert.equal(slideSections.length, 31, `${slidePath} must contain 31 slides`);

  const mapped = slideSections
    .map((section) => {
      const cellMatch = section.match(/data-notebook-cell="(\d+)"/);
      if (!cellMatch) return null;
      return {
        index: Number(cellMatch[1]),
        notebook: section.includes('data-notebook-source="completed"') ? completed : attendee,
        content: normalize(section),
      };
    })
    .filter(Boolean);

  assert.deepEqual(
    mapped.map(({ index }) => index),
    fullMappings,
    `${slidePath} full notebook mappings must match the approved slide order`,
  );
  for (const mapping of mapped) {
    const expectedCode = normalize(source(mapping.notebook.cells[mapping.index]));
    assert.ok(
      mapping.content.includes(expectedCode),
      `${slidePath} does not show exact code for mapped cell ${mapping.index}`,
    );
  }

  const activityExcerpt = slideSections.find((section) => section.includes('data-notebook-cells="20,22,24,26"'));
  assert.ok(activityExcerpt?.includes('data-code-mode="excerpt"'), `${slidePath} must mark Slide 15 as an excerpt`);
  assert.ok(normalize(activityExcerpt).includes("Excerpt"), `${slidePath} Slide 15 must visibly say Excerpt`);
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

  const seabornExcerpt = slideSections.find((section) => section.includes('data-notebook-cells="39,53"'));
  assert.ok(seabornExcerpt?.includes('data-code-mode="excerpt"'), `${slidePath} must mark Slide 28 as an excerpt`);
  assert.ok(normalize(seabornExcerpt).includes("Excerpt"), `${slidePath} Slide 28 must visibly say Excerpt`);
  for (const line of [
    'plt.bar(food["Food"], food["Orders"])',
    'sns.barplot(data=food, x="Food", y="Orders")',
  ]) {
    assert.ok(normalize(seabornExcerpt).includes(normalize(line)), `${slidePath} Slide 28 is missing ${line}`);
  }
}

console.log("Workshop 2 alignment passed: 31 slides, two 57-cell notebooks, exact datasets, outputs, activity blanks, and full/excerpt mappings are synchronised.");
