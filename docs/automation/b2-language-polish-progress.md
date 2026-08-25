# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 5
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE
- Chapter 3 English Language Focus: COMPLETE
- Chapter 3 Arabic Language Focus: COMPLETE
- Chapter 4 English Language Focus: COMPLETE
- Chapter 4 Arabic Language Focus: COMPLETE

## Chapter 4 English decisions
- Read the full English Chapter 4 story and the active English Quick Challenge before authoring.
- Kept Language Focus separate from the Quick Challenge, which already tests why worldly knowledge and revelation complete one another.
- Targets are grounded in the chapter's own discourse:
  - contrastive shift with `However`
  - rejection-and-replacement with `not alternatives ... but rather ...`
  - grouping with `both types of knowledge`
  - parallel necessity/function with `One is necessary ... and revelation is essential ...`
  - purpose links with `necessary to maintain...` / `essential to understand...`
  - consequence and transition from explanatory argument into the prostration narrative
- Productive work asks learners to construct a 6–8 sentence complementarity argument about two different but jointly useful resources, without retelling the Quick Challenge answer.

## Chapter 4 Arabic decisions
- Read the full Arabic Chapter 4 independently and read the active Arabic Quick Challenge.
- Arabic activities were authored from Arabic-native structures rather than translated from English.
- Targets are grounded in the Arabic chapter:
  - contrastive transition with `ومع ذلك`
  - denial of substitution and assertion of complementarity with `لا يغني أحدهما عن الآخر، بل يكمل أحدهما الآخر`
  - balanced function contrast with `فأحدهما ضروري... أما الوحي فهو ضروري...`
  - grouping with `هذين النوعين من العلم`
  - purpose and necessity with `ضروري ليستمر...` / `ضروري لفهم...`
  - causal/result transition with `جعلا حتى الملائكة يسجدون...`
- Productive work asks for a 6–8 sentence Arabic argument that distinguishes difference from opposition and uses contrast to build complementarity.

## TYMM / B2 alignment
- Current B2 architecture continues contextual noticing/discovery -> analysis of meaning/function/discourse effect -> contextual selection/reformulation -> coherent spoken/written production.
- Chapter 4 develops B2 control of contrast, complementarity, necessity and discourse progression rather than isolated grammar manipulation.
- Learners move from identifying how contrast works, to analysing different functions, to meaning-preserving reformulation, then to paragraph-level production.

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — added Chapter 4 English Language Focus.
- `src/data/adam/b2/ar/languageFocus.ts` — added Chapter 4 Arabic Language Focus.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 5.

## Active wiring
- `src/data/adam/b2/index.ts` already imports the English and Arabic Language Focus records and attaches `languageFocusExercises[page.id]` separately from the active Quick Challenge for story pages.
- No Chapter-4-specific index change was required.

## Validation performed
- Re-fetched the English Chapter 4 Language Focus from `preview` and confirmed four new activities are present.
- Re-fetched the Arabic Chapter 4 Language Focus from `preview` and confirmed four independently authored Arabic activities are present.
- Confirmed Chapter 4 Language Focus does not duplicate the active Quick Challenge's comprehension/synthesis role.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub file actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapter 1 English Language Focus: `0232f84978fe0089643f424152f96b99e4858b13`
- Chapter 1 Arabic Language Focus: `be8547a010390d6c08ebdc9b19575a225af6fafd`
- Chapter 1 active wiring: `eab64f62373de6a8bc821cad87c840eee0972fab`
- Chapter 2 English Language Focus: `1082d225023bcf537d9d136257e300d647b2f77b`
- Chapter 2 Arabic Language Focus: `b3aa10a33e7eb9f2c2b72051c592609020bb6b30`
- Chapter 3 English Language Focus: `13608f5d4cf3bb7ca7a54880d640bdeb0563b89a`
- Chapter 3 Arabic Language Focus: `07c522c83a5c63dcdbedd297e04d29f0179c9db6`
- Chapter 4 English Language Focus: `e5e700b5b9da535bc44e0d0c184829a37d38bfaf`
- Chapter 4 Arabic Language Focus: `b7f330d375037c8bd2f45f80428e0358118e9872`

## Next task
- Adam B2 Chapter 5 only.
- Read the full English and Arabic Chapter 5 texts and their active Quick Challenges, then manually author Chapter 5 Language Focus in both languages.
- Do not start Chapter 6 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 4 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
