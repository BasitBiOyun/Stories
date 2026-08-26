# B1 Language Polish Progress

currentBook: Abraham B1
bookPath: `src/data/abraham/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 5
completedBooks:
- Adam B1
nextTask: COMPLETE_ABRAHAM_B1_CHAPTER_5_LANGUAGE_FOCUS

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
### Chapter 1
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 2
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 3
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

### Chapter 4
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE

#### English pedagogical targets
- Time and evidence-to-result organisation through `until sunrise`, `when ...`, and a stated conclusion after new evidence.
- Conditional consequence through `If ... doesn’t/do not ... , ... will ...`, distinguishing a feared consequence from a threat.
- Responsibility and reason through `should ... because ...`.
- Role/purpose through `chose him to be ...`.
- Direct imperatives in dialogue: `Follow me`, `Stop ...`, `Leave ...`.
- Productive transfer: four connected B1 sentences combining realisation/time, responsibility + reason, an imperative, and a realistic condition-result response.
- Chapter 4 Quick Challenge already tests the story-level transition from receiving guidance to beginning the mission; Language Focus deliberately avoids retesting that comprehension point.

#### Arabic pedagogical targets
- Arabic-native time and result organisation with `حتى`, `لمّا`, `عندما`, and result `فـ`.
- Negative condition and future consequence with `إن لم ... فسـ ...`, contrasting a feared result with a threat.
- Responsibility and reason through `يجب أن ... لأن ...`.
- Role/purpose through `اختاره ليكون رسوله`.
- Direct imperatives from the Arabic dialogue: `اتبعني`, `توقف`, `ارحل`.
- Productive transfer: a four-sentence Arabic B1 scene combining time/realisation, duty + reason, an imperative, and condition + consequence.
- Arabic was authored independently from the Arabic chapter rather than mechanically translated from the English activities.

## Files changed in this run
- `src/data/abraham/b1/en/languageFocusChapter4.ts` — added Chapter 4 English Language Focus.
- `src/data/abraham/b1/ar/languageFocusChapter4.ts` — added Chapter 4 Arabic Language Focus.
- `src/data/abraham/b1/index.ts` — wired the Chapter 4 book-local Language Focus files while preserving Chapters 1–3 fallback wiring.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 5.

## Validation actually performed
- Read the full Chapter 4 English story text from `src/data/abraham/b1/en/pages.ts`.
- Read the full Chapter 4 Arabic story text independently from `src/data/abraham/b1/ar/pages.ts`.
- Read both existing Chapter 4 Quick Challenges before authoring.
- Confirmed Chapter 4 Language Focus targets language relationships/functions rather than duplicating the Quick Challenge comprehension target.
- Re-fetched both newly created Language Focus files from `preview` and confirmed four activities are present in each language.
- Re-fetched `src/data/abraham/b1/index.ts` and confirmed Chapter 4 takes priority while Chapters 1–3 remain preserved through the existing fallback chain.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review, or Final Challenge files were modified.
- No executable build/typecheck/CI runner was used in this run, so no build/typecheck/CI pass is claimed.

## Commits
- Chapter 4 English Language Focus: `cb588d587de3bbed766100fab3fce07a3b1c41b3`
- Chapter 4 Arabic Language Focus: `ea52ede08273ec2065a7b83dba473fd2a283c560`
- Chapter 4 active wiring: `47eab746238b946a1ba0e87fec279275de5359b2`

## Exact next run
- Work on Abraham B1 Chapter 5 only.
- Read the full English and Arabic Chapter 5 texts independently.
- Read the existing Chapter 5 Quick Challenges in both languages.
- Author Chapter 5 English and Arabic Language Focus only.
- Do not start Chapter 6 in the same run.

## Unresolved issues
- None identified for Chapter 4.
- Build/typecheck remains unverified because no executable runner was used in this run.
