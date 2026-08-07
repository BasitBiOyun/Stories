# Stories Content Quality Skill

## Purpose

Use this repository skill when auditing, regenerating, translating, aligning, or reviewing derived learning material for Stories books.

This skill does not authorize edits to canonical story text or narration.

## Required reading order

Before changing any derived material, read:

1. `docs/CONTENT_IMMUTABILITY.md`
2. `docs/CONTENT_QUALITY_SPEC.md`
3. `docs/CONTENT_QUALITY_TEACHING_FIRST_ADDENDUM.md`
4. `src/core/content/exercisePolicy.ts`
5. the target language's complete canonical `pages.ts`
6. the target book's existing exercises, teacher guide, and self-study guide
7. `skills/stories-content-quality/REVIEW_CHECKLIST.md`

The teaching-first addendum and current `exercisePolicy.ts` take precedence over older challenge-count wording in foundation documents.

Do not begin regeneration from summaries, excerpts, another CEFR level, or the other language version.

## Trigger conditions

Apply this skill to work involving:

- vocabulary or glossary entries
- chapter exercises
- Quick Challenges
- Knowledge Checks and Review Challenges
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

## Question-purpose model

Questions are not only assessment instruments. Their purpose depends on the reading stage.

### While reading

- A2/B1 Quick Challenges are primarily teaching and reinforcement.
- They should help learners retrieve the information on the current page, recognise text structure, recycle vocabulary, or rebuild sequence/cause/result.
- A wrong answer should normally lead to evidence finding, rereading, and a second attempt.

### Post reading

- Knowledge Checks and Review Challenges organise and consolidate information across the text.
- Review Challenge count is fixed at **8 objective questions for A2, B1, and B2**.

### Final Challenge

- Final Challenge count is fixed at **10 objective questions for A2, B1, and B2**.
- Final questions should revisit the whole text and emphasise retrieval/remembering.
- B2 may combine reinforcement with stronger evidence, inference, evaluation, and genuine challenge.

## Working method

### Phase 1 — inventory

For the selected book and language:

- read every canonical story page
- list chapters and page ids
- list current vocabulary, exercises, challenges, and guide sections
- record structural validator warnings
- identify unsupported, duplicated, ambiguous, level-inappropriate, mismatched, or missing material

### Phase 2 — evidence map

Create a private working map for each proposed item:

- learning objective
- reading stage: before / while / after / final
- source chapter/page
- evidence from the canonical text
- CEFR demand
- item type
- correct answer or success criterion

Do not create an objective question without evidence.

### Phase 3 — draft

Draft derived material according to the content-quality specification, teaching-first addendum, and current exercise policy.

Required fixed counts:

- Review Challenge: **8 objective questions at every level**
- Final Challenge: **10 objective questions at every level**

Reflection prompts do not count toward these totals.

For informative narrative/essay-like source texts, prefer tasks that fit the discourse:

- stated-information retrieval
- sequence
- comparison
- cause/result
- vocabulary in context
- main idea / supporting detail
- short summary
- evidence-supported reflection

Avoid game-show difficulty, outside facts, and trick wording.

### Phase 4 — self-review

Check:

- canonical grounding
- reading-stage purpose
- CEFR language and reasoning
- informative-text/discourse alignment
- answer validity
- distractor quality
- feedback usefulness and rereading support
- chapter coverage
- exercise variety
- guide usability
- religious, historical, and cultural safeguards

### Phase 5 — validation

Run the repository quality gates. Canonical hash verification must pass without baseline changes.

For a gold-standard pilot, add or run a contract validator that proves protected story fields remain identical while checking exercise/guide counts.

Do not weaken validators or alter the canonical baseline to make derived-content work pass.

### Phase 6 — parity

For English–Arabic pairs, compare learning objectives, chapter coverage, cognitive demand, Review/Final Challenge counts, and guide coverage.

Do not copy a factual detail across languages unless it appears in that language's canonical text.

## Output contract

Every content-quality PR must report:

- target story, level, and language
- derived files changed
- canonical files unchanged
- previous and new warning counts where available
- Review Challenge question count
- Final Challenge question count
- exercise types used
- chapters covered
- teacher-guide and self-study chapter coverage
- known limitations or source-text items requiring human review
- rubric score from `docs/CONTENT_QUALITY_SPEC.md`

## Stop conditions

Stop and request human review when:

- the canonical text appears internally inconsistent
- a religious or historical interpretation is uncertain
- more than one scored answer is defensible
- the interface cannot represent the intended learning task safely
- English and Arabic canonical versions contain materially different facts
- a requested improvement would require editing canonical text or narration

## Pilot rule

The first gold-standard pilot is `adam:A2`.

Complete and approve the English pilot before adapting Arabic. Do not bulk-regenerate the remaining books until the pilot structure, tone, question-purpose model, and rubric are approved.
