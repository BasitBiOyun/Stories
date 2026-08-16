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

## Assessment rules

- one learning point is assessed once only
- exact/near-duplicate questions are rejected
- Tap-Reveal is Quick-only, maximum two per book
- Knowledge contains 8 authored items
- Review contains 8 authored items and uses exactly 4 MC + 4 TF before quiz-game compilation
- Final contains 10 scored items and preserves MC, TF, matching and fill-blanks variety
- Vocabulary Challenge uses the level policy only when the book has that page

## Source safeguards

A Blueprint is invalid when a chapter is missing, an EN/AR evidence phrase is not attested in its corresponding chapter, a Word Note is not in the chapter, an assessment points to another chapter’s evidence, stage capacity is insufficient, EN/AR answer logic diverges, or guide content is incomplete.

Book-specific validators add historical, religious, attribution and page-surface safeguards where the story requires them.

## Level entrypoints

- `a2BlueprintSystem.ts`
- `b1BlueprintSystem.ts`
- `b2BlueprintSystem.ts`

The machine-readable level counts and CEFR expectations live in `learningLevelPolicy.ts`.
