# B1 Language Polish Progress

currentBook: Abraham B1
bookPath: `src/data/abraham/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 7
completedBooks:
- Adam B1
nextTask: COMPLETE_ABRAHAM_B1_CHAPTER_7_LANGUAGE_FOCUS

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
### Chapters 1–6
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 6 English pedagogical targets
- Deliberate decision and intention through `decided to`, `made a plan to`, and past-viewpoint future/intention in `what he was going to do`.
- Habitual background versus one specific opportunity through `usually` plus the celebration event.
- Result and timing through `so` and `until`.
- Action development through `began to + verb`, `one after another`, and endpoint use of `until`.
- Resulting state through `leave + object + complement`, grounded in `left the largest statue ... untouched`.
- Productive transfer: a four-sentence B1 plan scene connecting intention, opportunity, timing, and a final resulting state.
- Chapter 6 Quick Challenge already tests the event sequence of the temple plan; Language Focus deliberately avoids retesting that sequence as comprehension.

### Chapter 6 Arabic pedagogical targets
- Arabic-native decision, planning and intention through `قرّر أن`, `وضع خطة`, and `كان ينوي فعله`.
- Habitual context versus a particular opportunity through `كان الناس عادةً` and the specific celebration.
- Result and timing through `لذلك` and `حتى`.
- Action development through `بدأ + مضارع`, `واحدًا تلو الآخر`, and endpoint use of `حتى`.
- Resulting state through `ترك + مفعول + حال`, grounded in `ترك أكبر تمثال ... سليمًا`.
- Productive transfer: a four-sentence Arabic B1 plan scene connecting decision, circumstance, timing, and final state.
- Arabic activities were authored independently from the Arabic story language rather than mechanically translated from English.

## Files changed in this run
- `src/data/abraham/b1/en/languageFocusChapter6.ts` — added Chapter 6 English Language Focus.
- `src/data/abraham/b1/ar/languageFocusChapter6.ts` — added Chapter 6 Arabic Language Focus.
- `src/data/abraham/b1/index.ts` — wired Chapter 6 with priority while preserving earlier Language Focus fallbacks.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 7.

## Validation actually performed
- Read the full Chapter 6 English story text from `src/data/abraham/b1/en/pages.ts`.
- Read the full Chapter 6 Arabic story text independently from the current Arabic source.
- Read both existing Chapter 6 Quick Challenges before authoring.
- Confirmed the Quick Challenge is sequencing-based and the new Language Focus instead targets plan/intention, habit vs event, result/timing, action development, and resulting state.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review, or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 6 English Language Focus: `93254f54caf20117ef33f583dc0298064a2c7851`
- Chapter 6 Arabic Language Focus: `935bcb812d30252eb3120714939e654d59b21a48`
- Chapter 6 active wiring: `6c37070da8f0e607d4ae4966ad3831c243600cf7`

## Exact next run
- Work on Abraham B1 Chapter 7 only.
- Read the full English and Arabic Chapter 7 texts independently.
- Read the existing Chapter 7 Quick Challenges in both languages.
- Author Chapter 7 English and Arabic Language Focus only.
- Do not start Chapter 8 in the same run.

## Unresolved issues
- None identified for Chapter 6.
- Build/typecheck remains unverified because no executable runner was used in this run.
