# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–11 English Language Focus: COMPLETE
- Chapters 1–11 Arabic Language Focus: COMPLETE
- Chapters 12–16: PENDING

## Chapter 11 English decisions
- Read the full Chapter 11 English story and its current Quick Challenge before authoring.
- The Quick Challenge already checks the shining hand as a sign and Harun as Moses’s companion, so Language Focus does not retest those facts.
- Language Focus targets come directly from Chapter 11 language: imperative commands (`Put / Take / Go / Tell`), sequential instructions with `now`, communicating a message with `tell + person + clause`, a new visible state with `be + adjective/participle`, `become` for change into a new role, `make + person + complement` for assigning a status, negative past `did not + base verb`, `take + person + with` for accompaniment, movement to a destination, and `to + verb` for purpose.
- Productive transfer uses a new school/family task so learners apply instruction, accompaniment, purpose and result language without retelling Moses’s mission.

## Chapter 11 Arabic decisions
- Read the full Arabic Chapter 11 independently and designed its Language Focus from the Arabic wording rather than translating the English activities.
- The Quick Challenge already checks the role of the shining hand and Harun, so Arabic Language Focus instead targets the text’s language system: direct imperatives `أدخل / أخرج / اذهب / أخبر`, sequencing with `ثم`, message reporting with `أخبره أن ...`, sudden/new state `فإذا هي بيضاء مضيئة`, past selection `اختار`, `جعل + شخص + خبر` for assigning a new role/state, past negation `لم + فعل مضارع`, accompaniment `أخذ ... معه`, movement `ذهب إلى`, and purpose with `لـ + فعل` as in `لتبليغ`.
- Productive transfer uses an everyday task and Arabic-native frames for command, accompaniment, purpose and result.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart8.ts` — created with Chapter 11 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart8.ts` — created with Chapter 11 Arabic Language Focus.
- `src/data/moses/a2/index.ts` — added Moses-A2-local Part8 imports and active English/Arabic fallback wiring.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Re-fetched `src/data/moses/a2/en/languageFocusPart8.ts` from `preview` and confirmed four Chapter 11 English activities are present.
- Re-fetched `src/data/moses/a2/ar/languageFocusPart8.ts` from `preview` and confirmed four independently authored Arabic activities are present.
- Re-fetched `src/data/moses/a2/index.ts` after the wiring commit and confirmed both Part8 imports are present.
- Confirmed the English fallback chain includes `mosesA2LanguageFocusExercisesPart8[page.id]`.
- Confirmed the Arabic fallback chain includes `mosesA2LanguageFocusExercisesPart8Ar[page.id]`.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because no executable runner was available through the connected GitHub actions in this run.

## Commits
- Chapter 11 English Language Focus: `e925ce956e46468005478f7ac360cb25f71f7a1d`
- Chapter 11 Arabic Language Focus: `837b7582c86335881179f6324f80b8ec952011de`
- Chapter 11 active wiring: `efc353ccac5558c3c4a533ca2e474c9a34e3d1e8`

## Exact next task
- Chapter 12 only.
- Read the full English and Arabic Chapter 12 story texts and their current Quick Challenges.
- Manually author Chapter 12 Language Focus in both languages from their respective texts.
- Do not start Chapter 13 in the same run.

## Unresolved issues
- None identified for Chapter 11.
