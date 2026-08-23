# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapter 1 English Language Focus: COMPLETE
- Chapter 1 Arabic Language Focus: COMPLETE
- Chapter 2 English Language Focus: COMPLETE
- Chapter 2 Arabic Language Focus: COMPLETE

## Chapter 2 English decisions
- Read the full Chapter 2 English story and its Quick Challenge before authoring.
- Kept Quick Challenge focused on the rich/poor inequality described by the chapter.
- Language Focus instead targets language genuinely present in Chapter 2:
  - `was called + name` for naming something in the past
  - `there was / there was no` for past existence and conditions
  - `was + noun phrase` for describing a place in the past
  - `a lot of + noun` and `many + plural noun` for quantity
  - `but` for contrast
  - `between A and B` for two sides of a difference/comparison
  - `lent + thing + to + person` for lending
  - `wanted + noun` for desired return
  - `because of this` for result
  - `became + comparative adjective` for change over time
- Productive work asks learners to describe an imaginary past community using condition, contrast and result language rather than retelling the Quick Challenge answer.

## Chapter 2 Arabic decisions
- Read the full Arabic Chapter 2 independently and authored from its own wording rather than translating the English activities.
- Language Focus targets:
  - `كان/كانت + تُسمّى` for naming something in the past
  - `كانت هناك + اسم` for past existence
  - `لم يكن هناك + اسم` for negating past existence
  - `كان/كانت + اسم أو صفة` for describing a past place/state
  - `كثير/الكثير من` for quantity
  - `لكن` for contrast
  - `بين ... و...` for two sides of a difference
  - `كان + فعل مضارع` for repeated/habitual activity in the past
  - `يُقرض + شخص + مال` and `يطلب + شيء` for lending/requesting
  - adjective-after-noun description in `المال الإضافي الظالم`
- Productive work uses Arabic-native frames to describe an imaginary past town with existence, quantity, contrast and repeated activity.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocus.ts` — added Chapter 2 English Language Focus
- `src/data/mecca/a2/ar/languageFocus.ts` — added Chapter 2 Arabic Language Focus
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Chapter 2 English and Arabic story prose was read and was not changed.
- Chapter 2 English and Arabic Quick Challenges were read; Language Focus does not simply repeat their rich/poor comprehension question.
- `src/data/mecca/a2/index.ts` was re-fetched and still wires story pages through `meccaA2LanguageFocusExercises[page.id]` / `meccaA2LanguageFocusExercisesAr[page.id]`, so Chapter 2 renders without a new shared/global change.
- English Language Focus commit: `ea3708ea3c2e9de25c1cd87bb0537d1e0fcb70f9`.
- Arabic Language Focus commit: `0a4e58977d75ef33d2af96d02118a623182b7722`.
- English Language Focus was re-fetched from `preview` after writing.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 3 only: read the full English and Arabic Chapter 3 texts and Quick Challenges, then manually author Chapter 3 Language Focus in both languages.
- Do not start Chapter 4 in the same run.

## Unresolved issues
- None identified for Chapter 2.
