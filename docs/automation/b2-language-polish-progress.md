# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 11
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–10 English Language Focus: COMPLETE
- Chapters 1–10 Arabic Language Focus: COMPLETE

## Chapter 10 English decisions
- Read the full Chapter 10 English story and the active Chapter 10 Quick Challenge before authoring.
- Kept Language Focus separate from the Quick Challenge, which already checks the interpretation that descent was not merely humiliation but part of an honourable vicegerency/settlement.
- Chapter-specific B2 targets were derived from the actual English text:
  - past viewpoint + later event in `knew that ... would eat ... and descend` and `knew that Satan would...`
  - retrospective evaluation in `That experience was essential...`
  - intended function in `It was meant to teach...`
  - corrective contrast in `did not imply dishonour or humiliation, but rather...`
  - source attribution and evidential distance across `There are many hadiths...`, `Ibn Abbas ... said`, `It is also reported that...`, `It is said to have...`, and `Ibn Umar said...`
- Productive work asks learners to write an 8–10 sentence non-story paragraph combining past viewpoint, purpose, corrective reframing and differentiated source attribution without upgrading reported claims into certain facts.

## Chapter 10 Arabic decisions
- Read the full Arabic Chapter 10 independently and used the active Arabic Quick Challenge as the comprehension boundary.
- Arabic activities were authored from Arabic-native structures rather than translated from English grammar labels:
  - المنظور السابق في `كان الله يعلم...` مع `سيأكلان / يهبطان / سينتهك`
  - التقييم في `وكانت تلك تجربة ضرورية...`
  - الغاية في `وكان المقصود منها أن يتعلم...`
  - المقابلة التصحيحية في `لم يكن... بل كان...`
  - الإسناد ودرجات التقرير في `هناك أحاديث كثيرة... / قال ابن عباس... / روي أيضا أن... / يقال إنه... / قال ابن عمر...`
- Productive work asks for an 8–10 sentence Arabic paragraph using viewpoint, purpose, corrective contrast and at least two distinct reporting frames while preserving certainty boundaries.

## TYMM / B2 alignment
- Chapter 10 follows contextual noticing/discovery -> analysis of viewpoint, purpose, corrective contrast and source distance -> contextual interpretation/selection -> coherent multi-sentence production.
- The source-attribution tasks explicitly preserve the distinction between named attribution, impersonal reporting and unqualified assertion.
- English and Arabic have equivalent B2 cognitive/discourse demand while using structures from their own source texts.
- No new TYMM lookup was necessary in this run because the established official B2 contextual grammaring principles directly covered these targets.

## Files added in this run
- `src/data/adam/b2/en/languageFocusChapter10.ts`
- `src/data/adam/b2/ar/languageFocusChapter10.ts`

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — now assembles Chapters 1–10 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — now assembles Chapters 1–10 Arabic Language Focus.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 11.

## Active wiring
- Existing Adam B2 index wiring already consumes the active English and Arabic Language Focus maps; no shared/global or index change was required.
- Chapter 10 is now present in both active Language Focus assemblers.

## Validation performed
- Re-fetched `src/data/adam/b2/en/languageFocusChapter10.ts` from `preview` and confirmed four English activities are present.
- Re-fetched `src/data/adam/b2/ar/languageFocusChapter10.ts` from `preview` and confirmed four independently authored Arabic activities are present.
- Re-fetched both active `languageFocus.ts` assemblers and confirmed Chapter 10 is imported and spread into the active exercise maps.
- Read the active English and Arabic Chapter 10 Quick Challenges and confirmed Language Focus does not duplicate their comprehension role.
- Confirmed source qualification is preserved: reported locations and Black Stone details remain attributed/reported rather than converted into unqualified facts.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.
- Preview HEAD immediately before this checkpoint update: `7841820d737db1ba7b43273dd404a2ee9ca0f288`.

## Commits
- Chapter 10 English Language Focus: `41c67c9c936ffc153489bf0246ae7adac37d6bac`
- Chapter 10 Arabic Language Focus: `212a814a66aae400de0e29f1afd5d06460dccbd0`
- English active wiring: `4e500600bb2e9a3252b967f0543b8648994fffa1`
- Arabic active wiring: `7841820d737db1ba7b43273dd404a2ee9ca0f288`

## Next task
- Adam B2 Chapter 11 only.
- Read the full English and Arabic Chapter 11 texts and their active Quick Challenges, then manually author Chapter 11 Language Focus in both languages.
- Do not start Chapter 12 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 10 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
