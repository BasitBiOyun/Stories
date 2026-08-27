# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 9
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_9_LANGUAGE_FOCUS

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
### Chapters 1–8
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 8 English pedagogical targets
- Opportunity and choice through `offered Moses a job` and `accepted the offer`.
- Reason and practical need through `because he was a stranger in Midian` and `needed a job and a house`.
- Simultaneous/ongoing action through `while he was staying with them`.
- Completed duration before change through `After living in Midian for about ten years ...`.
- Deliberate new choice through `decided to go back to Egypt` and movement from decision to action through `started to travel`.
- Developing narrative background through `It was getting dark and cold` and `They were crossing a valley ...`.
- Sudden foreground event through `Suddenly, Moses saw a fire ...`.
- Immediate intention/proposal through `Let me go ...` and purpose through `to get warm`.
- Productive transfer: five connected non-story sentences using duration, decision, past-progressive background, a sudden event and purpose.
- Chapter 8 Quick Challenge already tests the sequence from settlement in Midian to the return journey; Language Focus therefore does not retest that chronology.

### Chapter 8 Arabic pedagogical targets
- Opportunity and decision through `عَرَضَ ... عملًا` → `فقبِل ... العرْض`.
- Reason through `لأنه كان غريبًا` and practical need through `وكان يحتاج إلى عمل وبيت`.
- Simultaneous/ongoing period through `في أثناء إقامته معهم`.
- Earlier completed duration through `وبعد أن عاش موسى في مدين نحو عشر سنوات`.
- New intention/decision through `أراد أن يرجع` and transition to action through `بدأ السفر`.
- Developing background through `كان الليل يقترب، والبرد يشتد` and `وكانوا يعبرون واديًا`.
- Sudden foreground event through `وفجأة، رأى موسى نارًا`.
- Near intention through `سأذهب إلى النار` and hope/result through `لعلّي آتيكم ... فنستدفئ به`.
- Productive transfer: five connected Arabic sentences using `بعد أن`, a decision expression, `كان... يـ`, `فجأة`, and a purpose/result relation.
- Arabic activities were authored independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/moses/b1/en/languageFocusChapter8.ts` — added Chapter 8 English Language Focus.
- `src/data/moses/b1/ar/languageFocusChapter8.ts` — added Chapter 8 Arabic Language Focus.
- `src/data/moses/b1/index.ts` — merged Chapter 8 into the active English and Arabic Language Focus maps while preserving Chapters 1–7 and separate `languageFocusExercises` UI wiring.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 9.

## Validation actually performed
- Read the full English Chapter 8 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 8 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 8 Quick Challenges before authoring.
- Confirmed Quick Challenge tests the chapter’s life/journey chronology, while Language Focus targets reason, duration, decision, background, sudden event and purpose instead.
- Re-fetched both new Chapter 8 Language Focus files from `preview` after creation and confirmed four activities are present in each language.
- Re-fetched `src/data/moses/b1/index.ts` after the wiring write and confirmed Chapter 8 is merged into both active maps while Chapters 1–7 remain preserved.
- Confirmed active story pages still place Quick Challenge in `exercises` and Language Focus in `languageFocusExercises`.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 8 English Language Focus: `18f5dccd4617b91bae3ab8cf16e102c140b5dd41`
- Chapter 8 Arabic Language Focus: `5657066454cbedde4d5a92a4c574cb77a1d2b416`
- Chapter 8 active wiring: `582226d261daada73344022daa5202a757229ac4`

## Exact next run
- Work on Moses B1 Chapter 9 only.
- Read the full English and Arabic Chapter 9 story texts independently.
- Read the existing Chapter 9 Quick Challenges in both languages.
- Author Chapter 9 English and Arabic Language Focus only.
- Preserve Chapters 1–8 wiring and do not start Chapter 10 in the same run.

## Unresolved issues
- None identified for Moses B1 Chapter 8.
- Build/typecheck remains unverified because no executable runner was used.
