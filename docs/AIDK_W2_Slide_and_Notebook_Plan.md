# AIDK Workshop 2 Slide and Notebook Plan

> **Superseded where conflicting:** The approved feedback revision in `AIDK_W2_Content_Document_Updated.md` now controls the 37-slide/61-cell structure, method additions, interactive timers, group-photo prompt, notebook download, and feedback form. This document remains historical implementation context only where it does not conflict with that authoritative revision.

> **For the future implementation session:** execute this specification stage by stage and keep the slide deck, attendee notebook, completed notebook, generated chart assets, and validation contract in one reviewable change set. This document approves planning decisions only; it does not authorise deployment.

| Item | Locked value |
|---|---|
| Workshop name | AI Don't Know Workshop 2 |
| Workshop topic | Data Analytics and Visualisation |
| Date and time | 22 July, 3:00-5:00 PM |
| Audience | Mostly Year 1 beginners with Workshop 1 or equivalent basic Python exposure |
| Speakers | Alson and Murugan |
| Content source of truth | `AIDK_W2_Content_Document_Updated.md` |
| Design source of truth | `slides.md` |
| Planning status | Implementation specification complete; slides and notebooks not yet implemented |
| Proposed scope | 31 slides; 57-cell attendee notebook; 57-cell completed notebook |
| Intended deliverables | Canonical web deck, renamed standalone deck, attendee notebook, completed speaker/reference notebook, generated chart assets, updated slide/notebook validation, and final Workshop 2 README |

The future implementation must preserve the existing static HTML/CSS/JavaScript presentation system and Workshop 1 visual language. It must replace Workshop 1 curriculum rather than extending or deploying it. The attendee notebook is the authoritative runnable-code source for live demonstrations and learner prompts; the completed notebook mirrors its structure and supplies the activity answers.

---

## 1. Locked Workshop Direction

The teaching loop is:

```text
Question -> Data -> Code -> Output/Chart -> Insight
```

Library roles are intentionally unequal:

- **pandas:** the main tool for working with labelled tables.
- **matplotlib:** the main visualisation tool for bar, line, and scatter charts.
- **NumPy:** light numerical support for a small array and mean, maximum, and minimum.
- **seaborn:** a cleaner plotting alternative shown briefly by recreating one existing chart.

Workshop 2 must feel like one guided investigation. It must not become four separate library lectures. Each library appears only when the current data question needs it, and every code example ends with an output or plain-English interpretation.

Beginner constraints are locked:

- Treat the audience as mostly Year 1 students who know variables, lists, simple arithmetic, `print()`, and basic `if` statements.
- Use small inline datasets; do not require an external CSV in the main flow.
- Do not show the full student dataset before the question-first framing. Slide 4 may use a three-row excerpt; Slide 7 introduces the complete five-row table.
- Do not teach advanced statistics, advanced NumPy, dimensions, broadcasting, matrices, or advanced indexing.
- Do not teach deep seaborn content, themes, palettes, heatmaps, pairplots, or distributions.
- Do not put large code blocks on slides. Keep ordinary examples to roughly 1-12 visible lines; use clearly labelled excerpts when the full solution belongs in the notebook.
- Every code example must answer a visible data question.
- Use beginner language: “table” before “DataFrame,” “column” before “Series,” and “chart” when “visualisation” would add no clarity.
- Ask attendees to interpret outputs. Charts are evidence, not decoration.

To prevent Activity 1 answers from being exposed before the attempt, the pandas demonstrations practise the same operations with different questions: filter for Class B, calculate the Quiz 2 mean (`78.6`), and create a `Total` column. The activity then asks for Quiz 1 mean, Quiz 2 above 80, and `Improvement`.

---

## 2. Existing Architecture Assessment

### Actual inherited architecture

Workshop 1 is a no-framework static presentation. All 45 slides are direct `<section class="slide ...">` children of `<main class="deck">` in `index.html`; there is no React, JSX, slide data file, templating layer, or slide-per-file build. Reusable “components” are semantic HTML class patterns backed by CSS.

`src/scripts/fitSlides.js` wraps each slide's authored children in a runtime `.stage` and scales it no lower than `0.68` on desktop. `src/scripts/navigation.js` owns the current index, dots, footer, count, progress bar, hashes, keyboard navigation, and boundary states. `src/scripts/copyCode.js` adds clipboard behaviour and 900 ms feedback to `.copy-btn` controls. The canonical deck links these scripts and the three CSS files; `ai_dont_know_workshop_1.html` duplicates the shell inline and receives only the `<main class="deck">` block through the sync script.

`package.json` runs `npx --yes serve .` for `npm run dev`/`npm start`. There is no compilation step: `npm run build` is a validation pipeline (`check:alignment` followed by `check:standalone-visuals`), and the static source is the deployable output. The repository has no `vercel.json`, hosting manifest, or deployment script; the Workshop 1 Vercel URL appears only in inherited slide copy and must not be carried forward.

The locked visual tokens in `src/styles/globals.css` are warm near-black `--bg: #11100d` and `--bg-2: #1a1612`, paper `--paper: #eee8dd`, muted text `#a39b91`/`#6f6861`, copper `--copper: #df8468`, amber `--amber: #e6ad62`, and supporting green/blue/violet accents. Display type uses Georgia/Times fallbacks; body uses Inter/system UI fallbacks; code uses SFMono/Consolas/Liberation Mono/Menlo. The deck's frame, grain, radial colour, hairline borders, restrained shadows, and serif/mono hierarchy must remain unchanged.

The visual inspection of the inherited standalone deck at 1440×900 confirmed four representative patterns that should carry forward: the sparse serif title composition, three-row outline table, equal two-column code comparison, and one-column activity/code slide with a copper-rule `.note` callout. The inherited deck's external-script canonical page and inline-script standalone page should both be tested later; this planning task made no runtime changes.

The current alignment script reads the 46-cell Workshop 1 starter notebook, extracts its 27 code cells, and requires every code cell to appear exactly once and in order in both HTML files. It validates exact normalised code text only. It does not validate notebook Markdown, outputs, charts, solutions, or speaker notes. The standalone visual check is tightly coupled to Workshop 1 slides 3 and 4 (`Who We Are` and the event cards). The two Python speaker-script tools are also fully coupled to 45 Workshop 1 slides and Workshop 1 filenames, but they are not invoked by `package.json`.

### File classification

| File or Directory | Current Purpose | Workshop 2 Action | Reason |
|---|---|---|---|
| `AGENTS.md` | Repository operating rules | Reuse unchanged | It already defines the correct source hierarchy and Workshop 1 safety rule. |
| `slides.md` | Design, architecture, asset, and synchronisation source of truth | Reuse unchanged | Workshop 2 must implement this documented system, not rewrite it. |
| `AIDK_W2_Content_Document_Updated.md` | Workshop 2 content source of truth | Reuse unchanged | The task explicitly prohibits changes. |
| `docs/AIDK_W2_Slide_and_Notebook_Plan.md` | Approved implementation specification | Reuse unchanged | Future implementation should execute and verify this contract, not rewrite it while building. |
| `README.md` | Workshop 2 scaffold status and setup | Reuse with Workshop 2 content | After implementation, replace scaffold warnings and future-file language with final run, notebook, validation, and standalone instructions. |
| `requirements.txt` | `pandas`, `numpy`, `matplotlib`, and `seaborn` | Reuse unchanged | It already matches the required libraries exactly. |
| `package.json` | Static server and validation commands | Reuse unchanged | Command names are generic and the package metadata already names Workshop 2; referenced scripts can be updated internally. |
| `package-lock.json` | npm metadata with no installed dependencies | Reuse unchanged | It already uses the Workshop 2 package name and version. |
| `index.html` | Canonical 45-slide Workshop 1 deck | Replace | Keep the shell, fixed IDs, and script/style links; replace every slide section with the 31-slide Workshop 2 sequence. |
| `ai_dont_know_workshop_1.html` | Inline-shell standalone Workshop 1 deck | Rename, replace, then remove old path | Create `ai_dont_know_workshop_2.html`, synchronise the Workshop 2 deck into it, update inline styles/scripts as needed, and remove the Workshop 1 filename after validation. |
| `src/styles/globals.css` | Design tokens, typography, global primitives | Reuse unchanged | Tokens and visual language are locked; Workshop 2-specific and reduced-motion styles belong in `slides.css`. |
| `src/styles/code.css` | Code windows, token colours, comparisons, Copy controls | Reuse with Workshop 2 content | Preserve existing code-window styles; add only a named one-column comparison modifier if activity markup needs it. |
| `src/styles/slides.css` | Slide layouts, chrome, rows, fitting presentation styles, responsive rules | Reuse with Workshop 2 content | Add the scoped data-table, chart-figure, activity-time styles, and reduced-motion rule; do not refactor existing layouts. |
| `src/scripts/fitSlides.js` | Runtime stage wrapping and fit-to-slide scaling | Reuse unchanged | It is workshop-agnostic. |
| `src/scripts/navigation.js` | Dots, progress, hashes, footer, count, keyboard and button navigation | Reuse unchanged | It derives slide count and labels from markup and is workshop-agnostic. |
| `src/scripts/copyCode.js` | Copy buttons and feedback | Reuse unchanged | It is workshop-agnostic. |
| `src/components/.gitkeep` | Empty optional component placeholder | Remove after replacement | Workshop 2 will continue class-based markup in `index.html`; no component extraction is justified. |
| `src/data/.gitkeep` | Empty optional data placeholder | Remove after replacement | A second data store would duplicate the notebook contract. |
| `src/slides/.gitkeep` | Empty optional slide-fragment placeholder | Remove after replacement | Slide content remains canonical in `index.html`; no assembly step is proposed. |
| `src/utils/.gitkeep` | Empty optional utility placeholder | Remove after replacement | No new utility layer is required. |
| `notebooks/.gitkeep` | Placeholder for Workshop 2 notebooks | Remove after replacement | The two real notebook files will replace it. |
| `01_AIDK_W1_Starter.ipynb` | Inherited 46-cell Workshop 1 attendee notebook | Remove after replacement | `notebooks/AIDK_W2_Workshop.ipynb` supersedes it and active validation must not reference Workshop 1. |
| `01_AIDK_W1_Solutions.ipynb` | Inherited 46-cell Workshop 1 solutions notebook | Remove after replacement | `notebooks/AIDK_W2_Workshop_Completed.ipynb` supersedes it. |
| `Content Doc for AIDK W1.docx` | Workshop 1 curriculum source | Remove after replacement | Workshop 2 has its own authoritative Markdown content document. |
| `materials/scripts/AIDK_W1_Speaker_Script.md` | Workshop 1 slide-by-slide script | Remove after replacement | It is stale curriculum and no Workshop 2 speaker-script document is an approved deliverable. |
| `materials/scripts/AIDK_W1_Speaker_Script.docx` | Workshop 1 speaker-script document | Remove after replacement | Same reason; speaker ownership and timing live in this plan and the content document. |
| `materials/scripts/AIDK_W1_Facilitator_Script_2026-07-15.docx` | Generated Workshop 1 facilitator document | Remove after replacement | It is tied to Workshop 1 date and 45-slide structure. |
| `scripts/build-speaker-script-docx.py` | Generates a Workshop 1-specific DOCX from a Workshop 1 Markdown script | Remove after replacement | It is inactive in npm and outside the approved Workshop 2 deliverables. |
| `scripts/check-speaker-script-docx.py` | Validates 45 Workshop 1 script sections and DOCX properties | Remove after replacement | It has no Workshop 2 artifact to validate and would leave Workshop 1 names active. |
| `scripts/check-notebook-slide-alignment.mjs` | Exact Workshop 1 code-cell-to-slide checker | Update validation references | Point to both Workshop 2 notebooks and both Workshop 2 slide files; validate the mapping and excerpt rules defined in Section 12. |
| `scripts/check-standalone-visual-contract.mjs` | Checks Workshop 1 slides 3-4 inline CSS rules | Replace Workshop 1 assertions | Check Workshop 2 deck count, required shell/styles, representative data-table/chart/activity patterns, and absence of the W1 standalone filename. |
| `scripts/sync-standalone-slides.mjs` | Copies the canonical deck block to the W1 standalone file | Update validation references | Change only the standalone path to `ai_dont_know_workshop_2.html`; retain `index.html` as source. |
| `public/images/logos/SPAI Logo.png` | Reusable SPAI logo | Rename | Move without changing pixels to `public/assets/logos/spai-logo.png` and update paths to the hosting-safe convention. |
| `public/images/events/*.png` and `public/images/events/.gitkeep` | Workshop 1 event-card imagery | Remove after replacement | No Workshop 2 slide calls for event cards or decorative event photos. |
| `public/images/ats.png` | Workshop 1 attendance QR | Remove after replacement | The Workshop 2 source does not specify an attendance form; retaining it risks sending attendees to the wrong form. |
| `public/images/notebookdownload.png` | Unused Workshop 1 notebook image | Remove after replacement | It is unused and screenshots of instructions are discouraged. |
| `public/images/backgrounds/.gitkeep` and `public/images/logos/.gitkeep` | Legacy asset placeholders | Remove after replacement | New assets use `public/assets/`; the legacy asset tree can then be removed. |
| `public/assets/images/.gitkeep` | Future image placeholder | Replace | Store the five generated Workshop 2 chart SVGs here. |
| `public/assets/logos/.gitkeep` | Future logo placeholder | Replace | Store the renamed SPAI logo here. |
| `public/assets/diagrams/.gitkeep` and `public/assets/icons/.gitkeep` | Empty future placeholders | Remove after replacement | The planned loop and roadmap use native HTML/CSS, so no diagram or icon directory is required. |

