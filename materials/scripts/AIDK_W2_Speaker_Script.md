# AI Don’t Know Workshop 2 Speaker Script

## Workshop information

- **Workshop:** AI Don’t Know Workshop 2
- **Topic:** Data Analytics and Visualisation
- **Date:** 22 July 2026
- **Time:** 7:00 PM to 9:00 PM
- **Delivery:** Online
- **Speakers:** Alson and Murugan
- **Duration:** 2 hours
- **Slides:** 44
- **Attendee notebook:** `notebooks/AIDK_W2_Workshop.ipynb`
- **Completed notebook:** `notebooks/AIDK_W2_Workshop_Completed.ipynb`

The teaching loop for the whole workshop is **Question → Data → Code → Output/Chart → Insight**. Start each demonstration with the question, explain what the data contains, run only the matching cell, read the output, and end with a plain-English conclusion.

## How to use this script

The paragraphs under **Suggested Script** are speaking guidance, not lines that must be memorised. Keep the meaning and key wording, but allow natural pauses and attendee responses. **Actions** are stage directions. **Expected Output** is the speaker’s verification cue. **Speaker Notes** are private reminders and should not be read aloud.

## Before the Workshop

- Open `index.html` or the deployed slide deck and confirm all 44 active slides are present.
- Open `notebooks/AIDK_W2_Workshop.ipynb` for live demonstrations.
- Keep `notebooks/AIDK_W2_Workshop_Completed.ipynb` available as backup.
- Confirm pandas, NumPy, matplotlib, and seaborn are installed from `requirements.txt`.
- Run the notebook imports and confirm the setup message appears.
- Run the completed notebook from top to bottom and confirm all chart cells work.
- Confirm browser navigation, slide hashes, quiz reveals, countdown controls, and Copy controls.
- Confirm Activity 1 Cells 23, 25, 27, 29, and 31 remain incomplete in the attendee notebook.
- Confirm Activity 2 Cells 54 and 56 remain incomplete in the attendee notebook.
- Ensure both speakers know the handover after Slide 24 and the return to Alson at Slide 41.
- Keep the completed activity answers off the projector until each official walkthrough.
- If using background music during activities, keep it low and stop it before each walkthrough.

## Speaker Handover Summary

| Slides | Section | Lead | Supporting Role |
|---:|---|---|---|
| 1–23 | Opening, SPAI/setup prelude, recap, analytics thinking, pandas, Activity 1 | Alson | Murugan watches chat/notebook readiness and facilitates Activity 1 |
| 24 | Ten-minute break | Both | Both help attendees resolve notebook issues |
| 25–40 | NumPy, matplotlib, Activity 2, seaborn | Murugan | Alson monitors attendees and facilitates Activity 2 |
| 41–44 | Recap, photo, Q&A, and take-home notebook | Alson | Murugan supports the recap, answers questions, and manages closing logistics |

## Timing Summary

| Start–end minute | Section | Slides | Lead |
|---:|---|---:|---|
| 0–8 | Opening, SPAI/setup prelude, Workshop 1 recap, Workshop 2 goal | 1–11 | Alson |
| 8–18 | Data analytics thinking | 12–14 | Alson |
| 18–36 | pandas | 15–20 | Alson |
| 36–51 | Activity 1 attempt and walkthrough | 21–23 | Alson |
| 51–61 | Break | 24 | Both |
| 61–71 | NumPy | 25–28 | Murugan |
| 71–91 | matplotlib | 29–36 | Murugan |
| 91–101 | Activity 2 attempt and walkthrough | 37–38 | Murugan |
| 101–106 | seaborn | 39–40 | Murugan |
| 106–112 | Wrap-up and group photo | 41–42 | Alson with Murugan support |
| 112–118 | Q&A | 43 | Alson and Murugan |
| 118–120 | Take-home notebook and closing | 44 | Alson with Murugan support |

The first nine slides are a brisk welcome/setup prelude. If attendees already completed setup, move through Slides 2–9 quickly and protect the teaching and activity times.

## Slide-by-Slide Script

## Slide 1 — AI Don't Know: Workshop 2

**Speaker:** Alson
**Planned time:** 1 minute
**Notebook:** Start Here, Cells 1–4
**Delivery type:** Explanation

### Purpose

Welcome attendees, identify the session, and set a calm beginner-friendly tone.

### Suggested Script

“Hi everyone, welcome to AI Don’t Know Workshop 2. Today we are working with data analytics and visualisation. We will use small tables and charts to answer questions, and we will keep returning to one process: question, data, code, output or chart, then insight. You do not need to memorise four libraries tonight. The goal is to understand what question each piece of code helps us answer.”

### Actions

- Point out the follow-along link and confirm attendees can see the shared screen.
- Ask for a quick reaction or show of hands from anyone who attended Workshop 1.
- Advance once the room is settled.

### Expected Output

No notebook output. Attendees know the topic, pace, and purpose.

### Speaker Notes

- Avoid a long welcome; the setup prelude contains several short slides.
- Do not promise mastery of pandas, NumPy, matplotlib, or seaborn.
- Timing warning: move on after one minute.

## Slide 2 — About SPAI

**Speaker:** Alson
**Planned time:** 30 seconds
**Notebook:** None
**Delivery type:** Explanation

### Purpose

Give the minimum context needed to identify SPAI as the workshop organiser.

### Suggested Script

“Before we begin, a quick introduction. SPAI is a student community that makes AI more approachable through practical workshops, events, and projects. We are students too, so please ask questions whenever something is unclear.”

### Actions

- Advance without inviting a long club discussion.

### Expected Output

No notebook output.

### Speaker Notes

- Keep this concise; more SPAI context appears on the next slides.

## Slide 3 — Who We Are

**Speaker:** Alson
**Planned time:** 30 seconds
**Notebook:** None
**Delivery type:** Explanation

### Purpose

Reassure beginners that the workshop is open and practical.

### Suggested Script

“Our sessions are open to students from any course or school. The important thing is willingness to try. We focus on practical first exposure: see an idea, run it, ask questions, and build confidence from there.”

### Actions

- Gesture briefly to workshops, events, community, and projects.

### Expected Output

