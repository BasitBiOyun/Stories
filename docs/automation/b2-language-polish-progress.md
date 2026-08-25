# B2 Language Polish Progress

currentBook: Adam B2
phase: LANGUAGE_FOCUS
nextChapter: 6
completedBooks: []

## Adam B2 chapter count
- Story chapters: 17

## Completed chapters
- Chapters 1–5 English Language Focus: COMPLETE
- Chapters 1–5 Arabic Language Focus: COMPLETE

## Chapter 5 English decisions
- Read the full English Chapter 5 story and the active English Quick Challenge before authoring.
- Kept Language Focus separate from the Quick Challenge. The Quick Challenge already asks what the angels' prostration signifies, so Language Focus does not retest that answer.
- Targets are grounded in Chapter 5 discourse:
  - clarification/definition with `which is...`
  - restatement with `in other words...`
  - specification with `that is...`
  - scope extension with `All kinds of ... are included in this`
  - causal explanation with `because`
  - contrastive viewpoint shift with `On the other hand`
  - counter-evidence with `yet`
  - hidden-to-visible development in `unapparent arrogance came to the surface`
- Reformulation work preserves the chapter's reasoning about how an origin-based superiority claim is constructed and challenged without simply repeating the Quick Challenge.
- Productive work asks learners to expose and challenge a weak criterion in a 6–8 sentence B2 argument using clarification, cause and contrast.

## Chapter 5 Arabic decisions
- Read the full Arabic Chapter 5 independently and used the active Arabic Quick Challenge as a boundary. The Arabic Quick Challenge already analyses the flaw in Iblis's comparison, so Language Focus does not duplicate that comprehension task.
- Arabic activities were authored from Arabic-native discourse resources rather than translated from English:
  - clarification with `وهو...`
  - reference restatement/specification with `أي...`
  - scope extension with `وتدخل في ذلك...`
  - causal explanation with `لأن`
  - viewpoint shift with `ومن جهة أخرى`
  - counter-argument with `ولكن`
  - development from hidden to visible with `كان خفيا ... ظهر`
- Productive work asks learners to discuss an insufficient criterion in a coherent Arabic argument using clarification, causality, transition and counter-positioning.

## TYMM / B2 alignment
- Chapter 5 follows the established B2 sequence: contextual noticing/discovery -> analysis of discourse function -> contextual reformulation -> coherent production.
- The focus is not isolated grammar manipulation. Learners analyse how clarification, cause, contrast and information development construct an argument across sentences.
- English and Arabic have equivalent B2 cognitive demand but use structures native to their own chapter texts.

## Files added in this run
- `src/data/adam/b2/en/languageFocusBaseCh1to4.ts` — immutable copy of the previously active English Chapters 1–4 Language Focus blob, preserving prior work exactly.
- `src/data/adam/b2/ar/languageFocusBaseCh1to4.ts` — immutable copy of the previously active Arabic Chapters 1–4 Language Focus blob, preserving prior work exactly.
- `src/data/adam/b2/en/languageFocusChapter5.ts` — Chapter 5 English Language Focus, four activities.
- `src/data/adam/b2/ar/languageFocusChapter5.ts` — Chapter 5 Arabic Language Focus, four independently authored activities.

## Files updated in this run
- `src/data/adam/b2/en/languageFocus.ts` — now assembles preserved Chapters 1–4 plus Chapter 5.
- `src/data/adam/b2/ar/languageFocus.ts` — now assembles preserved Arabic Chapters 1–4 plus Chapter 5.
- `docs/automation/b2-language-polish-progress.md` — advanced checkpoint to Chapter 6.

## Active wiring
- `src/data/adam/b2/index.ts` continues importing `adamB2LanguageFocusExercises` and `adamB2LanguageFocusExercisesAr`; no index change was needed because the same exported record names are preserved by the new assembly wrappers.
- The existing story-page wiring therefore continues to attach Language Focus separately from Quick Challenge.

## Validation performed
- Re-fetched English Chapter 5 Language Focus from `preview` and confirmed four activities are present.
- Re-fetched Arabic Chapter 5 Language Focus from `preview` and confirmed four independently authored Arabic activities are present.
- Confirmed the English source expressions are grounded in the actual Chapter 5 English story.
- Confirmed the Arabic source expressions are grounded in the actual Chapter 5 Arabic story.
- Confirmed Language Focus does not duplicate the active English or Arabic Quick Challenge role.
- Preserved the previous Chapters 1–4 Language Focus byte-for-byte by referencing their existing blobs in `languageFocusBaseCh1to4.ts` before replacing the active wrapper files.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No executable typecheck/build/CI runner was available through the connected GitHub actions used in this run, so no typecheck/build/CI pass is claimed.

## Commits
- Chapters 1–4 commits remain recorded in prior history.
- Chapter 5 English + Arabic Language Focus and active assembly wiring: `6adf78315490dc49a91788f4503816f6949062ba`

## Next task
- Adam B2 Chapter 6 only.
- Read the full English and Arabic Chapter 6 texts and their active Quick Challenges, then manually author Chapter 6 Language Focus in both languages.
- Do not start Chapter 7 in the same run.

## Unresolved issues
- None identified for Adam B2 Chapter 5 Language Focus.
- Build/typecheck remains unverified only because no executable runner was available through the connected GitHub actions.
