# Stories Overnight Progress

This file is the persistent handoff for the Stories cleanup work on `preview`.

## Architecture simplification handoff

- [x] Adam A2 — already canonical; do not edit.
- [x] Yunus Emre A2 — already canonical; do not edit.
- [x] Abraham A2 — architecture-only migration complete. EN: 18 → 7 files. AR: 18 → 7 files. Active Quick Challenges, Knowledge Check, Vocabulary Challenge, Language Review and Final Challenge are consolidated in each language's `exercises.ts`; Student Guide preview exports are consolidated into `selfStudyGuide.ts`; Language Focus is consolidated into `languageFocus.ts`, `languageFocus2.ts`, `languageFocus3.ts`; `index.ts` is wiring only. Story `pages.ts` and Teacher Guide blobs remained unchanged. Architecture migration SHA before this tracker handoff: `05feb6d748f1c4a0b516131b4cd240dda92dc798`.
- [ ] Moses A2 — next A2 architecture target.
- [ ] Mecca/Bilal A2 — after Moses A2.

Do not use the legacy content-quality queue below to decide whether an A2 book has already received the architecture simplification. The architecture handoff above is authoritative for the current max-7-file migration.

## Queue

- [x] Adam A2 — reference standard, DO NOT EDIT
- [x] Abraham A2 — COMPLETE
- [x] Moses A2 — COMPLETE
- [x] Mecca/Bilal A2 — COMPLETE
- [ ] Yunus Emre A2 — IN PROGRESS
- [ ] Adam B1
- [ ] Abraham B1
- [ ] Moses B1
- [ ] Mecca/Bilal B1
- [ ] Yunus Emre B1
- [ ] Adam B2
- [ ] Abraham B2
- [ ] Moses B2
- [ ] Mecca/Bilal B2
- [ ] Yunus Emre B2

## Recently completed

### Abraham A2 — COMPLETE

Abraham A2 completed the previous 19-item version of this quality workflow. The current 18-item workflow preserves every substantive check by merging the former final syntax/wiring review and commit/closeout step.

### Moses A2 — COMPLETE (18/18)

All Moses A2 EN+AR story, hotspot, media, Language Focus, assessment, Teacher Guide, Self-Study, parity and final wiring checks are complete. Its final closeout confirmed changes were limited to `src/data/moses/a2/**` plus this tracker; no build/typecheck/CI pass was claimed because no such check was run.

### Mecca/Bilal A2 — COMPLETE (18/18)

- Items 1–12: all 13 EN+AR story chapters, boundaries, titles, media, canonical hotspots, EN/AR Language Focus, Quick Challenges, Knowledge Check, Vocabulary Challenge, Language Review and Final Challenge were completed under the fixed checklist.
- Item 13: the English Teacher Guide was audited across all 13 chapters. Each chapter has its own objectives, evidence route, anticipated misconceptions, chapter-derived grammar/language focus, pronunciation work, before/during/after reading, discussion, differentiation, formative assessment, transfer and reflection. Visible value language remains English and the metadata keeps TYMM YDAB1–YDAB4 framing.
- Item 14: the Arabic Teacher Guide was audited across all 13 chapters under the same specificity standard. It uses natural Arabic chapter-grounded structures and Arabic guidance rather than literal English translation.
- Item 15: the English Self-Study Guide already had 13 chapter-specific evidence plans. It was strengthened so every chapter now explicitly uses the active Teacher Guide grammar focus and tells learners to complete the real chapter Language Focus after comprehension and the Quick Challenge, then self-check one chapter language pattern.
- Item 16: the Arabic Self-Study Guide received the same chapter-specific Language Focus integration using the Arabic Teacher Guide. Its metadata language was corrected from `العربية / تعلم الإنجليزية` to `العربية` so the Arabic guide no longer presents itself as English learning.
- Item 17: EN/AR pedagogical parity was rechecked. Both sides follow the same 13-chapter evidence → Quick Challenge → Language Focus → short production → reflection intent while keeping language-specific grammar/functions and natural Arabic.
- Item 18: `src/data/mecca/a2/index.ts` was re-read for active wiring. EN/AR canonical pages, polished assessment systems, Language Reviews, all Language Focus parts, Teacher Guides and Self-Study Guides are wired into the two BookData exports. The Block C comparison from `8661319a0c48e209b52c56e6e743a7de6a35e295` to the pre-close head changed only the two Mecca A2 Self-Study files. The full Mecca work since Moses closeout remained under `src/data/mecca/a2/**` plus this tracker. No build/typecheck/CI pass is claimed; preview branch protection exposes no required status checks.

## Current book

**Yunus Emre A2**

### Mandatory checklist — fixed 18-item standard for every remaining book

