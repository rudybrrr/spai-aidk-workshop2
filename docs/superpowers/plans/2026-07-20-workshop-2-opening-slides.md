# Workshop 2 Opening Slides Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the approved Workshop 2 title link and eight-slide SPAI, series, and setup prelude while preserving the existing curriculum deck and standalone distribution file.

**Architecture:** Keep `index.html` as the canonical deck and reuse the Workshop 1 layout classes already present in `src/styles/slides.css`. Add one Node contract check for the new opening sequence, update existing count/order checks from 37 to 45 slides, then regenerate the standalone HTML from the canonical source.

**Tech Stack:** Semantic HTML5, existing hand-written CSS, browser JavaScript already in the repository, Node.js ES modules for verification, npm scripts.

## Global Constraints

- `AIDK_W2_Content_Document_Updated.md` remains authoritative for taught content and Workshop 2 setup.
- `slides.md` remains authoritative for design, architecture, assets, and implementation.
- Preserve the Workshop 1 visual system and the existing static architecture.
- Workshop 1 and Workshop 3 use 3–5 PM; Workshop 2 uses 7–9 PM.
- Use `https://spai-aidk-workshop2.vercel.app/` for the title follow-along link.
- The opening notebook download state is non-clickable text: `Download link coming soon`.
- Do not introduce dependencies, routes, generated images, or browser screenshot automation.
- Do not alter runnable notebook cells or curriculum content.

---

### Task 1: Add the opening-sequence contract

**Files:**
- Create: `scripts/check-opening-slides.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: canonical deck markup in `index.html` and supplied assets under `public/assets/images/events/` and `public/assets/images/logos/`.
- Produces: `npm run check:opening`, a deterministic contract asserting the 45-slide opening order, adapted copy, mixed schedule, setup command, placeholder, and required assets.

- [ ] **Step 1: Write the failing contract check**

Create `scripts/check-opening-slides.mjs` with Node strict assertions that:

- parse all canonical `<section>` elements;
- require 45 slides;
- require the first nine titles in this order: title, About SPAI, Who We Are, Previous Events, The full path in one view, What you should leave with, Make sure your notebook can run, Install the notebook tools once, Download the Workshop 2 notebook;
- require the follow-along URL and anchor;
- require the exact three schedule date/time strings;
- require `AIDK_W2_Workshop.ipynb`, the Workshop 2 pip command, and `Download link coming soon`;
- reject a placeholder anchor or placeholder QR code;
- require the three event images and supplied SPAI logo to exist.

- [ ] **Step 2: Verify the new contract fails for the missing feature**

Run: `node scripts/check-opening-slides.mjs`

Expected: FAIL because the canonical deck still contains 37 slides and does not contain the approved opening sequence.

- [ ] **Step 3: Register the contract in npm**

Add `"check:opening": "node scripts/check-opening-slides.mjs"` and run it first in the existing `build` command.

- [ ] **Step 4: Keep the failing state visible**

Run: `npm run check:opening`

Expected: the same intentional opening-slide failure before production markup is added.

### Task 2: Implement the canonical opening sequence

**Files:**
- Modify: `index.html`
- Modify: `src/styles/slides.css`

**Interfaces:**
- Consumes: existing `.title-stack`, `.section-title`, `.orbital`, `.event-list`, `.outline-table`, `.takeaway`, `.compare`, and `.code-window` patterns.
- Produces: the approved first nine slides, followed by the unchanged Workshop 2 recap and teaching sequence.

- [ ] **Step 1: Adapt the title slide**

Keep the Workshop 2 metadata and add a separate linked follow-along line below the hairline using the existing `.follow-link` treatment.

- [ ] **Step 2: Add About SPAI and event slides**

Add the divider, Who We Are orbital slide, and three-card Previous Events slide using the supplied logo/event paths and meaningful alt text.

- [ ] **Step 3: Add series outline and takeaways**

Add the three exact schedule rows and the four W1/W2/W3/All takeaway rows from the approved design.

- [ ] **Step 4: Add setup and notebook slides**

Add the three-step supported-editor checklist, the Workshop 2 pip command and quick-check code windows, and the non-clickable download placeholder.

- [ ] **Step 5: Add only the missing placeholder styling**

Add a restrained `.resource-placeholder` rule using existing copper, paper, mono, and border tokens. Do not duplicate the orbital, event, outline, takeaway, or code-window styles already present.

- [ ] **Step 6: Verify the new opening contract passes**

Run: `npm run check:opening`

Expected: `Workshop 2 opening sequence passed: 45 slides, SPAI context, mixed schedule, setup, assets, and placeholder are present.`

### Task 3: Update slide-count and order verification

**Files:**
- Modify: `scripts/check-feedback-revision.mjs`
- Modify: `scripts/check-notebook-slide-alignment.mjs`
- Modify: `scripts/check-standalone-visual-contract.mjs`
- Modify: `scripts/check-delivery-readiness.mjs`

**Interfaces:**
- Consumes: 45 canonical slides consisting of an eight-slide prelude plus the original 37-slide curriculum sequence.
- Produces: checks that distinguish the new absolute deck positions from the unchanged 37-slide curriculum contract.

- [ ] **Step 1: Update total-slide assertions and messages**

Change canonical and standalone totals from 37 to 45 wherever the deck count is asserted or reported.

- [ ] **Step 2: Update absolute slide indices**

Move the dedicated break assertion from zero-based index 15 to index 23, reflecting the eight inserted prelude slides.

- [ ] **Step 3: Preserve curriculum/notebook semantics**

Keep notebook cell counts, exact runnable code, dataset values, and existing content-document range strings unchanged. The new slides are organisational/setup prelude content and do not add notebook cells.

- [ ] **Step 4: Run focused contracts**

Run:

```bash
npm run check:feedback-revision
npm run check:alignment
npm run check:standalone-visuals
npm run check:delivery-readiness
```

Expected before standalone sync: canonical/count checks pass where applicable; standalone parity may fail because the distribution file has not yet been regenerated.

### Task 4: Synchronise and verify the deliverables

**Files:**
- Modify (generated): `ai_dont_know_workshop_2.html`

**Interfaces:**
- Consumes: canonical markup, styles, and scripts.
- Produces: a self-contained distribution deck matching the canonical 45-slide deck.

- [ ] **Step 1: Regenerate the standalone deck**

Run: `npm run sync:standalone`

Expected: the canonical deck block and current CSS/JavaScript are embedded in `ai_dont_know_workshop_2.html`.

- [ ] **Step 2: Run the complete verification suite**

Run: `npm run build`

Expected: every timer, opening, feedback, alignment, standalone, readability, and delivery-readiness check passes.

- [ ] **Step 3: Check source hygiene**

Run:

```bash
git diff --check
git status --short
```

Expected: no whitespace errors; only intended source/generated/check files plus the user's existing untracked asset directories are listed.

- [ ] **Step 4: Report manual visual checks**

Ask the user to manually inspect the first nine slides at presentation size, especially orbital alignment, event image crops, series-row wrapping, setup code readability, responsive stacking, and the title link. Do not capture automated screenshots or claim visual QA was performed.
