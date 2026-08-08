# B2 Print Design System — Gold Inheritance

Status: source tooling complete; representative PDF render/visual gate pending.

## Principle

B2 does not introduce a new visual language. It inherits the approved A2/B1 Gold print system and gives long B2 prose more pages rather than reducing readability.

## Page geometry

- A4 portrait
- top/left/right margins: 14 mm
- bottom margin: 15 mm
- current runtime Gold chapter image: **64 × 80 mm**, exact 4:5
- single-flow reading text; no two-column story layout
- chapter header → story + image → Word Notes → Quick Challenge
- English Poppins
- Arabic Arakom
- English story body: 12.7 pt / ~1.47 line-height
- Arabic story body: 14 pt / ~1.58 line-height
- never shrink story prose below the approved 12 pt readability floor merely to force a chapter onto one page

The earlier written A2 note mentioning 58 × 72.5 mm does not match the actual working A2/B1 Gold renderer. B2 therefore follows the operational 64 × 80 mm geometry already used by the validated print CSS lineage.

## Long-chapter rule

B2 chapters are substantially longer than A2/B1 in several books.

A chapter may intentionally continue onto a second or later A4 page. This is preferred over:

- shrinking fonts
- reducing line-height below the readable baseline
- compressing Word Notes until they become difficult to read
- overlapping/obscuring the Quick Challenge
- forcing story prose into narrow columns

## Image rule

The approved chapter image remains 4:5.

- image may float at the beginning/end side according to page rhythm
- Arabic reverses the float appropriately
- image must not be stretched
- `object-fit: cover`
- image block should not split across pages

## Word Notes

- only reviewed application vocabulary is used
- the renderer does not invent definitions
- Word Notes are printed only for terms actually matched/highlighted in the selected story prose
- 5+ notes may use the denser three-column note treatment already inherited from B1
- interpretive Yunus Emre Sûfî vocabulary uses the attribution-safe effective Gold definition

## Quick Challenge

The current application exposes only `page.exercises[0]` on StoryPage.

The B2 print sample therefore renders the same first visible Quick Challenge.

- learner-facing only
- no correct-answer marker
- no answer explanation/feedback leakage
- MC/TF gets print-native answer boxes
- unsupported response types get neutral writing space rather than answer leakage

## Generic renderer

Files:

- `scripts/pdf-pilot/buildB2ChapterSample.ts`
- `scripts/pdf-pilot/b2-sample.css`

Command:

```bash
npm run pdf:b2-sample
```

Environment:

```bash
B2_BOOK=adam|abraham|moses|mecca|yunus
B2_LANGUAGE=en|ar|both
B2_CHAPTER_IDS=1,5,13   # or all
B2_OUTPUT_DIR=...       # optional
```

Examples:

```bash
B2_BOOK=adam B2_LANGUAGE=both B2_CHAPTER_IDS=1,8,17 npm run pdf:b2-sample
B2_BOOK=abraham B2_LANGUAGE=both B2_CHAPTER_IDS=1,19,31,35 npm run pdf:b2-sample
B2_BOOK=moses B2_LANGUAGE=both B2_CHAPTER_IDS=1,15,22,24 npm run pdf:b2-sample
B2_BOOK=mecca B2_LANGUAGE=both B2_CHAPTER_IDS=1,10,15,17 npm run pdf:b2-sample
B2_BOOK=yunus B2_LANGUAGE=both B2_CHAPTER_IDS=3,5,8,10,13 npm run pdf:b2-sample
```

Renderer:

- `@vivliostyle/cli@11.1.0`
- output PDF
- `pdftoppm -png -r 160` generates QA images under `rendered/en` and `rendered/ar`

## Required visual QA

Representative samples must be inspected after rendering for:

- story clipping
- accidental overlap
- bad page breaks
- image distortion
- orphaned header
- Word Notes separation
- Quick Challenge split/overflow
- Arabic RTL and punctuation behavior
- poem/quotation presentation
- unexpected blank pages
- chapter continuation quality

B2 PDF should not be declared visually verified until this render-and-inspect gate is completed in a real checkout.
