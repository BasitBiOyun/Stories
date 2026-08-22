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
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 7 via the Part4 fallback

## Chapter 7 English decisions
- Read the full Chapter 7 English story and current Quick Challenge before authoring.
- Kept Quick Challenge focused on the people’s own admission that the idols could not speak and how that supported Abraham’s point. Language Focus does not ask learners to retrieve or explain that comprehension answer.
- Language Focus targets are grounded in Chapter 7 language:
  - `The next day` for moving a past narrative forward
  - feeling/reaction language with `were shocked` and `were displeased`
  - `because` for giving a reason
  - question functions in `Who did this?`, `Did you harm ...?`, `Why do you ...?`, and `Don’t you see ...?`
  - `know that + clause` for stating known information
  - `ask + object + if + clause` for an indirect yes/no question
  - `can / can’t + base verb` for ability and inability
  - `themselves` for referring back to a plural subject
- A potential grammar trap was explicitly corrected during validation: `Who did this?` was not taught as the generic auxiliary pattern `did + subject + base verb`; instead the activity compares real question functions from the chapter.
- Productive work asks learners to create a short questioning/explaining exchange using past-event questions, known information, ability language and a reason.

## Chapter 7 Arabic decisions
- Read the full Arabic Chapter 7 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `في اليوم التالي` for narrative time movement
  - `فصدموا` for reaction and `لأن` for reason
  - question functions with `مَنْ`, the interrogative hamza in `أأنت ...؟`, `لماذا`, and `ألا ...؟`
  - `أنت تعلم أن ...` for presenting known information
  - the imperative `فاسألوه`
  - `إن كان يستطيع أن ...` for an indirect question about ability
  - `لا يستطيع أن ...` for inability
  - `نفسها` for reference back to the same subject
- Productive work uses Arabic-native frames such as `من فعل ...؟`, `أأنت ...؟`, `أنا أعلم أن ...`, `يستطيع/لا يستطيع أن ...`, and `لأن ...`.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–6.
- Used contextual noticing, meaning/function matching and short meaningful production rather than isolated rule drilling.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because the established current A2 alignment already uses the verified contextual/function-first approach and Chapter 7 remains within those principles.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart4.ts` — created with Chapter 7 English Language Focus, then refined after validation
- `src/data/abraham/a2/ar/languageFocusPart4.ts` — created with Chapter 7 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part4 imports/fallbacks so Chapter 7 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the Chapter 7 English Language Focus from `preview` and corrected a misleading `Who did this?` grammar generalization before finalizing.
- Re-fetched the Chapter 7 Arabic Language Focus from `preview` and confirmed all four activities are present.
- Re-fetched `src/data/abraham/a2/index.ts` and confirmed both Part4 imports and fallbacks are active.
- Re-checked the `preview` branch head after Language Focus and wiring writes: `b76d70860ea301ac3de3fcee4af7dea787bae3d8` before this checkpoint update.
- Story prose was not changed.
- Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Chapter 7 English Language Focus initial creation: `95a27a86d2b4438292f992b52f4dca3a6f34e21f`
- Chapter 7 Arabic Language Focus: `e7fe922a6305dc9e91f419bdf0015bd4020ec45b`
- Chapter 7 wiring: `c86150297c994c66a9419c68752928671127504b`
- Chapter 7 English refinement: `b76d70860ea301ac3de3fcee4af7dea787bae3d8`

## Next task
- Chapter 8 only: read the full English and Arabic Chapter 8 texts and their Quick Challenges, then manually author Chapter 8 Language Focus in both languages.
- Do not start Chapter 9 in the same run.

## Unresolved issues
- None for Chapter 7.