No notebook output.

### Speaker Notes

- Do not read every bullet or orbital label.
- Reinforce that beginners are welcome.

## Slide 4 — Previous Events

**Speaker:** Alson
**Planned time:** 30 seconds
**Notebook:** None
**Delivery type:** Explanation

### Purpose

Show that the workshop follows SPAI’s established hands-on format.

### Suggested Script

“These are a few sessions SPAI has run before. The topics differ, but the pattern is the same: a short explanation, a practical example, and time for you to try it yourself. That is also how tonight will work.”

### Actions

- Point to the three event cards, then advance.

### Expected Output

No notebook output.

### Speaker Notes

- Do not explain the past events in detail.

## Slide 5 — The full path in one view

**Speaker:** Alson
**Planned time:** 30 seconds
**Notebook:** Start Here, Cell 1
**Delivery type:** Explanation

### Purpose

Connect Workshop 2 to the three-workshop learning path.

### Suggested Script

“The series moves from Python foundations, to understanding data, to a guided machine-learning workflow. Tonight is the middle step. We already have basic Python values; now we will organise them, calculate with them, and turn them into evidence.”

### Actions

- Point to the highlighted Workshop 2 row.

### Expected Output

No notebook output.

### Speaker Notes

- Do not explain the Workshop 3 implementation yet.

## Slide 6 — What you should leave with

**Speaker:** Alson
**Planned time:** 30 seconds
**Notebook:** Start Here, Cell 1
**Delivery type:** Explanation

### Purpose

Set realistic learning expectations across the series.

### Suggested Script

“Success tonight is not remembering every function. Success is being able to look at a small table, choose useful columns, run a calculation or chart, and explain what the result means. Keep that bigger picture in mind.”

### Actions

- Emphasise the Workshop 2 and “All” takeaway rows.

### Expected Output

No notebook output.

### Speaker Notes

- Avoid reading all four rows word for word.

## Slide 7 — Make sure your notebook can run

**Speaker:** Alson
**Planned time:** Pre-session check; up to 1 minute live
**Notebook:** Start Here, Cells 1–4
**Delivery type:** Setup

### Purpose

Confirm that attendees have a working notebook environment without turning setup into a front-of-room debugging session.

### Suggested Script

“Please open `AIDK_W2_Workshop.ipynb` now. You can use VS Code, Jupyter, Colab, or another notebook editor. If the notebook does not open or your screen looks very different, raise your hand or message us. A facilitator will help while we keep the main session moving.”

### Actions

- Ask attendees to stop at the notebook title.
- Murugan checks for setup questions privately.

### Expected Output

The attendee notebook is open at **Start Here**.

### Speaker Notes

- Do not troubleshoot one machine from the shared screen.
- If most attendees are ready, continue and let Murugan assist individuals.

## Slide 8 — Install the notebook tools once

**Speaker:** Alson
**Planned time:** Pre-session check; up to 1 minute live
**Notebook:** Start Here, Cell 3
**Delivery type:** Setup / Live demo

### Purpose

Confirm the required packages and Python installation.

### Suggested Script

“The install command is only needed if a package is missing. In the notebook, run Cell 3, the setup cell. It imports pandas, NumPy, matplotlib, and seaborn, applies readable chart settings, and prints the Python version. If it runs, you are ready.”

### Actions

- Open the attendee notebook.
- Run Cell 3 once.
- Ask attendees to confirm they see the readiness message.

### Expected Output

`Workshop setup ready — Python 3.x`, with the installed minor version, and no import error.

### Speaker Notes

- Important lines: `import ... as ...` gives short library names; `plt.rcParams.update(...)` changes chart readability; `print(...)` confirms setup.
- Do not teach package installation or chart settings here.
- Fallback: “The completed setup output is available in our backup notebook. We will continue, and a facilitator can help resolve the environment issue.”

## Slide 9 — Download the Workshop 2 notebook

**Speaker:** Alson
**Planned time:** Pre-session check; 30 seconds live
**Notebook:** Start Here, Cells 1–4
**Delivery type:** Setup

### Purpose

Direct anyone without the file to the attendee notebook source.

### Suggested Script

“If you already have the attendee notebook open, stay there. If you do not, use the shared workshop link or ask a facilitator for the file. Make sure the filename is `AIDK_W2_Workshop.ipynb`, not the completed answer notebook.”

### Actions

- Do not wait on the placeholder slide if the file has already been distributed.
- Murugan helps anyone who still needs the notebook.

### Expected Output

Attendees have the attendee notebook, not the completed notebook.

### Speaker Notes

- The slide contains a placeholder, so use the actual distributed channel rather than implying the placeholder is clickable.

## Slide 10 — Three quick questions from Workshop 1

**Speaker:** Alson
**Planned time:** 2 minutes
**Notebook:** Start Here, Cells 1–2
**Delivery type:** Explanation / Audience question

### Purpose

Reactivate only the Python ideas needed tonight: variables, dictionaries, and `print()`.

### Suggested Script

“Let’s do three quick checks from Workshop 1. What stores a value under a name? What structure stores key–value pairs? And what does `print()` help us do? Call out an answer or put it in chat before I reveal each row.”

“A variable stores a value. A dictionary stores labelled key–value pairs. `print()` displays a result so we can inspect it. Those three ideas are enough to begin working with small datasets.”

### Actions

- Open each reveal only after attendees predict.
- Keep the recap moving even if the room is quiet.

### Expected Output

Responses: variable; dictionary; display or inspect a result.

### Speaker Notes

- Do not reteach Workshop 1 syntax.
- Timing warning: reveal the answers yourself if responses are slow.

## Slide 11 — Today: find patterns. Next: make predictions.

**Speaker:** Alson
**Planned time:** 2 minutes
**Notebook:** Start Here, Cells 1–2
**Delivery type:** Explanation

### Purpose

State tonight’s goal and the Workshop 3 connection.

### Suggested Script

“Workshop 1 gave us Python foundations. Today we use those foundations to answer questions from data: create a table, calculate summaries, make bar, line, and scatter charts, and explain an insight. Next week we use patterns for prediction. For tonight, focus on the thinking process rather than memorising function names.”

