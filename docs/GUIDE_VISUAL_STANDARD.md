# Guide Visual Standard

This document is mandatory for Teacher Guide and Self-Study Guide UI/PDF work.

## Icon system

- New learning-guide surfaces use **Phosphor Icons** as the primary icon language.
- Self-Study Guide uses **duotone** Phosphor icons for friendly visual wayfinding.
- Teacher Guide uses restrained Phosphor icons only where they clarify structure; the guide must remain professional rather than decorative.
- PDF icons are embedded as inline SVG so they remain sharp in print and do not depend on an icon font.
- Existing Lucide icons in unrelated legacy application chrome do not need a risky global migration. New guide work must not add new Lucide dependencies/usages when a Phosphor guide icon is available.
- Phosphor source assets are MIT licensed. Keep attribution/license information in repository documentation when distributing substantial copied assets.

### Core self-study icon meanings

| Learning action | Phosphor icon |
| --- | --- |
| Look / preview | Eye, duotone |
| Listen | Headphones, duotone |
| Read | Book Open Text, duotone |
| Check / complete | Check Circle, duotone |
| Find evidence | Magnifying Glass, duotone |
| Write / finish | Pencil Line, duotone |
| Study time / routine | Clock, duotone |
| Quick Challenge | Target, duotone |
| Final Challenge / completion | Trophy, duotone |

## Self-Study Guide layout

The Self-Study Guide is a learner-facing resource. It must feel easier to follow than the Teacher Guide.

- Do not put a sequence such as `1) ... 2) ... 3) ...` inside one paragraph.
- Every action in a study routine must appear on its **own row/card**.
- Preferred anatomy: **icon + short action title + one short instruction**.
- Keep one main action per row.
- Use generous spacing and clear hierarchy.
- A2 instructions should be short, concrete and operational.
- If a learner answers incorrectly, the visual flow must show the learning cycle: **find evidence → reread → try again**.
- Do not make the learner focus on score before comprehension.
- Do not reference teacher-only actions, group work, unavailable worksheets, or resources that do not exist.

Recommended chapter routine:

1. Look at the title and image.
2. Listen once while following the text.
3. Read one paragraph at a time.
4. Check highlighted words in Word Notes.
5. Complete the Quick Challenge.
6. Find the evidence sentence after an incorrect answer.
7. Reread and try again.
8. Finish with one fact, one word, and/or one short sentence.

## Teacher Guide layout

The Teacher Guide is professional and information-dense, but must remain easy to scan.

- Objectives are stacked vertically with clean **plain numbers** (`1.`, `2.`, `3.`), not decorative circular counters.
- Do not use oversized gold circles, pills, blobs, or pseudo-bullets that can distort in PDF rendering.
- Lesson sequence must be shown as separate timed rows, not one long paragraph.
- Use clear section blocks for objectives, pedagogy, lesson sequence, language focus, differentiation, assessment, and reflection.
- Keep classroom instructions actionable and realistic for the stated time.
- Never claim a worksheet/resource exists unless it is supplied.

## PDF rendering rules

- A4 safe margins must be preserved.
- No clipping, overlapping text, accidental blank pages, broken counters, or collapsed list markers.
- List markers must remain readable even if a custom font fails.
- Prefer CSS layout and inline SVG over font glyph hacks.
- Self-Study icons must render as vectors in the PDF.
- Render every final PDF to PNG pages and visually inspect before release.
- The story text, chapter boundaries, images, audio references and synchronization data remain canonical and protected; visual guide changes never modify them.
