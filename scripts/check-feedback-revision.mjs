import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const source = (cell) => Array.isArray(cell.source) ? cell.source.join("") : cell.source;
const canonical = read("index.html");
const standalone = read("ai_dont_know_workshop_2.html");
const attendee = JSON.parse(read("notebooks/AIDK_W2_Workshop.ipynb"));
const completed = JSON.parse(read("notebooks/AIDK_W2_Workshop_Completed.ipynb"));
const sections = canonical.match(/<section\b[\s\S]*?<\/section>/g) ?? [];
const titles = sections.map((section) => section.match(/data-title="([^"]+)"/)?.[1]);
const attendeeText = attendee.cells.map(source).join("\n");
const completedText = completed.cells.map(source).join("\n");

assert.equal(sections.length, 45, "feedback revision plus opening prelude requires 45 slides");
assert.equal(attendee.cells.length, 61, "attendee notebook must contain 61 cells");
assert.equal(completed.cells.length, 61, "completed notebook must contain 61 cells");
assert.deepEqual(attendee.cells.map((cell) => cell.cell_type), completed.cells.map((cell) => cell.cell_type), "notebook cell types must align");

for (const title of [
  "pd.DataFrame()",
  ".head()",
  ".iloc[] and .loc[]",
  "students[...]",
  ".mean() / .min() / .max() / .sum()",
  "students[&quot;Total&quot;] = ...",
  "np.array()",
  "np.mean() / np.max() / np.min()",
  "np.arange() and np.linspace()",
  "Turning data into graphs",
  "plt.bar()",
  "plt.plot()",
  "plt.scatter()",
  "sns.barplot()",
  "Group photo time",
  "Download the workshop notebook",
  "Workshop 2 feedback",
]) {
  assert.ok(titles.includes(title), `missing feedback-revision slide title: ${title}`);
}

const ilocPosition = canonical.indexOf("students.iloc[");
const locPosition = canonical.indexOf("students.loc[");
const booleanPosition = canonical.indexOf('students[students["Class"] == "B"]');
assert.ok(ilocPosition >= 0 && locPosition > ilocPosition && booleanPosition > locPosition, ".iloc and .loc must appear before Boolean indexing");

for (const text of ["Mean: 78.6", "Minimum: 65", "Maximum: 92", "Sum: 393", "np.arange(1, 6)", "np.linspace(0, 1, 5)"]) {
  assert.ok(canonical.includes(text), `canonical deck is missing ${text}`);
  assert.ok(attendeeText.includes(text.replace(/(?:Mean|Minimum|Maximum|Sum):\s*/, "")) || attendeeText.includes(text), `attendee notebook is missing ${text}`);
}

for (const timer of [
  ['data-timer-id="activity-1"', 'data-duration-seconds="600"'],
  ['data-timer-id="break"', 'data-duration-seconds="600"'],
  ['data-timer-id="activity-2"', 'data-duration-seconds="360"'],
]) {
  for (const token of timer) assert.ok(canonical.includes(token), `canonical deck is missing timer token ${token}`);
}
for (const control of ["Start", "Pause", "Reset", "Time’s up"]) assert.ok(canonical.includes(control), `canonical deck is missing timer copy ${control}`);

assert.ok(attendeeText.includes("students[____].____()"), "attendee notebook must use a larger aggregation blank");
assert.ok(attendeeText.includes("students[students[____] ____ ____]"), "attendee notebook must use a larger Boolean-filter blank");
assert.ok(attendeeText.includes("students.sort_values(____, ascending=____)"), "sort_values must remain scaffolded");
assert.ok(!attendeeText.includes('students["Quiz1"].mean()'), "attendee notebook must not reveal the Activity 1 mean solution");
assert.ok(completedText.includes('students["Quiz1"].mean()'), "completed notebook must contain the Activity 1 mean solution");
assert.ok(completedText.includes("Chen and Ethan improved the most, by 10 points"), "completed notebook must retain the tie insight");

const feedbackUrl = "https://docs.google.com/forms/d/e/1FAIpQLSecVnlz3VnEevhEoFqhn9Winy6Ps21FKaSebncdf3-031GnjA/viewform?usp=preview";
assert.ok(canonical.includes('./notebooks/AIDK_W2_Workshop.ipynb'), "canonical deck must link the attendee notebook");
assert.ok(canonical.includes(feedbackUrl), "canonical deck must contain the exact feedback URL");
assert.ok(existsSync("public/assets/images/notebook-download-qr.svg"), "local notebook QR must exist");
assert.ok(existsSync("public/assets/images/workshop-2-feedback-qr.svg"), "local feedback QR must exist");
assert.ok(existsSync("src/scripts/activityTimer.js"), "activity timer controller must exist");
assert.ok(standalone.includes("ACTIVITY TIMER SOURCE"), "standalone must embed the canonical timer controller");

console.log("Workshop 2 feedback revision passed: 45 slides, two 61-cell notebooks, methods, timers, links, and closing flow are synchronized.");
