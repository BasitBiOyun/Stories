# Stories PDF Design System

## Purpose

This document defines the visual and pagination rules for replacing the hand-positioned jsPDF output with a publication-oriented HTML/CSS PDF pipeline.

The PDF pipeline must never modify canonical story text, chapter titles, page order, narration files, audio references, or synchronization data. It only changes how approved content is laid out for print.

## Design principle

PDF appearance is determined by three independent layers:

1. **Collection theme** decides the palette.
2. **Page archetype** decides the layout.
3. **Semantic role** decides borders, emphasis, and component treatment.

No page or component may choose arbitrary colors, margins, borders, or spacing.

## Collection themes

The existing product identity is retained and normalized as print tokens.

### Stories of the Prophets

- primary: `#C2AA6B`
- dark: `#1F0E08`
- light surface: `#FEF3C7`
- accent: `#D97706`
- title: `#78350F`

Character: warm, dignified, restrained.

### Islamic History and Civilization

- primary: `#10B981`
- dark: `#052117`
- light surface: `#ECFDF5`
- accent: `#047857`
- title: `#064E3B`

Character: scholarly, historical, calm.

### Turkish-Islamic Heritage

- primary: `#22D3EE`
- dark: `#051121`
- light surface: `#F0F9FF`
- accent: `#0369A1`
- title: `#0C4A6E`

Character: cultural, refined, modern.

## Neutral print palette

The main reading pages use neutral surfaces so that long texts remain comfortable and economical to print.

- paper background: `#F4F1EA`
- content card: `#FFFFFF`
- primary text: `#2A2622`
- secondary text: `#57534E`
- neutral rule: `#D7D1C6`
- soft grey surface: `#F7F7F5`

Rules:

- Full-page dark or saturated backgrounds are limited to the front cover, back cover, and major section openers.
- Story, exercise, glossary, guide, and answer-key pages use the neutral paper background.
- Long text never sits directly on strong category colors.
- Category colors appear as chapter numbers, thin rules, labels, small panels, and controlled accents.

## Border system

Borders communicate hierarchy rather than decoration.

### Level 0 — no border

Used for:

- normal story text
- headings
- running headers and footers
- simple vocabulary lists

### Level 1 — neutral divider

- `0.5pt solid #D7D1C6`
- used between compact sections, table rows, and answer-key groups

### Level 2 — content card

- `0.75pt solid` category primary at approximately 25% visual strength
- white or light category surface
- 3–4 mm corner radius
- used for vocabulary cards, tips, examples, and compact chapter activities

### Level 3 — important learning block

- 1.5–2 mm category-colored left border
- otherwise neutral border or no border
- used for Quick Challenge, key idea, teacher note, and important instructions

### Level 4 — assessment block

- 1pt category accent border
- white background
- stronger heading strip
- used for Final Challenge, scoring areas, and answer-key sections

Rules:

- Decorative double borders are prohibited.
- Border thickness must not vary within the same component family.
- Cards must not be nested more than one level deep.
- A border must never be the only indicator of correctness or state.

## Page archetypes

Every PDF page belongs to one of these templates:

1. Front cover
2. Copyright / publication information
3. Table of contents
4. Section opener
5. Story chapter
6. Practice / exercise
7. Vocabulary / glossary
8. Final Review
9. Final Challenge
10. Answer key
11. Teacher guide
12. Self-study guide
13. Back cover

Each archetype has fixed margins, heading positions, footer rules, and allowed components. Components cannot manually position themselves outside the page flow.

## A4 geometry

- page size: A4 portrait
- top margin: 18 mm
- bottom margin: 18 mm
- inner margin: 20 mm
- outer margin: 16 mm
- running header zone: 8 mm
- running footer zone: 8 mm
- minimum usable content width: 165 mm

Mirrored inner and outer margins may be enabled for book-print mode. Screen-download mode may use equal left and right margins.

## Pagination rules

The publication engine must apply these rules automatically:

- chapter titles always begin with at least three following lines on the same page
- exercise heading and its first item remain together
- one question, its options, and its answer area remain together whenever they fit on one page
- short cards are never split across pages
- long cards may split only at explicitly permitted internal boundaries
- table headers repeat on continued pages
- glossary entries do not split between the word and definition
- isolated headings at the bottom of a page are prohibited
- isolated final lines at the top or bottom of a page are minimized through widow/orphan control
- section openers begin on a new page
- intentional blank pages are allowed only for print-signature or right-page starts and must not appear in normal downloadable PDFs

No layout decision may be based on manually incrementing a global vertical coordinate.

## Component alignment

The inconsistent up/down placement seen in the current PDFs is removed by using shared component classes.

- all action labels and answer fields use a common baseline and minimum height
- all question numbers occupy the same width
- option markers use a fixed-size circle or square
- instruction strips use one fixed padding system
- buttons from the web interface are not reproduced literally; they become print-native labels or answer boxes
- components align to a 4 mm vertical rhythm

## Background usage by page type

### Cover

- full dark category background
- category primary and accent used prominently
- one strong image area

### Section opener

- dark or light category surface
- minimal text
- no dense activities

### Story page

- neutral paper background
- optional white text panel only when necessary for readability over an image
- category color limited to chapter label, rule, and small highlights

### Exercise page

- neutral paper background
- white question cards
- category-colored question number and instruction strip

### Glossary

- neutral paper background
- alternating white and soft-grey rows or compact cards
- no strong full-width color bands except section title

### Final Challenge

- neutral background
- stronger category frame and title band
- consistent answer areas
- no gamified web-button appearance

### Teacher and self-study guides

- neutral background
- category-colored section labels
- tables and planning blocks use restrained neutral borders

## Typography

- Latin interface and English: Poppins
- Arabic: a tested Arabic typeface with reliable shaping and metric compatibility; it must be embedded and approved in the pilot before rollout
- minimum story body size: 11.5 pt
- minimum guide body size: 10.5 pt
- line height: approximately 1.4 for story text and 1.3 for guides
- headings must not be resized dynamically merely to force content onto a page

## Accessibility and print quality

- body text/background contrast must meet WCAG AA-equivalent contrast
- color is not the only information carrier
- greyscale printing must preserve hierarchy
- backgrounds must not cause excessive ink usage on normal content pages
- images must retain aspect ratio and must never stretch to fill a box
- raster assets should target at least 150 dpi at final printed size; 300 dpi is preferred for print masters

## Pilot decision process

Adam A2 English and Arabic are the visual pilot.

For each language, generate and compare:

1. cover
2. table of contents
3. one short story chapter
4. one long story chapter
5. one mixed exercise page
6. glossary
7. Final Challenge
8. answer key
9. teacher guide
10. self-study guide

The team selects one approved style. That style becomes the immutable print design baseline for all later books.

## Visual regression gate

The PDF pipeline is not accepted only because it builds successfully.

Automated checks must include:

- page count recorded for each pilot document
- no text or component outside page bounds
- no unexpected blank page
- no clipped text
- no split short question card
- fonts embedded
- English and Arabic direction correct
- screenshots of representative pages compared with approved baselines

## Engine migration boundary

The new engine is introduced beside the existing jsPDF generator during the pilot. The existing generator remains available until Adam A2 English and Arabic pass visual and content-preservation checks. After approval, the old generator may be retired in a separate reviewed change.
