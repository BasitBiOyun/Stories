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
- Chapters 8-10: NOT STARTED in this automation

## Files changed in the latest run

- `src/data/adam/a2/en/languageFocusPart6.ts` — Chapter 7 English Language Focus added manually from the full English Chapter 7 text.
- `src/data/adam/a2/ar/languageFocusPart6.ts` — Chapter 7 Arabic Language Focus added manually from the full Arabic Chapter 7 text.
- `src/data/adam/a2/index.ts` — minimal fallback wiring added so Chapter 7 loads from Part 6 while Chapters 1-6 continue using their existing Language Focus files.
- `docs/automation/adam-a2-language-polish-progress.md` — progress advanced to Chapter 8.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 7 pedagogical decisions

### English
- The Quick Challenge already retrieves the word `honest` from Adam’s teaching list, so Language Focus does not ask the learner to recall that same content again.
- The chapter’s strongest communicative pattern is guidance directed toward other people. `teach + person + to + verb`, `warn + person + against ...`, and `want ... to ...` are therefore treated as language for teaching, warning and positive influence rather than as isolated grammar labels.
- `because` is used from the chapter’s warning about Iblis to show reason, while `not X, but Y` is used to notice how a wrong description is rejected and replaced by the correct one.
- The chapter’s time movement is made visible through `many years`, `then` and `after Adam’s death`; learners rebuild the progression from Adam’s life and teaching to the later messengers.
- The productive task transfers teaching, warning, reason and positive intention to a familiar daily-life context instead of asking for a content retell.

### Arabic
- The Arabic Language Focus was authored directly from the Arabic Chapter 7 text rather than translated mechanically from English.
- `عَلَّمَ + شخص + أَنْ + فعل`, `حَذَّرَ + شخص + مِنْ`, and `كانوا يُريدونَ أَنْ ...` are used as the chapter’s central guidance patterns because they naturally carry teaching, warning and intention in the Arabic story.
- `لِأَنَّ` is taught as reason language, while `لَيْسَ ... بَلْ ...` is treated as a simple correction/contrast pattern grounded in the sentence describing Iblis as an enemy rather than a friend.
- `سنين طويلة`, `ثم`, and `بعد وفاة آدم` are used to make the Arabic narrative sequence visible without turning Language Focus into another comprehension quiz.
- The final Arabic production uses native sentence starters for teaching, warning, reason and positive intention and does not mirror the English wording mechanically.

## Benchmark / alignment used

- Current `preview` Yunus Emre A2 Chapter 7 Language Focus was re-read in English and Arabic as the quality benchmark. Its combination of contextual noticing, language-function work, controlled reconstruction/sequence work and short meaningful production was followed without copying its content.
- The established TYMM grammaring approach remains in force: notice language in story context, understand meaning/function, use it in controlled contextual work, then produce a short meaningful response. No new curriculum claim was required in this run.

## Validation performed

- Read the full Chapter 7 English story text.
- Read the full Chapter 7 Arabic story text.
- Read Chapter 7 English and Arabic Quick Challenges before authoring to prevent comprehension duplication.
- Re-read the current Yunus Emre A2 Chapter 7 English and Arabic Language Focus benchmark.
- Confirmed the current `preview` branch head immediately before writes: `6ea9f8e07ada553e6de06cd7e22d1097018b8b17`.
- Diff from that head to implementation head `52d2181ad0883ef8315910971fcb2d334a83107c` contains only two new Chapter 7 Language Focus files and minimal index wiring.
- Story prose files were not edited.
- No remaining exercise-system audit was started.
- GitHub combined status for implementation head returned no status checks; no automated typecheck/build or CI pass is claimed.

## Commit

Implementation head before this checkpoint commit: `52d2181ad0883ef8315910971fcb2d334a83107c`

## Exact next task

Read Adam A2 Chapter 8 in full in English and Arabic, read Chapter 8 Quick Challenges, then author ONLY Chapter 8 English + Arabic Language Focus at the same standard. Do not start Chapter 9 in the same run and do not audit the remaining exercise system yet.

## Unresolved issues

- None for Chapter 7 content identified in this run.
