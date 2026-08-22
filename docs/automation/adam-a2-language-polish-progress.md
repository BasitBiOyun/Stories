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
- Chapters 6-10: NOT STARTED in this automation

## Files changed

- `src/data/adam/a2/en/languageFocusPart4.ts` — Chapter 5 English Language Focus added manually from the full English Chapter 5 text.
- `src/data/adam/a2/ar/languageFocusPart4.ts` — Chapter 5 Arabic Language Focus added manually from the full Arabic Chapter 5 text.
- `src/data/adam/a2/index.ts` — minimal fallback wiring added so Chapter 5 loads from Part 4 while Chapters 1-4 continue using their existing Language Focus files.
- `docs/automation/adam-a2-language-polish-progress.md` — progress advanced to Chapter 6.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 5 pedagogical decisions

### English
- The Quick Challenge already asks what promise Iblis made about the tree, so Language Focus does not repeat that comprehension question. Instead, the same sentence is used to notice the functional condition-result pattern `if + present ..., will + verb`.
- The chapter’s repentance sequence is treated as useful communicative language: `made a mistake`, `wasn’t on purpose`, `learned from`, and `decided never to repeat`. Learners identify what each chunk communicates rather than merely recalling the plot.
- `but`, `however`, and `because` are contrasted by function: local contrast, change of direction between responses, and reason.
- The productive task transfers the chapter language to a simple personal or general mistake-to-learning sequence without requiring learners to retell the story.

### Arabic
- The Arabic Language Focus was authored directly from the Arabic Chapter 5 text rather than translated mechanically from English.
- The Iblis sentence is used for `إذا` as condition and `فـ + لن + فعل` as a negative future result.
- The repentance sequence uses the chapter’s own expressions: `وقع في الخطأ`, `لم يقصد`, `تعلم من الخطأ`, and `قرر أن لا يكرر` to distinguish event, intention, learning and future decision.
- `طلب المغفرة`, `سأل ... أن`, `ولكن`, and `لأن` are used to distinguish requesting forgiveness, asking someone to do something, contrast, and reason-result connection.
- The productive task asks learners to describe a simple mistake, intention, learning and new decision with Arabic structures actually present in the chapter.

## Benchmark / alignment used

- Current `preview` Yunus Emre A2 Language Focus was re-read as the quality benchmark. Its pattern of contextual noticing, explicit language-function work, controlled reconstruction/matching and short meaningful production was followed without copying its chapter content.
- The established TYMM grammaring approach remains in force: notice language in story context, understand meaning/function, use it in controlled contextual work, then produce a short meaningful response. No new curriculum claim was needed in this run.

## Validation performed

- Read the full Chapter 5 English story text.
- Read the full Chapter 5 Arabic story text.
- Read Chapter 5 English and Arabic Quick Challenges before authoring to prevent comprehension duplication.
- Re-read the current Yunus Emre A2 Language Focus benchmark.
- Confirmed the current `preview` branch head immediately before writes.
- Diff from the previous checkpoint head `11d9c7dfc12221470d327a6ef889ee9796cac342` to the implementation head `15499f52c2befeb061330f2a1d5f24fe41330ad8` contains only two new Chapter 5 Language Focus files and minimal index wiring.
- Story prose files were not edited.
- No remaining exercise-system audit was started.
- No automated typecheck/build or CI workflow ran in this run; compile status is not claimed as verified.

## Commit

Implementation head before this checkpoint commit: `15499f52c2befeb061330f2a1d5f24fe41330ad8`

## Exact next task

Read Adam A2 Chapter 6 in full in English and Arabic, read Chapter 6 Quick Challenges, then author ONLY Chapter 6 English + Arabic Language Focus at the same standard. Do not start Chapter 7 in the same run and do not audit the remaining exercise system yet.

## Unresolved issues

- None for Chapter 5 content identified in this run.