Workshop 1 files must remain until the replacement deck, both replacement notebooks, and updated checks exist. Removal is the final cleanup step, not the first implementation step.

---

## 3. Proposed Workshop 2 File Structure

The intended post-implementation tree keeps the existing no-build architecture and removes unused Workshop 1 content:

```text
/
├── AGENTS.md
├── slides.md
├── AIDK_W2_Content_Document_Updated.md
├── README.md
├── requirements.txt
├── package.json
├── package-lock.json
├── index.html
├── ai_dont_know_workshop_2.html
├── notebooks/
│   ├── AIDK_W2_Workshop.ipynb
│   └── AIDK_W2_Workshop_Completed.ipynb
├── public/
│   └── assets/
│       ├── images/
│       │   ├── food-orders-bar-basic.svg
│       │   ├── food-orders-bar.svg
│       │   ├── cca-attendance-line.svg
│       │   ├── study-hours-quiz-score-scatter.svg
│       │   └── food-orders-seaborn-bar.svg
│       └── logos/
│           └── spai-logo.png
├── scripts/
│   ├── sync-standalone-slides.mjs
│   ├── check-notebook-slide-alignment.mjs
│   └── check-standalone-visual-contract.mjs
├── src/
│   ├── scripts/
│   │   ├── fitSlides.js
│   │   ├── navigation.js
│   │   └── copyCode.js
│   └── styles/
│       ├── globals.css
│       ├── slides.css
│       └── code.css
└── docs/
    └── AIDK_W2_Slide_and_Notebook_Plan.md
```

- **Slide content:** all 31 ordered `<section>` elements remain in `index.html`. No `src/slides/` fragments or build-time assembly will be introduced.
- **Reusable components:** remain class-based HTML patterns in `index.html` and `src/styles/*.css`; scripts continue to handle only fitting, navigation, and copying.
- **Data definitions:** `notebooks/AIDK_W2_Workshop.ipynb` is authoritative for runnable values and variable names; the completed notebook mirrors them. `index.html` contains only the verified display code/tables required by the slides. No separate `src/data` copy is proposed.
- **Images and diagrams:** charts exported from the completed notebook live in `public/assets/images/`; the SPAI logo lives in `public/assets/logos/`. The analytics loop, workshop roadmap, and data tables use native HTML/CSS, so they remain editable and accessible.
- **Standalone deck:** rename to `ai_dont_know_workshop_2.html`. The sync script continues to copy the canonical deck block from `index.html`; no manually maintained second slide sequence is allowed.
- **Inherited Workshop 1 files:** keep them only while implementing and comparing. Remove them after the Workshop 2 replacements and updated validators pass. Do not archive them inside this Workshop 2 repository because that would leave stale content and names in normal searches.
- **Title URL:** omit the inherited Workshop 1 Vercel URL. No replacement follow-along URL is shown until a later, separately authorised deployment provides a verified Workshop 2 destination.

---

## 4. Full Slide-by-Slide Plan

Notebook section names are stable and used throughout this document: **Start Here**, **Ask a Data Question**, **pandas: Student Scores**, **Activity 1: Who Improved the Most?**, **Break / Buffer**, **NumPy: CCA Attendance**, **matplotlib: Seeing Patterns**, **Activity 2: Most Popular Food**, **seaborn: Cleaner Defaults**, **Wrap-up**, and **Optional Extension**.

