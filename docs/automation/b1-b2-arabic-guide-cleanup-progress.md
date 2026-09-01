# B1/B2 Arabic Guide Cleanup Progress

level: B1
phase: CLEANUP
currentBook: Yunus Emre B1
status: PARTIAL
filesInspected:
- src/data/yunusEmre/b1/ar/teacherGuide.ts
- src/data/yunusEmre/b1/ar/selfStudyGuide.ts
englishExpressionsFound:
- `Quick Challenge` in Teacher Guide chapter 1 lesson plan and interactive tip.
- `Quick Challenge` in Teacher Guide chapter 3 interactive tip.
- `Quick Challenge` in Teacher Guide chapter 6 interactive tip.
- `Tap & Reveal` in Teacher Guide chapter 7 lesson plan and interactive tip.
- `Quick Challenge` in Teacher Guide chapter 13 interactive tip.
- `Quick Challenges` and `Quiz Game` in Teacher Guide assessment metadata.
- `Quick Challenge` in Self-Study Guide chapter 1 lesson plan.
- `Quick Challenge` in Self-Study Guide recommended-use metadata.
arabicReplacementsMade:
- None yet in this run. Exact natural Arabic replacements were identified, but guide files were not rewritten because the connector exposed the long files only in truncated chunks and a safe whole-file replacement could not be completed without risking unrelated content loss.
filesChanged:
- docs/automation/b1-b2-arabic-guide-cleanup-progress.md
commitSHA:
- pending current checkpoint update commit
nextBook: Yunus Emre B1
nextTask: RESUME_YUNUS_EMRE_B1_AND_APPLY_IDENTIFIED_LOCALIZATION_REPLACEMENTS
intentionallyRetainedEnglish:
- Technical TypeScript identifiers and property names.
- CEFR code B1 where used as a level code.
completedBooks:
- Adam B1
- Abraham B1
- Moses B1
- Mecca/Bilal B1
notes:
- Yunus Emre B1 Teacher Guide and Self-Study Guide were inspected for user-visible English residue.
- B2 was not touched because B1 is not yet complete.
- No story prose, exercises, English files, shared/global files, A2 files, or B2 files were modified.
- No build, typecheck, or CI run was performed.
