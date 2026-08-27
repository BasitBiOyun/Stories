# B1 Language Polish Progress

currentBook: Mecca/Bilal B1
bookPath: `src/data/mecca/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 15
nextChapter: 13
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
nextTask: COMPLETE_MECCA_BILAL_B1_CHAPTER_13_LANGUAGE_FOCUS

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
### Chapters 1–12
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE via `page.languageFocusExercises`.

### Chapter 12 English pedagogical targets
- Strongly limited quantity through `almost none of Mecca’s super-rich people became Muslims`.
- Reported viewpoint through `felt that Islam was a danger to their power` rather than presenting the leaders’ interpretation as neutral fact.
- Reason through `because of trade and the idols in the Ka’ba`.
- Resulting social role through `making them the prestigious caretakers of pilgrimage`.
- Priority through the gerund-subject pattern `Keeping their power and unity was very important for them`.
- Contrast between an existing practice and a new rule through `but`.
- Addition of a permitted alternative through `and allowed only honest trade`.
- Purpose through `to help the poor`.
- Productive transfer: six connected non-story B1 sentences explaining resistance to a change with quantity, viewpoint, reason, priority, contrast and purpose.
- Chapter 12 Quick Challenge already tests which economic change directly threatened an existing Quraysh practice; Language Focus therefore trains the language used to express status, viewpoint, priority, contrast and purpose rather than retesting that answer.

### Chapter 12 Arabic pedagogical targets
- Absence/very small representation through `لم يكن بين الذين أسلموا أحد من أغنياء مكة`.
- Reported viewpoint through `شعر زعماء قريش أن الإسلام خطر على قوتهم`.
- Reason through `بسبب` and `لأن`.
- Priority through `كان من المهم جداً بالنسبة لهم أن يحافظوا... وأن يبقوا...`.
- Result through `ولهذا`.
- Contrast through `ولكن`.
- Purpose through `لمساعدة الفقراء`.
- Productive transfer: six connected Arabic B1 sentences using absence/quantity, viewpoint, reason, priority, contrast and purpose.
- Arabic activities were authored independently from the Arabic story text rather than mechanically translated from English.

## Files changed in this run
- `src/data/mecca/b1/en/languageFocusChapter12.ts` — added Chapter 12 English Language Focus.
- `src/data/mecca/b1/ar/languageFocusChapter12.ts` — added Chapter 12 Arabic Language Focus.
- `src/data/mecca/b1/index.ts` — wired Chapter 12 EN/AR sets through the merged Language Focus maps while preserving Chapters 1–11.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 13.

## Commits
- English Chapter 12 Language Focus: `8c57c3a3ba05fe90699c848f9fedac49ab26b815`
- Arabic Chapter 12 Language Focus: `32f5ba4f9aff473e8d095749963ceaed3d3348d5`
- Chapter 12 active wiring: `53f71fd252c82c0ca7a32373e04d8b4b3ee5d667`
- Preview HEAD immediately before checkpoint write: `53f71fd252c82c0ca7a32373e04d8b4b3ee5d667`

## Validation actually performed
- Read the full Chapter 12 English story text from `src/data/mecca/b1/en/pages.ts`.
- Read the full Chapter 12 Arabic story text independently from `src/data/mecca/b1/ar/pages.ts`.
- Read the active English and Arabic Chapter 12 Quick Challenges before authoring.
- Confirmed Quick Challenge tests the direct economic challenge to Quraysh practice, while Language Focus targets quantity/absence, viewpoint, reasons for status, priority, contrast and purpose.
- Confirmed the new English and Arabic Chapter 12 files did not exist on `preview` before creation.
- Re-fetched both new Chapter 12 files after creation and confirmed four activities are present in each language.
- Re-fetched `src/data/mecca/b1/index.ts` immediately before the wiring write and again after the write.
- Chapter 12 English and Arabic sets are merged into the active Language Focus maps and exposed through `page.languageFocusExercises`.
- Chapters 1–11 Language Focus wiring remains intact.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Exact next run
- Work on Mecca/Bilal B1 Chapter 13 only.
- Read the full English and Arabic Chapter 13 texts independently.
- Read the existing Chapter 13 Quick Challenges in both languages.
- Author Chapter 13 English and Arabic Language Focus only.
- Preserve current book-local wiring and do not start Chapter 14 in the same run.

## Unresolved issues
- None identified for Mecca/Bilal B1 Chapter 12.
- Build/typecheck remains unverified because no executable runner was used.
