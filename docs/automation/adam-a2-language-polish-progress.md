# Adam A2 Language Polish Progress

phase: LANGUAGE_FOCUS_COMPLETE
nextTask: START_EXERCISE_SYSTEM_AUDIT_ON_NEXT_RUN

## Current status

- Chapter 1 — English: COMPLETE
- Chapter 1 — Arabic: COMPLETE
- Chapter 2 — English: COMPLETE
- Chapter 2 — Arabic: COMPLETE
- Chapter 3 — English: COMPLETE
- Chapter 3 — Arabic: COMPLETE
- Chapter 4 — English: COMPLETE
- Chapter 4 — Arabic: COMPLETE
- Chapter 5 — English: COMPLETE
- Chapter 5 — Arabic: COMPLETE
- Chapter 6 — English: COMPLETE
- Chapter 6 — Arabic: COMPLETE
- Chapter 7 — English: COMPLETE
- Chapter 7 — Arabic: COMPLETE
- Chapter 8 — English: COMPLETE
- Chapter 8 — Arabic: COMPLETE
- Chapter 9 — English: COMPLETE
- Chapter 9 — Arabic: COMPLETE
- Chapter 10 — English: COMPLETE
- Chapter 10 — Arabic: COMPLETE

All Adam A2 story chapters now have manually authored Language Focus in both English and Arabic. Per the hard phase-handoff rule, no exercise-system audit was started in the run that completed Chapter 10.

## Files changed in the latest run

- `src/data/adam/a2/en/languageFocusPart9.ts` — Chapter 10 English Language Focus added manually from the full English Chapter 10 text.
- `src/data/adam/a2/ar/languageFocusPart9.ts` — Chapter 10 Arabic Language Focus added manually from the full Arabic Chapter 10 text.
- `src/data/adam/a2/index.ts` — minimal wiring added so Chapter 10 loads from Part 9 while Chapters 1-9 keep their existing Language Focus files.
- `docs/automation/adam-a2-language-polish-progress.md` — Phase 1 marked complete and handoff prepared for the next run.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 10 pedagogical decisions

### English
- Chapter 10 Quick Challenge already checks who spread Adam’s message worldwide, so Language Focus does not repeat that comprehension question.
- `should + verb` is used for advice and expected behaviour: staying away from jealousy and controlling anger.
- `tell + person + to + verb` is used as functional guidance language.
- `had to + verb` is used for past necessity/responsibility in `He had to continue his life`.
- `became/got + adjective` and completed past verbs are contrasted to notice change of state versus past events.
- `still` is used to show continuation into the present.
- `help + person + to + verb` is used to express positive support/result.
- The final production transfers advice, past responsibility, change over time and positive support into familiar A2 situations.

### Arabic
- The Arabic Language Focus was authored directly from the Arabic Chapter 10 text rather than translated from English.
- `يجب أن + فعل` is used for direct advice, while `تدعو ... إلى` is used for guidance toward a value or behaviour.
- `كان عليه أن + فعل` is used for past duty/necessity.
- `كان + صفة` describes a past state, while `أصبح + صفة` shows change over time.
- `ما زالت ... إلى اليوم` is used to notice continuation up to the present.
- `تساعد + شخص + على أن + فعل` is used to express positive support or effect.
- The final production uses natural Arabic starters for advice, past duty, change and support rather than mirroring English forms.

## Validation performed

- Read the full Chapter 10 English story text.
- Read the full Chapter 10 Arabic story text.
- Read Chapter 10 English and Arabic Quick Challenges before authoring to prevent comprehension duplication.
- Reused the established Adam/Yunus A2 Language Focus architecture: contextual noticing, language function, controlled contextual work, and short meaningful production.
- Confirmed the `preview` branch head before implementation: `0605caf939a3167df32eea827ede0951579f5397`.
- Re-checked the branch head before index wiring.
- Compared `0605caf939a3167df32eea827ede0951579f5397` to implementation head `d726a627f40397f24eb663fcbb7534d7f5440894`.
- The implementation diff contains only two new Chapter 10 Language Focus files and minimal `index.ts` wiring.
- Story prose files were not edited.
- No remaining exercise-system audit was started.
- No automated typecheck/build or CI pass is claimed in this run.

## Commit

Implementation head before this checkpoint commit: `d726a627f40397f24eb663fcbb7534d7f5440894`

## Exact next task

On the NEXT run only, start Phase 2 by changing the checkpoint phase to `EXERCISE_SYSTEM`. Audit Adam A2 English and Arabic Quick Challenges, Knowledge Check, Vocabulary Challenge, current Final Review/Final Challenge files and active wiring. Fix justified technical and pedagogical issues without changing story prose. Then build the dedicated cumulative Language Review and separate whole-story Final Challenge architecture at the Yunus Emre A2 quality standard. If Phase 2 does not finish in one run, record exact partial progress and resume it on the following run.

## Unresolved issues

- None identified for Chapter 10 Language Focus in this run.
