# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–7 English Language Focus: COMPLETE
- Chapters 1–7 Arabic Language Focus: COMPLETE

## Chapter 7 English decisions
- Read the full Chapter 7 English story and its Quick Challenge before authoring.
- Kept the Quick Challenge focused on why Bilal accepted Islam despite expecting difficulty; Language Focus does not ask learners to retrieve or repeat that answer.
- Language Focus targets are grounded in Chapter 7 language:
  - `tell + person + about + noun` for introducing a topic
  - `tell + person + that + clause` for reporting information
  - `want to + base verb` for intention or desire
  - `be happy to + verb` for a positive reaction
  - `after + past clause` for event order
  - `could not + base verb` for past inability
  - `stay + adjective` for a continuing state
  - `when + past clause` for linking an event to a reaction
  - `knew that + clause` for past knowledge
  - `would + base verb` for a future situation viewed from the past
  - `after + -ing` for a later stage or situation
  - `in the end` for the final outcome
- Productive work asks learners to create a new information-intention-expectation-decision situation rather than retelling Bilal’s decision.

## Chapter 7 Arabic decisions
- Read the full Arabic Chapter 7 independently and authored from its actual Arabic wording rather than translating the English activities.
- Language Focus targets are grounded in the Arabic chapter:
  - `أخبر + شخصًا + عن + اسم` for introducing a topic
  - `أخبر + شخصًا + أن + جملة` for reporting information
  - `يريد أن + فعل` for intention or desire
  - `كان سعيدًا بـ + مصدر` for a positive reaction
  - `بعد أن + فعل` for ordering events
  - `لم يستطع أن + فعل` for past inability
  - `بقي + حال/صفة` for a continuing state
  - `عندما + فعل ماضٍ` for linking an event to a reaction
  - `عرف أن + جملة` for known information
  - `ستكون + صفة` for an expected future state
  - `بعد أن يصبح + ...` for a later future stage
  - `في النهاية` for the final outcome
- Productive work uses Arabic-native frames for reporting, intention, expectation and result rather than mechanically translating the English task.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart6.ts` — created with Chapter 7 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart6.ts` — created with Chapter 7 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added book-local Part6 fallback wiring for Chapter 7 in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 7 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 7 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- Chapter 7 English and Arabic Quick Challenges were read; both remain comprehension-focused on Bilal’s reason for accepting Islam, while Language Focus targets language form/function instead.
- English Chapter 7 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 7 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part6 fallback wiring is active in both English and Arabic while earlier chapter fallbacks remain intact.
- English Chapter 7 Language Focus commit: `15b2a6b7a6e2bb53bfea7bbdd2d2ce8d4aded1e9`.
- Arabic Chapter 7 Language Focus commit: `4f614b39bcc0d60b14607a6b005d75f37c87f3d3`.
- Active wiring commit before this checkpoint update: `c6e71ca53a256cc731b1f967f1b4ddf051c07bad`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 8 only: read the full English and Arabic Chapter 8 texts and Quick Challenges, then manually author Chapter 8 Language Focus in both languages.
- Do not start Chapter 9 in the same run.

## Unresolved issues
- None identified for Chapter 7.
