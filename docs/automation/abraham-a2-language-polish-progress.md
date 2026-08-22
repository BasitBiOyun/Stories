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
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 5 via the existing Part2 fallback

## Chapter 5 English decisions
- Read the full Chapter 5 English story and current Quick Challenge before authoring.
- Kept Quick Challenge focused on comprehension/retrieval of the people’s stated reason for following their fathers. Language Focus does not ask learners to retrieve that answer again.
- Language Focus targets are grounded in Chapter 5 language:
  - `I believe in ...` for stating a belief or position
  - `I do not ...` for stating what the speaker rejects or does not do
  - `because ...` for giving a reason and `Why ...?` for asking for one
  - `when I need ...` / `when I am sick` for recurring or generally true situations
  - present-simple result clauses such as `He heals me`
  - `have no power to + base verb` for expressing lack of power/ability
- Controlled work uses function matching and reconstruction rather than comprehension repetition.
- Productive task asks learners to state a position, give a reason, describe a recurring situation and express ability/lack of ability in short A2 language.

## Chapter 5 Arabic decisions
- Read the full Arabic Chapter 5 independently and designed its Language Focus from the Arabic text rather than mechanically translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `أنا أؤمن بـ...` for explicitly stating belief
  - `لا أعبد ...` for a negative position
  - `لأن ...` for giving a reason and `لماذا ...؟` for asking for one
  - distinction between `لأن` as a reason marker and `لهذا السبب` as a result/link back to a previous idea
  - `عندما ...` and `إذا ...` for recurring/general situations or conditions
  - `فهو يشفيني` as the result in that situation
  - `لا تملك قوة لـ...` for denying power/ability
- Productive task uses Arabic-native chunks from the chapter and avoids simply translating the English output frame.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–4.
- Used contextual noticing, meaning/function, controlled reconstruction/matching and short meaningful production rather than isolated grammar-rule drilling.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because the established current A2 alignment already uses the verified contextual/function-first approach and Chapter 5 remains within those principles.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart2.ts` — added Chapter 5 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart2.ts` — added Chapter 5 Arabic Language Focus
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched both Chapter 5 Language Focus sections from `preview` and confirmed the full English and Arabic activity sets are present.
- Re-checked `src/data/abraham/a2/index.ts`; its existing fallback already resolves Chapter 5 from the Part2 files, so no wiring edit was necessary.
- Re-checked the `preview` branch head after both Language Focus writes: `8597cdbdbd3f19266eb86b8e470863f90b2bd055` before this checkpoint update.
- Story prose was not changed.
- Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Chapter 5 English Language Focus: `3397e1f7f44fc8600c3201b32abe39ba654b3cb1`
- Chapter 5 Arabic Language Focus: `8597cdbdbd3f19266eb86b8e470863f90b2bd055`

## Next task
- Chapter 6 only: read the full English and Arabic Chapter 6 texts and their Quick Challenges, then manually author Chapter 6 Language Focus in both languages.
- Do not start Chapter 7 in the same run.

## Unresolved issues
- None for Chapter 5.
