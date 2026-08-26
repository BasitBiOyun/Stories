# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 3
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_3_LANGUAGE_FOCUS

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
### Chapters 1–2
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 2 English pedagogical targets
- Reporting source and voice through `Ibn Abbas told`, `They said`, and `the Pharaoh told his soldiers`.
- Prediction in quoted speech through `will be born` and `will die`.
- Direct command through the imperative `Kill all the newborn boys...`.
- Narrative sequencing and time through `When he woke up`, `Then`, and `When they found...`.
- Degree → result through `so frightened that she was unable to sleep`.
- Fear about a possible event through `was scared that ... could hear` with embedded timing through `when Moses cried`.
- Uncertainty about action through `did not know what to do`.
- Productive transfer: a five-sentence warning-and-response mini-narrative combining reported prediction, command, time sequence, fear/result and a final response/request for help.
- Chapter 2 Quick Challenge already tests why the dream interpretation leads to Pharaoh’s cruel order; Language Focus therefore trains how the chapter reports voices, prediction, command, timing, fear and uncertainty rather than repeating that comprehension answer.

### Chapter 2 Arabic pedagogical targets
- Arabic-native source/reporting frames through `رَوَى ابن عباس`, `فقالوا`, and `ثم قال فرعون لجنوده`.
- Future prediction through `سيُولد` and `سيهلك`.
- Direct command through the imperative `اُقتُلوا`.
- Narrative sequencing/time through `عندما`, `ثم`, and `وعندما وجدوا...`.
- Degree → result through `خائفة جدًّا، حتى إنّها لم تستطع...`.
- Fear of possibility through `كانت تخاف أن يسمع...` with timing through `عندما يبكي`.
- Uncertainty through `لم تكن تعرف ماذا تفعل`.
- Productive transfer: a five-sentence Arabic warning-and-response situation using the chapter’s own discourse patterns.
- Arabic activities were authored independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/moses/b1/en/languageFocus.ts` — added Chapter 2 English Language Focus while preserving Chapter 1.
- `src/data/moses/b1/ar/languageFocus.ts` — added Chapter 2 Arabic Language Focus while preserving Chapter 1.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 3.

## Validation actually performed
- Read the full English Chapter 2 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 2 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 2 Quick Challenges before authoring.
- Confirmed the Quick Challenge tests the dream-interpretation → cruel-order causal relationship while Language Focus targets linguistic construction instead.
- Re-fetched both Language Focus files from `preview` after their writes and confirmed Chapter 2 activities are present.
- Re-fetched `src/data/moses/b1/index.ts` and confirmed the existing generic book-local wiring exposes `languageFocus[page.id]` through `languageFocusExercises`; no index change was required for Chapter 2.
- Confirmed Chapter 1 Language Focus remains in the same EN/AR maps.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 2 English Language Focus: `93afb1ea8fc6c2b4adcc90f26896a3cdf5c8bd44`
- Chapter 2 Arabic Language Focus: `4f231553f7339ff864d0fe82aeae303f1d032258`
- Chapter 2 required no index commit because the existing generic Moses B1 wiring already maps every populated chapter ID to `languageFocusExercises`.

## Exact next run
- Work on Moses B1 Chapter 3 only.
- Read the full English and Arabic Chapter 3 story texts independently.
- Read the existing Chapter 3 Quick Challenges in both languages.
- Author Chapter 3 English and Arabic Language Focus only.
- Preserve Chapters 1–2 wiring and do not start Chapter 4 in the same run.

## Unresolved issues
- None identified for Moses B1 Chapter 2.
- Build/typecheck remains unverified because no executable runner was used.
