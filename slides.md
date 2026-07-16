# SPAI Workshop Slide System

This file defines the repository conventions, visual language, and implementation rules for SPAI workshop slide decks. It reverse-engineers Workshop 1 so later workshops can reproduce its system without reusing its curriculum.

> Codex must read this file and the workshop content document before creating or modifying slides.

---

## 1. Source of Truth

### Workshop content

The designated workshop content document in the repository root is authoritative for:

- workshop scope;
- learning outcomes;
- section order;
- timing;
- activities;
- examples;
- speaker guidance; and
- required concepts.

Markdown is preferred, but the document may be Markdown, DOCX, or PDF. Codex must inspect the root directory and identify the document whose filename and contents clearly designate it for the workshop being built. Valid examples include `AIDK_W2_Content_Document.md`, `Content Doc for AIDK W2.docx`, and `Content Doc for AIDK W2.pdf`; no exact filename is required. Do not mistake a README, notebook, speaker script, exported deck, or a previous workshop's content document for the designated source. If two plausible root documents conflict and their roles cannot be established from their contents, ask which one is authoritative.

For Workshop 1, `Content Doc for AIDK W1.docx` is the curriculum-level source. Speaker materials under `materials/scripts/` elaborate delivery but do not override it.

### Design and implementation

`slides.md` is authoritative for:

- visual language;
- slide layouts;
- component usage;
- technical conventions;
- folder organisation;
- asset handling; and
- slide and notebook synchronisation.

### Existing slides

Workshop 1 slides are implementation references for the design system, but are not a content source for later workshops. Reuse their visual grammar and interaction patterns, not their Python curriculum, examples, dates, links, or workshop-specific copy.

### Conflict rules

1. Workshop-specific content documents control what is taught.
2. `slides.md` controls how it is presented and implemented.
3. Existing slide code may be reused where it follows both.
4. Do not preserve outdated Workshop 1 content merely to retain an existing layout.
5. If the content document and slide code conflict, follow the content document for content.
6. If a requested design conflicts with `slides.md`, report the conflict before changing the design system.

For workshops with code, the starter notebook is a narrower source of truth for exact runnable code, blanks, `TODO` prompts, cell order, dataset values, and variable names. The content document still controls why and whether that material is taught.

---

## 2. Current Technical Stack

Workshop 1 is a no-framework static web presentation.

| Concern | Actual implementation |
| --- | --- |
| Framework | None; semantic HTML `<section>` elements form the deck |
| Languages | HTML5, CSS, browser JavaScript; Node.js ES modules for slide checks; Python for speaker-script tooling only |
| Build tool | None for the deck; files are served directly |
| Styling | Hand-written CSS split by responsibility; no Tailwind or CSS framework |
| Icon library | None; controls use text arrows and one slide uses a Unicode camera emoji |
| Animation library | None; CSS transitions/keyframes plus small JavaScript controllers |
| Syntax highlighting | Hand-authored spans using `kw`, `fn`, `str`, `numlit`, and `comment`; no highlighting package |
| Package manager | npm, evidenced by `package.json` and README commands; no lockfile is present |
| Development | `npm run dev`, which runs `npx --yes serve .` |
| Start alias | `npm start`, equivalent to development |
| Production build | None; the static source is deployable as-is |
| Validation | `npm run check:alignment` and `npm run check:standalone-visuals` |
| Standalone sync | `npm run sync:standalone` copies the canonical deck block into the standalone HTML |
| Deployment | Static hosting at a referenced Vercel URL; no `vercel.json`, hosting manifest, or deployment script exists in the repository |

Important files:

- `package.json`: npm commands and project metadata.
- `index.html`: canonical slide content and order.
- `ai_dont_know_workshop_1.html`: self-contained distribution copy with duplicated inline CSS/JavaScript and a deck block synchronised from `index.html`.
- `src/styles/globals.css`: tokens, typography, page background, and global primitives.
- `src/styles/slides.css`: layouts, presentation chrome, specialised patterns, responsive rules, fitting, and motion.
- `src/styles/code.css`: code windows, Copy controls, and token colours.
- `src/scripts/fitSlides.js`: runtime `.stage` wrapping and scale-to-fit.
- `src/scripts/navigation.js`: navigation, hashes, dots, footer, count, and progress.
- `src/scripts/copyCode.js`: clipboard behaviour.
- `scripts/*.mjs`: synchronisation and validation scripts.

