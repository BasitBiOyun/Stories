# A2 Print Design System — Golden Baseline

## Audience and intent

This is the binding print baseline for A2 books aimed primarily at grades 5–6. The page must feel like a professionally designed graded reader: warm, clear, calm, visually engaging, and easy to scan without looking childish or dashboard-like.

The PDF engine is Vivliostyle. Vivliostyle executes the geometry and pagination rules defined here; it does not invent layout decisions.

Canonical English and Arabic story text, chapter titles/order, narration, audio references, and synchronization data are immutable. This document governs presentation only.

## A4 master geometry

Page size: 210 × 297 mm, portrait.

Download-PDF safe area:

- left: 14 mm
- right: 14 mm
- top: 14 mm
- bottom: 15 mm
- usable width: 182 mm
- usable height: 268 mm

Book-print mode may later switch to mirrored margins, but the approved download baseline uses equal 14 mm side margins.

No text, icon, border, answer marker, or decorative element may cross the safe area.

## Vertical rhythm

The page uses a 4 mm spacing rhythm. Preferred spacing values are 4, 8, 12, 16, 20, 24, and 28 mm.

Exceptions are allowed for typography metrics, but arbitrary one-off gaps are prohibited.

## Running furniture

The running header lives in the page margin and must remain visually quiet.

English:

- left: STORIES OF THE PROPHETS
- right: ADAM • A2

Arabic uses the equivalent Arabic collection/book label.

Rules:

- 7–8 pt English; 9–10 pt Arabic
- muted category color
- no boxes, pills, icons, or dark bands
- page number centered in the bottom margin
- header/footer never compete with chapter content

## Story-page hierarchy

The visual reading order is fixed:

1. chapter identity
2. chapter image
3. story text
4. word notes
5. Quick Challenge

A2 story text is always a single reading column. Two-column story layouts are prohibited.

## Chapter identity block

Target height: 16–20 mm.

Contains:

- small CHAPTER N eyebrow
- chapter title
- compact A2 level marker aligned to the opposite edge

Typography:

- eyebrow: 8–9 pt, semibold, category accent
- title: 20–23 pt English; 23–27 pt Arabic
- title line height: 1.08–1.2
- A2 marker: plain compact capsule or text label; no oversized circles

A thin divider may separate the heading from the image. Decorative double lines are prohibited.

## Chapter image

The image is a prominent reading hook, not a side column.

Standard one-page chapter:

- width: 182 mm
- target height: 52–60 mm
- object-fit: cover
- corner radius: 3–4 mm maximum
- border: 0.5 pt neutral/category-tinted rule
- no shadow heavier than a subtle 1–2 mm visual lift

The image appears before the story text. Left/right side-image layouts are not used for A2 reading pages.

A one-line pre-reading caption is optional and must remain 8–9 pt English / 10–11 pt Arabic.

## Story typography

English:

- font: Poppins
- target size: 12.5–13 pt
- absolute minimum: 12 pt
- line height: 1.42–1.48
- paragraph spacing: 3–4 mm

Arabic:

- approved embedded Arabic font
- target size: 13.5–14.5 pt depending on font metrics
- line height: 1.5–1.65
- full RTL alignment and shaping

Rules:

- body width remains the full content width
- no artificial newspaper columns
- no body-size reduction merely to force one-page fit
- widows/orphans: minimum 3 lines where supported
- paragraphs may continue naturally to a second page only under the two-page fallback rules below

## Highlighted words in the reading flow

Important words support reading; they do not become a dominant block above the story.

In text:

- first meaningful occurrence receives a soft underline or pale highlight
- highlight must not reduce contrast
- no pill/chip treatment inside paragraphs

Word Notes section:

- appears after the story text
- normally 3 words per chapter
- compact horizontal or stacked definition rows depending on available width
- word in semibold category color
- definition in normal body text, simpler than the target word where possible
- no nested cards
- no large vocabulary box above the story

Target height for three English word notes: 24–30 mm.