### Actions

- Point to the W2 row, then the W3 row.
- Transition: “Before choosing a library, we need to understand what data analytics means.”

### Expected Output

No notebook output.

### Speaker Notes

- Keep the bridge short here; the exact closing line returns on Slide 43.

## Slide 12 — What does data analytics mean?

**Speaker:** Alson
**Planned time:** 3 minutes
**Notebook:** Ask a Data Question, Cell 5
**Delivery type:** Explanation / Audience question

### Purpose

Define analytics as answering a question with evidence, not as using a particular library.

### Suggested Script

“Our first question is: who seems to be improving? We have three visible rows, but not the whole class. The data gives us evidence, but incomplete evidence can lead to a weak conclusion. Data analytics means starting with a question, using the relevant data, processing or visualising it, and explaining the answer in plain English.”

“From these three rows, who might you guess improved most? Hold that guess lightly—we need the full table before deciding.”

### Actions

- Point from Quiz 1 to Quiz 2 for each visible student.
- Take one quick prediction.

### Expected Output

No code output. The intended conclusion is: the visible excerpt is not enough to decide for the full class.

### Speaker Notes

- Do not reveal Chen and Ethan’s final tie.
- Suitable follow-up: “What additional rows or columns would we need?”

## Slide 13 — One question. Five steps.

**Speaker:** Alson
**Planned time:** 4 minutes
**Notebook:** Ask a Data Question, Cell 5
**Delivery type:** Explanation

### Purpose

Establish the five-step loop used for every later demonstration.

### Suggested Script

“Here is the loop for tonight. First, the question: what is the average Quiz 2 score? Second, the data: the Quiz2 column. Third, the code: Python processes those values with `.mean()`. Fourth, the output: 78.6. Fifth, the insight: the average Quiz 2 score for this group is 78.6.”

“Notice that code is only step three. If we skip the question, we can produce a number without knowing why it matters. If we skip the insight, we leave the audience to interpret the number alone.”

### Actions

- Trace the five steps from left to right.
- Ask: “Which step tells us what the number means?”

### Expected Output

Audience answer: the insight step.

### Speaker Notes

- Say “use Python to process and calculate,” not “ask Python.”
- This is the main conceptual slide; do not rush it.

## Slide 14 — Start with the question, then choose the columns

**Speaker:** Alson
**Planned time:** 3 minutes
**Notebook:** Ask a Data Question, Cell 5
**Delivery type:** Explanation / Audience question

### Purpose

Show how a question determines which columns are useful evidence.

### Suggested Script

“If the question is who improved most, we need a name and two quiz scores. If the question is which food sold most, we need Food and Orders. If the question is whether study time seems linked to scores, we need Hours Studied and Quiz Score.”

“We do not begin by saying, ‘I want to use a scatter plot.’ We begin with the question, choose the evidence, and then choose code or a chart that helps.”

### Actions

- Ask attendees which columns answer the food-order question.
- Transition: “Now let’s build our first labelled table with pandas.”

### Expected Output

Audience answer: Food and Orders.

### Speaker Notes

- Avoid discussing feature selection or advanced terminology.

## Slide 15 — pd.DataFrame()

**Speaker:** Alson
**Planned time:** 3 minutes
**Notebook:** pandas: Student Scores, run Cell 7; read Cell 8
**Delivery type:** Live demo

### Purpose

Introduce pandas, a DataFrame, rows, and labelled columns using the full student table.

### Suggested Script

“Our question is: what information do we have about the students? The data is four labelled lists: Name, Class, Quiz1, and Quiz2. `pd.DataFrame(student_data)` turns those labelled lists into a table.”

“Run Cell 7. Each row is one student record. Each column is one type of information. pandas helps us work with this kind of labelled table without worrying about library internals.”

### Actions

- Run attendee Cell 7.
- Point to the dictionary keys, then the matching table headers.
- Ask attendees to predict the number of rows before running.

### Expected Output

A five-row, four-column DataFrame with Name, Class, Quiz1, and Quiz2 for Alex, Bella, Chen, Deepa, and Ethan.

### Speaker Notes

- Important lines: `student_data = {...}` stores labelled lists; `pd.DataFrame(...)` builds the table; the final `students` displays it.
- Common confusion: the dictionary is the source data; the DataFrame is the table created from it.
- Do not explain indexes or Series internals.
- Fallback: “The completed output is shown on the slide. We will continue with the explanation, and a facilitator can help resolve the notebook issue.”

## Slide 16 — .head()

**Speaker:** Alson
**Planned time:** 3 minutes
**Notebook:** pandas: Student Scores, run Cell 9; read Cell 10
**Delivery type:** Live demo

### Purpose

Teach that rows are records, columns are information, and `.head()` previews a table.

### Suggested Script

“The question is: what does the start of our table look like? `students.head()` shows the first five rows. Predict what happens here when our whole table has exactly five rows.”

“Run Cell 9. We see the full dataset because five is both the default preview size and the number of students. One row represents one student. One column stores one type of information.”

### Actions

- Run attendee Cell 9.
- Highlight Alex’s row and the Quiz1 column on the slide.

### Expected Output

The same five student rows as the full DataFrame.

### Speaker Notes

- Do not discuss index behaviour beyond noting that the leftmost numbers label rows.
- Suitable follow-up: “What would `.head()` help with if the table had 5,000 rows?”
- Fallback: “The slide shows the same five-row preview. We will use that output and continue.”

## Slide 17 — .iloc[] and .loc[]

**Speaker:** Alson
**Planned time:** 3 minutes
**Notebook:** pandas: Student Scores, run Cell 11; read Cell 12
**Delivery type:** Live demo

### Purpose

Introduce position-based and label-based selection before Boolean filtering.

### Suggested Script

“Our question is: how can we select the first two students and the first three pieces of information? In Cell 11, `.iloc[]` selects using numbered positions. The first range chooses rows zero and one, and the second chooses the first three columns.”

“`.loc[]` uses labels. Here we name the columns: Name, Class, and Quiz1. Both routes show Alex and Bella with the same three columns. You do not need to memorise the slicing details tonight—notice the difference between position and label.”

### Actions

