# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 16
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–15 English Language Focus: COMPLETE
- Chapters 1–15 Arabic Language Focus: COMPLETE

## Chapter 15 status
- English Language Focus: COMPLETE
- Arabic Language Focus: COMPLETE
- Active EN/AR Language Focus assembly: COMPLETE
- Quick Challenge boundary checked: COMPLETE
- Story prose changed: NO
- Other assessment layers changed: NO

## Chapter 15 Language Focus decisions
- English targets: purpose + embedded how-clause/modal possibility, discourse shift from narrated event to interpretation, relative-clause cause/effect, parallel -ing choices, reduced passive characterisation, and contrast with `while`.
- Arabic targets: الغاية بـ`لـ`، إدماج الطريقة بـ`كيف`، الانتقال من السرد إلى التفسير بـ`وما يوصف هنا...`، الصلة لشرح الأثر، توازي المصادر، والمقابلة بـ`بينما`.
- English and Arabic were authored independently from their own chapter texts.
- Both productive tasks require a coherent 8–10 sentence B2 paragraph that clearly separates factual event description from interpretation.
- Language Focus does not duplicate the active Quick Challenge, which already assesses the broader consequences of choosing evil and the role of guidance.
- Source status is preserved: the Qur’anic quotation is treated as quoted source material, while `What is essentially being described here...` / `وما يوصف هنا...` is explicitly taught as the chapter writer’s interpretive framing rather than another quotation.

## Files added
- `src/data/adam/b2/en/languageFocusChapter15.ts`
- `src/data/adam/b2/ar/languageFocusChapter15.ts`

## Files updated
- `src/data/adam/b2/en/languageFocus.ts`
- `src/data/adam/b2/ar/languageFocus.ts`
- `docs/automation/b2-language-polish-progress.md`

## Validation performed
- Read the full English and Arabic Chapter 15 story texts from the active `preview` branch.
- Read the active English Chapter 15 Quick Challenge and confirmed its role is broader thematic comprehension rather than language analysis.
- Re-fetched both Chapter 15 Language Focus files and confirmed four activities in each language.
- Re-fetched both active Language Focus assemblers and confirmed Chapter 15 imports/spreads are active.
- Confirmed no shared/global file change was required.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 15 English Language Focus: `521449e4d627c360f16b3865ab45ff314bf175e8`
- Chapter 15 Arabic Language Focus: `d0dd96da707b214988e9b8424728e56debe6a460`
- English active wiring: `6cf833c3cdbfedbce0ec955848ef22a3aa59c45e`
- Arabic active wiring: `710d38e9a08d64afc57de47da858e96974a38f5c`

## Next task
- Adam B2 Chapter 16 only.
- Read the full English and Arabic Chapter 16 texts and their active Quick Challenges, then manually author Chapter 16 Language Focus in both languages.
- Do not start Chapter 17 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 15 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
