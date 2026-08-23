# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–12 English Language Focus: COMPLETE
- Chapters 1–12 Arabic Language Focus: COMPLETE

## Chapter 12 English decisions
- Read the full Chapter 12 English story and its Quick Challenge before authoring.
- Quick Challenge already checks the two chapter content ideas: Bilal’s morning Adhan addition and the Farewell Sermon teaching about skin color. Language Focus therefore does not ask learners to retrieve those facts again.
- Chapter-grounded English Language Focus targets:
  - `used to + verb` for a repeated past habit
  - `added + noun` for introducing something new
  - `which means` for explaining the meaning of an expression
  - `every morning` for frequency
  - `be pleased with + noun` for a positive reaction
  - `tell + person + to + verb` for instruction
  - simple past for a completed historical event
  - `all + plural noun` for a general statement
  - `better than` for comparison
  - `it is wrong to + verb` for evaluating behavior
  - `because of + noun` for giving a reason
- Productive work transfers these functions to a new school/club/family/team situation rather than retelling Chapter 12.

## Chapter 12 Arabic decisions
- Read the full Arabic Chapter 12 independently and authored from the Arabic text rather than translating the English activities.
- Quick Challenge remains comprehension-focused on أذان الصبح and خطبة الوداع; Language Focus instead develops the language used to express those ideas.
- Chapter-grounded Arabic Language Focus targets:
  - `كان + فعل مضارع` for a repeated past habit
  - `أضاف + اسم` for adding something new
  - `خير من` and `أفضل من` for comparison
  - `كل صباح` for frequency
  - `فرح بـ + اسم` for a positive reaction
  - `أمر + شخص + أن + فعل` for instruction
  - past verb forms for completed events
  - `جميع + اسم جمع` for a general statement
  - `من الخطأ + مصدر` for evaluating behavior
  - `بسبب + اسم` for giving a reason
- Productive work uses Arabic-native frames in a new everyday situation and does not retell the chapter.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart11.ts` — created with Chapter 12 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart11.ts` — created with Chapter 12 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added Part11 imports/fallback wiring so Chapter 12 Language Focus renders in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 12 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 12 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- English and Arabic Chapter 12 Quick Challenges were read; Language Focus does not duplicate their matching/comprehension task.
- English Chapter 12 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 12 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part11 fallback wiring is active in English and Arabic while all earlier fallbacks remain intact.
- English Chapter 12 Language Focus commit: `1625fb5fe626e5ed523caf11dea1c1d3de957013`.
- Arabic Chapter 12 Language Focus commit: `e7778d30acf0c703e723e51823a08cabfd523f4a`.
- Active wiring commit before this checkpoint update: `60fc9d4d79e7a41668fa89c6392b8752b13e9c4d`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 13 only: read the full English and Arabic Chapter 13 texts and Quick Challenges, then manually author Chapter 13 Language Focus in both languages.
- Do not start Language Review in the same run. If Chapter 13 completes both languages, set `phase: LANGUAGE_FOCUS_COMPLETE` and `nextTask: BUILD_LANGUAGE_REVIEW_ON_NEXT_RUN`, then stop.

## Unresolved issues
- None identified for Chapter 12.
