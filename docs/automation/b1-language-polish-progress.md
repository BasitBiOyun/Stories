# B1 Language Polish Progress

currentBook: Mecca/Bilal B1
bookPath: `src/data/mecca/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 15
nextChapter: 11
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
nextTask: COMPLETE_MECCA_BILAL_B1_CHAPTER_11_LANGUAGE_FOCUS

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
### Chapters 1–10
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE via `page.languageFocusExercises`.

### Chapter 10 English pedagogical targets
- Majority vs limited-group description through `most`, `only a few`, and `some`, avoiding overgeneralization.
- Passive information focus through `were kept`, foregrounding idols and their location rather than the people who placed them.
- Example insertion through `including Lat, Manat, and Uzza`.
- Compact spatial description through coordinated location phrases such as `in and around the Ka’ba and in homes`.
- Reported belief through `they thought these idols helped them talk to Allah`, distinguishing a group’s belief from narrator fact.
- Time-before-decision through `before making decisions`.
- Productive transfer: six connected non-story B1 sentences using majority/exception language, one passive location sentence, reported belief and a decision relationship.
- Chapter 10 Quick Challenge already tests the contradiction between acknowledging Allah as Creator and worshipping idols as intermediaries; Language Focus therefore trains how the chapter describes groups, location, belief and decision-making rather than retesting that comprehension answer.

### Chapter 10 Arabic pedagogical targets
- Majority description through `كان معظم الناس...` without absolute generalization.
- Limited-group introduction through `وكان هناك أشخاص يُعرَفون بالحنفاء`.
- Example insertion through `من بينها`.
- Passive focus through `يُعرَفون`, foregrounding the group’s designation rather than who named them.
- Contrast through `ومع ذلك`.
- Spatial description through `داخل الكعبة وحولها وفي البيوت`.
- Past belief through `كان العرب يؤمنون...` and reported interpretation through `يظنون أنها...`.
- Time-before-decision through `قبل اتخاذ القرارات`.
- Productive transfer: six connected Arabic sentences using `معظم`, `كان هناك`, passive or spatial description, `مع ذلك`, reported belief and a decision relationship.
- Arabic activities were authored independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/mecca/b1/en/languageFocusChapter10.ts` — added Chapter 10 English Language Focus.
- `src/data/mecca/b1/ar/languageFocusChapter10.ts` — added Chapter 10 Arabic Language Focus.
- `src/data/mecca/b1/index.ts` — wired Chapter 10 EN/AR sets through the merged Language Focus maps while preserving Chapters 1–9.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 11.

## Commits
- English Chapter 10 Language Focus: `71c0eb8a440714277d7792f0c71b1784ac9e46ae`
- Arabic Chapter 10 Language Focus: `10d1f7dc1704365203764d45273345ca60862ad6`
- Chapter 10 active wiring: `a97801dd5d34735e47a2cce28f8a6382ec8c77f9`
- Preview HEAD immediately before checkpoint write: `a97801dd5d34735e47a2cce28f8a6382ec8c77f9`

## Validation actually performed
- Read the full Chapter 10 English story text from `src/data/mecca/b1/en/pages.ts`.
- Read the full Chapter 10 Arabic story text independently from `src/data/mecca/b1/ar/pages.ts`.
- Read the active English and Arabic Chapter 10 Quick Challenges before authoring.
- Confirmed Quick Challenge tests the Creator/idol-intermediary contradiction, while Language Focus targets majority/exception description, passive focus, contrast, reported belief and time-before-decision language.
- Confirmed the new English and Arabic Chapter 10 files did not exist on `preview` before creation.
- Re-fetched both new Chapter 10 files after creation and confirmed four activities are present in each language.
- Re-fetched `src/data/mecca/b1/index.ts` immediately before the wiring write and again after the write.
- Chapter 10 English and Arabic sets are merged into the active Language Focus maps and exposed through `page.languageFocusExercises`.
- Chapters 1–9 Language Focus wiring remains intact.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Exact next run
- Work on Mecca/Bilal B1 Chapter 11 only.
- Read the full English and Arabic Chapter 11 texts independently.
- Read the existing Chapter 11 Quick Challenges in both languages.
- Author Chapter 11 English and Arabic Language Focus only.
- Preserve current book-local wiring and do not start Chapter 12 in the same run.

## Unresolved issues
- None identified for Mecca/Bilal B1 Chapter 10.
- Build/typecheck remains unverified because no executable runner was used.
