# Content Document

**Workshop Name:** AI Don't Know Workshop 2  
**Focus:** Data Analytics and Visualisation  
**Speakers:** Alson, Murugan  
**Content Document:** Lucas  
**Slides:** Khant, to be created from this content document  
**Duration:** 2 hours, 22 July, 3-5pm  

---

## 1. Workshop Overview

Workshop 2 teaches attendees how to use Python to explore small datasets, calculate simple summaries, create basic charts, and explain insights in plain English.

- Workshop 1 taught Python foundations.
- Workshop 2 uses Python to ask and answer simple questions from data.
- Workshop 3 will build on this by showing how machine learning uses data patterns to make predictions.

**Core teaching loop:**

> Question -> Data -> Code -> Output/Chart -> Insight

The workshop should feel like one guided investigation, rather than four separate lessons on pandas, NumPy, matplotlib, and seaborn.

---

## 2. Target Audience

Mostly Year 1 beginners who attended Workshop 1 or have very basic Python exposure. Treat attendees as beginners even if some have prior coding experience.

- Assume they know variables, lists, simple arithmetic, `print()`, and basic `if` statements.
- Do not assume they know pandas, NumPy, matplotlib, seaborn, statistics, CSV handling, or data cleaning.
- Use tiny datasets first so the idea is visible before code becomes complicated.
- Keep all explanations tied to a simple question that the data can answer.

---

## 3. Learning Outcomes

By the end of the workshop, attendees should be able to:

- Create and read a simple pandas DataFrame.
- Select columns and filter rows.
- Calculate simple summaries such as average, minimum, maximum, and total.
- Create a new calculated column.
- Choose a suitable chart for a simple question.
- Create basic bar, line, and scatter plots using matplotlib.
- Use seaborn to make a cleaner version of a simple chart.
- Explain one insight from a dataset in plain English.

---

## 4. Required Setup / Materials

### Participant setup

- Python installed.
- VS Code, Jupyter Notebook, Google Colab, or another beginner-friendly editor.
- Small sample datasets written directly inside the notebook.
- No external CSV at the start, to avoid file path issues.

### Workshop files

- `AIDK_W2_Workshop.ipynb`
  - Attendee notebook containing live demonstrations, guided TODOs, and activity cells.
- `AIDK_W2_Workshop_Completed.ipynb`
  - Completed speaker and facilitator reference notebook containing all solutions and expected outputs.
- `requirements.txt`
  - Required Python libraries.
- `README.md`
  - Short setup and running instructions.

### Required libraries

```bash
pip install pandas numpy matplotlib seaborn
```

### Python imports

```python
import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

plt.rcParams.update({
    "figure.figsize": (9, 5.5),
    "font.size": 14,
    "axes.titlesize": 18,
    "axes.labelsize": 15,
    "xtick.labelsize": 13,
    "ytick.labelsize": 13,
})

print(f"Workshop setup ready — Python {sys.version_info.major}.{sys.version_info.minor}")
```

---

## 5. Full Workshop Flow With Rough Timings

**Total duration:** 2 hours

