# B1 Language Polish Progress

currentBook: Mecca/Bilal B1
bookPath: `src/data/mecca/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 15
nextChapter: 15
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
nextTask: COMPLETE_MECCA_BILAL_B1_CHAPTER_15_LANGUAGE_FOCUS

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
### Chapters 1–14
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE via `page.languageFocusExercises`.

### Chapter 14 English pedagogical targets
- Purpose under extreme need through `to survive`.
- Passive perception through `could be heard everywhere`, focusing on the experienced effect rather than the hearer.
- Contrasting consequences through `Some... and others...` inside the boycott crisis.
- Persistence through `continued to ask...`.
- Resistance/unwillingness through repeated `did not want to...` patterns.
- Cause-result through `Losing... meant losing..., so...`.
- Reason through `because people feared...`.
- Parallel action listing through `hurting... / making... / drinking...`.
- Productive transfer: five to six connected non-story B1 sentences combining purpose, persistence, unwillingness, consequence and reason.
- Chapter 14 Quick Challenge already tests why some Meccan leaders connected idol worship with wealth, influence and social power; Language Focus therefore trains the language used to express crisis, persistence, resistance, reasons and consequences instead of retesting that answer.

### Chapter 14 Arabic pedagogical targets
- Purpose through `لكي + فعل` in `لكي يعيشوا`.
- Ongoing past state through `كان + مضارع` in `كان الناس يسمعون...`.
- Linked consequences through `فـ` and coordinated outcome description.
- Persistence through `استمر ... في`.
- Refusal through `لم يريدوا...` and `لم يريدوا أن...`.
- Conditional consequence through `إذا تركوا أصنامهم، فقدوا...`.
- Resulting state through `جعل + مفعول + خبر` in `جعلهم أعداءً للإسلام`.
- Cause grouping through `بسبب` followed by parallel verbal nouns/action expressions.
- Productive transfer: five to six connected Arabic B1 sentences combining purpose, persistence, refusal, condition, effect and cause.
- Arabic activities were authored independently from the Arabic story text rather than mechanically translated from English.

## Files changed in this run
- `src/data/mecca/b1/en/languageFocusChapter14.ts` — added Chapter 14 English Language Focus and polished one wording issue found during verification.
- `src/data/mecca/b1/ar/languageFocusChapter14.ts` — added Chapter 14 Arabic Language Focus.
- `src/data/mecca/b1/index.ts` — wired Chapter 14 EN/AR sets through the merged Language Focus maps while preserving Chapters 1–13.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 15.

## Commits
- English Chapter 14 Language Focus initial add: `f4fa6d1f30a6725bbf3eb650e46aa15cdf5bae11`
- Arabic Chapter 14 Language Focus: `e6b99ad72e9a41abebe5bbdedd2122620b4af11c`
- Chapter 14 active wiring: `3b50b54c73cac27f67d7c563bb69f87256a9d462`
- English Chapter 14 wording polish: `73969fd84eccbd5774b03ccc4222847080816fbb`
- Preview HEAD immediately before checkpoint write: `73969fd84eccbd5774b03ccc4222847080816fbb`

## Validation actually performed
- Read the full Chapter 14 English story text from `src/data/mecca/b1/en/pages.ts`.
- Read the full Chapter 14 Arabic story text independently from `src/data/mecca/b1/ar/pages.ts`.
- Read the active English and Arabic Chapter 14 Quick Challenges before authoring.
- Confirmed Quick Challenge tests the economic/social-power significance of idol worship, while Language Focus targets purpose, persistence, resistance, cause/consequence and related discourse forms.
- Confirmed both new Chapter 14 Language Focus files did not exist on `preview` before creation.
- Re-fetched the English Chapter 14 file after creation, caught one mixed-language wording defect in an exercise question, and corrected it after re-fetching the current SHA.
- Re-fetched the Arabic Chapter 14 file and confirmed four activities are present.
- Re-fetched `src/data/mecca/b1/index.ts` immediately before the wiring write and again after the write.
- Chapter 14 English and Arabic sets are merged into the active Language Focus maps and exposed through `page.languageFocusExercises`.
- Chapters 1–13 Language Focus wiring remains intact.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Exact next run
- Work on Mecca/Bilal B1 Chapter 15 only.
- Read the full English and Arabic Chapter 15 texts independently.
- Read the existing Chapter 15 Quick Challenges in both languages.
- Author Chapter 15 English and Arabic Language Focus only.
- Preserve current book-local wiring.
- If Chapter 15 is completed in both languages, set `phase: LANGUAGE_FOCUS_COMPLETE` and `nextTask: BUILD_LANGUAGE_REVIEW_ON_NEXT_RUN`, then stop without doing Language Review in the same run.

## Unresolved issues
- None identified for Mecca/Bilal B1 Chapter 14.
- Build/typecheck remains unverified because no executable runner was used.
