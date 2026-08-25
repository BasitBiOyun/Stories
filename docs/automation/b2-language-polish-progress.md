# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 9
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–8 English Language Focus: COMPLETE
- Chapters 1–8 Arabic Language Focus: COMPLETE

## Chapter 8 English decisions
- Read the full English Chapter 8 story and the active English Quick Challenge before authoring.
- Kept Language Focus separate from the Quick Challenge, which already asks learners to infer that the immediate attempt to cover themselves shows hayâ/modesty as an inborn human feature.
- Chapter-specific B2 targets are grounded in the actual English text:
  - narrative progression through `when they tasted the tree` -> `their nakedness became evident` -> `so they both started...`
  - manner/urgency in `They were in haste to hide...`
  - discourse functions of questions in `Did I not forbid you...?` and `Are you running away from Me?`
  - corrective contrast in `No, my Lord, but I am shy of You.`
  - urgent repeated direct speech in `Forgiveness! Forgiveness!`
  - source boundaries in `This tree is not described in the Holy Qur'an`
  - restriction of explicit textual content in `It is only mentioned that...`
  - attributed interpretation in `According to Islamic scholars...`
  - clarification in `that is, before he became a prophet`
- Productive work asks learners to write an 8–10 sentence source-aware explanatory paragraph that separates explicit evidence, an unspecified detail, attributed interpretation and clarification, while also using a question and a `No ... but ...` correction pattern.

## Chapter 8 Arabic decisions
- Read the full Arabic Chapter 8 independently and used the active Arabic Quick Challenge as the comprehension boundary.
- Arabic activities were authored from Arabic-native structures rather than translated from English grammar labels:
  - العلاقة الزمنية في `فلما ذاقا الشجرة`
  - النتيجة في `بدت لهما سوآتهما`
  - الشروع والاستمرار في `وطفقا يخصفان...`
  - الغاية بلام التعليل في `ليسترا نفسيهما`
  - الاستفهام التذكيري في `ألم أنهكما عن تلكما الشجرة؟`
  - اختبار التفسير في `أفِرارا مني؟`
  - التصحيح بـ`لا... ولكن...`
  - الطلب المباشر الملح في `اغفر لي! اغفر لي!`
  - نفي التحديد في `لم يصفها القرآن الكريم`
  - القصر بـ`وإنما ذكر أن...`
  - نسبة الرأي في `ويرى علماء الإسلام أن...`
  - التوضيح بـ`أي قبل أن...`
- Productive work asks for an 8–10 sentence Arabic paragraph that keeps source statement, source omission, attributed interpretation and clarification distinct, using Arabic-native attribution and correction patterns.

## TYMM / B2 alignment
- Chapter 8 follows contextual noticing/discovery -> analysis of discourse function and source responsibility -> contextual selection/reformulation -> coherent multi-sentence production.
- The tasks operate above isolated sentence transformation by combining narrative sequencing, speech-act interpretation, source attribution, qualification and clarification.
- English and Arabic have equivalent B2 cognitive demand while using structures from their own source texts.
- No new TYMM lookup was necessary in this run because the established official B2 contextual grammaring and source-fidelity principles directly covered these targets.

## Files added in this run
- `src/data/adam/b2/en/languageFocusChapter8.ts`
- `src/data/adam/b2/ar/languageFocusChapter8.ts`

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — now assembles Chapters 1–8 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — now assembles Chapters 1–8 Arabic Language Focus.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 9.

## Active wiring
- `src/data/adam/b2/index.ts` continues importing `adamB2LanguageFocusExercises` and `adamB2LanguageFocusExercisesAr`; no index change was needed.
- Existing story-page wiring continues to attach Language Focus separately from Quick Challenge.

## Validation performed
- Re-fetched `src/data/adam/b2/en/languageFocusChapter8.ts` from `preview` and confirmed four English activities are present.
- Re-fetched `src/data/adam/b2/ar/languageFocusChapter8.ts` from `preview` and confirmed four independently authored Arabic activities are present.
- Re-fetched both active `languageFocus.ts` assemblers and confirmed Chapter 8 is imported and spread into the active exercise maps.
- Confirmed the English target expressions come from the actual Chapter 8 English story.
- Confirmed the Arabic target expressions come from the actual Chapter 8 Arabic story.
- Read the active English and Arabic Chapter 8 Quick Challenges and confirmed Language Focus does not duplicate their comprehension role.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 8 English Language Focus: `743e12bd70c567710f7634181994d071ec198772`
- Chapter 8 Arabic Language Focus: `a326d0ac27e900b3bc6f3631d7af6b5ed3e323c0`
- English active wiring: `964e3da469bd494b84d1a1bc431d076d20eab0f3`
- Arabic active wiring: `333014c606cf0cad4f63ddee7a958c45212a31c0`

## Next task
- Adam B2 Chapter 9 only.
- Read the full English and Arabic Chapter 9 texts and their active Quick Challenges, then manually author Chapter 9 Language Focus in both languages.
- Do not start Chapter 10 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 8 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
