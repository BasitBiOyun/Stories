# Final Manual Polish Progress

This tracker records the final manual book-by-book polish on `preview`.

## Queue

- [x] Moses A2 — COMPLETE
- [x] Moses B1 — COMPLETE
- [x] Moses B2 — COMPLETE
- [x] Mecca A2 — COMPLETE
- [x] Mecca B1 — COMPLETE
- [x] Mecca B2 — COMPLETE
- [x] Yunus Emre A2 — COMPLETE
- [x] Yunus Emre B1 — COMPLETE
- [x] Yunus Emre B2 — COMPLETE

## Moses A2 — COMPLETE

- Chapters read manually: 16 EN + 16 AR.
- Main corrections: EN/AR Knowledge and Final sets separated from Quick micro-facts; Arabic Review source-fidelity correction; support-layer hotspot cleanup.
- Changed files: `src/data/moses/a2/en/exercises.ts`, `src/data/moses/a2/ar/exercises.ts`, `src/data/moses/a2/index.ts`.
- Canonical story lock: EN `pages.ts` SHA `0721ebf77bae783e2881282a47cecae09ba5d75d`, AR `pages.ts` SHA `13e6b08650a068a8d24b0d11e25d5639d7535668` — unchanged.
- CI/status: not recorded as passed.

## Moses B1 — COMPLETE

- Chapters read manually: 13 EN + 13 AR.
- Main corrections: rebuilt EN/AR Knowledge sets to stop Quick Challenge micro-fact repetition while preserving approved B1 architecture.
- Changed files: `src/data/moses/b1/en/exercises.ts`, `src/data/moses/b1/ar/exercises.ts`.
- Canonical story lock: EN `pages.ts` SHA `e838f9a679fceeca34e064f7ee5c12bdc4431926`, AR `pages.ts` SHA `b8e66e195c8e7d0317575dd9e85bc93269671b1f` — unchanged.
- CI/status: not recorded as passed.

## Moses B2 — COMPLETE

- Chapters read manually: 24 EN + 24 AR.
- Main corrections: fixed the Chapter 8 EN/AR Quick answer-key contradiction (`true` → `false`) while preserving B2 assessment roles and source qualification.
- Changed files: `src/data/moses/b2/en/exercises.ts`, `src/data/moses/b2/ar/exercises.ts`.
- Canonical story lock: EN `pages.ts` SHA `56236b9d71d3424e07a3ef7bd63184c6d7a1e028`, AR `pages.ts` SHA `42c9e2c41bf8d10849dbd58108aa89bf8f6f783a`; EN `storySource.ts` SHA `cf775cc18eb038560cb7fac084b3210a9251804c`, AR `storySource.ts` SHA `f6cab51a4b82458b222f607a465cdee8164b9aaa` — unchanged.
- CI/status: not recorded as passed.

## Mecca A2 — COMPLETE

- Chapters read manually: 13 EN + 13 AR.
- Main corrections: replaced runtime EN/AR Knowledge Check sources with separate 8-item manual sets because the previous set repeated Quick micro-facts; preserved A2 format counts and roles.
- Changed files: `src/data/mecca/a2/en/knowledgeCheck.ts`, `src/data/mecca/a2/ar/knowledgeCheck.ts`, `src/data/mecca/a2/index.ts`.
- Locked-source note: Arabic Chapter 2 canonical `فَيْضًا` was recorded as a story-source issue only and was not edited.
- Canonical story lock: EN `pages.ts` SHA `18587f8dbce6fca9151ae342d929ab73357e941d`, AR `pages.ts` SHA `035e8b80fcf5135e8c413358b31af2d93505c604` — unchanged.
- CI/status: not recorded as passed.

## Mecca B1 — COMPLETE

- Chapters read manually: 15 EN + 15 AR.
- Main corrections: replaced overlapping EN/AR Knowledge sets with separate manually authored 8-item sets using different foundational details; preserved Quick/Vocabulary/Review/Final architecture and chapter-specific guides.
- Changed files: `src/data/mecca/b1/en/knowledgeCheck.ts`, `src/data/mecca/b1/ar/knowledgeCheck.ts`, `src/data/mecca/b1/index.ts`.
- Canonical story lock: EN `pages.ts` SHA `94d1b0e42721d2da1a85d23157b825b0c751ba5e`, AR `pages.ts` SHA `33a806995850a9f909a42d399f1f8a6e36c469b4` — unchanged.
- CI/status: not recorded as passed.

## Mecca B2 — COMPLETE