| Slide | Title | Section | Purpose | Visible Content | Visual/Layout | Code or Data | Expected Output | Notebook Mapping | Speaker | Timing |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | AI Don't Know: Workshop 2 | Opening | Welcome attendees and identify the session unambiguously. | Kicker: `SPAI Workshop Series`. Title: `AI Don't Know`. Subtitle: `Workshop 2 · Data Analytics & Visualisation`. Metadata: `22 July · 3:00-5:00 PM · Alson & Murugan`. No Workshop 1 URL. | Existing `.slide.center` + `.title-stack`. | None. | None. | **Start Here**, Cells 0-1; complete Markdown; completed notebook identical. | Alson | 2 min |
| 2 | From Python basics to data questions | Opening | Activate Workshop 1 knowledge without reteaching it. | Title as shown. Bullets: `Variables store values`; `Lists and dictionaries organise values`; `print() lets us inspect results`. Closing question: `What can those basics tell us about a table of scores?` | Existing `.slide.standard` + `.takeaway` / `.takeaway-row`. | Tiny conceptual list only; no code. | None. | **Start Here**, Cells 0-1; complete Markdown. | Alson | 3 min |
| 3 | Today: find patterns. Next: make predictions. | Opening | State the Workshop 2 goal and Workshop 3 connection. | Three-row roadmap: `W1 Python foundations → W2 answer questions from data → W3 use patterns to make predictions`. Goal: `By 5 PM, create a table, calculate summaries, make three chart types, and explain one insight.` | Existing `.outline-table` with W2 row accented; no new component. | No code. | None. | **Start Here**, Cells 0-1; complete Markdown. | Alson | 5 min |
| 4 | What does data analytics mean? | How Data Analytics Works | Define analytics through a concrete question before libraries. | Question: `Who seems to be improving?` Show a three-row excerpt: Alex `72 → 78`, Bella `85 → 88`, Chen `60 → 70`. Bullets: `Start with a question`; `Use data as evidence`; `Explain the answer in plain English`. | Existing `.slide.two`; left question/explanation, right **new native data-table style**. | Three-row excerpt from `student_data`; exact values only. | Visual conclusion is deliberately incomplete: `We need the full table before deciding.` | **Ask a Data Question**, Cell 4; complete Markdown. | Alson | 3 min |
| 5 | One question. Five steps. | How Data Analytics Works | Lock the core teaching loop. | Large flow: `Question → Data → Code → Output/Chart → Insight`. Under-step labels: `What do we want to know?`; `Which values help?`; `Ask Python`; `See the result`; `Say what it means`. | Existing `.flow-line`, `.flow-title`, `.flow-steps`; five columns already supported. | No code. | None. | **Ask a Data Question**, Cell 4; complete Markdown. | Alson | 4 min |
| 6 | Start with the question, not the library | How Data Analytics Works | Give three beginner-friendly questions and the evidence each needs. | `Who improved the most? → Student scores`; `Which food item sold the most? → Food orders`; `Does studying more seem linked to higher scores? → Hours + scores`. Callout: `The question chooses the data and chart—not the other way around.` | Existing `.summary-table` / `.summary-row` plus `.note`. | Dataset names only. | None. | **Ask a Data Question**, Cell 4; complete Markdown. | Alson | 3 min |
| 7 | pandas turns labelled data into a table | pandas Tables | Introduce pandas and the complete Student Scores dataset. | Question: `What information do we have?` Show the five-row table with columns `Name`, `Class`, `Quiz1`, `Quiz2`. Explain: `pandas is our main tool for tables`; `A DataFrame is a table with labelled rows and columns`. | Existing `.slide.two` plus **new native data-table style**. | Full Student Scores table exactly as Section 8. | Visible five-row table. | **pandas: Student Scores**, Cells 5-7; Cell 6 live demo; completed identical. | Alson | 3 min |
| 8 | How do we create this table? | pandas Tables | Build the DataFrame from the exact inline dictionary. | Question: `How do we turn labelled lists into a table?` Show the complete `student_data` dictionary and `students = pd.DataFrame(student_data)`. | Existing `.slide.standard` + one-column `.code-window.python` with Copy. | Exact Cell 6 code; 8 visible lines. | `A five-row DataFrame containing Name, Class, Quiz1, and Quiz2.` | **pandas: Student Scores**, Cell 6 live demo + Cell 7 `Output:` line; completed identical. | Alson | 4 min |
| 9 | Rows are records. Columns are questions. | pandas Tables | Teach rows, columns, and `head()` using the visible table. | Highlight one row: `one student`; highlight `Quiz1`: `one type of information`. Question: `What does students.head() show?` | Existing `.slide.two`; native table on left, short code/output on right. | `students.head()` from Cell 8. | `The first five rows; because the table has five students, the full table appears.` | **pandas: Student Scores**, Cell 8 live demo + Cell 9 `Output:` line. | Alson | 3 min |
| 10 | Select a column. Filter matching rows. | pandas Tables | Teach two related table operations without revealing activity answers. | Question A: `Which Quiz 1 values do we have?` Question B: `Which students are in Class B?` Explain brackets select a column; a True/False condition keeps matching rows. | Existing `.compare` with two compact code/output panes. | Exact Cell 10: `quiz1_scores = students["Quiz1"]`; `class_b_students = students[students["Class"] == "B"]`; print both. | Quiz 1 values `72, 85, 60, 90, 55`; Class B rows are Chen and Deepa. | **pandas: Student Scores**, Cell 10 live demo + Cell 11 `Output:` line. | Alson | 4 min |
| 11 | What is the average Quiz 2 score? | pandas Tables | Introduce `.mean()` with a non-activity target. | Show the visible question, three-line code, and callout: `Average describes this small group; it does not explain why scores differ.` | Existing `.slide.two` + `.code-window.python` + `.note`. | Exact Cell 12: `average_quiz2 = students["Quiz2"].mean()` then `print(average_quiz2)`. | `78.6`. | **pandas: Student Scores**, Cell 12 live demo + Cell 13 `Output:` line. | Alson | 3 min |
| 12 | Can we create a new answer column? | pandas Tables | Demonstrate a calculated column while preserving the activity challenge. | Question: `What is each student's combined quiz total?` Explain that a new column can be calculated from existing columns. Do not show `Improvement`. | Existing `.slide.two`; code on left, four-column output table on right. | Exact Cell 14: create `students["Total"] = students["Quiz1"] + students["Quiz2"]`; display `Name`, `Quiz1`, `Quiz2`, `Total`. | Totals: Alex `150`, Bella `173`, Chen `130`, Deepa `182`, Ethan `120`. | **pandas: Student Scores**, Cell 14 live demo + Cell 15 `Output:` line; Cell 16 recap prompt. | Alson | 3 min |
| 13 | Activity 1: Who improved the most? | Activity 1 | Launch the scored-table investigation and keep instructions visible. | Question exactly as title. Tasks: `1 Calculate average Quiz 1`; `2 Find Quiz 2 above 80`; `3 Create Improvement = Quiz2 - Quiz1`; `4 Sort highest first`; `5 Write one insight`. `Notebook: Activity 1, Cells 17-29`. Prominent `Attempt: 10 minutes`. Reminders: speaker calls `5 minutes left` and `2 minutes left`. | Existing activity challenge (`.slide.standard`, `.takeaway-list`) plus **new `.activity-meta` timer badge**. | No solution code. Cell 18 is a provided reset; Cells 20, 22, 24, 26 are guided learner code. | Learners should produce one average, a filtered table, an Improvement column, a descending table, and an insight. No answer values displayed. | **Activity 1: Who Improved the Most?**, Cells 17-29; Cell 18 run only; Cells 20/22/24/26 activity attempt; Cells 28-29 insight/hints. Completed notebook has solutions in same cells. | Alson lead; Murugan facilitates | First 5 min of 10-min attempt |
| 14 | Progress check: use the column names | Activity 1 | Support stuck learners without giving the complete solution. | `5 minutes left`. Hints: `Mean starts from students["Quiz1"]`; `Filtering compares the Quiz2 column with 80`; `Improvement subtracts Quiz1 from Quiz2`; `Highest first means descending order`. Final line: `Check spelling, brackets, and quotation marks.` No complete line of solution code. | Existing `.slide.standard` + `.takeaway` / `.note` and `.activity-meta`. | Hint fragments only; not copyable solution code. | No output. | **Activity 1**, Cell 29 optional hints; attendee remains incomplete; completed notebook keeps the same hint position. | Alson lead; Murugan facilitates | Final 5 min of same attempt |
| 15 | Possible solution: Chen and Ethan tie | Activity 1 | Walk through one valid solution and finish with the insight. | Title as shown. Output summary: `Average Quiz 1: 72.4`; `Quiz 2 above 80: Bella, Deepa`; `Highest improvement: Chen +10, Ethan +10`. Insight: `Chen and Ethan tie for the highest improvement, with 10 points each.` Label `Possible solution · Walkthrough: 5 minutes`. | Existing `.slide.two` + `.code-window.python` + `.note`; activity-time badge. | **Shortened slide excerpt, full code in completed notebook:** four assignment lines for `average_quiz1`, `above_80`, `Improvement`, and `sort_values(..., ascending=False)`. Map excerpt to completed Cells 20, 22, 24, 26; do not overwrite attendee TODOs. | The three exact outputs above; sorted top two rows Chen and Ethan, both `10`. | Attendee Cells 20-28 remain the learner attempt. Completed Cells 20-28 are the solution walkthrough and exact outputs. | Alson lead; Murugan facilitates | 5 min walkthrough |
| 16 | NumPy helps with a list of numbers | Light NumPy | Position NumPy as a helper, not a separate lecture. | Question: `What happened across five CCA sessions?` Show attendance values by session: `S1 20, S2 25, S3 18, S4 30, S5 28`. Explain: `NumPy stores numbers in an array and calculates across them quickly.` | Existing `.slide.two`; native table/row grid plus short definition. | Attendance data from Cell 32. | Visible five-value sequence. | **NumPy: CCA Attendance**, Cells 31-33; Cell 32 live demo. | Murugan | 4 min |
| 17 | Create one simple array | Light NumPy | Connect a familiar list of numbers to `np.array()`. | Question: `How do we give NumPy the attendance numbers?` One code window and one-sentence explanation. | Existing `.slide.two` + `.code-window.python`. | Exact Cell 32: `attendance = np.array([20, 25, 18, 30, 28])`; display `attendance`. | `array([20, 25, 18, 30, 28])`. | **NumPy: CCA Attendance**, Cell 32 live demo + Cell 33 `Output:` line. | Murugan | 4 min |
| 18 | What are the typical, highest, and lowest attendances? | Light NumPy | Teach only mean, maximum, and minimum. | Three labelled questions: `Typical?`; `Highest?`; `Lowest?`. End with insight: `Attendance averaged 24.2, peaked at 30, and was lowest at 18.` | Existing `.slide.two`; code left, three summary rows right. | Exact Cell 34: print `np.mean(attendance)`, `np.max(attendance)`, `np.min(attendance)`. | `Mean: 24.2`; `Maximum: 30`; `Minimum: 18`. | **NumPy: CCA Attendance**, Cell 34 live demo + Cell 35 `Output:` line. | Murugan | 7 min |
| 19 | Which chart matches the question? | matplotlib | Teach chart choice before syntax. | `Compare categories → Bar chart`; `Track change over time → Line chart`; `Compare two numbers → Scatter plot`. Question examples use food orders, attendance by session, and study hours vs quiz score. | Existing `.summary-table` / `.summary-row`; small CSS chart glyphs may be decorative, not separate assets. | No code. | None. | **matplotlib: Seeing Patterns**, Cells 36 and 47; complete Markdown. | Murugan | 3 min |
| 20 | What food-order data do we have? | matplotlib | Introduce the exact category dataset before charting it. | Question: `Which food item received the most orders?` Show five-row `Food` and `Orders` table. Explain each row is one food item. | Existing `.slide.two`; code dictionary left, **new native data table** right. | Exact Cell 37: `food_data` dictionary and `food = pd.DataFrame(food_data)`. | A five-row DataFrame; values `35, 28, 18, 22, 15`. | **matplotlib: Seeing Patterns**, Cell 37 live demo + Cell 38 `Output:` line. | Murugan | 3 min |
| 21 | Bar chart: compare categories | matplotlib | Create and interpret a basic food-orders bar chart without pre-completing Activity 2. | Question: `Which food item received the most orders?` Show the two-line basic chart and output. Insight: `Chicken Rice has the tallest bar: 35 orders.` Ask aloud: `What does this chart tell us?` Callout: `The pattern is visible, but the chart still needs a title and axis labels.` | Existing `.slide.two`; code left, **new `.chart-figure`** right. | Exact Cell 39: `plt.bar(food["Food"], food["Orders"])` then `plt.show()`. | Basic five-bar chart with no added title/axis labels; Chicken Rice is highest at `35`. | **matplotlib: Seeing Patterns**, Cell 39 live demo + Cell 40 `Output:` line. | Murugan | 3 min |
| 22 | Line chart: track change over time | matplotlib | Show a sequence across ordered sessions. | Question: `How did CCA attendance change?` Show code and chart. Insight: `Attendance dips at S3, peaks at S4, and ends above S1.` Avoid saying it rises continuously. | Existing `.slide.two` + `.code-window.python` + `.chart-figure`. | Exact Cell 41: `sessions = ["S1", ..., "S5"]`; `plt.plot(sessions, attendance)`; title and axis labels; `plt.show()`. | Line chart through `20, 25, 18, 30, 28`; S4 highest. | **matplotlib: Seeing Patterns**, Cell 41 live demo + Cell 42 `Output:` line. | Murugan | 3 min |
| 23 | What could explain different quiz scores? | matplotlib | Introduce the two-number study dataset before a scatter plot. | Question: `Does studying more seem linked to higher scores?` Show five rows with Student, Hours Studied, Quiz Score. Callout: `We are looking for a relationship, not proving a cause.` | Existing `.slide.two`; code/data definition plus native data table. | Exact Cell 43: `study_data` and `study = pd.DataFrame(study_data)`. | Five-row DataFrame with hours `2,4,1,5,3` and scores `65,82,58,90,75`. | **matplotlib: Seeing Patterns**, Cell 43 live demo + Cell 44 `Output:` line. | Murugan | 3 min |
| 24 | Scatter plot: compare two numbers | matplotlib | Plot and cautiously interpret the relationship. | Question repeated. Show chart. Insight: `In this five-student sample, higher study hours are associated with higher quiz scores.` Caution: `This does not prove studying more always causes a higher score.` | Existing `.slide.two` + `.code-window.python` + `.chart-figure`. | Exact Cell 45: `plt.scatter(study["Hours Studied"], study["Quiz Score"])`, title/labels, `plt.show()`. | Five points forming a positive upward pattern. | **matplotlib: Seeing Patterns**, Cell 45 live demo + Cell 46 `Output:` line. | Murugan | 3 min |
| 25 | A chart needs context | matplotlib | Consolidate titles, axes, and interpretation without another code demo. | Compare Slide 21's basic bar chart with the labelled line/scatter charts. Three checks: `Title: what question is this chart about?`; `Axes: what does each direction measure?`; `Insight: what pattern is visible?`. Mini comparison: bar/categories, line/time order, scatter/relationship. | Existing `.takeaway` + `.takeaway-row`; use annotated chart crops from the generated SVGs only if readable. | No new code; reference the basic bar in Cell 39 and labels in Cells 41 and 45. Activity 2 adds the missing bar-chart context. | Learners can name the chart's question, axes, and one evidence-based insight. | **matplotlib: Seeing Patterns**, Cell 47 recap prompt. | Murugan | 2 min |
| 26 | Activity 2: Which food item was most popular? | Activity 2 | Launch the guided plotting task. | Tasks: `Create a bar chart`; `Add title Food Orders`; `Label Food and Number of Orders`; `Identify the tallest bar`; `Write one insight`. `Notebook: Activity 2, Cells 48-51`. Prominent `Attempt: 6 minutes`. Small hint callout: `x-axis = Food; bar height = Orders`. Verbal reminder at 2 minutes remaining. | Existing activity challenge + `.activity-meta`; no separate hint slide. | Cell 49 guided plotting blanks; no completed line shown beyond the x/y hint. | A labelled five-bar chart and one insight; no solution chart displayed yet. | **Activity 2: Most Popular Food**, Cells 48-51; Cell 49 activity attempt; Cell 51 insight/hint. | Murugan lead; Alson facilitates | 6 min attempt |
| 27 | Possible solution: Chicken Rice leads | Activity 2 | Walk through the complete chart and interpretation. | Label `Possible solution · Walkthrough: 4 minutes`. Show full code, completed chart, and insight: `Chicken Rice received the most orders, with 35.` Ask learners to identify the tallest bar before revealing the sentence. | Existing `.slide.two` + `.code-window.python` + `.chart-figure` + `.note`. | Completed Cell 49 exact code: `plt.bar(food["Food"], food["Orders"])`, title, x/y labels, `plt.show()`. | Labelled bar chart; Chicken Rice highest at `35`. | Attendee Cell 49 remains the attempt. Completed Cells 49-51 provide the walkthrough and insight. | Murugan lead; Alson facilitates | 4 min walkthrough |
| 28 | seaborn: cleaner defaults, same question | seaborn | Position seaborn relative to matplotlib without starting a new topic. | Comparison labels: `matplotlib: more direct control`; `seaborn: cleaner defaults for labelled data`. Show only the plotting-call difference: `plt.bar(food["Food"], food["Orders"])` vs `sns.barplot(data=food, x="Food", y="Orders")`. State: `Same data. Same question. Use the same title and axis labels.` | Existing `.compare` with two short code windows. | **Shortened slide excerpts** from Cells 39 and 53; full runnable code remains in notebook. | No new numerical result. | **seaborn: Cleaner Defaults**, Cells 52-53; Cell 53 live demo supplies full seaborn code. | Murugan | 3 min |
| 29 | Same answer, cleaner default | seaborn | Recreate the food chart and close the library comparison. | Show completed seaborn chart. Insight remains: `Chicken Rice has the highest orders, 35.` Closing rule: `Use matplotlib for control; use seaborn when its defaults make a labelled chart clearer.` | Existing `.slide.two`; concise explanation + `.chart-figure`. | Exact Cell 53: `sns.barplot(data=food, x="Food", y="Orders")`, same title/labels, `plt.show()`. | Seaborn bar chart with the same five values and same highest category. | **seaborn: Cleaner Defaults**, Cell 53 live demo + Cell 54 `Output:` line. | Murugan | 3 min |
| 30 | From question to insight | Wrap-up | Recap the loop and the concrete skills attendees used. | Loop repeated: `Question → Data → Code → Output/Chart → Insight`. Four concise rows: `pandas: tables`; `NumPy: simple summaries`; `matplotlib: bar, line, scatter`; `seaborn: cleaner alternative`. Prompt: `You do not need to memorise every function.` | Existing `.summary-table` and `.flow-title`; avoid dense code. | No code. | None. | **Wrap-up**, Cell 55; complete Markdown. | Alson with Murugan support | 2 min |
| 31 | Questions? | Wrap-up | End with the required Workshop 3 bridge and quick Q&A. | Exact final link: `Today we looked for patterns.` newline `Next week, machine learning uses patterns to make predictions.` Add `Q&A`, speaker names, and a small contained SPAI logo; no attendance QR or unverified external link. | Existing `.slide.center` + `.section-title`; reuse the logo as a restrained closing brand mark. | No code. | None. | **Wrap-up**, Cell 55; complete Markdown. **Optional Extension**, Cell 56 remains notebook-only and is not presented unless time remains. | Alson and Murugan | 2 min |

