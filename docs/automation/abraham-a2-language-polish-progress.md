# Abraham A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Completed in this run
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Minimal chapter Language Focus wiring in `src/data/abraham/a2/index.ts`: COMPLETE

## English decisions
- Read the full Chapter 1 story text and its current Quick Challenge before authoring.
- Kept Quick Challenge as comprehension/retrieval and did not duplicate its people-vs-stone-object answer task.
- Language Focus targets are grounded in Chapter 1 language:
  - past biography/story chunks (`was born`, `named`, `grew up`, `made`)
  - `did not + base verb` for negative past facts/actions
  - `could not + base verb` for lack of ability
  - `look/looked like + noun` for similar appearance
  - short productive contrast between the people's belief and Abraham's observation

## Arabic decisions
- Read the full Arabic Chapter 1 independently rather than translating the English Language Focus.
- Language Focus targets are grounded in the Arabic text:
  - `كان/كانوا` for past states, feelings, beliefs and repeated actions
  - `لم` patterns for past negation and lack of ability
  - chapter-specific past narrative verbs (`وُلِدَ`, `سَمَّاهُ`, `جَعَلَهُ`, `ظَنَّ`, `رَأَى`)
  - short productive contrast between the people's belief and Ibrahim's observation

## Files changed
- `src/data/abraham/a2/en/languageFocus.ts` — created; Chapter 1 only
- `src/data/abraham/a2/ar/languageFocus.ts` — created; Chapter 1 only
- `src/data/abraham/a2/index.ts` — imports/wires chapter Language Focus without changing story prose or other exercise layers
- `docs/automation/abraham-a2-language-polish-progress.md` — created

## Validation
- Confirmed Abraham A2 contains 14 story chapters from the active `preview` index.
- Confirmed Chapter 1 English and Arabic source text was read from the current `preview` branch.
- Confirmed Chapter 1 English and Arabic Quick Challenges were read before authoring.
- Compared the approach with the completed Adam A2 chapter-specific EN/AR Language Focus quality standard.
- Story prose was not changed.
- Knowledge Check, Vocabulary Challenge, Final Review/Language Review, Final Challenge, Teacher Guide and Self Study Guide were not modified in this run.
- The index wiring preserves Quick Challenge as `exercises` and adds Language Focus only when a chapter-specific entry exists.
- No executable typecheck/build runner is available through the connected GitHub file actions in this run, so no build/typecheck pass is claimed.

## Commit
- Language Focus/wiring head before this checkpoint: `449fbaa04091bf266b124a86543449ba63b8d518`

## Next task
- Chapter 2 only: read the full English and Arabic Chapter 2 texts and their Quick Challenges, then manually author Chapter 2 Language Focus in both languages.
- Do not start Chapter 3 in the same run.

## Unresolved issues
- None for Chapter 1.
