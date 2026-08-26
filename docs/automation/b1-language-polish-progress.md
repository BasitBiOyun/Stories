# B1 Language Polish Progress

currentBook: Moses B1
bookPath: `src/data/moses/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 2
completedBooks:
- Adam B1
- Abraham B1
nextTask: COMPLETE_MOSES_B1_CHAPTER_2_LANGUAGE_FOCUS

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
### Chapter 1
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 1 English pedagogical targets
- Historical time framing through `in the 13th century BC`, `over 3000 years ago`, `At that time`, and `Years passed`.
- Fear about a later possibility through `feared that ... would ...` from a past viewpoint.
- Self-perception and observed action through `saw himself as ...` versus `saw + object + verb`.
- Cause/result through `So` and `That’s why`.
- Coercion through `made + person/group + base verb`.
- Persistence through `continued to + verb`.
- Productive transfer: a five-sentence connected historical account using time framing, fear/expectation, cause-result, coercion and continuation.
- Chapter 1 Quick Challenge already tests the belief/power conflict between Pharaoh and the Children of Israel; Language Focus therefore trains how the chapter constructs time, fear, cause, control and persistence rather than repeating that comprehension answer.

### Chapter 1 Arabic pedagogical targets
- Arabic-native historical framing through `في ذلك الوقت`, `منذ أكثر من ثلاثة آلاف عام`, and `مرّت السنوات`.
- Fear/possibility through `خاف أن...` with coordinated continuation through `وأن...`.
- Distinguishing belief and perception through `كان يظن أنّ...` versus `رأى ... يفعل`.
- Cause/result through `لذلك` and `ولهذا السبب`.
- Coercion through `أجبر + مفعول + على + مصدر/فعل`.
- Persistence through `بقي ... يفعل`.
- Productive transfer: a five-sentence Arabic historical account using the chapter’s own discourse patterns.
- Arabic activities were authored independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/moses/b1/en/languageFocus.ts` — added Chapter 1 English Language Focus.
- `src/data/moses/b1/ar/languageFocus.ts` — added Chapter 1 Arabic Language Focus.
- `src/data/moses/b1/index.ts` — added minimal active wiring so Quick Challenge remains in `exercises` and Language Focus is exposed separately through `languageFocusExercises`.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 2.

## Validation actually performed
- Read the full English Chapter 1 story from `src/data/moses/b1/en/pages.ts`.
- Read the full Arabic Chapter 1 story independently from `src/data/moses/b1/ar/pages.ts`.
- Read the existing English and Arabic Chapter 1 Quick Challenges before authoring.
- Confirmed the Quick Challenge focuses on Pharaoh’s belief/power conflict while Language Focus targets linguistic construction rather than retesting that content.
- Re-fetched both new Language Focus files from `preview` after creation.
- Re-fetched `src/data/moses/b1/index.ts` immediately before the wiring update and again after the write.
- Confirmed the active index imports both Language Focus maps and attaches Chapter 1 via `languageFocusExercises` while preserving Quick Challenge in `exercises`.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 1 English Language Focus: `07f477a49d8dcffe8e0e3d04e70b6d988735c5df`
- Chapter 1 Arabic Language Focus: `37ba08a920fa76ac76785e11626607a3e9584475`
- Chapter 1 active wiring: `3f49f6cbe80f9bc4fa86a235561dec79718c7956`

## Exact next run
- Work on Moses B1 Chapter 2 only.
- Read the full English and Arabic Chapter 2 story texts independently.
- Read the existing Chapter 2 Quick Challenges in both languages.
- Author Chapter 2 English and Arabic Language Focus only.
- Preserve Chapter 1 wiring and do not start Chapter 3 in the same run.

## Unresolved issues
- None identified for Moses B1 Chapter 1.
- Build/typecheck remains unverified because no executable runner was used.
