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

## Interaction policy

Exercise variety is intentional. A blueprint should use multiple-choice, true/false, matching and fill-blanks where they fit the learning point instead of collapsing assessment into one format.

Tap-Reveal is the exception:

- Tap-Reveal is reserved for Quick Challenge only.
- A book may contain at most two Tap-Reveal activities.
- Knowledge Check, Review and Final Challenge must never use Tap-Reveal.
- Tap-Reveal is a light recall interaction, not a substitute for scored assessment.

The blueprint contract enforces this rule when the authored blueprint is defined.

## Question-diversity policy

Assessment stages must not keep asking the same thing in different places.

- One evidence/learning point may be assessed only once in the authored assessment path.
- Quick, Knowledge, Review and Final should target different facts, relationships or ideas whenever the story provides enough material.
- Rewording the same answer target does not count as a new question.
- Exact and very near-duplicate EN/AR question wording is rejected automatically by the blueprint contract.
- Semantic repetition that is not detectable from wording alone remains a manual authoring/review responsibility.

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
- the same learning point is assessed more than once,
- EN/AR exercise structures or answer logic diverge,
- exact or very near-duplicate question wording appears in the same book,
- stage capacity is insufficient,
- Quick Challenge coverage is missing,
- Tap-Reveal appears outside Quick Challenge or appears more than twice in a book,
- Teacher Guide or Self-Study Guide content is incomplete.

Canonical story prose is never rewritten by the blueprint compiler.

## Migration

Books migrate one at a time. Existing books continue through the current Learning System until a reviewed blueprint is supplied to their compatibility entrypoint.

Adam A2 is the first migrated bilingual pilot. Its reviewed manual blueprint is wired into `applyValidatedA2ParallelLearning`; later books should follow the same authoring and validation contract.
