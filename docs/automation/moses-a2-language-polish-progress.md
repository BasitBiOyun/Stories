# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–9 English Language Focus: COMPLETE
- Chapters 1–9 Arabic Language Focus: COMPLETE
- Chapter 10 English Language Focus: AUTHORED, WIRING PENDING
- Chapter 10 Arabic Language Focus: AUTHORED, WIRING PENDING
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
- `src/data/moses/a2/en/languageFocusPart7.ts` — created with Chapter 10 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart7.ts` — created with Chapter 10 Arabic Language Focus.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Full Chapter 10 English and Arabic story texts were read from `preview`.
- English and Arabic Chapter 10 Quick Challenges were read; both are sequencing activities and the new Language Focus does not duplicate that comprehension task.
- Chapter 10 content was authored independently in English and Arabic from the respective source texts.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed.

## Commits in this run
- Chapter 10 English Language Focus file: `761ed36a9ee6219ee885626ad53c294fea005104`
- Chapter 10 Arabic Language Focus file: `5c8a5fbedc06c6f083068bbc3ff0bb778d9b4a12`

## Exact next task
- Resume Chapter 10 only.
- Re-fetch `src/data/moses/a2/index.ts` and both Part7 files from current `preview`.
- Add Moses-A2-local Part7 imports and fallback wiring for English and Arabic Chapter 10, without changing any shared/global file or unrelated book.
- Re-fetch the index and both Part7 files to validate active rendering.
- Only after wiring is confirmed, mark Chapter 10 COMPLETE. Do not start Chapter 11 in that same run because Chapter 10 began this run as partial/incomplete.

## Unresolved issues
- Chapter 10 Language Focus content exists in both languages but is not yet wired into `src/data/moses/a2/index.ts`; therefore Chapter 10 is intentionally marked partial, not complete.
