# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 10
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_10_LANGUAGE_FOCUS

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
- Quick Challenge audit: COMPLETE
- Knowledge Check audit: COMPLETE
- Vocabulary Challenge audit: COMPLETE
- Final Challenge audit: COMPLETE
- Final Challenge role separation: COMPLETE
- Active polished exercise-system wiring: COMPLETE
- Story prose unchanged.

## Moses B1 progress
### Chapters 1–9
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 9 English pedagogical targets
- Direct commands through `Put down...`, `Put...`, `Take...`, `Show...`, and `Tell...`.
- Instruction → action → result through direct command, Moses’s response, and immediate transformation.
- Sequenced imperatives through `Put your hand... Now take it out`.
- Reported instruction through `Allah told Moses to go to Egypt` and linked mission verbs `show... and warn...`.
- Role/state change through `became a Messenger of Allah, a prophet`.
- Narrative transition through `After this message...` and `Upon this` leading from message to new role and action.
- Productive transfer: five connected non-story sentences using a direct command, reported instruction, result, role change, and next action.
- Chapter 9 Quick Challenge already tests the staff and shining hand as signs preparing Moses for his mission; Language Focus therefore does not retest which sign does what.

### Chapter 9 Arabic pedagogical targets
- Direct imperatives through `ضعْ`, `أَدخِلْ`, `أَخرِجْ`, `اِذهَبْ`, and `أخبرْه`.
- Command → execution → result through `فوضع... فتحوّلت...` using `فـ` for close sequence/result.
- Ordered sequence through `ثم` in linked instructions and narrative progression.
- Reported instruction through `أمر الله موسى أنْ يذهب... وأنْ يُرِيَ... وأنْ يَدْعُوَهُ...`.
- Role/state change through `صار موسى رسولًا... ونبيًّا`.
- Transition to next action through `وبعد هذا الوحي...` and `وعند ذلك...`.
- Purpose through `لمواجهة فرعون` in the final movement toward Egypt.
- Productive transfer: five connected Arabic sentences using an imperative, `أمره أن...`, result/sequence with `فـ` or `ثم`, `صار`, and a final purpose/action relation.
- Arabic activities were authored independently from the Arabic story language rather than mechanically translated from English.

## Files changed in this run
- `src/data/moses/b1/en/languageFocusChapter9.ts` — added Chapter 9 English Language Focus.
- `src/data/moses/b1/ar/languageFocusChapter9.ts` — added Chapter 9 Arabic Language Focus.
- `src/data/moses/b1/index.ts` — merged Chapter 9 into the active English and Arabic Language Focus maps while preserving Chapters 1–8 and separate `languageFocusExercises` UI wiring.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 10.

## Validation actually performed
- Read the full English Chapter 9 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 9 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 9 Quick Challenges before authoring.
- Confirmed Quick Challenge tests the two signs and their mission role, while Language Focus targets commands, reported instruction, sequence/result, role change, transition, and productive transfer instead.
- Re-fetched both new Chapter 9 Language Focus files from `preview` after creation and confirmed four activities are present in each language.
- Re-fetched `src/data/moses/b1/index.ts` after the wiring write and confirmed Chapter 9 is merged into both active maps while Chapters 1–8 remain preserved.
- Confirmed active story pages still place Quick Challenge in `exercises` and Language Focus in `languageFocusExercises`.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 9 English Language Focus: `a34a4698c42451e66f1d01b8dd29213ea23375ae`
- Chapter 9 Arabic Language Focus: `6655b81ec51038d965ab36ead47dac835c06ee2c`
- Chapter 9 active wiring: `cfd96e3218df2c166d6a0968577e7d4d5d09237e`

## Exact next run
- Work on Moses B1 Chapter 10 only.
- Read the full English and Arabic Chapter 10 story texts independently.
- Read the existing Chapter 10 Quick Challenges in both languages.
- Author Chapter 10 English and Arabic Language Focus only.
- Preserve Chapters 1–9 wiring and do not start Chapter 11 in the same run.

## Unresolved issues
- None identified for Moses B1 Chapter 9.
- Build/typecheck remains unverified because no executable runner was used.