- [ ] 1. Read and inspect every EN+AR story chapter, chapter boundary, title and current media mapping.
- [ ] 2. Correct only obvious EN+AR spelling, capitalization, punctuation and grammatical errors in story prose; preserve meaning, CEFR level and intended vocabulary. Remove accidental markup/headings incorrectly embedded inside story prose.
- [ ] 3. Verify EN hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same EN chapter after any prose correction. Put the final wording in canonical story source files rather than runtime correction layers.
- [ ] 4. Verify AR hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same AR chapter after any prose correction. Put the final wording in canonical story source files rather than runtime correction layers.
- [ ] 5. Verify chapter image/media mapping is for the correct story and CEFR level; do not introduce new media systems.
- [ ] 6. Complete EN Language Focus for every chapter. If a chapter has 3 or 4 activities, at most 1 may be matching; other activities must use suitable varied existing exercise types and remain chapter-specific.
- [ ] 7. Complete AR Language Focus for every chapter under the same variety rule, designed from the Arabic chapter rather than mechanically translated from English.
- [ ] 8. Audit EN+AR Quick Challenges for chapter-specific comprehension, answer correctness and sensible task wording.
- [ ] 9. Audit EN+AR Knowledge Check for whole-book coverage, answer correctness and unnecessary repetition.
- [ ] 10. Audit EN+AR Vocabulary Challenge for sensible story-grounded vocabulary; English visible vocabulary words must begin with a capital letter.
- [ ] 11. Audit EN+AR Language Review for varied exercise types and cumulative language practice; avoid matching-heavy sets.
- [ ] 12. Audit EN+AR Final Challenge for whole-story coverage, answer correctness, variety and clear separation from Language Review.
- [ ] 13. Audit EN Teacher Guide chapter by chapter. Chapter Support and all chapter guidance must be genuinely chapter-specific, not generic/copy-paste. Preserve TYMM codes already used; visible English value names must be English.
- [ ] 14. Audit AR Teacher Guide chapter by chapter for the same chapter specificity and natural Arabic-language consistency.
- [ ] 15. Audit EN Self-Study Guide chapter by chapter; guidance must point the learner to useful chapter-specific evidence, language and study actions rather than generic advice.
- [ ] 16. Audit AR Self-Study Guide chapter by chapter with the same requirement.
- [ ] 17. Check EN/AR pedagogical parity and language consistency without forcing literal translation.
- [ ] 18. Final QA & Closeout: re-read all changed files for obvious syntax/import/export/wiring errors; confirm no unrelated book or branch was modified; make any necessary final corrections; commit all necessary changes to `preview`; update this tracker; mark the book COMPLETE; initialize the next unchecked book with a fresh copy of this same 18-item checklist. Do not claim build/typecheck/CI passed unless it was actually run and passed.

### Current handoff

- Mecca/Bilal A2 is complete at 18/18.
- Yunus Emre A2 is initialized as the next active book with a clean 18-item checklist.
- Do not begin Yunus Emre A2 content in the Mecca/Bilal A2 Block C run.
- Next task: Yunus Emre A2 Item 1.

## Fixed hourly execution model — 6 + 6 + 6

Each scheduled run owns one six-item block for the active book:

- Block A: Items 1–6
- Block B: Items 7–12
- Block C: Items 13–18

A normal book therefore finishes in exactly three hourly runs. After Block C completes, initialize the next unchecked book but leave its Item 1 for the next scheduled run.

If a platform/tool limit forces a run to end before its six-item block is complete, record the exact unfinished item and resume it first on the next run. Never skip unfinished items merely because the clock advanced. The hourly schedule is a restart/checkpoint mechanism, not a reason to stop early or idle after a few edits.

## Level and TYMM rules

- A2, B1 and B2 are not interchangeable templates. Preserve each book's intended CEFR level and language complexity.
- For A2, B1 and B2, Language Focus, assessment wording, productive tasks, Teacher Guide and Self-Study work must match that level's own linguistic and cognitive demand.
- Use the relevant Türkiye Yüzyılı Maarif Modeli (TYMM) foreign-language skill framing and the TYMM codes already present in the book where applicable. Do not invent or renumber TYMM codes merely to create consistency.
- English and Arabic should have pedagogical parity, but Arabic must remain natural Arabic rather than a literal translation of English structures.

## Worker rules

1. At the start of every run, read this file first and identify the active book and first unchecked item.
2. Work only in `BasitBiOyun/Stories` on `preview`.
3. Complete the current six-item block sequentially. Do not voluntarily stop after one chapter, one file, one edit or one commit while actionable work remains in the block.
4. Mark an item `[x]` only after it is genuinely complete. Keep exact handoff notes when an item is partially complete.
5. Do not begin a later block while an earlier item remains unchecked.
6. After Block C finishes, mark the current book COMPLETE and initialize the next book, but do not start that next book's content until the following scheduled run.
7. This 18-item checklist is the fixed general checklist for every remaining story/book unless the user explicitly changes the standard.
8. Adam A2 is the reference standard and must not be edited. Abraham A2 is complete and must not be reopened unless the user explicitly requests it.
9. Do not create branches, dependencies, agents, validators, quality gates, correction layers, generators or additional automation infrastructure. Prefer canonical content files and simple wiring.
10. End every run with a concise report: active/completed book, items completed this run, current checklist count, latest preview commit SHA and exact next unchecked item.
