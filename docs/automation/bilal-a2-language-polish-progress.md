# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–11 English Language Focus: COMPLETE
- Chapters 1–11 Arabic Language Focus: COMPLETE

## Chapter 11 English decisions
- Read the full Chapter 11 English story and its Quick Challenge before authoring.
- Quick Challenge remains comprehension-focused on the result after the Hijrah: the Prophet chose Bilal to call people to prayer. Language Focus does not ask learners to retrieve that same answer.
- Chapter-grounded Language Focus targets:
  - `after + clause/time/event` for sequencing and moving the story forward
  - `became` for change of state or role
  - `want to + verb` for a person’s own wish
  - `allow + person + to + verb` for permission
  - `tell + person + to + verb` for instruction
  - `want + person + to + verb` for a desired action by another person
  - `even when` for a difficult condition that does not change the main action
  - adverbial manner in `shouted fearlessly`
  - `that is why` / `so` for reason-result connection
- Productive work transfers these functions to a new school/team/family situation rather than retelling the first Adhan event.

## Chapter 11 Arabic decisions
- Read the full Arabic Chapter 11 independently and authored from the Arabic text rather than translating the English activities.
- Chapter-grounded Arabic Language Focus targets:
  - `بعد أن + فعل`, `بعد + مدة`, `بعد + حدث` for sequence
  - `صار + اسم/صفة` for change of state or status
  - `أراد أن + فعل` for a person’s own wish
  - `سمح لـ + شخص + أن + فعل` for permission
  - `أمر + شخص + بـ + اسم` for direction/order
  - `أراد + شخصًا + فعلًا` for wanting another person to act
  - `حتى عندما` for difficulty/contrast
  - `بلا + اسم` for manner
  - `لذلك` and result `فـ` for cause-result connection
- Productive work uses Arabic-native frames in a new everyday situation and does not retell the Adhan event.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart10.ts` — created with Chapter 11 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart10.ts` — created with Chapter 11 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added Part10 imports/fallback wiring so Chapter 11 Language Focus renders in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 11 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 11 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- English and Arabic Chapter 11 Quick Challenges were read; both remain comprehension-focused on Bilal being chosen to call people to prayer after the Hijrah.
- English Chapter 11 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 11 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part10 fallback wiring is active in English and Arabic while all earlier fallbacks remain intact.
- English Chapter 11 Language Focus commit: `9b8f5d961c439912df7595483b4f2f402d4c4f1c`.
- Arabic Chapter 11 Language Focus commit: `ffea1fd7a83e4758ed455a9d0b63ed7e6b56d6a8`.
- Active wiring commit before this checkpoint update: `b64dd97e8d9978a4483bd1da29bb3f4078450dc8`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 12 only: read the full English and Arabic Chapter 12 texts and Quick Challenges, then manually author Chapter 12 Language Focus in both languages.
- Do not start Chapter 13 in the same run.

## Unresolved issues
- None identified for Chapter 11.
