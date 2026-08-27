# B1 Language Polish Progress

currentBook: Mecca/Bilal B1
bookPath: `src/data/mecca/b1`
phase: LANGUAGE_FOCUS
storyChapterCount: 15
nextChapter: 10
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
nextTask: COMPLETE_MECCA_BILAL_B1_CHAPTER_10_LANGUAGE_FOCUS

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
### Chapters 1–9
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active book-local wiring: COMPLETE via `page.languageFocusExercises`.

### Chapter 9 English pedagogical targets
- Variation according to circumstance through `depending on their wealth and family`.
- Past ability/possibility through `could run their own businesses`.
- Contrast through `However` between different social situations.
- Reason through `because they wanted sons to increase their power in society`.
- Information focus through passive `were bought and sold`, foregrounding the people affected rather than the actor.
- Addition through `also`.
- Parallel verb structure in `kept ... alive, praised ..., and criticized ...` to present several social functions compactly.
- Explanatory comparison through `poets were like the media of the people`.
- Productive transfer: six connected non-story B1 sentences combining variation, contrast, reason, passive focus, parallel functions and comparison.
- Chapter 9 Quick Challenge already tests the comparison between women’s social positions and slavery as severe inequality; Language Focus therefore trains how the chapter constructs variation, contrast, cause, information focus and social-function description rather than retesting that comprehension answer.

### Chapter 9 Arabic pedagogical targets
- Variation through `بناء على ثرواتهن وعائلاتهن`.
- Past ability through `كُنَّ يستطعن أن يُدِرْنَ...`.
- Contrast through `ومع ذلك`.
- Escalation/correction through `بل` when the text moves to a more severe example.
- Information focus through passive `يُباعون ويُشترون`, foregrounding what happens to the affected people.
- Functional definition through `كان الشعراء هم إعلام ذلك الوقت`.
- Result/continuation through `فكان الشعر...` and coordinated function description.
- Productive transfer: six connected Arabic sentences using variation, contrast, `بل`, passive focus, functional definition and parallel functions in a different context.
- Arabic activities were authored independently from the Arabic chapter rather than mechanically translated from English.

## Files changed in this run
- `src/data/mecca/b1/en/languageFocusChapter9.ts` — added Chapter 9 English Language Focus.
- `src/data/mecca/b1/ar/languageFocusChapter9.ts` — added Chapter 9 Arabic Language Focus.
- `src/data/mecca/b1/index.ts` — wired Chapter 9 EN/AR sets through the merged Language Focus maps while preserving Chapters 1–8.
- `docs/automation/b1-language-polish-progress.md` — advanced checkpoint to Chapter 10.

## Commits
- English Chapter 9 Language Focus: `261a1caa0595dd718681f0af1b95824a6ad3ee8a`
- Arabic Chapter 9 Language Focus: `fc877301bc1a21efd0f8362651ebaad37d6e39ee`
- Chapter 9 active wiring: `999e33a92868c1dfe0588e2ba6da61b4add2da85`
- Preview HEAD immediately before checkpoint write: `999e33a92868c1dfe0588e2ba6da61b4add2da85`

## Validation actually performed
- Read the full Chapter 9 English story text from `src/data/mecca/b1/en/pages.ts`.
- Read the full Chapter 9 Arabic story text independently from `src/data/mecca/b1/ar/pages.ts`.
- Read the active English and Arabic Chapter 9 Quick Challenges before authoring.
- Confirmed Quick Challenge tests social-position inequality, while Language Focus targets variation, contrast, cause, passive information focus and social-function description.
- Confirmed the new English and Arabic Chapter 9 files did not exist on `preview` before creation.
- Re-fetched both new Chapter 9 files after creation and confirmed four activities are present in each language.
- Re-fetched `src/data/mecca/b1/index.ts` immediately before the wiring write and again after the write.
- Chapter 9 English and Arabic sets are merged into the active Language Focus maps and exposed through `page.languageFocusExercises`.
- Chapters 1–8 Language Focus wiring remains intact.
- Story prose was not changed.
- No A2, B2, shared/global, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide, or Self Study Guide file was modified.
- No executable build/typecheck/CI runner was used, so no build/typecheck/CI pass is claimed.

## Exact next run
- Work on Mecca/Bilal B1 Chapter 10 only.
- Read the full English and Arabic Chapter 10 texts independently.
- Read the existing Chapter 10 Quick Challenges in both languages.
- Author Chapter 10 English and Arabic Language Focus only.
- Preserve current book-local wiring and do not start Chapter 11 in the same run.

## Unresolved issues
- None identified for Mecca/Bilal B1 Chapter 9.
- Build/typecheck remains unverified because no executable runner was used.
