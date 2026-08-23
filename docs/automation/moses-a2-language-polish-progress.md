# Moses A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE
- Chapters 3–16: PENDING

## Chapter 2 English decisions
- Read the full Chapter 2 English story and its current Quick Challenge before authoring.
- Kept Quick Challenge focused on the result of the dream interpretation; Language Focus does not ask learners to retrieve that same comprehension answer.
- Language Focus targets are grounded in Chapter 2 language:
  - simple past verbs (`had`, `saw`, `woke up`, `called`, `asked`) for sequencing completed events
  - `will + base verb` and `will be born` for future prediction
  - direct imperative language for commands
  - `when + past clause` for connecting a situation with a past result
- Productive work transfers the patterns to a new harmless A2 situation instead of retelling Pharaoh’s order.

## Chapter 2 Arabic decisions
- Read the full Arabic Chapter 2 independently and used its own language rather than translating the English activity set mechanically.
- Language Focus targets are grounded in the Arabic chapter:
  - past verbs such as `رأى / استيقظ / استدعى / سأل` for sequencing events
  - `سـ + فعل مضارع` through `سيولد / سيقتل` for future meaning
  - the imperative form through `اقتلوا` for direct command language
  - `عندما + فعل ماضٍ` for connecting a past situation with what happened in it
- Productive work uses a new safe context and Arabic-native frames for prediction, instruction and past-event connection.

## Files changed in this run
- `src/data/moses/a2/en/languageFocus.ts` — added Chapter 2 English Language Focus
- `src/data/moses/a2/ar/languageFocus.ts` — added Chapter 2 Arabic Language Focus
- `docs/automation/moses-a2-language-polish-progress.md` — updated

## Validation
- Re-fetched the English Language Focus from `preview`; Chapter 2 contains four activities and the new data is present under key `2`.
- Re-fetched the Arabic Language Focus from `preview`; Chapter 2 contains four independently authored activities under key `2`.
- Existing Moses A2 `index.ts` already attaches `languageFocusExercises` dynamically by chapter ID, so no index change was required for Chapter 2.
- Chapter 2 Quick Challenges were read in English and Arabic; Language Focus does not duplicate their main comprehension question.
- Existing Knowledge Check, Vocabulary Challenge, Language Review/Final Review, Final Challenge, Teacher Guide and Self Study Guide were not modified.
- Canonical story prose was not changed.
- No typecheck/build/CI pass is claimed because the connected GitHub file actions do not expose an executable runner in this run.

## Commits
- Chapter 2 English Language Focus: `847d7c65302adbb454a37270cacb7063e1fa7cce`
- Chapter 2 Arabic Language Focus: `020df6490692905cb10d042a92987651a79bcc88`

## Next task
- Chapter 3 only: read the full English and Arabic Chapter 3 texts and their Quick Challenges, then manually author Chapter 3 Language Focus in both languages.
- Do not start Chapter 4 in the same run.

## Unresolved issues
- None identified for Chapter 2.
