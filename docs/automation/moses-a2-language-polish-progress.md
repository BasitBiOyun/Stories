# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE
- Chapter 3 English Language Focus: COMPLETE
- Chapter 3 Arabic Language Focus: COMPLETE
- Chapters 4–16: PENDING

## Chapter 3 English decisions
- Read the full Chapter 3 English story and the current Chapter 3 Quick Challenge before authoring.
- Kept Quick Challenge focused on what Moses’s mother did after asking Allah for help; Language Focus does not ask learners to retrieve that same comprehension answer.
- Language Focus targets are grounded in Chapter 3 language:
  - `could + base verb` for a possible danger
  - `could not + base verb` for inability/difficulty
  - direct imperatives such as `Take ...` and `Put ...` for instructions
  - `will + base verb` for future reassurance
  - `tell + person + to + verb` for reporting an instruction
  - comparative adjective + `than` through `kinder ... than`
- Productive work transfers these patterns to a new safe A2 situation rather than retelling the basket event.

## Chapter 3 Arabic decisions
- Read the full Arabic Chapter 3 independently and authored from its own language rather than mechanically translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `يخاف أن + فعل مضارع` for fear linked to a possible event
  - `لم يستطع + فعل/مصدر` for inability in the past
  - feminine imperative forms `خذي / ضعي / ألقي` for direct instructions
  - `سـ + فعل مضارع` through `سيحفظه` for future reassurance
  - `أخبر + شخصًا + أن + فعل` for reporting an instruction
  - comparative `أفعل + من` through `أرحم ... من`
- Productive work uses a new safe context and Arabic-native frames for fear/difficulty, instruction, reassurance and reported guidance.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart2.ts` — created with Chapter 3 English Language Focus
- `src/data/moses/a2/ar/languageFocusPart2.ts` — created with Chapter 3 Arabic Language Focus
- `src/data/moses/a2/index.ts` — added book-local Part2 imports/fallbacks so Chapter 3 Language Focus renders in English and Arabic
- `docs/automation/moses-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched `src/data/moses/a2/en/languageFocusPart2.ts` from `preview`; Chapter 3 contains four manually authored activities under key `3`.
- Re-fetched `src/data/moses/a2/ar/languageFocusPart2.ts` from `preview`; Chapter 3 contains four independently authored Arabic activities under key `3`.
- Re-fetched `src/data/moses/a2/index.ts` from `preview`; both English and Arabic builders use the original Language Focus record first and the Part2 record as a fallback, so Chapters 1–2 remain untouched and Chapter 3 is active.
- Chapter 3 Quick Challenges were read in English and Arabic; Language Focus does not duplicate their main comprehension question.
- Existing Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- Canonical story prose was not changed.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 3 English Language Focus: `1117c66b152dd362e560518596a4f8c80bc4410a`
- Chapter 3 Arabic Language Focus: `f2aed1a0144e25c21cecb0f5763ab42fd9c32a4c`
- Chapter 3 wiring: `a8724bec709d126d6bc7a9e0f971ac92056c2bf3`

## Next task
- Chapter 4 only: read the full English and Arabic Chapter 4 texts and their Quick Challenges, then manually author Chapter 4 Language Focus in both languages.
- Do not start Chapter 5 in the same run.

## Unresolved issues
- None identified for Chapter 3.
