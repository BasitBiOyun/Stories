# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–11 English Language Focus: COMPLETE
- Chapters 1–11 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 11 via the Part8 fallback

## Chapter 11 English decisions
- Read the full Chapter 11 English story and the current Quick Challenge before authoring.
- Kept the Quick Challenge focused on why Abraham left Babylon; Language Focus does not ask learners to retrieve that reason again.
- Language Focus targets are grounded in Chapter 11 language:
  - `decide to + verb` for decisions
  - purpose with `to + verb`
  - `begin + noun` for starting an event/activity
  - `ask + person + to + verb` for requested actions
  - `from ... to ...` for route/direction
  - `on camels` for means of travel in this context
  - `during + noun` for placing an event within a time period
  - `finally` and `arrive at` for the last stage/destination
  - past-simple family events and `name + person + name` for naming
- Productive work asks learners to create a short journey description using decision, purpose, route, travel detail and arrival language instead of retelling the Quick Challenge answer.

## Chapter 11 Arabic decisions
- Read the full Arabic Chapter 11 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `لم ... إلا` for restriction/exclusivity
  - `لن + فعل مضارع` for future negation
  - `قرر أن + فعل` for decisions
  - `لِـ + فعل مضارع` for purpose
  - `من ... إلى ...` for route/direction
  - `على ظهور الجمال` for means of travel in this context
  - `في أثناء + اسم` for time within a period
  - `وأخيرًا` and `وصل إلى` for final stage/arrival
  - `كان اسم ...` for introducing names
  - past-tense family events and `سمّى + شخص + اسم` for naming
- Productive work uses Arabic-native journey frames rather than translated English sentence frames.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–10.
- Used contextual noticing, meaning/function matching, controlled interpretation, and short meaningful production rather than isolated grammar-rule drilling.
- English and Arabic were authored independently from their own story texts.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because Chapter 11 stayed inside the already established A2 contextual/function-first alignment.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart8.ts` — created with Chapter 11 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart8.ts` — created with Chapter 11 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part8 imports/fallbacks so Chapter 11 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the Chapter 11 English Language Focus from `preview` and confirmed four activities are present and grounded in Chapter 11 language.
- Re-fetched the Chapter 11 Arabic Language Focus from `preview` and confirmed four activities are present and independently grounded in the Arabic text.
- Re-fetched `src/data/abraham/a2/index.ts` and confirmed the Part8 fallback is active in both English and Arabic builders.
- Chapter 11 Quick Challenges were read in both languages and the Language Focus does not duplicate their comprehension question.
- Current wiring commit before this checkpoint update: `c2d5921109f65dbdfb7e792376f8683e6e0d83be`.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commits
- Chapter 11 English Language Focus: `85a6eddaa17be071a8e131ab6084d180963649a9`
- Chapter 11 Arabic Language Focus: `1f51f22d2a6a4fd92cd74ad3bb1d63f9eab0aef1`
- Chapter 11 wiring: `c2d5921109f65dbdfb7e792376f8683e6e0d83be`

## Next task
- Chapter 12 only: read the full English and Arabic Chapter 12 texts and their Quick Challenges, then manually author Chapter 12 Language Focus in both languages.
- Do not start Chapter 13 in the same run.

## Unresolved issues
- None for Chapter 11.
