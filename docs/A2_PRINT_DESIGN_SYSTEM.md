# A2 Print Design System — Golden Baseline

## Audience and intent

This is the binding print baseline for A2 books aimed primarily at grades 5–6. Pages must feel like a professionally designed graded reader and workbook: warm, clear, calm, visually engaging, and easy to scan without looking childish or dashboard-like.

The PDF engine is Vivliostyle. Vivliostyle executes the geometry and pagination rules defined here; it does not invent layout decisions.

Canonical English and Arabic story text, chapter titles/order/boundaries, narration, audio references, synchronization data, approved exercises, and approved vocabulary data are read-only. This document governs presentation only.

## A4 master geometry

Page size: 210 × 297 mm, portrait.

Download-PDF safe area:

- left: 14 mm
- right: 14 mm
- top: 14 mm
- bottom: 15 mm
- usable width: 182 mm
- usable height: 268 mm

Book-print mode may later use mirrored margins, but the approved download baseline uses equal 14 mm side margins.

No essential text, answer control, border, or decorative element may cross the safe area.

## Running furniture

Running headers stay quiet and live in the page margin.

English:

- left: STORIES OF THE PROPHETS
- right: ADAM • A2

Arabic uses the equivalent Arabic collection/book label.

Rules:

- 7–8 pt English; 9–10 pt Arabic
- muted category color
- no header boxes, pills, icons, or dark bands
- page number centered in bottom margin
- running furniture must never compete with learning content

## Story-page reading order

The semantic order is fixed:

1. chapter identity
2. story reading flow with 4:5 chapter image
3. Word Notes
4. Quick Challenge

Story prose is always one logical reading flow. Newspaper-style two-column story text is prohibited.

## Chapter identity

Target height: 16–20 mm.

Contains:

- small CHAPTER N eyebrow
- chapter title
- compact A2 marker at the opposite edge

Typography:

- eyebrow: 8–9 pt English / 11–12 pt Arabic
- title: 20–23 pt English / 23–27 pt Arabic
- title line height: 1.08–1.2
- A2 marker: compact rounded rectangle, never a large circle
- one thin divider below the heading is allowed

## Chapter image — approved 4:5 system

Application chapter images are 4:5 and the PDF preserves that ratio.

Approved standard image box:

- width: 58 mm
- height: 72.5 mm
- exact aspect ratio: 4:5
- object-fit: cover
- padding: approximately 2 mm
- corner radius: approximately 3–4 mm
- thin warm-neutral border
- subtle shadow only

Placement:

- odd English chapters: image at logical start / left
- even English chapters: image at logical end / right
- Arabic mirrors the visual direction
- story text flows around the image and then returns to full content width

This is still a single reading flow. The image must never create two independent text columns.

The image may move to the next page with its surrounding content if necessary, but must never be stretched or forced into a landscape banner.

## Story typography

English:

- font: Poppins
- current golden size: 12.7 pt
- permitted target range: 12.5–13 pt
- absolute minimum: 12 pt
- line height: approximately 1.47
- paragraph spacing: 3–4 mm
- automatic word hyphenation disabled

Arabic:

- font: embedded Arakom
- current golden size: 14 pt
- target range: 13.5–14.5 pt depending on metrics
- line height: approximately 1.58
- full RTL shaping and alignment
- automatic hyphenation disabled

Rules:

- never shrink story text merely to force a one-page chapter
- minimum widows/orphans target: 3 lines where supported
- a second page is preferable to unreadable compression

## Highlighted words and Word Notes

The PDF mirrors the application highlight logic rather than creating an independent vocabulary list.

Highlight source:

- `page.vocabulary`
- `page.animatedWords`
- only first meaningful occurrence on the chapter
- words already introduced on earlier chapters are not reintroduced unless the application would do so

In story text:

- underline only
- no background marker
- no chip, pill, bubble, or bold dashboard treatment
- approved underline: warm gold, approximately 1.2 pt with comfortable offset

Word Notes:

- appears only after the story text
- contains every term that was actually underlined on that chapter
- does not contain declared vocabulary that never occurs in the story text
- definitions come from the same application vocabulary/fallback system
- no PDF-authored definitions
- application generic fallback may be used when the application itself has no dedicated definition

Normal layout:

- 2-column definition grid
- pale sage surface
- thin green logical-start rule

Dense layout:

- when five or more actual highlighted terms occur, use a compact 3-column grid
- compacting Word Notes is allowed
- shrinking story text is not allowed

## Quick Challenge

Quick Challenge follows Word Notes in normal document flow.

There are no fixed y-coordinates. If the story becomes longer, Word Notes and Quick Challenge move down naturally. If a challenge cannot fit intact, Vivliostyle moves the complete block to the next page.

Visual treatment:

- warm cream surface
- thin border
- 1.5–2 mm category-colored logical-start rule
- no dark sidebar
- no oversized icon circles
- title about 11–12 pt English / 13–14 pt Arabic
- instruction about 8.5–9.5 pt English
- question about 10.5–11.5 pt English

Print-native conversions:

