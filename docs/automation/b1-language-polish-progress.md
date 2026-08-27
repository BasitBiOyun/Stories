# B1 Language Polish Progress

currentBook: Mecca/Bilal B1
bookPath: `src/data/mecca/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 15
nextChapter: 2
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
nextTask: COMPLETE_MECCA_BILAL_B1_CHAPTER_2_LANGUAGE_FOCUS

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
### Chapter 1
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE via `page.languageFocusExercises`.

### Chapter 1 English pedagogical targets
- Historical framing through time/place expressions such as `in the 7th century` and descriptions of past social conditions.
- Naming/defining a historical period through `was called...`.
- Cause, result and contrast through `because`, `for this reason`, and contrastive `while`.
- Information focus through passive forms such as `was led by` and `were often treated badly`.
- Source attribution through `The Quran describes this period as...`.
- Productive transfer: a five-to-six-sentence historical snapshot about a different city or society, using time framing, description, reason/result, contrast, and passive/source attribution.
- Chapter 1 Quick Challenge already tests why the chapter presents Mecca as socially unequal; Language Focus does not retest that comprehension answer.

### Chapter 1 Arabic pedagogical targets
- Historical framing through `في القرن السابع`, `كان`, `لم تكن`, and descriptions of a past social order.
- Naming a period through `كان يُسمّى...`.
- Arabic-native cause/result/contrast through `بسبب`, `لذلك`, and `بينما`.
- Information focus through active and passive patterns such as `كان يقود مكة...`, `عُرِف البلد بـ...`, and `كان ... يعاملون بقسوة`.
- Source attribution through `ويقول القرآن الكريم إنّ...`.
- Productive transfer: a five-to-six-sentence Arabic historical snapshot using time/place, social description, cause/result, contrast, and passive/source attribution.
- Arabic activities were authored independently from the Arabic chapter rather than translated mechanically from English.

## Files changed in this run
- `src/data/mecca/b1/en/languageFocus.ts` — added Chapter 1 English Language Focus.
- `src/data/mecca/b1/ar/languageFocus.ts` — added Chapter 1 Arabic Language Focus.
- `src/data/mecca/b1/index.ts` — added minimal EN/AR Language Focus imports and separate `languageFocusExercises` wiring while preserving Quick Challenge in `exercises`.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 2.

## Commits
- English Chapter 1 Language Focus: `0d7256c7312ec172ce4bb9a1676885bb1f296018`
- Arabic Chapter 1 Language Focus: `6df7b04da7e90fea3bbca9e029a5b6c8ff1198fc`
- Active book-local wiring: `685b99acc5c67d356bd7ae1138158762be049e85`

## Validation actually performed
- Read the full Chapter 1 English story text from `src/data/mecca/b1/en/pages.ts`.
- Read the full Chapter 1 Arabic story text independently from `src/data/mecca/b1/ar/pages.ts`.
- Read the active English and Arabic Chapter 1 Quick Challenges before authoring.
- Confirmed Quick Challenge focuses on the cause of social inequality while Language Focus trains historical/discourse language instead of repeating that answer.
- Re-fetched both newly created Language Focus files from `preview` after creation and confirmed the Chapter 1 exercise sets are present.
- Re-fetched `src/data/mecca/b1/index.ts` from `preview` after wiring and confirmed Quick Challenge remains in `exercises` and Language Focus is exposed separately through `languageFocusExercises` in both languages.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Exact next run
- Work on Mecca/Bilal B1 Chapter 2 only.
- Read the full English and Arabic Chapter 2 texts independently.
- Read the existing Chapter 2 Quick Challenges in both languages.
- Author Chapter 2 English and Arabic Language Focus only.
- Preserve the current book-local wiring and do not start Chapter 3 in the same run.

## Unresolved issues
- None identified for Mecca/Bilal B1 Chapter 1.
- Build/typecheck remains unverified because no executable runner was used.
