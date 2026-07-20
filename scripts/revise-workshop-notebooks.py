from pathlib import Path

import nbformat


NOTEBOOKS = [
    (Path("notebooks/AIDK_W2_Workshop.ipynb"), False),
    (Path("notebooks/AIDK_W2_Workshop_Completed.ipynb"), True),
]

EXPECTED_CELL_TYPES = [
    "markdown", "markdown", "code", "markdown", "markdown", "markdown",
    "code", "markdown", "code", "markdown", "code", "markdown", "code",
    "markdown", "code", "markdown", "code", "markdown", "markdown",
    "markdown", "code", "markdown", "code", "markdown", "code", "markdown",
    "code", "markdown", "code", "markdown", "markdown", "markdown",
    "markdown", "markdown", "code", "markdown", "code", "markdown", "code",
    "markdown", "markdown", "code", "markdown", "code", "markdown", "code",
    "markdown", "code", "markdown", "code", "markdown", "markdown",
    "markdown", "code", "markdown", "markdown", "markdown", "code",
    "markdown", "markdown",
]

ATTENDEE_EDITION = (
    "> **Attendee workbook** — Run the demonstrations with the speakers and "
    "complete the guided blanks during the activities."
)
COMPLETED_EDITION = (
    "> **Completed solutions** — Release after the workshop; this copy includes "
    "possible solutions and fresh executed outputs."
)

CHART_ALT_TEXT = {
    43: "Bar chart comparing five food items, with Chicken Rice highest at 35 orders.",
    45: "Line chart of CCA attendance across sessions S1 to S5, dipping at S3 and peaking at S4.",
    49: "Scatter plot showing quiz scores generally increasing with hours studied across five students.",
    53: "Labelled bar chart of food orders, with Chicken Rice the tallest bar at 35.",
    57: "Seaborn bar chart of food orders, with Chicken Rice highest at 35.",
}