There are no bundled web fonts. `Inter` is requested but not loaded, so the sans family normally falls back to system UI. Display type uses Georgia/Times; code and metadata use SFMono/Consolas/Liberation Mono/Menlo fallbacks.

---

## 3. Existing Repository Structure

Generated directories, caches, and build output are omitted.

```text
/
├── Content Doc for AIDK W1.docx       # Scope, outcomes, order, timing, and guidance
├── 01_AIDK_W1_Starter.ipynb           # Exact learner-facing runnable code
├── 01_AIDK_W1_Solutions.ipynb         # Completed activity solutions
├── README.md                           # Current operation and editing workflow
├── package.json                        # npm scripts; no runtime dependency bundle
├── index.html                          # Canonical slide definitions and order
├── ai_dont_know_workshop_1.html        # Self-contained shareable deck
├── materials/
│   └── scripts/                        # Speaker/facilitator scripts
├── public/
│   └── images/
│       ├── backgrounds/                # Reserved; currently only .gitkeep
│       ├── events/                     # Three event-card images
│       ├── logos/                      # SPAI logo
│       ├── ats.png                     # Attendance QR image
│       └── notebookdownload.png        # Present but unused by index.html
├── scripts/
│   ├── sync-standalone-slides.mjs      # Copies deck markup to standalone HTML
│   ├── check-notebook-slide-alignment.mjs
│   ├── check-standalone-visual-contract.mjs
│   ├── build-speaker-script-docx.py
│   └── check-speaker-script-docx.py
└── src/
    ├── scripts/
    │   ├── fitSlides.js
    │   ├── navigation.js
    │   └── copyCode.js
    └── styles/
        ├── globals.css
        ├── slides.css
        └── code.css
```

All 45 slides are direct children of `<main class="deck">` in `index.html`. There is no slide data file, templating layer, JSX tree, or slide-per-file implementation. Shared "components" are repeated semantic HTML class patterns backed by CSS, not imported JavaScript components.

---

## 4. Canonical Structure for Future Workshop Slide Repositories

Preserve the static architecture unless a documented requirement justifies a build system.

```text
/
├── slides.md
├── README.md
├── <workshop-content-document>.md       # Markdown preferred; DOCX/PDF accepted
├── <workshop>_Starter.ipynb             # When learners use a notebook
├── <workshop>_Solutions.ipynb
├── package.json
├── index.html                           # Canonical assembled slide content/order
├── <workshop-slug>.html                 # Optional self-contained distribution copy
├── materials/
│   ├── scripts/
│   └── attributions.md                  # External asset credits, when needed
├── public/
│   └── assets/
│       ├── images/
│       ├── diagrams/
│       ├── logos/
│       └── icons/
├── scripts/
│   ├── sync-standalone-slides.mjs
│   ├── check-notebook-slide-alignment.mjs
│   └── check-standalone-visual-contract.mjs
└── src/
    ├── components/                      # Reusable HTML/CSS patterns if extracted
    ├── slides/                          # Optional fragments only with automated assembly
    ├── data/                            # Structured display data and workshop metadata
    ├── styles/
    │   ├── globals.css                  # Theme tokens and typography
    │   ├── slides.css                   # Layouts/components/presentation shell
    │   └── code.css                     # Code presentation
    ├── scripts/                         # Navigation, fitting, and interactions
    └── utils/                           # Focused build/check helpers, if needed
```

Placement rules:

- **Slide content and order:** `index.html` in the current no-build architecture. Use `src/slides/` only if a deterministic script assembles it; never maintain duplicate content manually.
- **Slide layouts and reusable UI:** class-based patterns in `src/styles/slides.css`; extracted markup examples may live in `src/components/`.
- **Theme tokens:** `src/styles/globals.css`.
- **Images, diagrams, logos, icons:** their matching `public/assets/` directories.
- **Code snippets:** the starter notebook is authoritative. Do not create a second snippet store unless it is generated from the notebook.
- **Workshop metadata:** root content document for authoritative curriculum metadata; `src/data/` only for presentation data that does not duplicate that source.
- **Navigation logic:** `src/scripts/navigation.js`; fitting and Copy behaviour remain separate scripts.
- **Standalone output:** named for the workshop and generated/synchronised from the canonical source direction.