| Time | Section | Content | Materials | Speaker |
|---|---|---|---|---|
| 0-8 mins | Recap + Workshop Goal | Connect Workshop 1 Python basics to data work.<br><br>Set the goal: use Python to answer simple questions from data.<br><br>Preview the connection between Workshops 2 and 3. | Slides 1-3<br>`AIDK_W2_Workshop.ipynb` | Alson |
| 8-18 mins | How Data Analytics Works | Introduce the loop: question, data, calculation, visualisation, insight.<br><br>Use simple examples such as scores, CCA attendance, food orders, and survey results.<br><br>Emphasise: start with the question, not the code. | Slides 4-6<br>Small example table | Alson |
| 18-36 mins | pandas Tables | Create a small DataFrame.<br><br>Read rows and columns.<br><br>Select columns, filter rows, calculate a mean, and add a calculated column.<br><br>Dataset: student scores. | Slides 7-12<br>Live demo in attendee notebook | Alson |
| 36-51 mins | Hands-on Activity 1: Student Scores | **Attempt time: 10 minutes**<br>**Possible solution walkthrough: 5 minutes**<br><br>Find the average Quiz 1 score.<br>Find students who scored above 80 in Quiz 2.<br>Add an `Improvement` column.<br>Identify who improved the most.<br>Write one plain-English insight. | Slides 13-15<br>`AIDK_W2_Workshop.ipynb`<br>`AIDK_W2_Workshop_Completed.ipynb` | Alson lead<br>Murugan facilitate |
| 51-61 mins | Break / Buffer | Give attendees time to catch up.<br><br>Facilitators help anyone with errors.<br><br>Do not introduce new content here. | Slide 16 | Both |
| 61-71 mins | Simple Calculations + Light NumPy | Use CCA attendance numbers.<br><br>Show `np.array()`, `np.mean()`, `np.max()`, and `np.min()`.<br><br>Position NumPy as a helper for numerical calculations.<br><br>Avoid advanced arrays or matrix content. | Slides 17-19<br>Live demo in attendee notebook | Murugan |
| 71-91 mins | matplotlib Visualisation | Teach chart choice first.<br><br>Bar chart: compare categories.<br>Line chart: show change over time.<br>Scatter plot: compare two numerical variables.<br><br>Datasets: food orders, CCA attendance, study hours vs quiz score. | Slides 20-26<br>Live demo in attendee notebook | Murugan |
| 91-101 mins | Hands-on Activity 2: Food Orders Chart | **Attempt time: 6 minutes**<br>**Possible solution walkthrough: 4 minutes**<br><br>Create a bar chart.<br>Add a title and axis labels.<br>Identify the most popular food item.<br>Write one chart insight. | Slides 27-28<br>`AIDK_W2_Workshop.ipynb`<br>`AIDK_W2_Workshop_Completed.ipynb` | Murugan lead<br>Alson facilitate |
| 101-106 mins | seaborn Cleaner Charts | Show seaborn as a cleaner plotting option.<br><br>Recreate one bar chart or scatter plot using seaborn.<br><br>Keep this short and avoid deep seaborn teaching. | Slides 29-30<br>Live demo in attendee notebook | Murugan |
| 106-112 mins | Wrap-up + Link to Workshop 3 | Recap the data-question loop.<br><br>Today: find patterns from data.<br>Next week: machine learning uses patterns to make predictions. | Slides 31-32 | Alson / Murugan |
| 112-120 mins | Q&A | Answer attendee questions and reinforce the question-to-insight loop. | Slide 32 | Alson / Murugan |

---

## 6. Section-by-Section Content

### Section 1: Recap + Workshop Goal

- Remind attendees that Workshop 1 covered Python foundations.
- Frame today as using Python to answer questions from data, not memorising libraries.
- Show beginner-friendly questions:
  - Which student improved the most?
  - Which food item sold the most?
  - Does studying more seem linked to higher scores?

**Speaker note:** Do not spend too long on recap. Get into a simple data example quickly.

---

### Section 2: How Data Analytics Works

- Teach the loop: question, data, calculation, visualisation, insight.
- Use one simple example before any library code.
- Make clear that charts are not just decoration. They help us see answers faster.

**Slide-maker note:** Use one slide with the five-step loop and one small example table.

---

### Section 3: pandas Tables

- Introduce pandas as the tool used for working with tables in Python.
- Use the student scores dataset.
- Teach:
  - `pd.DataFrame()`
  - `df.head()`
  - selecting a column
  - filtering rows
  - `.mean()`
  - creating a new column
  - optionally, `.sort_values()`
- Do not teach too many pandas functions. The goal is basic table reading and simple analysis.

**Speaker note:** Explain each line by the question it answers, not by library internals.

---

### Section 4: Hands-on Activity 1

Attendees answer questions from the student scores dataset.

#### Tasks

- Calculate the average Quiz 1 score.
- Find students who scored above 80 in Quiz 2.
- Create an `Improvement` column.
- Identify who improved the most.
- Write one plain-English insight.

#### Attempt time: 10 minutes

During the attempt:

- Display the tasks and the 10-minute attempt time clearly.
- Attendees complete the TODO or fill-in-the-blank cells in the workshop notebook.
- Give a verbal reminder when 5 minutes remain and again when 2 minutes remain.
- Facilitators help with syntax errors without immediately revealing the full solution.

#### Possible solution walkthrough: 5 minutes

Walkthrough order:

1. Calculate the average Quiz 1 score using `students["Quiz1"].mean()`.
2. Filter students whose Quiz 2 score is above 80.
3. Create the `Improvement` column using Quiz 2 minus Quiz 1.
4. Sort the table by `Improvement` in descending order.
5. Point out that Chen and Ethan both improved by 10 points, so there is a tie.

