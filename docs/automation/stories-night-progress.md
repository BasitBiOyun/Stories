# Stories Overnight Progress

This file is the persistent handoff for the Stories cleanup work on `preview`.

## Queue

- [x] Adam A2 — reference standard, DO NOT EDIT
- [ ] Abraham A2 — IN PROGRESS
- [ ] Moses A2
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

## Current book

**Abraham A2**

### Mandatory checklist — complete every item before marking the book COMPLETE

- [x] 1. Read and inspect every EN+AR story chapter, chapter boundary, title and current media mapping.
- [x] 2. Correct only obvious EN+AR spelling, capitalization, punctuation and grammatical errors in story prose; preserve meaning, CEFR level and intended vocabulary. Remove accidental markup/headings that were incorrectly embedded inside story prose.
- [x] 3. Verify EN hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same EN chapter after any prose correction.
- [x] 4. Verify AR hotspots: exactly 2 per story chapter; every hotspot description must be a verbatim sentence from that same AR chapter after any prose correction.
- [x] 5. Verify chapter image/media mapping is for the correct story and CEFR level; do not introduce new media systems.
- [x] 6. Complete EN Language Focus for every chapter. If a chapter has 3 or 4 activities, at most 1 may be matching; other activities must use suitable varied existing exercise types and remain chapter-specific.
- [x] 7. Complete AR Language Focus for every chapter under the same variety rule, designed from the Arabic chapter rather than mechanically translated from English.
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

- Items 1–7 are complete. Item 8 is now the first unchecked item.
- Item 2: English obvious-language corrections remain in place. Arabic Ch8–13 accidental embedded next-chapter headings were removed and clear orthographic errors normalized without changing meaning or level. Content/hotspot commit: `0de37b259c3860eb52736c3f5f044771c071bbeb`.
- Item 3: all 14 English chapters have exactly 2 chapter-sourced hotspot descriptions. Ch10 `h20` was repaired to an exact sentence from the chapter. Commit: `b85ca27ffdc880f40d71ff5658cd09744b4df787`.
- Item 4: all 14 Arabic chapters have exactly 2 verbatim chapter-sourced hotspot descriptions. Commit: `0de37b259c3860eb52736c3f5f044771c071bbeb`.
- Item 5: all 14 EN and all 14 AR story pages were rechecked. Images and audio remain under the Abraham A2 media paths and correspond to the correct chapter/level; no media system or fallback was added.
- Item 6: all EN Language Focus chapters 1–14 were rechecked. Ch1–3, Ch6 and Ch7 already met the variety standard. Ch4–5 and Ch8–14 were revised so each 4-activity set has exactly one matching activity plus varied chapter-specific multiple-choice, fill-blanks, drag-drop, sequencing and/or reflection work.
- Item 7: all AR Language Focus chapters 1–14 were rechecked from the Arabic chapter language. Ch1–3, Ch6 and Ch7 already met the standard. Ch4–5 and Ch8–14 were revised independently in Arabic so each 4-activity set has exactly one matching activity plus varied Arabic-appropriate activity types.
- Latest Language Focus content commit before this tracker update: `7e3bd83c03b66a468239875bb723816b2263064d`.
- Next task: Item 8 — audit every EN+AR Quick Challenge for chapter-specific comprehension, answer correctness and sensible wording.

## Worker rules

1. At the start of every work session, read this file first and resume the first unchecked item of the current book.
2. Do not stop voluntarily after a few edits or after one chapter. Continue through the checklist in order for as long as execution is available.
3. After each checklist item is genuinely complete, change its box to `[x]` before moving to the next item. Update this tracker alongside the related content changes whenever practical.
4. If work must end before the current item is complete, update this file before ending with the exact current item, completed chapters/files and next action. The next session must resume that exact unchecked item.
5. When all 19 items are `[x]`, mark the current queue book `[x]`, select the next unchecked book, replace the Current book section with a fresh copy of this same 19-item checklist and continue from Item 1.
6. This 19-item checklist is the fixed general checklist for every story/book in the queue. Do not alter, shorten or replace it for later books unless the user explicitly changes the standard.
7. Adam A2 is the reference standard and must not be edited.
8. Work only on `preview`. Do not create branches, dependencies, agents, validators, quality gates, correction layers or additional automation infrastructure.
