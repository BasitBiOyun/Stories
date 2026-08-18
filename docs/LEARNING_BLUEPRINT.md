# Learning Blueprint Architecture

The Learning Blueprint is the reviewed pedagogical layer between protected story prose and runtime learning material.

`raw story prose -> source locks -> manual blueprint -> shared compiler -> runtime pages/guides`

All current A2, B1 and B2 books use this architecture. There is no migrated-book Gold/fallback question bank in the active runtime path.

## Human-owned material

For each chapter the Blueprint contains:

- learning objectives
- assessable claims and exact EN/AR evidence
- Word Note/glossary targets
- authored questions, answers, distractors, explanations and feedback
- stage eligibility
- Teacher Guide content
- Self-Study Guide content

Every assessment item points to one same-chapter evidence/learning-point id.

## Engine-owned behavior

The shared compiler validates evidence and vocabulary against story prose, enforces EN/AR exercise parity, selects one Quick per chapter, fills the configured Knowledge/Review/Final counts, builds the dedicated vocabulary surface where present, derives glossaries from final Word Notes, and compiles chapter guides.

It must not invent a new factual claim, learning point, question, answer or guide idea.

## Quality Contract v2

The existing Blueprint architecture is not replaced. It is extended by the Ministry/Gold quality layer defined in:

`docs/QUALITY_ALIGNMENT_STANDARD_V2.md`

and implemented in:

`src/data/learningQualityContract.ts`

A legacy blueprint remains runtime-compatible while it omits `qualityContractVersion`.

A book opts into the strict gate with:

```ts
qualityContractVersion: '2.0'
```

Once opted in, every chapter must provide a Learning Map with universal learning outcomes, TYMM and CEFR alignment, success criteria, language targets, linked evidence, assessment-quality metadata, authored diagnostic feedback and structured Teacher/Self-Study Guide fields. Incomplete v2 books are rejected by `defineLearningBlueprint`.

This staged migration is deliberate: existing books continue to work, but no book can be called Gold/Ministry-ready until it has migrated to v2 and completed human review.

## Assessment rules

- one learning point is assessed once only
- exact/near-duplicate questions are rejected
- Tap-Reveal is Quick-only, maximum two per book
- Knowledge contains 8 authored items
- Review contains 8 authored items and uses exactly 4 MC + 4 TF before quiz-game compilation
- Final contains 10 scored items and preserves MC, TF, matching and fill-blanks variety
- Vocabulary Challenge uses the level policy only when the book has that page

For v2 books, additional integrity gates reject duplicate MC options, duplicate matching left/right values, invalid MC answer indices, missing `[blank]`, EN/AR exercise-type divergence, missing learning-outcome links and generic/unapproved feedback.

## Source safeguards

A Blueprint is invalid when a chapter is missing, an EN/AR evidence phrase is not attested in its corresponding chapter, a Word Note is not in the chapter, an assessment points to another chapter’s evidence, stage capacity is insufficient, EN/AR answer logic diverges, or guide content is incomplete.

Book-specific validators add historical, religious, attribution and page-surface safeguards where the story requires them.

## Level entrypoints

- `a2BlueprintSystem.ts`
- `b1BlueprintSystem.ts`
- `b2BlueprintSystem.ts`

The machine-readable level counts and CEFR expectations live in `learningLevelPolicy.ts`.

The durable alignment and Ministry/Gold acceptance rules live in `learningQualityContract.ts` and `docs/QUALITY_ALIGNMENT_STANDARD_V2.md`.
