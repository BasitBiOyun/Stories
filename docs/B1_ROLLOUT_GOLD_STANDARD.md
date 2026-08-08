# B1 Rollout Gold Standard

Status: **full B1 rollout implementation on `agent/b1-rollout-gold`** for Adam, Abraham, Moses, Mecca, and Yunus Emre in English and Arabic.

## 1. Canonical-content lock

The active `src/data/.../pages.ts` file remains the canonical source.

For every B1 story chapter, rollout work must preserve:

- story `content`
- chapter `id`, `type`, `title`, and boundaries/order
- `image`
- `audioUrl`
- hotspot `id`, `x`, and `y`
- `animatedWords`
- `syncPoints`
- `timedChunks`

DOCX/source files may be used for reference only. They do not override active application data.

## 2. What B1 rollout may improve

Derived learning content may be revised only when supported by the canonical chapter:

- chapter Word Notes / vocabulary
- hotspot title and description copy
- chapter Quick Challenge
- Knowledge Check
- Vocabulary in Context
- Master Glossary
- Review Challenge
- Final Challenge
- Teacher Guide
- Self-Study Guide
- learner/teacher metadata

No new religious or historical claim may be introduced merely to make an activity more interesting.

## 3. B1 cognitive level

B1 must not be A2 with harder words.

A B1 learner should regularly work with:

- cause and effect
- sequencing across several events
- character motivation supported by evidence
- contrast and comparison
- meaning from context
- simple inference
- short summaries and explanations
- identifying the sentence or event that supports an answer

Literal recall remains useful for reinforcement, but the book as a whole must also ask learners to connect reasons, results, choices, and consequences.

## 4. Binding B1 learning-material contract

Every finalized B1 language variant uses:

- one chapter-specific Quick Challenge per story chapter
- evidence-oriented wrong-answer feedback
- Word Notes target: **4–5 useful items** per chapter
- safety floor: **3 items** only when the canonical/application vocabulary does not provide a defensible fourth definition; the rollout must not invent a definition simply to meet a number
- Knowledge Check: **8 objective questions**
- Vocabulary in Context: **10 reviewed pairs** when the book has a dedicated vocabulary-match page
- Master Glossary: **two balanced sections with at least 18 reviewed entries each**
- Review Challenge: **8 objective questions**
- Final Challenge: **10 dedicated objective questions** covering the whole story
- Teacher Guide: one section per story chapter
- Self-Study Guide: one section per story chapter

The 8/8/10 assessment contract is shared across B1 books for product consistency. The source questions remain chapter-grounded; the rollout does not invent unsupported facts to fill assessment slots.

## 5. Shared rollout factory

`src/data/b1GoldFactory.ts` applies the common contract to books whose existing B1 chapter material is already pedagogically usable.

The factory:

- preserves protected story fields
- selects one useful chapter Quick Challenge
- keeps or safely expands chapter vocabulary only from definitions already present in the application data
- converts a chapter-grounded non-objective activity to an objective review item only when a supported statement/explanation already exists
- builds stable 8-question Knowledge and Review sets
- builds a dedicated 10-question Final Challenge
- deterministically rotates multiple-choice options so correct answers do not remain in one position
- builds 10 vocabulary pairs where a dedicated vocabulary page exists
- rebuilds two balanced glossary source sets
- removes unsupported Teacher Guide resource claims

Moses B1 English remains the manually curated reference pilot and is not replaced by the generic factory. Moses Arabic and the other rollout variants inherit the common contract from the factory.

## 6. Book configurations

| Book | Story chapters | Knowledge | Vocabulary | Review | Glossary | Final |
|---|---:|---:|---:|---:|---:|---:|
| Adam B1 | 1–12 | 13 | — | 14 | 15–16 | 17 |
| Abraham B1 | 1–13 | 14 | — | 15 | 16–17 | 18 |
| Moses B1 | 1–13 | 14 | 15 | 18 | 16–17 | 19 |
| Mecca B1 | 1–15 | 16 | — | 17 | 18–19 | 20 |
| Yunus Emre B1 | 1–13 | 14 | 15 | 18 | 16–17 | 19 |

English and Arabic use the same page structure within each book.

## 7. Hotspot standard

Every hotspot must remain:

1. chapter-grounded
2. useful for the current reading
3. appropriate for B1 language
4. safe in religious/historical framing

Coordinates are protected. Copy is not changed simply to create a diff.

## 8. Religious and historical attribution safety

Derived material must not turn a literary, historical, or Sûfî interpretation into an unqualified doctrinal statement.

For Yunus Emre B1 in particular, derived questions, explanations, and feedback use attribution framing such as:

- “According to the chapter…”
- “In Yunus Emre’s context…”
- the Arabic equivalent

Canonical story prose remains read-only even when it contains metaphorical or historical formulations that require attribution in newly authored learning material.

## 9. Teacher Guide standard

Teacher Guide sections should be professional, chapter-specific, and immediately usable. They may include measurable objectives, pedagogy, language focus, realistic lesson sequences, discussion prompts, differentiation, assessment ideas, and use of existing interactive features.

They must not claim that a worksheet, handout, link, or external resource exists unless that resource is actually supplied. The rollout therefore removes unsupported `extraResources` claims from finalized B1 Teacher Guides while preserving the rest of the chapter-specific pedagogy.

## 10. Self-Study Guide standard

Self-Study material remains learner-facing. It should give concrete actions: preview, read/listen, notice vocabulary, return to evidence, summarize, speak/write, and reflect.

Existing B1 Self-Study Guides are retained when they already satisfy this role. The rollout validator requires one section per story chapter and usable lesson-plan/interactive guidance fields.

## 11. PDF inheritance

B1 inherits the validated Adam A2 print system rather than creating a second visual language:

- A4 portrait
- 14 mm left/right/top safe margins; 15 mm bottom
- Poppins reading body in the approved readable range
- exact 4:5 chapter image
- one logical story flow, never newspaper columns
- Word Notes after story prose
- Quick Challenge after Word Notes
- no correct answers exposed on student pages
- no story-font reduction below 12 pt simply to force one A4 page
- intentional two-page chapter fallback when a longer B1 chapter does not fit

B1 may therefore use more two-page chapters than A2. Pagination is allowed to grow; canonical prose is never compressed to preserve a one-page count.

## 12. Validation

Run locally:

```bash
npm run validate:b1-rollout
npm run typecheck
npm run build
```

The B1 rollout validator covers all **10 language variants** and must fail when:

- protected story fields or hotspot coordinates change
- page ids/types drift
- chapter Quick Challenge count changes
- assessment counts drift from 8/8/10
- a scored item loses its question, explanation, feedback, or valid answer
- vocabulary becomes empty/thin or duplicate-heavy
- glossary sections fall below the reviewed minimum
- chapter-guide parity breaks
- unsupported Teacher Guide resources return

GitHub Actions are not required for rollout validation; local validation is the preferred path.

## 13. Implementation map

- shared rules: `src/data/b1GoldFactory.ts`
- Adam: `src/data/adam/b1/gold.ts`
- Abraham: `src/data/abraham/b1/gold.ts`
- Moses English pilot: `src/data/moses/b1/gold.ts` + `goldFinal.ts`
- Moses full EN/AR bridge: `src/data/moses/b1/rollout.ts`
- Mecca: `src/data/mecca/b1/gold.ts`
- Yunus Emre: `src/data/yunusEmre/b1/gold.ts`
- validator: `scripts/validation/validateB1Rollout.ts`

The active `index.ts` for each B1 book points application `BookData` at the finalized rollout layer while leaving canonical page files untouched.