Avoid nesting by workshop section or slide number unless automated assembly genuinely requires it.

---

## 5. Visual Design Language

### Colour system

The source deck's tokens in `src/styles/globals.css` are canonical:

| Role | Value | Use |
| --- | --- | --- |
| Main dark | `--bg: #11100d`; body fallback `#141311` | Near-black warm canvas |
| Secondary dark | `--bg-2: #1a1612` | Supporting dark tone |
| Main text | `--paper: #eee8dd` | Headlines, strong text, active count |
| Muted text | `--muted: #a39b91` | Body and explanatory copy |
| Subdued text | `--muted-2: #6f6861` | Metadata and inactive controls |
| Primary accent | `--copper: #df8468` | Kickers, markers, rules, active dots |
| Accent hover | `--copper-2: #f0a083` | Link emphasis/focus feedback |
| Secondary accent | `--amber: #e6ad62` | Progress gradient endpoint |
| Supporting accents | green `#9fcb8f`, blue `#89b7d8`, violet `#b7a0e8` | Blue marks Python; others support the palette but are not semantic status rules |
| Fine borders | `rgba(238,232,221,0.13)` and `0.22` | Dividers, cards, code windows |
| Code panel | `--code-bg: rgba(9,9,10,0.72)` plus a faint white gradient | Elevated code surface |

The background adds copper/amber/violet radial light, a faint 38 px grid, and inline SVG grain. There is no established success, warning, error, or activity colour system; do not assign one based only on the unused supporting colours.

### Typography

- Display: Georgia → Times New Roman → Times → serif.
- Body: Inter → system UI fallbacks; Inter is not bundled.
- Code/metadata: SFMono-Regular → Consolas → Liberation Mono → Menlo → monospace.
- `h1`: `clamp(4.5rem, 8.6vw, 8.8rem)`; title only.
- Global `h2`: `clamp(3rem, 4.6vw, 4.8rem)`; content-slide override `clamp(2.35rem, 3.6vw, 3.8rem)`.
- Body: `clamp(1rem, 1.3vw, 1.18rem)` with `1.55` line height.
- Lead: up to `1.6rem`; normal teaching lead up to `1.35rem`.
- Code: `clamp(0.9rem, 1.25vw, 1.08rem)` with `1.7` line height.
- Headings use weight 600, tight leading around `0.98–1.02`, and negative tracking. Body emphasis uses `<strong>`/`<b>` in paper colour and weight 600.
- `.kicker` is uppercase, copper, bold mono, and widely tracked (`0.33em`). Do not uppercase body copy.

### Spacing and composition

- Final desktop slide padding is `clamp(34px, 5.4vw, 86px)` vertically and `clamp(34px, 8vw, 146px)` horizontally.
- Runtime `.stage` width is `min(1240px, 100%)`; title and section blocks use narrower maxima around 1060–1160 px.
- Standard slides centre one coherent content group. Section/title slides favour large empty space.
- Two-column stages use `0.95fr 1.05fr` with a `30–72px` responsive gap.
- Code comparisons use 22 px gaps; event cards use 20 px gaps; row-based layouts use hairline separators instead of boxed cells.
- Common vertical intervals are 22–38 px between lead, content, and callout. Preserve a deliberate rhythm rather than stacking unrelated blocks.
- Desktop fitting may scale the stage down, but never below `0.68`. Treat frequent scaling near that floor as evidence that the slide is overloaded.

### Shape language

- Fixed outer frame: 1 px translucent border, 14 px radius, 18 px inset.
- Code windows: 16 px radius, 1 px border, faint gradient, and `0 24px 70px` soft shadow.
- Event cards: 12 px radius and 1 px border.
- Buttons: 9 px radius; Copy buttons and pills are fully rounded.
- Dividers are mostly 1 px translucent lines; callouts use a 3 px copper left rule.
- Decorative shapes are restrained: orbital circles, small status dots, progress line, grid, and grain.
- Avoid adding bright filled panels or heavy shadows that are not part of this language.

### Visual tone

The deck is technical, beginner-friendly, editorial, high-contrast, and restrained. Large serif statements make concepts approachable; mono kickers and code surfaces retain a technical feel; sparse composition and warm accents avoid a corporate dashboard appearance.

