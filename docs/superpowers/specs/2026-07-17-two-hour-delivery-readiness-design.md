# Two-Hour Delivery Readiness Design

## Goal

Make Workshop 2 reliably deliverable in 120 minutes without changing its learning content.

## Approved changes

- Rebalance the agenda to reserve minutes 112–120 for Q&A.
- Add one audience-facing 10-minute break slide after Activity 1.
- Add notebook preflight output and projector-readable matplotlib defaults.
- Move facilitator-only timing and recovery guidance into a run sheet.
- Keep the content document, deck, standalone deck, and both notebooks synchronized.

## Delivery timing

The workshop runs 0–8 opening, 8–18 analytics loop, 18–36 pandas, 36–51 Activity 1, 51–61 break, 61–71 NumPy, 71–91 matplotlib, 91–101 Activity 2, 101–106 seaborn, 106–112 recap, and 112–120 Q&A.

## Constraints

- Preserve all taught concepts, examples, activities, datasets, and solutions.
- Preserve the approved Workshop 1 visual system and balanced projector-readability treatment.
- Keep the attendee notebook unexecuted with its seven guided blanks.
- Keep the completed notebook’s stored teaching outputs valid.

## Verification

Automated checks must enforce 32 synchronized slides, the break slide, revised notebook ranges, notebook preflight, pinned compatible dependencies, and the facilitator run sheet. Both notebooks must also pass structural validation, and the completed notebook must execute top to bottom.
