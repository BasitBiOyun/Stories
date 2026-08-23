# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE
- Chapter 3 English Language Focus: COMPLETE
- Chapter 3 Arabic Language Focus: COMPLETE

## Chapter 3 English decisions
- Read the full Chapter 3 English story and its Quick Challenge before authoring.
- Kept Quick Challenge focused on the comprehension claim that Umayya was rich/powerful and wanted Islam's message to stop.
- Language Focus instead targets language genuinely present in Chapter 3:
  - `were getting + comparative adjective` for continuing change (`poorer / richer`)
  - `the most + adjective` for comparison with a whole group
  - `one of the + superlative + plural noun` for placing one person inside a top group
  - `were + adjective` for general past conditions
  - `was a center for + -ing` for the function of a place
  - `from + place` and `especially` for origin and emphasis
  - `became + noun phrase` for change of role/state
  - `when + past clause` for time/background
  - `started + -ing` for the beginning of an activity
  - `wanted + person/thing + to + verb` for a desired result
- Productive work asks learners to describe an imaginary changing city using place, comparison, time and intention language instead of retelling the Quick Challenge answer.

## Chapter 3 Arabic decisions
- Read the full Arabic Chapter 3 independently and authored from its actual Arabic wording rather than translating English activities.
- Language Focus targets:
  - `كان + فعل مضارع` with `يزداد` for continuing change in the past
  - `الأقوى` and `من أغنى ... وأكثرهم ...` for comparison/superlative meaning
  - `كانت + صفة` for a general past condition
  - `كانت ... مركزًا لـ + مصدر` for the function of a place
  - `من + مكان` and `خاصةً` for origin and emphasis
  - `أصبح + اسم/صفة` for change of role/state
  - `عندما + جملة` for time/background
  - `بدأ + فعل مضارع` for beginning an activity
  - `أراد + أن + فعل` for desire/intended result
- During validation, source wording was rechecked and the Arabic activity was corrected to match the canonical text exactly: `بدأ ... يدعو إلى الإسلام` and `أراد أمية أن يمنع هذه الرسالة`.
- Productive work uses Arabic-native frames to describe an imaginary changing city rather than reproduce the chapter's comprehension answer.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart2.ts` — created with Chapter 3 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart2.ts` — created with Chapter 3 Arabic Language Focus and source-alignment correction
- `src/data/mecca/a2/index.ts` — added book-local Part2 fallback wiring for Chapter 3 in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Chapter 3 English and Arabic full story texts were read; story prose was not changed.
- Chapter 3 English and Arabic Quick Challenges were read; Language Focus does not simply repeat their Umayya comprehension statement.
- Arabic canonical wording was re-fetched directly from `src/data/mecca/a2/ar/pages.ts` and the authored activity was corrected to match it.
- English Chapter 3 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 3 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part2 fallback wiring is active in both English and Arabic while Chapters 1–2 continue to fall back to the original Language Focus maps.
- English Chapter 3 Language Focus commit: `38a2fe228394fbf5a61949501d2ee8e60187db32`.
- Arabic Chapter 3 initial commit: `ea938a65aa9dcc435f38a3be337849ae265d1884`.
- Active wiring commit: `0d923659f8f419390d69eaf49b1c0678b8369b39`.
- Arabic source-alignment correction commit: `4c46c9b82930f5ee8be33c1345d1862672257661`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 4 only: read the full English and Arabic Chapter 4 texts and Quick Challenges, then manually author Chapter 4 Language Focus in both languages.
- Do not start Chapter 5 in the same run.

## Unresolved issues
- None identified for Chapter 3.