---

## 6. Slide Layout Patterns

These are class patterns in `index.html` and `src/styles/*.css`, not imported components.

| Layout | Purpose and structure | Content limit and use | Avoid when |
| --- | --- | --- | --- |
| Title | `.slide.center` + `.title-stack`: kicker, `h1`, subtitle, hairline, optional follow link | One title, one short subtitle, one action/link | Teaching several concepts |
| Workshop roadmap | `.flow-line` or `.outline-table`: overview statement plus steps/rows | Workshop 1 uses 5 flow steps or 3 outline rows | Details require paragraph-length cells |
| Section divider | `.slide.center` + `.section-title`: number, kicker, one statement | One short framing statement; optional lead | A full lesson or activity |
| Concept explanation | `.slide.standard` or `.slide.two`: kicker, headline, lead, example/visual | One concept and one support block | Multiple unrelated subtopics |
| Question-first/prompt | Activity-style standard slide with direct question, code window, optional note | One task and one expected response | Full solution is needed simultaneously |
| Code demonstration | `.code-window` within standard/two-column slide | Prefer roughly 1–12 visible lines; Workshop 1 has longer activity cells only where exact notebook code is essential | Code must shrink below readable size |
| Comparison | `.compare` with two equal code windows | Two alternatives with parallel structure | Three or more dense alternatives |
| Table/data example | `.outline-table`, `.summary-table`, or row grids | About 3 outline rows or up to 6 concise summary rows as implemented | Dense numeric datasets; use notebook/chart instead |
| Step-by-step process | `.flow-steps` beneath `.flow-title` | Workshop 1 demonstrates 5 short steps | Steps need nested instructions |
| Activity challenge | `.slide.standard`, one-column `.compare`, `.code-window`, `.note` | One runnable TODO/task, rules, and expected output | Combining several activities |
| Hint/progress check | `.note` below the relevant content; `.takeaway` for a checklist | One concise hint or 3–4 labelled checks | It becomes a second lesson |
| Solution walkthrough | No dedicated Workshop 1 component; derive from code demonstration only when content/notebook requires it | Show the completed code/output matching the solutions notebook | Inventing answers absent from the source |
| Recap | `.summary-table`/`.summary-row` | Workshop 1 uses 6 concise rows | Re-teaching each section in detail |
| Workshop preview | Section/closing statement or final summary row | One next-workshop promise grounded in the content document | Copying Workshop 1's preview into later decks |
| Closing/Q&A | `.slide.center` + `.section-title`, optional `.qr-block` | One closing message, one next step, optional QR | More teaching content remains |

Specialised patterns include `.event-list`/`.event-card` for three image cards and `.orbital` for the SPAI community composition. The orbital is not a general diagram primitive. `.pill-row`/`.pill` and `.reveal` are styled but unused in current markup, so they are provisional rather than proven layouts.

---

## 7. Content Density Rules

- Use one main teaching point and one learner action per slide.
- Keep title and divider slides to a single statement plus, at most, one short lead.
- Prefer one short lead paragraph; avoid walls of text and nested bullet lists. Workshop 1 teaching slides generally use a headline, a one-sentence lead, and one structured block.
- Keep ordinary lists to about 3–5 concise items and one nesting level. Split the slide if items need their own explanations.
- Prefer visible examples, comparisons, or small data rows over abstract prose.
- Keep code to the lines being explained. Roughly 1–12 lines is the normal teaching range; longer runnable activities belong primarily in the notebook and must remain readable if mirrored on a slide.
- Keep comparison panes structurally parallel. If either pane wraps heavily or forces scale near `0.68`, split the comparison.
- Keep process cells to a short label and one sentence. Workshop 1 fits 5 steps; do not add more columns without testing.
- Keep outline tables near 3 rows and recap tables near the demonstrated maximum of 6 concise rows.
- Tables and charts must be legible from the back of a room. Move dense datasets and exploratory output to the notebook.
- Use presenter explanation and speaker notes for secondary detail. Do not encode a script in slide body copy.
- Split any slide that needs multiple code windows, a long callout, and dense prose simultaneously.

---

## 8. Code and Data Presentation

### Existing implementation

