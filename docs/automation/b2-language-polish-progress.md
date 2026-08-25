# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 10
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–9 English Language Focus: COMPLETE
- Chapters 1–9 Arabic Language Focus: COMPLETE

## Chapter 9 English decisions
- Read the full Chapter 9 English story section and the active Chapter 9 Quick Challenge before authoring.
- Kept Language Focus separate from the Quick Challenge, which already defines moral recovery through recognizing the wrong and turning immediately to Allah.
- Chapter-specific B2 targets are grounded in the actual English text:
  - internal recognition in `Adam severely regretted what he had done.`
  - prompt response in `He immediately turned towards Allah.`
  - explicit cause/result in `His regret itself was the reason for Allah’s mercy upon him.` and `so his Lord pardoned him`
  - acknowledgment of responsibility in `Our Lord, we have done wrong to ourselves.`
  - condition/consequence in `Unless You forgive us ... we will be among the losers.`
  - shift from description of human vulnerability to modal obligation in `humans are open to sinning...` -> `they must recognize their mistakes, seek the fault within themselves, and immediately turn towards Allah`
- Productive work asks learners to write an 8–10 sentence responsibility-and-recovery paragraph using acknowledgment, condition/consequence, cause/result, obligation and a concrete corrective action rather than retelling the story.

## Chapter 9 Arabic decisions
- Read the Arabic Chapter 9 section independently and used the active Arabic Quick Challenge as the comprehension boundary.
- Arabic activities were authored from Arabic-native structures rather than translated from English grammar labels:
  - الندم بوصفه إدراكا داخليا للخطأ
  - الرجوع/التوبة بوصفهما تغييرا فعليا في الاتجاه
  - التسلسل في `فتلقى آدم من ربه كلمات` ثم `فتاب عليه`
  - الاعتراف المباشر في `ربنا ظلمنا أنفسنا`
  - الشرط المنفي في `وإن لم تغفر لنا`
  - النتيجة المؤكدة في `لنكونن من الخاسرين`
  - الانتقال من إمكان الخطأ إلى الواجب باستخدام صيغ من نوع `قد...` ثم `يجب أن...`
- Productive work asks for an 8–10 sentence Arabic paragraph combining الاعتراف، الشرط والنتيجة، السبب، الواجب، والفعل التصحيحي in a non-story context.

## TYMM / B2 alignment
- Chapter 9 follows contextual noticing/discovery -> analysis of cause, condition, modality and responsibility -> contextual selection/reformulation -> coherent multi-sentence production.
- Tasks operate above isolated grammar transformation by connecting stance, consequence, obligation and corrective action across a paragraph.
- English and Arabic have equivalent B2 cognitive demand while using structures from their own source texts.
- No new TYMM lookup was necessary in this run because the established official B2 contextual grammaring principles directly covered these targets.

## Files added in this run
- `src/data/adam/b2/en/languageFocusChapter9.ts`
- `src/data/adam/b2/ar/languageFocusChapter9.ts`

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — now assembles Chapters 1–9 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — now assembles Chapters 1–9 Arabic Language Focus.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 10.

## Active wiring
- `src/data/adam/b2/index.ts` already imports `adamB2LanguageFocusExercises` and `adamB2LanguageFocusExercisesAr`; no index change was needed.
- Existing story-page wiring continues to attach Language Focus separately from Quick Challenge.

## Validation performed
- Re-fetched `src/data/adam/b2/en/languageFocusChapter9.ts` from `preview` and confirmed four English activities are present.
- Re-fetched `src/data/adam/b2/ar/languageFocusChapter9.ts` from `preview` and confirmed four independently authored Arabic activities are present.
- Re-fetched both active `languageFocus.ts` assemblers and confirmed Chapter 9 is imported and spread into the active exercise maps.
- Read the active English and Arabic Chapter 9 Quick Challenges and confirmed Language Focus does not duplicate their comprehension role.
- Confirmed the English target language is grounded in the Chapter 9 repentance section of the canonical Adam B2 story.
- Confirmed the Arabic targets use source-native repentance, condition and obligation language rather than mechanically mirroring English forms.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 9 English Language Focus: `17534ed995339200adadcece040b128526cccf3c`
- Chapter 9 Arabic Language Focus: `eb87bfa5c895984053fd2fa50b456ade08bc03fb`
- English active wiring: `ea75e573b220d157afdf21eb638c6b334d691bc5`
- Arabic active wiring: `08af2d9d8ea9c61aa7778cce31cb76f0ecbb083c`

## Next task
- Adam B2 Chapter 10 only.
- Read the full English and Arabic Chapter 10 texts and their active Quick Challenges, then manually author Chapter 10 Language Focus in both languages.
- Do not start Chapter 11 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 9 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
