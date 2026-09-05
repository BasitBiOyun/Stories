# Stories Overnight Progress

This file is the persistent handoff for the hourly Stories cleanup worker on `preview`.

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

Current known preview base before this tracker: `89d1ca59830e4641aa85bf7d7c1ce46e3f5efa89`.

### Mandatory checklist — complete every item before marking the book COMPLETE

- [x] 1. Read and inspect every EN+AR story chapter, chapter boundary, title and current media mapping.
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
- [ ] 13. Audit EN Teacher Guide chapter by chapter. Chapter Support and all chapter guidance must be genuinely chapter-specific, not generic/copy-paste. Preserve TYMM codes already used; visible English value names must be English (for example, if a source uses `D14`, show an English value label rather than `Sorumluluk`).
- [ ] 14. Audit AR Teacher Guide chapter by chapter for the same chapter specificity and natural Arabic-language consistency.
- [ ] 15. Audit EN Self-Study Guide chapter by chapter; guidance must point the learner to useful chapter-specific evidence, language and study actions rather than generic advice.
- [ ] 16. Audit AR Self-Study Guide chapter by chapter with the same requirement.
- [ ] 17. Check EN/AR pedagogical parity and language consistency without forcing literal translation.
- [ ] 18. Re-read changed files for obvious syntax/wiring errors and confirm no unrelated book/branch was modified.
- [ ] 19. Commit all necessary changes to `preview`, update this checklist, mark the book COMPLETE, then move immediately to the next unchecked book if execution time remains.

### Current handoff

- Checklist item 1 is complete: all 14 EN and AR story chapters, boundaries, titles, and current media mappings were inspected. Story chapter images consistently point to Abraham A2 chapter assets (`abraham_a2_ch1` through `abraham_a2_ch14`; chapter 1 uses the same asset with capitalization in the filename), and story audio remains within the Abraham A2 audio path.
- Checklist item 2 remains the exact next action. A fresh full prose audit confirmed the following EN fixes in `src/data/abraham/a2/en/pages.ts`: Ch3 `World` should be lowercase `world`; Ch3 `In a nearby mountain` should be `On a nearby mountain`; Ch4 `bigger and bright` should be `bigger and brighter`; Ch5 `very sad for his father` should be `very sad about his father`; Ch5 `Your gods have no power to do these` needs grammatical completion such as `do these things`; Ch7 punctuation around reported questions/statements needs normalization, and `It was this god there, the biggest one broke all the stones` is grammatically broken; Ch8 `HE was always with him` must be `He was always with him`; Ch8 `He placed him on a catapult` has the wrong singular subject after plural `People ... tied` and must be `They placed him on a catapult`; Ch9 `made the people amazed` should be `amazed the people`; Ch9 `change their mind` should be `change their minds`; Ch10 `more angry` must be `angrier`; Ch10 `I let the second slave live, let him go` needs sentence/punctuation repair; Ch11 spelling is inconsistent (`traveled` / `travelled`) and should be normalized within the chapter; Ch12 comma splice `But it was useless, there was no water...` must be repaired. Preserve A2 meaning and vocabulary.
- Confirmed AR accidental embedded headings must be removed from story `content`: Ch8 ends with `## اَللهُ يُنْقِذُ إِبْرَاهِيمَ`; Ch9 ends with `## إِبْرَاهِيمُ وَنُمْرُودُ`; Ch10 ends with the next chapter heading; Ch11 ends with `## هَاجَرُ وَإِسْمَاعِيلُ فِي الْوَادِي`; Ch12 ends with `## مَاءُ زَمْزَمَ`; Ch13 ends with `## الْكَعْبَةُ وَرِسَالَةُ إِبْرَاهِيمَ`. Remove only these accidental headings, not legitimate prose.
- Do not start hotspot correction until item 2 prose is corrected, because hotspot descriptions must match the final chapter sentences verbatim.

### Work already reported in the first run

- Language Focus work was started in EN+AR for Chapters 1–3, 6 and 7. These chapters must still be re-verified against checklist items 6 and 7 before those items can be ticked globally.
- Remaining Language Focus chapters and all other checklist categories are still pending until explicitly checked above.

## Worker rules

1. At the start of every run, read this file first and resume the first unchecked item of the current book.
2. Do not stop voluntarily after a few edits or after one chapter. Continue through the checklist in order for as long as execution is available.
3. After each checklist item is genuinely complete, change its box to `[x]` before moving to the next item. Update this tracker in the same commit as the related content changes whenever practical.
4. If the platform/tool runtime forces the run to end, update this file before ending with the exact current item, completed chapters/files and next action. The next hourly run must resume that exact unchecked item.
5. When all 19 items are `[x]`, mark the current queue book `[x]`, select the next unchecked book, replace the Current book section with a fresh 19-item checklist and continue immediately if execution time remains.
6. Adam A2 is the reference standard and must not be edited.
7. Work only on `preview`. Do not create branches, dependencies, agents, validators, quality gates, correction layers or additional automation infrastructure.