The 10-minute break/buffer occurs after Slide 15. No break slide is added: complete the walkthrough, announce the break, and do not advance to Slide 16 until the restart at minute 65. This preserves the content document's 31-slide structure and avoids introducing content during the buffer.

---

## 5. Required Slide Sequence

The plan uses exactly 31 slides and preserves the required sequence:

- **Slides 1-3 — Opening:** Workshop 2 title; Workshop 1 recap; Workshop 2 goal and Workshop 3 roadmap.
- **Slides 4-6 — How Data Analytics Works:** plain-English meaning; five-step loop; question-first examples.
- **Slides 7-12 — pandas Tables:** pandas purpose; full DataFrame; rows/columns and `head()`; selection/filtering; mean; calculated column.
- **Slides 13-15 — Activity 1:** challenge with 10-minute attempt; non-solution progress hints; possible solution with 5-minute walkthrough.
- **Minutes 55-65 — Break / Buffer:** no slide and no new content.
- **Slides 16-18 — Light NumPy:** helper role; one array; mean, maximum, and minimum.
- **Slides 19-25 — matplotlib:** chart choice; food data; bar; line; study data; scatter; labels and interpretation.
- **Slides 26-27 — Activity 2:** challenge with 6-minute attempt and small hint; possible solution with 4-minute walkthrough.
- **Slides 28-29 — seaborn:** concise matplotlib/seaborn comparison; recreate the food-orders chart.
- **Slides 30-31 — Wrap-up:** recap; Workshop 3 bridge and Q&A.

The exact timing is 110 minutes of instruction/activity plus a 10-minute break/buffer. No section, activity, dataset, learning outcome, or Workshop 3 connection is omitted.

---

## 6. Attendee Notebook Plan

Target: `notebooks/AIDK_W2_Workshop.ipynb`

The attendee notebook has 57 cells in the exact slide order. It contains 20 code cells and 37 Markdown cells. It uses small inline datasets and does not read external files. Live-demo code is complete and runnable; only the two activity sections contain blanks. After each live-demo code cell, the next Markdown cell begins with `Output:`. Activity output descriptions state the shape of the expected result without revealing the completed answer before the walkthrough.

The five stable top-level teaching sections are expanded into the named sequence in Section 4. Every heading includes the matching slide or range, for example `## pandas: Student Scores — Slides 7-12`.

