# A2 Print Design — V2 Binding Decisions

This document records the approved refinements made after visual review of the Adam A2 Vivliostyle prototype. Where this file conflicts with an earlier A2 pilot rule, this file takes precedence.

## 1. Chapter image

- Preserve the application artwork at its native `4:5` aspect ratio.
- Standard A2 print size: approximately `64 × 80 mm`.
- The image frame sits directly on the left or right edge of the 182 mm active content area; no decorative inner padding may create a second empty margin around the image.
- Alternate left/right placement where the chapter layout benefits from it. RTL layouts mirror the logical start/end position.
- The image may have only a thin border, restrained radius, and very light shadow.
- Never stretch, letterbox, or convert the 4:5 artwork into a horizontal banner.

## 2. Reading flow

The chapter remains one logical reading flow:

1. chapter identity
2. 4:5 image + story text flow
3. Word Notes
4. Quick Challenge

Story text is not split into newspaper-style columns. Word Notes and Quick Challenge remain in normal document flow and move downward automatically as the story becomes longer.

## 3. Highlighted words

- In the story, important words use a restrained underline only.
- Every word actually underlined in the chapter must appear in Word Notes.
- Word Notes use the approved application definition/fallback source; the PDF layer does not invent definitions.

## 4. Review Challenge contract

- Review Challenge contains exactly **8 objective questions** at A2, B1, and B2.
- A2 print layout is exactly **4 questions + 4 questions**, one full A4 page per group.
- The heading remains simply `REVIEW CHALLENGE`; do not append page numbers such as `• 3` or `• 4` beside the heading.
- Four-question pages should use the available A4 space deliberately: comfortable question spacing, readable options, and no large accidental dead zone.
- B1/B2 use the same eight-question content contract; their visual density may be level-specific later without changing the count.

## 5. Final Challenge contract

- Final Challenge contains exactly **10 objective questions for every level and every section/book**.
- Print layout is fixed at **5 questions + 5 questions** across two A4 question pages.
- Final Challenge questions should emphasise whole-text recall and retrieval; B2 may also use higher-level evidence/inference within the same ten-question contract.
- No random print question count and no level-specific 8/9/10 count variants.
- A section-opener may precede the two question pages, but it does not count as one of the two question pages.

## 6. Master Glossary

The two-column glossary remains, but readability is increased:

- English glossary word: approximately **11 pt**
- English definition: approximately **9.5 pt**
- Arabic word: approximately **13.4 pt**
- Arabic definition: approximately **11.5 pt**
- Increase entry height as required; never reduce these sizes simply to force a fixed page count.

## 7. Content identity

The PDF must use the same approved learning content as the application:

- canonical story text unchanged
- same chapter titles/order
- same image references
- same highlighted-word set and definitions
- same chapter learning activities after print adaptation
- same Review Challenge and Final Challenge objectives/questions

Only interaction mechanics change for paper (for example drag-drop becomes a matching bank and writing areas).

## 8. Automatic pagination

Vivliostyle owns pagination. Components must not be pinned to absolute vertical coordinates.

- Word Notes follow the story naturally.
- Quick Challenge follows Word Notes naturally.
- Four Review Challenge questions stay together on each assigned page.
- Five Final Challenge questions stay together on each assigned page.
- A question, its options, and answer area should not split when the complete block can fit on the next page.
- Readability wins over artificial one-page compression.
