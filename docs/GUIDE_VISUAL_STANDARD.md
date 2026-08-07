# Guide Visual Standard

This document is mandatory for Teacher Guide and Self-Study Guide UI/PDF work.

## Icon system

- New learning-guide surfaces use **Phosphor Icons** as the primary icon language.
- Self-Study Guide uses **duotone** Phosphor icons for friendly visual wayfinding.
- Teacher Guide uses restrained Phosphor icons where they clarify structure; the guide must remain professional rather than decorative.
- PDF icons are embedded as inline SVG so they remain sharp in print and do not depend on an icon font.
- **PDF SVGs must use explicit fill colours. Do not rely on `currentColor` inside print SVGs.** This avoids black fallback icons in Vivliostyle/Chromium PDF rendering.
- The duotone secondary layer must also have its own explicit light fill rather than opacity-only colour inheritance.
- Use a muted semantic palette rather than forcing every icon into the same brown/gold colour. Colours should distinguish functions while remaining compatible with the book palette.
- Major Teacher Guide blocks must not reuse the same icon merely for convenience when a clearer Phosphor symbol exists.
- Existing Lucide icons in unrelated legacy application chrome do not need a risky global migration. New guide work must not add new Lucide dependencies/usages when a Phosphor guide icon is available.
- Phosphor source assets are MIT licensed. Keep attribution/license information in repository documentation when distributing substantial copied assets.

### Core self-study icon meanings

| Learning action | Phosphor icon |
| --- | --- |
| Look / preview | Eye, duotone |
| Listen | Headphones, duotone |
| Read | Book Open Text, duotone |
| Check / complete | Check Circle, duotone |
| Find the answer | Magnifying Glass, duotone |
| Write / finish | Pencil Line, duotone |
| Study time / routine | Clock, duotone |
| Quick Challenge | Target, duotone |
| Final Challenge / completion | Trophy, duotone |

### Core Teacher Guide icon meanings

| Teacher-guide function | Phosphor icon |
| --- | --- |
| Purpose / objectives | Target, duotone |
| Teaching approach / teaching idea | Lightbulb, duotone |
| Before reading | Eye, duotone |
| During reading | Book Open Text, duotone |
| After reading | Seal Check, duotone |
| Pedagogical purpose | Graduation Cap, duotone |
| Lesson sequence / timing | Clock, duotone |
| Pronunciation / listening | Headphones, duotone |
| Discussion | Chat Circle Text, duotone |
| Differentiation / grouping | Users Three, duotone |
| Assessment evidence | Clipboard Text, duotone |
| Values | Heart, duotone |

## Self-Study Guide layout

The Self-Study Guide is a learner-facing resource. It must feel easier to follow than the Teacher Guide.

- Do not put a sequence such as `1) ... 2) ... 3) ...` inside one paragraph.
- Every action in a study routine must appear on its **own row/card**.
- Preferred anatomy: **icon + short action title + one short instruction**.
- Keep one main action per row.
- Use generous spacing and clear hierarchy.
- **Do not put a second decorative square, circle, badge, border, or coloured tile around the step icon.** The Phosphor icon should sit directly in the step row with transparent space around it.
- The row/card itself may have a light border; the icon must not have its own nested frame.
- If a learner answers incorrectly, the visual flow must show the learning cycle: **find the answer sentence → read again → try again**.
- Do not make the learner focus on score before comprehension.
- Do not reference teacher-only actions, group work, unavailable worksheets, or resources that do not exist.

Recommended chapter routine:

1. Look at the title and image.
2. Listen once and follow the text.
3. Read one short part at a time.
4. Check underlined words in Word Notes.
5. Do the Quick Challenge.
6. Find the answer sentence after a wrong answer.
7. Read it again and try again.
8. Finish with one fact, one word, and/or one short sentence.

## A2 learner-language standard

A2 books are primarily for **Grades 5–6 EFL learners**. Learner-facing guide language must therefore be easier than the story text, not harder.

- Prefer common verbs: **look, listen, read, find, check, say, write, try, remember**.
- Prefer common nouns: **word, sentence, answer, story, chapter, idea, fact**.
- Keep most instructions to one short sentence and one action.
- Avoid introducing academic/metalinguistic words when a simpler phrase works.
- Avoid learner-facing wording such as **reinforcement, evidence, retrieval, recap, independently, informative narrative, factual sequencing, cognitive load, differentiation, assessment evidence, whole-story recall**.
- Use **find the answer sentence** instead of **find the evidence** for A2 learner materials.
- Use **read again** instead of **reread** when the simpler wording improves clarity.
- Use **tell the events in the right order** instead of **sequence the events** where possible.
- Grammar labels may appear only when they directly help the learner understand a sentence; explanation should stay short.
- A2 Self-Study content must be reviewed as student language, not copied from teacher-facing pedagogical language.
- The story itself is canonical and is not simplified by this rule. The rule applies to derived learner-support material.

## Teacher Guide layout

The Teacher Guide is professional and information-dense, but must remain easy to scan.

- Objectives are stacked vertically with clean **plain numbers** (`1.`, `2.`, `3.`), not decorative circular counters.
- Do not use oversized gold circles, pills, blobs, or pseudo-bullets that can distort in PDF rendering.
- Lesson sequence must be shown as separate timed rows, not one long paragraph.
- Use clear section blocks for objectives, pedagogy, lesson sequence, language focus, differentiation, assessment, and reflection.
- Use the semantic icon mapping above. In particular, **After reading**, **Assessment evidence**, **Teaching approach**, **During reading**, and **Pedagogical purpose** must have distinct icons.
- Keep classroom instructions actionable and realistic for the stated time.
- Never claim a worksheet/resource exists unless it is supplied.

## PDF rendering rules

- A4 safe margins must be preserved.
- No clipping, overlapping text, accidental blank pages, broken counters, or collapsed list markers.
- List markers must remain readable even if a custom font fails.
- Prefer CSS layout and inline SVG over font glyph hacks.
- Self-Study icons must render as vectors in the PDF.
- No guide icon may fall back to solid black because of inherited CSS colour.
- Final icon colour must be visually checked in the rendered PDF, not only in browser HTML.
- Render every final PDF to PNG pages and visually inspect before release.
- The story text, chapter boundaries, images, audio references and synchronization data remain canonical and protected; visual guide changes never modify them.