**Speaker note:** Present this as one possible solution, not the only valid solution. Explain what each line answers and show the output after each step.

**Facilitator note:** Most beginner issues will be syntax mistakes, column-name typos, missing imports, or missing brackets.

---

### Section 5: Simple Calculations + Light NumPy

- Use CCA attendance numbers.
- Show that NumPy helps calculate over many numbers quickly.
- Teach only:
  - `np.array()`
  - `np.mean()`
  - `np.max()`
  - `np.min()`
- Avoid dimensions, broadcasting, matrix operations, and advanced indexing.

**Speaker note:** Keep NumPy short. It is a supporting tool, not a full topic for this workshop.

---

### Section 6: matplotlib Visualisation

- Teach chart choice before chart code.
- Bar chart: compare categories.
- Line chart: show change over time.
- Scatter plot: compare two numerical variables.
- Teach:
  - `plt.bar()`
  - `plt.plot()`
  - `plt.scatter()`
  - `plt.title()`
  - `plt.xlabel()`
  - `plt.ylabel()`
  - `plt.show()`

**Speaker note:** After every chart, ask: "What does this chart tell us?"

---

### Section 7: Hands-on Activity 2

Attendees create a food-orders bar chart.

#### Tasks

- Create a bar chart.
- Add a title and axis labels.
- Identify the most popular food item.
- Write one chart insight.

#### Attempt time: 6 minutes

During the attempt:

- Display the question and attempt time clearly.
- Attendees complete the chart code in the workshop notebook.
- Give a verbal reminder when 2 minutes remain.
- Facilitators mainly help with column names, brackets, and plotting syntax.

#### Possible solution walkthrough: 4 minutes

Walkthrough order:

1. Use `plt.bar()` with the `Food` and `Orders` columns.
2. Add a clear chart title.
3. Add labels for both axes.
4. Display the chart using `plt.show()`.
5. Ask attendees to identify the highest bar.
6. State the insight: Chicken Rice received the most orders.

**Speaker note:** Do not spend time styling the chart. The purpose is to answer the data question clearly.

**Facilitator note:** Do not over-focus on making the chart attractive. Focus on answering the question.

---

### Section 8: seaborn Cleaner Charts

- Show seaborn as a cleaner plotting option.
- Recreate one matplotlib chart using `sns.barplot()` or `sns.scatterplot()`.
- Explain:
  - matplotlib gives more control.
  - seaborn often provides cleaner defaults with less code.
- Do not teach heatmaps, pairplots, distributions, palettes, or themes in detail.

**Slide-maker note:** Put the matplotlib and seaborn versions side by side only if both remain readable.

---

### Section 9: Wrap-up + Workshop 3 Link

- Recap the loop: question, data, code, output/chart, insight.
- Connect to Workshop 3:
  - Today, we looked for patterns.
  - Next week, machine learning uses patterns to make predictions.
- End with Q&A.
- Remind attendees that they do not need to memorise every function.

**Speaker note:** Keep the ending simple. The aim is readiness for Workshop 3, not mastery of every library.

---

## 7. Small Sample Data Examples

Use these small datasets in the workshop notebooks and slides. Keep them visible and readable for beginners.

### Dataset A: Student Scores

| Name | Class | Quiz1 | Quiz2 |
|---|---|---:|---:|
| Alex | A | 72 | 78 |
| Bella | A | 85 | 88 |
| Chen | B | 60 | 70 |
| Deepa | B | 90 | 92 |
| Ethan | A | 55 | 65 |

```python
student_data = {
    "Name": ["Alex", "Bella", "Chen", "Deepa", "Ethan"],
    "Class": ["A", "A", "B", "B", "A"],
    "Quiz1": [72, 85, 60, 90, 55],
    "Quiz2": [78, 88, 70, 92, 65]
}

students = pd.DataFrame(student_data)
```

### Dataset B: CCA Attendance

| Session | Attendance |
|---|---:|
| S1 | 20 |
| S2 | 25 |
| S3 | 18 |
| S4 | 30 |
| S5 | 28 |

```python
attendance = np.array([20, 25, 18, 30, 28])

print(np.mean(attendance))
print(np.max(attendance))
print(np.min(attendance))
```

### Dataset C: Food Orders

| Food | Orders |
|---|---:|
| Chicken Rice | 35 |
| Nasi Lemak | 28 |
| Pasta | 18 |
| Burger | 22 |
| Sandwich | 15 |

