# B1 Language Polish Progress

currentBook: Mecca/Bilal B1
bookPath: `src/data/mecca/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 15
nextChapter: 14
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
nextTask: COMPLETE_MECCA_BILAL_B1_CHAPTER_14_LANGUAGE_FOCUS

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
### Chapters 1–13
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE via `page.languageFocusExercises`.

### Chapter 13 English pedagogical targets
- Earlier-stage framing through `At first` and limitation through `only`.
- Change and contrast through `But when ... their opposition became violent`.
- Escalation through `went further` without retesting the Quick Challenge’s comprehension answer.
- Repeated past behaviour through `Whenever ...` and `often`.
- Reported command through `ordered him to give up his religion`.
- Group description through `those without powerful friends` and specific example/apposition through `One of them was Bilal, an Abyssinian slave`.
- Purpose through `spent their money to support the Muslims`.
- Productive transfer: six connected non-story B1 sentences using stage-setting, change, repeated behaviour, a reported order, vulnerable-group description and purpose.
- Chapter 13 Quick Challenge already tests the overall change from mockery to violent persecution and organized boycott; Language Focus therefore trains the language used to build that development rather than retesting it.

### Chapter 13 Arabic pedagogical targets
- Initial-stage framing through `في البداية ... فقط`.
- Change and contrast through `ولكن عندما ... بدأ ... بعنف`.
- Escalation through `زاد ... من ضغوطهم`.
- Repeated past behaviour through `كلما` and `كان + مضارع` with `غالباً`.
- Reported command through `يأمره أن يترك دينه`.
- Vulnerable-group description through `الذين ليس لهم أصدقاء أقوياء` and specific example/apposition through `وكان أحدهم بلال، وهو عبد حبشي`.
- Purpose through `لمواجهة هذا الحصار الجائر`.
- Productive transfer: six connected Arabic B1 sentences using initial stage, change, repetition, reported command, group description and purpose.
- Arabic activities were authored independently from the Arabic story text rather than mechanically translated from English.

## Files changed in this run
- `src/data/mecca/b1/en/languageFocusChapter13.ts` — added Chapter 13 English Language Focus.
- `src/data/mecca/b1/ar/languageFocusChapter13.ts` — added Chapter 13 Arabic Language Focus.
- `src/data/mecca/b1/index.ts` — wired Chapter 13 EN/AR sets through the merged Language Focus maps while preserving Chapters 1–12.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 14.

## Commits
- English Chapter 13 Language Focus: `2240cf6a05a1e5ab37fbd52ffe72664c8471ae0d`
- Arabic Chapter 13 Language Focus: `54d7f4ee64cdb67f6eadaa57bd64519f1eb4146b`
- Chapter 13 active wiring: `fd2c5d92457b4b81b36cb3c01b57b2d8408e0258`
- Preview HEAD immediately before checkpoint write: `fd2c5d92457b4b81b36cb3c01b57b2d8408e0258`

## Validation actually performed
- Read the full Chapter 13 English story text from `src/data/mecca/b1/en/pages.ts`.
- Read the full Chapter 13 Arabic story text independently from `src/data/mecca/b1/ar/pages.ts`.
- Read the active English and Arabic Chapter 13 Quick Challenges before authoring.
- Confirmed Quick Challenge tests the overall escalation from mockery to violence and boycott, while Language Focus targets stage/change markers, repeated behaviour, reported command, vulnerable-group description and purpose.
- Confirmed the new English and Arabic Chapter 13 files did not exist on `preview` before creation.
- Re-fetched both new Chapter 13 files after creation and confirmed four activities are present in each language.
- Re-fetched `src/data/mecca/b1/index.ts` immediately before the wiring write and again after the write.
- Chapter 13 English and Arabic sets are merged into the active Language Focus maps and exposed through `page.languageFocusExercises`.
- Chapters 1–12 Language Focus wiring remains intact.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Exact next run
- Work on Mecca/Bilal B1 Chapter 14 only.
- Read the full English and Arabic Chapter 14 texts independently.
- Read the existing Chapter 14 Quick Challenges in both languages.
- Author Chapter 14 English and Arabic Language Focus only.
- Preserve current book-local wiring and do not start Chapter 15 in the same run.

## Unresolved issues
- None identified for Mecca/Bilal B1 Chapter 13.
- Build/typecheck remains unverified because no executable runner was used.
