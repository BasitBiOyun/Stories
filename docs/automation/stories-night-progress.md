# Stories Overnight Progress

This file is the persistent handoff for the Stories cleanup work on `preview`.

## Queue

- [x] Adam A2 — reference standard, DO NOT EDIT
- [x] Abraham A2 — COMPLETE
- [x] Moses A2 — COMPLETE
- [ ] Mecca/Bilal A2 — IN PROGRESS
- [ ] Yunus Emre A2
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

- Items 1–6: all 16 EN+AR story chapters, boundaries, titles and media were inspected; obvious prose issues were checked without broad rewriting; EN+AR hotspots were canonicalized to exactly two verbatim chapter-sourced descriptions per story chapter; runtime hotspot correction layers were removed; English Language Focus was confirmed chapter-specific and varied at A2.
- Items 7–12: Arabic Language Focus was rebuilt where necessary so every chapter has varied A2 activities with at most one matching task; EN+AR Quick Challenges were audited; Knowledge Check was rebuilt as eight chronological whole-book checks covering Chapters 1–16; English visible Vocabulary Challenge terms were capitalized; both Language Reviews were rebuilt as balanced cumulative language practice; both Final Challenges were rebuilt as varied whole-story comprehension covering Chapters 1–16.
- Item 13: the English Teacher Guide was audited chapter by chapter. All 16 chapters have distinct objectives, misconceptions, grammar/language focus, pronunciation work, before/during/after reading, discussion, differentiation, formative assessment, transfer and reflection tied to the actual chapter and active Language Focus. TYMM YDAB1–YDAB4 framing and visible English value labels remain consistent.
- Item 14: the Arabic Teacher Guide was audited across all 16 chapters for the same specificity and natural Arabic consistency. It uses Arabic chapter-grounded Language Focus, Arabic TYMM skill framing and Arabic value labels rather than literal English translation.
- Item 15: the active English Self-Study layer (`selfStudyGuidePreview.ts`) was audited. It combines the 16 chapter-specific base sections with the real chapter pages, hotspots, Quick Challenges, source vocabulary and Teacher Guide language focus, so learners receive concrete evidence, listening/reading, repair, self-check and transfer actions for each chapter.
- Item 16: the active Arabic Self-Study layer was audited under the same standard. It uses the Arabic chapter pages, Arabic Quick Challenges, Arabic vocabulary and Arabic Teacher Guide and remains independently natural.
- Item 17: EN/AR pedagogical parity was rechecked across the complete active stack. Both languages follow the same 16-chapter progression and assessment/study intent while preserving language-specific structures rather than forcing literal translation.
- Item 18: final wiring was re-read in `src/data/moses/a2/index.ts`; EN/AR canonical pages, exercise systems, Language Reviews, Language Focus parts, Teacher Guides and active Self-Study preview layers are all wired from existing files. Comparison from the pre-Moses workflow commit `d6e57c98975f22148cea4d93b49fee31c294b1d0` to the pre-close `preview` state showed changes only under `src/data/moses/a2/**` plus this tracker, with no unrelated book modified. GitHub exposes no commit status checks for the current preview head, so no build/typecheck/CI pass is claimed.

## Current book

**Mecca/Bilal A2**

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

- Moses A2 is complete at 18/18.
- Mecca/Bilal A2 is now the active book.
- Do not begin Mecca/Bilal A2 content in the Moses Block C run. The next scheduled run starts with Item 1 and owns Items 1–6.

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