COMMON_MARKDOWN = {
    1: """
## Start Here — Slides 1–11

Use this notebook alongside the final 44-slide deck. Run a live-demo cell when the speaker reaches it, then use the `Output:` note immediately below to check what you should see.

**Workshop loop:** Question → Data → Code → Output/Chart → Insight

| Notebook section | Matching slides |
| --- | ---: |
| Opening, setup, recap, and goal | 1–11 |
| Data-question loop | 12–14 |
| pandas | 15–20 |
| Activity 1 | 21–23 |
| Break | 24 |
| NumPy | 25–28 |
| matplotlib | 29–36 |
| Activity 2 | 37–38 |
| seaborn | 39–40 |
| Wrap-up | 41–44 |

### Slides 7–9 — Prepare your notebook

Run the setup cell once. During activities, complete only the guided blanks and try the optional hints before checking a full solution.
""",
    3: """
Output: The setup confirms the Python version, imports all four workshop libraries, and applies projector-readable chart defaults.
""",
    4: """
## Ask a Data Question — Slides 12–14

Data analytics starts with a question. Choose the columns that provide evidence, use Python to process or visualise them, and explain the result in plain English.

**Running question:** What is the average Quiz 2 score?

Choose `Quiz2`, calculate with `.mean()`, see `78.6`, then explain what that number means.
""",
    5: """
## pandas: Student Scores — Slides 15–20

pandas is our main tool for labelled tables. A **DataFrame** is a table with rows and named columns.

### Slide 15 — Build the student table

Create the shared dataset used throughout the pandas demonstration and Activity 1.
""",
    7: """
Output: A DataFrame with five students and four columns: Name, Class, Quiz1, and Quiz2.

### Slide 16 — Preview the first rows
""",
    9: """
Output: The first five rows. Because this table has five students, the full table appears.

### Slide 17 — Select by position and label
""",
    11: """
Output: Both selections show the first two students and the Name, Class, and Quiz1 columns. `.iloc[]` uses numbered positions; `.loc[]` uses row and column labels.

### Slide 18 — Select a column and filter rows
""",
    13: """
Output: The Quiz1 column contains 72, 85, 60, 90, and 55; the Class B table contains Chen and Deepa.

### Slide 19 — Calculate summary values
""",
    15: """
Output: Mean: 78.6, Minimum: 65, Maximum: 92, and Sum: 393.

### Slide 20 — Create a calculated column
""",
    17: """
Output: A four-column table with totals 150, 173, 130, 182, and 120 in student order.
""",
    18: """
### pandas check

- `.iloc[]` selects by numbered position; `.loc[]` selects by labels.
- Brackets select a column; a Boolean condition keeps matching rows.
- `.mean()`, `.min()`, `.max()`, and `.sum()` summarise a column.
- A new column can be calculated from existing columns.

Explain one of those ideas to a partner in your own words.
""",
    19: """
## Activity 1: Who Improved the Most? — Slides 21–23

**Attempt time: 10 minutes** · Complete Cells 23, 25, 27, 29, and 31.

1. Print the Quiz 1 column and calculate its average.
2. Find students who scored above 80 in Quiz 2.
3. Create `Improvement = Quiz2 - Quiz1` and print the useful columns.
4. Sort by Improvement, highest first.
5. Write one plain-English insight.

The speaker will call 5 minutes and 2 minutes remaining.

### Before you start — Reset the table
""",
    21: """
Output: The original five-row Student Scores DataFrame, without the demo-only Total column.

### Task 1 — Average Quiz 1
""",
    23: """
Output: One decimal-number average for the five Quiz 1 scores.

### Task 2 — Filter Quiz 2 scores above 80
""",
    25: """
Output: A filtered table containing only students whose Quiz 2 score is above 80.

### Task 3 — Calculate Improvement
""",
    27: """
Output: A table with a new Improvement column, one value for each student.

### Task 4 — Sort highest first
""",
    29: """
Output: A two-column table ordered from the highest improvement to the lowest.

### Task 5 — Write the insight
""",
    31: """
<details>
<summary><strong>Optional hints</strong></summary>

1. Mean starts from `students["Quiz1"]`.
2. Filtering compares the `Quiz2` column with 80.
3. Improvement subtracts Quiz1 from Quiz2.
4. Highest first means descending order.
5. Check spelling, brackets, quotation marks, and capital letters.

</details>
""",
    32: """
## Break / Buffer — Slide 24

Take 10 minutes. If a cell produced an error, ask a facilitator to help with imports, column-name spelling, brackets, or quotation marks. No new content is introduced during the break.
""",
    33: """
## NumPy: CCA Attendance — Slides 25–28

NumPy helps us calculate across several attendance values and create regular x-axis coordinates without typing every number manually.

### Slide 26 — Create an array
""",
    35: """
Output: A NumPy array containing 20, 25, 18, 30, and 28.

### Slide 27 — Calculate attendance summaries
""",
    37: """
Output: Mean 24.2, maximum 30, and minimum 18.

### Slide 28 — Create regular positions
""",
    39: """
Output: `np.arange(1, 6)` creates `[1, 2, 3, 4, 5]` using a fixed step; `np.linspace(0, 1, 5)` creates five evenly spaced values from 0 to 1.
""",
    40: """
## matplotlib: Seeing Patterns — Slides 29–36

Choose the chart from the question:

- **Bar chart:** compare categories.
- **Line chart:** track change across an ordered sequence.
- **Scatter plot:** compare two numerical variables.

After every chart, ask: **What does this chart tell us?**

### Slide 31 — Build the food-order table
""",
    42: """
Output: A five-row DataFrame containing each food item and its number of orders.

### Slide 32 — Compare food categories
""",
    44: """
Output: A basic five-bar chart with Chicken Rice highest at 35; it does not yet have an added title or axis labels.

### Slide 33 — Track attendance over time
""",
    46: """
Output: A line chart showing attendance dipping at S3, peaking at S4, and ending above S1.

### Slide 34 — Build the study dataset
""",
    48: """
Output: A five-row DataFrame containing Student, Hours Studied, and Quiz Score.

### Slide 35 — Compare two numerical variables
""",
    50: """
Output: A five-point scatter plot showing a positive relationship in this small sample; it does not prove that more study always causes a higher score.

### Slide 36 — Read the chart
""",
    51: """
### Chart interpretation check

For each chart, identify:

1. **Title:** What question is this chart about?
2. **Axes:** What does each direction measure?
3. **Insight:** What visible pattern answers the question?

Bar charts compare categories, line charts show an ordered sequence, and scatter plots compare two numbers.
""",
    52: """
## Activity 2: Most Popular Food — Slides 37–38

**Attempt time: 6 minutes** · Complete Cells 54 and 56.

1. Create a bar chart.
2. Add the title `Food Orders`.
3. Label the axes `Food` and `Number of Orders`.
4. Identify the tallest bar and write one insight.

The speaker will call 2 minutes remaining.

### Build the chart
""",
    54: """
Output: A labelled five-bar chart with one clearly tallest bar.

### Write the insight
""",
    56: """
## seaborn: Cleaner Defaults — Slides 39–40

Same data, same question. matplotlib offers direct control; seaborn often gives cleaner defaults for labelled data. We will recreate only the food-orders chart, not start a separate seaborn lecture.

### Slide 40 — Recreate the bar chart
""",
    58: """
Output: A cleaner-default bar chart using the same five food-order values; Chicken Rice remains highest at 35.
""",
    59: """
## Wrap-up — Slides 41–44

**Question → Data → Code → Output/Chart → Insight**

- **pandas:** create, select, filter, summarise, and calculate table columns.
- **NumPy:** perform numerical calculations and create regular plotting coordinates.
- **matplotlib:** make bar, line, and scatter charts.
- **seaborn:** recreate a chart with cleaner defaults.

Today we looked for patterns. Next week, machine learning uses patterns to make predictions. Download the attendee notebook from Slide 44 and keep using the question-to-insight loop when you explore new data.
""",
}


