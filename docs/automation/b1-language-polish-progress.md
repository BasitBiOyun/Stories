# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 7
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_7_LANGUAGE_FOCUS

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
### Chapters 1–6
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 6 English pedagogical targets
- Current danger through `The Pharaoh’s soldiers are looking for you`.
- Expected near-future action through `they are going to catch you`.
- Urgent direct command through `Run away from the city`.
- Knowledge explaining action through `Moses knew that ...`.
- Narrative progression through completed past actions: `escaped`, `left`, `travelled`, `reached`.
- Explanatory reassurance through `He was not alone as Allah guided him`.
- Time movement through `After many days` and `Soon`.
- Scene building through state + ongoing activity: `was tired and thirsty` / `was looking for water`.
- Place/person description through relative clauses with `where` and `who`.
- Present-continuous reason questions about a visible situation: `Why are you sitting ...? Why aren’t you taking ...?`.
- Productive transfer: a five-sentence non-story warning-to-new-scene mini-narrative combining current danger, expected consequence, imperative, time shift and a visible-situation question.
- Chapter 6 Quick Challenge already tests why reaching Midian changes Moses’s situation; Language Focus therefore does not retest that comprehension point.

### Chapter 6 Arabic pedagogical targets
- Current danger through `إنّ جنود فرعون يبحثون عنك`.
- Near intention through `والآن يريدون أن يقبضوا عليك`.
- Urgent command through `اُخرجْ من المدينة`.
- Knowledge/background through `كان موسى يعلم أنّ ...`.
- Immediate result through `فهرب موسى` and narrative movement through completed past verbs.
- Explanation through `ولم يكن وحده، فقد هداه الله`.
- Time movement through `بعد أيّام كثيرة` and `بعد قليل`.
- State and ongoing action through `كان موسى متعبًا وعطشان` / `وكان يبحث عن الماء`.
- Place description through `بئرًا يجتمع حولها رجال كثيرون`.
- Contrast through `لكنّهما لم تقتربا من الماء`.
- Reason questions through `لماذا تقفان ...؟ ولماذا لا تسقيان ...؟`.
- Productive transfer: a five-sentence Arabic warning-to-new-place mini-narrative using current danger, `يريد أن + فعل`, imperative, time shift and `لماذا`.
- Arabic activities were authored independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/moses/b1/en/languageFocusChapter6.ts` — added Chapter 6 English Language Focus.
- `src/data/moses/b1/ar/languageFocusChapter6.ts` — added Chapter 6 Arabic Language Focus.
- `src/data/moses/b1/index.ts` — merged Chapter 6 into the active English and Arabic Language Focus maps while preserving Chapters 1–5 and separate `languageFocusExercises` UI wiring.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 7.

## Validation actually performed
- Read the full English Chapter 6 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 6 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 6 Quick Challenges before authoring.
- Confirmed the Quick Challenge tests why Midian changes Moses’s situation, while Language Focus targets warning language, narrative relationships, scene construction and questioning instead.
- Re-fetched both new Chapter 6 Language Focus files from `preview` after creation and confirmed four activities are present in each language.
- Re-fetched `src/data/moses/b1/index.ts` after the wiring write and confirmed Chapter 6 is merged into both active maps while Chapters 1–5 remain preserved.
- Confirmed active story pages still place Quick Challenge in `exercises` and Language Focus in `languageFocusExercises`.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 6 English Language Focus: `6f241c3a471221f8518f1bc255e690b6225b36a3`
- Chapter 6 Arabic Language Focus: `24cdeb90bf9274b659ef0d874bfda0b2ffcdbb44`
- Chapter 6 active wiring: `435978107e3ef94db840e28b3289316d534ec50c`

## Exact next run
- Work on Moses B1 Chapter 7 only.
- Read the full English and Arabic Chapter 7 story texts independently.
- Read the existing Chapter 7 Quick Challenges in both languages.
- Author Chapter 7 English and Arabic Language Focus only.
- Preserve Chapters 1–6 wiring and do not start Chapter 8 in the same run.

## Unresolved issues
- None identified for Moses B1 Chapter 6.
- Build/typecheck remains unverified because no executable runner was used.