| Cell | Type | Section | Slide Mapping | Purpose | Intended Content | Expected Output | Attendee State |
|---:|---|---|---|---|---|---|---|
| 0 | Markdown | Start Here | 1-3 | Title and learning outcomes | `# AI Don't Know Workshop 2: Data Analytics and Visualisation`; date/time; outcomes: create/read a DataFrame, select/filter, calculate simple summaries, add a column, choose/create three charts, recreate one chart with seaborn, state one insight. | None. | Complete |
| 1 | Markdown | Start Here | 1-3 | Explain notebook use | State that live demos are run together, activity blanks are learner work, and the notebook follows slide order. Include the core loop and `Run cells from top to bottom`. | None. | Complete |
| 2 | Code | Start Here | 1-3 / setup | Import all required libraries once | `import pandas as pd`; `import numpy as np`; `import matplotlib.pyplot as plt`; `import seaborn as sns`. | No visible output if imports succeed. | Run only |
| 3 | Markdown | Start Here | 1-3 / setup | Speaker-aid output line | `Output: No visible output. The four imports complete without errors.` | Text only. | Complete |
| 4 | Markdown | Ask a Data Question | 4-6 | Frame the investigation | Heading `## Ask a Data Question — Slides 4-6`; define analytics in plain English; show `Question -> Data -> Code -> Output/Chart -> Insight`; list the three workshop questions. | None. | Complete |
| 5 | Markdown | pandas: Student Scores | 7 | Introduce pandas and the dataset | Heading `## pandas: Student Scores — Slides 7-12`; question `What information do we have?`; explain row/column/DataFrame in beginner language. | None. | Complete |
| 6 | Code | pandas: Student Scores | 7-8 | Create the authoritative Student Scores DataFrame | Exact `student_data` dictionary from Section 8, followed by `students = pd.DataFrame(student_data)` and `students`. | Five rows and four columns: Name, Class, Quiz1, Quiz2. | Live demo |
| 7 | Markdown | pandas: Student Scores | 7-8 | Required output line | `Output: A DataFrame with five students and four columns: Name, Class, Quiz1, and Quiz2.` | Text only. | Complete |
| 8 | Code | pandas: Student Scores | 9 | View the first rows | `students.head()` | The same five rows, because the DataFrame contains five students. | Live demo |
| 9 | Markdown | pandas: Student Scores | 9 | Required output line | `Output: The first five rows of the student table; here, that is the full dataset.` | Text only. | Complete |
| 10 | Code | pandas: Student Scores | 10 | Select one column and filter non-activity rows | `quiz1_scores = students["Quiz1"]`; `class_b_students = students[students["Class"] == "B"]`; blank line; `print(quiz1_scores)`; `print(class_b_students)`. | Quiz1 values 72, 85, 60, 90, 55; Class B table containing Chen and Deepa. | Live demo |
| 11 | Markdown | pandas: Student Scores | 10 | Required output line | `Output: The Quiz1 column, followed by the two Class B rows for Chen and Deepa.` | Text only. | Complete |
| 12 | Code | pandas: Student Scores | 11 | Calculate a non-activity mean | `average_quiz2 = students["Quiz2"].mean()` then `print(average_quiz2)`. | `78.6`. | Live demo |
| 13 | Markdown | pandas: Student Scores | 11 | Required output line | `Output: The average Quiz 2 score, 78.6.` | Text only. | Complete |
| 14 | Code | pandas: Student Scores | 12 | Create a calculated column without revealing Improvement | `students["Total"] = students["Quiz1"] + students["Quiz2"]`; display `students[["Name", "Quiz1", "Quiz2", "Total"]]`. | Totals 150, 173, 130, 182, 120 in student order. | Live demo |
| 15 | Markdown | pandas: Student Scores | 12 | Required output line | `Output: A table with a new Total column calculated from Quiz1 plus Quiz2.` | Text only. | Complete |
| 16 | Markdown | pandas: Student Scores | 12 | Short recap prompt | `Before the activity, explain: Which brackets select a column? What does a filter keep? What does mean calculate? How did Total use two columns?` | Learner responses; no code. | Complete |
| 17 | Markdown | Activity 1: Who Improved the Most? | 13 | Challenge and timing | Heading `## Activity 1: Who Improved the Most? — Slides 13-15`; exact five tasks; `Attempt time: 10 minutes`; tell attendees to run Cell 18 first and complete Cells 20, 22, 24, 26, and 28. | None. | Complete |
| 18 | Code | Activity 1: Who Improved the Most? | 13 | Reset the table so the demo-only Total column does not clutter the activity | `students = pd.DataFrame(student_data)` then `students`. | Clean five-row, four-column Student Scores DataFrame. | Run only |
| 19 | Markdown | Activity 1: Who Improved the Most? | 13 | Non-answer output line for reset | `Output: The original five-row student table without the demo-only Total column.` | Text only. | Complete |
| 20 | Code | Activity 1: Who Improved the Most? | 13-15 | Guided average attempt | `average_quiz1 = students["Quiz1"].____()`; `print(average_quiz1)`. Do not prefill `mean`. | One number: the average Quiz 1 score. | Fill in blank |
| 21 | Markdown | Activity 1: Who Improved the Most? | 13-15 | Expected shape without answer leakage | `Output: One number showing the average Quiz 1 score.` | Text only. | Complete |
| 22 | Code | Activity 1: Who Improved the Most? | 13-15 | Guided filter attempt | `above_80 = students[students["Quiz2"] ____ 80]`; `above_80`. Do not prefill `>`. | A filtered table containing only Quiz 2 scores above 80. | Fill in blank |
| 23 | Markdown | Activity 1: Who Improved the Most? | 13-15 | Expected shape without answer leakage | `Output: A filtered table containing only students whose Quiz 2 score is above 80.` | Text only. | Complete |
| 24 | Code | Activity 1: Who Improved the Most? | 13-15 | Guided calculated-column attempt | `students["Improvement"] = students["Quiz2"] ____ students["Quiz1"]`; `students`. Do not prefill `-`. | Original table plus Improvement. | Fill in blank |
| 25 | Markdown | Activity 1: Who Improved the Most? | 13-15 | Expected shape without answer leakage | `Output: The student table with an Improvement column calculated for every row.` | Text only. | Complete |
| 26 | Code | Activity 1: Who Improved the Most? | 13-15 | Guided sort attempt | `sorted_students = students.sort_values("Improvement", ascending=____)`; `sorted_students[["Name", "Improvement"]]`. Do not prefill `False`. | Name and Improvement sorted highest first. | Fill in blank |
| 27 | Markdown | Activity 1: Who Improved the Most? | 13-15 | Expected shape without answer leakage | `Output: A two-column table sorted from the highest improvement to the lowest.` | Text only. | Complete |
| 28 | Markdown | Activity 1: Who Improved the Most? | 13-15 | Require a plain-English insight | Prompt: `Complete this insight after running your code: ___ and ___ improved the most, by ___ points.` The blanks remain in the attendee notebook. | One plain-English sentence. | TODO |
| 29 | Markdown | Activity 1: Who Improved the Most? | 14 | Optional non-solution hints | Optional hints in a `<details>` block or clearly labelled Markdown: `mean belongs to Quiz1`; `compare Quiz2 with 80`; `Improvement is later quiz minus earlier quiz`; `descending puts the largest first`; check exact column spelling. | None. | Optional |
| 30 | Markdown | Break / Buffer | none | Preserve the timed catch-up break in notebook order | `## Break / Buffer — 10 minutes`; `Do not start a new section. Check that Cells 2-29 run and ask a facilitator about errors.` | None. | Complete |
| 31 | Markdown | NumPy: CCA Attendance | 16-18 | Introduce the supporting library | Heading `## NumPy: CCA Attendance — Slides 16-18`; question `What happened across five CCA sessions?`; state that NumPy is a helper for simple calculations. | None. | Complete |
| 32 | Code | NumPy: CCA Attendance | 16-17 | Create the exact attendance array | `attendance = np.array([20, 25, 18, 30, 28])`; `attendance`. | `array([20, 25, 18, 30, 28])`. | Live demo |
| 33 | Markdown | NumPy: CCA Attendance | 16-17 | Required output line | `Output: A NumPy array containing attendance for five CCA sessions.` | Text only. | Complete |
| 34 | Code | NumPy: CCA Attendance | 18 | Calculate only the required summaries | `print("Mean:", np.mean(attendance))`; `print("Maximum:", np.max(attendance))`; `print("Minimum:", np.min(attendance))`. | Mean 24.2, Maximum 30, Minimum 18. | Live demo |
| 35 | Markdown | NumPy: CCA Attendance | 18 | Required output line | `Output: Mean 24.2, maximum 30, and minimum 18.` | Text only. | Complete |
| 36 | Markdown | matplotlib: Seeing Patterns | 19 | Teach chart choice before code | Heading `## matplotlib: Seeing Patterns — Slides 19-25`; map bar/categories, line/change over ordered sessions, scatter/two numbers; prompt `What question does each chart answer?` | None. | Complete |
| 37 | Code | matplotlib: Seeing Patterns | 20 | Create the exact Food Orders DataFrame | Exact `food_data` dictionary from Section 8, `food = pd.DataFrame(food_data)`, and `food`. | Five-row DataFrame with Food and Orders. | Live demo |
| 38 | Markdown | matplotlib: Seeing Patterns | 20 | Required output line | `Output: A five-row DataFrame containing each food item and its number of orders.` | Text only. | Complete |
| 39 | Code | matplotlib: Seeing Patterns | 21 | Create a basic bar chart without pre-completing Activity 2 | `plt.bar(food["Food"], food["Orders"])`; `plt.show()`. Title and axis labels are intentionally absent and become the activity task. | Basic five-bar chart; Chicken Rice is highest at 35. | Live demo |
| 40 | Markdown | matplotlib: Seeing Patterns | 21 | Required output line | `Output: A basic bar chart showing Chicken Rice as the highest category, 35. The chart still needs a title and axis labels.` | Text only. | Complete |
| 41 | Code | matplotlib: Seeing Patterns | 22 | Create the labelled attendance line chart | `sessions = ["S1", "S2", "S3", "S4", "S5"]`; `plt.plot(sessions, attendance)`; title `CCA Attendance by Session`; x label `Session`; y label `Attendance`; `plt.show()`. | Line chart: 20, 25, 18, 30, 28; dip at S3 and peak at S4. | Live demo |
| 42 | Markdown | matplotlib: Seeing Patterns | 22 | Required output line | `Output: A line chart showing attendance across five CCA sessions, with a dip at S3 and a peak at S4.` | Text only. | Complete |
| 43 | Code | matplotlib: Seeing Patterns | 23 | Create the exact study DataFrame | Exact `study_data` dictionary from Section 8, `study = pd.DataFrame(study_data)`, and `study`. | Five-row DataFrame with Student, Hours Studied, Quiz Score. | Live demo |
| 44 | Markdown | matplotlib: Seeing Patterns | 23 | Required output line | `Output: A five-row DataFrame pairing each student's study hours with quiz score.` | Text only. | Complete |
| 45 | Code | matplotlib: Seeing Patterns | 24 | Create the labelled scatter plot | `plt.scatter(study["Hours Studied"], study["Quiz Score"])`; title `Study Hours vs Quiz Score`; x label `Hours Studied`; y label `Quiz Score`; `plt.show()`. | Five points with a positive upward pattern. | Live demo |
| 46 | Markdown | matplotlib: Seeing Patterns | 24 | Required output line and cautious interpretation | `Output: A scatter plot with a positive relationship in this sample: students with more study hours tend to have higher quiz scores. This does not prove that studying more always causes a higher score.` | Text only. | Complete |
| 47 | Markdown | matplotlib: Seeing Patterns | 25 | Recap chart interpretation | Three prompts: `What is the chart's question?`; `What do the axes measure?`; `What pattern is visible?`; small bar/line/scatter choice recap. | Learner responses. | Complete |
| 48 | Markdown | Activity 2: Most Popular Food | 26 | Challenge and timing | Heading `## Activity 2: Most Popular Food — Slides 26-27`; four tasks; `Attempt time: 6 minutes`; complete Cells 49 and 51. | None. | Complete |
| 49 | Code | Activity 2: Most Popular Food | 26-27 | Guided plotting attempt | Comments and blanks: `plt.bar(food["_____"], food["_____"])`; `plt.title("_____")`; `plt.xlabel("_____")`; `plt.ylabel("_____")`; `plt.show()`. Comments state intended title and axes but not the completed code. | A labelled Food Orders bar chart. | Fill in blank |
| 50 | Markdown | Activity 2: Most Popular Food | 26-27 | Expected shape without displaying solution chart | `Output: A bar chart with food items on the x-axis, order counts on the y-axis, a title, and labels for both axes.` | Text only. | Complete |
| 51 | Markdown | Activity 2: Most Popular Food | 26-27 | Insight prompt and optional hints | Prompt: `Complete: ___ received the most orders, with ___.` Hints: `Food is the category`; `Orders controls bar height`; `the tallest bar answers the question`. Blanks remain. | One plain-English sentence. | TODO |
| 52 | Markdown | seaborn: Cleaner Defaults | 28 | Introduce the alternative briefly | Heading `## seaborn: Cleaner Defaults — Slides 28-29`; state `same data, same question`; matplotlib offers control, seaborn often offers cleaner defaults. | None. | Complete |
| 53 | Code | seaborn: Cleaner Defaults | 28-29 | Recreate the food chart with seaborn | `sns.barplot(data=food, x="Food", y="Orders")`; same title, x label, y label, `plt.show()`. | Seaborn bar chart with Chicken Rice highest at 35. | Live demo |
| 54 | Markdown | seaborn: Cleaner Defaults | 29 | Required output line | `Output: A cleaner-default bar chart using the same five food-order values; Chicken Rice remains highest at 35.` | Text only. | Complete |
| 55 | Markdown | Wrap-up | 30-31 | Recap and Workshop 3 bridge | Heading `## Wrap-up — Slides 30-31`; repeat core loop; list library roles; exact bridge: `Today we looked for patterns. Next week, machine learning uses patterns to make predictions.` | None. | Complete |
| 56 | Markdown | Optional Extension | after 31 | Preserve the source document's cut-first mini challenge without adding a slide | `## Optional Extension — Only if time remains`; questions: highest quiz score, whether study time seems related, and which favourite food appears most often. State that it is not part of the required 120-minute flow and must be cut first. | Learner discussion; no supplied new dataset or code. | Optional |

The intentional `TODO` and blank tokens above are learner-facing activity prompts, not unresolved items in this specification.

### Activity protection rules

- Cells 20, 22, 24, 26, 28, 49, and 51 remain incomplete in the attendee notebook.
- The notebook may describe the expected *shape* of activity output, but it must not display `72.4`, Bella/Deepa, the Chen/Ethan tie, or the completed Activity 2 code before the speaker walkthrough.
- The live demos deliberately use Class B, Quiz 2 mean, and Total so the activity operations are familiar without disclosing the completed answers.
- Activity 2 deliberately revisits Slide 21's food categories, as required by the content document. Cell 39 shows only the basic two-line bar chart; the completed title-and-label solution does not appear until completed Cell 49 and Slide 27.
- Hints are optional and located after the attempt cells. They may name the relevant column or direction, but must not paste a complete solution line.

---

## 7. Completed Notebook Plan

Target: `notebooks/AIDK_W2_Workshop_Completed.ipynb`

The completed notebook also has exactly 57 cells: the same cell types, section headings, slide mappings, and order as the attendee notebook. Non-activity cells are identical. Activity code cells replace only the intended blanks; activity insight Markdown replaces only the learner blanks. The completed notebook stores executed outputs and chart displays, runs from Cell 0 to Cell 56 in a fresh kernel, and is the speaker/facilitator backup.

