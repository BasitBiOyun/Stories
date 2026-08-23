# Bilal / Mecca A2 Language Polish Progress

phase: LANGUAGE_FOCUS_COMPLETE
nextTask: BUILD_LANGUAGE_REVIEW_ON_NEXT_RUN
bookPath: `src/data/mecca/a2/`

## Completed chapters
- Chapters 1–13 English Language Focus: COMPLETE
- Chapters 1–13 Arabic Language Focus: COMPLETE

## Chapter 13 English decisions
- Read the full Chapter 13 English story and its Quick Challenge before authoring.
- Quick Challenge already asks for the chapter’s final lesson about what matters in human value, so Language Focus does not retest that comprehension point.
- Chapter-grounded English Language Focus targets:
  - `no + noun + is better than ...` and `not better than` for rejecting unfair superiority
  - `because of + noun` for giving a reason
  - `the only way to ... is to ...` for explaining one necessary path
  - `too + adjective + to + verb` for a condition/feeling that prevents an action
  - `start + -ing` for the beginning of an action
  - `when` for connecting an action to its time/situation
  - `could not + verb` for past inability
  - `ask + person + to + verb` for a request
  - `allow + person + to + verb` for permission
  - `it is + adjective + to + verb` for evaluating behavior
  - `what matters is ...` for identifying what is important
- Productive work transfers comparison, reason, request/permission and evaluation language to a new school/club/family/team situation rather than retelling Chapter 13.

## Chapter 13 Arabic decisions
- Read the full Arabic Chapter 13 independently and authored its Language Focus from the Arabic text rather than translating the English activities.
- Quick Challenge already asks what determines human value; Language Focus instead develops the Arabic structures used around comparison, reason, feeling, permission and evaluation.
- Chapter-grounded Arabic Language Focus targets:
  - `لا فضل لـ... على...` for rejecting superiority
  - `بسبب + اسم` for giving a reason
  - `الطريق الوحيد لـ... هو أن...` for expressing one necessary path
  - `كان + صفة` for a past state/feeling
  - `كان + فعل مضارع` for a repeated/ongoing past action
  - `عندما` for time/situation
  - `لم يقدر أن + فعل` for past inability
  - `سأل + شخص + أن يسمح` for asking permission
  - `سمح لـ + شخص + بـ...` for giving permission
  - `ليس من العدل + مصدر` for evaluating behavior
  - `المهم هو...` for identifying what is important
- Productive work uses Arabic-native frames in a new everyday fairness/permission situation and does not retell the chapter.

## Files changed in this run
- `src/data/mecca/a2/en/languageFocusPart12.ts` — created with Chapter 13 English Language Focus
- `src/data/mecca/a2/ar/languageFocusPart12.ts` — created with Chapter 13 Arabic Language Focus
- `src/data/mecca/a2/index.ts` — added Part12 imports/fallback wiring so Chapter 13 Language Focus renders in both languages
- `docs/automation/bilal-a2-language-polish-progress.md` — updated to the hard handoff state

## Validation
- Exact book directory remains `src/data/mecca/a2/`.
- Full Chapter 13 English story was read from `src/data/mecca/a2/en/pages.ts`; story prose was not changed.
- Full Chapter 13 Arabic story was read from `src/data/mecca/a2/ar/pages.ts`; story prose was not changed.
- English and Arabic Chapter 13 Quick Challenges were read; the new Language Focus does not duplicate their comprehension question.
- English Chapter 13 Language Focus was re-fetched from `preview` and contains four chapter-grounded activities.
- Arabic Chapter 13 Language Focus was re-fetched from `preview` and contains four independently authored chapter-grounded activities.
- `src/data/mecca/a2/index.ts` was re-fetched from `preview`; Part12 fallback wiring is active in English and Arabic while all earlier Language Focus fallbacks remain intact.
- English Chapter 13 Language Focus commit: `93fbfb7c3468074e84abf538cf5788f1e3511760`.
- Arabic Chapter 13 Language Focus commit: `37e88145b044c6af8798c7f16670975790f87a22`.
- Active wiring commit before this checkpoint update: `0bb009efb0f4d0cf29c9fe73f5336f34604f9051`.
- No Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, Teacher Guide or Self Study Guide content was modified in this run.
- No build/typecheck pass is claimed in this run.

## Next task
- On the NEXT run only, build/review the cumulative English and Arabic Language Review from the actual Language Focus taught across Chapters 1–13.
- Do not audit Quick Challenges, Knowledge Check, Vocabulary Challenge or Final Challenge in that Language Review run.

## Unresolved issues
- None identified for Chapter 13.
