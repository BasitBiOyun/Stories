# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapters 1–12 English Language Focus: COMPLETE
- Chapters 1–12 Arabic Language Focus: COMPLETE
- Chapters 13–16: PENDING

## Chapter 12 English decisions
- Read the full Chapter 12 English story and its current Quick Challenge before authoring.
- The Quick Challenge already checks whether Pharaoh accepted Moses’s signs as miracles, so Language Focus does not retest that comprehension fact.
- Language Focus targets come directly from Chapter 12 language: `tell + person + about + topic`, `thought + clause` for a past opinion, `decided to + verb` for a decision/intention, direct speech for stating identity/message, linked past actions, `then` for sequence, `turn into` for transformation, `be + descriptive form` for a visible state, `to + verb` for purpose, `can + verb` for claimed ability, and the reaction expressions `laugh at` / `make fun of`.
- Productive transfer uses a new everyday skill/object/experiment situation so learners apply thought/decision, transformation, purpose and ability language without retelling the miracle scene.

## Chapter 12 Arabic decisions
- Read the full Arabic Chapter 12 independently and designed its Language Focus from the Arabic wording rather than translating the English activities.
- The Arabic Quick Challenge already checks whether Pharaoh accepted the signs as miracles, so Language Focus instead targets the text’s language system: `أخبر + شخص + عن + موضوع`, `ظن أن + جملة`, `قرر أن + فعل`, direct speech for identity/message, linked past actions, `ثم` for sequence, `تحول إلى` for transformation, `كان/كانت + صفة` for visible state, `لـ + فعل` for purpose, `يستطيع + فعل` for ability, `سخر من` for ridicule, and `مجرد + اسم` for restrictive/evaluative wording.
- Productive transfer uses an Arabic-native everyday situation for opinion/decision, change, purpose and ability rather than retelling the chapter event.

## Files changed in this run
- `src/data/moses/a2/en/languageFocusPart9.ts` — created with Chapter 12 English Language Focus.
- `src/data/moses/a2/ar/languageFocusPart9.ts` — created with Chapter 12 Arabic Language Focus.
- `src/data/moses/a2/index.ts` — added Moses-A2-local Part9 imports and active English/Arabic fallback wiring.
- `docs/automation/moses-a2-language-polish-progress.md` — updated.

## Validation
- Re-fetched `src/data/moses/a2/en/languageFocusPart9.ts` from `preview` and confirmed four Chapter 12 English activities are present and grounded in the chapter text.
- Re-fetched `src/data/moses/a2/ar/languageFocusPart9.ts` from `preview` and confirmed four independently authored Arabic activities are present and grounded in the Arabic chapter text.
- Re-fetched `src/data/moses/a2/index.ts` after the wiring commit and confirmed both Part9 imports are present.
- Confirmed the English fallback chain includes `mosesA2LanguageFocusExercisesPart9[page.id]`.
- Confirmed the Arabic fallback chain includes `mosesA2LanguageFocusExercisesPart9Ar[page.id]`.
- Story prose was not changed.
- Quick Challenge source content, Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- No typecheck/build/CI pass is claimed because no executable runner was available through the connected GitHub actions in this run.

## Commits
- Chapter 12 English Language Focus: `6b2a933b58af6b786a5340fb818a07dc259bb70b`
- Chapter 12 Arabic Language Focus: `db637135f04f2f6e473653f6fc6eef799f0d53e5`
- Chapter 12 active wiring: `60e29a3c21569fb368f230f0458b4ee65e4c7500`

## Exact next task
- Chapter 13 only.
- Read the full English and Arabic Chapter 13 story texts and their current Quick Challenges.
- Manually author Chapter 13 Language Focus in both languages from their respective texts.
- Do not start Chapter 14 in the same run.

## Unresolved issues
- None identified for Chapter 12.
