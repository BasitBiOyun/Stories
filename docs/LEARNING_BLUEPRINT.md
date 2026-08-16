# Learning Blueprint Architecture

## Purpose

The Learning Blueprint is the manual pedagogical authoring layer between canonical story prose and the runtime Learning System.

The engine must not decide what a chapter teaches or invent assessment wording when a blueprint is active.

`story prose -> manual blueprint -> validated compiler -> runtime pages/guides`

## Human-owned content

For every chapter the blueprint author selects and writes:

- learning objectives,
- assessable claims and exact EN/AR evidence,
- Word Notes / glossary targets,
- assessment questions, answers, distractors and explanations,
- stage eligibility for each assessment item,
- Teacher Guide content,
- Self-Study Guide content.

Every assessment item points to one evidence ID from the same chapter.

## Engine-owned behavior

The shared engine handles:

- A2/B1/B2 stage counts and type preferences,
- Quick Challenge, Knowledge Check, Review and Final placement,
- no reuse of the same learning point across assessment stages,
- Vocabulary Challenge and glossary placement from manually selected vocabulary,
- EN/AR structural parity,
- runtime IDs and existing `PageData` / `Exercise` contracts,
- migration fallback to the legacy Learning System when a book has no blueprint.

The engine may choose among manually authored items, but it may not create a new claim, question, answer, distractor or guide idea.

## Source safeguards

A blueprint is rejected when:

- its chapter list does not match the book,
- an evidence excerpt cannot be found in the corresponding EN/AR chapter,
- a vocabulary target does not occur in the corresponding chapter,
- an assessment item points to evidence from another chapter,
- EN/AR exercise structures or answer logic diverge,
- stage capacity is insufficient,
- Quick Challenge coverage is missing,
- Teacher Guide or Self-Study Guide content is incomplete.

Canonical story prose is never rewritten by the blueprint compiler.

## Migration

Books migrate one at a time. Existing books continue through the current Learning System until a reviewed blueprint is supplied to their compatibility entrypoint.

The first real migration target is Adam A2. Its blueprint should be authored chapter by chapter and only then wired into `applyValidatedA2ParallelLearning`.
