# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–8 English Language Focus: COMPLETE
- Chapters 1–8 Arabic Language Focus: COMPLETE
- Chapters 9–16: PENDING

## Chapter 8 English decisions
- Read the full Chapter 8 English story and its current Quick Challenge before authoring.
- Kept the Quick Challenge focused on why Moses watered the sisters’ sheep; Language Focus does not ask learners to retrieve that answer again.
- Targets are grounded in Chapter 8 language: negative present-continuous questions with `Why aren’t you ...?`; present inability with `cannot + base verb`; absence with `There are no + plural noun`; purpose with `to + verb`; result with `so`; waiting language in `wait for our turn`; past-event linking with `when`; `early`; and `wait for + person + to + verb`.
- Productive transfer asks learners to explain a new shared-task situation using question, ability, result and time/waiting language rather than retelling the well scene.

## Chapter 8 Arabic decisions
- Read the full Arabic Chapter 8 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Kept the Arabic Quick Challenge focused on why Moses watered the sheep; Language Focus instead works with question form, inability, absence/purpose, result, waiting and time.
- Targets are grounded in the Arabic chapter: dual-address question language in `لماذا لا تأخذان ...؟`; `لا يستطيع أن + فعل`; `لا يوجد + اسم`; purpose with the lām in `ليساعدونا`; result with `لذلك`; `ننتظر دورنا`; `عندما`; direct dual address in `عدتما`; `مبكرًا`; and `حتى + فعل` for the event that would end waiting.
- Productive transfer uses Arabic-native frames and includes a dual-address prompt because that feature is genuinely present in the source text.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart5.ts` — created with Chapter 8 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart5.ts` — created with Chapter 8 Arabic Language Focus.
- `src/data/moses/a2/index.ts` — added Part5 imports and English/Arabic fallback wiring for Chapter 8.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Chapter 8 full English and Arabic story texts were read from `preview`.
- Chapter 8 English and Arabic Quick Challenges were read; the new Language Focus does not duplicate their help-at-the-well comprehension question.
- Re-fetched both Part5 files after writing and confirmed four manually authored Chapter 8 activities are present in each language.
- Re-fetched `src/data/moses/a2/index.ts` and confirmed Part5 is imported and used in both English and Arabic Language Focus fallback chains.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 8 English Language Focus: `27e761f7d17183d7ad676136b864932b721640ab`
- Chapter 8 Arabic Language Focus: `9faac95945b2ae15dd777f5f08fe9ccc9ebd29b7`
- Chapter 8 wiring: `2fc126f7e21e32361480dbbce35a73c441249eb2`

## Next task
- Chapter 9 only: read the full English and Arabic Chapter 9 texts and their Quick Challenges, then manually author Chapter 9 Language Focus in both languages.
- Do not start Chapter 10 in the same run.

## Unresolved issues
- None identified for Chapter 8.
