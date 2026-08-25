# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 7
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–6 English Language Focus: COMPLETE
- Chapters 1–6 Arabic Language Focus: COMPLETE

## Chapter 6 English decisions
- Read the full English Chapter 6 story and the active English Quick Challenge before authoring.
- Kept Language Focus separate from the active sequencing Quick Challenge, which already asks learners to order the movement from life in Paradise to Satan's declared opposition.
- Chapter-specific B2 targets are grounded in the actual English text:
  - permission/state with `inhabit the Garden`
  - broad permission with `eat whatever you wish`
  - prohibition/boundary with `do not approach this tree`
  - time-limited request for permission with `allow me until...`
  - contrastive framing with `While Satan... Adam ... took a path completely different...`
  - discourse progression with `Then I will...`
  - parallel spatial phrasing: `from before ... behind ... right ... left`
  - repeated future forms as declared determination/stance rather than future time alone
- Productive work asks for a 7–9 sentence contrast between two diverging paths using boundary language, `while`, future intention and parallelism without retelling the Quick Challenge sequence.

## Chapter 6 Arabic decisions
- Read the full Arabic Chapter 6 independently and used the active Arabic sequencing Quick Challenge as a boundary.
- Arabic activities were authored from Arabic-native structures rather than translated from English categories:
  - الأمر والإباحة: `اسكن` / `فكلا من حيث شئتما`
  - النهي والحد: `ولا تقربا هذه الشجرة`
  - طلب الإمهال المقيد: `فأنظرني إلى يوم...`
  - المقابلة بـ`بينما` مع `سلك ... طريقا مختلفا تماما`
  - التدرج بـ`ثم`
  - التوازي التركيبي في `من بين أيديهم ومن خلفهم وعن أيمانهم وعن شمائلهم`
  - صيغ التوكيد المستقبلية مثل `لأقعدن / لآتينهم / لأغوينهم` بوصفها دالة على العزم والموقف
- Productive work asks for a coherent Arabic contrast between two paths using permission/boundary language, `بينما`, emphatic future intention and parallel structure.

## TYMM / B2 alignment
- Chapter 6 follows contextual noticing/discovery -> discourse-function analysis -> contextual selection/interpretation -> coherent production.
- The work operates above isolated sentence transformation by analysing modality, contrast, stance and parallel organisation across the passage.
- English and Arabic have equivalent B2 cognitive demand while using language-native structures from their own source texts.

## Files added in this run
- `src/data/adam/b2/en/languageFocusChapter6.ts`
- `src/data/adam/b2/ar/languageFocusChapter6.ts`

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — now assembles Chapters 1–6 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — now assembles Chapters 1–6 Arabic Language Focus.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 7.

## Active wiring
- `src/data/adam/b2/index.ts` continues importing `adamB2LanguageFocusExercises` and `adamB2LanguageFocusExercisesAr`; no index change was needed.
- The existing story-page wiring therefore continues to attach Language Focus separately from Quick Challenge.

## Validation performed
- Re-fetched `src/data/adam/b2/en/languageFocusChapter6.ts` from `preview` and confirmed four English activities are present.
- Re-fetched `src/data/adam/b2/ar/languageFocusChapter6.ts` from `preview` and confirmed four independently authored Arabic activities are present.
- Confirmed the English source expressions are grounded in the actual Chapter 6 English story.
- Confirmed the Arabic source expressions are grounded in the actual Chapter 6 Arabic story.
- Read the active English and Arabic Chapter 6 Quick Challenges and confirmed Language Focus does not duplicate their sequencing role.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 6 English Language Focus: `70a2ea833c7fe1f324e33ee3b28c004ab3580f0f`
- Chapter 6 Arabic Language Focus: `d0e351eaadd4694beee70d698a696a599b228de3`
- English active wiring: `a87556813fc619f7bb23f6c5c7a39fb1d4153eed`
- Arabic active wiring: `1b47aa32a3119e45b1a932249b0670fa83213b3c`

## Next task
- Adam B2 Chapter 7 only.
- Read the full English and Arabic Chapter 7 texts and their active Quick Challenges, then manually author Chapter 7 Language Focus in both languages.
- Do not start Chapter 8 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 6 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