| Attendee Cell | Completed Cell | Completed Logic | Expected Output | Matching Slide |
|---:|---:|---|---|---:|
| 20 | 20 | `average_quiz1 = students["Quiz1"].mean()` then print | `72.4` | 15 |
| 22 | 22 | `above_80 = students[students["Quiz2"] > 80]` then display | Two rows: Bella (`88`) and Deepa (`92`) | 15 |
| 24 | 24 | `students["Improvement"] = students["Quiz2"] - students["Quiz1"]` then display | Improvement values in student order: `6, 3, 10, 2, 10` | 15 |
| 26 | 26 | `sorted_students = students.sort_values("Improvement", ascending=False)` then display Name/Improvement | Improvement values descend as `10, 10, 6, 3, 2`; Chen and Ethan occupy the first two rows in either tie order | 15 |
| 28 | 28 | Replace blanks with `Chen and Ethan improved the most, by 10 points.` | Plain-English tie insight | 15 |
| 49 | 49 | `plt.bar(food["Food"], food["Orders"])`; title `Food Orders`; x label `Food`; y label `Number of Orders`; show | Completed five-bar chart; Chicken Rice tallest at `35` | 27 |
| 51 | 51 | Replace blanks with `Chicken Rice received the most orders, with 35.` Retain hints below the answer as facilitator reference. | Plain-English chart insight | 27 |

Completed-notebook execution rules:

- Clear all outputs, restart the kernel, and run every cell in order before release.
- Preserve the executed outputs for speaker backup, including all DataFrames, numbers, and five chart displays.
- Do not add speaker-only setup or hidden-state cells that would break the 57-cell structural match.
- Do not mutate dataset values between sections. The explicit Cell 18 reset is the only deliberate Student Scores reset.
- Export the five chart assets from the completed notebook's exact plotting data and labels; do not redraw them by hand.

---

## 8. Dataset Contract

These values are immutable across slides, attendee notebook, completed notebook, generated chart assets, validation scripts, and speaker walkthroughs.

### Student Scores

```python
student_data = {
    "Name": ["Alex", "Bella", "Chen", "Deepa", "Ethan"],
    "Class": ["A", "A", "B", "B", "A"],
    "Quiz1": [72, 85, 60, 90, 55],
    "Quiz2": [78, 88, 70, 92, 65]
}
```

Required facts:

- Average Quiz 1 score: `72.4`.
- Average Quiz 2 score used in the pre-activity demo: `78.6`.
- Quiz 2 above 80: Bella and Deepa.
- Demo-only Total values: Alex `150`, Bella `173`, Chen `130`, Deepa `182`, Ethan `120`.
- Improvement values: Alex `6`, Bella `3`, Chen `10`, Deepa `2`, Ethan `10`.
- Chen improvement: `10`.
- Ethan improvement: `10`.
- Chen and Ethan tie for highest improvement.

### CCA Attendance

```python
attendance = np.array([20, 25, 18, 30, 28])
```

Required facts:

- Session labels used for the line chart: `S1`, `S2`, `S3`, `S4`, `S5` in that order.
- Mean: `24.2`.
- Maximum: `30` at S4.
- Minimum: `18` at S3.
- Safe interpretation: attendance dips at S3, peaks at S4, and ends above S1; do not describe it as a continuous rise.

### Food Orders

```python
food_data = {
    "Food": ["Chicken Rice", "Nasi Lemak", "Pasta", "Burger", "Sandwich"],
    "Orders": [35, 28, 18, 22, 15]
}
```

Required fact: Chicken Rice has the highest orders, `35`.

### Study Hours vs Quiz Score

```python
study_data = {
    "Student": ["Alex", "Bella", "Chen", "Deepa", "Ethan"],
    "Hours Studied": [2, 4, 1, 5, 3],
    "Quiz Score": [65, 82, 58, 90, 75]
}
```

Required interpretation:

- The five-point sample shows a positive relationship between study hours and quiz score.
- Use cautious language: `In this sample, students with more study hours tend to have higher quiz scores.`
- Do not claim that studying more always causes a higher score.

No validation or visual layer may reorder categories or relabel fields without updating the slide/notebook mapping and rechecking every expected fact.

---

## 9. Speaker and Timing Plan

Alson owns the opening, analytics thinking, pandas, Activity 1 lead, and wrap-up lead. Murugan owns light NumPy, matplotlib, Activity 2 lead, seaborn, and wrap-up support. During each activity, the lead explains the challenge and walkthrough; the other speaker moves through the room, helps with syntax/import/column-name/bracket errors, and avoids revealing the full solution.

| Section | Planned Duration | Alson Role | Murugan Role | Cut-First Content if Delayed |
|---|---:|---|---|---|
| Opening, Slides 1-3 | 10 min | Lead welcome, recap, goal, W3 roadmap | Confirm room/notebook readiness; support | Shorten spoken Workshop 1 recap examples; keep Slide 3 goal and W3 link. |
| How Data Analytics Works, Slides 4-6 | 10 min | Lead question-first framing and loop | Support examples | Omit extended discussion of the third example; keep the five-step loop. |
| pandas Tables, Slides 7-12 | 20 min | Lead all demos and output interpretation | Watch attendee notebooks and common errors | Cut prediction pauses and repeated bracket explanations, not DataFrame/select/filter/mean/calculated-column coverage. |
| Activity 1, Slides 13-15 | 15 min | Lead 10-minute challenge, reminders, and 5-minute walkthrough | Facilitate; give hints without pasting answers | Do not cut. Keep attempt and walkthrough times exact. |
| Break / Buffer | 10 min | Help attendees catch up | Help attendees catch up | After optional content and seaborn/repeated-style reductions have been used, this buffer may absorb up to 5 minutes of prior overrun; retain a brief reset. |
| Light NumPy, Slides 16-18 | 15 min | Support and monitor | Lead array and three calculations | Shorten prediction discussion; keep array, mean, max, min. |
| matplotlib, Slides 19-25 | 20 min | Support and monitor | Lead chart choice and three chart demos | Reduce repeated title/axis-label narration on Slide 25; do not remove a chart type or its interpretation. |
| Activity 2, Slides 26-27 | 10 min | Facilitate plotting errors | Lead 6-minute challenge and 4-minute walkthrough | Do not cut. Keep attempt and walkthrough times exact. |
| seaborn, Slides 28-29 | 6 min | Support | Lead concise comparison and recreation | Reduce to the plotting-call comparison plus completed chart; avoid extra feature discussion. |
| Wrap-up and Q&A, Slides 30-31 | 4 min | Lead recap and W3 bridge | Add final chart/library clarification | Shorten Q&A or continue informally after 5 PM; do not remove the Workshop 3 bridge. |

Timing cuts must be applied in this order:

1. Cut Cell 56's optional extension completely.
2. Reduce seaborn explanation to its essential same-data/same-question comparison.
3. Reduce repeated chart-styling explanation, especially Slide 25 narration.
4. Do not cut either main activity.
5. Do not remove the Workshop 3 bridge.

---

## 10. Asset Plan

No asset is generated or downloaded during planning. During implementation, use the existing SPAI logo and create only teaching visuals that cannot be expressed more clearly as HTML/CSS. Chart SVGs must be generated from the exact datasets, category order, titles, and labels in the completed notebook; they must not be hand-drawn approximations.

| Asset | Purpose | Required or Optional | Format | Intended Path | Source |
|---|---|---|---|---|---|
| SPAI logo | Small contained brand mark on Slide 31 | Required | Existing PNG, renamed only | `public/assets/logos/spai-logo.png` | Reuse pixel content from `public/images/logos/SPAI Logo.png` |
| Workshop series roadmap | Show W1 → W2 → W3 and highlight W2 | Required | Native HTML/CSS rows | `index.html` + `src/styles/slides.css` | Existing `.outline-table` pattern; no external asset |
| Data analytics loop | Show Question → Data → Code → Output/Chart → Insight | Required | Native HTML/CSS flow | `index.html` + `src/styles/slides.css` | Existing `.flow-line` / `.flow-steps` pattern; no external asset |
| Student Scores tables | Introduce rows/columns and show outputs | Required | Accessible native HTML table | `index.html` + `.data-table` style in `src/styles/slides.css` | Dataset contract in Section 8 |
| Food Orders table | Make category values visible before plotting | Required | Accessible native HTML table | `index.html` + `.data-table` style | Dataset contract in Section 8 |
| Study Hours vs Quiz Score table | Make scatter inputs visible | Required | Accessible native HTML table | `index.html` + `.data-table` style | Dataset contract in Section 8 |
| Basic Food Orders matplotlib chart | Slide 21 first bar-chart output, intentionally before title/labels | Required | SVG | `public/assets/images/food-orders-bar-basic.svg` | Generated from completed notebook Cell 39 data and category order |
| Completed Food Orders matplotlib chart | Slide 27 activity walkthrough with title and both axis labels | Required | SVG | `public/assets/images/food-orders-bar.svg` | Generated from completed notebook Cell 49 data, order, title, and labels |
| CCA Attendance line chart | Slide 22 line-chart output | Required | SVG | `public/assets/images/cca-attendance-line.svg` | Generated from completed notebook Cell 41 data, order, title, and labels |
| Study Hours vs Quiz Score scatter chart | Slide 24 scatter output | Required | SVG | `public/assets/images/study-hours-quiz-score-scatter.svg` | Generated from completed notebook Cell 45 data, title, and labels |
| Food Orders seaborn chart | Slide 29 cleaner-default comparison | Required | SVG | `public/assets/images/food-orders-seaborn-bar.svg` | Generated from completed notebook Cell 53 data, order, title, and labels |
| Small chart-choice glyphs | Reinforce bar/line/scatter distinctions on Slide 19 | Optional | CSS-only lines/bars/dots | `index.html` + `src/styles/slides.css` | Authored from simple decorative spans; `aria-hidden="true"` |
| Workshop 3 preview visual | Reinforce patterns → predictions on Slide 31 | Optional | Native text/arrow, not an image | `index.html` | Existing title/section composition |

Asset rules:

- Prefer SVG for the five chart outputs so labels remain sharp on a projector.
- Export charts on a transparent or dark-compatible background only after checking contrast in the deck. If the default white plotting background is retained, contain it in the chart figure with sufficient padding and a fine border.
- Use meaningful `alt` text that states the chart type, variables, and main visible pattern. Do not put the only interpretation in alt text; keep the insight visible on the slide.
- Do not use code screenshots, stock photos, event-card photos, or decorative imagery.
- Do not reuse the Workshop 1 attendance QR or notebook-download image.
- If an external asset becomes necessary later, record creator, URL, licence, and credit in a new `materials/attributions.md`; none is currently planned.

---

## 11. Component Reuse Plan

The repository has class-based patterns, not imported framework components.

