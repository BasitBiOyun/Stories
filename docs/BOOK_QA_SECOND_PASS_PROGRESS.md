# Stories Book QA Second-Pass Progress

This tracker is authoritative for the second-pass manual QA sequence on branch `preview`. Work on exactly one book per run. COMPLETE means the full second-pass completion gate was satisfied.

1. Adam B2 — IN_PROGRESS
2. Abraham A2 — PENDING
3. Abraham B1 — PENDING
4. Abraham B2 — PENDING
5. Moses A2 — PENDING
6. Moses B1 — PENDING
7. Moses B2 — PENDING
8. Mecca A2 — PENDING
9. Mecca B1 — PENDING
10. Mecca B2 — PENDING
11. Yunus Emre A2 — PENDING
12. Yunus Emre B1 — PENDING
13. Yunus Emre B2 — PENDING

Current checkpoint: Adam B2 second-pass remains IN_PROGRESS. Full EN/AR pedagogical review, guide review, no-repeat review, media/runtime inspection, and warranted exercise/page-shell fixes were completed. Critical blocker: `src/data/adam/b2/en/pages.ts` is already truncated in current `preview` inside Chapter 14, so Chapters 15–17 and final page shells are physically absent. The complete canonical pre-cleanup source exists at parent commit `9d0a189b651e7013c27727f15404f160e8c801c3` / blob `2a49b5b6e307d0f5ce93cb694e99d71c0459ecc6`. A safe repair must restore the missing canonical Chapter 14 tail + Chapters 15–17 + clean page shells while preserving all 17 story `content` strings byte-for-byte and without reintroducing legacy embedded exercises/animatedWords/sync payloads. The available GitHub contents write replaces the whole oversized file and the connector truncates that replacement before the tail; no patch/remote execution action is available in this run, and a temporary Actions workflow did not trigger from connector-authored commits. The failed oversized replacement was reverted exactly to the pre-attempt blob and the temporary workflow was deleted. Next run MUST resume Adam B2 and repair this file before any COMPLETE mark or move to Abraham A2.
