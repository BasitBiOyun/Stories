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

### Abraham A2 — COMPLETE (19/19)

- Item 17: EN/AR pedagogical parity was rechecked across all 14 chapters. Both languages cover the same story progression, two source-grounded hotspots per chapter, chapter-specific Language Focus, aligned Quick Challenge/Knowledge/Vocabulary/Language Review/Final Challenge purposes, 14 chapter Teacher Guide sections and 14 chapter Self-Study sections. Arabic remains independently natural rather than being forced into literal English structures.
- Item 18: changed Abraham A2 files and `src/data/abraham/a2/index.ts` wiring were re-read for obvious syntax/import/wiring problems. All referenced EN/AR files used by the index are present. A comparison from partial Abraham commit `89d1ca59830e4641aa85bf7d7c1ce46e3f5efa89` to the final pre-close state showed changes only under `src/data/abraham/a2/**` plus this tracker; no unrelated book was modified. No GitHub commit status checks are configured, so no build/typecheck/CI success is claimed.
- Item 19: all necessary Abraham A2 content changes were committed to `preview`; the book is marked COMPLETE and the tracker has moved to Moses A2.

## Current book

**Moses A2**

### Mandatory checklist — complete every item before marking the book COMPLETE

- [ ] 1. Read and inspect every EN+AR story chapter, chapter boundary, title and current media mapping.
- [ ] 2. Correct only obvious EN+AR spelling, capitalization, punctuation and grammatical errors in story prose; preserve meaning, CEFR level and intended vocabulary. Remove accidental markup/headings that were incorrectly embedded inside story prose.
- [ ] 3. Verify EN hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same EN chapter after any prose correction.
- [ ] 4. Verify AR hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same AR chapter after any prose correction.
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
- [ ] 18. Re-read changed files for obvious syntax/wiring errors and confirm no unrelated book/branch was modified.
- [ ] 19. Commit all necessary changes to `preview`, update this checklist, mark the book COMPLETE, then move immediately to the next unchecked book if execution time remains.

### Current handoff

- Abraham A2 is complete at 19/19.
- Moses A2 is now the active book.
- Next task: Item 1 — inspect every Moses A2 EN+AR story chapter, chapter boundary, title and media mapping before making broader edits.

## Worker rules

1. At the start of every work session, read this file first and resume the first unchecked item of the current book.
2. Do not stop voluntarily after a few edits or after one chapter. Continue through the checklist in order for as long as execution is available.
3. After each checklist item is genuinely complete, change its box to `[x]` before moving to the next item. Update this tracker alongside the related content changes whenever practical.
4. If work must end before the current item is complete, update this file before ending with the exact current item, completed chapters/files and next action. The next session must resume that exact unchecked item.
5. When all 19 items are `[x]`, mark the current queue book `[x]`, select the next unchecked book, replace the Current book section with a fresh copy of this same 19-item checklist and continue from Item 1.
6. This 19-item checklist is the fixed general checklist for every story/book in the queue. Do not alter, shorten or replace it for later books unless the user explicitly changes the standard.
7. Adam A2 is the reference standard and must not be edited.
8. Work only on `preview`. Do not create branches, dependencies, agents, validators, quality gates, correction layers or additional automation infrastructure.
