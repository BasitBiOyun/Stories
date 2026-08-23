# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–9 English Language Focus: COMPLETE
- Chapters 1–9 Arabic Language Focus: COMPLETE

## Chapter 9 English decisions
- Read the full Chapter 9 English story and its Quick Challenge before authoring.
- Quick Challenge remains comprehension-focused on Abu Bakr’s justice question; Language Focus does not ask learners to retrieve that same answer.
- Chapter-grounded Language Focus targets:
  - `want + person + to + verb` for what someone wants another person to do
  - `hear that + clause` for reported information
  - `go to see + person` and `right away` for purpose and immediate response
  - `ask + person + to + verb` for a request
  - `did not want to + verb` for unwillingness
  - `if + present, can + verb` for a condition and possible action
  - `again` for repeated action/request
  - `What did + subject + base verb ...?` for asking about a past action
  - `Is it + noun + to + verb ...?` for questioning the status/meaning of an action
  - `can + verb` for claimed ability or permission
- Productive work transfers these frames to a safe school/club/shared-task problem rather than retelling Bilal’s suffering.

## Chapter 9 Arabic decisions
- Read the full Arabic Chapter 9 independently and authored from its actual Arabic wording rather than translating the English activities.
- Chapter-grounded Arabic Language Focus targets:
  - `أراد أن + فعل` for intention
  - `سمع أن + جملة` for reported information
  - `ذهب إلى + شخص` and `فورًا` for movement and immediate action
  - `طلب من + شخص + أن + فعل` for a request
  - `لم يرد أن + فعل` for unwillingness
  - `إذا + فعل ثم أمر` for condition and response
  - `مرة أخرى` for repetition
  - `ماذا + فعل؟` for asking about a past action
  - `هل + جملة؟` for a yes/no question about meaning/status
  - `أقدر أن + فعل` for claimed ability or permission
- Productive work uses Arabic-native frames in a new safe everyday situation.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart8.ts` — created with Chapter 9 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart8.ts` — created with Chapter 9 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added Part8 imports/fallback wiring so Chapter 9 Language Focus renders in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 9 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 9 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- English and Arabic Chapter 9 Quick Challenges were read; both remain comprehension-focused on Abu Bakr’s question about injustice.
- English Chapter 9 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 9 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part8 fallback wiring is active in English and Arabic while all earlier fallbacks remain intact.
- English Chapter 9 Language Focus commit: `8d553c3a9d56a209f1fa916bbd3bb7935ed63b65`.
- Arabic Chapter 9 Language Focus commit: `561af0351fb31331c17bd49114bdaed8ca73674a`.
- Active wiring commit before this checkpoint update: `f82a601ff5160a161f5f378f67a5972ea579e2a8`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 10 only: read the full English and Arabic Chapter 10 texts and Quick Challenges, then manually author Chapter 10 Language Focus in both languages.
- Do not start Chapter 11 in the same run.

## Unresolved issues
- None identified for Chapter 9.
