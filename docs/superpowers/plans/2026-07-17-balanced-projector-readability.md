# Balanced Projector Readability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Increase the projector readability of all 31 Workshop 2 slides while preserving every item of visible content and the Workshop 1 design language.

**Architecture:** Add an automated readability contract first, then implement hierarchy-aware CSS scaling in the canonical stylesheets and mirror the same overrides into the self-contained deck. Retain the current HTML, JavaScript, notebooks, assets, layouts, and fitting system; use rendered browser screenshots and fit-scale measurements for final QA.

**Tech Stack:** Static HTML5, CSS, browser JavaScript, Node.js ES modules, existing npm validation scripts, headless Chromium when available.

## Global Constraints

- No visible words, code snippets, data values, chart data, slide titles, slide order, notebook cells, learning outcomes, activities, or timings may change.
- Body copy, code, table content, labels, captions, activity metadata, footer text, and controls increase approximately 18–22%.
- Deck titles and slide headings increase approximately 10–15%.
- Colours, typography families, frames, dividers, radii, shadows, grid, grain, motion, and navigation behaviour remain unchanged.
- The canonical deck and `ai_dont_know_workshop_2.html` must remain visually equivalent.
- Desktop verification covers 1440×900 and 1920×1080; mobile remains scrollable and operable below 980 px.
- No slide may rely on repeated fitting near the 0.68 floor.

---

### Task 1: Add the projector-readability contract

**Files:**
- Create: `scripts/check-projector-readability.mjs`
- Modify: `package.json`
- Test: `scripts/check-projector-readability.mjs`

**Interfaces:**
- Consumes: `src/styles/globals.css`, `src/styles/slides.css`, `src/styles/code.css`, and the inline `<style>` block in `ai_dont_know_workshop_2.html`.
- Produces: `npm run check:projector-readability`, which exits nonzero when required enlarged values or standalone parity are absent.

- [ ] **Step 1: Write the failing readability check**

Create a Node script that reads the four style sources, extracts the block between `/* Projector readability scale */` and `/* End projector readability scale */`, and asserts exact required declarations. Required canonical declarations include body minimum `1.18rem`, teaching-lead minimum `1.24rem`, code minimum `1.06rem`, code-label text `0.92rem`, table-header text `0.9rem`, activity metadata `0.95rem`, footer and navigation text `0.92rem`, chart width `700px`, chart height `500px`, and fit-floor `0.68`. Assert that the concatenated canonical override blocks appear byte-for-byte in the standalone inline CSS.

- [ ] **Step 2: Run the check and verify RED**

Run: `node scripts/check-projector-readability.mjs`

Expected: exit 1 with `Missing projector readability scale block` because the CSS overrides do not exist yet.

- [ ] **Step 3: Add the npm command**

Add `"check:projector-readability": "node scripts/check-projector-readability.mjs"` and include it in `build` after the existing two checks.

- [ ] **Step 4: Re-run the check and preserve RED**

Run: `npm run check:projector-readability`

Expected: exit 1 with the same missing-block failure, proving the npm command executes the new contract.

- [ ] **Step 5: Commit the failing contract**

Run:

```bash
git add scripts/check-projector-readability.mjs package.json
git commit -m "test: add projector readability contract"
```

### Task 2: Enlarge canonical typography and visual components

**Files:**
- Modify: `src/styles/globals.css`
- Modify: `src/styles/slides.css`
- Modify: `src/styles/code.css`
- Test: `scripts/check-projector-readability.mjs`

**Interfaces:**
- Consumes: the existing selector hierarchy, responsive breakpoints, and `--fit-scale` runtime property.
- Produces: three delimited CSS override blocks whose concatenation is the canonical projector-readability scale.

- [ ] **Step 1: Add hierarchy-aware typography overrides**

In `globals.css`, add a delimited override block that enlarges kickers, titles, headings, body, leads, links, metadata, QR elements, and spacing. Use title/heading increases of 10–15% and supporting-type increases of 18–22%, with body minimum `1.18rem` and teaching-lead minimum `1.24rem`.

- [ ] **Step 2: Add component and chrome overrides**

In `slides.css`, add a delimited override block for footer, dots, navigation buttons, orbital, rows, flow, notes, tables, chart figures, activity timing, logos, and responsive/low-height rules. Use footer and navigation text `0.92rem`, table-header text `0.9rem`, activity metadata `0.95rem`, chart width `min(700px, 100%)`, chart image max-height `500px`, and preserve the fit floor at `0.68`.

