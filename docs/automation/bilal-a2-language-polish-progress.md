# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–5 English Language Focus: COMPLETE
- Chapters 1–5 Arabic Language Focus: COMPLETE

## Chapter 5 English decisions
- Read the full Chapter 5 English story and its Quick Challenge before authoring.
- Kept the Quick Challenge focused on the social ideas of fairness and equality; Language Focus does not ask learners to retrieve that same answer.
- Language Focus targets are grounded in Chapter 5 language:
  - `because + clause` for reason
  - `had to + base verb` for past necessity/obligation
  - `to + base verb` for purpose
  - `thought + clause` for a past belief
  - `would + base verb` for a future situation seen from a past point of view
  - `did not have any + noun` / `had no + noun` for absence in the past
  - `hear + person/people + -ing` for an action noticed by hearing
  - `tell + person + to + verb` for reported instructions
  - `must + base verb` for a strong rule/duty/principle
  - `stop + -ing` after a reported instruction to end an activity
- Productive work asks learners to create an imaginary situation in which a new message changes a past expectation, using chapter language rather than retelling the Quick Challenge answer.

## Chapter 5 Arabic decisions
- Read the full Arabic Chapter 5 independently and authored from its actual Arabic wording rather than translating the English activities.
- Language Focus targets:
  - `لأنّ + جملة` for reason
  - `كان على + شخص + أن + فعل` for past obligation/necessity
  - `لِـ + فعل مضارع` for purpose
  - `ظنّ أن + جملة` for a past belief
  - `سيكون` for a future situation expected from a past point of view
  - `لم يكن عند + شخص + اسم` and `لم يكن يملك + اسم` for absence/lack in a past situation
  - `سمع + شخصًا + فعلًا مضارعًا` for hearing an action in progress
  - `كان + فعل مضارع` for an ongoing/repeated action in the past context
  - `يجب أن + فعل` for duty or a strong principle
  - `طلب من + شخص + أن + فعل` for a directed request
- Productive work uses Arabic-native frames for belief, hearing, obligation/request and purpose rather than mechanically translating the English production task.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart4.ts` — created with Chapter 5 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart4.ts` — created with Chapter 5 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added book-local Part4 fallback wiring for Chapter 5 in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 5 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 5 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- Chapter 5 English and Arabic Quick Challenges were read; Language Focus does not simply repeat the fairness/equality comprehension prompt.
- English Chapter 5 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 5 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part4 fallback wiring is active in both English and Arabic while earlier chapter fallbacks remain intact.
- English Chapter 5 Language Focus commit: `2f89a5d83dea309088d169cacc0ef5ba832050d1`.
- Arabic Chapter 5 Language Focus commit: `f7a3d920fc4a2dff8041a30febd3d9f6e60ab5e3`.
- Active wiring commit before this checkpoint update: `77ff2986fcfa0c3589466262cc6a1e523c028f14`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 6 only: read the full English and Arabic Chapter 6 texts and Quick Challenges, then manually author Chapter 6 Language Focus in both languages.
- Do not start Chapter 7 in the same run.

## Unresolved issues
- None identified for Chapter 5.
