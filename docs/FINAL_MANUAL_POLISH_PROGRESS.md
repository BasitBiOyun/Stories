# Final Manual Polish Progress

This tracker records the final manual book-by-book polish on `preview`.

## Queue

- [x] Moses A2 — COMPLETE
- [x] Moses B1 — COMPLETE
- [x] Moses B2 — COMPLETE
- [x] Mecca A2 — COMPLETE
- [x] Mecca B1 — COMPLETE
- [ ] Mecca B2 — PENDING
- [ ] Yunus Emre A2 — PENDING
- [ ] Yunus Emre B1 — PENDING
- [ ] Yunus Emre B2 — PENDING

## Moses A2 — COMPLETE

- Chapters read manually: 16 EN + 16 AR.
- Main corrections: EN/AR Knowledge and Final sets separated from Quick micro-facts; Arabic Review source-fidelity correction; support-layer hotspot cleanup.
- Changed files: `src/data/moses/a2/en/exercises.ts`, `src/data/moses/a2/ar/exercises.ts`, `src/data/moses/a2/index.ts`.
- Canonical story lock: EN `pages.ts` SHA `0721ebf77bae783e2881282a47cecae09ba5d75d`, AR `pages.ts` SHA `13e6b08650a068a8d24b0d11e25d5639d7535668` — unchanged.
- Completion HEAD before tracker commit: `67f5fc1e38a87a2bb352df35d160f96f28316d97`.
- CI/status: no combined status result was available; not recorded as passed.

## Moses B1 — COMPLETE

- Chapters read manually: 13 EN + 13 AR.
- Main corrections: rebuilt EN/AR Knowledge sets to stop Quick Challenge micro-fact repetition while preserving approved B1 architecture.
- Changed files: `src/data/moses/b1/en/exercises.ts`, `src/data/moses/b1/ar/exercises.ts`.
- Canonical story lock: EN `pages.ts` SHA `e838f9a679fceeca34e064f7ee5c12bdc4431926`, AR `pages.ts` SHA `b8e66e195c8e7d0317575dd9e85bc93269671b1f` — unchanged.
- Completion HEAD before tracker commit: `28c5b7d82590ff1c31d8e428bad48c7fdf61592e`.
- CI/status: no combined status result was available; not recorded as passed.

## Moses B2 — COMPLETE

- Chapters read manually: 24 EN + 24 AR.
- Main corrections: fixed the Chapter 8 EN/AR Quick answer-key contradiction (`true` → `false`) while preserving B2 assessment roles and source qualification.
- Changed files: `src/data/moses/b2/en/exercises.ts`, `src/data/moses/b2/ar/exercises.ts`.
- Canonical story lock: EN `pages.ts` SHA `56236b9d71d3424e07a3ef7bd63184c6d7a1e028`, AR `pages.ts` SHA `42c9e2c41bf8d10849dbd58108aa89bf8f6f783a`; EN `storySource.ts` SHA `cf775cc18eb038560cb7fac084b3210a9251804c`, AR `storySource.ts` SHA `f6cab51a4b82458b222f607a465cdee8164b9aaa` — unchanged.
- Completion HEAD before tracker commit: `5d8cb925be7ab9b256a97f4d27fce55124717039`.
- CI/status: no combined status result was available; not recorded as passed.

## Mecca A2 — COMPLETE

- Chapters read manually: 13 EN + 13 AR.
- Main corrections: replaced runtime EN/AR Knowledge Check sources with separate 8-item manual sets because the previous set repeated Quick micro-facts; preserved A2 format counts and roles.
- Changed files: `src/data/mecca/a2/en/knowledgeCheck.ts`, `src/data/mecca/a2/ar/knowledgeCheck.ts`, `src/data/mecca/a2/index.ts`.
- Locked-source note: Arabic Chapter 2 canonical `فَيْضًا` was recorded as a story-source issue only and was not edited.
- Canonical story lock: EN `pages.ts` SHA `18587f8dbce6fca9151ae342d929ab73357e941d`, AR `pages.ts` SHA `035e8b80fcf5135e8c413358b31af2d93505c604` — unchanged.
- Completion HEAD before tracker commit: `02ff69da23e351fade96e5f3c1314d6185a77503`.
- CI/status: no combined status result was available; not recorded as passed.

## Mecca B1 — COMPLETE

- Review base `preview` HEAD: `efdeb5dc5609b944ad4723e1f97d31a511ace6b4`.
- Content/support completion HEAD before this tracker commit: `dd15d229453dc49fed336d48b05177fdb1d674aa`.
- Chapters read manually: 15 EN + 15 AR.
- Reviewed: all canonical EN/AR story chapters; 15 Quick Challenges per language; 8-item Knowledge Check per language; 10-pair Vocabulary Challenge per language; four-part Retrieval Review with 8-question Quiz Game; 10-item Final Challenge; Teacher Guide and Self-Study Guide chapter coverage; index/runtime attachment and page media references.
- Changed files:
  - `src/data/mecca/b1/en/knowledgeCheck.ts`
  - `src/data/mecca/b1/ar/knowledgeCheck.ts`
  - `src/data/mecca/b1/index.ts`
- Main corrections:
  - The previous Knowledge Check overlapped heavily with Quick Challenge roles: trade-route safety, sacred months, tribal protection, Hanifs, elite resistance and the final justice/mercy contrast were being tested again as near-identical concepts.
  - Replaced runtime Knowledge sources with two separate manually authored 8-item sets built from different foundational details: absence of central government, revelation beginning in 610 CE, Ishmael learning Arabic from Jurhum, Khuza’a → Quraysh control, named pilgrimage-season fairs, poetry’s public role, the 360 idols detail, and the 13-year Meccan teaching period.
  - Preserved existing B1 architecture and all Quick, Vocabulary, Review and Final formats. Review remains retrieval/connection; Final remains broader independent demonstration.
  - EN/AR pedagogical parity is role-based rather than literal translation; each Knowledge item is grounded in its own canonical language source.
  - Teacher Guide and Self-Study Guide are already chapter-specific, evidence-led and use reading/listening/speaking/writing naturally. Wrong-answer support points learners back to the relevant paragraph/evidence instead of generic full-text rereading, so no cosmetic rewrite was made.
- Runtime/media check:
  - `src/data/mecca/b1/index.ts` now attaches the dedicated manual EN/AR Knowledge files to page 16 and leaves Quick, Review, Vocabulary and Final attachments unchanged.
  - Story pages use Mecca B1 image/audio paths. Legacy `picsum.photos` placeholders remain only on non-story shell pages in the locked page source; no canonical story/media field was edited during this pass.
- Canonical story lock verification:
  - EN `src/data/mecca/b1/en/pages.ts` SHA before/after: `94d1b0e42721d2da1a85d23157b825b0c751ba5e` — unchanged.
  - AR `src/data/mecca/b1/ar/pages.ts` SHA before/after: `33a806995850a9f909a42d399f1f8a6e36c469b4` — unchanged.
  - No canonical story `content`, chapter title, chapter order or chapter boundary was edited.
- Scope verification: this pass wrote only the two new Mecca B1 Knowledge files and `src/data/mecca/b1/index.ts` before this tracker update.
- CI/status: no combined CI/status result was available from the connector for completion HEAD `dd15d229453dc49fed336d48b05177fdb1d674aa`; therefore CI is not recorded as passed.