- Inline code uses semantic `<strong>` in prose in the current deck; future decks may use `<code>` if styled consistently and projector-readable.
- Multi-line code uses `.code-window`, `.code-head`, `.code-label`, optional `.copy-btn`, and `<pre><code>` in `index.html`; styles live in `src/styles/code.css`.
- Language modifiers include `.python` and `.javascript`. Python uses a blue header dot; the default dot is copper.
- Highlighting is manual through `kw`, `fn`, `str`, `numlit`, and `comment` spans. There is no parser.
- `.compare` creates two equal columns. Current one-column examples use inline `grid-template-columns: 1fr`; future decks should use a named modifier while preserving the appearance.
- Outputs, rules, hints, and prediction prompts use `.note` below the code window.
- Tables are CSS grids (`.outline-*`, `.summary-*`), not native HTML tables. Use native tables when future content is truly tabular and requires accessible headers.
- Example data is embedded as editable text and must match the notebook. Workshop 1 does not use screenshots of code.

### Future conventions

- Slide code must be short, runnable, editable text, and consistent with the starter notebook.
- Do not use screenshots when text can be selected, copied, highlighted, and verified.
- Emphasise only the lines currently being explained; manual token colour is not a substitute for instructional focus.
- Show expected output in a `.note` when it helps learners predict or verify a result.
- Keep explanations beside code on `.slide.two` when the relationship is direct; use a standard slide when the code itself is the focus.
- Do not shrink code below readable projector size. Split, simplify, or move detail to the notebook.
- Charts and outputs must be generated from the same data used by the notebook, with matching labels, values, ordering, and units.
- Use colour plus labels or position; never make token colour or chart colour the only carrier of meaning.

---

## 9. Asset Management

Future repositories use:

```text
public/assets/
├── images/
├── diagrams/
├── logos/
└── icons/
```

Workshop 1's historical location is `public/images/` with `events/`, `logos/`, and `backgrounds/` subdirectories.

- Use descriptive lowercase kebab-case, such as `student-scores-table.png`, `data-analysis-loop.svg`, and `spai-logo.svg`.
- Do not use names such as `image1.png`, `final-final.png`, or `newpic2.jpg`. Existing `SPAI Logo.png` and underscore-separated event files are exceptions, not models.
- Prefer SVG for logos, icons, and simple diagrams. Prefer WebP/AVIF for photos. Use PNG for transparency, QR codes, or raster content requiring lossless output; JPEG is acceptable for photographs when WebP/AVIF is impractical.
- Prefer transparent logo/diagram backgrounds when they must sit on the dark deck, but verify edge contrast. QR codes keep an opaque white padded panel for scanning.
- Reference assets using one verified hosting-safe convention. Current markup uses relative paths such as `public/images/events/n8n.png`; the README's `/images/...` example does not match it.
- Store each asset once and reuse its path. Search before adding a duplicate or near-duplicate.
- Crop card photos with `object-fit: cover`; contain logos/QRs without distortion.
- Add meaningful `alt` text to content images; use empty alt only for decorative images.
- Record external creator, source URL, licence, and required credit in `materials/attributions.md` or the workshop's designated attribution file.
- Optimise assets before committing and verify them at projector size. The current 1280×1280 event PNG around 600 KB is not a target.
- Never scatter workshop assets through `src/`, the root, or arbitrary slide folders.

---

## 10. Components and Reuse

Workshop 1 has class-based patterns rather than JavaScript components. "Configuration" means classes, data attributes, and child markup.

