# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–10 English Language Focus: COMPLETE
- Chapters 1–10 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 10 via the Part7 fallback

## Chapter 10 English decisions
- Read the full Chapter 10 English story and the current Quick Challenge before authoring.
- Kept the Quick Challenge focused on why Abraham’s sun question was a strong challenge to Nimrod’s claim; Language Focus does not ask learners to retrieve that answer.
- Language Focus targets are grounded in Chapter 10 language:
  - `heard about + noun` for information received
  - `thought + clause` for reporting an idea
  - `wanted to + verb` for intention/desire
  - direct questions introduced by `asked`
  - `order + person + to + verb` for reported commands
  - direct imperatives such as `Kill ...`
  - `let + person + base verb` for allowing an action
  - `Can you + verb?` for asking about ability
  - `couldn’t + verb` for past inability
  - `make + object + base verb` for causing an action
  - `make + person + adjective` for causing a feeling/state
- Productive work asks learners to create a short claim-test-result situation using the chapter language rather than retelling the sun challenge.

## Chapter 10 Arabic decisions
- Read the full Arabic Chapter 10 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `سمع عن + اسم` for information received
  - `ظنّ أن + جملة` for thought/belief
  - `أراد أن + فعل` for intention
  - direct questioning with `سأل`
  - `أمر + شخص + أن + فعل` for reported commands
  - direct imperative forms such as `اقتُلوا / أطلِقوا / انظر`
  - `هل تستطيع أن + فعل` for asking about ability
  - `لم يستطع أن + فعل` for past inability
  - `وحده` for restriction/exclusivity
  - `زاد هذا + اسم` for a result that increases a state or feeling
- Productive work uses Arabic-native frames for thought, intention, command, ability/inability and result.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–9.
- Used contextual noticing, meaning/function matching, controlled interpretation, and short meaningful production rather than isolated grammar-rule drilling.
- English and Arabic were authored independently from their own story texts.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because Chapter 10 stayed inside the already established A2 contextual/function-first alignment.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart7.ts` — created with Chapter 10 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart7.ts` — created with Chapter 10 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part7 imports/fallbacks so Chapter 10 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the Chapter 10 English Language Focus from `preview` and confirmed four activities are present and grounded in Chapter 10 language.
- Re-fetched the Chapter 10 Arabic Language Focus from `preview` and confirmed four activities are present and independently grounded in the Arabic text.
- Re-fetched `src/data/abraham/a2/index.ts` and confirmed the Part7 fallback is active in both English and Arabic builders.
- Chapter 10 Quick Challenges were read in both languages and the Language Focus does not duplicate their comprehension question.
- Current wiring commit before this checkpoint update: `756e69ff7971fa8eb54ce484fbf04d5361ea77b9`.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commits
- Chapter 10 English Language Focus: `22976be02ea3a1485f62c0515a048040321dc8a6`
- Chapter 10 Arabic Language Focus: `d4a24bb7681d94c76afa0193dedb436e26554b13`
- Chapter 10 wiring: `756e69ff7971fa8eb54ce484fbf04d5361ea77b9`

## Next task
- Chapter 11 only: read the full English and Arabic Chapter 11 texts and their Quick Challenges, then manually author Chapter 11 Language Focus in both languages.
- Do not start Chapter 12 in the same run.

## Unresolved issues
- None for Chapter 10.
