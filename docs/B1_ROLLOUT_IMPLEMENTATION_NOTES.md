# B1 Rollout Implementation Notes

This file records places where older planning/reference documents, the active quality specification, and the current application runtime differ. The active repository implementation is the deciding contract unless a later product change explicitly replaces it.

## 1. Final Challenge count

An older external/source quality document stated a B1 Final Challenge count of 9.

The active repository is unambiguous:

- `docs/CONTENT_QUALITY_SPEC.md` — B1 Final Challenge = 10 objective questions
- `src/core/content/exercisePolicy.ts` — B1 `finalChallengeQuestions: 10`
- `src/components/book/FinalChallenge.tsx` — exactly 10 dedicated objective items activates the stable dedicated-set path

Therefore the B1 rollout uses:

- Knowledge Check = 8
- Review Challenge = 8
- Final Challenge = 10

## 2. B1 chapter Quick Challenge item count

The active quality specification recommends 2–4 items for a B1 Quick Challenge.

The current application runtime, however, exposes only the first story-page exercise:

- mobile: `setActiveExercise(page.exercises![0])`
- desktop: `setActiveExercise(page.exercises![0])`

Adding additional `page.exercises` items today would create derived content that the learner cannot reach. That is worse than an explicit product constraint.

For the current B1 rollout:

- each story chapter has exactly one visible, chapter-specific Quick Challenge
- the item is selected/written to carry B1 demand through cause/result, motivation, comparison, contextual meaning, evidence, or short interpretation where the chapter supports it
- incorrect feedback routes the learner back to the chapter

A future multi-item Quick Challenge UI may raise the per-chapter count to the recommended 2–4 without changing canonical story content. That UI change is outside this content rollout milestone.

## 3. PDF image geometry

`docs/A2_PRINT_DESIGN_SYSTEM.md` describes a 58 × 72.5 mm standard image box, but the validated Adam A2 Gold renderer currently implemented in `scripts/pdf-pilot/a2-sample.css` uses 64 × 80 mm.

B1 follows the **working Gold renderer geometry (64 × 80 mm)** so that B1 output matches the system that was actually rendered and visually accepted. This discrepancy should eventually be reconciled by updating the written A2 specification or deliberately changing both renderers together.

## 4. Validation status terminology

The GitHub connector can inspect and modify repository files but cannot execute the private repository's local npm commands. GitHub Actions are intentionally not used because of the project cost/quota rule.

Therefore status language must remain precise:

- **source implementation complete** — code/overlay/docs/validator are written
- **runtime verified** — only after local `validate:b1-rollout`, `typecheck`, and `build` pass
- **PDF verified** — only after the relevant PDF build is rendered to PNG and visually inspected

Do not label the B1 milestone merge-ready until the runtime gates have actually executed.
