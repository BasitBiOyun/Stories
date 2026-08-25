# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 8
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–7 English Language Focus: COMPLETE
- Chapters 1–7 Arabic Language Focus: COMPLETE

## Chapter 7 English decisions
- Read the full English Chapter 7 story and the active English Quick Challenge before authoring.
- Kept Language Focus separate from the active Quick Challenge, which already asks why Satan's strategy succeeds by exploiting vulnerability and appearing sincere.
- Chapter-specific B2 targets are grounded in the actual English text:
  - present-simple generalisation in `man tends to forget`, `His heart changes`, `his determination weakens`
  - movement from a general human tendency to a specific narrative application in `He took advantage of Adam's humanity`
  - motive with `because he thought...`
  - purpose with `to remove...` and `to manipulate...`
  - accompanying/continuing attempt with `trying to persuade both`
  - imagined consequence in `What will happen if I eat...?`
  - uncertainty/epistemic possibility in `It might truly be...`
  - earlier-past reference in `had warned`
  - immediate past sequence in `As soon as Adam had finished eating...`
- Productive work asks learners to construct an 8–10 sentence vulnerability -> persuasion -> possibility -> decision -> consequence paragraph without retelling the forbidden-tree event.

## Chapter 7 Arabic decisions
- Read the full Arabic Chapter 7 independently and used the active Arabic Quick Challenge as the comprehension boundary.
- Arabic activities were authored from Arabic-native structures rather than translated from English grammar labels:
  - التعميم الخبري في `الإنسان يميل إلى النسيان` / `فقلبه يتقلب` / `وعزمه يضعف`
  - الانتقال من العام إلى الخاص في `فاستغل الشيطان بشرية آدم`
  - السبب بـ`لأنه`
  - الغاية بلام التعليل في `ليُبعد...` / `ليخدعه`
  - الحال الدالة على المحاولة المستمرة في `محاولا إقناعهما`
  - الافتراض بـ`لو`
  - الاحتمال بـ`لعل`
  - استرجاع التحذير السابق في `ونسيا أن الله حذرهما...`
  - العلاقة الزمنية المباشرة في `ما إن... حتى...`
- Productive work asks for an 8–10 sentence Arabic paragraph that organises a general human tendency, motive, purpose, possibility, prior context and immediate consequence without retelling the chapter event.

## TYMM / B2 alignment
- Chapter 7 follows contextual noticing/discovery -> analysis of discourse function -> contextual selection/interpretation -> coherent multi-sentence production.
- The work operates above isolated sentence transformation by combining generalisation, cause/purpose, epistemic possibility and narrative-time relations across a coherent passage.
- English and Arabic have equivalent B2 cognitive demand while using language-native structures from their own source texts.
- No new TYMM lookup was necessary in this run because the established official B2 contextual grammaring principles already directly covered these targets.

## Files added in this run
- `src/data/adam/b2/en/languageFocusChapter7.ts`
- `src/data/adam/b2/ar/languageFocusChapter7.ts`

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — now assembles Chapters 1–7 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — now assembles Chapters 1–7 Arabic Language Focus.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 8.

## Active wiring
- `src/data/adam/b2/index.ts` continues importing `adamB2LanguageFocusExercises` and `adamB2LanguageFocusExercisesAr`; no index change was needed.
- Existing story-page wiring continues to attach Language Focus separately from Quick Challenge.

## Validation performed
- Re-fetched `src/data/adam/b2/en/languageFocusChapter7.ts` from `preview` and confirmed four English activities are present.
- Re-fetched `src/data/adam/b2/ar/languageFocusChapter7.ts` from `preview` and confirmed four independently authored Arabic activities are present.
- Confirmed the English target expressions come from the actual Chapter 7 English story.
- Confirmed the Arabic target expressions come from the actual Chapter 7 Arabic story.
- Read the active English and Arabic Chapter 7 Quick Challenges and confirmed Language Focus does not duplicate their comprehension role.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 7 English Language Focus: `4950f4a36c45218bbf975785741d1113489392f7`
- Chapter 7 Arabic Language Focus: `c57d84590fc76c656cbf46bae1298cc982789ad9`
- English active wiring: `e571dd0dfc8aef9a28c63315cba3d1cf5c33ecf5`
- Arabic active wiring: `b7d88ed7ac908d040649b6a4e826063e92564412`

## Next task
- Adam B2 Chapter 8 only.
- Read the full English and Arabic Chapter 8 texts and their active Quick Challenges, then manually author Chapter 8 Language Focus in both languages.
- Do not start Chapter 9 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 7 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
