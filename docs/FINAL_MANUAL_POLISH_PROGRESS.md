# Final Manual Polish Progress

This tracker records the final manual book-by-book polish on `preview`.

## Queue

- [x] Moses A2 — COMPLETE
- [ ] Moses B1 — PENDING
- [ ] Moses B2 — PENDING
- [ ] Mecca A2 — PENDING
- [ ] Mecca B1 — PENDING
- [ ] Mecca B2 — PENDING
- [ ] Yunus Emre A2 — PENDING
- [ ] Yunus Emre B1 — PENDING
- [ ] Yunus Emre B2 — PENDING

## Moses A2 — COMPLETE

- Review base `preview` HEAD: `6f3368b04468759382c5ee2f2e07a188db1b5b34`
- Content/support completion HEAD before this tracker commit: `67f5fc1e38a87a2bb352df35d160f96f28316d97`
- Chapters read manually: 16 EN + 16 AR.
- Reviewed: canonical EN/AR story chapters; 16 Quick Challenges per language; 8-item Knowledge Check per language; 6-item Vocabulary Challenge per language; four-part Retrieval Review per language including the 8-question Quiz Game; 10-item mixed-format Final Challenge per language; all 16 Teacher Guide sections per language; all 16 Self-Study Guide sections per language; Moses A2 index/runtime attachment; storage manifest and central media reconciliation behavior.
- Changed files:
  - `src/data/moses/a2/en/exercises.ts`
  - `src/data/moses/a2/ar/exercises.ts`
  - `src/data/moses/a2/index.ts`
- Main corrections:
  - Rebuilt the EN and AR Knowledge Checks so they no longer repeat the Quick Challenge micro-facts almost item-for-item.
  - Rebuilt the EN and AR Final Challenges as a separate mixed-format demonstration set while preserving the A2 requirement of 3 MC + 2 T/F + 2 Matching + 2 Fill in Blank + 1 Sequencing.
  - Kept exactly one Quick Challenge per chapter and one Tap & Reveal in the whole book.
  - Kept Vocabulary Challenge at exactly six pairs and Retrieval Review at exactly four activities, with an eight-question Review Quiz Game.
  - Corrected Arabic Review Quiz source fidelity in Chapter 6: the warning comes from `رجل من المدينة`, not an invented friend relationship.
  - Tightened manually reviewed EN/AR hotspot/support copy where the old copy added details absent from the canonical chapter (including the English mountain/hand support and Arabic palace, Midian, mountain, Harun, magician and ending support copy).
  - Verified Teacher Guide and Self-Study Guide sections are chapter-specific, evidence-led, use reading/listening/speaking/writing naturally, and do not require a generator rewrite.
- Runtime/media check:
  - Moses A2 is registered with `preservePreparedLearning=true`; the manual exercises/guides remain the prepared learning source.
  - Storage manifest points to Moses A2 image/audio folders, including separate Arabic audio candidates.
  - Central `applyResolvedAssets` resolves English and Arabic narration independently, forbids the same narration URL from being reused across languages, rejects cross-level audio fallback, and rejects `picsum.photos` as a valid image. No Moses A2 runtime/index change was required for those media safeguards.
- Canonical story lock verification:
  - EN `src/data/moses/a2/en/pages.ts` SHA before/after: `0721ebf77bae783e2881282a47cecae09ba5d75d` — unchanged.
  - AR `src/data/moses/a2/ar/pages.ts` SHA before/after: `13e6b08650a068a8d24b0d11e25d5639d7535668` — unchanged.
  - No canonical story `content`, chapter title, chapter order or chapter boundary was edited.
- Scope verification: compare from the review base to the completion HEAD showed only the three Moses A2 files listed above changed.
- CI/status: GitHub returned no combined status checks for completion HEAD `67f5fc1e38a87a2bb352df35d160f96f28316d97`; therefore CI is not recorded as passed.
