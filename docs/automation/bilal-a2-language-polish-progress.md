# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–4 English Language Focus: COMPLETE
- Chapters 1–4 Arabic Language Focus: COMPLETE

## Chapter 4 English decisions
- Read the full Chapter 4 English story and its Quick Challenge before authoring.
- Kept Quick Challenge focused on comprehension of Bilal’s hard work and the family’s disrespectful treatment.
- Language Focus instead targets language genuinely present in Chapter 4:
  - `always / often` for frequency in past descriptions
  - `every + singular noun` for all members of a group
  - `did not + base verb` for negative past statements
  - `to + base verb` for purpose (`to hurt his feelings`)
  - `look after` for care/responsibility
  - `all day` for duration
  - `job was to + base verb` for a regular duty
  - `could + base verb` for what was possible/allowed in a past situation
  - `had to + base verb` for past necessity/obligation
  - `anything` after a negative expression
- Productive work asks learners to describe an imaginary difficult daily routine using frequency, duty, purpose and obligation language rather than retelling the Quick Challenge answer.

## Chapter 4 Arabic decisions
- Read the full Arabic Chapter 4 independently and authored from its actual Arabic wording rather than translating the English activities.
- Language Focus targets:
  - `لم + فعل` and `أبدًا` for strong past negation
  - `كان + غير + صفة` for a negative past state
  - `غالبًا` for repeated/frequent states
  - `لِـ + فعل مضارع` for purpose (`ليجرحوا مشاعره`)
  - `كان + فعل مضارع` for repeated/continuing past routine
  - `طوال + مدة` for duration
  - `كان عمله أن + فعل` for a regular task
  - `لم يكن لـ + شخص + أن + فعل` for what was not permitted/possible
  - `كان على + شخص + أن + فعل` for obligation/necessity
  - `كل يوم` for repeated daily duty
- Productive work uses Arabic-native routine, purpose and obligation frames and does not reproduce the chapter’s comprehension task.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart3.ts` — created with Chapter 4 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart3.ts` — created with Chapter 4 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added book-local Part3 fallback wiring for Chapter 4 in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 4 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 4 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- Chapter 4 English and Arabic Quick Challenges were read; Language Focus does not simply repeat the work/treatment comprehension matching task.
- English Chapter 4 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 4 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part3 fallback wiring is active for Chapter 4 in both languages while earlier chapter fallbacks remain intact.
- English Chapter 4 Language Focus commit: `331a30ba58f9f51a80006c39c3e0acdfa2712ba9`.
- Arabic Chapter 4 Language Focus commit: `6a0fa2d70fd85a6c0db944405347acd5aabf41b8`.
- Active wiring commit before this checkpoint update: `4bb57a086ce95760c318deb7fe97e271538f00d0`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified.
- No build/typecheck pass is claimed in this run.

## Next task
- Chapter 5 only: read the full English and Arabic Chapter 5 texts and Quick Challenges, then manually author Chapter 5 Language Focus in both languages.
- Do not start Chapter 6 in the same run.

## Unresolved issues
- None identified for Chapter 4.
