# Final Manual Polish Progress

This tracker records the final manual book-by-book polish on `preview`.

## Queue

- [x] Moses A2 — COMPLETE
- [x] Moses B1 — COMPLETE
- [x] Moses B2 — COMPLETE
- [x] Mecca A2 — COMPLETE
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

## Moses B1 — COMPLETE

- Review base `preview` HEAD: `5b7f7116308a8cdc4c0f4bc66cc504ef05e7189a`.
- Content/support completion HEAD before this tracker commit: `28c5b7d82590ff1c31d8e428bad48c7fdf61592e`.
- Chapters read manually: 13 EN + 13 AR.
- Reviewed: canonical EN/AR story chapters; 13 Quick Challenges per language; 8-item Knowledge Check per language; 10-pair Vocabulary Challenge per language; four-part Retrieval Review per language including the 8-question Quiz Game; 10-item mixed-format Final Challenge per language; chapter-specific Teacher Guide and Self-Study Guide coverage; Moses B1 index attachment; storage manifest and central media reconciliation behavior.
- Changed files:
  - `src/data/moses/b1/en/exercises.ts`
  - `src/data/moses/b1/ar/exercises.ts`
- Main corrections:
  - Rebuilt the EN and AR Knowledge Checks because the previous set repeated Quick Challenge micro-facts across most chapters.
  - New Knowledge items now test separate foundational details from Chapters 2, 3, 4, 6, 8, 10, 12 and 13 while leaving Quick Challenges in their chapter-comprehension role.
  - Preserved the existing B1 architecture: 13 chapter Quick Challenges, 8 Knowledge items, 10 vocabulary pairs, four Retrieval Review activities with an 8-question Quiz Game, and the existing 10-item Final Challenge format.
  - Kept Review focused on retrieval/connection and Final focused on broader interpretation, evidence, cause/consequence and synthesis. No generator or blueprint rewrite was introduced.
  - EN/AR pedagogical parity was preserved without forcing literal translation; the Arabic Knowledge set follows its own canonical wording and source details.
  - Teacher and Self-Study materials were checked for chapter specificity, evidence guidance, listening/reading/speaking/writing balance and wrong-answer redirection. No broad guide rewrite was required in this pass.
- Runtime/media check:
  - `src/data/moses/b1/index.ts` attaches the manual EN/AR Quick, Knowledge, Vocabulary, Review and Final sources directly to the prepared pages.
  - The Moses B1 storage manifest points first to `Moses/b1/images`, B1 English audio and separate B1 Arabic-audio folders.
  - Central `applyResolvedAssets` rejects `picsum.photos`, prefers resolved B1 images, shares the resolved image between EN/AR, resolves narration separately, forbids EN audio reuse for AR, and blocks cross-level audio fallback. This protects legacy page references that still contain A2 or placeholder media URLs without changing canonical page files.
- Canonical story lock verification:
  - EN `src/data/moses/b1/en/pages.ts` SHA before/after: `e838f9a679fceeca34e064f7ee5c12bdc4431926` — unchanged.
  - AR `src/data/moses/b1/ar/pages.ts` SHA before/after: `b8e66e195c8e7d0317575dd9e85bc93269671b1f` — unchanged.
  - No canonical story `content`, chapter title, chapter order or chapter boundary was edited.
- Scope verification: compare from review base `5b7f7116308a8cdc4c0f4bc66cc504ef05e7189a` to completion HEAD `28c5b7d82590ff1c31d8e428bad48c7fdf61592e` showed only the two Moses B1 exercise files listed above changed.
- CI/status: no CI/status result was available from the connector for completion HEAD `28c5b7d82590ff1c31d8e428bad48c7fdf61592e`; therefore CI is not recorded as passed.

## Moses B2 — COMPLETE

- Review base `preview` HEAD: `fa5173f694482be184a4a65bdb064d654ca8e568`.
- Content/support completion HEAD before this tracker commit: `5d8cb925be7ab9b256a97f4d27fce55124717039`.
- Chapters read manually: 24 EN + 24 AR.
- Reviewed: canonical EN/AR story chapters; 24 Quick Challenges per language; 8-item Knowledge Check per language; 10-pair Vocabulary Challenge per language; four-part Retrieval Review per language including the 8-question Quiz Game; 10-item Final Challenge per language; chapter-specific Teacher Guide and Self-Study Guide coverage; Moses B2 runtime page shells and index attachment.
- Changed files:
  - `src/data/moses/b2/en/exercises.ts`
  - `src/data/moses/b2/ar/exercises.ts`
- Main corrections:
  - Fixed a real answer-key contradiction in Chapter 8 in both languages. The Quick Challenge asks whether Moses had already received the prophetic mission while he was a young man in the palace; the canonical chapter explicitly says he had not yet received it, while the prepared exercise incorrectly stored `correctAnswer: true`. Both EN and AR answer keys are now `false`.
  - Preserved the approved B2 architecture: 24 chapter Quick Challenges, 8 Knowledge items, 10 vocabulary pairs, four Retrieval Review activities with an 8-question Quiz Game, and 10 Final Challenge items.
  - Verified Quick remains chapter comprehension, Knowledge focuses whole-book analytical understanding/source qualification, Review reconnects claims/evidence, and Final emphasizes synthesis, values-in-action, qualification and sequencing without unnecessary structural redesign.
  - Source-fidelity wording such as `according to the sources`, `probably` and `unknown` remains explicitly protected in B2 learning tasks; uncertain historical claims are not promoted to certainty.
  - Teacher/Self-Study materials remain chapter-specific and evidence-led, with reading/listening plus spoken/written B2 output and targeted wrong-answer recovery rather than generic rereading.