- Chapters read manually: 17 EN + 17 AR.
- Main corrections: replaced overlapping Knowledge Check with separate EN/AR manual 8-item sets using different evidence; preserved B2 evidence/inference/qualification roles and guide structure.
- Changed files: `src/data/mecca/b2/en/knowledgeCheck.ts`, `src/data/mecca/b2/ar/knowledgeCheck.ts`, `src/data/mecca/b2/index.ts`.
- Canonical story lock: EN `pages.ts` SHA `d26139d87d2920692e5f9d7761dbd7b5499106fd`, AR `pages.ts` SHA `4170716af096915a5cb2ee2de3371ce650b3e5b8`; EN `storySource.ts` SHA `bc0db6018cbf735a983ea2ae3097a86ac3e77e74`, AR `storySource.ts` SHA `f53e99f292ee81d471963192578a6afa2dfd7f53` — unchanged.
- CI/status: not recorded as passed.

## Yunus Emre A2 — COMPLETE

- Review base `preview` HEAD: `4be84d78f62546e8da329cadcb0fecab62825af0`.
- Content/support completion HEAD before this tracker commit: `82dea10dfa210e0f19989b95a057f6f4e8a4147b`.
- Chapters read manually: 8 EN + 8 AR.
- Reviewed: all canonical EN/AR story chapters; one Quick Challenge per chapter; 8-item Knowledge Check per language; 6-item Vocabulary Challenge; four-part Retrieval Review including 8-question Quiz Game; 10-item Final Challenge; Teacher Guide and Self-Study Guide chapter coverage; runtime/index attachment and story media paths.
- Main correction: the previous Final Challenge reused several Quick micro-facts almost directly, especially Chapter 3 useful activities, Chapter 4 ordinary service/ego, Chapter 5 heart/ego, Chapter 6 becoming better through nature and Chapter 7 flower reasoning. Replaced the runtime Final with separate manually authored EN/AR 10-item sets while preserving the required A2 distribution: 3 MC + 2 T/F + 2 Matching + 2 Fill in Blank + 1 Sequencing.
- New Final evidence includes Yunus’s age when Mevlana died, kind/cheerful behaviour, training under Taptuk Emre, his explicit promise to serve, being alone with Allah in the mountains, physical effort/care while carrying wood, the group/Yunus contrast in the flower task, `fruitful` / `مُثْمِرَةً`, madrasa education, and a broad developmental sequence. EN/AR parity is role-based and each item is grounded in its own canonical source.
- Teacher Guide and Self-Study Guide were already chapter-specific, evidence-led and naturally integrated reading/listening/speaking/writing with targeted wrong-answer repair, so they were not cosmetically rewritten.
- Changed files:
  - `src/data/yunusEmre/a2/en/finalChallenge.ts`
  - `src/data/yunusEmre/a2/ar/finalChallenge.ts`
  - `src/data/yunusEmre/a2/index.ts`
- Runtime check: page 14 now uses the dedicated manual EN/AR Final files. Existing Quick, Knowledge, Vocabulary and Review attachments are unchanged.
- Canonical story lock verification: EN `src/data/yunusEmre/a2/en/pages.ts` SHA `93423ebcddbc765dac0c2a2b99f9a4295a5a12df`; AR `src/data/yunusEmre/a2/ar/pages.ts` SHA `ed5c4a7989b75f61d0dc4416e649ffb3468ce22d` — unchanged during this pass. No canonical story `content`, chapter title, order or boundary was edited.
- Scope verification: compare `4be84d78...82dea10d` shows exactly three changed files, all inside `src/data/yunusEmre/a2/`.
- CI/status: no verified CI/status result was available; therefore CI is not recorded as passed.

## Yunus Emre B1 — COMPLETE

- Review base `preview` HEAD: `5af61e7f25bca0778169c0155dac7ae1744cda5c`.
- Content/support completion HEAD before this tracker commit: `f18c6ca3e4461ab3adeb39af0d7c5568e6bf744d`.
- Chapters read manually: 13 EN + 13 AR.
- Reviewed: all canonical EN/AR story chapters; one Quick Challenge per chapter; 8-item Knowledge Check per language; 10-item Vocabulary Challenge; four-part Retrieval Review including 8-question Quiz Game; 10-item Final Challenge; Teacher Guide and Self-Study Guide chapter coverage; runtime/index attachment and media references.
- Main correction: the runtime Knowledge Check heavily repeated Quick Challenge micro-facts, including outer/inner Sûfî life, tekke functions, the historical crisis, Creator/creation love, heart/intellect, and moral habits. Replaced it with separate manually authored EN/AR 8-item Knowledge sets using different foundational evidence: approximate life dates, Taptuk Emre as spiritual tutor, Alaeddin I's Mediterranean/Black Sea navy, the Mongol false-retreat/circling tactic at Kösedağ, direct Ilkhanate attachment in 1308, shaykhs arriving from Turkestan/Khorasan/Iran, Yunus's description of intellect as a light from Allah existing since eternity, and the named works `Risâletü’n-Nushiye` and `Divan`.
- Quick/Review/Final architecture was preserved. The existing Review continues to retrieve relationships and synthesis; the Final remains a separate mixed-format demonstration rather than another Knowledge set.
- Teacher Guide and Self-Study Guide were already manually chapter-specific, source-aware, evidence-led, and integrated reading/listening/speaking/writing with targeted wrong-answer return points; they were not cosmetically rewritten.
- Media/runtime note: canonical `pages.ts` still contains legacy `picsum.photos` references for later story/support pages. No verified production image mapping for those placeholders was found in this pass, so the locked canonical page files were not altered or guessed. Audio references remain B1 paths; no cross-level audio edit was introduced.
- Changed files:
  - `src/data/yunusEmre/b1/en/knowledgeCheck.ts`
  - `src/data/yunusEmre/b1/ar/knowledgeCheck.ts`
  - `src/data/yunusEmre/b1/index.ts`
