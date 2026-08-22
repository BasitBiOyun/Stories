# Adam A2 Language Polish Progress

phase: LANGUAGE_FOCUS

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
- Chapter 10 — English: NOT STARTED
- Chapter 10 — Arabic: NOT STARTED

## Files changed in the latest run

- `src/data/adam/a2/en/languageFocusPart8.ts` — Chapter 9 English Language Focus added manually from the full English Chapter 9 text.
- `src/data/adam/a2/ar/languageFocusPart8.ts` — Chapter 9 Arabic Language Focus added manually from the full Arabic Chapter 9 text.
- `src/data/adam/a2/index.ts` — minimal fallback wiring added so Chapter 9 loads from Part 8 while Chapters 1-8 continue using their existing Language Focus files.
- `docs/automation/adam-a2-language-polish-progress.md` — progress advanced to Chapter 10.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 9 pedagogical decisions

### English
- The Quick Challenge already checks the factual meaning of Habil’s statement that he would not fight back or harm Qabil. Language Focus therefore does not ask that comprehension question again.
- `will + verb` and `won’t + verb` are treated as language for future intention, negative future choice and clear refusal in direct speech.
- `became`, `felt + adjective`, `anger cooled`, and `started to + verb` are used to notice how a narrative describes changing emotional states rather than only listing events.
- `I don’t know what I should do` is used as functional A2 language for uncertainty and asking what the right action is.
- `show someone the way to ...` and `cannot + verb` are used for learning a practical solution and expressing inability.
- The final production transfers future choice, feelings, asking for guidance and giving practical guidance to a safe everyday context.

### Arabic
- The Arabic Language Focus was authored directly from the Arabic Chapter 9 text rather than mechanically translated from English.
- `سـ + فعل` and `لن + فعل` are used to distinguish future intention from future negation/refusal.
- `اسودّ`, `هدأ`, `حزن`, and `بدأ يشعر` are used to notice how the Arabic text expresses change in emotion or state.
- `لا أعرف ماذا أفعل` is used as natural functional language for uncertainty.
- `كيف + فعل` in `يعلّمه كيف يدفن...` is used for learning a method, while `لا أستطيع أن + فعل` expresses inability.
- The final Arabic production uses natural sentence starters for future choice, emotion, requesting help and explaining how to do something rather than mirroring English wording.

## Benchmark / alignment used

- Current Adam A2 Chapter 8 English and Arabic Language Focus files were re-read to preserve the established Yunus Emre A2-quality architecture: contextual noticing, clear language function, controlled contextual work, and short meaningful production.
- The established TYMM grammaring approach remains in force. No new curriculum claim was required in this run.

## Validation performed

- Read the full Chapter 9 English story text.
- Read the full Chapter 9 Arabic story text.
- Read Chapter 9 English and Arabic Quick Challenges before authoring to prevent comprehension duplication.
- Confirmed the `preview` branch head at the start of the run: `4b532fb0ab0d32aa2f099081d576352129357fb8`.
- Diff from that head to implementation head `e1e72f2d7d835a47bf840141eff89e2857ab5f01` contains only two new Chapter 9 Language Focus files and minimal index wiring.
- Story prose files were not edited.
- No remaining exercise-system audit was started.
- No automated typecheck/build or CI pass is claimed in this run.

## Commit

Implementation head before this checkpoint commit: `e1e72f2d7d835a47bf840141eff89e2857ab5f01`

## Exact next task

Read Adam A2 Chapter 10 in full in English and Arabic, read Chapter 10 Quick Challenges, then author ONLY Chapter 10 English + Arabic Language Focus at the same standard. Because Chapter 10 is the final story chapter, the run that completes it must stop after verification and update this checkpoint to `phase: LANGUAGE_FOCUS_COMPLETE` with `nextTask: START_EXERCISE_SYSTEM_AUDIT_ON_NEXT_RUN`. It must not begin the exercise-system audit in that same run.

## Unresolved issues

- None for Chapter 9 content identified in this run.
