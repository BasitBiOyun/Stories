# B1 Language Polish Progress

currentBook: Abraham B1
bookPath: `src/data/abraham/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 3
completedBooks:
- Adam B1
nextTask: COMPLETE_ABRAHAM_B1_CHAPTER_3_LANGUAGE_FOCUS

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

## Current book — Abraham B1
### Chapter 1
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 2
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE through the existing generic Language Focus attachment in `src/data/abraham/b1/index.ts`.

#### English pedagogical targets
- Past habit versus background action versus one specific event: `used to`, `while ... was/were -ing`, `one day ...`.
- Corrective contrast and explanation: `not ..., but ...`, parallel explanatory clauses, direct comparison with `... than ...`, and interpreting what a visible feature is claimed to mean.
- Direct versus reported instruction/prohibition: imperative forms and `tell + person + (not) to + verb`.
- Productive transfer: four connected B1 sentences describing a childhood routine, a simultaneous background action, a turning-point event, and a reported instruction or comparison.
- The Chapter 2 Quick Challenge already tests why Abraham’s ordinary treatment of the idols weakens Azer’s claim about them; Language Focus deliberately avoids retesting that comprehension point.

#### Arabic pedagogical targets
- Arabic-native past habit/background/event contrast with `كان كثيرًا ما + فعل`, `وهو + فعل`, `كان + فعل`, and `ذات يوم`.
- Corrective contrast and explanation with `ليس ... بل ...`, coordinated explanatory clauses, comparison with `أكبر من`, and interpretation with `تدلّ على`.
- Direct versus reported prohibition/request with `لا + فعل`, `أمر + شخص + ألّا + فعل`, `طلب من + شخص + أن + فعل`, and direct imperative forms.
- Productive transfer: four connected Arabic B1 sentences moving from a repeated past habit to a simultaneous background action, one specific event, and a reported prohibition or comparison.
- Arabic was authored independently from the Arabic chapter rather than translated from the English activity set.

## Files changed in this run
- `src/data/abraham/b1/en/languageFocus.ts` — added Chapter 2 English Language Focus.
- `src/data/abraham/b1/ar/languageFocus.ts` — added Chapter 2 Arabic Language Focus.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 3.

## Validation actually performed
- Read the full Chapter 2 English story text from `src/data/abraham/b1/en/pages.ts`.
- Read the full Chapter 2 Arabic story text independently from `src/data/abraham/b1/ar/pages.ts`.
- Read both existing Chapter 2 Quick Challenges before authoring.
- Re-fetched the English Language Focus from `preview` and confirmed all four Chapter 2 activities are present.
- Re-fetched the Arabic Language Focus from `preview` and confirmed all four independently authored Chapter 2 activities are present.
- Confirmed existing `src/data/abraham/b1/index.ts` generically attaches `abrahamB1LanguageFocusExercises[page.id]` and `abrahamB1LanguageFocusExercisesAr[page.id]`, so no new index write was required for Chapter 2.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review, or Final Challenge files were modified.

## Commits
- Chapter 2 English Language Focus: `faaf4f40ce515c52958d5aaebeb176e653c36b70`
- Chapter 2 Arabic Language Focus: `a48bf2be0429119828794d93de03d7077fa02fdc`

## Exact next run
- Work on Abraham B1 Chapter 3 only.
- Read the full English and Arabic Chapter 3 texts independently.
- Read the existing Chapter 3 Quick Challenges in both languages.
- Author Chapter 3 English and Arabic Language Focus only.
- Do not start Chapter 4 in the same run.

## Unresolved issues
- None identified for Chapter 2.
- Build/typecheck remains unverified because no executable runner was used in this run.
