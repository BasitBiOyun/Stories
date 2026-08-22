# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE
- Chapter 3 English Language Focus: COMPLETE
- Chapter 3 Arabic Language Focus: COMPLETE
- Chapter 4 English Language Focus: COMPLETE
- Chapter 4 Arabic Language Focus: COMPLETE
- Chapter 5 English Language Focus: COMPLETE
- Chapter 5 Arabic Language Focus: COMPLETE
- Chapter 6 English Language Focus: COMPLETE
- Chapter 6 Arabic Language Focus: COMPLETE
- Chapter 7 English Language Focus: COMPLETE
- Chapter 7 Arabic Language Focus: COMPLETE
- Chapter 8 English Language Focus: COMPLETE
- Chapter 8 Arabic Language Focus: COMPLETE
- Chapter 9 English Language Focus: COMPLETE
- Chapter 9 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 9 via the Part6 fallback

## Chapter 9 English decisions
- Read the full Chapter 9 English story and the current Quick Challenge before authoring.
- Kept the Quick Challenge focused on the content contrast: the fire changed while the people remained against Abraham. Language Focus does not ask learners to retrieve that answer.
- Language Focus targets are grounded in Chapter 9 language:
  - `anything` in an open question and `nothing` for zero quantity
  - `only` for limitation and `not ... at all` for strengthened negation
  - `become + adjective` for a change of state
  - `turn into + noun` for change into something different
  - `when` and `at that moment` for time links in narrative
  - reaction language with `shocked/amazed`
  - `make + person + adjective` for causing a feeling/state
  - `but` for contrast and `still` for continuation without change
- Productive work asks learners to describe a surprising change using change-of-state, time, reaction, contrast and continuation language rather than retelling the Quick Challenge answer.

## Chapter 9 Arabic decisions
- Read the full Arabic Chapter 9 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `هل تريد شيئًا؟` and `لا شيء` for open question/negative quantity
  - `لم ... إلا` for restriction
  - `لم يُصب بأي أذى` for strengthened negation
  - `صار + صفة` for change of state
  - `كأنّ` for comparison/simile
  - `سالمًا` as a simple contextual example of describing state while an action occurs
  - `لما` and `عندما` for linking events in time
  - `أدهش` for causing a reaction
  - `لكنّ` for contrast
  - `بقي` for continuation of a state
- Productive work uses Arabic-native frames such as `صار + صفة`, `كأنّ`, `لما/عندما`, `أدهش`, `لكنّ`, `بقي`, and `لم ... إلا`.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–8.
- Used contextual noticing, meaning/function matching, controlled interpretation/reconstruction, and short meaningful production rather than isolated grammar-rule drilling.
- English and Arabic were authored independently from their own story texts.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because the established current A2 alignment already follows the verified contextual/function-first approach and Chapter 9 remains within those principles.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart6.ts` — created with Chapter 9 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart6.ts` — created with Chapter 9 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part6 imports/fallbacks so Chapter 9 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the Chapter 9 English Language Focus from `preview` and confirmed four activities are present and grounded in Chapter 9 language.
- Re-fetched the Chapter 9 Arabic Language Focus from `preview` and confirmed four activities are present and independently grounded in the Arabic text.
- Chapter 9 Quick Challenges were read in both languages and the Language Focus does not duplicate their comprehension question.
- Current wiring commit after Language Focus writes: `b2c68a8564457a5f7c177959dad4f410ee75b373` before this checkpoint update.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Chapter 9 English Language Focus: `1dd1b939b3e6fbc0d54f0638f52e2130dd75b190`
- Chapter 9 Arabic Language Focus: `3dc30b674ae36eb2150f254316a95b251ff26e69`
- Chapter 9 wiring: `b2c68a8564457a5f7c177959dad4f410ee75b373`

## Next task
- Chapter 10 only: read the full English and Arabic Chapter 10 texts and their Quick Challenges, then manually author Chapter 10 Language Focus in both languages.
- Do not start Chapter 11 in the same run.

## Unresolved issues
- None for Chapter 9.