- Runtime check: page 14 now uses the dedicated manual EN/AR Knowledge files. Quick, Vocabulary, Review, Final, Teacher Guide and Self-Study attachments remain intact.
- Canonical story lock verification: EN `src/data/yunusEmre/b1/en/pages.ts` blob SHA `e86ac62d1b00ab9adc7a5341ef6d181636cce253`; AR `src/data/yunusEmre/b1/ar/pages.ts` blob SHA `c481e1a6306aafc001031eaecbd6c7971d5254f7` — unchanged during this pass. No canonical story `content`, chapter title, order or boundary was edited.
- Scope verification: compare `5af61e7f...f18c6ca3` shows exactly three changed files, all inside `src/data/yunusEmre/b1/`.
- CI/status: GitHub returned no status checks for completion HEAD; therefore CI is not recorded as passed.

## Yunus Emre B2 — COMPLETE

- Review base `preview` HEAD: `9bb0cf986d7c80b23255f2bcc8350aabce191e3b`.
- Content/support completion HEAD before this tracker commit: `bf2dedac30fea56a6605519ac7a7eda68669a941`.
- Chapters read manually: 13 EN + 13 AR.
- Reviewed: all canonical EN/AR story chapters; one Quick Challenge per chapter; 8-item Knowledge Check per language; 10-item Vocabulary Challenge; four-part Retrieval Review including 8-question Quiz Game; 10-item Final Challenge; Teacher Guide and Self-Study Guide chapter coverage; runtime/index attachment and media references.
- Main correction: the runtime EN/AR Knowledge Check repeated the same core micro-facts already measured by Quick Challenges across almost the entire book: literary/Sûfî identity, historical crisis chain, tekke roles, wise-dervish response, tawhid, love, heart/intellect, and moral legacy. Replaced it with separate manually authored 8-item EN/AR Knowledge sets using distinct story evidence: Sûfî conduct toward evil/worldly status, source-qualified life dates, Alaeddin I's Mediterranean/Black Sea navy, Baba İshak as a follower of Baba İlyas, Kösedağ's location about 80 km northeast of Sivas, the Ottoman state still being a small principality, the Qur’an/Sunnah/earlier Sûfî foundations of Yunus's understanding, and the universal intellect guiding pious conduct.
- Source fidelity was preserved: the life-date item keeps the chapter's “widely accepted view” / `وفقاً للرأي السائد` qualification rather than converting it into unqualified certainty.
- Quick/Review/Final architecture was preserved. Teacher Guide and Self-Study Guide were already chapter-specific, evidence-led, source-aware, and naturally integrated reading/listening/speaking/writing; no cosmetic rewrite was made.
- Media/runtime note: canonical B2 `pages.ts` files still contain legacy `picsum.photos` story/support image references. Because the story/page source is locked and no verified replacement mapping was established in this pass, those references were recorded rather than guessed or edited. EN and AR audio URLs remain within the Yunus B2 paths; no cross-level audio edit was introduced.
- Changed files:
  - `src/data/yunusEmre/b2/en/knowledgeCheck.ts`
  - `src/data/yunusEmre/b2/ar/knowledgeCheck.ts`
  - `src/data/yunusEmre/b2/index.ts`
- Runtime check: page 15 now uses the dedicated manual EN/AR Knowledge files; Quick, Vocabulary, Review, Final, Teacher Guide and Self-Study attachments remain intact.
- Canonical story lock verification: EN `src/data/yunusEmre/b2/en/pages.ts` blob SHA `376e282c6f3f3ce35f3a2245dbc6cb4e76798d15`; AR `src/data/yunusEmre/b2/ar/pages.ts` blob SHA `f05dd3473c009144f1ce28d719600de380b73ccb` — unchanged during this pass. No canonical story `content`, chapter title, order or boundary was edited.
- Scope verification: compare `9bb0cf98...bf2dedac` shows exactly three changed files, all inside `src/data/yunusEmre/b2/`.
- CI/status: GitHub returned no status checks for completion HEAD; therefore CI is not recorded as passed.
