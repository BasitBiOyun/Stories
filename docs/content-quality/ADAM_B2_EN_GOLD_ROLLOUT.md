# Adam B2 English — Gold Rollout

Branch: `agent/b2-rollout-gold`

Status: **source implementation complete; runtime execution gate pending**

Canonical source: `src/data/adam/b2/en/pages.ts`

No canonical story prose, chapter identity/order, image/audio field, animated words, synchronization data, or hotspot geometry is changed by this rollout.

## 1. Baseline audit

The active Adam B2 English book contains:

- 17 canonical story chapters
- page 18: a 6-item quiz used as the legacy analytical review
- page 19: a mixed Final Review & Reflection activity set
- pages 20–21: two 12-entry Master Glossary sections
- page 22: a 10-question Final Challenge with mostly recall-oriented prompts and very thin `Correct! / Try again.` feedback
- one chapter Quick Challenge per story page, mostly direct recall
- a Teacher Guide with only three broad thematic sections rather than 17 chapter-aligned sections

The source already contains useful B2 concepts, but the derived-learning layer did not consistently satisfy the repository Gold contract.

## 2. Quick Challenges

All 17 visible chapter Quick Challenges are now explicit B2 evidence/reasoning items.

Main operations by chapter include:

1. how the introduction frames Satan's relationship to humanity
2. common origin, human diversity, and rejection of colour-based superiority
3. knowledge, language, intelligence, and civilization
4. the complementary roles of worldly knowledge and revelation
5. obedience/respect versus material-origin arrogance
6. Satan's announced strategy of temptation
7. how deception reframes the forbidden tree
8. distinction between Qur'anic detail and later scholarly interpretation
9. repentance as recognition of fault and return to Allah
10. descent as honourable earthly vicegerency rather than simple humiliation
11. struggle together with constructive earthly responsibility
12. Qur'anic emphasis on the wisdom of the Habil/Qabil story rather than unnecessary detail
13. self-control and non-aggression in a human nature capable of good and evil
14. the raven episode as burial instruction and preservation of human dignity
15. jealousy → harmful choice → consequence → shame/regret
16. the common prophetic call despite different names and miracles
17. Satan's limited authority and the role of human weakness in making temptation appear strong

Every Gold Quick Challenge includes:

- a clear B2 task
- three plausible answer options for MC items
- a text-grounded explanation
- an incorrect-answer route directing the learner back to the relevant evidence
- deterministic option rotation to reduce answer-position bias

## 3. Source-framing safeguard

Chapter 8 explicitly states that the Qur'an does not identify the type of forbidden tree and separately reports an interpretation attributed to Islamic scholars.

The new Quick Challenge tests this distinction instead of converting the later interpretation into an unqualified Qur'anic fact.

This is part of the B2 source-attribution rule: derived material may not become more certain than the canonical text.

## 4. Assessment contract

### Knowledge Check

Before: 6 true/false questions.

After: **8 objective questions** sampled across the 17 chapter-level Gold evidence questions.

### Review Challenge

Before: mixed activity page not aligned to the exact objective-question contract.

After: **8 objective questions** emphasizing relationships, evidence, interpretation, and chapter connections.

### Final Challenge

Before: 10 questions existed, but most feedback was only `Correct! / Try again.` and the correct option position was heavily repetitive.

After: **10 objective Gold questions** selected across the whole story, with evidence explanations, useful retry feedback, and deterministic answer-position rotation.

## 5. Vocabulary and glossary

Chapter Word Notes preserve reviewed existing definitions and may supplement only from vocabulary definitions already present in the same canonical book.

No new dictionary definition is invented simply to meet a quota.

The two Master Glossary pages are regenerated from effective chapter Word Notes and target **at least 18 reviewed entries each**.

Adam B2 has no dedicated vocabulary-match page in its canonical page structure, so the rollout does not invent a new page or change the page sequence.

## 6. Teacher Guide

Before: 3 broad thematic guide sections for a 17-chapter canonical story.

After: **17 chapter-aligned Teacher Guide sections** generated from each canonical chapter and its actual Gold Quick Challenge.

Each section contains:

- realistic 55-minute timing
- four measurable B2 objectives
- evidence-first pedagogy
- grammar/evidence language
- pronunciation/Word Note focus
- usable lesson sequence
- discussion prompts
- support and fast-finisher differentiation
- formative assessment/exit evidence
- explicit Quick Challenge reread/retry guidance

Unsupported resource claims are not introduced.

## 7. Self-Study Guide

The Gold Self-Study layer now contains **17 chapter-aligned sections**.

The study routine is:

1. preview title/image/Word Notes
2. read for gist
3. reread for evidence and vocabulary
4. identify cause, contrast, inference, or turning point
5. complete Quick Challenge
6. after a weak/wrong response, return to the relevant paragraph and retry
7. write a short claim → evidence → explanation response
8. add reflection only after separating it from textual claims

Whole-book structured guidance explicitly describes:

- 17 canonical chapters
- Knowledge Check = 8
- Review Challenge = 8
- Final Challenge = 10

## 8. Shared B2 rollout infrastructure

Adam is the first non-Moses book to use the new shared infrastructure:

- `src/data/b2GoldFactory.ts`
- `src/data/b2GoldGuides.ts`

The factory standardizes:

- canonical-safe overlays
- one visible Quick Challenge per current StoryPage UI
- 8/8/10 assessment construction
- deterministic MC answer rotation
- Word Note normalization using reviewed definitions only
- two >=18-entry glossaries

The guide builder creates chapter-aligned Teacher and Self-Study sections directly from each effective canonical story page, preventing the chapter-remapping problems identified in the Moses B2 pilot.

## 9. Validator

Added:

`scripts/validation/validateAdamB2Gold.ts`

Command:

```bash
npm run validate:b2-adam
```

The validator checks:

- 17 canonical story chapters preserved
- page id/type sequence preserved
- protected canonical story fields unchanged
- hotspot id/x/y preserved
- one visible Quick Challenge per story chapter
- objective answer structure, explanation, and retry feedback
- Word Note uniqueness
- Knowledge = 8
- Review = 8
- Final = 10
- Glossary >=18 + >=18
- Teacher Guide = 17 with exact canonical labels
- Self-Study Guide = 17 with exact canonical labels
- no unsupported Teacher Guide `extraResources`
- whole-book guide identifies 17 canonical chapters
- Teacher Guide extended plan contains 17 chapter steps
- Chapter 8 source-framing safeguard remains present

## 10. Runtime status

The source implementation is complete, but the connector environment has not executed:

```bash
npm run validate:b2-adam
npm run typecheck
npm run build
```

Therefore this rollout must not yet be described as runtime-verified or merge-ready.

GitHub Actions are not required for this source rollout and must not be triggered without explicit approval.