| Existing pattern | Location | Purpose/configuration | Restrictions |
| --- | --- | --- | --- |
| Slide shell `.slide` | `index.html`, `slides.css` | Base section; combine with `center`, `standard`, `two`, or `wide`; set `data-title` and `data-footer` | One base layout; only first slide authored as `active` |
| Runtime stage `.stage` | `fitSlides.js`, `slides.css` | Wraps content and receives `--fit-scale` | Do not author manually |
| Section label `.kicker` | `globals.css` | Copper uppercase mono context label | Keep short |
| Section/title blocks | `index.html`, `globals.css` | `.title-stack`, `.section-title`, `.big-number` | Sparse framing content only |
| Code block | `index.html`, `code.css` | `.code-window`, header, label, optional Copy, `<pre><code>` | Exact notebook text where mapped |
| Comparison `.compare` | `index.html`, `code.css` | Equal two-column code comparison | One-column inline overrides are current debt |
| Callout `.note` | `slides.css` | Hint, rule, expected output, prediction | Not a generic content panel |
| Takeaway rows | `index.html`, `slides.css` | `.takeaway`, labelled rows | Concise checklist/outcomes |
| Flow | `index.html`, `slides.css` | `.flow-line`, title, steps | Short steps; test column count |
| Outline/summary rows | `index.html`, `slides.css` | Repeated aligned information | Keep row copy brief |
| Event cards | `index.html`, `slides.css` | Three image-led cards | Specialised, not default teaching cards |
| Orbital | `index.html`, `slides.css` | SPAI community visual | Do not generalise without matching content |
| Progress/footer/controls | fixed HTML in `index.html`, `navigation.js`, `slides.css` | Label, dots, number, progress, buttons | Preserve IDs expected by JavaScript |

Recommended future extractions, not existing components: a named one-column comparison modifier, an accessible native data-table style, chart figure/caption pattern, activity metadata block for attempt/walkthrough timing, and a generated standalone shell. Do not describe these as implemented until they exist.

There is no activity timer, presenter-notes component, insight card, chart component, or generic solution component in Workshop 1.

---

## 11. Navigation, Progress, and Presentation Controls

- `src/scripts/navigation.js` creates one dot per slide and owns the current slide index.
- Next: Arrow Right, Page Down, Space, or the right button.
- Previous: Arrow Left, Page Up, or the left button.
- Home jumps to slide 1; End jumps to the final slide.
- Dots are clickable and have `aria-label="Go to slide N"`.
- The footer shows `data-footer`, a centre dot strip, and `current / total`.
- A two-pixel top bar grows from copper to amber based on `(current + 1) / total`.
- The previous/next buttons disable at deck boundaries.
- The URL hash stores one-based positions such as `#12`; refresh/deep-link initialization opens that slide. Invalid or missing hashes open slide 1.
- There is no router, route-per-slide, fullscreen API, presenter mode, or presenter-notes support. Browser fullscreen is manual.
- On resize, the active slide is fitted again.
- At 980 px and below, slides scroll, columns stack, the footer/dots/count are hidden, and buttons remain available.

Future decks must preserve these IDs and behaviours unless navigation is intentionally redesigned: `dots`, `footerLabel`, `slideNo`, `topProgress`, `prevBtn`, and `nextBtn`. Test mouse, keyboard, hash refresh, resize, first/last states, and focus visibility.

---

## 12. Motion and Transitions

- Base slide opacity/translate transition: 180 ms ease.
- Active-stage entry: `slideEnter`, 440 ms, `cubic-bezier(0.2, 0.75, 0.2, 1)`, moving up 18 px while opacity, slight scale, and 3 px blur resolve.
- Leaving-stage motion: `slideLeave`, 180 ms ease, moving up 8 px with slight scale and fade.
- Progress-width transition: 180 ms ease.
- Mobile entry: `mobileSlideEnter`, 320 ms ease with a 10 px vertical fade and no fitting scale.
- Copy feedback changes text for 900 ms; it does not animate content.

Use motion only for slide state changes and brief interaction feedback. Do not stagger every bullet, delay live teaching, or hide required content behind animation. Workshop 1 has no `prefers-reduced-motion` rule; this is an accessibility weakness. Future decks should disable nonessential transforms, blur, and animation when reduced motion is requested without changing information or navigation.

---

## 13. Accessibility and Projector Readability

- Retain the large responsive heading/body/code scales documented in Section 5. Avoid relying on the fit floor to make dense slides "pass."
- Review at 1440×900 and 1920×1080, then from simulated back-of-room distance. Code, chart labels, legends, table labels, and expected output must remain readable.
- Use warm paper text for primary information and verify muted text against the textured dark background. The standalone muted token is darker than the source and requires manual contrast review.
- Keep code indentation and punctuation visually distinct; never replace runnable code with a screenshot.
- Preserve keyboard navigation and visible hover/focus states. Current buttons/links have some focus behaviour through browser defaults and link rules, but there is no comprehensive custom focus system; test it manually.
- Supply meaningful alt text for content images. Decorative texture is CSS and appropriately ignored.
- Use text labels, symbols, or position in addition to colour. Python's blue dot is a supplement to its visible label.
- Add accessible captions/headers for future charts and native tables.
- Add a `prefers-reduced-motion` treatment in future repositories; Workshop 1 currently lacks one.
- Do not put essential content only in the footer, hover state, animation, or QR destination.
- Mobile scrolling is acceptable below 980 px, but core content, buttons, links, and Copy controls must remain operable.
- QR codes need an adjacent readable URL or destination description; Workshop 1 includes both an image, caption, and small form link, though the link size is weak for projection.

