# Two-Hour Delivery Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Workshop 2 reliably deliverable in two hours with an explicit break and eight-minute Q&A buffer.

**Architecture:** The content document owns the revised agenda, `index.html` owns canonical slide markup, and the sync script copies it into the standalone deck. Notebook setup and headings remain identical in attendee and completed editions; a dedicated validator protects delivery-specific contracts.

**Tech Stack:** Markdown, HTML/CSS/JavaScript, Jupyter notebook JSON, Node.js assertions, Python data libraries

## Global Constraints

- No taught content, examples, datasets, activities, or solutions change.
- Preserve the Workshop 1 design system and balanced projector-readability treatment.
- Keep slides, standalone deck, and both notebooks synchronized.
- Keep the attendee notebook unexecuted with seven guided blanks.

---

### Task 1: Delivery-readiness contract

**Files:**
- Create: `scripts/check-delivery-readiness.mjs`
- Modify: `package.json`

- [x] Add assertions for the 32-slide break, agenda timing, notebook setup/ranges, dependency bounds, and run sheet.
- [x] Run `npm run check:delivery-readiness` and confirm it fails before the artifacts are updated.

### Task 2: Source-of-truth agenda and facilitator guidance

**Files:**
- Modify: `AIDK_W2_Content_Document_Updated.md`
- Create: `materials/facilitator-run-sheet.md`

- [x] Apply the approved minute-by-minute agenda and updated slide ranges.
- [x] Add preflight, speaker handoffs, time calls, common-error triage, and hard-cut guidance.

### Task 3: Deck and notebooks

**Files:**
- Modify: `index.html`
- Modify: `notebooks/AIDK_W2_Workshop.ipynb`
- Modify: `notebooks/AIDK_W2_Workshop_Completed.ipynb`
- Modify: `requirements.txt`
- Modify: `README.md`

- [x] Insert the break slide and remove facilitator-only instructions from audience slides.
- [x] Add a setup confirmation and projector-sized chart defaults to both notebooks.
- [x] Shift post-break notebook slide ranges and document the 32-slide deck.
- [x] Pin compatible dependency ranges matching the verified environment.

### Task 4: Synchronize and verify

**Files:**
- Modify: `ai_dont_know_workshop_2.html`
- Modify: `scripts/check-notebook-slide-alignment.mjs`
- Modify: `scripts/check-standalone-visual-contract.mjs`

- [x] Update existing slide-count expectations to 32.
- [x] Run `npm run sync:standalone` and `npm run build`.
- [x] Execute completed notebook code cells sequentially with a noninteractive matplotlib backend.
- [x] Render and inspect all slides at 1440×900 and 1920×1080.
- [x] Run `git diff --check` and review the final diff before committing on `main`.
