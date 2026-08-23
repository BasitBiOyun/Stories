# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–6 English Language Focus: COMPLETE
- Chapters 1–6 Arabic Language Focus: COMPLETE
- Chapters 7–16: PENDING

## Chapter 6 English decisions
- Read the full Chapter 6 English story and its current Quick Challenge before authoring.
- Kept the Quick Challenge focused on the accidental death and Moses’s immediate regret/dua; Language Focus does not ask learners to retrieve that event-response pair again.
- Targets are grounded in Chapter 6 language: `to + base verb` for purpose in `ran to help`; `accidentally` for an unplanned result; feeling language with `upset`, `so + adjective` and `because + clause`; present continuous in `are looking for you`; `be going to + verb` and `will + verb` for future warning; and the imperative `Run away ...` for urgent action.
- Productive transfer uses a new safe warning situation such as bad weather or a closed road rather than retelling the bazaar scene.

## Chapter 6 Arabic decisions
- Read the full Arabic Chapter 6 independently and designed from its own text rather than translating the English activities.
- Kept the Arabic Quick Challenge focused on the mistake and Moses’s response; Language Focus works with purpose, unintended result, feeling/reason, dua and warning language instead.
- Targets are grounded in the Arabic chapter: purpose with `لِـ` in `لمساعدته`; `عن غير قصد` for an unintended result; `لأن + جملة` for reason; `حزن شديد` for intensified feeling; direct supplication in `فاغفر لي`; present danger in `يبحثون عنك`; intention in `يريدون أن + فعل`; and direct warning/command with `اخرج من المدينة`.
- Productive transfer uses Arabic-native frames in a new safe warning context.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart4.ts` — created with Chapter 6 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart4.ts` — created with Chapter 6 Arabic Language Focus.
- `src/data/moses/a2/index.ts` — added Part4 imports/fallbacks so Chapter 6 Language Focus renders in English and Arabic.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Chapter 6 full English and Arabic story texts were read from `preview`.
- Chapter 6 English and Arabic Quick Challenges were read; the new Language Focus does not duplicate their mistake-and-response comprehension task.
- Re-fetched both Part4 files after writing and confirmed four manually authored activities are present in each language.
- Re-fetched `src/data/moses/a2/index.ts` and confirmed Part4 imports and fallbacks are active in both English and Arabic builders.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 6 English Language Focus: `deff933e072e91556191e5b5628c4750ebaa648f`
- Chapter 6 Arabic Language Focus: `f7f6551c6397c6c2edc3a48f65cc0d98e6585075`
- Chapter 6 wiring: `57e05b620a1fbff4e693f0802b3ca4fb49a03ab0`

## Next task
- Chapter 7 only: read the full English and Arabic Chapter 7 texts and their Quick Challenges, then manually author Chapter 7 Language Focus in both languages.
- Do not start Chapter 8 in the same run.

## Unresolved issues
- None identified for Chapter 6.