---

## 14. Slide-to-Notebook Synchronisation Contract

### Ordering and mapping

- Slide sections and notebook sections must follow the same instructional order.
- Live-demo slides require stable `data-title` values and `data-notebook-cell="N"` mappings; avoid renumbering mapped cells casually.
- Notebook headings should name the matching slide topic and, where useful for delivery, reference the slide title or stable slide range.
- Map every starter-notebook code cell exactly once in each distributed slide file under the Workshop 1 contract.
- Keep mapped slide code in notebook order and reproduce exact starter code, including blank lines, variables, values, placeholder underscores, comments, and `TODO` wording.
- A shortened excerpt is allowed only when the content document calls for it, it is clearly labelled "excerpt," and it is not falsely passed off as the mapped full cell. Update the checker/contract if excerpts are introduced.
- Activity slides must match learner TODO cells. Solution walkthroughs must match the completed solutions notebook.
- Outputs, charts, dataset values, labels, and variable names must come from the same notebook data and execution.
- Any slide-code change requires checking both notebooks. Any notebook-code change requires checking both slide HTML files.

### Live-demo output descriptions

After each notebook code cell used for a live demonstration, add a Markdown line in the following notebook Markdown cell:

```text
Output: <brief description of the expected table, text, value, or chart>
```

Example:

```text
Output: A bar chart showing Chicken Rice as the food item with the highest number of orders.
```

This description assists speakers during live delivery; it does not replace executing the cell and verifying the real output. Workshop 1 does not currently apply this convention consistently, so future workshop notebooks must add it deliberately.

### Current automated contract

`scripts/check-notebook-slide-alignment.mjs` currently validates 27 Workshop 1 code cells across `index.html` and the standalone deck. It decodes common HTML entities, strips markup, normalises whitespace, verifies exact inclusion, rejects missing/duplicate mappings through the unique-index count, and verifies order. It does not validate notebook Markdown, outputs, charts, solutions, or speaker scripts.

Required sequence after code changes:

1. Update the authoritative notebook code.
2. Update mapped slide markup and cell indices in `index.html`.
3. Run `npm run sync:standalone`.
4. Run `npm run check:alignment`.
5. Run `npm run check:standalone-visuals`.
6. Execute the notebook top to bottom and visually review changed slides in both HTML files.

---

## 15. Workflow for Creating a New Workshop Deck

Slide creation must not begin before the designated content document has been read.

1. Read `slides.md`.
2. Identify and read the root-level workshop content document.
3. Inspect existing reusable slide class patterns, styles, and scripts.
4. Convert the content document into a slide plan with sections, slide purposes, and timing.
5. Map slide sections and live demos to notebook headings/cells.
6. Identify required images, diagrams, logos, icons, datasets, links, and attribution needs.
7. Build slides using existing layout patterns and design tokens; add a new pattern only when necessary.
8. Build or update starter and solutions notebooks using the same code, data, variables, TODOs, and output descriptions.
9. Execute and verify all code, outputs, tables, and charts.
10. Run the slide site.
11. Review every slide visually at laptop/projector dimensions and at responsive widths.
12. Test navigation, hashes, Copy buttons, asset loading, standalone sync, and available checks. There is no production build in the current stack, so validate the deployable static files instead.
13. Check every content-document requirement, outcome, activity, and timing against the deck/notebook.
14. Report assumptions, current limitations, and unresolved issues before handoff.

---

## 16. Quality Checklist

### Content

- [ ] Content matches the designated root content document.
- [ ] Learning outcomes and required concepts are covered.
- [ ] Section order and timings are preserved.
- [ ] Activities state attempt and walkthrough times when specified or required for delivery.
- [ ] No unsupported advanced material has been added.
- [ ] Stale workshop numbers, dates, links, examples, and previews were not copied forward.

