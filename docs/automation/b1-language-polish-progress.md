# B1 Language Polish Progress

currentBook: Mecca/Bilal B1
bookPath: `src/data/mecca/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 15
nextChapter: 4
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
nextTask: COMPLETE_MECCA_BILAL_B1_CHAPTER_4_LANGUAGE_FOCUS

## Completed books
### Adam B1
- Chapters 1–12 English Language Focus: COMPLETE
- Chapters 1–12 Arabic Language Focus: COMPLETE
- Cumulative English Language Review: COMPLETE
- Cumulative Arabic Language Review: COMPLETE
- Final exercise-system audit: COMPLETE
- Final Challenge role separation: COMPLETE
- Active polished exercise-system wiring: COMPLETE
- Story prose unchanged.

### Abraham B1
- Chapters 1–13 English Language Focus: COMPLETE
- Chapters 1–13 Arabic Language Focus: COMPLETE
- Cumulative English Language Review: COMPLETE
- Cumulative Arabic Language Review: COMPLETE
- Final exercise-system audit: COMPLETE
- Final Challenge role separation: COMPLETE
- Active polished exercise-system wiring: COMPLETE
- Story prose unchanged.

### Moses B1
- Chapters 1–13 English Language Focus: COMPLETE
- Chapters 1–13 Arabic Language Focus: COMPLETE
- Cumulative English Language Review: COMPLETE
- Cumulative Arabic Language Review: COMPLETE
- Final exercise-system audit: COMPLETE
- Final Challenge role separation: COMPLETE
- Active polished exercise-system wiring: COMPLETE
- Story prose unchanged.

## Current book — Mecca/Bilal B1
### Chapters 1–3
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE via `page.languageFocusExercises`.

### Chapter 1 pedagogical targets
- English: historical framing, naming a period, cause/result/contrast, passive information focus, and source attribution.
- Arabic: `في القرن السابع`, `كان`, `كان يُسمّى`, `بسبب`, `لذلك`, `بينما`, active/passive information focus, and `يقول... إنّ...` source attribution.
- Chapter 1 Quick Challenge already tests the cause of social inequality; Language Focus does not retest that answer.

### Chapter 2 pedagogical targets
- English: direct characterization, explicit contrast, historical transition, explanatory ordering, addition/cohesion, and embedded definition.
- Arabic: `المراد بـ... هو`, `في الواقع`, `انتهى... عندما...`, `لفهم...`, `يجب أن... أولاً`, `كما/أيضاً/فضلًا عن ذلك`, and relative definition with `الذي`.
- Chapter 2 Quick Challenge already tests why Mecca is central to the explanation; Language Focus trains the explanatory language instead.

### Chapter 3 English pedagogical targets
- Place description through `a valley where no crops grow`.
- Starting-state framing through `City life began... with...` and `There was no population...`.
- Earlier-past relationship through `when... had not been discovered yet`.
- Historical sequencing through `after`, `later`, and `when`.
- Purpose through `came ... to reconstruct...`.
- Result/development through `so ... became...` and `helped the city grow...`.
- Productive transfer: a six-sentence non-story paragraph explaining how a different place changed over time.
- Chapter 3 Quick Challenge already tests the factual Zamzam → settlement → Ka’ba → pilgrimage → growth chain; Language Focus trains the language used to sequence and explain change rather than retesting the chain.

### Chapter 3 Arabic pedagogical targets
- Source-linked place description through `وُصِفَتْ... بأنها...`.
- Starting-state framing through `بدأت... مع...` and `لم يكن هناك...`.
- Earlier-past relationship through `عندما... لم يكن... قد... بعد`.
- Historical sequencing through `بعد` and `في وقت لاحق، عندما...`.
- Purpose through `لإعادة بناء...`.
- Cause and change through `بسبب...` followed by `أصبحت... وبدأت...`.
- Productive transfer: a six-sentence Arabic paragraph explaining how a different place changed over time.
- Arabic activities were authored independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/mecca/b1/en/languageFocusChapter3.ts` — added Chapter 3 English Language Focus.
- `src/data/mecca/b1/ar/languageFocusChapter3.ts` — added Chapter 3 Arabic Language Focus.
- `src/data/mecca/b1/index.ts` — wired Chapter 3 EN/AR sets through merged book-local Language Focus maps while preserving Chapters 1–2.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 4.

## Commits
- English Chapter 3 Language Focus: `7a93c2d53c5c700aef85d79f99c46b57fe2a3215`
- Arabic Chapter 3 Language Focus: `2a78620361c6183165d14aaf3612f69fcc9b44d8`
- Chapter 3 active wiring: `ac922dc278dc8b5dfd7e4bf7adfdffe0e5b59b07`

## Validation actually performed
- Read the full Chapter 3 English story text from `src/data/mecca/b1/en/pages.ts`.
- Read the full Chapter 3 Arabic story text independently from `src/data/mecca/b1/ar/pages.ts`.
- Read the active English and Arabic Chapter 3 Quick Challenges before authoring.
- Confirmed the Quick Challenge tests the factual development chain, while Language Focus targets place description, earlier/later past relations, sequencing, purpose and change/result language.
- Re-fetched both new Chapter 3 Language Focus files from `preview` after creation.
- Re-fetched `src/data/mecca/b1/index.ts` after the wiring write and confirmed both new sets are merged into the existing EN/AR Language Focus maps and exposed through `page.languageFocusExercises`.
- Chapters 1–2 Language Focus imports and wiring remain intact.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Exact next run
- Work on Mecca/Bilal B1 Chapter 4 only.
- Read the full English and Arabic Chapter 4 texts independently.
- Read the existing Chapter 4 Quick Challenges in both languages.
- Author Chapter 4 English and Arabic Language Focus only.
- Preserve current book-local wiring and do not start Chapter 5 in the same run.

## Unresolved issues
- None identified for Mecca/Bilal B1 Chapter 3.
- Build/typecheck remains unverified because no executable runner was used.
