# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–10 English Language Focus: COMPLETE
- Chapters 1–10 Arabic Language Focus: COMPLETE

## Chapter 10 English decisions
- Read the full Chapter 10 English story and its Quick Challenge before authoring.
- Quick Challenge remains comprehension-focused on the result of Abu Bakr buying/freeing Bilal; Language Focus does not ask learners to retrieve that same answer.
- Chapter-grounded Language Focus targets:
  - `agree to + verb` for accepting an action or plan
  - `if + past, would + verb` for the two imagined offers in the dialogue
  - `reply` for introducing an answer in conversation
  - sequence/manner language: `finally`, `with difficulty`, `first`, `after that day`
  - `now` and `no longer` for a changed situation
  - `become + noun/adjective` for change of state/status
  - `could + verb, but ... did not` for contrasting possibility with the choice actually made
- Productive work transfers these frames to a new student/team/family situation rather than retelling Chapter 10.

## Chapter 10 Arabic decisions
- Read the full Arabic Chapter 10 independently and authored from the Arabic text rather than translating the English activities.
- Chapter-grounded Arabic Language Focus targets:
  - `وافق أن + فعل` for accepting an action or decision
  - `لو ... لـ...` for the two hypothetical offer/result frames in the dialogue
  - `أجاب` for introducing a response
  - sequence/manner language: `وأخيرًا`, `بصعوبة`, `أولًا`, `بعد ذلك اليوم`
  - `الآن` and `ليس + اسم` for a changed/current state
  - `أصبح + اسم/صفة` for change of state
  - `كان يقدر أن ... لكنه لم يفعل، بل ...` for contrasting possibility with an actual choice
- Productive work uses Arabic-native frames in a new everyday situation.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart9.ts` — created with Chapter 10 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart9.ts` — created with Chapter 10 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added Part9 imports/fallback wiring so Chapter 10 Language Focus renders in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 10 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 10 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- English and Arabic Chapter 10 Quick Challenges were read; both remain comprehension-focused on the result of Abu Bakr buying/freeing Bilal.
- English Chapter 10 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 10 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part9 fallback wiring is active in English and Arabic while earlier fallbacks remain intact.
- English Chapter 10 Language Focus commit: `4f9ffde83d59d887135905c78d46be3922712f43`.
- Arabic Chapter 10 Language Focus commit: `cdd2bb5709689651a8b3900d7393ef62d3d0d995`.
- Active wiring commit before this checkpoint update: `ea79087a66e456ff12006e8b95decead02e06659`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 11 only: read the full English and Arabic Chapter 11 texts and Quick Challenges, then manually author Chapter 11 Language Focus in both languages.
- Do not start Chapter 12 in the same run.

## Unresolved issues
- None identified for Chapter 10.
