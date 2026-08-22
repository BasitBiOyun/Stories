# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–12 English Language Focus: COMPLETE
- Chapters 1–12 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE through Chapter 12 via the Part9 fallback

## Chapter 12 English decisions
- Read the full Chapter 12 English story and the current Quick Challenge before authoring.
- Kept the Quick Challenge focused on the contrast between Hagar’s trust and her action; Language Focus does not ask learners to retrieve that answer again.
- Language Focus targets are grounded in Chapter 12 language:
  - `tell + person + to + verb` for reported instructions
  - `know that + clause` for knowledge/understanding
  - `will never + verb` and `will surely + verb` for strong future belief/certainty
  - `ask + person + to + verb` for requests
  - `so + subject + could + verb` for purpose or hoped-for result
  - `had to + verb` for past necessity
  - `no + noun`, `have no ... left`, `look for + noun`, and `there was no / nobody to ...` for lack, searching and unavailable help
- Productive work asks learners to create a short difficult-situation scenario using need, request, purpose, action and future-belief language rather than retelling Hagar’s trust/action answer.

## Chapter 12 Arabic decisions
- Read the full Arabic Chapter 12 independently and designed its Language Focus from the Arabic text rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `قال لـ + أن + فعل` for directing/requesting an action
  - `يعلم أن + جملة` for knowledge
  - `لن + مضارع + أبدًا` for strong future negation
  - `سـ + مضارع + بالتأكيد` for strong future confidence
  - `دعا + أن + فعل` for prayer/request
  - `لعل + جملة` for a hoped-for purpose/result in this context
  - `كان على + شخص + أن + فعل` for past necessity
  - `بلا / لا ... ولا ...`, `لم يبق`, `بحث عن`, and `لم يكن هناك` for absence, nothing remaining, searching and unavailable help
- Productive work uses Arabic-native frames for absence, necessity, request, search and expectation rather than translated English sentence frames.

## Quality/alignment decisions
- Preserved the chapter-specific, function-first architecture used in completed Adam A2, Yunus Emre A2 and Abraham Chapters 1–11.
- Used contextual noticing, meaning/function matching, controlled interpretation, and short meaningful production rather than isolated grammar-rule drilling.
- English and Arabic were authored independently from their own story texts.
- No rigid template or blueprint was used.
- No new TYMM lookup was necessary in this run because Chapter 12 remained within the established A2 contextual/function-first alignment.

## Files changed in this run
- `src/data/abraham/a2/en/languageFocusPart9.ts` — created with Chapter 12 English Language Focus
- `src/data/abraham/a2/ar/languageFocusPart9.ts` — created with Chapter 12 Arabic Language Focus
- `src/data/abraham/a2/index.ts` — added Part9 imports/fallbacks so Chapter 12 Language Focus renders in English and Arabic
- `docs/automation/abraham-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the Chapter 12 English Language Focus from `preview` and confirmed four activities are present and grounded in Chapter 12 language.
- Re-fetched the Chapter 12 Arabic Language Focus from `preview` and confirmed four activities are present and independently grounded in the Arabic text.
- Re-fetched `src/data/abraham/a2/index.ts` and confirmed the Part9 fallback is active in both English and Arabic builders.
- Chapter 12 Quick Challenges were read in both languages and the Language Focus does not duplicate their trust/action comprehension task.
- Current wiring commit before this checkpoint update: `3a5bb7ad2c2895b3c0e619a59d1b9793e3c7a1e8`.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commits
- Chapter 12 English Language Focus: `c486f0e78a9ca264ad34ebdf0efffd3cd539e811`
- Chapter 12 Arabic Language Focus: `d624f3f6d7bcd6331b5b61b67709559c635df9d5`
- Chapter 12 wiring: `3a5bb7ad2c2895b3c0e619a59d1b9793e3c7a1e8`

## Next task
- Chapter 13 only: read the full English and Arabic Chapter 13 texts and their Quick Challenges, then manually author Chapter 13 Language Focus in both languages.
- Do not start Chapter 14 in the same run.

## Unresolved issues
- None for Chapter 12.
