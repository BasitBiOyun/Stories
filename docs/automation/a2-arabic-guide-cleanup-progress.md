# A2 Arabic Guide Cleanup Progress

phase: CLEANUP
currentBook: Moses A2
status: COMPLETE

## Completed books
- Adam A2
- Abraham A2
- Moses A2

## Files inspected this run
- `src/data/moses/a2/ar/teacherGuide.ts`
- `src/data/moses/a2/ar/selfStudyGuide.ts`

## English expressions found
- `Tap & Reveal` in Chapter 3 Self-Study Guide.
- `Retrieval Review` in Chapter 16 Self-Study Guide.
- `Final Challenge` in Chapter 16 Self-Study Guide.

## Arabic replacements made
- Self-Study Guide: `Tap & Reveal` → `كشف الإجابة` in the surrounding Arabic instruction.
- Self-Study Guide: `Retrieval Review` → `المراجعة الاسترجاعية`.
- Self-Study Guide: `Final Challenge` → `التحدي النهائي`.

## Files changed this run
- `src/data/moses/a2/ar/selfStudyGuide.ts`
- `docs/automation/a2-arabic-guide-cleanup-progress.md`

## Commits
- Moses Self-Study Guide: `3854161f15b930542a8b74aec77fa451ecdcdb55`

## English intentionally retained
- No user-visible English prose was intentionally retained in the Moses A2 guide content inspected this run.
- Technical identifiers, TypeScript property names, `language: 'Arabic'`, icons, CEFR/TYMM codes and internal values remain unchanged.

nextBook: Mecca/Bilal A2
nextTask: START_MECCA_BILAL_A2_ON_NEXT_RUN