| Component | Existing Location | Workshop 2 Usage | Changes Required |
|---|---|---|---|
| Slide shell `.slide` with `center`, `standard`, `two`, `wide` | `index.html`, `src/styles/slides.css` | All 31 slides | Replace `data-title`/`data-footer` values and slide content only; preserve first-slide `active` rule. |
| Runtime `.stage` | `src/scripts/fitSlides.js`, `src/styles/slides.css` | Fit every slide to desktop viewport | None; never author `.stage` manually. |
| `.title-stack` | `index.html`, `src/styles/globals.css` | Slide 1 | Replace Workshop 1 copy and omit old URL. |
| `.section-title`, `.big-number`, `.kicker` | `index.html`, `src/styles/globals.css` | Opening/closing emphasis and concise section framing | Reuse directly; keep kickers short. Add only a scoped contained-image rule for the Slide 31 SPAI logo. |
| `.flow-line`, `.flow-title`, `.flow-steps`, `.flow-step` | `index.html`, `src/styles/slides.css` | Slide 5 analytics loop | Reuse unchanged; verify five columns and mobile stacking. |
| `.outline-table`, `.outline-row` | `index.html`, `src/styles/slides.css` | Slide 3 series roadmap | Reuse with Workshop 2 copy; no event dates beyond the source. |
| `.summary-table`, `.summary-row` | `index.html`, `src/styles/slides.css` | Slides 6, 18, 19, 30 | Reuse with concise rows. |
| `.takeaway`, `.takeaway-list`, `.takeaway-row` | `index.html`, `src/styles/slides.css` | Slides 2, 13-14, 25-26 | Reuse; ensure activity tasks remain readable and not paragraph-heavy. |
| `.code-window`, `.code-head`, `.code-label`, `.copy-btn`, token spans | `index.html`, `src/styles/code.css`, `src/scripts/copyCode.js` | All slide code examples and excerpts | Reuse; exact notebook text for full mappings; label excerpts. |
| `.compare` | `index.html`, `src/styles/code.css` | Slide 10 paired operations and Slide 28 library comparison | Reuse; add a named `.one-column` modifier only where an activity uses one pane, replacing inherited inline grid overrides. |
| `.note` | `index.html`, `src/styles/slides.css` | Expected output, insight, caution, and hint callouts | Reuse; do not create a separate generic insight card. |
| Progress/footer/controls | `index.html`, `src/scripts/navigation.js`, `src/styles/slides.css` | All slides | Preserve IDs `dots`, `footerLabel`, `slideNo`, `topProgress`, `prevBtn`, `nextBtn` and all existing behaviours. |
| Fixed frame, grain, and background | `index.html`, `src/styles/globals.css`, `src/styles/slides.css` | Entire deck | Reuse unchanged. |

Three new reusable patterns are justified:

| Recommended New Reusable Component | Existing Gap | Minimal Contract |
|---|---|---|
| `.data-table` | Existing outline/summary grids are not appropriate for true tabular datasets with column headers. | Style native `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, and row cells for up to five rows; warm paper text, hairline dividers, right-aligned numeric columns, responsive horizontal containment. |
| `.chart-figure` | There is no chart/caption container. | A `<figure>` containing SVG `<img>`, visible `<figcaption>`, fine border, restrained radius, and `object-fit: contain`; never crop labels. |
| `.activity-meta` with `.timer-badge` | Workshop 1 has no visible activity timer/metadata block, but both attempt and walkthrough times must be prominent. | Compact labelled block containing `Attempt` or `Walkthrough`, exact minutes, and notebook cells; copper/amber outline rather than a new bright status colour. It is informational, not a running JavaScript countdown. |

No data-question component is needed: use the slide title/lead/kicker. No output/insight component is needed: use `.note`. No JavaScript chart component, timer controller, presenter-note system, framework component folder, or data layer is proposed.

---

## 12. Slide and Notebook Synchronisation Contract

### Authoritative direction

1. The attendee notebook is authoritative for live-demo code, dataset values, variable names, activity blanks, and cell order.
2. The completed notebook must have the same 57 cell positions and types; it changes only activity blanks/answers and stores executed outputs.
3. `index.html` is authoritative for slide order and visible slide copy.
4. `ai_dont_know_workshop_2.html` receives its deck block from `index.html` through `npm run sync:standalone`; it is never edited as a separate slide sequence.

### Exact implementation rules

- Every live-demo slide maps to one notebook code cell and its immediately following `Output:` Markdown cell.
- Full slide code must match notebook code exactly after HTML entity/markup normalisation.
- Dataset values, key order, category order, labels, chart titles, variable names, and expected output text must be identical.
- Activity challenge slides must match the attendee prompts in Cells 17-29 and 48-51.
- Activity walkthrough slides must match completed Cells 20-28 and 49-51.
- Notebook headings reference the slide numbers or ranges listed in Section 6.
- Any shortened slide code is visibly labelled `Excerpt` and uses `data-code-mode="excerpt"`; the full code remains in the notebook.
- Any change to slide code requires checking both notebooks and regenerating any affected chart SVG.
- Any change to notebook code requires checking `index.html`, the standalone deck, expected output Markdown, and chart assets.
- Charts are generated from the same data shown in the notebook and slide tables; no manual value editing is allowed inside the SVG.
- Attendee and completed notebooks retain the same section, cell type, and cell order.
- The attendee notebook never gains the completed activity answers.

### Mapping attributes and validator scope

Retain `data-notebook-cell="N"` for a full exact mapping. Add `data-notebook-source="attendee"` or `data-notebook-source="completed"` when the distinction matters. For Slide 15's multi-cell excerpt, use `data-notebook-cells="20,22,24,26"`, `data-notebook-source="completed"`, and `data-code-mode="excerpt"`. Slide 28 uses excerpt labels for attendee Cells 39 and 53, while Slide 29 carries the full Cell 53 mapping.

The updated alignment check should validate these full live-demo cells in order: `6, 8, 10, 12, 14, 32, 34, 37, 39, 41, 43, 45, 53`. It should separately validate the activity attempt/solution contract for attendee/completed Cells `20, 22, 24, 26, 49` and insight Markdown Cells `28, 51`. Imports (Cell 2) and the explicit activity reset (Cell 18) are notebook-only setup and are not forced onto a slide.

For excerpts, the checker must assert that each displayed non-comment code line occurs in the referenced completed/full cell in the same order and that the slide visibly contains the word `Excerpt`. It must not treat an excerpt as the full cell.

### Output contract

- Cells 3, 7, 9, 11, 13, 15, 33, 35, 38, 40, 42, 44, 46, and 54 begin with `Output:` and immediately follow their live-demo code cells.
- Activity shape descriptions in Cells 21, 23, 25, 27, and 50 also begin with `Output:` but remain non-revealing in the attendee notebook.
- The completed notebook's executed output must agree with every numerical/visual statement in those lines.
- Slide `.note` output text must use the same values and interpretation as the notebook's `Output:` line.

---

## 13. Validation Plan

### Slides

Run and verify:

- `npm run build`. In this repository, this is a production-readiness validation command, not a compiled bundle; it runs alignment and standalone checks.
- `npm run dev` and open both `index.html` and `ai_dont_know_workshop_2.html` through the local server.
- Confirm 31 slide sections, unique stable `data-title` values, correct one-based count, and hashes `#1`, representative middle slides, and `#31`.
- Test previous/next buttons, disabled first/last states, clickable dots, Arrow Left/Right, Page Up/Down, Space, Home, and End.
- Confirm the top progress bar advances from `1/31` through `31/31`; footer labels match the active section.
- Confirm every `.stage` fits at 1440×900 and 1920×1080 without routine scaling near `0.68`; test just above and below the 980 px breakpoint and one narrow mobile width.
- Test every Copy button against the visible code, including quotation marks and indentation; verify `Copied` feedback and no button on non-code figures.
- Review projector readability of every data table, chart label, axis title, code line, output callout, and activity timer.
- Inspect the browser console for errors and the network panel/server log for missing CSS, JS, SVG, logo, or favicon references.
- Verify both HTML files show the same 31-slide deck and no Workshop 1 curriculum, URLs, notebook filenames, or event imagery.
- Confirm `prefers-reduced-motion` disables nonessential blur/transform animation without affecting navigation or visibility.

### Notebooks

- Parse both files as valid notebook JSON and confirm `nbformat`/metadata are valid.
- Assert exactly 57 cells in each notebook, with identical cell types and matching section headings at the same indices.
- Run the completed notebook from a fresh kernel, top to bottom, with no hidden-state dependency or manual pre-run.
- Confirm all four imports are present in Cell 2 and no external file path is used.
- Confirm every required numerical fact in Section 8: `72.4`, Bella/Deepa, improvement values and tie, `24.2`, `30`, `18`, and Chicken Rice `35`.
- Confirm the bar, line, scatter, and seaborn charts render with correct labels, category/order, and visible pattern.
- Clear and inspect the attendee notebook separately: Cells 20, 22, 24, 26, 28, 49, and 51 remain incomplete; all other code runs after those activity cells are temporarily skipped or filled in a disposable test copy.
- Confirm completed Cells 20, 22, 24, 26, 28, 49, and 51 contain the exact mappings in Section 7.
- Confirm every live-demo code cell is followed immediately by its required `Output:` Markdown cell.
- Compare chart SVGs with the completed notebook outputs at projector size.

### Synchronisation

- Run `npm run sync:standalone` only after `index.html` changes; then inspect the diff because it writes the standalone file.
- Run `npm run check:alignment` after either notebook or slide code changes.
- Run `npm run check:standalone-visuals` after standalone/style changes.
- Confirm full slide code equals mapped notebook code, excerpt lines occur in their referenced cells in order, and excerpt labels are visible.
- Confirm `student_data`, `attendance`, `food_data`, and `study_data` values match in attendee notebook, completed notebook, slide tables/code, and chart assets.
- Confirm activity instructions, blanks, hints, walkthrough code, outputs, and insights align.
- Confirm slide numbers/ranges in notebook headings match the final 31-slide order.
- Search active files for stale names: `01_AIDK_W1`, `ai_dont_know_workshop_1`, `AIDK_W1`, the Workshop 1 Vercel URL, and `Workshop 1 Flow`. Only historical explanatory references in `slides.md`, `AGENTS.md`, and the Workshop 2 recap/source documents may remain.

### Existing scripts to update during implementation

- `scripts/check-notebook-slide-alignment.mjs`: replace W1 notebook/standalone paths; add two-notebook structural checks, full/excerpt mapping modes, activity solution mapping, output-line checks, and immutable dataset assertions.
- `scripts/check-standalone-visual-contract.mjs`: replace W1 slide 3/4 selectors with Workshop 2 assertions for 31 sections, synced deck markup, required data-table/chart/activity styles, full shell controls, and no active W1 standalone path.
- `scripts/sync-standalone-slides.mjs`: change only the target to `ai_dont_know_workshop_2.html` and retain the canonical deck-block copy direction.
- `package.json`: reuse unchanged. Its generic `build`, `dev`, `sync:standalone`, `check:alignment`, and `check:standalone-visuals` commands already cover the planned workflow; do not introduce a bundler.