- Run attendee Cell 11.
- Point to the two printed tables and ask whether they contain the same records.

### Expected Output

Two identical two-row, three-column tables showing Alex and Bella with Name, Class, and Quiz1.

### Speaker Notes

- Common confusion: the end of an `.iloc` slice is not included, while the shown `.loc` label range includes row label 1. Do not expand this into a slicing lesson.
- Fallback: “Both expected selections are displayed on the slide; we will compare them there.”

## Slide 18 — students[...]

**Speaker:** Alson
**Planned time:** 3 minutes
**Notebook:** pandas: Student Scores, run Cell 13; read Cell 14
**Delivery type:** Live demo

### Purpose

Teach bracket column selection and filtering with a familiar condition.

### Suggested Script

“We have two questions. First: which Quiz 1 values do we have? `students["Quiz1"]` selects that column. Second: which students are in Class B? The condition checks whether each Class value equals B, and the outer brackets keep the matching rows.”

“Before we run Cell 13, predict which names will remain. The output gives all five Quiz 1 scores, followed by Chen and Deepa because their Class value is B.”

### Actions

- Run attendee Cell 13.
- Point out the quotation marks, inner condition, and outer brackets.

### Expected Output

Quiz1 values `72, 85, 60, 90, 55`, then the Class B rows for Chen and Deepa.

### Speaker Notes

- Common beginner issues: `Class` spelling, quotation marks around `B`, and mismatched brackets.
- Do not introduce complex Boolean logic.
- Fallback: “The slide lists the five values and the two matching rows, so we can continue from that expected output.”

## Slide 19 — .mean() / .min() / .max() / .sum()

**Speaker:** Alson
**Planned time:** 3 minutes
**Notebook:** pandas: Student Scores, run Cell 15; read Cell 16
**Delivery type:** Live demo

### Purpose

Show four beginner-friendly summaries of one column without revealing Activity 1 answers.

### Suggested Script

“Our question is: what can the Quiz 2 column tell us? First we select `students["Quiz2"]`. Then `.mean()` gives the average, `.min()` the lowest value, `.max()` the highest, and `.sum()` the total.”

“Predict the highest value before we run Cell 15. The output is Mean 78.6, Minimum 65, Maximum 92, and Sum 393. In plain English: this group’s average Quiz 2 score is 78.6.”

### Actions

- Run attendee Cell 15.
- Read each labelled output once; emphasise the mean insight.

### Expected Output

`Mean: 78.6`, `Minimum: 65`, `Maximum: 92`, and `Sum: 393`.

### Speaker Notes

- Do not explain statistics beyond what each operation answers.
- Timing warning: do not calculate the values manually with the room.
- Fallback: “The completed output is printed on the slide. We will use those four verified values and continue.”

## Slide 20 — students["Total"] = ...

**Speaker:** Alson
**Planned time:** 3 minutes
**Notebook:** pandas: Student Scores, run Cell 17; read Cell 18
**Delivery type:** Live demo

### Purpose

Demonstrate a calculated column without revealing the Improvement solution.

### Suggested Script

“The question is: what is each student’s combined quiz total? The left side names a new column, `Total`. The right side adds Quiz1 and Quiz2 for every row. pandas places each result beside the correct student.”

“Run Cell 17. Alex’s total is 150, Bella’s 173, Chen’s 130, Deepa’s 182, and Ethan’s 120. The important idea is that an existing pair of columns can create a useful new column.”

### Actions

- Run attendee Cell 17.
- Point across one row from the two source scores to Total.
- Ask: “What did this operation help us answer?”

### Expected Output

A table with totals `150, 173, 130, 182, 120` in student order.

### Speaker Notes

- Do not mention or calculate Improvement yet.
- Fallback: “The slide shows the calculated Total column, so we can use it to explain the pattern.”

## Slide 21 — Activity 1: Who improved the most?

**Speaker:** Alson
**Planned time:** First 5 minutes of the 10-minute attempt
**Notebook:** Activity 1, run Cell 21; complete Cells 23, 25, 27, 29, and 31
**Delivery type:** Activity

### Purpose

Launch Activity 1 clearly without solving it.

### Suggested Script

“Our question is: who improved the most from Quiz 1 to Quiz 2? Run Cell 21 first to reset the table. Then complete Cells 23, 25, 27, 29, and 31.”

“Your tasks are to print and average Quiz 1, find Quiz 2 scores above 80, create Improvement as Quiz2 minus Quiz1, sort the highest improvement first, and write one insight. **You have 10 minutes to attempt this.** Try the blanks in order. If you get an error, ask for one small hint rather than the full answer.”

### Actions

- Start the shared 10-minute timer and optional low-volume music.
- Keep the challenge slide visible initially.
- Tell Murugan to begin facilitating and avoid revealing the complete solution.
- At five minutes remaining, move to Slide 22.

### Expected Output

During the attempt: one average, a filtered table, an Improvement column, a descending two-column table, and one unfinished or completed insight. Do not announce answer values yet.

### Speaker Notes

- Murugan may help with column spelling, quotation marks, brackets, operators, and reading errors.
- Murugan must not paste completed lines.
- Timing warning: protect the full 10-minute attempt.

## Slide 22 — Progress check: use the column names

**Speaker:** Alson
**Planned time:** Final 5 minutes of the same attempt
**Notebook:** Activity 1, Cells 23–32
**Delivery type:** Activity / Hints

### Purpose

Give timed reminders and non-solution hints while attendees continue working.

### Suggested Script

“**5-minute reminder:** you have five minutes left. Check that the average starts from Quiz1, the filter compares Quiz2 with 80, Improvement uses the later quiz minus the earlier quiz, and highest first means descending order. These are hints, not the completed lines.”

“**2-minute reminder:** you have two minutes left. If your code is not running, check exact column spelling, quotation marks, and matching brackets. Finish the insight from the output you have.”

### Actions

- Give the 5-minute reminder when the timer reaches 5:00.
- Give the 2-minute reminder at 2:00.
- Murugan continues circulating, one hint at a time.
- Stop the timer and music at zero; return attention to the projector.

### Expected Output

No new official output is revealed. Attendees retain ownership of their attempts.

