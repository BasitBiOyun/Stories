# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–6 English Language Focus: COMPLETE
- Chapters 1–6 Arabic Language Focus: COMPLETE

## Chapter 6 English decisions
- Read the full Chapter 6 English story and its Quick Challenge before authoring.
- Kept the Quick Challenge focused on sequencing Bilal’s secret visit to Abu Bakr; Language Focus does not ask learners to reproduce that event order.
- Language Focus targets are grounded in Chapter 6 language:
  - `think about + noun` and `think deeply about + noun` for reflection
  - `decide to + base verb` for a decision after thinking
  - `feel + noun` for an emotion or inner state
  - adverb `secretly` and adjective `hidden` for describing secrecy
  - `not want + person + to + verb` for an unwanted action
  - `was + adjective` for a past condition
  - `know that + clause` for reporting known information
  - `when + past clause` for locating an event in time
  - linked past simple verbs for completed actions in one situation
  - `start to + base verb` for the beginning of an action
- Productive work asks learners to invent a new think-decide-ask situation rather than retelling Bilal’s journey.

## Chapter 6 Arabic decisions
- Read the full Arabic Chapter 6 independently and authored from its actual Arabic wording rather than translating the English activities.
- Language Focus targets:
  - `فكّر في + اسم` and `فكّر عميقًا في + اسم` for reflection
  - `قرّر أن + فعل` for making a decision
  - `شعر بـ + اسم` for an emotion or inner state
  - `سرًّا` as a manner expression and `خفي` as an adjective
  - `لم يرد أن + فعل` for not wanting an action to happen
  - `كان + صفة` for a past situation or condition
  - `عرف أن + جملة` for reporting known information
  - `عندما + فعل ماضٍ` for time linking
  - linked past verbs for completed actions in one situation
  - `بدأ + فعل مضارع` for the beginning of an action
- Productive work uses Arabic-native frames for reflection, decision, intention and beginning an action rather than mechanically translating the English task.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart5.ts` — created with Chapter 6 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart5.ts` — created with Chapter 6 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added book-local Part5 fallback wiring for Chapter 6 in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 6 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 6 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- Chapter 6 English and Arabic Quick Challenges were read; both remain sequencing/retrieval activities, while Language Focus targets language form/function instead.
- English Chapter 6 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 6 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part5 fallback wiring is active in both English and Arabic while earlier chapter fallbacks remain intact.
- English Chapter 6 Language Focus commit: `771a5a20d595a3c7b7f76648c25304fa82c7de86`.
- Arabic Chapter 6 Language Focus commit: `237562137348fdc9c852db99ff80b896a77bab66`.
- Active wiring commit before this checkpoint update: `bfbc01313a1de1921e17bb246388d5eb26776a76`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 7 only: read the full English and Arabic Chapter 7 texts and Quick Challenges, then manually author Chapter 7 Language Focus in both languages.
- Do not start Chapter 8 in the same run.

## Unresolved issues
- None identified for Chapter 6.
