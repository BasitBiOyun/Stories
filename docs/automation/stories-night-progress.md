# Stories Overnight Progress

This file is the persistent handoff for the Stories cleanup work on `preview`.

## Queue

- [x] Adam A2 — reference standard, DO NOT EDIT
- [x] Abraham A2 — COMPLETE
- [ ] Moses A2 — IN PROGRESS
- [ ] Mecca/Bilal A2
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

Abraham A2 completed the previous 19-item version of this quality workflow. The new fixed workflow below preserves every substantive check by merging the former final syntax/wiring review and commit/closeout step into a single final item.

## Current book

**Moses A2**

### Mandatory checklist — fixed 18-item standard for every remaining book

- [x] 1. Read and inspect every EN+AR story chapter, chapter boundary, title and current media mapping.
- [x] 2. Correct only obvious EN+AR spelling, capitalization, punctuation and grammatical errors in story prose; preserve meaning, CEFR level and intended vocabulary. Remove accidental markup/headings incorrectly embedded inside story prose.
- [x] 3. Verify EN hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same EN chapter after any prose correction. Put the final wording in canonical story source files rather than runtime correction layers.
- [x] 4. Verify AR hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same AR chapter after any prose correction. Put the final wording in canonical story source files rather than runtime correction layers.
- [x] 5. Verify chapter image/media mapping is for the correct story and CEFR level; do not introduce new media systems.
- [x] 6. Complete EN Language Focus for every chapter. If a chapter has 3 or 4 activities, at most 1 may be matching; other activities must use suitable varied existing exercise types and remain chapter-specific.
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

- Items 1–6 are complete. Item 7 is the first unchecked item and Block B is Items 7–12.
- Item 1: all 16 English and all 16 Arabic Moses A2 story chapters were read from the canonical page sources. Chapter boundaries, titles, page IDs 1–16, and story/media fields were checked in both languages.
- Item 2: both canonical story sources were re-read for obvious spelling/capitalization/punctuation/grammar problems and accidental embedded headings/markup. No broad prose rewrite was justified; meaning, A2 level, and intended vocabulary were preserved.
- Item 3: English has exactly two hotspots in each of Chapters 1–16 and every active description is a verbatim sentence from its own English chapter. The old `polishEnglishSupport` runtime override in `src/data/moses/a2/index.ts` was removed so canonical page data is now authoritative. Commit: `ef84302df2f8e52a06c8082bda2d5bb327f6f9b3`.
- Item 4: Arabic had many paraphrased hotspot descriptions. All 16 chapters were canonicalized to exactly two hotspot descriptions taken verbatim from the same Arabic chapter. The old `polishArabicSupport` runtime override was removed. Canonical Arabic hotspot commit: `b7b1aa16d8cc85cd70e6b7b14a029214fa32e17a`.
- Item 5: chapter audio mappings 1–16 in both languages point to the Moses A2 audio sequence and chapter numbers align. Images 1–8 and 10–16 point to Moses A2 chapter assets. Chapter 9 intentionally retains the same existing scene image in EN and AR; repository search found the same image used for the Midian/new-life scene elsewhere and no repository-backed `moses_a2_ch9.png` replacement, so no unsupported media path/token was invented.
- Item 6: all English Language Focus chapters 1–16 were audited across `languageFocus.ts` and Parts 2–11. Every chapter has four chapter-specific A2 activities with exactly one matching activity and three varied non-matching activities drawn from multiple-choice, fill-blanks, sequencing and reflection/production. No rewrite was needed.
- Canonical runtime cleanup: `src/data/moses/a2/index.ts` now reads EN/AR canonical pages directly; no hotspot correction layer remains.
- Next task: Item 7 — audit all Arabic Language Focus chapters 1–16 under the same variety rule, then continue sequentially through Items 8–12.

## Fixed hourly execution model — 6 + 6 + 6

Each scheduled run owns one six-item block for the active book:

- Block A: Items 1–6
- Block B: Items 7–12
- Block C: Items 13–18

A normal book therefore finishes in exactly three hourly runs. After Block C completes, initialize the next unchecked book but leave its Item 1 for the next scheduled run.

If a platform/tool limit forces a run to end before its six-item block is complete, record the exact unfinished item and resume it first on the next run. Never skip unfinished items merely because the clock advanced. The hourly schedule is a restart/checkpoint mechanism, not a reason to stop early or idle after a few edits.

## Level and TYMM rules

- A2, B1 and B2 are not interchangeable templates. Preserve each book's intended CEFR level and language complexity.
- For B1 and B2, Language Focus, assessment wording, productive tasks, Teacher Guide and Self-Study work must be designed at that level's own linguistic and cognitive demand rather than copied or simplified from A2.
- Use the relevant Türkiye Yüzyılı Maarif Modeli (TYMM) foreign-language skill framing and the TYMM codes already present in the book where applicable. Do not invent or renumber TYMM codes merely to create consistency.
- English and Arabic should have pedagogical parity, but Arabic must remain natural Arabic rather than a literal translation of English structures.

## Worker rules

1. At the start of every run, read this file first and identify the active book and first unchecked item.
2. Work only in `BasitBiOyun/Stories` on `preview`.
3. Complete the current six-item block sequentially. Do not voluntarily stop after one chapter, one file, one edit, or one commit while actionable work remains in the block.
4. Mark an item `[x]` only after it is genuinely complete. Keep exact handoff notes when an item is partially complete.
5. Do not begin a later block while an earlier item remains unchecked.
6. After Block C finishes, mark the current book COMPLETE and initialize the next book, but do not start that next book's content until the following scheduled run.
7. This 18-item checklist is the fixed general checklist for every remaining story/book unless the user explicitly changes the standard.
8. Adam A2 is the reference standard and must not be edited. Abraham A2 is complete and must not be reopened unless the user explicitly requests it.
9. Do not create branches, dependencies, agents, validators, quality gates, correction layers, generators, or additional automation infrastructure. Prefer canonical content files and simple wiring.
10. End every run with a concise report: active book, items completed this run, current checklist count, latest preview commit SHA, and exact next unchecked item.
