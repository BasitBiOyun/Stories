# Adam A2 English Gold Master

## Status

Phase 1: finalized derived learning content.

Phase 2: PDF gold-master publication system.

This gold master is the reference implementation for later A2 rollout. It is intentionally local-first and does not require GitHub Actions.

## Non-negotiable source boundary

The PDF system must not edit or rewrite:

- canonical story prose
- chapter titles, boundaries, order, or page identity
- chapter images or image references
- narration audio or audio references
- hotspots
- synchronization points or timed chunks

English publication reads the finalized `adamA2BookDataEn` derived-content layer. Arabic remains outside Phase 2 and is handled in Phase 3 from its own canonical text.

## Student Book contract

The final English Student Book is assembled from publication-native sections:

1. front cover + contents + how-to-use page
2. Chapters 1-10, one A4 reading flow per chapter when content fits naturally
3. Knowledge Check - exactly 8 questions
4. Vocabulary Challenge
5. Final Review & Reflection
6. Review Challenge - exactly 8 questions, printed 4 + 4
7. Master Glossary - selected A2 vocabulary from both halves of the story
8. Final Challenge - exactly 10 objective questions, printed 5 + 5 after the opener
9. Answer Key generated from the same finalized BookData

Expected Student Book page count for Adam A2 English gold master: 26 pages.

## Teacher Guide contract

The Teacher Guide includes:

- professional cover and framework overview
- 10 chapter-linked teaching plans
- measurable objectives
- realistic timing
- teaching purpose
- lesson sequence
- grammar/pronunciation in context
- discussion/evidence questions
- support and extension
- interactive tips
- formative assessment / exit evidence
- no-print activities
- values reflection where supported
- answer/evidence appendix generated from finalized BookData

The PDF must not claim that separate worksheets exist when they are not supplied.

## Self-Study Guide contract

The Self-Study Guide includes:

- professional cover
- independent-learning quick start
- Read → Try → Check → Reread → Try again routine
- whole-book chapter tracker
- 10 chapter-linked independent routines
- Support and Extension routes rather than teacher-only differentiation wording
- language and listening guidance
- self-check questions
- feedback recovery strategy
- the full general self-study guide

## Print system

- engine: `@vivliostyle/cli@11.1.0`
- A4 CSS Paged Media
- Poppins for English
- publication layout rather than web-card screenshots
- readable typography preferred over forced one-page compression
- no hand-incremented global jsPDF y-coordinate system

The existing app jsPDF generator remains separate until a later reviewed production-switch decision.

## Local build

Run:

```bash
npm run pdf:adam-a2-gold
```

The command:

1. validates finalized Adam A2 learning content,
2. builds publication HTML,
3. renders all Student Book sections with pinned Vivliostyle,
4. merges the Student Book,
5. renders Teacher Guide and Self-Study Guide,
6. checks page-count contracts,
7. renders every final PDF page to PNG,
8. writes `gold-master-manifest.json`.

Required local system tools for the final merge/inspection step:

- `pdfunite`
- `pdfinfo`
- `pdftoppm`

These are provided by Poppler on common development environments.

## Visual approval rule

Phase 2 is considered complete only after the final Student Book, Teacher Guide, and Self-Study Guide have been rendered page by page and checked for:

- clipping
- overlap
- accidental blank pages
- unreadably small text
- broken glyphs
- stretched images
- bad page breaks
- isolated headings
- incorrect challenge counts
- answer leakage
- missing late-chapter glossary coverage

Once approved, this Adam A2 English publication system becomes the A2 gold-master reference for later books.