### Speaker Notes

- Good prompts: “What did you expect?” “Which column answers that task?” “What does the error point to?”
- Do not display the completed notebook until Slide 23.

## Slide 23 — Possible solution: Chen and Ethan tie

**Speaker:** Alson
**Planned time:** 5 minutes
**Notebook:** Completed notebook, run Cells 23, 25, 27, and 29; read Cell 31
**Delivery type:** Walkthrough / Live demo

### Purpose

Walk through one possible solution step by step and finish with the insight.

### Suggested Script

“This is **one possible solution**, not the only correct solution. First, `students["Quiz1"].mean()` answers the average question. Run completed Cell 23. **Average Quiz 1: 72.4.**”

“Next, the Quiz2 condition keeps values above 80. Run Cell 25. The matching students are **Bella and Deepa**.”

“Then we create Improvement by subtracting Quiz1 from Quiz2. Run Cell 27. Finally, `sort_values(..., ascending=False)` puts the largest improvement first. Run Cell 29. **Chen and Ethan** both improved by 10 points. **It is a tie.**”

“What did each operation help answer? Mean answered the average, filtering found matching students, subtraction measured change, and sorting brought the largest change to the top.”

### Actions

- Open the completed notebook only now.
- Run each solution cell separately and pause on its output.
- Ask attendees to compare with their own work and correct it themselves.

### Expected Output

- Average Quiz 1: `72.4`.
- Quiz 2 above 80: Bella (`88`) and Deepa (`92`).
- Improvements: Alex `6`, Bella `3`, Chen `10`, Deepa `2`, Ethan `10`.
- Descending order begins with Chen and Ethan at `10`.
- Insight: Chen and Ethan improved the most, by 10 points.

### Speaker Notes

- Do not call one row the single winner.
- Fallback: “The verified values and tie are shown on the slide. We will continue with that output, and a facilitator can resolve the notebook issue during the break.”
- Handover line: “We’ve used pandas to answer questions from a labelled table. After the break, Murugan will show how NumPy calculates with number arrays and how we turn results into charts.”

## Slide 24 — 10-minute break

**Speaker:** Both
**Planned time:** 10 minutes
**Notebook:** Break / Buffer, Cell 33
**Delivery type:** Break / Handover

### Purpose

Provide a real break, allow notebook catch-up, and transfer the lead to Murugan.

### Suggested Script

“We’ll take a **10-minute break** now and resume at 8:01 PM. Please do not start the NumPy section yet. If your notebook has an error, leave it open and ask either of us for help. We’ll give a two-minute warning before we restart.”

### Actions

- Start the separate 10-minute break timer.
- Do not advance to Slide 25 until the break ends.
- Both speakers help attendees resolve notebook issues.
- Give a two-minute warning before restarting.
- At zero, Murugan takes over.

### Expected Output

No new content. Attendees return with the notebook ready through Activity 1.

### Speaker Notes

- Do not use the break to introduce NumPy.
- Murugan restart line: “Welcome back. We have worked with a labelled table; now let’s answer a question using one small array of attendance numbers.”

## Slide 25 — NumPy powers numerical work

**Speaker:** Murugan
**Planned time:** 2 minutes
**Notebook:** NumPy: CCA Attendance, Cell 34
**Delivery type:** Explanation / Handover

### Purpose

Position NumPy as a short supporting tool for numerical calculations and plotting coordinates.

### Suggested Script

“Welcome back. Our question is: what happened across five CCA sessions? The data is 20, 25, 18, 30, and 28 attendees. NumPy can store these numbers in an array and calculate across them. We will keep this section short: one array, three summaries, and regular positions for a later line chart.”

### Actions

- Point to the attendance table.
- Ask which session appears highest before calculating.

### Expected Output

No code output. Visual prediction: S4 is highest at 30.

### Speaker Notes

- Do not explain dimensions, broadcasting, matrices, or advanced indexing.

## Slide 26 — np.array()

**Speaker:** Murugan
**Planned time:** 2 minutes
**Notebook:** NumPy: CCA Attendance, run Cell 35; read Cell 36
**Delivery type:** Live demo

### Purpose

Show that a NumPy array stores the five attendance numbers.

### Suggested Script

“The question is: how do we give NumPy the attendance numbers? `np.array([...])` stores the five values as one numerical array. Run Cell 35. The output keeps the same order as S1 through S5.”

### Actions

- Run attendee Cell 35.
- Ask attendees to predict the first and last values.

### Expected Output

`array([20, 25, 18, 30, 28])`.

### Speaker Notes

- An array is enough as “a container for numbers” tonight.
- Fallback: “The array is printed on the slide, so we will continue with those five values.”

## Slide 27 — np.mean() / np.max() / np.min()

**Speaker:** Murugan
**Planned time:** 3 minutes
**Notebook:** NumPy: CCA Attendance, run Cell 37; read Cell 38
**Delivery type:** Live demo

### Purpose

Calculate the required mean, maximum, and minimum.

### Suggested Script

“We have three questions: what was typical, highest, and lowest? `np.mean(attendance)` calculates the average, `np.max` finds the highest value, and `np.min` finds the lowest. Predict the maximum before we run Cell 37.”

“The results are **Mean: 24.2**, **Maximum: 30**, and **Minimum: 18**. In plain English, attendance averaged 24.2, peaked at 30, and was lowest at 18.”

### Actions

- Run attendee Cell 37.
- Point from each function to its labelled output.

### Expected Output

`Mean: 24.2`, `Maximum: 30`, `Minimum: 18`.

### Speaker Notes

- Do not explain how the mean is implemented.
- Fallback: “The three verified results are shown on the slide; we will use them for the interpretation.”

## Slide 28 — np.arange() and np.linspace()

**Speaker:** Murugan
**Planned time:** 3 minutes
**Notebook:** NumPy: CCA Attendance, run Cell 39; read Cell 40
**Delivery type:** Live demo

### Purpose

Briefly explain the two implemented ways to create regular coordinates.

### Suggested Script

“Our question is: how can we create regular positions without typing every number? `np.arange(1, 6)` creates values from 1 up to, but not including, 6, so we get 1 through 5. `np.linspace(0, 1, 5)` creates a fixed count of five evenly spaced values between 0 and 1.”

