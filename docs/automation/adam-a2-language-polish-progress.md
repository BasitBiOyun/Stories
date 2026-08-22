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
- Chapters 5-10: NOT STARTED in this automation

## Files changed

- `src/data/adam/a2/en/languageFocusPart3.ts` — Chapter 4 English Language Focus added manually from the full English Chapter 4 text.
- `src/data/adam/a2/ar/languageFocusPart3.ts` — Chapter 4 Arabic Language Focus added manually from the full Arabic Chapter 4 text.
- `src/data/adam/a2/index.ts` — minimal fallback wiring added so Chapter 4 loads from Part 3 while Chapters 1-3 continue using their existing Language Focus files.
- `docs/automation/adam-a2-language-polish-progress.md` — progress advanced to Chapter 5.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 4 pedagogical decisions

### English
- The current Quick Challenge already asks why Allah gave Adam a wife, so Language Focus does not repeat the loneliness-to-Eve comprehension question as a retrieval task.
- `want + person + to + verb` and its negative form are practised through the chapter’s own `didn’t want Allah to ...` and `wanted Adam to ...` patterns. The aim is to express what someone wants another person to do or experience.
- `tell + person + to + verb` versus `tell + person + not to + verb` is used for advice, warning and prohibition through the chapter’s two actual warnings: being careful about Iblis and not going near the tree.
- `started to + verb` is used to notice the beginning of a feeling or new situation through `started to feel lonely` and `started to live together`.
- `more ... than ...` and `but` are noticed through the description of Paradise and the shift from that positive description to the single warning.
- The productive task asks learners to combine desire, a new situation and a clear positive/negative instruction rather than merely retell why Eve was created.

### Arabic
- The Arabic Language Focus was authored directly from the Arabic Chapter 4 text, not translated mechanically from the English activities.
- `لم يرد أن + فعل`, `خطط لـ`, `ظن أن` and `لذلك` are used to distinguish negative desire, planning, reported thought and reason-result connection in the first paragraph.
- Warning/prohibition is developed through four distinct forms genuinely present in the text: `حذّر ... من`, `قال له أن يكون ...`, `منع ... من`, and the direct prohibitive `لا تقربا ...`.
- Narrative connection and change are practised through `بعد ذلك`, `شعر بـ`, the result/sequence use of `فـ`, and contrast with `لكن`.
- The productive task asks learners to express a desire or plan and then give a warning/prohibition using the Arabic chapter’s own structures.

## Benchmark / alignment used

- Current `preview` Yunus Emre A2 Language Focus was re-read as the quality benchmark. Its pattern of contextual noticing, explicit language-function work, controlled reconstruction/matching and short meaningful production was followed without copying its chapter content.
- The established TYMM grammaring approach remains in force: notice language in story context, understand meaning/function, use it in controlled contextual work, then produce a short meaningful response. No additional curriculum claim was needed for this chapter.

## Validation performed

- Read the full Chapter 4 English story text.
- Read the full Chapter 4 Arabic story text.
- Read Chapter 4 English and Arabic Quick Challenges before authoring to prevent comprehension duplication.
- Re-read the current Yunus Emre A2 Language Focus benchmark.
- Confirmed the current `preview` branch head immediately before writes.
- Diff from the previous checkpoint head to the implementation head contains only two new Chapter 4 Language Focus files and the minimal index wiring.
- Story prose files were not edited.
- No remaining exercise-system audit was started.
- No automated typecheck/build or CI workflow ran in this run; compile status is not claimed as verified.

## Commit

Implementation head before this checkpoint commit: `38dd8348d11284bd7730db184e4ccf6869075d6d`

## Exact next task

Read Adam A2 Chapter 5 in full in English and Arabic, read Chapter 5 Quick Challenges, then author ONLY Chapter 5 English + Arabic Language Focus at the same standard. Do not start Chapter 6 in the same run and do not audit the remaining exercise system yet.

## Unresolved issues

- None for Chapter 4 content identified in this run.
