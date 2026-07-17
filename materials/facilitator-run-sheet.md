# Workshop 2 Facilitator Run Sheet

## Before attendees arrive

- 30 minutes before: connect the presentation laptop to the room display and confirm the deck fits at 1920×1080.
- 25 minutes before: activate the workshop environment, install `requirements.txt`, and run the completed notebook top to bottom.
- 20 minutes before: open the attendee notebook for live demos and keep the completed notebook open as backup.
- 15 minutes before: confirm the first setup cell prints `Workshop setup ready` and charts use readable title, label, and tick sizes.
- 10 minutes before: test slide navigation, notebook zoom, and the handoff between Alson and Murugan.

## Live run of show

| Clock | Minutes | Slides | Lead | Cue |
|---|---:|---:|---|---|
| 3:00 | 0–8 | 1–3 | Alson | Welcome, Workshop 1 recap, and today’s goal. |
| 3:08 | 8–18 | 4–6 | Alson | Teach question → data → code → output/chart → insight. |
| 3:18 | 18–36 | 7–12 | Alson | Run the pandas cells; keep explanations tied to the visible questions. |
| 3:36 | 36–51 | 13–15 | Alson | Start Activity 1; call 5 minutes and 2 minutes remaining. Murugan handles syntax questions without revealing the solution. |
| 3:51 | 51–61 | 16 | Both | Ten-minute break. Resume at exactly 4:01. |
| 4:01 | 61–71 | 17–19 | Murugan | NumPy array, mean, maximum, and minimum. |
| 4:11 | 71–91 | 20–26 | Murugan | Chart choice, then bar, line, and scatter examples. |
| 4:31 | 91–101 | 27–28 | Murugan | Start Activity 2; call 2 minutes remaining. Alson handles syntax questions. |
| 4:41 | 101–106 | 29–30 | Murugan | Show seaborn as a brief alternative, not a separate lesson. |
| 4:46 | 106–112 | 31–32 | Both | Recap the loop and preview Workshop 3. |
| 4:52 | 112–120 | 32 | Both | Q&A; finish at 5:00. |

Handoff cue: the outgoing speaker ends with the data question for the next section; the incoming speaker begins by repeating that question.

## Common-error triage

- `NameError`: confirm the attendee ran the setup and dataset cells above the current cell.
- `KeyError`: compare column spelling, capitalisation, spaces, brackets, and quotation marks with the displayed table.
- `SyntaxError`: check matching brackets and quotation marks before changing any logic.
- Empty or stale chart: rerun the dataset cell, then rerun the chart cell; do not restart the whole notebook unless necessary.
- Activity support: give one hint at a time. Preserve the attendee’s chance to form the final insight.

## Hard-cut plan

Use these cuts only when the session is behind schedule; keep both activities’ interpretation steps and the final Q&A.

- Up to 3 minutes behind: shorten commentary on `students.head()` and the calculated `Total` column; run the cells and state the output once.
- 4–6 minutes behind: compress NumPy framing to one sentence, but still run the array and mean/maximum/minimum cells.
- More than 6 minutes behind: show the seaborn comparison and completed output without a second live typing demonstration.
- Never cut the Activity 1 tie insight, Activity 2 chart insight, chart-choice explanation, or all Q&A time.
