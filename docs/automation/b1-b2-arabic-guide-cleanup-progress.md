# B1/B2 Arabic Guide Cleanup Progress

level: B2
phase: CLEANUP
currentBook: Adam B2
status: COMPLETE
filesInspected:
- src/data/adam/b2/ar/teacherGuide.ts
- src/data/adam/b2/ar/selfStudyGuide.ts
englishExpressionsFound:
- `Tap & Reveal` in Teacher Guide chapter 8 after-reading guidance.
- `Tap & Reveal` in Teacher Guide chapter 8 lesson plan.
- `Arabic` in Self-Study Guide user-visible language metadata.
- `Tap & Reveal` in Self-Study Guide chapter 8 interactive tip.
arabicReplacementsMade:
- `Tap & Reveal` → `نشاط «اضغط واكشف»` in visible Arabic guidance.
- `language: 'Arabic'` → `language: 'العربية'` in user-visible metadata.
filesChanged:
- src/data/adam/b2/ar/teacherGuide.ts
- src/data/adam/b2/ar/selfStudyGuide.ts
- docs/automation/b1-b2-arabic-guide-cleanup-progress.md
commitSHA:
- teacher guide: fc03d26ebeaa9cbd5853fee519209346aa6d3912
- self-study guide: 0ea90992e32a6719dd0f76d844f8cfbca9c6e3b2
nextBook: Abraham B2
nextTask: START_ABRAHAM_B2_ON_NEXT_RUN
intentionallyRetainedEnglish:
- Technical TypeScript identifiers and property names.
- CEFR code B2 where used as a level code.
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
- Mecca/Bilal B1
- Yunus Emre B1
- Adam B2
notes:
- Adam B2 Arabic Teacher Guide and Self-Study Guide cleanup is complete.
- No story prose, exercises, English files, shared/global files, A2 files, or other B2 books were modified.
- No build, typecheck, or CI run was performed.
