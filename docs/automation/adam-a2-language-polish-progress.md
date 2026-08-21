# Adam A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Current status

- Chapter 1 — English: COMPLETE
- Chapter 1 — Arabic: COMPLETE
- Chapter 2 — English: COMPLETE
- Chapter 2 — Arabic: COMPLETE
- Chapters 3-10: NOT STARTED in this automation

## Files changed

- `src/data/adam/a2/en/languageFocus.ts` — Chapter 2 Language Focus added manually from the English story text.
- `src/data/adam/a2/ar/languageFocus.ts` — Chapter 2 Language Focus added manually from the Arabic story text.
- `docs/automation/adam-a2-language-polish-progress.md` — progress advanced to Chapter 3.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 2 pedagogical decisions

### English
- `could + base verb` from `Adam could learn and understand` is treated as ability language rather than as a comprehension fact.
- `taught him to think` and `learned more` are used to distinguish teaching from the result of learning.
- Comparison is practised through the actual text patterns `wiser than the angels` and `more than angels knew`.
- Meaning links are practised through `because` for reason, `thought (that)` for reported opinion, and `but` for contrasting the angels’ view with Iblis’s view.
- Productive task asks learners to combine ability, comparison, reason and two contrasting opinions in a short A2 explanation.
- The existing Quick Challenge already retrieves the command to show `respect`, so Language Focus does not repeat that item as a comprehension question.

### Arabic
- `كان + مضارع` from `كان آدم يتعلم ويفهم` is practised as description of an ongoing/repeated past state or ability.
- `علّم` versus `تعلّم` is used to distinguish teaching from learning/result.
- Comparison is practised through the chapter’s own patterns `أكثر علمًا من`, `أكثر ذكاءً من`, and `أكثر مما`.
- Meaning links are practised through `لأنّ` for reason, `أنّ` after verbs of seeing/judging to report an idea, and `لكنّ` for contrast.
- Productive task asks learners to describe Adam’s learning, compare him with the angels, then contrast the angels’ view with Iblis’s view.
- The Arabic Language Focus was authored from the Arabic chapter’s own grammar and discourse patterns rather than translated mechanically from English.

## Benchmark / alignment used

- Current `preview` Yunus Emre A2 Language Focus was read as the quality benchmark before authoring Chapter 2.
- The previously established TYMM grammaring approach remains in force: notice language in context, identify meaning/function, reconstruct/control use, then produce a short meaningful response. No new curriculum claim was required in this run.

## Validation performed

- Read the full Chapter 2 English story text.
- Read the full Chapter 2 Arabic story text.
- Read Chapter 2 English and Arabic Quick Challenges to avoid duplication.
- Re-read the current Yunus Emre A2 Language Focus benchmark.
- Confirmed the `preview` branch head before writes.
- Added only Chapter 2 entries to the existing English and Arabic Language Focus files.
- No wiring change was necessary because `src/data/adam/a2/index.ts` already routes chapter-specific Language Focus exercises by page id.
- Story prose files were not edited.
- No automated typecheck/build was available or run in this automation; compile status is not claimed as verified.

## Commit

Implementation head before this checkpoint commit: `39db257141f1bd08e55ef4a208ece02fc256f2d3`

## Exact next task

Read Adam A2 Chapter 3 in full in English and Arabic, read Chapter 3 Quick Challenges, then author ONLY Chapter 3 English + Arabic Language Focus at the same standard. Do not start Chapter 4 in the same run and do not audit the remaining exercise system yet.

## Unresolved issues

- None for Chapter 2 content identified in this run.
