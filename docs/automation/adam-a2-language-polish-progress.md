# Adam A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Current status

- Chapter 1 — English: COMPLETE
- Chapter 1 — Arabic: COMPLETE
- Chapter 2 — English: COMPLETE
- Chapter 2 — Arabic: COMPLETE
- Chapter 3 — English: COMPLETE
- Chapter 3 — Arabic: COMPLETE
- Chapters 4-10: NOT STARTED in this automation

## Files changed

- `src/data/adam/a2/en/languageFocusPart2.ts` — Chapter 3 English Language Focus added manually from the English story text.
- `src/data/adam/a2/ar/languageFocusPart2.ts` — Chapter 3 Arabic Language Focus added manually from the Arabic story text.
- `src/data/adam/a2/index.ts` — minimal fallback wiring added so Chapter 3 loads from the continuation Language Focus files while Chapters 1-2 continue using the original files.
- `docs/automation/adam-a2-language-polish-progress.md` — progress advanced to Chapter 4.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 3 pedagogical decisions

### English
- The existing Quick Challenge already retrieves the simple `Iblis—fire / Adam—soil` fact, so Language Focus does not repeat that comprehension task.
- Comparative language is practised through the chapter’s actual patterns `better than Adam`, `more important than Adam`, `more valuable than Adam`, and `made Adam more valuable`.
- `said`, `thought`, `believed`, and `couldn’t see that ...` are contrasted as different ways to report speech, opinion, belief, and failed understanding.
- `make + object + adjective`, `because`, and `can + verb` are used to trace result, reason, and ability in the chapter’s explanation of useful knowledge.
- The productive task asks learners to report Iblis’s belief, make a comparison, contrast it with the chapter’s message, and add a reason/result without merely retelling the fire/soil fact.

### Arabic
- The Arabic work was authored from the Arabic chapter itself rather than translated mechanically from English.
- `كان + صفة/خبر` and `كان + مضارع` are distinguished through `كان متكبرًا`, `كان مخلوقًا`, `كان يظن`, and `كان يؤمن`.
- Comparison is practised through the text’s own `أفضل من`, `أهم وأفضل من`, and `أكثر قيمة` patterns.
- `يظن أن`, `يؤمن أن`, `لم يكن يرى أن`, and `استمر يقول إن` are used for reporting opinion, belief, failed understanding, and continued assertion.
- `جعل ... أكثر قيمة`, `لأنّ`, and `يستطيع أن + فعل` are used to connect result, reason, and ability in the useful-knowledge idea.
- The productive task requires a short A2 explanation using opinion/belief language, comparison, contrast, and a reason or ability structure.

## Benchmark / alignment used

- Current `preview` Yunus Emre A2 Language Focus was re-read as the quality benchmark, including its Chapter 3 balance of contextual noticing, functional matching, and short meaningful production.
- The established TYMM grammaring approach remains in force: notice language in context, identify meaning/function, use it in controlled contextual work, then produce a short meaningful response. No new curriculum claim was required in this run.

## Validation performed

- Read the full Chapter 3 English story text.
- Read the full Chapter 3 Arabic story text.
- Read Chapter 3 English and Arabic Quick Challenges to avoid comprehension duplication.
- Re-read the current Yunus Emre A2 Language Focus benchmark.
- Confirmed the `preview` branch head before writes and again during the write sequence.
- Added only Chapter 3 Language Focus content plus minimal index wiring and this checkpoint.
- Story prose files were not edited.
- No automated typecheck/build ran in this automation; compile status is not claimed as verified.

## Commit

Implementation head before this checkpoint commit: `88a8e6c74b0a72b0e77dd6f4722d482c860351f3`

## Exact next task

Read Adam A2 Chapter 4 in full in English and Arabic, read Chapter 4 Quick Challenges, then author ONLY Chapter 4 English + Arabic Language Focus at the same standard. Do not start Chapter 5 in the same run and do not audit the remaining exercise system yet.

## Unresolved issues

- None for Chapter 3 content identified in this run.
