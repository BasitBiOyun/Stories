# B1 Language Polish Progress

currentBook: Abraham B1
bookPath: `src/data/abraham/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 13
nextChapter: 2
completedBooks:
- Adam B1
nextTask: COMPLETE_ABRAHAM_B1_CHAPTER_2_LANGUAGE_FOCUS

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

#### English pedagogical targets
- Layered past-time framing: `a very long time ago`, `about 4,000 years ago`, `when ...`, `since ...`.
- Context-sensitive meanings of `could/could not`: difficulty understanding, possibility inside an indirect question, attributed ability, and absence of independent ability.
- Compact descriptive expansion of nouns with `named ...`, `made from ...`, relative `which could ...`, and `full of ...`.
- Productive transfer: four connected B1 sentences about a new observation situation using time framing, description, modality/ability, and an indirect `how` idea.
- The Chapter 1 Quick Challenge already tests the contrast between people asking statues for help and statues being unable to respond; Language Focus deliberately does not retest that comprehension point.

#### Arabic pedagogical targets
- Arabic-native time framing with `منذ زمن بعيد جدًّا`, `قبل حوالي أربعة آلاف عام`, `منذ صغره`, and `عندما ...`.
- Contextual distinction among `لم يكن يستطيع أن يفهم`, `كيف يمكن ...`, `قادرًا على ...`, and `لا تستطيع ... بمفردها`.
- Compact Arabic descriptive structures: `يُدعى ...`, `المصنوعة من ...`, `قادرًا على ...`, `مليء بـ ...`.
- Productive transfer: four connected Arabic B1 sentences combining time, descriptive expansion, ability/possibility, and an indirect idea.
- Arabic was authored independently from the Arabic chapter rather than mechanically translating English grammar labels.

## Files changed in this run
- `src/data/abraham/b1/en/languageFocus.ts` — created with Chapter 1 English Language Focus.
- `src/data/abraham/b1/ar/languageFocus.ts` — created with Chapter 1 Arabic Language Focus.
- `src/data/abraham/b1/index.ts` — added book-local Language Focus imports and appended chapter-specific Language Focus after each chapter Quick Challenge when available.
- `docs/automation/b1-language-polish-progress.md` — updated.

## Validation actually performed
- Read the full Chapter 1 English story text from `src/data/abraham/b1/en/pages.ts`.
- Read the full Chapter 1 Arabic story text independently from `src/data/abraham/b1/ar/pages.ts`.
- Read both existing Chapter 1 Quick Challenges before authoring.
- Re-fetched the new English Language Focus from `preview` and confirmed four Chapter 1 activities are present.
- Re-fetched the new Arabic Language Focus from `preview` and confirmed four independently authored Chapter 1 activities are present.
- Re-fetched `src/data/abraham/b1/index.ts` after writing and confirmed active EN/AR wiring uses Quick Challenge plus chapter-specific Language Focus fallback.
- Story prose was not changed.
- No A2, B2, shared/global, Teacher Guide, Self Study Guide, Knowledge Check, Vocabulary Challenge, Language Review, or Final Challenge files were modified.

## Commits
- Chapter 1 English Language Focus: `e6eb41d0c3fd8ce35749b6aa4a9becf3aec8b041`
- Chapter 1 Arabic Language Focus: `be2326897029828661b8092b7be20c7feeca54d5`
- Chapter 1 active wiring: `465041d565985646961fc983914b0df27b0c123a`

## Exact next run
- Work on Abraham B1 Chapter 2 only.
- Read the full English and Arabic Chapter 2 texts independently.
- Read the existing Chapter 2 Quick Challenges in both languages.
- Author and wire Chapter 2 English and Arabic Language Focus only.
- Do not start Chapter 3 in the same run.

## Unresolved issues
- None identified for Chapter 1.
- Build/typecheck remains unverified because no executable runner was used in this run.
