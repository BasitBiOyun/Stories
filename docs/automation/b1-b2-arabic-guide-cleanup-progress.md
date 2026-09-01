# B1/B2 Arabic Guide Cleanup Progress

level: B2
phase: CLEANUP
currentBook: Abraham B2
status: COMPLETE
filesInspected:
- src/data/abraham/b2/ar/teacherGuide.ts
- src/data/abraham/b2/ar/selfStudyGuide.ts
englishExpressionsFound:
- `Word Notes` in Teacher Guide pronunciation guidance.
- `E` / `I` evidence-inference labels in Teacher Guide during-reading guidance.
- `Word Notes` in Teacher Guide interactive tips.
- `Word Notes` in Self-Study Guide lesson plan.
- `Word Notes` in Self-Study Guide interactive tips.
arabicReplacementsMade:
- `Word Notes` → `ملاحظات الكلمات` in user-visible Arabic guidance.
- `E` / `I` → `د` / `ا` for `الدليل` / `الاستنتاج` in the user-visible evidence-inference instruction.
filesChanged:
- src/data/abraham/b2/ar/teacherGuide.ts
- src/data/abraham/b2/ar/selfStudyGuide.ts
- docs/automation/b1-b2-arabic-guide-cleanup-progress.md
commitSHA:
- teacher guide: 773e47779edee81738c6f5342d3fb6687628d4b5
- self-study guide: 5095a4b14fb78f1be0e44137ec88ce5833f93bf4
nextBook: Moses B2
nextTask: START_MOSES_B2_ON_NEXT_RUN
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
- Abraham B2
notes:
- Abraham B2 Arabic Teacher Guide and Self-Study Guide cleanup is complete.
- No story prose, exercises, English files, shared/global files, A2 files, B1 files, or other B2 books were modified.
- No build, typecheck, or CI run was performed.