def set_markdown(cells, index, source):
    if cells[index].cell_type != "markdown":
        raise ValueError(f"Cell {index + 1} must be Markdown")
    cells[index].source = source.strip()


def revise(path, completed):
    notebook = nbformat.read(path, as_version=4)
    cells = notebook.cells

    if len(cells) == 61 and cells[-1].cell_type == "markdown" and "## Optional Extension" in cells[-1].source:
        cells.pop()
    if len(cells) != 60:
        raise ValueError(f"{path} should have 60 cells, found {len(cells)}")
    cell_types = [cell.cell_type for cell in cells]
    if cell_types != EXPECTED_CELL_TYPES:
        raise ValueError(f"{path} cell types or order changed")

    code_before = [cell.source for cell in cells if cell.cell_type == "code"]
    edition = COMPLETED_EDITION if completed else ATTENDEE_EDITION
    set_markdown(
        cells,
        0,
        f"""
# AI Don't Know Workshop 2: Data Analytics and Visualisation

{edition}

**Online · 22 July 2026 · 7.00–9.00 PM · Alson & Murugan**

## What you will learn

- Create and read a pandas DataFrame.
- Select and filter rows and columns.
- Calculate summaries and create a calculated column.
- Use NumPy for simple calculations and plotting coordinates.
- Choose and create bar, line, and scatter charts.
- Recreate one chart with seaborn and explain an insight in plain English.
        """,
    )
    for index, source in COMMON_MARKDOWN.items():
        set_markdown(cells, index, source)
    for index, alt_text in CHART_ALT_TEXT.items():
        if cells[index].cell_type != "code":
            raise ValueError(f"Chart cell {index + 1} must be code")
        cells[index].metadata["alt"] = alt_text

    code_after = [cell.source for cell in cells if cell.cell_type == "code"]
    if code_after != code_before:
        raise ValueError(f"{path} code cells changed during Markdown revision")

    if not completed:
        for cell in cells:
            if cell.cell_type == "code":
                cell.execution_count = None
                cell.outputs = []

    nbformat.validate(notebook)
    nbformat.write(notebook, path)


for notebook_path, is_completed in NOTEBOOKS:
    revise(notebook_path, is_completed)
    print(f"Revised {notebook_path} to the final 60-cell structure")
