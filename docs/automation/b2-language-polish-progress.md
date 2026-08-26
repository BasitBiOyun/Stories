# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 14
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–13 English Language Focus: COMPLETE
- Chapters 1–13 Arabic Language Focus: COMPLETE

## Chapter 13 English decisions
- Read the full Chapter 13 English story and the active Chapter 13 Quick Challenge before authoring.
- Kept Language Focus separate from the Quick Challenge, which already interprets Habil’s refusal to answer violence with violence as self-control, fear of Allah, compassion and moral independence from Qabil’s threat.
- Chapter-specific B2 targets were derived from the actual English text:
  - concession and contrast through `although`, `however`, explicit character contrast and `but also`
  - modal/evaluative restraint through `may seem` and human possibility through `can be`
  - purpose/intended effect through `Hoping to lessen...`
  - recommendation through `It is better that...`
  - condition -> consequence through `But if you do not, then...`
  - explicit responsibility through `You alone will bear the consequence...`
- Productive work asks learners to write or say an 8–10 sentence non-story conflict-response paragraph combining concession, modal stance, purpose, recommendation and a logical condition-consequence chain.

## Chapter 13 Arabic decisions
- Read the full Arabic Chapter 13 independently and used the active Arabic Quick Challenge as the comprehension boundary.
- Arabic activities were authored from Arabic-native structures rather than translated from English grammar labels:
  - الإقرار والمقابلة في `مع أنه... فإن...` والاستدراك بـ`ولكن`
  - ضبط الحكم والاحتمال في `قد يبدو` و`قد يكون`
  - الغاية في `آملا أن يخفف...`
  - تقديم البديل في `والأفضل لك أن...`
  - الشرط والنتيجة في `ولكن إن لم تفعل، فسأترك...`
  - تحميل المسؤولية في `وأنت وحدك ستتحمل عاقبة...`
- Productive work asks for an 8–10 sentence Arabic paragraph that uses concession, non-categorical stance, purpose, an alternative course and a condition-consequence relationship coherently.

## Source fidelity / qualification decisions
- The Language Focus does not turn `may seem`, `can be`, `قد يبدو` or `قد يكون` into universal claims about all people.
- The exercises preserve the chapter’s distinction between human potential for good/evil and responsibility to control thoughts, actions and desires.
- The Quick Challenge’s moral interpretation of Habil’s non-aggression was not reused as the Language Focus target.

## TYMM / B2 alignment
- Chapter 13 follows contextual noticing -> discourse-function analysis -> stance/relationship interpretation -> contextual selection -> coherent multi-sentence production.
- The work operates above isolated grammar drills by requiring learners to track concession, evaluation, purpose, recommendation and consequence across a paragraph-level argument.
- English and Arabic have equivalent B2 cognitive/discourse demand while using structures from their own source texts.
- No new TYMM lookup was necessary in this run because the established official B2 contextual grammaring principles directly covered these targets.

## Files added in this run
- `src/data/adam/b2/en/languageFocusChapter13.ts`
- `src/data/adam/b2/ar/languageFocusChapter13.ts`

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — now assembles Chapters 1–13 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — now assembles Chapters 1–13 Arabic Language Focus.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 14.

## Active wiring
- Existing Adam B2 index wiring already consumes the active English and Arabic Language Focus maps; no shared/global or index change was required.
- Chapter 13 is now present in both active Language Focus assemblers.

## Validation performed
- Re-fetched `src/data/adam/b2/en/languageFocusChapter13.ts` from `preview` and confirmed four English activities are present.
- Re-fetched `src/data/adam/b2/ar/languageFocusChapter13.ts` from `preview` and confirmed four independently authored Arabic activities are present.
- Re-fetched both active Language Focus assemblers and confirmed Chapter 13 imports/spreads are active.
- Read the active English and Arabic Chapter 13 Quick Challenges and confirmed Language Focus does not duplicate their comprehension role.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 13 English Language Focus: `26cdea46e22856c05b452ce790341cf0dce530f7`
- Chapter 13 Arabic Language Focus: `a8ca76b586eabf56ddba5edd182207b2b5a53307`
- English active wiring: `5875ece7a8fa0b1461f766934add83dd7605032c`
- Arabic active wiring: `dc4532bc84ece60d5264db1b32575543be92f13d`

## Next task
- Adam B2 Chapter 14 only.
- Read the full English and Arabic Chapter 14 texts and their active Quick Challenges, then manually author Chapter 14 Language Focus in both languages.
- Do not start Chapter 15 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 13 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
