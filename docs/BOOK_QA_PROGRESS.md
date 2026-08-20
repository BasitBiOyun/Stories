# Stories Book QA Progress

This tracker is authoritative for the fixed one-book-per-run QA sequence on branch `preview`. COMPLETE means the full completion gate for that book was satisfied in its run; detailed implementation history remains in the corresponding commits.

1. Abraham A2 — COMPLETE
2. Abraham B1 — COMPLETE
3. Abraham B2 — COMPLETE
4. Moses A2 — COMPLETE
5. Moses B1 — COMPLETE
6. Moses B2 — COMPLETE
7. Mecca A2 — COMPLETE
8. Mecca B1 — COMPLETE
9. Mecca B2 — COMPLETE
   - Completion: all 17 EN/AR story chapters manually reviewed against the language-local canonical story sources; active EN/AR `pages.ts` reduced to clean page-shell adapters that remove embedded exercises, sequencing, vocabulary-match, placeholder sync and timed-chunk payloads while preserving story/media/Word Notes/hotspots from locked `storySource.ts`; direct EN/AR manual learning layer complete with exactly 17 Quick Challenges and one Tap & Reveal per language, 8-question Knowledge Check, 10 unique B2 Vocabulary Challenge pairs, four-part Retrieval Review (Sequencing, Matching, Reflection, independent 8-question Quiz Game), and 10-item Final Challenge using the locked 3 MC / 2 T-F / 2 Matching / 2 Fill Blanks / 1 Sequencing distribution; assessment layers focus on B2 cause/effect, systems, qualification, source fidelity, evidence-versus-interpretation and synthesis without reusing the same micro-facts across KC/review/final; EN/AR Teacher Guides rebuilt as 17 chapter-specific evidence-first modules with misconceptions, source limits, reading/listening/speaking/writing, differentiation, expected evidence, transfer and values-as-action; EN/AR Self-Study Guides rebuilt as 17 chapter-specific evidence-recovery paths with what-to-notice, read/listen, evidence finding, contextual vocabulary, wrong-answer recovery, self-check, transfer and reflection; direct `index.ts` attaches only the prepared manual exercise/guide layer to story pages and pages 18/19/20/22, exports `meccaB2BookDataEn` / `meccaB2BookDataAr`, and supplies runtime-safe B2-specific reading framework, global-citizenship and values-as-action metadata; registry wiring verified with `preservePreparedLearning=true`; obsolete root `config.ts`, `highlightPairs.ts`, `learningBlueprint.ts`, `source.ts`, `support.ts` and duplicate Arabic `pagesPart1.ts`–`pagesPart4.ts` removed after dependency review; root reduced to `en/`, `ar/`, and direct `index.ts`. Shared Self-Study and Teacher Guide UI paths were statically inspected; chapter support is rendered and the metadata shape required by the Teacher Guide is supplied. Final preview code head had no commit status checks and no PR-triggered workflow runs, so no build/typecheck success is claimed.
10. Yunus Emre A2 — PENDING
11. Yunus Emre B1 — PENDING
12. Yunus Emre B2 — PENDING
13. Adam B1 — PENDING
14. Adam B2 — PENDING
