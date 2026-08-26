# B2 Language Polish Progress

currentBook: Abraham B2
phase: LANGUAGE_FOCUS
nextTask: CHAPTER_4_LANGUAGE_FOCUS
completedBooks:
- Adam B2

## Abraham B2 progress
- Story chapters: 35
- Current book path: `src/data/abraham/b2`
- English Language Focus completed: Chapters 1–3
- Arabic Language Focus completed: Chapters 1–3
- Next chapter: Chapter 4

## Abraham B2 Chapter 1 English decisions
- Read the full English Chapter 1 story and the active Quick Challenge before authoring.
- Kept the Quick Challenge focused on why Abraham is presented as a connecting figure; Language Focus does not retest that comprehension point.
- Language Focus targets: source/viewpoint framing, definition/reformulation, additive discourse, active/passive information focus, and paragraph-level organisation.

## Abraham B2 Chapter 1 Arabic decisions
- Read the full Arabic Chapter 1 independently and designed its Language Focus from the Arabic wording rather than translating the English activities.
- Arabic-native targets: `يُقدَّم ... بوصفه`, `تعني أن`, `وهو أيضًا`, passive information focus, and movement from general presentation to elaboration.

## Abraham B2 Chapter 2 English decisions
- Read the full English Chapter 2 story and the active Quick Challenge before authoring.
- Kept the Quick Challenge focused on the chapter’s claim that reasoning can lead people to recognize Allah’s existence; Language Focus does not retest that comprehension answer.
- Language Focus targets: relative-clause definition, `that is` reformulation, `We may say that...` cautious stance, cause → result → conclusion organisation, and continuity/change contrast.

## Abraham B2 Chapter 2 Arabic decisions
- Read the full Arabic Chapter 2 independently and authored from the Arabic text rather than translating the English set.
- Arabic-native targets: `والحنيف هو الموحِّد الذي...`, `أي إن`, `يمكننا القول إن...`, `بسبب...` → `كانت هناك حاجة...` → `ولذلك فإن...`, and `يقتصر على...`.

## Abraham B2 Chapter 3 English decisions
- Read the full English Chapter 3 story and the active Quick Challenge before authoring.
- Kept the Quick Challenge focused on monotheistic continuity together with later corruption; Language Focus does not ask learners to retrieve that answer.
- Language Focus is grounded in the chapter’s own discourse:
  - `In fact` for foregrounding/strengthening the opening claim
  - `However, later on` for a clear discourse turn from earlier state to later development
  - `like Judaism and Christianity` for comparative framing
  - `which was the least corrupted religion at that time` for a relative-clause evaluation whose scope is explicitly limited by time
  - `When...`, `while...`, `At that moment`, and `Hearing...` for layered temporal relations in the Varaka–Bilal episode
  - `not only... but also...` as the productive extension pattern used to widen a concluding point
- Productive work asks for an 8–10 sentence non-story paragraph that combines continuity, contrast, temporal layering, a context-limited relative-clause evaluation and additive extension.
- Source fidelity: the wording `the least corrupted religion at that time` is treated as the chapter’s time-bounded presentation, not expanded into a timeless universal claim.

## Abraham B2 Chapter 3 Arabic decisions
- Read the full Arabic Chapter 3 independently and designed the Arabic Language Focus from its own wording rather than translating the English set.
- Kept the Arabic Quick Challenge focused on continuity with later mixing/corruption; Language Focus targets the Arabic discourse forms that carry the explanation.
- Arabic-native targets include:
  - `في الحقيقة` for strengthening/foregrounding
  - `ولكن لاحقًا` for signalling a later contrasting development
  - `وكما حدث لليهودية والمسيحية` for comparative framing
  - `التي كانت أقلَّ الأديان تحريفًا في ذلك الوقت` as a صلة/relative structure containing a time-limited evaluation
  - `عندما...`, `بينما...`, `في تلك اللحظة`, and `وعندما سمع...` for separating temporal frame, ongoing background, focal moment and response
  - `لا... فقط، بل... أيضًا` for widening a concluding idea in productive work
- Productive work requires an 8–10 sentence Arabic paragraph organised through genuine discourse relations rather than isolated grammar insertion.
- Source fidelity: the evaluation about Christianity is explicitly kept within the chapter’s `في ذلك الوقت` time boundary.

## Files added for Chapter 3
- `src/data/abraham/b2/en/languageFocusChapter3.ts`
- `src/data/abraham/b2/ar/languageFocusChapter3.ts`

## Files updated for Chapter 3
- `src/data/abraham/b2/en/languageFocus.ts`
- `src/data/abraham/b2/ar/languageFocus.ts`
- `docs/automation/b2-language-polish-progress.md`

## Abraham B2 Chapter 3 commits
- English Chapter 3 Language Focus: `57e779a04544b7f54e7d2506e187e0eb563b7c56`
- Arabic Chapter 3 Language Focus: `c85a7de773f4fe2bef7806564475bb0b2ec50fed`
- English aggregator wiring: `335b5800c208e8121d9ed70663e238485179585a`
- Arabic aggregator wiring: `cfd7dbb8696733edbd57563cada65fa2aee5b070`

## Current validation
- Re-fetched the English Chapter 3 Language Focus from `preview` and confirmed four B2 activities are present.
- Re-fetched the Arabic Chapter 3 Language Focus from `preview` and confirmed four independently authored Arabic activities are present.
- English and Arabic Chapter 3 activities are grounded in their own language texts and do not mechanically mirror grammar categories.
- Chapter 3 active Quick Challenges were read before authoring; the new Language Focus does not duplicate the continuity/corruption comprehension claim.
- Existing Abraham B2 index wiring already attaches the language-specific Language Focus aggregators to story pages through `languageFocusExercises`; only the book-local aggregators required updating.
- Story prose was not changed.
- Knowledge Check, Retrieval Review, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No B1/A2 or shared/global file was edited.
- No executable typecheck/build/CI runner was used, so no typecheck/build/CI pass is claimed.

## Next task
- Chapter 4 only: read the full Abraham B2 English and Arabic Chapter 4 story texts and their active Quick Challenges independently, then author Chapter 4 Language Focus in both languages.
- Do not start Chapter 5 in the same run.

## Unresolved issues
- None identified for Abraham B2 Chapter 3.
