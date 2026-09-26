# Language Focus rewrite — status

Goal: every chapter's Language Focus follows Notice → Build → Use (A2: Look → Practise → Use), in line with the Türkiye Yüzyılı Maarif Modeli (inductive discovery for English; holistic / semi-inductive for Arabic). Matching is kept only where it is the best interaction (A2 ≈ half of chapters, B1 ≤ ~40%, B2 ≈ 25–40%, never more than one per chapter). Rules for authors: `REWRITE_BRIEF.md`. Pilot to imitate: Abraham B1 (`src/data/abraham/b1/{en,ar}/languageFocus*.ts`).

## Done (reviewed, committed, pushed to `preview`)
| Book | EN | AR |
|---|---|---|
| Adam A2 / B1 / B2 | ✅ ✅ ✅ | ✅ ✅ ✅ |
| Abraham (ibrahim) B1 | ✅ | ✅ |
| Abraham B2 | ✅ | ✅ |
| Moses (musa) A2 / B1 / B2 | ✅ ✅ ✅ | ⏳ ✅ ⏳ |
| Mecca A2 / B1 / B2 | ✅ ✅ ✅ | ✅ ✅ ⏳ |

## Still to do (⏳ above, plus)
- Abraham A2 — EN, AR
- Yunus Emre A2 AR; Yunus Emre B1 / B2 — EN, AR
- Yunus Emre A2 EN ✅

For each variant: rewrite per `REWRITE_BRIEF.md`, then run
`npx tsx docs/language-focus/review.mts <storyId> <level>` (type mix, matching share, repeated sequences, answer leaks),
`npx tsc --noEmit` and `npm run validate:exercises`, read every item, commit per book.

## Review lessons from the run
- An item must not show another item's answer (shorten with …).
- Distractors must be wrong in the context, not merely unusual (e.g. "will" after a past reporting verb, Arabic «كنتَ» in a jawab of إذا are both acceptable → not distractors).
- Word-bank / sentence-building chips are scored exactly (tashkeel counts); typed transformation answers ignore tashkeel.
- Do not copy story-text slips into items; correct them in the item and list them below.

## Story-text slips reported (story unchanged; for a human editor)
- Abraham B1 AR: ch6 «خَلَتْ المدينة» → خَلَتِ; ch10 «أدرك … أن أحدًا» needs shadda; ch7 «مَحْطُومة» → مُحَطَّمة; ch12 «زمزم» gloss and quotation marks.
- Abraham B2 AR: ch20 «أنْ يَحْرِق إبراهيم» should be passive (أن يُحرَقَ إبراهيمُ); ch10 «مُجْعَلَة» → مَجْعُولَة; ch26 «أن يأخَذ» → يأخُذَ; ch25 «شاَخَ»; ch29 «شيْئً» → شيئًا; ch30 «لِتَمْنَعَ اِنْتِشَارُهُ» → انتشارَه, «سَيُبْنِيَهُ» → سيَبنيه; ch35 «الذي شَيَّدَ» → شُيِّدَ.
- To check (Abraham B2 AR ch3): an error-correction item treats «لا … فقط، لكنْ» as wrong (fix: بل); some writers accept «ولكن».
- Moses B1 AR: ch11 «أفاعي» → أفاعٍ; ch1 «نبيَّا» → نبيًّا; sukun before «ال» in ch2, ch12, ch13.
- Mecca B1 AR: ch9 «العبيد يُواجِهْنَ» → يواجهون; ch8 «لديهم» → لديها.
- Mecca A2 AR: ch9 «كانَ بِلال» (tanween), ch12 «كَلِمات» (case), ch13 «حَزِينًا جِدًّا لِأَنْ يُؤَذِّنَ».
- Adam A2 AR: ch9 «أَیْضًا» uses Persian ی (U+06CC).
- Adam B2 AR: ch7 «وتغير الأجواء» → وتغيّرت; ch13 «أن قابيل، مع أنه…» lacks a خبر.
- English: see the per-book notes in `audit/` and the commit messages (minor punctuation / wording only).