- Runtime/media check:
  - `src/data/moses/b2/en/pages.ts` and `ar/pages.ts` deliberately strip legacy embedded exercises/vocabulary payloads from the locked source before runtime assembly.
  - `src/data/moses/b2/index.ts` attaches the manually prepared EN/AR Quick, Knowledge, Vocabulary, Review and Final sources to the correct B2 page IDs and attaches the corresponding Teacher and Self-Study guides.
  - Locked source still contains legacy `picsum.photos` references, but no canonical source/media field was edited in this pass; runtime page assembly remains separate from the manual learning layer.
- Canonical story lock verification:
  - EN `src/data/moses/b2/en/pages.ts` SHA before/after: `56236b9d71d3424e07a3ef7bd63184c6d7a1e028` — unchanged.
  - AR `src/data/moses/b2/ar/pages.ts` SHA before/after: `42c9e2c41bf8d10849dbd58108aa89bf8f6f783a` — unchanged.
  - EN canonical `storySource.ts` SHA: `cf775cc18eb038560cb7fac084b3210a9251804c` — unchanged.
  - AR canonical `storySource.ts` SHA: `f6cab51a4b82458b222f607a465cdee8164b9aaa` — unchanged.
  - No canonical story `content`, chapter title, chapter order or chapter boundary was edited.
- Scope verification: compare from review base `fa5173f694482be184a4a65bdb064d654ca8e568` to completion HEAD `5d8cb925be7ab9b256a97f4d27fce55124717039` showed only the two Moses B2 exercise files listed above changed.
- CI/status: GitHub returned no combined status checks for completion HEAD `5d8cb925be7ab9b256a97f4d27fce55124717039`; therefore CI is not recorded as passed.

## Mecca A2 — COMPLETE

- Review base `preview` HEAD: `eea5c0efe392ba04f5cf483ae8b13bd4df1dceb8`.
- Content/support completion HEAD before this tracker commit: `02ff69da23e351fade96e5f3c1314d6185a77503`.
- Chapters read manually: 13 EN + 13 AR.
- Reviewed: canonical EN/AR story chapters; 13 Quick Challenges per language; 8-item Knowledge Check per language; 6-pair Vocabulary Challenge per language; four-part Retrieval Review per language with 8-question Quiz Game; 10-item mixed-format Final Challenge per language; 13 Teacher Guide sections per language; 13 Self-Study Guide sections per language; Mecca A2 index/runtime assembly and media references.
- Changed files:
  - `src/data/mecca/a2/en/knowledgeCheck.ts`
  - `src/data/mecca/a2/ar/knowledgeCheck.ts`
  - `src/data/mecca/a2/index.ts`
- Main corrections:
  - Replaced the runtime Knowledge Check source in both languages with a separate manually authored 8-item set because the previous Knowledge Check repeated Quick Challenge micro-facts across Chapters 1, 6, 7, 10, 11 and 12.
  - The new Knowledge sets test separate foundational details: slave-market/Abyssinia context, Bilal’s evening work, lack of money for freedom, Umayya’s coercive treatment, the rock seen by Abu Bakr, the five-piece-of-gold price, the meaning of the Hijrah, and Bilal’s later move to Damascus.
  - Preserved exactly one Quick Challenge per chapter, one Tap & Reveal in the book, six Vocabulary pairs, four Retrieval Review activities with an eight-question Quiz Game, and the 10-item Final format of 3 MC + 2 T/F + 2 Matching + 2 Fill in Blank + 1 Sequencing.
  - Review remains retrieval/connection and Final remains a broader independent demonstration rather than a copy of Knowledge.
  - Teacher Guide and Self-Study Guide were already chapter-specific, evidence-led, TYMM-balanced and values-as-action oriented, so they were not rewritten merely to create changes.
  - Locked-source note: Arabic Chapter 2 contains the canonical form `فَيْضًا` for the unfair extra-money term. Because story prose is locked, this was recorded as a source-text issue only and was not edited.
- Runtime/media check:
  - `src/data/mecca/a2/index.ts` attaches the prepared Quick, new manual Knowledge, Vocabulary, Review and Final sets to the correct page IDs for EN and AR.
  - Existing Mecca A2 page media use the A2 image/audio paths; no story/media field was changed in this pass.
- Canonical story lock verification:
  - EN `src/data/mecca/a2/en/pages.ts` SHA before/after: `18587f8dbce6fca9151ae342d929ab73357e941d` — unchanged.
  - AR `src/data/mecca/a2/ar/pages.ts` SHA before/after: `035e8b80fcf5135e8c413358b31af2d93505c604` — unchanged.
  - No canonical story `content`, chapter title, chapter order or chapter boundary was edited.
- Scope verification: compare from review base `eea5c0efe392ba04f5cf483ae8b13bd4df1dceb8` to completion HEAD `02ff69da23e351fade96e5f3c1314d6185a77503` showed only the two new Mecca A2 Knowledge files and `src/data/mecca/a2/index.ts` changed.
- CI/status: GitHub returned no combined status checks for completion HEAD `02ff69da23e351fade96e5f3c1314d6185a77503`; therefore CI is not recorded as passed.
