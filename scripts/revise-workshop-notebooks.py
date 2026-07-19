from pathlib import Path

import nbformat


NOTEBOOKS = [
    (Path("notebooks/AIDK_W2_Workshop.ipynb"), False),
    (Path("notebooks/AIDK_W2_Workshop_Completed.ipynb"), True),
]


def text(cell):
    return cell.source


def find_cell(cells, needle):
    for index, cell in enumerate(cells):
        if needle in text(cell):
            return index
    raise ValueError(f"Could not find notebook cell containing: {needle}")


def set_source(cells, needle, replacement):
    cells[find_cell(cells, needle)].source = replacement.strip()


def insert_after(cells, needle, new_cells):
    index = find_cell(cells, needle) + 1
    cells[index:index] = new_cells


def revise(path, completed):
    notebook = nbformat.read(path, as_version=4)
    cells = notebook.cells

    set_source(
        cells,
        "## Learning outcomes",
        """
# AI Don't Know Workshop 2: Data Analytics and Visualisation

**Online · 22 July 2026 · 7.00–9.00 PM · Alson & Murugan**

## Learning outcomes

By the end of this workshop, you will be able to create and read a pandas DataFrame, select rows and columns with `.iloc[]`, `.loc[]`, and brackets, filter data, calculate mean/minimum/maximum/sum summaries, create a calculated column, generate regular NumPy coordinates, choose a suitable chart, make bar/line/scatter plots, try a seaborn alternative, and explain one insight in plain English.
        """,
    )

    set_source(
        cells,
        "## Ask a Data Question",
        """
## Ask a Data Question — Slides 4–6

Data analytics starts with a question. We choose the columns that can act as evidence, use Python to process or visualise them, and explain the result in plain English.

Running example: **What is the average Quiz 2 score?** Pick the `Quiz2` column, calculate with `.mean()`, see `78.6`, then state what that number means.
        """,
    )

    set_source(
        cells,
        "## pandas: Student Scores",
        """
## pandas: Student Scores — Slides 7–12

pandas is our main tool for labelled tables. A **DataFrame** is a table with rows and named columns. We will create one, inspect it, select by position and label, filter matching rows, calculate summaries, and create a new column.
        """,
    )

    insert_after(
        cells,
        "Output: The first five rows.",
        [
            nbformat.v4.new_code_cell(
                """first_rows_by_position = students.iloc[0:2, 0:3]
first_rows_by_label = students.loc[0:1, ["Name", "Class", "Quiz1"]]

print("By position:")
print(first_rows_by_position)
print("By label:")
print(first_rows_by_label)"""
            ),
            nbformat.v4.new_markdown_cell(
                "Output: Both selections show the first two students and the Name, Class, and Quiz1 columns. `.iloc[]` uses numbered positions; `.loc[]` uses row and column labels."
            ),
        ],
    )

    set_source(
        cells,
        "quiz1_scores = students",
        """
quiz1_scores = students["Quiz1"]
class_b_students = students[students["Class"] == "B"]

print(quiz1_scores)
print(class_b_students)
        """,
    )

    set_source(
        cells,
        "average_quiz2 = students",
        """
quiz2_scores = students["Quiz2"]
print("Mean:", quiz2_scores.mean())
print("Minimum:", quiz2_scores.min())
print("Maximum:", quiz2_scores.max())
print("Sum:", quiz2_scores.sum())
        """,
    )
    set_source(
        cells,
        "Output: The average Quiz 2 score is 78.6.",
        "Output: Mean: 78.6, Minimum: 65, Maximum: 92, and Sum: 393.",
    )
    set_source(
        cells,
        "### Quick recap",
        """
### Quick recap

- `.iloc[]` selects by numbered position; `.loc[]` selects by labels.
- Brackets select a column; a Boolean condition keeps matching rows.
- `.mean()`, `.min()`, `.max()`, and `.sum()` summarise a column.
- A new column can be calculated from existing columns.

Before continuing, explain one of those ideas to a partner in your own words.
        """,
    )
    set_source(
        cells,
        "## Activity 1: Who Improved the Most?",
        """
## Activity 1: Who Improved the Most? — Slides 13–15

**Attempt time: 10 minutes**

1. Print the Quiz 1 column and calculate its average.
2. Find students who scored above 80 in Quiz 2.
3. Create `Improvement = Quiz2 - Quiz1` and print the useful columns.
4. Sort by Improvement, highest first.
5. Write one plain-English insight.

Complete Cells 23, 25, 27, 29, and 31. The speaker will call 5 minutes and 2 minutes remaining.
        """,
    )

    if completed:
        set_source(
            cells,
            "# Possible solution: calculate the average Quiz 1 score.",
            """
# Possible solution: print and average the Quiz 1 column.
quiz1_scores = students["Quiz1"]
print(quiz1_scores)
average_quiz1 = students["Quiz1"].mean()
print(average_quiz1)
            """,
        )
        set_source(
            cells,
            "# Possible solution: keep rows where Quiz 2 is above 80.",
            """
# Possible solution: keep rows where Quiz 2 is above 80.
above_80 = students[students["Quiz2"] > 80]
print(above_80)
            """,
        )
        set_source(
            cells,
            "# Possible solution: subtract Quiz 1 from Quiz 2.",
            """
# Possible solution: subtract Quiz 1 from Quiz 2.
students["Improvement"] = students["Quiz2"] - students["Quiz1"]
print(students[["Name", "Quiz1", "Quiz2", "Improvement"]])
            """,
        )
        set_source(
            cells,
            "# Possible solution: arrange the highest improvement first.",
            """
# Possible solution: arrange the highest improvement first.
sorted_students = students.sort_values("Improvement", ascending=False)
print(sorted_students[["Name", "Improvement"]])
            """,
        )
    else:
        set_source(
            cells,
            "# TODO 1: calculate the average Quiz 1 score.",
            """
# TODO 1: choose, print, and average the Quiz 1 column.
quiz1_scores = students[____]
print(quiz1_scores)
average_quiz1 = students[____].____()
print(average_quiz1)
            """,
        )
        set_source(
            cells,
            "# TODO 2: keep rows where Quiz 2 is above 80.",
            """
# TODO 2: choose the column, comparison, and number.
above_80 = students[students[____] ____ ____]
print(above_80)
            """,
        )
        set_source(
            cells,
            "# TODO 3: subtract Quiz 1 from Quiz 2.",
            """
# TODO 3: choose the new column, source columns, and operator.
students[____] = students[____] ____ students[____]
print(students[[____, ____, ____, ____]])
            """,
        )
        set_source(
            cells,
            "# TODO 4: arrange the highest improvement first.",
            """
# TODO 4: choose the sort column and direction. The method is provided.
sorted_students = students.sort_values(____, ascending=____)
print(sorted_students[[____, ____]])
            """,
        )

    set_source(
        cells,
        "## NumPy: CCA Attendance",
        """
## NumPy: CCA Attendance — Slides 17–20

NumPy is the numerical foundation used by many data tools. Here it helps us calculate across several attendance values and create regular x-axis coordinates without typing every number manually.
        """,
    )
    insert_after(
        cells,
        "Output: Mean 24.2, maximum 30, and minimum 18.",
        [
            nbformat.v4.new_code_cell(
                """session_numbers = np.arange(1, 6)
even_positions = np.linspace(0, 1, 5)

print("arange:", session_numbers)
print("linspace:", even_positions)"""
            ),
            nbformat.v4.new_markdown_cell(
                "Output: `np.arange(1, 6)` creates `[1, 2, 3, 4, 5]` using a fixed step; `np.linspace(0, 1, 5)` creates five evenly spaced values from 0 to 1."
            ),
        ],
    )
    set_source(
        cells,
        "## matplotlib: Seeing Patterns",
        """
## matplotlib: Seeing Patterns — Slides 21–28

We are now turning data into graphs. Choose the chart from the question:

- **Bar chart:** compare categories.
- **Line chart:** track change across an ordered sequence.
- **Scatter plot:** compare two numerical variables.

After every chart, ask: **What does this chart tell us?**
        """,
    )
    set_source(
        cells,
        'sessions = ["S1", "S2", "S3", "S4", "S5"]',
        """
session_labels = ["S1", "S2", "S3", "S4", "S5"]
plt.plot(session_numbers, attendance)
plt.xticks(session_numbers, session_labels)
plt.title("CCA Attendance by Session")
plt.xlabel("Session")
plt.ylabel("Attendance")
plt.show()
        """,
    )
    set_source(
        cells,
        "## Activity 2: Most Popular Food",
        """
## Activity 2: Most Popular Food — Slides 29–30

**Attempt time: 6 minutes**

Create a bar chart, add the title `Food Orders`, label the axes `Food` and `Number of Orders`, identify the tallest bar, and write one insight.

Complete Cells 54 and 56. The speaker will call 2 minutes remaining.
        """,
    )
    if not completed:
        set_source(
            cells,
            "# TODO: complete the plotting labels.",
            """
# TODO: choose the plotting method, columns, title, and labels.
plt.____(food[____], food[____])
plt.____(____)
plt.____(____)
plt.____(____)
plt.show()
            """,
        )
    set_source(cells, "## seaborn: Cleaner Defaults", "## seaborn: Cleaner Defaults — Slides 31–32\n\nSame data, same question. matplotlib offers direct control; seaborn often gives cleaner defaults for labelled data. We will recreate only the food-orders chart, not start a separate seaborn lecture.")
    set_source(
        cells,
        "## Wrap-up — Slides 31–32",
        """
## Wrap-up — Slides 33–37

**Question → Data → Code → Output/Chart → Insight**

- pandas: create, select, filter, summarise, and calculate table columns.
- NumPy: numerical calculations and regular plotting coordinates.
- matplotlib: bar, line, and scatter charts.
- seaborn: a cleaner plotting alternative.

Today we looked for patterns. Next week, machine learning uses patterns to make predictions. Download the attendee notebook and complete the Workshop 2 feedback form before leaving.
        """,
    )

    assert len(cells) == 61, f"{path} should have 61 cells, found {len(cells)}"
    nbformat.validate(notebook)
    nbformat.write(notebook, path)


for notebook_path, is_completed in NOTEBOOKS:
    revise(notebook_path, is_completed)
    print(f"Revised {notebook_path} to 61 cells")
