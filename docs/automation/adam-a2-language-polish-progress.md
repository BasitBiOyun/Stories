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
- Chapters 7-10: NOT STARTED in this automation

## Files changed

- `src/data/adam/a2/en/languageFocusPart5.ts` — Chapter 6 English Language Focus added manually from the full English Chapter 6 text.
- `src/data/adam/a2/ar/languageFocusPart5.ts` — Chapter 6 Arabic Language Focus added manually from the full Arabic Chapter 6 text.
- `src/data/adam/a2/index.ts` — minimal fallback wiring added so Chapter 6 loads from Part 5 while Chapters 1-5 continue using their existing Language Focus files.
- `docs/automation/adam-a2-language-polish-progress.md` — progress advanced to Chapter 7.

No story prose, Quick Challenge, Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited in this run.

## Chapter 6 pedagogical decisions

### English
- The Quick Challenge already asks what happened after Allah forgave Adam and Eve, so Language Focus does not repeat the move-to-Earth comprehension point.
- `were going to + verb` is treated as the chapter’s main planning/responsibility pattern because the first paragraph repeatedly uses it to describe duties that lay ahead from that point in the story: directing, improving, building, protecting and helping.
- Purpose is taught through the chapter’s own action-purpose relationships: being put on Earth `to live there`, using land `to grow crops and keep animals`, and building for housing. The activity focuses on what the infinitive communicates rather than isolated form naming.
- `wanted + person + (not) to + verb` is used to notice how the final sentence expresses influence over another group’s action, while `was still around` is separated as continuing-state language.
- The productive task transfers plan + purpose + responsibility + positive influence to a simple real-life context instead of asking learners to retell the chapter.

### Arabic
- The Arabic Language Focus was authored directly from the Arabic Chapter 6 text rather than translated mechanically from English.
- `كانا + سـ + فعل` is used as the core pattern for responsibilities that were still ahead from a past point in the story: `سيدبران`, `سيستخدمان`, `سيبنيان` and the linked responsibilities of protecting nature and helping the weak.
- Purpose is taught from the Arabic text’s own forms: `ليعيشا`, `لإدارة الأرض`, and `لزراعة الزروع وتربية الحيوانات`, with the learner identifying the communicative function of `لِـ / لِيـ...`.
- The ending contains both `أراد إبليس أن...` and `كان يريد أن...`; these are used to distinguish a stated intention from an intention presented as continuing in the past.
- The productive task uses Arabic-native sentence starters for a plan, purpose, responsibility and positive intention. It does not mirror the English wording mechanically.

## Benchmark / alignment used

- Current `preview` Yunus Emre A2 Chapter 6 Language Focus was re-read in English and Arabic as the quality benchmark. Its structure of contextual noticing, language-function work, controlled rebuilding/matching and short meaningful production was followed without copying its content.
- The established TYMM grammaring approach remains in force: notice language in story context, understand meaning/function, use it in controlled contextual work, then produce a short meaningful response. No new curriculum claim was needed in this run.

## Validation performed

- Read the full Chapter 6 English story text.
- Read the full Chapter 6 Arabic story text.
- Read Chapter 6 English and Arabic Quick Challenges before authoring to prevent comprehension duplication.
- Re-read the current Yunus Emre A2 Chapter 6 English and Arabic Language Focus benchmark.
- Confirmed the current `preview` branch head immediately before writes: `8e756a4aa1d58516558132181863a2cc0a79f031`.
- Diff from that head to implementation head `3a62139c7b2c7c2fd4e0c1a1edd00548d6d44cb5` contains only two new Chapter 6 Language Focus files and minimal index wiring.
- Story prose files were not edited.
- No remaining exercise-system audit was started.
- No automated typecheck/build or CI workflow was run or verified in this run; compile status is not claimed as verified.

## Commit

Implementation head before this checkpoint commit: `3a62139c7b2c7c2fd4e0c1a1edd00548d6d44cb5`

## Exact next task

Read Adam A2 Chapter 7 in full in English and Arabic, read Chapter 7 Quick Challenges, then author ONLY Chapter 7 English + Arabic Language Focus at the same standard. Do not start Chapter 8 in the same run and do not audit the remaining exercise system yet.

## Unresolved issues

- None for Chapter 6 content identified in this run.
