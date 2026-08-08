# B1 Print Design System

Status: B1 inherits the validated Adam A2 Gold print system. This document records only B1-specific decisions and does not create a competing visual standard.

## 1. Binding inheritance

The following A2 Gold rules remain binding for B1:

- A4 portrait: 210 × 297 mm
- safe margins: 14 mm left/right/top, 15 mm bottom
- one logical story-reading flow
- Poppins for English; embedded Arakom for Arabic
- English story body target: 12.7 pt; absolute minimum: 12 pt
- Arabic story body target: 14 pt
- automatic hyphenation disabled
- exact 4:5 chapter image
- Word Notes after completed story prose
- Quick Challenge after Word Notes
- print-native answer controls; never reproduce web buttons literally
- never expose the stored correct answer on a student page
- widows/orphans target of at least three lines where supported
- visual QA by rendering final PDFs to PNG

The practical Gold renderer currently uses a **64 × 80 mm** image box. B1 uses that proven implementation geometry so the actual renderer and B1 output remain consistent.

## 2. The main B1 difference: pagination pressure

B1 chapters are often longer than A2 chapters. One A4 page remains desirable, but it is not a requirement.

The order of priorities is:

1. preserve canonical story prose
2. preserve readable body size
3. preserve the exact 4:5 image
4. preserve Word Notes and Quick Challenge completeness
5. allow additional pages when required

The renderer must never reduce English story text below 12 pt merely to keep a chapter on one page.

## 3. Intentional two-page B1 chapter

When a B1 chapter does not fit safely on one page:

Page 1:
- chapter identity
- exact 4:5 image
- story begins

Page 2:
- story continues at the same body size
- Word Notes appear only after the story ends
- Quick Challenge follows Word Notes

A chapter may use more than two pages only if the source content genuinely requires it. Pagination is a presentation outcome, not a reason to edit or shorten canonical prose.

## 4. Word Notes

B1 chapter vocabulary targets 4–5 reviewed items, with a safety floor of three when no fourth defensible application definition exists.

Print behavior remains source-driven:

- underline only the first meaningful occurrence in story prose
- do not create highlight chips or colored marker backgrounds
- print only terms actually found and underlined on that chapter
- definitions must come from effective application data or the same fallback vocabulary source used by the application
- five or more displayed notes may use the compact three-column Word Notes grid

## 5. Quick Challenge

B1 Quick Challenges may contain longer stems and options than A2. They remain a complete, unsplit block whenever possible.

Multiple-choice print rules:

- three or more neutral option boxes
- no preselected option
- no visual hint based on correct-answer position
- option order is the effective finalized BookData order

Reflection/tap-reveal activities become writing space rather than answer-reveal UI.

## 6. Sûfî and historical books

Presentation must preserve any attribution framing supplied by the finalized B1 learning layer.

For Yunus Emre, the print renderer must not remove phrases such as “According to the chapter” or equivalent Arabic framing from derived questions and explanations.

## 7. Shared renderer

B1 chapter PDF generation uses:

`scripts/pdf-pilot/buildB1ChapterSample.ts`

with:

`scripts/pdf-pilot/b1-sample.css`

The builder supports all registered B1 books:

- `B1_BOOK=adam`
- `B1_BOOK=abraham`
- `B1_BOOK=moses`
- `B1_BOOK=mecca`
- `B1_BOOK=yunus`

Language:

- `B1_LANGUAGE=en`
- `B1_LANGUAGE=ar`
- `B1_LANGUAGE=both` (default)

Chapter selection:

- `B1_CHAPTER_IDS=all` (default)
- or a comma-separated subset such as `1,7,13`

Example:

```bash
B1_BOOK=moses B1_LANGUAGE=en B1_CHAPTER_IDS=1,5,13 npm run pdf:b1-sample
```

The command:

1. reads effective finalized B1 BookData
2. downloads/copies required chapter assets and fonts
3. creates publication HTML
4. renders with pinned Vivliostyle 11.1.0
5. renders the produced PDF to PNG with `pdftoppm`

## 8. Acceptance checks

Reject a B1 print page if:

- canonical prose is missing, rewritten, or compressed to fit
- English story body falls below 12 pt
- Arabic shaping/RTL is broken
- the image is stretched or no longer 4:5
- story prose becomes independent newspaper columns
- Word Notes appear before unfinished story prose
- Quick Challenge clips, overlaps, or reveals an answer
- a poem/source marker such as `[POEM]` is printed literally
- any essential content crosses the safe area
- a nearly empty continuation page could have been avoided without reducing readability

The correct response to genuine density is intentional pagination, not text shrinkage.
