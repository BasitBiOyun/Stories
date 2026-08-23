# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–9 English Language Focus: COMPLETE
- Chapters 1–9 Arabic Language Focus: COMPLETE
- Chapters 10–16: PENDING

## Chapter 9 English decisions
- Read the full Chapter 9 English story and its current Quick Challenge before authoring.
- Kept the Quick Challenge focused on the story-retrieval question of why Moses accepted Şuayb’s job offer; Language Focus does not ask learners simply to retrieve that answer again.
- Targets are grounded in Chapter 9 language: `couldn’t + verb` for past inability; `needed + noun` for necessity; `because` for reasons; `want to + verb` for desire/intention; imperative `Go and call ...`; `offer + person + noun` and `accept` for an opportunity and response; `began to + verb`, `later`, `after + time`, and `decided to + verb` for change, sequence and decision.
- Productive transfer asks learners to describe a new everyday opportunity using need, reason, intention/offer and a later decision rather than retelling Moses’s life in Midian.

## Chapter 9 Arabic decisions
- Read the full Arabic Chapter 9 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Kept the Arabic Quick Challenge focused on why Moses accepted the work; Language Focus instead works with ability, need, reason, intention, feminine imperatives, offer/acceptance, change over time and decision.
- Targets are grounded in the Arabic chapter: `لم يكن قادرًا على + مصدر/فعل` for past inability; `كان بحاجة إلى + اسم` for need; `لأن` for reason; `أريد أن + فعل` for intention; feminine imperatives `اذهبي / نادي`; `عرض ... على ...` and `قبل` for offer/acceptance; `بدأ + فعل مضارع`; `بعد ذلك`; `بعد + مدة`; and `قرر` for decision.
- Productive transfer uses Arabic-native frames and preserves the source-specific feminine imperative feature rather than mirroring the English activity mechanically.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart6.ts` — created with Chapter 9 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart6.ts` — created with Chapter 9 Arabic Language Focus.
- `src/data/moses/a2/index.ts` — added Part6 imports and English/Arabic fallback wiring for Chapter 9.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Chapter 9 full English and Arabic story texts were read from `preview`.
- Chapter 9 English and Arabic Quick Challenges were read; the new Language Focus does not duplicate their job-acceptance comprehension question.
- Re-fetched both Part6 files after writing and confirmed four manually authored Chapter 9 activities are present in each language.
- Re-fetched `src/data/moses/a2/index.ts` and confirmed Part6 is imported and used in both English and Arabic Language Focus fallback chains.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 9 English Language Focus: `bd638ccb2e4f08f06e57a313527681b3a6999d1c`
- Chapter 9 Arabic Language Focus: `77b44f136f2bcf5c31aca44560eaa73bf6ae319e`
- Chapter 9 wiring: `2d0b975b36f6426a2172cdaba17660fdf57be7e0`

## Next task
- Chapter 10 only: read the full English and Arabic Chapter 10 texts and their Quick Challenges, then manually author Chapter 10 Language Focus in both languages.
- Do not start Chapter 11 in the same run.

## Unresolved issues
- None identified for Chapter 9.
