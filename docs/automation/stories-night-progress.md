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
- [ ] 13. Audit EN Teacher Guide chapter by chapter. Chapter Support and all chapter guidance must be genuinely chapter-specific, not generic/copy-paste. Preserve TYMM codes already used; visible English value names must be English.
- [ ] 14. Audit AR Teacher Guide chapter by chapter for the same chapter specificity and natural Arabic-language consistency.
- [ ] 15. Audit EN Self-Study Guide chapter by chapter; guidance must point the learner to useful chapter-specific evidence, language and study actions rather than generic advice.
- [ ] 16. Audit AR Self-Study Guide chapter by chapter with the same requirement.
- [ ] 17. Check EN/AR pedagogical parity and language consistency without forcing literal translation.
- [ ] 18. Re-read changed files for obvious syntax/wiring errors and confirm no unrelated book/branch was modified.
- [ ] 19. Commit all necessary changes to `preview`, update this checklist, mark the book COMPLETE, then move immediately to the next unchecked book if execution time remains.

### Current handoff

- Item 1 is complete.
- Item 2 is still the first unchecked item. EN prose corrections have already been applied in `src/data/abraham/a2/en/pages.ts`: Ch3 `world`/`On a nearby mountain`; Ch4 `bigger and brighter`; Ch5 `sad about` and `do these things`; Ch7 reported-speech/punctuation and broken biggest-idol sentence; Ch8 `He` and plural `They placed`; Ch9 `amazed the people`/`their minds`; Ch10 punctuation plus `angrier`; Ch11 spelling normalized to `travelled`; Ch12 comma splice repaired. Content commit: `0f67369592b256140dbae81d86dca928d6b3d433`.
- EN hotspots were rewritten in that content commit so all 14 story chapters still have exactly 2 and descriptions are sourced from chapter prose. Before item 3 can be ticked, re-verify Ch10 h20 specifically and then re-read all 28 descriptions against final EN prose.
- AR prose was re-read again in this run around Ch8–13. The accidental embedded headings are confirmed in the actual `content` strings, not merely in source markdown. They remain the exact first edits required in `src/data/abraham/a2/ar/pages.ts`: Ch8 remove trailing `\n\n## اَللهُ يُنْقِذُ إِبْرَاهِيمَ`; Ch9 remove trailing `\n\n## إِبْرَاهِيمُ وَنُمْرُودُ`; Ch10 remove its trailing next-chapter `## ...` heading; Ch11 remove trailing `\n\n## هَاجَرُ وَإِسْمَاعِيلُ فِي الْوَادِي`; Ch12 remove trailing `\n\n## مَاءُ زَمْزَمَ`; Ch13 remove trailing `\n\n## الْكَعْبَةُ وَرِسَالَةُ إِبْرَاهِيمَ`. Do not remove legitimate prose or page titles.
- Item 2 must remain unchecked until those six AR markup contaminations are removed and the AR prose receives its final obvious-language pass. After item 2, finish/re-verify EN hotspot item 3, then replace AR hotspot descriptions under item 4 with verbatim sentences from their same chapters.
- Language Focus work from the first run remains partial: EN+AR Chapters 1–3, 6 and 7 were edited but must be re-verified; Ch4–5 and Ch8–14 plus all later checklist categories remain pending.
- Tooling note for the next worker: `src/data/abraham/a2/ar/pages.ts` is large; read/update it carefully without truncating the file. Do not mark item 2 complete merely because the six headings were identified.

## Worker rules

1. At the start of every run, read this file first and resume the first unchecked item of the current book.
2. Do not stop voluntarily after a few edits or after one chapter. Continue through the checklist in order for as long as execution is available.
3. After each checklist item is genuinely complete, change its box to `[x]` before moving to the next item. Update this tracker in the same commit as the related content changes whenever practical.
4. If the platform/tool runtime forces the run to end, update this file before ending with the exact current item, completed chapters/files and next action. The next hourly run must resume that exact unchecked item.
5. When all 19 items are `[x]`, mark the current queue book `[x]`, select the next unchecked book, replace the Current book section with a fresh 19-item checklist and continue immediately if execution time remains.
6. Adam A2 is the reference standard and must not be edited.
7. Work only on `preview`. Do not create branches, dependencies, agents, validators, quality gates, correction layers or additional automation infrastructure.
