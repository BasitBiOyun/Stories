# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 12
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_12_LANGUAGE_FOCUS

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

## Moses B1 progress
### Chapters 1–11
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 11 English pedagogical targets
- Time and immediate-result relations through `Once...`, `When...`, action language and `turned into...`.
- Direct imperative → action → result through `Throw down your staff!` and the following narration.
- Direct declaration through `We believe in...` and a later direct order through `Be rude to them!`.
- Relative-clause identification through `The magicians who witnessed this miracle`.
- Persistence through `still refused` and `continued to trouble`.
- Cause through `because he was arrogant`.
- Productive transfer: five connected non-story sentences combining command, action, result, changed response, persistence and cause.
- Chapter 11 Quick Challenge already contrasts the magicians’ belief with Pharaoh’s continued rejection; Language Focus therefore trains how the language builds sequence, command/response, persistence and cause rather than retesting that comprehension answer.

### Chapter 11 Arabic pedagogical targets
- Event → result through `فلمّا...` and close sequencing/result through `فـ`.
- Apparent resemblance through `كأنّ` in `بدت كأنها أفاعي`.
- Direct imperative → execution through `ألقِ عصاك` → `فألقى موسى عصاه`.
- Direct declaration and order through `آمنّا...` and `كونوا قساة معهم`.
- Observation → inference through `رأى... فعرَفوا أنّ...`.
- Contrast through `لكنّ`.
- Persistence through `ظلّ + مضارع` and cause through `لأنه`.
- Productive transfer: five connected Arabic sentences using command, sequence/result, inference, contrast, persistence and cause.
- Arabic activities were designed independently from the Arabic story rather than mechanically translating the English set.

## Files changed in this run
- `src/data/moses/b1/en/languageFocusChapter11.ts` — added Chapter 11 English Language Focus.
- `src/data/moses/b1/ar/languageFocusChapter11.ts` — added Chapter 11 Arabic Language Focus.
- `src/data/moses/b1/index.ts` — merged Chapter 11 into the active English and Arabic Language Focus maps while preserving Chapters 1–10 and separate `languageFocusExercises` UI wiring.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 12.

## Validation actually performed
- Read the full English Chapter 11 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 11 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 11 Quick Challenges before authoring.
- Confirmed Quick Challenge tests the contrasting responses of the magicians and Pharaoh, while Language Focus targets sequence/result, command/response, inference, persistence, cause and productive transfer.
- Re-fetched both new Chapter 11 Language Focus files from `preview` and confirmed four activities are present in each language.
- Re-fetched `src/data/moses/b1/index.ts` after the wiring write and confirmed Chapter 11 is merged into both active maps while Chapters 1–10 remain preserved.
- Confirmed active story pages still place Quick Challenge in `exercises` and Language Focus in `languageFocusExercises`.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 11 English Language Focus: `2ffa035c8b19988ebc6f4c84ed875266dff354f9`
- Chapter 11 Arabic Language Focus: `447ab38dbf8a5503d661e8c46056a558bfd62da9`
- Chapter 11 active wiring: `7b6c19ab77b618b6628027a31abec29260ae2181`

## Exact next run
- Work on Moses B1 Chapter 12 only.
- Read the full English and Arabic Chapter 12 story texts independently.
- Read the existing Chapter 12 Quick Challenges in both languages.
- Author Chapter 12 English and Arabic Language Focus only.
- Preserve Chapters 1–11 wiring and do not start Chapter 13 in the same run.

## Unresolved issues
- None identified for Moses B1 Chapter 11.
- Build/typecheck remains unverified because no executable runner was used.