The Workshop 1 speaker-script checks are removed, not repurposed, because a Workshop 2 DOCX speaker script is not part of the approved deliverables.

---

## 14. Implementation Order

| Stage | Implementation Work | Dependencies | Verification Before Next Stage |
|---:|---|---|---|
| 1 | Replace all 45 Workshop 1 `<section>` elements in `index.html` with the 31-slide Workshop 2 skeleton, titles, section order, `data-title`, and `data-footer`; preserve the shell and fixed IDs. | Approved Sections 4-5. | Count 31 sections; navigate with existing scripts; search `index.html` for W1 curriculum/URL/notebook names. |
| 2 | Add the four exact dataset definitions to the attendee notebook design and use them as the sole runnable values; do not create `src/data`. | Stage 1 slide sequence; Section 8. | Programmatically calculate all required facts and compare with Section 8. |
| 3 | Build `notebooks/AIDK_W2_Workshop.ipynb` with exactly 57 cells, required headings, imports, live demos, output lines, challenge notices, guided blanks, hints, break, and optional extension. | Stage 2 datasets. | Parse JSON; verify cell count/type plan; run non-activity cells in order; inspect that activity answers are absent. |
| 4 | Clone the attendee structure to `notebooks/AIDK_W2_Workshop_Completed.ipynb` and fill only Cells 20, 22, 24, 26, 28, 49, 51; execute from a fresh kernel. | Stage 3. | Confirm same 57 cell types/order; all outputs/charts correct; no hidden state. |
| 5 | Add the exact live-demo code, table output text, and `data-notebook-*` mappings to Slides 7-12 and 16-25. | Stages 3-4 establish authoritative code. | Manual code diff against mapped cells; output facts match execution; code remains projector-readable. |
| 6 | Add Activity 1 and Activity 2 challenge, hint/progress, timer metadata, and walkthrough slides; preserve incomplete attendee cells and map solutions to completed cells. | Stages 3-5. | Verify attempt/walkthrough times, non-solution hints, exact completed outputs, and activity speaker roles. |
| 7 | Add Slides 28-31 for seaborn, recap, Workshop 3 bridge, and Q&A; keep Cell 56 optional and notebook-only. | Stages 4-6. | Confirm one seaborn chart only, exact bridge text, and no unrelated features. |
| 8 | Add only the scoped CSS patterns `.data-table`, `.chart-figure`, `.activity-meta`/`.timer-badge`, `.compare.one-column`, and reduced-motion treatment; preserve tokens and existing components. | Slide markup from Stages 1, 5-7. | Review representative desktop/mobile slides; check fit scale, contrast, focus, and no regressions in existing controls. |
| 9 | Generate the five SVG chart assets from the completed notebook's exact datasets/code environment; rename the SPAI logo into `public/assets/logos/`; remove obsolete W1 images only after references are gone. | Completed notebook and final chart labels. | Compare SVG category order, values, titles, axes, and insights with notebook outputs; check all asset paths and alt text. |
| 10 | Create `ai_dont_know_workshop_2.html`, update the sync target, run the sync, and remove `ai_dont_know_workshop_1.html` after parity is confirmed. | Final canonical deck and styles. | Exact deck-block comparison; standalone navigation/Copy/asset visual test. |
| 11 | Update `check-notebook-slide-alignment.mjs` and `check-standalone-visual-contract.mjs` to the Section 12/13 contract; remove W1 speaker-script tools and inactive material. | Final filenames, notebook indices, and component classes. | Run focused checks and deliberately test one temporary mismatch to ensure each validator fails for the intended reason, then restore. |
| 12 | Remove the inherited W1 notebooks, content DOCX, speaker/facilitator files, W1-only assets, and unused empty scaffold directories. | Replacement artifacts and validators already pass. | Search for stale W1 filenames/content; confirm only permitted historical mentions remain. |
| 13 | Run completed-notebook clean execution, attendee-blank audit, numerical assertions, chart render review, `npm run sync:standalone`, and `npm run build`. | Stages 1-12 complete. | All commands pass; diff contains no generated caches or unintended files. |
| 14 | Run local visual review at 1440×900, 1920×1080, around 980 px, and mobile; test navigation, hashes, progress, fitting, Copy, console, missing assets, and both deck files. | Stage 13 passing. | Visual checklist in Section 13 passes for all 31 slides; correct any slide-density issue before handoff. |
| 15 | Perform final slide-notebook synchronisation audit; update `README.md` from scaffold to completed W2 instructions; stage the intended implementation, commit with a scoped message, and stop without deploying or pushing unless separately requested. | All prior stages. | `git diff --check`, final stale-name search, `git status`, notebook/slide checks, and commit contents review. |

The order deliberately establishes notebook code before final slide code, because the notebook is the exact runnable source. Workshop 1 removal is deferred until every replacement and validation path is working.

---

## 15. Risks and Decisions

### Risks and mitigations

| Risk | Likely Failure | Mitigation |
|---|---|---|
| Too much content for two hours | seaborn or wrap-up runs late | Use the cut order in Section 9; Cell 56 is optional, seaborn is six minutes maximum, and activities/bridge are protected. |
| Slides become code-heavy | fit scale approaches `0.68`; projector readability drops | One question per slide, 1-12 lines, full activity solution only in completed notebook, and labelled excerpts on Slides 15/28. |
| Slides and notebooks drift | code/output discrepancies during live demo | Attendee notebook is authoritative; exact mapping attributes, two-way checks, output lines, immutable dataset assertions, and final sync audit. |
| Activity solutions appear too early | attendees copy instead of reasoning | Pre-activity demos use Class B, Quiz 2 mean, and Total; attendee activity cells remain blank; hints show fragments only. |
| Charts are unreadable on a projector | labels are clipped or too small | Export SVG, use `.chart-figure` with `object-fit: contain`, review at 1440×900 and 1920×1080, and avoid dense legends/styling. |
| Workshop 1 filenames remain active | validators run against the wrong notebook/deck | Rename standalone, update all three `.mjs` scripts, remove W1 notebook/material files, and run targeted stale-name searches. |
| Incorrect output callouts | speakers state wrong values | Execute completed notebook cleanly and assert every Section 8 fact before exporting charts or finalising slide `.note` text. |
| Beginners fall behind during pandas | Activity 1 starts with unresolved syntax errors | Use one dataset, different pre-activity practice questions, explicit Cell 18 reset, guided blanks, 5/2-minute reminders, and Murugan facilitation. |
| Too much time is spent on seaborn | Workshop becomes a fourth library lecture | Limit to one existing food chart, one plotting-call comparison, and one result; cut explanation before any activity or bridge. |
| Student DataFrame retains demo-only `Total` | activity output is cluttered or confusing | Cell 18 explicitly rebuilds `students` from `student_data` before the attempt. |
| Scatter interpretation overclaims causality | learners infer a universal causal rule | Repeat `in this sample` and `does not prove` on Slide 24 and Cell 46. |
| Standalone shell drifts from canonical styles/scripts | canonical and distribution decks behave differently | Sync deck markup automatically, update representative visual contract checks, and manually compare both HTML files. |
| Stale or wrong attendance/download link is presented | attendees visit a Workshop 1 destination | Remove W1 URL, QR, and notebook-download imagery; add no unverified replacement link. |
| Generated chart files drift from notebook data | static slide image no longer matches live code | Regenerate affected SVG after any plot/data change and include assets in the final synchronisation audit. |

### Locked implementation decisions

- Use exactly 31 slides; no extra break, setup, download, attendance, photo, or SPAI-history slides.
- Use exactly 57 cells in each notebook and the cell mapping in Sections 6-7.
- Keep the static HTML/CSS/JavaScript architecture and canonical `index.html` direction.
- Use the attendee notebook as the runnable code authority; do not create `src/data` or slide fragments.
- Use `Total` as the pre-activity calculated-column example and reset before Activity 1.
- Use Class B for the filter demo and Quiz 2 (`78.6`) for the mean demo to avoid pre-solving Activity 1.
- Use the food-orders bar chart for Activity 2 and for the seaborn comparison.
- Use static SVG chart outputs generated from notebook data; do not add browser-side Python or a charting library.
- Add only `.data-table`, `.chart-figure`, and `.activity-meta`/`.timer-badge` as new reusable patterns; `.compare.one-column` is a modifier, not a new component system.
- Rename the standalone deck to `ai_dont_know_workshop_2.html` and remove the old file after successful replacement.
- Remove obsolete Workshop 1 notebooks, curriculum/material files, speaker-script tools, and content-specific images after replacement; do not archive them inside this repository.

### Assumptions

- The official display date is `22 July` and time is `3:00-5:00 PM`; the source does not require a year on slides, so the deck will not invent one.
- No Workshop 2 attendance form, follow-along deployment URL, or notebook download URL has been approved; these are omitted rather than left as placeholders.
- A Workshop 2 speaker-script DOCX is not part of the requested deliverables; speaker ownership and timing are fully specified here and in the content document.
- Existing Python dependencies in `requirements.txt` are sufficient; no new library is needed for implementation.
- The optional mini survey has no complete new dataset in the content document, so it remains a discussion-only, notebook-only optional extension and is never required for acceptance.
- Workshop 1 design assets and code may be consulted during implementation until replacements pass; no Workshop 1 curriculum is shipped in the final active paths.

---

## 16. Implementation Acceptance Criteria

The later implementation is complete only when all of the following are true:

- All 31 approved slides are implemented in the sequence and detail specified in Section 4.
- `notebooks/AIDK_W2_Workshop.ipynb` and `notebooks/AIDK_W2_Workshop_Completed.ipynb` both exist.
- Both notebooks have exactly 57 cells, matching section order and cell types.
- The completed notebook runs top to bottom in a fresh kernel and contains all expected outputs and charts.
- The attendee notebook retains guided blanks/TODO insight prompts in Cells 20, 22, 24, 26, 28, 49, and 51.
- All numerical outputs, tables, category orders, chart labels, and cautious interpretations match Section 8.
- Activity 1 visibly shows a 10-minute attempt and 5-minute walkthrough; Activity 2 visibly shows a 6-minute attempt and 4-minute walkthrough.
- Slides and notebooks satisfy the full/excerpt/activity synchronisation contract.
- The five chart assets match the completed notebook and remain projector-readable.
- Workshop 1 slide curriculum, notebooks, materials, standalone file, W1-only assets, URLs, and active validation references have been removed or replaced.
- `npm run build` succeeds with the updated Workshop 2 validation scripts.
- Local visual review passes at desktop/projector, breakpoint, and mobile sizes.
- Navigation, hashes, progress, slide count, footer, fitting, and Copy controls work for both HTML files.
- No missing assets, browser-console errors, stale links, or unexpected network failures remain.
- `README.md` describes the completed Workshop 2 repository, setup, notebooks, standalone deck, and validation workflow.
- The implementation diff contains no dependency installation, deployment configuration, generated caches, or unrelated refactor.

This plan itself is planning-only. Implementation of slides, notebooks, assets, components, validation scripts, README changes, removals, deployment, and pushing must occur only in a later authorised session.