“Run Cell 39. We will use `session_numbers` for the line chart. The main idea is fixed step for `arange`, fixed count for `linspace`.”

### Actions

- Run attendee Cell 39.
- Point out only the fixed-step versus fixed-count distinction.

### Expected Output

`arange: [1 2 3 4 5]` and `linspace: [0.   0.25 0.5  0.75 1.  ]`.

### Speaker Notes

- Keep this concise; do not expand into NumPy ranges or floating-point formatting.
- Fallback: “The two regular sequences are already shown on the slide, so we will use `1` to `5` for the chart.”

## Slide 29 — Turning data into graphs

**Speaker:** Murugan
**Planned time:** 30 seconds
**Notebook:** matplotlib: Seeing Patterns, Cell 41
**Delivery type:** Explanation

### Purpose

Mark the transition from numerical summaries to visual evidence.

### Suggested Script

“We now have questions, tables, and calculations. Next we turn the data into graphs so patterns are easier to see. The question still comes first; the chart is a tool for answering it.”

### Actions

- Pause briefly, then advance.

### Expected Output

No notebook output.

### Speaker Notes

- Do not spend time on the divider.

## Slide 30 — Which chart matches the question?

**Speaker:** Murugan
**Planned time:** 2 minutes
**Notebook:** matplotlib: Seeing Patterns, Cell 41
**Delivery type:** Explanation / Audience question

### Purpose

Teach chart choice before chart syntax.

### Suggested Script

“A bar chart compares categories, such as food items. A line chart shows change across an ordered sequence, such as sessions. A scatter plot compares two numerical variables, such as study hours and quiz score.”

“If I ask which food received the most orders, which chart would you choose? If I ask how attendance changed from S1 to S5, which chart would you choose?”

### Actions

- Take the answers “bar” and “line.”
- Transition: “Let’s begin with the food-order data behind the bar chart.”

### Expected Output

Audience identifies bar for categories and line for ordered sessions.

### Speaker Notes

- Do not introduce alternative chart types.

## Slide 31 — food = pd.DataFrame(food_data)

**Speaker:** Murugan
**Planned time:** 2.5 minutes
**Notebook:** matplotlib: Seeing Patterns, run Cell 42; read Cell 43
**Delivery type:** Live demo

### Purpose

Introduce the exact food-order data before plotting it.

### Suggested Script

“Our question is: which food item received the most orders? The data has one category column, Food, and one numerical column, Orders. The dictionary stores five labelled lists, and `pd.DataFrame(food_data)` turns them into a five-row table.”

“Run Cell 42. Before charting anything, scan the values. Which row currently looks largest?”

### Actions

- Run attendee Cell 42.
- Ask attendees to identify the largest visible value.

### Expected Output

A five-row DataFrame: Chicken Rice `35`, Nasi Lemak `28`, Pasta `18`, Burger `22`, Sandwich `15`.

### Speaker Notes

- The table already suggests the answer, but the chart will make comparison faster.
- Fallback: “The five rows are visible on the slide, so we will chart those exact values.”

## Slide 32 — plt.bar()

**Speaker:** Murugan
**Planned time:** 3 minutes
**Notebook:** matplotlib: Seeing Patterns, run Cell 44; read Cell 45
**Delivery type:** Live demo

### Purpose

Create a basic bar chart and interpret the highest category without pre-solving the styling activity.

### Suggested Script

“The question is still: which food item received the most orders? `plt.bar` uses Food for the categories along the x-axis and Orders for bar height. `plt.show()` displays the chart.”

“Predict the tallest bar, then run Cell 44. Chicken Rice has the highest number of orders, 35. The chart answers the comparison quickly, but it still needs a title and axis labels. That missing context becomes Activity 2.”

### Actions

- Run attendee Cell 44.
- Point to the tallest bar and the missing labels.

### Expected Output

A basic five-bar chart with Chicken Rice highest at `35`, without an added title or axis labels.

### Speaker Notes

- Do not add title or axis-label code during this demo.
- Fallback: “The completed basic chart is shown on the slide. Chicken Rice is the tallest bar at 35.”

## Slide 33 — plt.plot()

**Speaker:** Murugan
**Planned time:** 3 minutes
**Notebook:** matplotlib: Seeing Patterns, run Cell 46; read Cell 47
**Delivery type:** Live demo

### Purpose

Create and correctly interpret the ordered attendance line chart.

### Suggested Script

“Our question is: how did attendance change across the five sessions? `session_labels` gives the visible S1 to S5 names. `plt.plot(session_numbers, attendance)` connects the ordered values. `plt.xticks` replaces the number positions with session labels, and the title and axis labels add context.”

“Run Cell 46. **Attendance dips at S3, peaks at S4, and ends above S1.** It did not consistently increase, because it fell between S2 and S3 and again after S4.”

### Actions

- Run attendee Cell 46.
- Trace the line from S1 through S5.
- Ask attendees where the dip and peak occur.

### Expected Output

A labelled line chart through `20, 25, 18, 30, 28`; S3 is the low point and S4 the peak.

### Speaker Notes

- Do not say attendance consistently increased.
- Fallback: “The verified line chart is on the slide; we can trace the dip at S3 and peak at S4 there.”

## Slide 34 — study = pd.DataFrame(study_data)

**Speaker:** Murugan
**Planned time:** 2.5 minutes
**Notebook:** matplotlib: Seeing Patterns, run Cell 48; read Cell 49
**Delivery type:** Live demo

### Purpose

Introduce the two numerical variables used by the scatter plot.

### Suggested Script

“Our next question is: does studying more seem linked to higher quiz scores? The useful columns are Hours Studied and Quiz Score. Student names identify the rows, but the chart will compare the two numerical columns.”

“Run Cell 48. Scan from Chen at one hour and 58 to Deepa at five hours and 90. We are looking for a pattern in this small sample, not proving why the scores changed.”

### Actions

- Run attendee Cell 48.
- Point to the Hours Studied and Quiz Score columns.

### Expected Output

