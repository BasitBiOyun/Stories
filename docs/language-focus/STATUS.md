# Language Focus rewrite — status

Goal: every chapter's Language Focus follows Notice → Build → Use (A2: Look → Practise → Use), in line with the Türkiye Yüzyılı Maarif Modeli (inductive discovery for English; holistic / semi-inductive for Arabic). Matching is kept only where it is the best interaction (A2 ≈ half of chapters, B1 ≤ ~40%, B2 ≈ 25–40%, never more than one per chapter). Rules for authors: `REWRITE_BRIEF.md`. Pilot to imitate: Abraham B1 (`src/data/abraham/b1/{en,ar}/languageFocus*.ts`).

## Result — all 30 variants done (reviewed, committed, pushed to `preview`)
| | Before | After |
|---|---|---|
| Language Focus activities | 1 766 | 1 765 |
| Matching | 795 (45%) | 153 (8.7%) |
| Chapters with matching | every chapter | 153 of 466, never more than one |
| A2 / B1 / B2 matching share | 28% / 66% / 41% | 13% / 6% / 8% |

Types after the rewrite: reflection 466, multiple-choice 201, choose-form 184, transformation 161, matching 153, error-correction 148, word-bank 147, drag-drop 133, true-false 68, sentence-building 57, sequencing 46.

For later edits: follow `REWRITE_BRIEF.md`, run `npx tsx docs/language-focus/review.mts <storyId> <level>`, `npx tsc --noEmit` and `npm run validate:exercises`.

## Follow-ups for a human editor
- Teacher guides (`teacherGuide.ts` grammarFocus) in some books still quote old items that are not in the story text (e.g. Yunus Emre B1 EN ch2/ch7, Yunus Emre B2 AR «مهّد»، «للهرب»، «العقل المحدود», Adam B2 EN ch9/ch15, Mecca B2 AR). The Language Focus itself no longer uses them.
- Story-text slips below: the story text was not changed; learning items use the correct forms.

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
- Abraham A2 AR: ch12 «فَاللهُ خَيْرُ الْمَاكِرِينَ» does not fit Hagar's trust scene (content review).
- Mecca B2 AR: ch3 «يمكن القولُ أَنَّ» → إِنَّ; ch12 «إلا أنّهمْ اعتقدوا» → أنّهمُ; ch2 «بَشَكْلٍ» → بِشَكْلٍ. Teacher guide grammarFocus still quotes old paraphrases.
- Moses B2 AR: ch5 «أَوْ الْإِفْصَاحِ» → أَوِ; ch18 «مِنَ فِرْعَوْنَ» → مِنْ; ch1 «عَلَيْهِ السَّلَامِ» → السَّلَامُ; ch4 «وَقَوْمَهُ» → وَقَوْمِهِ; ch12 «كَانَتْ بَاطِنُ قَدَمَيْهِ مُتَقَرِّحَةً» (agreement); ch22 «لَحَاقِهِمْ» → لِحَاقِهِمْ.
- Moses A2 AR: ch13 «فَاسْتَمِرَّ فِي إِيذَاءِ» → فَاسْتَمَرَّ; Latin commas in ch4, ch10.
- Yunus Emre A2 AR: ch8 «أَنْ نَعْمَلَ كُلِّ عَمَلٍ» → كُلَّ; ch2 «هٰذِهِ تَجارِبَ» → هذه التجاربَ.
- Yunus Emre B1 AR: ch5 «مَشْكِلَاتٍ» → مُشْكِلَاتٍ, «الْمَغُولَ» → الْمُغُولَ; ch10 «أَيْ الْمَكَانُ» → أَيِ; ch11 «يَبْلُغَ … إِلَى الْخَلَاصِ».
- Yunus Emre B2 AR: «وَفْقًا/وَفِقًا» → وِفْقًا (ch2, ch11); «أَيْ + ال» → أَيِ (ch2, ch9, ch10); ch10 «عِنْدَ يُونُسِ» → يُونُسَ; ch9 «وَتَمْتَدُّ هَذِهِ الْمَحَبَّةُ إِلَى مَحَبَّةِ اللَّهِ» (meaning).
- Adam A2 AR: ch9 «أَیْضًا» uses Persian ی (U+06CC).
- Adam B2 AR: ch7 «وتغير الأجواء» → وتغيّرت; ch13 «أن قابيل، مع أنه…» lacks a خبر.
- English: see the per-book notes in `audit/` and the commit messages (minor punctuation / wording only).
