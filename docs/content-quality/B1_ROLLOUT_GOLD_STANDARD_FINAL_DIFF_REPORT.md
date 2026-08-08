# B1 Rollout Gold Standard — Final Diff Report

Status: **SOURCE IMPLEMENTATION COMPLETE — LOCAL EXECUTION GATE PENDING**

Branch: `agent/b1-rollout-gold`

Base: `agent/a2-rollout-gold` (`9960074cde5cf18cfb91e73730a7952014934d14`)

This report closes the source-authoring portion of the B1 rollout. It does **not** claim merge readiness until the local validator, TypeScript typecheck, production build, and representative PDF renders have actually executed successfully.

## 1. Scope completed

The B1 Gold rollout now covers all registered B1 books in both application languages:

| Book | English | Arabic | Story chapters |
|---|---|---|---:|
| Adam | Gold layer active | Gold layer active | 12 |
| Abraham | Gold layer active | Gold layer active | 13 |
| Moses | manually curated Gold reference | Gold layer active | 13 |
| Mecca | Gold layer active | Gold layer active | 15 |
| Yunus Emre | Gold layer + attribution safety | Gold layer + attribution safety | 13 |

Total: **5 books / 10 language variants / 66 story chapters per language-pair set**.

## 2. Canonical-content safety

The branch diff against `agent/a2-rollout-gold` contains **no modified canonical `src/data/.../b1/.../pages.ts` file**.

Finalized B1 application data is produced through derived overlay files and the active B1 `index.ts` files.

Protected story fields are validated against the canonical arrays:

- chapter id/type/title/order
- story prose/content
- image
- audio URL
- animated words
- sync points
- timed chunks
- hotspot id/x/y coordinates

Hotspot title/description copy is treated as derived learning copy and may be corrected when the canonical chapter does not support the previous wording.

## 3. Shared B1 architecture

Created `src/data/b1GoldFactory.ts` to avoid five separate hand-maintained rollout implementations.

The factory provides:

- one visible chapter Quick Challenge, reflecting the current `StoryPage` runtime which exposes only `page.exercises[0]`
- chapter-grounded objective question bank generation
- Knowledge Check = 8
- Review Challenge = 8
- dedicated Final Challenge = 10
- deterministic multiple-choice option rotation
- chapter vocabulary normalization using only definitions already present in application data
- 10 Vocabulary in Context pairs where a dedicated page exists
- two balanced Master Glossary sections
- Teacher Guide resource sanitization

The factory does not rewrite canonical story prose and does not invent historical/religious facts merely to fill assessment counts.

## 4. Assessment contract

The active repository contract is:

- Knowledge Check: **8 objective questions**
- Review Challenge: **8 objective questions**
- Final Challenge: **10 objective questions**

This matches the active `CONTENT_QUALITY_SPEC.md`, `exercisePolicy.ts`, and the current `FinalChallenge.tsx` dedicated-set behavior.

An older external/reference document stated B1 Final = 9. That older number is not used because it conflicts with the active repository contract. The reconciliation is recorded in `docs/B1_ROLLOUT_IMPLEMENTATION_NOTES.md`.

## 5. Quick Challenge runtime reconciliation

The active quality specification recommends 2–4 B1 Quick Challenge items, but the current `StoryPage.tsx` exposes only the first item on both mobile and desktop.

The rollout therefore uses **one strong, visible, chapter-specific Quick Challenge** rather than writing hidden exercises that learners cannot access.

Moving B1 to 2–4 visible chapter items requires a separate multi-item StoryPage UI change and is not silently simulated in content data.

## 6. Per-book content work

### Adam B1

- EN+AR routed through B1 Gold layer.
- Existing B1 material retained where chapter-grounded.
- Unsupported hotspot symbolism removed from the effective overlay:
  - Chapter 1 “Light” symbolism replaced with chapter-supported knowledge/responsibility copy.
  - Chapter 2 hotspot wording brought closer to explicit knowledge/intellect wording.
  - Chapter 5 “test” hotspot wording replaced by the explicit warning in the chapter.
  - Chapter 7 “NOT AS GUILTY BEINGS” theological formulation replaced with the chapter’s explicit earth/responsibility statement.
- Chapter 1 Quick Challenge no longer depends on later Iblis/fire material.
- Chapter 5 Quick Challenge no longer asserts an unstated “primary purpose” of the tree; it asks for the explicit restriction in the chapter.

### Abraham B1

- EN+AR routed through B1 Gold layer.
- Existing chapter questions are generally already evidence-based B1 material and are reused as the chapter-grounded source bank.
- Hotspot audit found the existing copy sufficiently tied to the chapter events and arguments; no change was made merely to manufacture a diff.

### Moses B1

- English remains the manually curated B1 reference pilot.
- 13 evidence/cause/result/inference-focused chapter challenges.
- 8/8/10 assessment set.
- reviewed chapter Word Notes and Vocabulary in Context.
- deterministic answer-position distribution.
- Arabic now receives the common B1 rollout contract without altering its canonical story fields.

### Mecca B1

- EN+AR routed through B1 Gold layer.
- Chapter-grounded social/history material retained.
- Sensitive hotspot copy deliberately avoids repeating graphic details:
  - Bilal hotspot focuses on steadfast faith under severe pressure.
  - boycott hotspot focuses on hunger and hardship rather than reproducing graphic suffering details.
