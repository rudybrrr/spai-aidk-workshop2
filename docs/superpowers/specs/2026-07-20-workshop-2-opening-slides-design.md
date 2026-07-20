# Workshop 2 Opening Slides Design

## Goal

Extend the Workshop 2 web slide deck with the opening, SPAI introduction, workshop-series context, and participant setup sequence shown in the supplied Workshop 1 screenshots. Preserve the Workshop 1 visual system while adapting all workshop-specific content to Workshop 2.

## Sources and precedence

- `AIDK_W2_Content_Document_Updated.md` controls Workshop 2 curriculum, required setup, files, libraries, and delivery details.
- `slides.md` controls the visual system, static-deck architecture, asset use, synchronisation, and verification requirements.
- The nine supplied Workshop 1 screenshots control the intended opening-slide composition and sequence, but not Workshop 1-specific curriculum, filenames, links, or timing.
- The user explicitly confirmed that Workshop 1 and Workshop 3 retain the screenshot's 3–5 PM time, while Workshop 2 uses its authoritative 7–9 PM time.

## Selected approach

Use a faithful opening sequence rather than compressing or omitting the organisational context. The canonical `index.html` deck will begin with the adapted title slide followed by eight new slides:

1. About SPAI divider
2. Who We Are
3. Previous Events
4. Workshop Series Outline
5. Workshop Series Takeaways
6. Setup Checklist
7. Notebook Tools
8. Workshop Notebook Download

The existing Workshop 2 recap and teaching sequence follows these slides without curriculum changes.

## Slide designs and content

### 1. Title slide adaptation

Retain the current Workshop 2 title, subtitle, date, time, and speakers. Add a separate line below the metadata divider:

> Follow along on your own screen: https://spai-aidk-workshop2.vercel.app/

The URL is a functional link and uses the established title-slide follow-link treatment.

### 2. About SPAI divider

Recreate the sparse section-divider composition from the reference:

- Number: `01`
- Kicker: `About SPAI`
- Headline: `Who we are, and what we’ve been building.`
- Lead: `A quick intro before we get into data analytics.`

### 3. Who We Are

Use the established two-column SPAI composition:

- Left: `SPAI makes AI more accessible to SP students.` with the accessibility phrase accented.
- Supporting copy: beginner-friendly workshops, events, and learning experiences across courses and schools.
- Three concise bullets: open regardless of course or school; built by students for students; focused on practical first exposure rather than gatekeeping.
- Right: restrained orbital composition using the supplied SPAI logo and the labels Workshops, Events, Community, and Projects.

The orbital remains a specialised SPAI composition and is not generalised into a new diagram system.

### 4. Previous Events

Use the three supplied repository images in equal event cards:

- `pixels_to_perception.png` — Pixels to Perception
- `graphing_impact.png` — Graphing Impact
- `n8n.png` — n8n

Each card includes a short beginner-accessible description matching the reference intent. Images are cropped consistently with meaningful alt text.

### 5. Workshop Series Outline

Use the reference outline-table composition with these exact schedule rows:

| Date and time | Workshop | Summary |
| --- | --- | --- |
| 15 Jul, 3–5 PM | Python Foundations | JavaScript vs Python, syntax, variables, conditionals, loops, lists, dictionaries, functions, and simple practice. |
| 22 Jul, 7–9 PM | Data Analytics & Visualisation | pandas, NumPy, matplotlib, and seaborn using small sample data. |
| 29 Jul, 3–5 PM | Guided ML Demo | A guided template for completing and running a basic machine-learning workflow. |

The Workshop 2 row may receive subtle current-session emphasis without introducing a new colour language.

### 6. Workshop Series Takeaways

Retain the four-row takeaway structure:

- W1 — Python confidence: read and edit basic Python code without freezing.
- W2 — Data thinking: ask simple questions from data and visualise answers.
- W3 — ML intuition: understand the basic shape of training and testing a model.
- All — Big picture: see how Python, data, and ML connect.

### 7. Setup Checklist

Adapt the reference checklist to Workshop 2 and the authoritative participant setup:

1. Install Python; enable `Add Python to PATH` if prompted.
2. Use VS Code with Python and Jupyter extensions, Jupyter Notebook, Google Colab, or another beginner-friendly editor.
3. Open `AIDK_W2_Workshop.ipynb` before the workshop begins.

Copy should be short enough for projection and must not imply that VS Code is the only supported editor.

### 8. Notebook Tools

Use two established code windows:

- Install command: `python -m pip install pandas numpy matplotlib seaborn`
- Quick checks: `python --version`, Windows alternative `py --version`, and a small Python print check.

The slide uses the Workshop 2 requirements exactly. It does not inherit Workshop 1-only package requirements.

### 9. Workshop Notebook Download

Show the reference download-slide composition with this placeholder state:

- Headline: `Download the Workshop 2 notebook.`
- Supporting copy tells participants that the attendee download link will be shared soon.
- Visible placeholder: `Download link coming soon`.
- No fake URL, nonfunctional anchor, or QR code is created.

The existing end-of-workshop take-home slide remains unchanged because it serves the local attendee notebook already in the repository. This opening placeholder refers specifically to the not-yet-created external pre-workshop download link requested by the user.

## Architecture and implementation boundaries

- Keep `index.html` as the canonical slide source.
- Add only reusable class-based patterns to `src/styles/slides.css`; preserve existing tokens in `src/styles/globals.css` and code-window styling in `src/styles/code.css`.
- Reuse the supplied logo and event assets from `public/assets/`; do not generate replacement artwork.
- Run `npm run sync:standalone` so `ai_dont_know_workshop_2.html` stays synchronised.
- Let the existing navigation script derive counts, dots, footers, hashes, and progress from the new slide order.
- Do not modify either notebook because the added slides introduce no new runnable curriculum or notebook cells.

## Responsive and interaction behaviour

- All added slides must fit the existing 16:9 projector frame without falling below the deck’s established fitting threshold.
- The title URL opens normally and remains keyboard accessible.
- Existing navigation, keyboard controls, slide hashes, copy buttons, and timers must continue to work.
- Event cards and two-column compositions collapse using the existing responsive rules or focused extensions consistent with those rules.

## Verification

Completion requires:

1. Synchronise the standalone deck.
2. Run the complete `npm run build` verification suite.
3. Serve the deck locally and inspect the new slides at the reference desktop viewport.
4. Check title-link behaviour, slide navigation, image loading, responsive layout, browser console errors, and slide fit.
5. Compare the rendered opening sequence against the supplied screenshots and correct all material visual mismatches.

## Out of scope

- Changing the Workshop 2 curriculum or notebook content.
- Replacing the Workshop 1 visual system.
- Publishing or deploying the deck.
- Creating the future external notebook-download URL or QR code.
- Refactoring unrelated existing slides.
