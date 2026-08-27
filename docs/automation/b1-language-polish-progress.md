# B1 Language Polish Progress

currentBook: Mecca/Bilal B1
bookPath: `src/data/mecca/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 15
nextChapter: 3
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
nextTask: COMPLETE_MECCA_BILAL_B1_CHAPTER_3_LANGUAGE_FOCUS

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
### Chapters 1–2
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE via `page.languageFocusExercises`.

### Chapter 1 pedagogical targets
- English: historical framing, naming a period, cause/result/contrast, passive information focus, and source attribution.
- Arabic: `في القرن السابع`, `كان`, `كان يُسمّى`, `بسبب`, `لذلك`, `بينما`, active/passive information focus, and `يقول... إنّ...` source attribution.
- Chapter 1 Quick Challenge already tests the cause of social inequality; Language Focus does not retest that answer.

### Chapter 2 English pedagogical targets
- Direct characterization and definition through `was an age of...`.
- Explicit contrast through `described Islam as the opposite of...`.
- Historical transition through `ended when... began`.
- Explanatory ordering through `To understand...` and `we must first...`.
- Addition and cohesion through `also` and coordinated `and` clauses.
- Embedded definition through `The Qiblah, the direction Muslims face during salah, ...`.
- Productive transfer: a five-to-six-sentence explanatory profile of a different place or institution using definition, ordering, addition and an inserted definition.
- Chapter 2 Quick Challenge already tests why Mecca is central to the explanation; Language Focus trains the language used to build that explanation instead of retesting the answer.

### Chapter 2 Arabic pedagogical targets
- Direct definition through `المراد بـ... هو...`.
- Emphatic contrast through `في الواقع` and `وصف... بأنه نقيض...`.
- Historical transition through `انتهى هذا العصر عندما بدأ...`.
- Purpose and discourse ordering through `لفهم...` and `يجب أن... أولاً`.
- Reason/support through `فقد اختار...`.
- Addition through `كما`, `أيضاً`, and `فضلًا عن ذلك`.
- Definition inside discourse through `القبلة هي الاتجاه الذي...`.
- Productive transfer: a five-to-six-sentence Arabic explanatory profile using definition, purpose/order, addition and a relative definition.
- Arabic activities were authored independently from the Arabic text rather than mechanically translated from English.

## Files changed in this run
- `src/data/mecca/b1/en/languageFocus.ts` — added Chapter 2 English Language Focus while preserving Chapter 1.
- `src/data/mecca/b1/ar/languageFocus.ts` — added Chapter 2 Arabic Language Focus while preserving Chapter 1.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 3.

## Commits
- English Chapter 2 Language Focus: `4784f93babe536171995e5429e018fdb56a60e4d`
- Arabic Chapter 2 Language Focus: `7d02064ce4d7b71baeedb47006096e9808048273`

## Validation actually performed
- Read the full Chapter 2 English story text from `src/data/mecca/b1/en/pages.ts`.
- Read the full Chapter 2 Arabic story text independently from `src/data/mecca/b1/ar/pages.ts`.
- Read the active English and Arabic Chapter 2 Quick Challenges before authoring.
- Confirmed the Quick Challenge focuses on why Mecca is central to the chapter, while Language Focus targets definition, contrast, explanatory ordering, addition and embedded definition.
- Re-fetched both Language Focus files from `preview` after writes and confirmed Chapter 2 exercise sets are present while Chapter 1 remains intact.
- Re-fetched `src/data/mecca/b1/index.ts`; existing book-local wiring already maps any present chapter set to `page.languageFocusExercises`, so no index write was necessary.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Exact next run
- Work on Mecca/Bilal B1 Chapter 3 only.
- Read the full English and Arabic Chapter 3 texts independently.
- Read the existing Chapter 3 Quick Challenges in both languages.
- Author Chapter 3 English and Arabic Language Focus only.
- Preserve current book-local wiring and do not start Chapter 4 in the same run.

## Unresolved issues
- None identified for Mecca/Bilal B1 Chapter 2.
- Build/typecheck remains unverified because no executable runner was used.
