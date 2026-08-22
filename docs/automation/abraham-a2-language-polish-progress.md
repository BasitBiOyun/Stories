# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE
- Chapter 3 English Language Focus: COMPLETE
- Chapter 3 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE

## Chapter 3 English decisions
- Read the full Chapter 3 English story and its current Quick Challenge before authoring.
- Kept Quick Challenge focused on the content fact that the star and moon disappeared/went away; Language Focus does not simply ask that comprehension question again.
- Language Focus targets are grounded in Chapter 3 language:
  - `thought about`, `wanted to know`, `knew that`, and `was in search of` for different thinking/searching functions
  - `Could this be ...?` for asking about possibility
  - `when ...` for the event that changes the reasoning
  - `because ...` for evidence/reason
  - `could not be ...` for a negative conclusion
  - `One night`, past-tense action sequence, and `Then` for simple narrative progression
- Productive task uses a question → observation → reason → conclusion chain instead of retelling the Quick Challenge answer.

## Chapter 3 Arabic decisions
- Read the full Arabic Chapter 3 independently and designed the Arabic Language Focus from its own forms rather than translating the English activities mechanically.
- Language Focus targets are grounded in the Arabic chapter:
  - `كان + الفعل المضارع` with `يفكر / يريد / يعلم / يبحث` to distinguish thought, desire to know, existing knowledge, and searching
  - `هل يكون هذا ربي؟` for asking about a possibility
  - `لما غاب ...` for the event that changes the reasoning
  - `إن الله لا يغيب أبداً` as the principle/evidence in the reasoning chain
  - `ففهم أن ... لا يمكن أن يكون ...` for expressing a conclusion
  - `في ليلة من الليالي`, past actions, `فـ`, and `ثم` for narrative sequencing
- Productive task asks learners to build a short question → observation → principle → conclusion chain without repeating the Quick Challenge answer.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture established in the completed Adam A2 and current Abraham A2 Chapter 1–2 work on `preview`.
- Used contextual noticing, meaning/function, reconstruction/sequencing, and short meaningful production rather than isolated rule drilling.
- No rigid template or blueprint was used to generate the chapter activities.
- No new TYMM lookup was necessary in this run because the existing checkpoint already records the current official A2 alignment decision and Chapter 3 follows the same verified contextual/function-first principles.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocus.ts` — added Chapter 3 only
- `src/data/abraham/a2/ar/languageFocus.ts` — added Chapter 3 only
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the English and Arabic Chapter 3 Language Focus blocks after writing and confirmed both are present on `preview`.
- Re-fetched `src/data/abraham/a2/index.ts` and confirmed it automatically wires `abrahamA2LanguageFocusExercises[page.id]` and `abrahamA2LanguageFocusExercisesAr[page.id]`, so no new index change was required.
- Story prose was not changed.
- Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Chapter 3 English Language Focus commit: `c90665d76c394895ce9f6591910d2928bcdd3a30`
- Chapter 3 Arabic Language Focus/content head before this checkpoint: `d8da032e479bb093b1ecda7d8e31752a300e631e`

## Next task
- Chapter 4 only: read the full English and Arabic Chapter 4 texts and their Quick Challenges, then manually author Chapter 4 Language Focus in both languages.
- Do not start Chapter 5 in the same run.

## Unresolved issues
- None for Chapter 3.