```python
food_data = {
    "Food": ["Chicken Rice", "Nasi Lemak", "Pasta", "Burger", "Sandwich"],
    "Orders": [35, 28, 18, 22, 15]
}

food = pd.DataFrame(food_data)
```

### Dataset D: Study Hours vs Quiz Score

| Student | Hours Studied | Quiz Score |
|---|---:|---:|
| Alex | 2 | 65 |
| Bella | 4 | 82 |
| Chen | 1 | 58 |
| Deepa | 5 | 90 |
| Ethan | 3 | 75 |

```python
study_data = {
    "Student": ["Alex", "Bella", "Chen", "Deepa", "Ethan"],
    "Hours Studied": [2, 4, 1, 5, 3],
    "Quiz Score": [65, 82, 58, 90, 75]
}

study = pd.DataFrame(study_data)
```

---

## 8. Hands-on Activities

### Activity 1: Who Improved the Most?

**Dataset:** Student Scores  
**Question:** Which student improved the most from Quiz 1 to Quiz 2?  
**Attempt time:** 10 minutes  
**Possible solution walkthrough:** 5 minutes  

#### Tasks

- Calculate the average Quiz 1 score.
- Filter students who scored above 80 in Quiz 2.
- Create an `Improvement` column.
- Sort by `Improvement`.
- Write one plain-English insight.

#### Expected outputs

- The average Quiz 1 score.
- A filtered table of students who scored above 80 in Quiz 2.
- A new `Improvement` column.
- A table sorted by `Improvement`.
- A plain-English statement identifying the highest improvement.

#### Suggested hints

1. Which column contains the Quiz 1 scores?
2. How can Quiz 1 be subtracted from Quiz 2?
3. Which function can arrange the highest improvement first?

#### Possible solution

```python
average_quiz1 = students["Quiz1"].mean()
print(average_quiz1)

above_80 = students[students["Quiz2"] > 80]
print(above_80)

students["Improvement"] = students["Quiz2"] - students["Quiz1"]
print(students)

sorted_students = students.sort_values("Improvement", ascending=False)
print(sorted_students)
```

**Expected insight:** Chen and Ethan had the highest improvement, with both improving by 10 points.

---

### Activity 2: Which Food Item Was Most Popular?

**Dataset:** Food Orders  
**Question:** Which food item had the most orders?  
**Attempt time:** 6 minutes  
**Possible solution walkthrough:** 4 minutes  

#### Tasks

- Create a bar chart.
- Add a title and axis labels.
- Identify the highest bar.
- Write one insight.

#### Expected outputs

- A bar chart showing food items against number of orders.
- A clear chart title.
- Labels for both axes.
- A plain-English insight based on the tallest bar.

#### Suggested hints

1. Which column should appear on the x-axis?
2. Which column should determine the bar heights?
3. What does the tallest bar represent?

#### Possible solution

```python
plt.bar(food["Food"], food["Orders"])
plt.title("Food Orders")
plt.xlabel("Food")
plt.ylabel("Number of Orders")
plt.show()
```

**Expected insight:** Chicken Rice had the highest number of orders.

---

### Mini Wrap-up Challenge: Small Student Survey

Use this only if there is time after the main activities.

#### Questions

- Who had the highest quiz score?
- Does more study time seem related to quiz score?
- Which favourite food appeared most often?

**Purpose:** Link data patterns to Workshop 3 machine learning.

---

## 9. Speaker Notes

- Start every code block with the question it answers.
- Run code slowly and explain the output before moving on.
- Ask attendees to predict the output before running simple lines.
- After each chart, ask: "What does this tell us?"
- Do not over-explain library internals. Keep the focus on the data question.
- Use beginner language:
  - "table" before introducing "DataFrame"
  - "column" before introducing "Series"
  - "chart" instead of "visualisation" when clearer
- State the attempt time before every activity begins.
- Keep the activity instructions visible during the entire attempt period.
- Give attendees a halfway reminder and a final warning before time ends.
- Do not reveal the completed solution immediately when someone gets stuck. Give a small hint first.
- Present walkthroughs as a possible solution because valid code may differ.
- During each walkthrough, run the solution step by step and explain the output after every important line.
- End each walkthrough with the plain-English insight, not only the completed code.
- Keep the completed notebook open as a backup, but use the attendee notebook during the main live demonstration.
- During activities, facilitators should help with imports, indentation, spelling of column names, and missing brackets.
- If timing slips, cut extra seaborn explanation first. Do not cut Activity 1 or Activity 2.

