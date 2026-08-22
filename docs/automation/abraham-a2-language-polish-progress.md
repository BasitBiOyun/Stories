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
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 6 via the new Part3 fallback

## Chapter 6 English decisions
- Read the full Chapter 6 English story and current Quick Challenge before authoring.
- Kept Quick Challenge focused on comprehension/retrieval of why Abraham left the largest idol unbroken and placed the axe around its neck. Language Focus does not ask learners to retrieve or explain that answer.
- Language Focus targets are grounded in Chapter 6 language:
  - `wanted to + base verb` for intention
  - `made a plan to + base verb` for planning
  - `did not ... anyone` for a past negative involving another person
  - `There was ... / There were ...` for introducing singular/plural elements in a scene
  - `When + past simple` for linking a past situation/event to the next action
  - `Why don't you + base verb?` for asking why an expected action is not happening in this context
  - `is getting + adjective` for a change in progress
  - `began to + base verb` for the start of an action
  - `one after another` / `In the end` for sequencing
- Controlled work uses function matching rather than comprehension repetition.
- Productive task asks learners to create a short A2 plan/sequence using intention, scene-setting, time-linking and sequencing language.

## Chapter 6 Arabic decisions
- Read the full Arabic Chapter 6 independently and designed its Language Focus from the Arabic text rather than mechanically translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `أراد أن + فعل` for intention
  - purpose with `لـ` in `ليحطم`
  - `لم + فعل مضارع` for negating a past action
  - `كان هناك ...` for introducing something in a scene
  - `كانت أمامها ...` for describing existence/location
  - `لما + ماضٍ` for linking a past situation/event with the next action
  - `لماذا لا + فعل؟` for asking why an expected action is not happening
  - `يبرد` in context for an ongoing change
  - `بدأ + مضارع` for the beginning of an action
  - `واحدًا بعد واحد` / `في النهاية` for sequence
- Productive work uses Arabic-native chunks such as `أردت أن`, `وضعت خطة`, `كان هناك`, `لما`, and `بدأت` rather than mechanically translating the English output frame.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–5.
- Used contextual noticing, meaning/function, controlled function matching and short meaningful production rather than isolated grammar-rule drilling.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because the established current A2 alignment already uses the verified contextual/function-first approach and Chapter 6 remains within those principles.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart3.ts` — created with Chapter 6 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart3.ts` — created with Chapter 6 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part3 imports/fallbacks so Chapter 6 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched both Chapter 6 Language Focus files from `preview` and confirmed the complete English and Arabic activity sets are present.
- Re-fetched the relevant `src/data/abraham/a2/index.ts` section and confirmed both Part3 imports and fallbacks are active.
- Re-checked the `preview` branch head after the Language Focus and wiring writes: `faa9051606f79d5f9188b71c24dd131d45b808e6` before this checkpoint update.
- Story prose was not changed.
- Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Chapter 6 English Language Focus: `dba8358995c054749c38a8871235fe0738b86864`
- Chapter 6 Arabic Language Focus: `4110286456abedfb122f031a083773bcb4d7b1f4`
- Chapter 6 wiring: `faa9051606f79d5f9188b71c24dd131d45b808e6`

## Next task
- Chapter 7 only: read the full English and Arabic Chapter 7 texts and their Quick Challenges, then manually author Chapter 7 Language Focus in both languages.
- Do not start Chapter 8 in the same run.

## Unresolved issues
- None for Chapter 6.
