# Moses B1 English — Gold Pilot Report

Branch: `agent/b1-rollout-gold`

## Scope

This pilot establishes the B1 rollout reference using the active Moses B1 English application data.

Canonical source remains:

`src/data/moses/b1/en/pages.ts`

The pilot does not rewrite canonical story prose.

## Protected fields

For story chapters 1–13, rollout work preserves:

- page id/type/title and chapter order
- story content
- image
- audioUrl
- hotspot ids and coordinates
- animatedWords
- syncPoints
- timedChunks

The Gold learning layer is applied through `gold.ts` and `goldFinal.ts`.

## Learning-content changes

### Chapter Quick Challenges

All 13 story chapters now use one chapter-specific B1 multiple-choice Quick Challenge.

The questions emphasize:

- cause and effect
- evidence selection
- character motivation
- contextual meaning
- contrast
- consequences

Incorrect feedback directs the learner back to a relevant sentence or event instead of only stating the correct answer.

### Vocabulary / Word Notes

Each chapter now has 4–5 reviewed words or phrases selected from the active story chapter. Definitions are written for B1 learners and avoid unnecessary dictionary-style complexity.

### Knowledge Check

8 objective questions covering the story broadly rather than only the final chapters.

### Vocabulary in Context

10 reviewed word/meaning pairs.

### Master Glossary

The two glossary sections are rebuilt from the reviewed chapter vocabulary and kept reasonably balanced.

### Review Challenge

8 objective questions emphasizing relationships across chapters, contrasts, causes, consequences, and whole-story understanding.

### Final Challenge

10 dedicated objective questions covering the whole story. The application already prefers a dedicated ten-question Final Challenge when one is present, so this set is used instead of the legacy random pool.

### Answer-position hygiene

The first pilot draft placed every correct answer in option position 1. That pattern was rejected. `goldFinal.ts` now deterministically rotates answer options while preserving the correct answer, and the B1 validator requires every scored question set to use all three positions.

### Teacher Guide

The existing Moses B1 English Teacher Guide was already chapter-specific and pedagogically stronger than the legacy learning layer. The pilot retains its pedagogy but removes `extraResources` worksheet claims because those worksheets are not supplied in the repository.

### Self-Study Guide

The existing B1 Self-Study material was audited and retained. It already includes:

- chapter-by-chapter focus
- read/listen/reread workflow
- vocabulary in context
- cause/result reading
- short summaries
- speaking/writing practice
- reflection
- final review

## UI compatibility checks

Static repository inspection confirms:

- `ExercisePage.tsx` renders all exercises on `type: 'exercises'` pages through the existing exercise flow.
- `FinalChallenge.tsx` prefers exactly 10 dedicated MC/TF questions from the final-challenge page.
- the global B1 exercise policy targets 8 Review Challenge questions and 10 Final Challenge questions.

No application component changes were required for this pilot.

## Automated contract

`npm run validate:b1-rollout` now checks:

- canonical story-field preservation
- hotspot id/x/y preservation
- one Quick Challenge per chapter
- objective question structure
- valid and non-duplicated options
- evidence-based explanations and retry feedback
- correct-answer position balance
- 4–5 Word Notes per chapter
- 8 Knowledge / 8 Review / 10 Final counts
- 10 Vocabulary in Context pairs
- glossary size/balance and duplicate protection
- Teacher Guide / Self-Study chapter parity
- B1 metadata
- absence of unsupported Teacher Guide resource claims

## Release status

Moses B1 English is the pilot/reference implementation for the B1 rollout. Arabic is intentionally unchanged until the English pilot is accepted as the level reference.

Before milestone merge, run the repository gates:

```bash
npm run validate:b1-rollout
npm run typecheck
npm run build
```

GitHub Actions are not required for this rollout gate.