---

## 10. Slide-Maker and Notebook-Maker Notes

Slides should support the live demonstration. They should not become a full programming textbook.

### General slide rules

- Each concept slide should have:
  - one question
  - one small table or short code snippet
  - one output, chart, or insight
- Avoid large code blocks.
- Put the full runnable code in the workshop notebooks instead of overcrowding the slides.
- Use the same datasets throughout the workshop so attendees do not repeatedly relearn context.
- Use clear callouts:
  - Question
  - Data
  - Code
  - Output/Chart
  - Insight
- Use a side-by-side comparison for matplotlib and seaborn only if it stays readable.
- Suggested slide count: around 30 slides.
- Do not introduce CSV loading in the main teaching flow unless there is spare time.

### Slide and notebook synchronisation

- The slide order and notebook section order must match.
- Notebook headings should reference the matching slide or slide range.
- Every live-demo slide containing code must have the same code in the notebook.
- Immediately after every live-demo code cell, add a short Markdown line beginning with `Output:`.
- For text or table code, the `Output:` line should state what attendees should see.
- For chart code, the `Output:` line should describe the expected chart and its main visible pattern.
- Do not reveal completed activity answers in the attendee notebook before the solution walkthrough.
- The completed notebook must match the code, outputs, and charts shown during the walkthrough.

### Hands-on activity slide pattern

Each hands-on activity should contain:

1. **Challenge slide**
   - Data question
   - Tasks
   - Clearly displayed attempt time
   - Notebook section or cells to complete

2. **Hint or progress-check slide**
   - One or two small hints
   - Do not reveal the complete answer

3. **Possible solution walkthrough slide**
   - Completed code
   - Expected output or chart
   - Plain-English insight

For Activity 2, the hint may be given verbally because only two slides are allocated.

### Suggested slide structure

| Slides | Purpose |
|---|---|
| 1-3 | Welcome, Workshop 1 recap, Workshop 2 goal |
| 4-6 | Data analytics loop and examples |
| 7-12 | pandas table basics |
| 13 | Activity 1 question, tasks, and 10-minute attempt time |
| 14 | Activity 1 hints or progress check |
| 15 | Activity 1 possible solution, outputs, and final insight |
| 16 | Ten-minute break and exact resume time |
| 17-19 | Light NumPy calculations |
| 20-26 | matplotlib chart types and demonstrations |
| 27 | Activity 2 question, tasks, and 6-minute attempt time |
| 28 | Activity 2 possible solution, completed chart, and final insight |
| 29-30 | seaborn cleaner-chart example |
| 31-32 | Wrap-up, Workshop 3 preview, and Q&A |

---

## 11. Dry Run Checklist

### Technical

- [ ] All notebook cells run from top to bottom in a fresh environment.
- [ ] Required libraries install successfully.
- [ ] The attendee notebook contains blanks or TODOs that are not too difficult for beginners.
- [ ] The completed notebook contains all completed answers and expected outputs.
- [ ] No external CSV path is required for the main workshop.
- [ ] Every live-demo section includes the correct `Output:` line.
- [ ] The completed notebook matches the code and outputs shown in the slides.

### Activities

- [ ] Activity 1 uses exactly 10 minutes of attempt time and no more than 5 minutes for the walkthrough.
- [ ] Activity 2 uses exactly 6 minutes of attempt time and no more than 4 minutes for the walkthrough.
- [ ] Attempt times are clearly visible on the relevant slides.
- [ ] The attendee notebook does not reveal completed answers before the walkthrough.
- [ ] Every activity has a clear expected output and expected insight.
- [ ] Speakers have rehearsed the possible solution walkthroughs step by step.
- [ ] Speakers know when to give halfway and final-time reminders.
- [ ] Each walkthrough ends with an interpretation of the result.

### Delivery and timing

- [ ] Slides match the content document timing and order.
- [ ] Speakers know which parts are live demonstrations and which parts are attendee activities.
- [ ] Facilitators know the common errors to watch for: missing imports, column-name spelling, brackets, and indentation.
- [ ] Both activities fit within the overall 2-hour workshop during the dry run.
- [ ] The workshop includes the planned break and buffer.
- [ ] seaborn remains a short cleaner-chart example, not a full lesson.
- [ ] The wrap-up clearly links Workshop 2 to Workshop 3.

---

## Final Content Direction

Teach data questions first. Use pandas, NumPy, matplotlib, and seaborn only as tools for answering those questions.
