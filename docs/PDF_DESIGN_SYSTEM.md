# Stories PDF Design System

## Purpose

This document defines the visual and pagination rules for replacing the hand-positioned jsPDF output with a publication-oriented HTML/CSS + Vivliostyle PDF pipeline.

The PDF pipeline must never modify canonical story text, chapter titles, page order, narration files, audio references, or synchronization data. It only changes how approved content is laid out for print.

For A2 books, the detailed binding geometry and page rules are defined in `docs/A2_PRINT_DESIGN_SYSTEM.md`. That file takes precedence for A2 layout.

## Design principle

PDF appearance is determined by three independent layers:

1. **Collection theme** decides the palette.
2. **Page archetype** decides the layout.
3. **Semantic role** decides borders, emphasis, and component treatment.

No page or component may choose arbitrary colors, margins, borders, or spacing.

## Collection themes

### Stories of the Prophets

- primary: warm gold
- dark: deep brown
- light surface: cream
- accent: restrained orange

Character: warm, dignified, restrained.

### Islamic History and Civilization

Green-led, scholarly, historical, calm.

### Turkish-Islamic Heritage

Blue/turquoise-led, cultural, refined, modern.

## Neutral print palette

Normal reading and activity pages use light neutral surfaces. Long text never sits directly on saturated collection colors. Strong full-page color is reserved mainly for covers and major section openers.

Borders communicate hierarchy rather than decoration. Decorative double borders, nested cards, chip clouds, overlapping circles, and dashboard-like widgets are prohibited.

## Page archetypes

Every PDF page belongs to a print-specific template. Current student-book archetypes include:

1. Front cover / section opener
2. Story chapter
3. Knowledge Check
4. Vocabulary Challenge
5. Final Review & Reflection
6. Master Glossary
7. Final Challenge
8. Answer key when approved source data is available

Teacher Guide and Self-Study Guide use their own later archetypes rather than reusing student-book pages.

## A4 geometry

A2 download PDFs use the binding geometry in `docs/A2_PRINT_DESIGN_SYSTEM.md`:

- A4 portrait: 210 x 297 mm
- left/right/top: 14 mm
- bottom: 15 mm
- usable area: 182 x 268 mm

No layout decision may be based on manually incrementing a global vertical coordinate.

## A2 story-page system

The current validated Adam A2 story layout uses:

- one logical story reading flow
- 58 x 72.5 mm exact 4:5 chapter image
- image alternates sides and Arabic mirrors direction
- English Poppins approximately 12.7 pt
- Arabic Arakom approximately 14 pt
- automatic hyphenation disabled
- highlighted vocabulary underlined only
- Word Notes generated from terms actually underlined in the story
- definitions sourced from the same application vocabulary/fallback logic
- Word Notes and Quick Challenge remain in normal document flow
- dense Word Notes may use three columns without shrinking story text

Print conversions preserve question wording while replacing web interactions with paper-native controls.

## Pagination rules

- chapter headings remain with following content
- story body is never reduced merely to force a one-page chapter
- exact image aspect ratio is preserved
- Word Notes follow completed story text
- Quick Challenge stays intact when possible
- questions and their options stay together
- glossary term and definition stay together
- isolated headings and accidental blank pages are prohibited
- a second page is preferable to unreadable compression

## Adam A2 validation status

Actual Vivliostyle PDF and PNG rendering now covers the current Adam A2 student-book source structure in English and Arabic.

### Story chapters 1-10

Validated with real source text, 4:5 images, highlighted words, Word Notes, and Quick Challenges. Current chapters fit one A4 each at approved typography; the two-page fallback remains available for future longer content.

### Page 11 - Knowledge Check

Six readable True/False rows with print checkboxes and no answer leakage.

### Page 12 - Vocabulary Challenge

Words and meanings are presented in separate columns. Meanings are deterministically reordered for the paper task without changing their wording.

### Page 13 - Final Review & Reflection

The current source is intentionally spread across four readable A4 pages:

1. sequencing and behavior sorting
2. reflection with writing space
3. review questions 1-4
4. review questions 5-7

Source items may be deterministically reordered in print so the source data does not reveal correct order/grouping.

### Pages 14-15 - Master Glossary

One A4 page per source glossary part, twelve current entries per page, two-column reference layout.

### Page 16 - Final Challenge

The current source contains the title and introduction but no approved question array. The PDF layer therefore renders a Final Challenge opener only and does not invent production questions.

The current Firebase image reference on this source page returns 404. The PDF source data is not modified and no different story image is substituted. The opener falls back to non-content print decoration.

## Accessibility and print quality

- color is not the only information carrier
- body/background contrast remains high
- normal pages remain economical to print
- images never stretch
- English and Arabic fonts are embedded
- RTL direction is verified through rendered artifacts
- every pilot build records page count and renders PNGs for visual inspection

## Engine migration boundary

Vivliostyle is introduced beside the existing jsPDF generator. The existing generator remains available until the Adam A2 publication system, content-quality work, cover strategy, and final answer-key strategy are accepted. Retirement of the old generator must be a separate reviewed change.
