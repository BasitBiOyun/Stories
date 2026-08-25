# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 13
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–12 English Language Focus: COMPLETE
- Chapters 1–12 Arabic Language Focus: COMPLETE

## Chapter 12 English decisions
- Read the full Chapter 12 English story and the active Chapter 12 Quick Challenge before authoring.
- Kept Language Focus separate from the Quick Challenge, which already interprets the contrast between the offerings as a lesson about sincerity and God-conscious intention.
- Chapter-specific B2 targets were derived from the actual English text:
  - contrast and simultaneity through repeated `while`
  - balanced outcome contrast through parallel passive clauses such as `was accepted ... was not accepted`
  - participant definition through the relative pattern `he whose offering was accepted...`
  - cause/result through `because of` and escalation in `This angered Qabil even further`
  - source boundaries and qualification through `without mentioning names`, `does not openly mention`, `according to the Qur’an`, and `Although we don’t know the whole story...`
- Productive work asks learners to write or say an 8–10 sentence non-story paragraph combining contrast, passive information focus, explicit cause and source-limiting language while keeping the conclusion inside the available evidence.

## Chapter 12 Arabic decisions
- Read the full Arabic Chapter 12 independently and used the active Arabic Quick Challenge as the comprehension boundary.
- Arabic activities were authored from Arabic-native structures rather than translated from English grammar labels:
  - المقابلة والتزامن في `بينما`
  - إبراز النتيجة في `فتقبل من أحدهما ولم يُتقبل من الآخر`
  - تعريف صاحب النتيجة في `من يُتقبل قربانه`
  - السبب والنتيجة في `بسبب` والتصعيد في `فزاد ذلك من غضبه`
  - حدود المصدر في `من غير ذكر الاسمين` و`لا يذكر صراحة` و`بحسب القرآن` و`مع أننا لا نعرف القصة كلها...`
- Productive work asks for an 8–10 sentence Arabic paragraph combining comparison, result focus, explicit cause and source qualification without exceeding the evidence introduced.

## Source fidelity / qualification decisions
- The Language Focus does not convert the Qur’anic source limits into stronger factual claims.
- The distinction between what the Qur’anic narration explicitly states, details associated with another source tradition, interpretation tied to a named framework, and acknowledged incomplete knowledge is preserved in both languages.
- The exercises do not claim that occupation or material type determines acceptance; the active Quick Challenge already establishes sincerity/God-consciousness as the relevant interpretive boundary.

## TYMM / B2 alignment
- Chapter 12 follows contextual noticing -> analysis of contrast, information focus, cause and source qualification -> contextual selection/reformulation -> coherent multi-sentence production.
- The work operates above isolated sentence drills by asking learners to track how grammar and discourse choices organise comparison, causality and evidential restraint across a whole paragraph.
- English and Arabic have equivalent B2 cognitive/discourse demand while using structures from their own source texts.
- No new TYMM lookup was necessary in this run because the established official B2 contextual grammaring principles directly covered these targets.

## Files added in this run
- `src/data/adam/b2/en/languageFocusChapter12.ts`
- `src/data/adam/b2/ar/languageFocusChapter12.ts`

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — now assembles Chapters 1–12 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — now assembles Chapters 1–12 Arabic Language Focus.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 13.

## Active wiring
- Existing Adam B2 index wiring already consumes the active English and Arabic Language Focus maps; no shared/global or index change was required.
- Chapter 12 is now present in both active Language Focus assemblers.

## Validation performed
- Re-fetched `src/data/adam/b2/en/languageFocusChapter12.ts` from `preview` and confirmed four English activities are present.
- Re-fetched `src/data/adam/b2/ar/languageFocusChapter12.ts` from `preview` and confirmed four independently authored Arabic activities are present.
- Active English and Arabic Language Focus assemblers were updated with Chapter 12 imports/spreads.
- Read the active English and Arabic Chapter 12 Quick Challenges and confirmed Language Focus does not duplicate their comprehension role.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 12 English Language Focus: `8e879171384c30be8c09b1953c825e9d5586fb01`
- Chapter 12 Arabic Language Focus: `c07089d0a5769539a3bb3bef86bf22bc486d8a15`
- English active wiring: `83f3527ec84b43424c692616f75a6f57c8a158de`
- Arabic active wiring: `2d2deef59df1fb93946256c9037bc32b3adbcdec`

## Next task
- Adam B2 Chapter 13 only.
- Read the full English and Arabic Chapter 13 texts and their active Quick Challenges, then manually author Chapter 13 Language Focus in both languages.
- Do not start Chapter 14 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 12 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
