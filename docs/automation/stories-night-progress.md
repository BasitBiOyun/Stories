# Stories Overnight Progress

This file is the persistent handoff for the current architecture-only simplification work on `preview`.

## Architecture simplification handoff

- [x] Adam A2 — already canonical; do not edit.
- [x] Yunus Emre A2 — already canonical; do not edit.
- [x] Abraham A2 — complete, EN 18 → 7, AR 18 → 7. Migration SHA: `05feb6d748f1c4a0b516131b4cd240dda92dc798`.
- [x] Moses A2 — complete, EN 18 → 7, AR 18 → 7. Migration SHA: `4011cc9ab0959fbd040e6709db706db8e5772cb1`.
- [x] Mecca/Bilal A2 — complete, EN 19 → 7, AR 19 → 7. Migration SHA: `9facb05814a3aff6dfc7a57ad7a939ead77dc87d`.
- [x] Adam B1 — complete, EN 16 → 7, AR 16 → 7. Migration SHA: `a1b919fb9a09449e23103704b903ea04425bf6fe`.
- [x] Abraham B1 — complete, EN 20 → 7, AR 20 → 7. Closeout SHA: `3880385a103cb249e573c0dfd866420f0a682657`.
- [x] Moses B1 — complete, EN 18 → 7, AR 18 → 7. Migration SHA: `bda7a0f56c0b41b6729b527e582ed35e15b9a671`.
- [x] Mecca/Bilal B1 — verified already canonical on current `preview`: EN has exactly 7 canonical files and AR has exactly 7 canonical files (`pages.ts`, `exercises.ts`, `teacherGuide.ts`, `selfStudyGuide.ts`, `languageFocus.ts`, `languageFocus2.ts`, `languageFocus3.ts`). `index.ts` imports only canonical files and assembles the existing BookData/learning wiring. No story, exercise, guide, hotspot, media, CEFR, TYMM or pedagogical content was changed in this verification run. Verified against pre-run `preview` HEAD `9d3a10821a0b8577534f4ca919674144e925fde0`.
- [x] Yunus Emre B1 — architecture-only migration complete. EN: 19 → 7 files. AR: 19 → 7 files. Manual Knowledge Check and Language Review content is consolidated into each language's `exercises.ts`; Chapter 4–8 Language Focus is consolidated into `languageFocus2.ts`; Chapter 9–13 Language Focus is consolidated into `languageFocus3.ts`; base `languageFocus.ts`, `pages.ts`, Teacher Guide and Self-Study Guide were not edited. `index.ts` imports only canonical files and preserves the existing BookData assembly behavior. Legacy source removal closeout SHA: `0633ea62108aa0b1ff5e9f96da5af25297ddb319`.
- [ ] Abraham B2 — IN PROGRESS. EN Language Focus Chapters 1–12 were copied byte-for-byte in substance into canonical `en/languageFocus2.ts`, `en/languageFocus.ts` now consumes that block, and the twelve migrated chapter source files were removed only after wiring was switched. No exercise/activity wording was changed. Current migration checkpoint SHA before this tracker update: `d10d7b72504c97ff09f3cfb4965a9bc4605c28f8`. Exact next action: continue Abraham B2 EN Language Focus Chapters 13–35 into the remaining canonical LF capacity, then perform the equivalent AR migration and consolidate assessments/index wiring. Do not mark Abraham B2 complete until EN and AR each contain no more than the seven canonical files.
- [ ] Moses B2.
- [ ] Mecca/Bilal B2.
- [ ] Yunus Emre B2.

## Rules for remaining runs

- Adam B2 was handled manually by the user. Do not inspect, edit, migrate, compare, or touch Adam B2.
- One remaining B1/B2 book per run.
- Per language folder: maximum 7 canonical files only: `pages.ts`, `exercises.ts`, `teacherGuide.ts`, `selfStudyGuide.ts`, `languageFocus.ts`, `languageFocus2.ts`, `languageFocus3.ts`.
- All non-Language-Focus exercise content belongs in `exercises.ts`.
- Language Focus may use at most three files.
- `index.ts` must use canonical imports only and contain no translation, polishing, sanitizing, fallback-generation or content-correction layer.
- Preserve every active story, exercise, answer, feedback, vocabulary item, hotspot, coordinate, media URL, guide, Language Focus activity, count, CEFR level and TYMM value exactly in substance and behavior.
- Do not remove a legacy source until its active content has been migrated and verified in the canonical files.
- Before every closeout, re-fetch current `preview` HEAD and this tracker so concurrent work is preserved.
- Do not claim build/typecheck/CI success unless it actually ran and passed.
