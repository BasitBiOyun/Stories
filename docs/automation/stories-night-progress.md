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

All Moses A2 EN+AR story, hotspot, media, Language Focus, assessment, Teacher Guide, Self-Study, parity and final wiring checks are complete. Its final closeout confirmed changes were limited to `src/data/moses/a2/**` plus this tracker; no build/typecheck/CI pass was claimed because no such check was run.

## Current book

**Mecca/Bilal A2**

### Mandatory checklist — fixed 18-item standard for every remaining book

- [x] 1. Read and inspect every EN+AR story chapter, chapter boundary, title and current media mapping.
- [x] 2. Correct only obvious EN+AR spelling, capitalization, punctuation and grammatical errors in story prose; preserve meaning, CEFR level and intended vocabulary. Remove accidental markup/headings incorrectly embedded inside story prose.
- [x] 3. Verify EN hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same EN chapter after any prose correction. Put the final wording in canonical story source files rather than runtime correction layers.
- [x] 4. Verify AR hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same AR chapter after any prose correction. Put the final wording in canonical story source files rather than runtime correction layers.
- [x] 5. Verify chapter image/media mapping is for the correct story and CEFR level; do not introduce new media systems.
- [x] 6. Complete EN Language Focus for every chapter. If a chapter has 3 or 4 activities, at most 1 may be matching; other activities must use suitable varied existing exercise types and remain chapter-specific.
- [x] 7. Complete AR Language Focus for every chapter under the same variety rule, designed from the Arabic chapter rather than mechanically translated from English.
- [x] 8. Audit EN+AR Quick Challenges for chapter-specific comprehension, answer correctness and sensible task wording.
- [x] 9. Audit EN+AR Knowledge Check for whole-book coverage, answer correctness and unnecessary repetition.
- [x] 10. Audit EN+AR Vocabulary Challenge for sensible story-grounded vocabulary; English visible vocabulary words must begin with a capital letter.
- [x] 11. Audit EN+AR Language Review for varied exercise types and cumulative language practice; avoid matching-heavy sets.
- [x] 12. Audit EN+AR Final Challenge for whole-story coverage, answer correctness, variety and clear separation from Language Review.
- [ ] 13. Audit EN Teacher Guide chapter by chapter. Chapter Support and all chapter guidance must be genuinely chapter-specific, not generic/copy-paste. Preserve TYMM codes already used; visible English value names must be English.
- [ ] 14. Audit AR Teacher Guide chapter by chapter for the same chapter specificity and natural Arabic-language consistency.
- [ ] 15. Audit EN Self-Study Guide chapter by chapter; guidance must point the learner to useful chapter-specific evidence, language and study actions rather than generic advice.
- [ ] 16. Audit AR Self-Study Guide chapter by chapter with the same requirement.
- [ ] 17. Check EN/AR pedagogical parity and language consistency without forcing literal translation.
- [ ] 18. Final QA & Closeout: re-read all changed files for obvious syntax/import/export/wiring errors; confirm no unrelated book or branch was modified; make any necessary final corrections; commit all necessary changes to `preview`; update this tracker; mark the book COMPLETE; initialize the next unchecked book with a fresh copy of this same 18-item checklist. Do not claim build/typecheck/CI passed unless it was actually run and passed.

### Current handoff

- Items 1–12 are complete. Item 13 is now the first unchecked item.
- Items 1–2: all 13 EN+AR story chapters, boundaries and titles were inspected. English received only obvious language corrections; no broad prose rewrite or meaning change was made.
- Items 3–4: all 13 EN and 13 AR story chapters have exactly two canonical hotspot descriptions, each one verbatim sentence from its own chapter.
- Item 5: EN and AR use the chapter-specific `mecca/a2` image and audio mapping for Chapters 1–13; no new media/fallback system was introduced.
- Item 6: all 13 English Language Focus chapters were rebuilt where needed so each four-activity set has exactly one matching activity plus varied chapter-specific A2 work.
- Item 7: all 13 Arabic Language Focus chapters were rebuilt from their Arabic language functions. Every four-activity set now has exactly one matching task plus chapter-specific multiple-choice, fill-blanks, sequencing and/or reflection work. Arabic remains independently natural rather than a literal English template. Updated canonical files: `ar/languageFocus.ts` and `ar/languageFocusPart2.ts` through `ar/languageFocusPart12.ts`.
- Item 8: all 13 EN+AR Quick Challenges were audited. Each remains tied to its own chapter and tests direct chapter comprehension with sensible answer/explanation wording; no Quick Challenge was repurposed into Language Focus.
- Item 9: active EN+AR Knowledge Checks were rebuilt as eight chronological whole-book checks covering Chapters 1–13 in grouped progression: 1–2, 3–4, 5–6, 7–8, 9–10, 11, 12 and 13.
- Item 10: Vocabulary Challenge remains story-grounded. English visible terms are now capitalized in the active source: `Justice`, `Freedom`, `Secretly`, `Refused`, `Rescued`, `Respected`. Arabic uses natural script forms.
- Item 11: both Language Reviews were rebuilt from matching-heavy sets into ten cumulative A2 language activities. Each language now uses 2 matching, 2 multiple-choice, 2 fill-blanks, 1 drag-drop, 1 sequencing, 1 true-false and 1 reflection activity; the focus is transferable language practice rather than story recall.
- Item 12: active EN+AR Final Challenges were rebuilt as ten varied whole-story tasks covering all 13 chapters. Each language uses 4 multiple-choice, 2 true-false, 1 matching, 2 sequencing and 1 fill-blanks task, keeping Final Challenge focused on story comprehension and distinct from Language Review.
- Active assessment wiring remains through `src/data/mecca/a2/index.ts`, which imports the polished exercise systems, Language Reviews and all EN/AR Language Focus parts.
- Latest pre-tracker content head for this block: `d32ba82ad343e93954adae5bc17f597462bb8e58`.
- Next task: Item 13 — audit the English Teacher Guide chapter by chapter, then continue sequentially through Items 14–18 in Block C.

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
