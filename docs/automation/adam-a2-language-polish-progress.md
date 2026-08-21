# Adam A2 Language Polish Progress

phase: LANGUAGE_FOCUS

## Current status

- Chapter 1 — English: COMPLETE
- Chapter 1 — Arabic: COMPLETE
- Chapters 2-10: NOT STARTED in this automation

## Files changed

- `src/data/adam/a2/en/languageFocus.ts` — created; Chapter 1 Language Focus authored manually from the English story text.
- `src/data/adam/a2/ar/languageFocus.ts` — created; Chapter 1 Language Focus authored manually from the Arabic story text.
- `src/data/adam/a2/index.ts` — minimal wiring added so chapter-specific `languageFocusExercises` render when present; existing Quick Challenges and all other exercise systems remain unchanged.

## Chapter 1 pedagogical decisions

### English
- Past narrative forms from the actual text: `created`, `told`, `said`, `began`.
- `be going to + verb` as the chapter's future/forward-looking pattern: `was going to create`, `is going to become`, `is going to live`.
- Text linkers by communicative function: `After that`, `Then`, `because`, `Because of this / So`.
- Short productive retell requiring past narration, a future announcement and sequencing language.
- The existing Quick Challenge already tests the soil/skin-colour reason, so Language Focus does not reuse that as a comprehension question.

### Arabic
- Past narrative verbs from the Arabic text itself: `خَلَقَ`, `قَالَ`, `أَحْضَرَتْ`, `صَوَّرَ`.
- Future meaning with `سـ + المضارع`: `سَيَخْلُقُ`, `سَيَكُونُ`, `سَيَعِيشُ`.
- Text linkers by function: `ثُمَّ`, `لِأَنَّهُ`, `لِذَلِكَ`, `لِهَذَا السَّبَبِ`.
- Short productive retell built from the Arabic chapter's own grammar and discourse patterns rather than translated mechanically from English.

## Benchmark / alignment used

- Current `preview` Yunus Emre A2 English and Arabic Language Focus files were read as the quality benchmark.
- Current official Türkiye Yüzyılı Maarif Modeli A2 English pages were checked; the programme explicitly identifies `FLSS1. Grammaring: Selection and Use` alongside receptive and productive language skills. Chapter 1 work therefore moves from noticing/form-function recognition to contextual use and short production.

## Validation performed

- Read the full Chapter 1 English story text and its current Quick Challenge.
- Read the full Chapter 1 Arabic story text and its current Quick Challenge.
- Confirmed story prose files were not edited.
- Confirmed no Knowledge Check, Vocabulary Challenge, Final Review, Final Challenge, Teacher Guide or Self Study Guide content was edited.
- Re-read `src/data/adam/a2/index.ts` before wiring changes and preserved all existing non-Language-Focus routing.
- No automated typecheck/build was available or run in this automation; do not treat compile status as verified.

## Commit

Implementation head before this checkpoint commit: `d99df670eac7eb111838300ac928e3d6a7a778cb`

## Exact next task

Read Adam A2 Chapter 2 in full in English and Arabic, read Chapter 2 Quick Challenges, then author ONLY Chapter 2 English + Arabic Language Focus at the same standard. Do not start Chapter 3 in the same run and do not audit the remaining exercise system yet.

## Unresolved issues

- None for Chapter 1 content identified in this run.
