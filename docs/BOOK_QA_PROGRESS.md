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
10. Yunus Emre A2 — COMPLETE
11. Yunus Emre B1 — COMPLETE
12. Yunus Emre B2 — COMPLETE
13. Adam B1 — COMPLETE
14. Adam B2 — IN_PROGRESS
   - Completed in this run: full 17-chapter English story reading; manual EN/AR exercise review and parity check; 17/17 chapter-specific EN/AR Teacher Guides; 17/17 chapter-specific EN/AR Self-Study Guides; direct manual `index.ts` assembler prepared; registry wiring verified with `preservePreparedLearning=true`; Self-Study runtime chapter-field visibility verified; supported exercise types checked against the shared contracts/policy; obsolete root Gold/Blueprint/config/source dependency chain prepared for removal.
   - Hard blocker: the available GitHub connector exposes whole-file replacement but no patch/checkout/transform execution. Adam B2 EN/AR `pages.ts` are very large canonical story files with legacy exercises interleaved inside the same object literals. Reconstructing those files manually through truncated tool windows would create an unacceptable risk of altering locked canonical story prose. The completion gate explicitly requires physical removal of the embedded legacy payloads, so Adam B2 must remain IN_PROGRESS rather than being marked COMPLETE dishonestly.
   - Exact remaining steps: safely transform both `src/data/adam/b2/en/pages.ts` and `src/data/adam/b2/ar/pages.ts` in-place while preserving every canonical story `content` string byte-for-byte; remove embedded `exercises`, `animatedWords`, `syncPoints`, `timedChunks`, `sequencingItems`, and `vocabularyPairs` where present so the files retain only story/media/Word Notes/hotspots/page shells; then perform final static dependency/import/export/parity checks, inspect available commit/workflow status evidence, update this tracker to COMPLETE, and stop without starting another book.