- Canonical story prose remains untouched.

### Yunus Emre B1

- EN+AR routed through B1 Gold layer.
- All newly authored exercise questions/explanations/feedback receive explicit chapter/Yunus Emre attribution framing.
- All effective hotspot descriptions receive historical/literary-context attribution framing.
- This prevents Sûfî/metaphorical descriptions from being silently converted by the learning layer into unqualified doctrinal statements.
- Canonical poetry/story prose is untouched.

## 7. Teacher Guide and Self-Study Guide

The rollout keeps existing chapter-specific Teacher and Self-Study material where it is already useful.

Teacher Guide finalization removes unsupported `extraResources` claims such as worksheets or handouts that are not actually supplied in the repository.

Validation requires:

- one Teacher Guide section per story chapter
- at least three objectives
- lesson plan
- discussion prompt(s)
- one Self-Study section per story chapter
- study routine / lesson plan field
- interactive guidance

## 8. Vocabulary and glossary

B1 target:

- 4–5 chapter Word Notes items
- safety floor of 3 only when no defensible fourth application definition exists
- no invented definition solely to satisfy a count
- 10 Vocabulary in Context pairs where the book includes that page
- two balanced Master Glossary sections with at least 18 reviewed entries each

Definitions are drawn from effective application vocabulary data and existing fallback vocabulary, not authored opportunistically by the PDF layer.

## 9. Religious/historical safety validator

Added `scripts/validation/validateB1Safety.ts` and included it in `npm run validate:b1-rollout`.

It locks the targeted safety decisions:

- Adam unsupported “Light” and guilt formulations do not return.
- Mecca Bilal/boycott hotspot copy does not drift back toward unnecessary graphic detail.
- Yunus Emre EN+AR hotspots and assessment items retain attribution framing.

## 10. B1 PDF system

B1 does not introduce a new visual language. It inherits the validated A2 Gold print system.

Created:

- `docs/B1_PRINT_DESIGN_SYSTEM.md`
- `scripts/pdf-pilot/b1-sample.css`
- `scripts/pdf-pilot/buildB1ChapterSample.ts`
- npm script `pdf:b1-sample`

The generic renderer supports:

- Adam
- Abraham
- Moses
- Mecca
- Yunus Emre
- English / Arabic / both
- all chapters or selected chapter IDs

It uses pinned Vivliostyle 11.1.0, the accepted A4 geometry, the practical Gold 64 × 80 mm 4:5 image box, readable body sizes, normal-flow Word Notes and Quick Challenge, and PDF→PNG QA output.

Long B1 chapters are allowed to continue to a second A4 page. Canonical story text is never reduced below the approved readable floor merely to keep a chapter on one page.

A representative Moses B1 short/medium/long fit sample was already visually inspected before full rollout approval and did not require a new layout system.

## 11. Current diff

Latest inspected comparison against `agent/a2-rollout-gold` before this report:

- status: ahead
- commits ahead: **38**
- commits behind: **0**
- changed files: **23**
- canonical B1 `pages.ts` files modified: **0**

Changed-file categories:

- B1 Gold/rollout layers
- five B1 `index.ts` wiring changes
- shared B1 factory
- rollout/safety validators
- B1 PDF builder + CSS
- B1 standard/manifest/implementation notes
- Moses pilot report
- package scripts

## 12. Required local execution gate

Run from a real checkout of `agent/b1-rollout-gold`:

```bash
npm ci
npm run validate:b1-rollout
npm run typecheck
npm run build
```

Recommended representative PDF QA after the build gate:

```bash
B1_BOOK=adam B1_LANGUAGE=both B1_CHAPTER_IDS=1,5,7,12 npm run pdf:b1-sample
B1_BOOK=abraham B1_LANGUAGE=both B1_CHAPTER_IDS=1,8,13 npm run pdf:b1-sample
B1_BOOK=moses B1_LANGUAGE=both B1_CHAPTER_IDS=1,5,13 npm run pdf:b1-sample
B1_BOOK=mecca B1_LANGUAGE=both B1_CHAPTER_IDS=1,9,13,14,15 npm run pdf:b1-sample
B1_BOOK=yunus B1_LANGUAGE=both B1_CHAPTER_IDS=1,8,10,13 npm run pdf:b1-sample
```

Inspect rendered PNG pages for:

- clipping/overlap
- broken RTL shaping
- broken 4:5 image ratio
- incorrect `[POEM]` marker rendering
- answer leakage
- awkward near-empty continuation pages
- Word Notes before unfinished prose
- Quick Challenge split/overflow

## 13. GitHub Actions and merge state

GitHub Actions were intentionally **not** used for this rollout.

No PR to `main` has been opened by this rollout work and neither `main` nor `production` has been modified.

`main` is still older than the A2 Gold rollout. Therefore B1 must not be merged directly into stale `main` as an isolated patch. The safe milestone sequence remains:

1. execute the B1 local gate on this branch
2. integrate/confirm A2 Gold on `main`
3. merge the validated B1 milestone on top of that updated `main`
4. only then begin the B2 rollout from the updated baseline

## 14. Source milestone conclusion

The **B1 source rollout implementation is complete** across all registered EN+AR books.

The remaining blocker is execution evidence, not additional content authoring: local B1 validation, TypeScript typecheck, production build, and representative final PDF render QA must pass before the branch is labelled merge-ready.