A five-row DataFrame with study hours `2, 4, 1, 5, 3` and quiz scores `65, 82, 58, 90, 75`.

### Speaker Notes

- Avoid suggesting a conclusion before showing all five points.
- Fallback: “The exact study table is shown on the slide, so we will plot those five pairs.”

## Slide 35 — plt.scatter()

**Speaker:** Murugan
**Planned time:** 3.5 minutes
**Notebook:** matplotlib: Seeing Patterns, run Cell 50; read Cell 51
**Delivery type:** Live demo

### Purpose

Create a scatter plot and model cautious interpretation.

### Suggested Script

“The question is whether study hours seem linked to quiz score. `plt.scatter` places Hours Studied on the x-axis and Quiz Score on the y-axis. Each student becomes one point. The title and labels tell us how to read the axes.”

“Run Cell 50. **In this small sample, students who studied more tended to have higher quiz scores.** That is a cautious description of the upward pattern. **This does not prove that studying more always causes a higher score.** Other factors may matter, and five students are not everyone.”

### Actions

- Run attendee Cell 50.
- Ask attendees to describe the overall direction of the points.

### Expected Output

Five points forming a positive upward pattern from lower-left toward upper-right.

### Speaker Notes

- Do not teach correlation coefficients or causal inference.
- Fallback: “The completed scatter plot is shown on the slide. We can still describe its upward pattern cautiously.”

## Slide 36 — A chart needs context

**Speaker:** Murugan
**Planned time:** 3 minutes
**Notebook:** matplotlib: Seeing Patterns, Cell 52
**Delivery type:** Explanation / Audience question

### Purpose

Consolidate the role of titles, axes, and evidence-based insights.

### Suggested Script

“A chart is useful only when the viewer knows the question and can read the evidence. The title tells us what the chart is about. The axes tell us what each direction measures. The insight states the visible pattern in plain English.”

“For our bar chart, what should the title say? What belongs on the x-axis? What belongs on the y-axis? Keep those answers—we will use them in Activity 2.”

### Actions

- Elicit `Food Orders`, `Food`, and `Number of Orders`.
- Transition directly to the activity.

### Expected Output

Audience identifies the title and both axis labels needed for the food chart.

### Speaker Notes

- Do not repeat how each matplotlib function works; attendees will apply it next.

## Slide 37 — Activity 2: Which food item was most popular?

**Speaker:** Murugan
**Planned time:** 6 minutes
**Notebook:** Activity 2, complete Cells 54 and 56
**Delivery type:** Activity

### Purpose

Launch the six-minute chart task, provide one non-solution hint, and protect attendee attempt time.

### Suggested Script

“Our question is: which food item was most popular? Complete Cell 54 to create the food-orders bar chart. Add the title `Food Orders`, label the x-axis `Food`, label the y-axis `Number of Orders`, and run `plt.show()`. Then complete the insight in Cell 56 by identifying the tallest bar.”

“**You have 6 minutes to attempt this.** The hint is that Food supplies the x-axis categories and Orders controls bar height. Try your own correction if you see an error.”

“At the timer’s two-minute mark: **2-minute reminder:** make sure the chart has a title, both axis labels, and one written insight.”

### Actions

- Start the six-minute timer and optional low-volume music.
- Tell Alson to begin facilitating and avoid revealing the complete solution.
- Give the two-minute reminder at 2:00 remaining.
- Stop timer and music before the walkthrough.

### Expected Output

During the attempt: a labelled five-bar chart and an insight sentence. Do not announce the official answer until Slide 38.

### Speaker Notes

- Alson helps with column names, quotation marks, brackets, method names, and error messages.
- Do not focus on colours, palettes, or styling.
- Protect all six minutes.

## Slide 38 — Possible solution: Chicken Rice leads

**Speaker:** Murugan
**Planned time:** 4 minutes
**Notebook:** Completed notebook, run Cell 54; read Cells 55–56
**Delivery type:** Walkthrough / Live demo

### Purpose

Show one possible solution and connect code, chart, and insight.

### Suggested Script

“This is **one possible solution**. `plt.bar(food["Food"], food["Orders"])` creates the bars. The next three lines add the title and two axis labels. `plt.show()` displays the result.”

“Before I state the answer, which bar is tallest? Run completed Cell 54. **Chicken Rice received the most orders, with 35.** The styling is not the goal. The goal is that the chart clearly answers the question.”

### Actions

- Open completed Cell 54 and run it.
- Point from each code line to its visible chart element.
- Ask attendees to correct their own cells rather than paste the solution.

### Expected Output

A labelled five-bar chart titled `Food Orders`, with `Food` on the x-axis and `Number of Orders` on the y-axis; Chicken Rice is highest at `35`.

### Speaker Notes

- Keep the walkthrough to four minutes.
- Fallback: “The labelled solution chart is shown on the slide, so we will use it to confirm Chicken Rice at 35.”

## Slide 39 — matplotlib compared with seaborn

**Speaker:** Murugan
**Planned time:** 2 minutes
**Notebook:** seaborn: Cleaner Defaults, compare attendee Cells 44 and 58
**Delivery type:** Explanation / Code comparison

### Purpose

Position seaborn as a convenient alternative for labelled data without beginning a separate plotting lecture.

### Suggested Script

“We are using the same data and asking the same question. matplotlib writes the category and height columns directly inside `plt.bar`. seaborn uses `data=food`, then names the x and y columns. matplotlib offers direct control. seaborn is convenient for labelled data and often gives cleaner defaults.”

“The answer should not change when the plotting tool changes.”

### Actions

- Point to the two plotting calls only.
- Do not run a cell until Slide 40.

### Expected Output

No new numerical output. Both calls use Food and Orders.

### Speaker Notes

- Do not teach palettes, themes, heatmaps, pairplots, or distributions.
- Timing warning: this is a short comparison.

## Slide 40 — sns.barplot()

**Speaker:** Murugan
**Planned time:** 3 minutes
**Notebook:** seaborn: Cleaner Defaults, run Cell 58; read Cell 59
**Delivery type:** Live demo / Handover

### Purpose

Run the implemented seaborn chart and close Murugan’s teaching section.

### Suggested Script