- True/False → square checkboxes
- Multiple choice → small option boxes
- Fill blank → printed sentence plus writing line
- Tap-to-reveal → writing response line
- Drag/drop or matching → shuffled/neutral word bank plus empty target areas
- sequencing → numbered/blank order boxes

The PDF must never reveal a correct answer simply because the application stores source items in correct groups/order.

Web buttons must never be reproduced literally.

## One-page chapter policy

One chapter per A4 is the preferred target when approved readability is preserved.

A chapter may use one page if all of the following fit without crowding:

- chapter identity
- exact 4:5 chapter image
- story at approved font size
- complete Word Notes
- complete Quick Challenge

The engine may compact Word Notes or print-native answer controls within their approved ranges before considering a second page.

It may not reduce the English story body below 12 pt or sacrifice the image ratio.

## Two-page chapter fallback

When a chapter cannot fit readably on one page, use an intentional two-page flow.

Page 1:

- chapter identity
- 4:5 image
- story begins

Page 2:

- story continues at the same typography
- Word Notes after the story finishes
- Quick Challenge follows Word Notes

Rules:

- do not move Word Notes before story text to save space
- do not split a short Quick Challenge
- do not create a nearly empty second page if a safe layout adjustment can solve it
- never compress canonical story content

## Assessment-page archetypes

Chapter layout is not copied blindly onto assessment pages. All page types inherit the same margins, typography family, color system, and visual restraint but use page-specific structures.

### Knowledge Check

- one reading column
- six comfortable True/False rows for the current Adam A2 source
- each row has a restrained number marker, question, and print checkbox controls
- no correct answer or feedback shown on the student page
- approximately one A4 page

### Vocabulary Challenge

- separate word and meaning columns
- source meanings may be deterministically reordered so matching remains meaningful
- reordering is presentation, not content editing
- answer cells are large enough for pencil use
- no correct mapping is visually exposed

### Final Review & Reflection

Current Adam A2 Final Review is intentionally spread across multiple A4 pages rather than compressed.

Approved structure:

1. sequencing + behavior categorization
2. reflection prompts with writing space
3. review challenge questions 1–4
4. review challenge questions 5–7

Correct answers are never shown on student pages.

### Master Glossary

- 12 source entries per current glossary part
- two-column reference layout
- term visually stronger than definition
- thin separators rather than individual cards
- optional memory/review writing line at bottom
- one A4 page per glossary part when readability permits

### Final Challenge

The current Adam A2 page 16 source contains a title, intro text, and image but no approved question array.

Therefore:

- PDF layer must not invent production questions
- an attractive Final Challenge section opener may be rendered from the current source
- when approved Final Challenge items are added to derived-learning source data, question pages follow the opener automatically
- A2 release target remains exactly 8 scored objective items once content work supplies them

## Color system — Stories of the Prophets A2

Current print palette:

- paper: #FFFDF8
- ink: approximately #302921
- deep brown: approximately #3B2418
- warm gold: approximately #C4933F
- gold deep: approximately #946820
- restrained orange: approximately #DC7B32
- pale cream: approximately #FBF3DF
- Word Notes sage: approximately #EDF5EF
- muted rules: warm gray/beige

Rules:

- reading pages remain light
- saturated/dark full-page colors belong mainly to covers and section openers
- color supports hierarchy instead of boxing every element
- no more than three strong visual hierarchy levels should compete on a normal A2 page

## Shape and decoration rules

Allowed:

- 2–4 mm corner radii
- thin dividers
- one small A2 marker
- restrained answer boxes
- subtle image shadow
- pale section surfaces

Prohibited:

- overlapping circles
- clusters of decorative circles
- chip clouds
- nested card-on-card layouts
- multiple colored pills competing for attention
- dashboard widgets
- decorative shapes added only to fill empty space

White space is intentional and should not automatically be filled.

## Cover safe area

Cover typography and labels stay at least 18 mm from trim edges unless an intentional bleed image is used.

Main title should normally remain inside a 24 mm horizontal safe area.

Full-bleed artwork is allowed, but essential text must remain inside the safe zone.

## Acceptance checks

Reject a page if any of the following occurs:

- story prose becomes two independent columns
- English story body falls below 12 pt
- Arabic becomes cramped or loses RTL shaping
- chapter image is missing or no longer 4:5
- highlighted terms use inconsistent source data
- an underlined term is missing from Word Notes
- a Word Notes term was never actually underlined on that chapter
- Word Notes precedes unfinished story text
- Quick Challenge clips, overlaps, or splits unnecessarily
- a print conversion exposes the correct answer
- a heading is stranded at the bottom
- any essential element crosses the safe area
- decoration is stronger than the reading/learning content

## Validated Adam A2 story baseline

The story-page system has been exercised on Adam A2 Chapters 1–10 in both English and Arabic with actual Vivliostyle PDF rendering.

Representative challenge types covered include:

- True/False
- multiple choice
- tap-to-reveal converted to writing space
- fill blank
- drag/drop converted to neutral matching workspace

The current validated story implementation uses exact 4:5 chapter images, single-flow reading, underline-only vocabulary cues, normal-flow Word Notes, and normal-flow Quick Challenges.