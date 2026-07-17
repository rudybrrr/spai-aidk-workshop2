# Balanced Projector Readability Design

## Objective

Improve back-of-room readability across all 31 Workshop 2 slides without changing slide content, instructional order, code, datasets, colours, typography families, or the established Workshop 1 visual language.

## Scope

The change is visual only. It applies to the canonical web deck and its standalone distribution copy.

The attendee and completed notebooks remain content-identical because no slide copy or code changes are planned. Existing alignment checks will still be run to confirm synchronisation.

## Scaling strategy

Use hierarchy-aware scaling rather than applying one uniform multiplier.

- Increase body copy, code, table content, labels, captions, activity metadata, footer text, and controls by approximately 18–22%.
- Increase deck titles and slide headings by approximately 10–15% so sparse slides gain presence without overwhelming the canvas.
- Increase supporting visual elements proportionally, including charts, logos, badges, navigation controls, progress dots, code-window chrome, and table spacing.
- Adjust component gaps and padding to preserve the existing rhythm.
- Recover canvas space by modestly reducing excessive outer slide margins where necessary.
- Raise the low-height fallback type sizes so shorter projector viewports do not undo the readability improvement.

Exact values may vary within these bands when visual QA shows that a component needs a smaller or larger adjustment to preserve hierarchy and prevent clipping.

## Preserved design system

The implementation will preserve:

- the warm dark background, copper and amber accents, and supporting palette;
- Georgia-based display typography, system sans body typography, and monospace code typography;
- existing frames, dividers, radii, shadows, grid, grain, and motion;
- all slide layouts and the restrained editorial tone;
- keyboard navigation, hashes, copy controls, slide numbering, footer labels, dots, and progress behaviour.

## Content boundary

No visible words, code snippets, data values, chart data, slide titles, slide order, notebook cells, learning outcomes, activities, or timings will change. Line wrapping may change as a natural consequence of larger type, but copy will not be rewritten or removed.

## Implementation approach

Update the shared CSS sources first, using the existing class hierarchy and responsive rules. Mirror the resulting CSS into the standalone HTML so both deliverables remain visually equivalent. Do not add a framework, build system, new font, or new visual component.

## Responsive and fitting behaviour

Desktop layouts must remain readable at 1440×900 and 1920×1080. Dense slides may use the existing runtime fitting system, but repeated scaling near its 0.68 floor is not acceptable. Mobile layouts must remain scrollable and operable below 980 px.

## Verification

Verification will include:

- standalone synchronisation and visual-contract checks;
- slide-to-notebook alignment checks;
- a content-diff check confirming that slide markup and notebook content were not altered;
- browser rendering of every slide at 1440×900 and 1920×1080;
- full-size inspection for clipping, unintended overlap, awkward wrapping, undersized labels, and excessive fit scaling;
- navigation, hash, copy-button, asset-loading, and responsive smoke checks.

## Success criteria

The work is complete when every slide is materially more readable on a large screen, visual hierarchy remains coherent, no content has changed, the canonical and standalone decks match, and all automated and visual checks pass.
