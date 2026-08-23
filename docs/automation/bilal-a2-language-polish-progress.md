# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–8 English Language Focus: COMPLETE
- Chapters 1–8 Arabic Language Focus: COMPLETE

## Chapter 8 English decisions
- Read the full Chapter 8 English story and its Quick Challenge before authoring.
- Quick Challenge remains comprehension-focused on whether Bilal agreed to praise the idols; Language Focus does not ask learners to retrieve that answer.
- Chapter-grounded Language Focus targets:
  - confirmation question with `Is it ...?`
  - past-action question with `Did + subject + base verb ...?`
  - direct response with `answer + Yes/No`
  - `now + present verb` for a present state after change
  - `force + person + to + verb` for making someone act unwillingly
  - `tell + person + to + verb` for an instruction or command
  - `refuse` for declining or not agreeing
  - `if + present, will + base verb` for condition and future result
  - `but` for a contrasting response
- Productive work transfers the chapter language to a safe everyday rule/choice/classroom situation rather than retelling Bilal’s punishment.

## Chapter 8 Arabic decisions
- Read the full Arabic Chapter 8 independently and authored from its actual Arabic wording rather than translating the English activities.
- Chapter-grounded Arabic Language Focus targets:
  - `أَ + جملة` and `هل + فعل` for direct questions
  - `أجاب + نعم/لا` for a direct response
  - `الآن + فعل مضارع` for a present state after change
  - `أجبر + شخصًا + على + مصدر` for coercion
  - `أمر + شخصًا + أن + فعل` for giving an order
  - `رفض` for refusal
  - `إذا + فعل ... سـ + فعل` for condition and future result
  - `لكن` for contrast
- Productive work uses Arabic-native question, order, condition and response frames in a new safe everyday situation.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart7.ts` — created with Chapter 8 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart7.ts` — created with Chapter 8 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added Part7 imports/fallback wiring so Chapter 8 Language Focus renders in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 8 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 8 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- Chapter 8 English and Arabic Quick Challenges were read and remain comprehension-focused on Bilal’s refusal under pressure.
- English Chapter 8 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 8 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part7 fallback wiring is active in both English and Arabic while earlier fallbacks remain intact.
- English Chapter 8 Language Focus commit: `cacd62814f1b3a4f47b80b5958b8376171be01c3`.
- Arabic Chapter 8 Language Focus commit: `77d6eb008e85bc8f1fa030b7b481b13f6d1050ab`.
- Active wiring commit before this checkpoint update: `92d22e8824ea89609afb39489ac0ee30bb8447bd`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 9 only: read the full English and Arabic Chapter 9 texts and Quick Challenges, then manually author Chapter 9 Language Focus in both languages.
- Do not start Chapter 10 in the same run.

## Unresolved issues
- None identified for Chapter 8.