### Design

- [ ] Visual language matches Workshop 1's tokens, typography, shapes, spacing, and restrained tone.
- [ ] Typography and spacing are consistent.
- [ ] No slide is overcrowded or routinely scaled near the `0.68` floor.
- [ ] Code is readable from a projector.
- [ ] Tables and charts have readable labels, legends, values, and units.
- [ ] Assets are in the correct directory, optimised, attributed, and supplied with appropriate alt text.
- [ ] Opening, divider, teaching, comparison, activity, recap, and closing slides were visually reviewed.

### Technical

- [ ] `npm run dev` starts the static site, or an equivalent local static server is documented if `npx serve` is unavailable.
- [ ] The deployable static output loads; there is no production build command in the current stack.
- [ ] Navigation, keyboard controls, hashes, buttons, dots, numbering, and progress work.
- [ ] The browser console has no errors.
- [ ] No assets or links are missing.
- [ ] Slides work at 1440×900, 1920×1080, near 980 px width, and a narrow mobile width.
- [ ] Responsive stacking/scrolling does not hide core content.
- [ ] `npm run check:alignment` passes when a notebook is present.
- [ ] `npm run check:standalone-visuals` passes.
- [ ] Standalone content was synchronised and visually compared with the source deck.

### Notebook synchronisation

- [ ] Slide code matches notebook code, or any intentional excerpt is clearly labelled and contractually handled.
- [ ] Dataset values, labels, ordering, units, and variable names match.
- [ ] Activity TODOs match challenge slides.
- [ ] Solutions match walkthrough slides.
- [ ] Live-demo output descriptions are present after relevant code cells.
- [ ] Expected outputs/charts were actually generated and checked.
- [ ] The notebook runs from top to bottom in a clean environment.

Before completion, run the read-only checks and inspect the diff. Run `npm run sync:standalone` only when slide markup changed, because it writes the standalone file.

---

## 17. Known Exceptions and Current Limitations

- `index.html` is the canonical content source, but `ai_dont_know_workshop_1.html` duplicates the full CSS and JavaScript shell. The sync script updates only `<main class="deck">`, so styles and behaviour can drift.
- The standalone `--muted` value is `#948c82`, while source `globals.css` uses `#a39b91`. Use the source value as the dominant convention and compare both outputs manually.
- Several one-column code/activity slides use inline `style="grid-template-columns: 1fr"`. Future decks should use a named modifier; do not copy the inline pattern as ideal architecture.
- The "Who We Are" slide has hard-coded `data-title`-scoped column, heading, spacing, and orbital overrides. It is a one-off composition, not the default `.two` layout.
- The orbital diagram and event-card layout are specialised SPAI/history patterns and should not be reused without matching content.
- `.pill-row`, `.pill`, and `.reveal` are styled but unused. Treat them as provisional.
- A low-height rule targets `.event-row`, while current markup uses `.event-card`; the selector is stale.
- `public/images/notebookdownload.png` is unused; `public/images/backgrounds/` is empty.
- Current asset names and paths are inconsistent with the future convention: `SPAI Logo.png` contains a space, event files use underscores, and README examples use `/images/...` while markup uses `public/images/...`.
- The source asks for Inter but does not bundle it, so font metrics vary by platform.
- There is no reduced-motion media query, comprehensive focus style system, fullscreen API, presenter notes, activity timer, chart component, or semantic data-table component.
- Mobile hides the footer, dots, and slide count. Slides scroll instead of fitting, which must be checked manually.
- Desktop fitting can shrink dense stages to `0.68`; passing the fit calculation does not guarantee projector readability.
- The standalone visual-contract check covers only selected styling for slides 3 and 4. It is not a whole-deck visual regression test.
- The notebook alignment check validates code-cell text/order only. It does not validate markdown order, output descriptions, executed outputs, charts, solution correctness, or speaker scripts.
- Workshop 1 notebook Markdown does not consistently include the future `Output:` live-demo convention.
- No repository deployment configuration or production build command exists; Vercel deployment details are external/implicit.
- Representative visual review remains a manual requirement. Do not infer visual correctness solely from CSS inspection or passing scripts.

These limitations are documented for future work; do not refactor Workshop 1 merely to remove them.
