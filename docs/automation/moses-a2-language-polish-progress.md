# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–10 English Language Focus: COMPLETE
- Chapters 1–10 Arabic Language Focus: COMPLETE
- Chapters 11–16: PENDING

## Chapter 10 English decisions
- Read the full Chapter 10 English story and its current Quick Challenge before authoring.
- Quick Challenge already tests event sequencing after Moses sees the fire, so Language Focus does not retest that sequence.
- Targets come directly from Chapter 10: past setting/background; `there was nobody`; `was getting + adjective` for changing conditions; imperative `Wait / Listen / Put down`; `will + verb` for the next intended action; `to + verb` for purpose; completed past response; and `turn into` for transformation.
- Productive transfer uses a new cold-evening situation so learners apply instruction, future action, purpose and changing-condition language without retelling the mountain scene.

## Chapter 10 Arabic decisions
- Read the full Arabic Chapter 10 independently and designed from its own wording rather than translating the English activities.
- Quick Challenge already tests the event sequence, so Arabic Language Focus instead targets `كان` for background, `لم يكن هناك` for absence, `بدأ + فعل مضارع` for beginning change, `اشتد` for intensification, plural imperative `انتظروا`, future `سـ + فعل`, purpose `لـ + فعل`, direct imperatives `فاستمع / ألقِ`, past response `فألقى`, and `تحوّل إلى` for transformation.
- Productive transfer asks learners to use these Arabic-native frames in a new everyday cold-evening situation.

## Files changed in this run
- `src/data/moses/a2/index.ts` — added Moses-A2-local Part7 imports and active English/Arabic fallback wiring for Chapter 10.
- `docs/automation/moses-a2-language-polish-progress.md` — updated to mark Chapter 10 complete.

## Validation
- Re-fetched `src/data/moses/a2/en/languageFocusPart7.ts` from current `preview`; Chapter 10 English Language Focus is present.
- Re-fetched `src/data/moses/a2/ar/languageFocusPart7.ts` from current `preview`; Chapter 10 Arabic Language Focus is present.
- Re-fetched `src/data/moses/a2/index.ts` after the wiring commit and confirmed both Part7 imports are present.
- Confirmed the English story-page fallback chain now includes `mosesA2LanguageFocusExercisesPart7[page.id]`.
- Confirmed the Arabic story-page fallback chain now includes `mosesA2LanguageFocusExercisesPart7Ar[page.id]`.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because no executable runner was available in this run.

## Commits
- Chapter 10 English Language Focus file: `761ed36a9ee6219ee885626ad53c294fea005104`
- Chapter 10 Arabic Language Focus file: `5c8a5fbedc06c6f083068bbc3ff0bb778d9b4a12`
- Chapter 10 active wiring: `4a94bae534e186920acf21f4c744d0b7fd6cf14c`

## Exact next task
- Chapter 11 only.
- Read the full English and Arabic Chapter 11 story texts and their current Quick Challenges.
- Manually author Chapter 11 Language Focus in both languages from their respective texts.
- Do not start Chapter 12 in the same run.

## Unresolved issues
- None for Chapter 10.