## Quick Challenge

Quick Challenge follows the reading and word notes.

Target height: 34–44 mm for a standard A2 chapter activity.

Visual treatment:

- white/light-cream surface
- 1.5–2 mm category-colored left rule in LTR layouts; corresponding logical start rule in RTL
- no dark sidebar
- no oversized checkmark circle
- title 11–12 pt semibold
- instruction 8.5–9.5 pt
- question 10.5–11.5 pt semibold
- print-native answer controls

Examples:

- square checkbox for True/False
- small fixed circle or square for MC options
- writing line for short answer
- compact numbered boxes for sequencing

Web buttons must never be reproduced literally.

The challenge is `break-inside: avoid`; it moves as a unit when it fits on the next page.

## One-page chapter budget

A standard A2 chapter targets one page only when the text remains fully readable.

Approximate vertical budget inside the 268 mm safe area:

- chapter identity: 18 mm
- gap: 4 mm
- image: 56 mm
- gap: 4 mm
- story text: up to approximately 100–112 mm
- gap: 4 mm
- Word Notes: 26 mm
- gap: 4 mm
- Quick Challenge: 38–42 mm

This is a planning budget, not a reason to compress content.

A chapter qualifies for one-page mode only when it fits at approved typography sizes without clipping, overlap, or visually crowded spacing.

## Long-chapter two-page fallback

When a chapter cannot fit readably on one page, the engine must switch to an intentional two-page chapter.

Page 1:

- chapter identity
- full-width chapter image
- story text begins

Page 2:

- unobtrusive continued-chapter label
- story text continues at the same body size
- Word Notes after the story
- Quick Challenge at the end

Rules:

- never shrink body text below the approved minimum
- never reduce the image to a token thumbnail merely to save space
- never place Word Notes before the story to recover space
- never split a short Quick Challenge
- do not create a nearly empty second page; pagination should balance the text block when possible

## Color system — Stories of the Prophets A2

Main reading surface:

- paper: #F7F3E9
- card: #FFFDF8
- ink: #26231F
- secondary text: #6D6255
- neutral rule: #D9CAA5

Collection accents:

- deep brown: #2B140C
- warm gold: #C9AA61
- gold deep: #9E7830
- restrained orange accent: #D96C09

Rules:

- saturated/dark full-page colors belong mainly to covers and section openers
- reading pages remain light
- color is an accent, not a container for every element
- maximum three strong visual hierarchy levels on one A2 page

## Shape and decoration rules

Allowed:

- 3–4 mm corner radius on image/activity surfaces
- thin dividers
- one small A2 marker
- subtle soft highlight behind vocabulary terms

Prohibited:

- clusters of circles
- overlapping circles
- chip clouds
- nested cards
- multiple colored pills competing for attention
- dashboard-style widgets
- decorative shapes placed merely to fill space

## Cover safe-area rule

Cover typography and labels must remain at least 18 mm from every trim edge unless an intentional bleed image is used.

Main title should normally stay inside a 24 mm horizontal safe area.

The cover may use full bleed imagery/background, but no essential text may enter the bleed/edge-risk zone.

## Acceptance rules for the A2 golden page

A chapter page is rejected if any of the following occurs:

- story text uses two columns
- story body falls below 12 pt English
- chapter image is missing
- Word Notes appear before the story
- Quick Challenge overlaps, clips, or splits unnecessarily
- a heading is orphaned at the bottom
- any element crosses the safe area
- visual decoration is stronger than the reading content
- more than three major visual hierarchy levels compete on the page
- a long chapter is compressed rather than using the approved two-page fallback

## Pilot sequence

The first visual approval should use two real canonical cases:

1. Adam A2 Chapter 2 as the standard one-page chapter archetype.
2. Adam A2 Chapter 1 as the long-content two-page fallback archetype.

Both English and Arabic are rendered from their own canonical repository data.

After these archetypes are approved, the same geometry becomes the A2 golden baseline for all current and future books.