“The question remains: which food item received the most orders? `sns.barplot(data=food, x="Food", y="Orders")` uses the labelled DataFrame. The same title and axis-label lines add context.”

“Run Cell 58. The chart’s defaults look different, but the evidence and insight remain the same: Chicken Rice is highest at 35. We changed the plotting tool, not the data question.”

### Actions

- Run attendee Cell 58.
- Compare the result briefly with the matplotlib chart.
- Hand over to Alson.

### Expected Output

A seaborn bar chart with the same five values; Chicken Rice remains highest at `35`.

### Speaker Notes

- Fallback: “The completed seaborn output is displayed on the slide. The underlying values and answer are unchanged.”
- Handover line: “We’ve now taken questions from tables all the way to charts. Alson will bring the pieces back together and close the workshop.”

## Slide 41 — From question to insight

**Speaker:** Alson
**Planned time:** 4 minutes
**Notebook:** Wrap-up, Cell 60
**Delivery type:** Recap / Handover

### Purpose

Recap the full reasoning loop and the distinct role of each library.

### Suggested Script

“Thanks, Murugan. Let’s return to the loop: **Question → Data → Code → Output/Chart → Insight**. We began by deciding what we wanted to know. We chose columns as evidence. We used code to process or plot them. We checked the result, then explained it in plain English.”

“pandas helped us work with labelled tables. NumPy handled a small array and numerical summaries. matplotlib created bar, line, and scatter charts. seaborn recreated one labelled chart with cleaner defaults. You do not need to memorise every function. Remember what kind of question each tool helped answer.”

### Actions

- Ask for one example of an insight from tonight.
- Murugan may add one short clarification if needed.

### Expected Output

Audience can name at least one library role or insight.

### Speaker Notes

- Do not reteach syntax.
- Protect the final bridge even if time is short.

## Slide 42 — Group photo time

**Speaker:** Alson
**Planned time:** 2 minutes
**Notebook:** None
**Delivery type:** Closing activity

### Purpose

Capture the planned group photo efficiently before Q&A.

### Suggested Script

“Before Q&A, we’re taking a quick group photo. If you are comfortable, turn on your camera and look toward the screen. We’ll take two shots so we have a backup.”

### Actions

- Murugan checks the gallery layout and captures two images.
- Alson keeps the group ready and moves on promptly.

### Expected Output

Two group-photo captures.

### Speaker Notes

- Respect anyone who prefers not to turn on a camera.
- Do not let photo organisation consume Q&A time.

## Slide 43 — Questions?

**Speaker:** Alson
**Planned time:** 6 minutes
**Notebook:** Wrap-up, Cell 60
**Delivery type:** Q&A / Workshop 3 bridge

### Purpose

Deliver the exact Workshop 3 bridge and allow a short, focused Q&A.

### Suggested Script

“**Today we looked for patterns. Next week, machine learning uses patterns to make predictions.** That is the bridge from Workshop 2 to Workshop 3.”

“What questions do you have about the table operations, the charts, or how we interpreted the outputs? If a question needs detailed debugging, we can continue with you after the main closing.”

### Actions

- Take questions from chat or the room.
- Alson answers question-first/pandas topics; Murugan answers NumPy/chart topics.
- At minute 118, move to the take-home slides.

### Expected Output

No notebook output. Attendee questions are addressed within the available time.

### Speaker Notes

- Do not remove the exact bridge even when behind schedule.
- Avoid starting optional notebook content as a new lesson.

## Slide 44 — Download the workshop notebook

**Speaker:** Alson
**Planned time:** 1 minute
**Notebook:** Attendee notebook download; Wrap-up, Cell 60
**Delivery type:** Take-home instructions

### Purpose

Ensure attendees retain the practice notebook after the workshop.

### Suggested Script

“Use the button or QR code to download the attendee notebook. Keep your own attempted version as well. You can rerun the examples, change the data, and ask a new question using the same five-step loop.”

### Actions

- Point to the download button and QR code.
- Murugan watches for download issues.

### Expected Output

The downloaded file is `AIDK_W2_Workshop.ipynb`.

### Speaker Notes

- Do not distribute the completed answer notebook as the attendee file.

# Facilitator Quick Reference

## Common notebook problems

- Imports were not run, causing names such as `pd`, `np`, `plt`, or `sns` to be undefined.
- Cells were run out of order, so `students`, `attendance`, `session_numbers`, `food`, or `study` does not exist yet.
- A column name is misspelled or uses the wrong capitalisation or spacing.
- Quotation marks are missing around a column or text value.
- Round or square brackets do not match.
- The comparison operator is incorrect or missing.
- A chart does not appear because `plt.show()` was not run.

## How to help

1. Ask the attendee what they expected.
2. Read the error message together.
3. Check the current cell and previous setup cells.
4. Give one small hint.
5. Let the attendee make the correction.
6. Only show the completed answer during the official walkthrough.

Do not take over the keyboard unless an accessibility need requires it. Avoid pasting a whole solution. If an environment problem cannot be fixed quickly, use the slide or completed-notebook output and continue the teaching explanation.

## Timing reminders

| Moment | Reminder | Speaker |
|---|---|---|
| Activity 1 start | “You have 10 minutes to attempt this.” | Alson |
| Activity 1, 5:00 remaining | 5-minute reminder and non-solution progress hints | Alson |
| Activity 1, 2:00 remaining | 2-minute reminder; finish current task and insight | Alson |
| Break, 2:00 remaining | Workshop resumes in two minutes; return to the notebook | Both |
| Activity 2 start | “You have 6 minutes to attempt this.” | Murugan |
| Activity 2, 2:00 remaining | 2-minute reminder; check title, axes, and insight | Murugan |
| Q&A, minute 118 | Move to the notebook download and closing | Alson |

## Cut-first content

If the workshop is behind schedule:

1. Remove optional extension discussion.
2. Shorten the seaborn explanation to the plotting-call comparison and verified chart.
3. Shorten repeated chart-styling explanations.
4. Do not cut either activity.
5. Do not remove the Workshop 3 bridge.

Also compress the early SPAI/setup prelude when attendees are already ready. Do not cut the activity insights or the 10-minute break entirely.