- [ ] **Step 3: Add code-window overrides**

In `code.css`, add a delimited override block for comparison gaps, code chrome, labels, copy controls, padding, and code text. Use code minimum `1.06rem` and code-label text `0.92rem`.

- [ ] **Step 4: Run the contract and confirm the expected parity failure**

Run: `npm run check:projector-readability`

Expected: exit 1 reporting that the standalone deck does not yet contain the canonical projector-readability scale.

- [ ] **Step 5: Inspect the source-only diff**

Run: `git diff -- src/styles/globals.css src/styles/slides.css src/styles/code.css`

Expected: CSS-only changes within the three readability blocks; no colour, font-family, HTML, JavaScript, notebook, or asset changes.

### Task 3: Synchronize the standalone deck and pass automated checks

**Files:**
- Modify: `ai_dont_know_workshop_2.html`
- Test: `scripts/check-projector-readability.mjs`
- Test: `scripts/check-notebook-slide-alignment.mjs`
- Test: `scripts/check-standalone-visual-contract.mjs`

**Interfaces:**
- Consumes: the concatenated canonical projector-readability override blocks.
- Produces: a self-contained HTML deck with byte-equivalent readability overrides.

- [ ] **Step 1: Mirror the canonical overrides**

Insert the three canonical delimited CSS blocks into the standalone file's inline `<style>` element without changing its `<main class="deck">` markup, scripts, or visible content.

- [ ] **Step 2: Run the readability check and verify GREEN**

Run: `npm run check:projector-readability`

Expected: exit 0 with confirmation that all required thresholds and standalone parity pass.

- [ ] **Step 3: Run repository validation**

Run: `npm run build`

Expected: alignment, standalone visual contract, and projector-readability checks all exit 0.

- [ ] **Step 4: Confirm the content boundary**

Run: `git diff --word-diff=porcelain -- index.html notebooks/AIDK_W2_Workshop.ipynb notebooks/AIDK_W2_Workshop_Completed.ipynb`

Expected: no output.

- [ ] **Step 5: Commit the synchronized visual implementation**

Run:

```bash
git add src/styles/globals.css src/styles/slides.css src/styles/code.css ai_dont_know_workshop_2.html scripts/check-projector-readability.mjs package.json
git commit -m "style: enlarge workshop slides for projection"
```

### Task 4: Render and inspect every slide

**Files:**
- Verify: `index.html`
- Verify: `ai_dont_know_workshop_2.html`
- Verify: all assets under `public/assets/`

**Interfaces:**
- Consumes: both completed decks and the browser-exposed `window.deckSlides`, `window.deckNavigation`, and `window.fitSlide` interfaces.
- Produces: full-deck screenshots and a QA ledger in external scratch storage; no repository artifacts.

- [ ] **Step 1: Start the local static server**

Run: `python3 -m http.server 3000`

Expected: the repository is available at `http://127.0.0.1:3000/`.

- [ ] **Step 2: Capture all slides at 1440×900**

Open the canonical deck, navigate to slides 1–31 by hash, wait for layout fitting, record each `.stage` computed `--fit-scale`, and capture a full viewport screenshot for each slide.

Expected: 31 screenshots, no page errors, and no fit scale at or below `0.70` without manual inspection and justification.

- [ ] **Step 3: Capture all slides at 1920×1080**

Repeat the 31-slide capture at 1920×1080.

Expected: 31 screenshots, no clipping or unintended overlaps, and improved back-of-room readability.

- [ ] **Step 4: Inspect every slide full-size**

Review all 62 screenshots individually for title wrapping, code clipping, table overflow, chart-label legibility, footer/control overlap, and uneven spacing. Correct CSS-only issues and repeat the affected captures.

- [ ] **Step 5: Smoke-test interaction and responsive behaviour**

Verify right/left navigation, Home/End, hash refresh, first/last disabled states, a Copy button, asset loading, console errors, 980 px transition behaviour, and narrow mobile scrolling.

- [ ] **Step 6: Run fresh final verification**

Run:

```bash
npm run build
git diff --check
git status --short
```

Expected: all checks exit 0; `git diff --check` prints nothing; status contains only intentional plan or QA-related changes not already committed.

