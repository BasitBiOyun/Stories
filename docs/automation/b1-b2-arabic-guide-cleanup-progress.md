# B1/B2 Arabic Guide Cleanup Progress

level: B1
phase: CLEANUP
currentBook: Mecca/Bilal B1
status: COMPLETE
filesInspected:
- src/data/mecca/b1/ar/teacherGuide.ts
- src/data/mecca/b1/ar/selfStudyGuide.ts
englishExpressionsFound:
- `language:'Arabic'` in user-visible Self-Study Guide metadata.
arabicReplacementsMade:
- `language:'Arabic'` → `language:'العربية'`
filesChanged:
- src/data/mecca/b1/ar/selfStudyGuide.ts
- docs/automation/b1-b2-arabic-guide-cleanup-progress.md
commitSHA:
- 823d914317bd735a99252d68658e7255a39101e6
nextBook: Yunus Emre B1
nextTask: CLEAN_YUNUS_EMRE_B1_ON_NEXT_RUN
intentionallyRetainedEnglish:
- Technical TypeScript identifiers and property names.
- CEFR code B1 where used as a level code.
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
- Mecca/Bilal B1
notes:
- Mecca/Bilal B1 Teacher Guide and Self-Study Guide were inspected completely.
- The only user-visible English localization residue found was the Self-Study Guide metadata language value `Arabic`.
- No story prose, exercises, English files, shared/global files, A2 files, or B2 files were modified.
- No build, typecheck, or CI run was performed.
