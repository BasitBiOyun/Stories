# Stories Content Quality Skill

## Purpose

Use this repository skill when auditing, regenerating, translating, aligning, or reviewing derived learning material for Stories books.

This skill does not authorize edits to canonical story text or narration.

## Required reading order

Before changing any derived material, read:

1. `docs/CONTENT_IMMUTABILITY.md`
2. `docs/CONTENT_QUALITY_SPEC.md`
3. `src/core/content/exercisePolicy.ts`
4. the target language's complete canonical `pages.ts`
5. the target book's existing exercises, teacher guide, and self-study guide
6. `skills/stories-content-quality/REVIEW_CHECKLIST.md`

Do not begin regeneration from summaries, excerpts, another CEFR level, or the other language version.

## Trigger conditions

Apply this skill to work involving:

- vocabulary or glossary entries
- chapter exercises
- Quick Challenges
- Final Challenges
- answer explanations and feedback
- teacher guides
- self-study guides
- English–Arabic pedagogical alignment
- content-quality audits

## Protected boundary

Never modify during derived-content work:

- canonical story prose
- chapter titles or boundaries
- story-page ids or order
- approved narration files
- audio references or synchronization data
- quotations and source references in canonical pages

If a source problem is suspected, record it separately. Do not correct it silently.

## Working method

### Phase 1 — inventory

For the selected book and language:

- read every canonical story page
- list chapters and page ids
- list current vocabulary, exercises, challenges, and guide sections
- record structural validator warnings
- identify unsupported, duplicated, ambiguous, level-inappropriate, or missing material

### Phase 2 — evidence map

Create a private working map for each proposed item:

- learning objective
- source chapter/page
- evidence from the canonical text
- CEFR demand
- item type
- correct answer or success criterion

Do not create an objective question without evidence.

### Phase 3 — draft

Draft derived material according to `docs/CONTENT_QUALITY_SPEC.md`.

Required Final Challenge counts:

- A2: 8 objective questions
- B1: 9 objective questions
- B2: 10 objective questions

Reflection prompts do not count toward these totals.

### Phase 4 — self-review

Check:

- canonical grounding
- CEFR language and reasoning
- answer validity
- distractor quality
- feedback usefulness
- chapter coverage
- exercise variety
- guide usability
- religious, historical, and cultural safeguards

### Phase 5 — validation

Run the repository quality gates. Canonical hash verification must pass without baseline changes.

Do not weaken validators or alter the canonical baseline to make derived-content work pass.

### Phase 6 — parity

For English–Arabic pairs, compare learning objectives, chapter coverage, cognitive demand, challenge counts, and guide coverage.

Do not copy a factual detail across languages unless it appears in that language's canonical text.

## Output contract

Every content-quality PR must report:

- target story, level, and language
- derived files changed
- canonical files unchanged
- previous and new warning counts
- Final Challenge question count
- exercise types used
- chapters covered
- known limitations or items requiring human review
- rubric score from `docs/CONTENT_QUALITY_SPEC.md`

## Stop conditions

Stop and request human review when:

- the canonical text appears internally inconsistent
- a religious or historical interpretation is uncertain
- more than one answer is defensible
- the interface cannot represent the intended learning task safely
- English and Arabic canonical versions contain materially different facts
- a requested improvement would require editing canonical text or narration

## Pilot rule

The first gold-standard pilot is `adam:A2`.

Complete and approve the English pilot before adapting Arabic. Do not bulk-regenerate the remaining books until the pilot structure, tone, and rubric are approved.
