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
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 8 via the Part5 fallback

## Chapter 8 English decisions
- Read the full Chapter 8 English story and the current Quick Challenge before authoring.
- Kept the Quick Challenge focused on why Abraham stayed calm despite the dangerous fire. Language Focus deliberately does not ask learners to retrieve or explain that answer.
- Language Focus targets are grounded in Chapter 8 language:
  - `too + adjective + to + verb` in `too arrogant to accept their mistake`
  - `so + adjective + that + result` in `so huge that it was dangerous to go near it`
  - `so + adjective` for strong degree in `so hot`
  - `could not + base verb` for past inability
  - `to + base verb` for purpose in `came to watch` and `used this machine to throw`
  - `for + noun` as purpose in `firewood for the fire`
  - imperatives in `Burn him!` and `Punish him!`
  - `for days` for duration and `finally` for sequence
- Productive work asks learners to describe a difficult situation or plan using degree/result, inability, purpose, duration and sequence rather than retelling the story comprehension answer.

## Chapter 8 Arabic decisions
- Read the full Arabic Chapter 8 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `جدًّا` for degree
  - `فـ` and `حتى إن` for linking strong conditions with results
  - `لم تستطع أن + فعل` for past inability
  - لام التعليل with a verb in `لِيُشَاهِدُوا` and `لِيُلْقُوا` for purpose
  - `لِـ + اسم` in `للنار`
  - imperatives `اِحْرِقُوهُ` and `عَاقِبُوهُ`
  - `أيامًا` for duration
  - `وأخيرًا` for the final stage in a sequence
- Productive work uses Arabic-native frames such as `... جدًّا فـ...`, `حتى إن ...`, `لم يستطع أن ...`, `لِـ + فعل`, and `وأخيرًا ...`.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–7.
- Used contextual noticing, meaning/function matching, controlled reconstruction through matching, and short meaningful production rather than isolated grammar-rule drilling.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because the established current A2 alignment already uses the verified contextual/function-first approach and Chapter 8 remains within those principles.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart5.ts` — created with Chapter 8 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart5.ts` — created with Chapter 8 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part5 imports/fallbacks so Chapter 8 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the Chapter 8 English Language Focus from `preview` and confirmed four activities are present and grounded in Chapter 8 language.
- Re-fetched the Chapter 8 Arabic Language Focus from `preview` and confirmed four activities are present and independently grounded in the Arabic text.
- Re-fetched `src/data/abraham/a2/index.ts` and confirmed both Part5 imports and fallbacks are active.
- Current wiring commit after Language Focus writes: `a54e47f4ced32200e05eb944d498d4f30233a049` before this checkpoint update.
- Story prose was not changed.
- Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Chapter 8 English Language Focus: `5c59b9b7fff4ccf46bc133920c2635e6a18533ef`
- Chapter 8 Arabic Language Focus: `6c68b17a1f1d4eb482078dbf1794a74431a76261`
- Chapter 8 wiring: `a54e47f4ced32200e05eb944d498d4f30233a049`

## Next task
- Chapter 9 only: read the full English and Arabic Chapter 9 texts and their Quick Challenges, then manually author Chapter 9 Language Focus in both languages.
- Do not start Chapter 10 in the same run.

## Unresolved issues
- None for Chapter 8.
