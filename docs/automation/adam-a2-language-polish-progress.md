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
- Chapters 9-10: NOT STARTED in this automation

## Files changed in the latest run

- `src/data/adam/a2/en/languageFocusPart7.ts` — Chapter 8 English Language Focus added manually from the full English Chapter 8 text.
- `src/data/adam/a2/ar/languageFocusPart7.ts` — Chapter 8 Arabic Language Focus added manually from the full Arabic Chapter 8 text.
- `src/data/adam/a2/index.ts` — minimal fallback wiring added so Chapter 8 loads from Part 7 while Chapters 1-7 continue using their existing Language Focus files.
- `docs/automation/adam-a2-language-polish-progress.md` — progress advanced to Chapter 9.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 8 pedagogical decisions

### English
- The Quick Challenge already retrieves which offering Habil and Qabil brought, so Language Focus does not ask that comprehension question again.
- `was + adjective`, `love + -ing`, `became + role`, and `be + job` are used to notice how the chapter describes character, interests and later roles.
- `when they grew up` and `one day` are treated as simple narrative time signals.
- `to solve the problem` is used for purpose and `had to + verb` for past necessity.
- `best / healthiest`, `just a handful`, and `but` are used to notice quality, amount and contrast without turning the activity into another recall quiz.
- The final production transfers description, necessity, purpose and choosing/giving the best to familiar A2 contexts.

### Arabic
- The Arabic Language Focus was authored directly from the Arabic Chapter 8 text rather than translated mechanically from English.
- `كان + صفة`, `كان يحب`, and `أصبح + دور/مهنة` are used to distinguish description, interest and change of role.
- `لما كبرا` and `في يوم من الأيام` are used as natural narrative-time expressions from the Arabic text.
- `لِحَلِّ ...` is treated as purpose language and `كان يجب عليهما أن ...` as past necessity.
- `أفضل / أصح`, `فقط`, and `لكن` are used to notice quality, limited quantity and contrast.
- The final Arabic production uses natural sentence starters for وصف، ضرورة، غرض واختيار جيد rather than mirroring the English wording mechanically.

## Benchmark / alignment used

- Current Adam A2 Chapter 7 English and Arabic Language Focus files were re-read to preserve the established Yunus Emre A2-quality architecture: contextual noticing, clear language function, controlled contextual work, and short meaningful production.
- The established TYMM grammaring approach remains in force. No new curriculum claim was required in this run.

## Validation performed

- Read the full Chapter 8 English story text.
- Read the full Chapter 8 Arabic story text.
- Read Chapter 8 English and Arabic Quick Challenges before authoring to prevent comprehension duplication.
- Confirmed the `preview` branch head immediately before writes: `874b9dafcb3a74a7eaa9a8807fac4ffd4daae9bc`.
- Diff from that head to implementation head `6f78c3395cffeb3f9acfa5f2440fae64dbe27a81` contains only two new Chapter 8 Language Focus files and minimal index wiring.
- Story prose files were not edited.
- No remaining exercise-system audit was started.
- No automated typecheck/build or CI pass is claimed in this run.

## Commit

Implementation head before this checkpoint commit: `6f78c3395cffeb3f9acfa5f2440fae64dbe27a81`

## Exact next task

Read Adam A2 Chapter 9 in full in English and Arabic, read Chapter 9 Quick Challenges, then author ONLY Chapter 9 English + Arabic Language Focus at the same standard. Do not start Chapter 10 in the same run and do not audit the remaining exercise system yet.

## Unresolved issues

- None for Chapter 8 content identified in this run.
