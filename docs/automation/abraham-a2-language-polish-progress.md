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
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 4

## Chapter 4 English decisions
- Read the full Chapter 4 English story and current Quick Challenge before authoring.
- Kept Quick Challenge focused on the content conclusion that the setting sun is creation and Allah is the Creator; Language Focus does not simply repeat that comprehension question.
- Language Focus targets are grounded in Chapter 4 language:
  - `all night`, `In the morning`, and `when ...` for duration, time movement and turning points
  - `If Allah doesn’t ... , I will ...` for condition + future result
  - `had to + base verb` for past responsibility/duty
  - imperatives such as `Follow me` for direct guidance
  - `I will guide ...` for future guidance/promise
  - `Stop + -ing` for telling someone to end an action
- Productive task asks learners to combine condition, duty, direct guidance and future help without retelling the Quick Challenge answer.

## Chapter 4 Arabic decisions
- Read the full Arabic Chapter 4 independently and designed its Language Focus from the Arabic text rather than mechanically translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `طول الليل`, `في الصباح`, and `لما ...` for duration, time movement and event-to-thought links
  - `إن لم ... فـسـ...` for condition + future result
  - `كان عليه أن ...` for past responsibility/duty
  - imperative forms such as `اتبعني` for direct guidance
  - `أهديك ...` for offering guidance/help
  - `توقف عن ...` for asking someone to stop an action
- Productive task uses `إن ... فـ...`, `عليّ أن ...`, an imperative, and a short help/guidance expression.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–3.
- Used contextual noticing, meaning/function, reconstruction and short meaningful production rather than isolated rule drilling.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because the established current A2 alignment already uses the verified contextual/function-first approach and Chapter 4 remains within those principles.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart2.ts` — created with Chapter 4 English only
- `src/data/abraham/a2/ar/languageFocusPart2.ts` — created with Chapter 4 Arabic only
- `src/data/abraham/a2/index.ts` — minimal fallback wiring for the continuation files
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched both Chapter 4 Language Focus files from `preview` and confirmed the full English and Arabic activity sets are present.
- Re-checked the `preview` branch head after the content/wiring writes.
- `src/data/abraham/a2/index.ts` now resolves Chapter 4 from the continuation Language Focus files while preserving Chapters 1–3 from the original files.
- Story prose was not changed.
- Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Chapter 4 English Language Focus: `e76e82c0882444735f9d23cfe746ffa00deb03f0`
- Chapter 4 Arabic Language Focus: `1646975f044b85a27c7e41cf2670058cd1882fae`
- Wiring head before checkpoint update: `de5203acc30100d7041a09cc4624e532649db53a`

## Next task
- Chapter 5 only: read the full English and Arabic Chapter 5 texts and their Quick Challenges, then manually author Chapter 5 Language Focus in both languages.
- Do not start Chapter 6 in the same run.

## Unresolved issues
- None for Chapter 4.
