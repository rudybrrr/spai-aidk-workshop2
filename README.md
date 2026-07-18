# SPAI AI Don’t Know Workshop 2

Beginner-friendly data analytics and visualisation workshop for mostly Year 1 students.

## Workshop information

- Topic: Data Analytics and Visualisation
- Date: 22 July
- Time: 3:00–5:00 PM
- Speakers: Alson and Murugan
- Teaching loop: Question → Data → Code → Output/Chart → Insight

The workshop uses pandas as the main table tool, matplotlib as the main chart tool, NumPy for light numerical support, and seaborn briefly as a cleaner plotting alternative.

## Repository contents

- `index.html`: canonical 37-slide web deck with recap reveals and activity/break countdowns
- `ai_dont_know_workshop_2.html`: standalone deck with inline CSS and JavaScript
- `notebooks/AIDK_W2_Workshop.ipynb`: 61-cell attendee notebook with larger guided activity blanks
- `notebooks/AIDK_W2_Workshop_Completed.ipynb`: 61-cell executed speaker and facilitator reference
- `public/assets/images/`: SVG charts generated from the workshop datasets
- `public/assets/logos/spai-logo.png`: SPAI logo used on the closing slide
- `scripts/`: deck synchronisation and validation checks

## Source-of-truth hierarchy

1. `AIDK_W2_Content_Document_Updated.md` controls workshop content, sequence, timing, activities, learning outcomes, and the approved feedback revision; its Revision Authority section supersedes conflicting exclusions in the earlier plan.
2. `slides.md` controls the slide design language and technical implementation.
3. The attendee notebook is authoritative for exact live-demo code, datasets, variable names, activity blanks, and cell order.
4. `docs/AIDK_W2_Slide_and_Notebook_Plan.md` remains historical implementation context where it does not conflict with the revised content document.

## View the slides

This is a no-framework static HTML, CSS, and JavaScript deck. No frontend dependency installation is required for the validation commands.

```bash
npm run dev
```

Open the local URL printed by the server. Use `index.html` for the canonical deck or `ai_dont_know_workshop_2.html` for the standalone copy.

Navigation supports the on-screen previous/next buttons, slide dots, Arrow Left/Right, Page Up/Down, Space, Home, End, and numbered URL hashes such as `#15`.

## Run the notebooks

Create a Python environment and install the existing requirements:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Windows activation:

```text
.venv\Scripts\activate
```

Then open either notebook in VS Code, Jupyter, Google Colab, or another compatible notebook editor.

During delivery, use the attendee notebook for demonstrations. Keep the completed notebook open as the speaker/facilitator backup. The completed notebook stores fresh top-to-bottom outputs; the attendee notebook intentionally leaves Cells 23, 25, 27, 29, 31, 54, and 56 incomplete.

## Synchronisation and validation

After changing canonical slide markup, synchronise the standalone deck:

```bash
npm run sync:standalone
```

Run the complete production-readiness validation:

```bash
npm run build
```

The focused checks are also available:

```bash
npm run check:alignment
npm run check:standalone-visuals
```

`npm run build` does not create a compiled bundle. It verifies the timer state machine, two 61-cell notebooks, exact datasets and outputs, attendee activity blanks, slide-to-notebook mappings, 37-slide standalone parity, the two-hour delivery plan, local QR assets, required styles, controls, and stale active content.

Regenerate the two committed offline QR assets after changing either destination:

```bash
npm run generate:qr
```

## Editing contract

- Keep slide code identical to the mapped notebook cell unless the slide is visibly labelled `Excerpt`.
- Keep all dataset values, names, order, labels, and interpretations identical across slides, notebooks, SVGs, validators, and speaker walkthroughs.
- Regenerate an affected SVG after changing its notebook plot or data.
- Never reveal activity solutions in the attendee notebook.
- Preserve the static HTML/CSS/JavaScript architecture and the existing design tokens.
- Do not deploy or publish until the full validation and visual review pass.
