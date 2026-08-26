# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 5
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_5_LANGUAGE_FOCUS

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
### Chapters 1–4
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 4 English pedagogical targets
- Direct instruction through `Find a nurse for the baby.`
- Knowledge/supporting evidence through `I know a good woman` and `She lives nearby`.
- Confident future prediction through `She will be a good nurse for the baby`.
- Purpose through `to be Moses’s nurse`.
- Result progression through Moses being sent back to his mother.
- Reason through `because of her goodness and courage` and `because he was originally not from a family of the palace`.
- Development over time through `grew up`, `Years passed`, and `became`.
- Continuing personal tendency through `always` / `was always willing to help`.
- Productive transfer: a five-sentence connected B1 account combining guidance, purpose, reason, change over time, and a continuing quality.
- Chapter 4 Quick Challenge already tests the significance of Moses returning to his mother while growing safely in the palace; Language Focus therefore trains how instruction, purpose, reason, growth, and identity are linguistically constructed instead of retesting that inference.

### Chapter 4 Arabic pedagogical targets
- Direct instruction through `اِبحَثوا عن مرضِعة للطفل`.
- Supporting knowledge through `أَعرِف امرأة صالحة` and `تسكُن قريبًا من هنا`.
- Future expectation through `وستكون مرضِعة جيّدة للطفل`.
- Purpose through `لتكون مرضِعة موسى في القصر`.
- Result through `وهكذا ردّ الله موسى إلى أمه`.
- Reason through `بسبب طِيبَتِها وشَجاعتها` and `لأنه لم يكن في الأصل من أهل القصر`.
- Development over time through `نشأ`, `مرّت السنوات`, and `أصبح`.
- Continuing tendency through `وكان يحبّ مساعدة الضعفاء`.
- Productive transfer: a five-sentence Arabic account combining instruction, purpose, reason, change, and a continuing quality.
- Arabic activities were designed independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/moses/b1/en/languageFocusChapter4.ts` — added Chapter 4 English Language Focus.
- `src/data/moses/b1/ar/languageFocusChapter4.ts` — added Chapter 4 Arabic Language Focus.
- `src/data/moses/b1/index.ts` — merged Chapter 4 maps into the active English and Arabic Language Focus maps while preserving Chapters 1–3 and `languageFocusExercises` UI wiring.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 5.

## Validation actually performed
- Read the full English Chapter 4 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 4 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 4 Quick Challenges before authoring.
- Confirmed the Quick Challenge tests the significance of Moses returning to his mother while growing safely in the palace, while Language Focus targets linguistic construction rather than repeating that comprehension answer.
- Re-fetched both new Chapter 4 Language Focus files from `preview` after creation and confirmed all four activities are present in each language.
- Re-fetched `src/data/moses/b1/index.ts` after the wiring write and confirmed Chapter 4 is merged into the active English and Arabic maps while Chapters 1–3 remain preserved.
- Confirmed active story pages still place Quick Challenge in `exercises` and Language Focus in `languageFocusExercises`.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 4 English Language Focus: `928a99d119f09572483414a29cc7e27599fa04db`
- Chapter 4 Arabic Language Focus: `b6e1114b3d53798875117b1297665fa7449ec016`
- Chapter 4 active wiring: `3ad4004d28b65409c586a89281f22b4af2534cc4`

## Exact next run
- Work on Moses B1 Chapter 5 only.
- Read the full English and Arabic Chapter 5 story texts independently.
- Read the existing Chapter 5 Quick Challenges in both languages.
- Author Chapter 5 English and Arabic Language Focus only.
- Preserve Chapters 1–4 wiring and do not start Chapter 6 in the same run.

## Unresolved issues
- None identified for Moses B1 Chapter 4.
- Build/typecheck remains unverified because no executable runner was used.
