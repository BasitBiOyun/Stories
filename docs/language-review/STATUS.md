# Language Review rewrite: status

Goal: each book's Language Review is a cumulative language workshop (A2: Look → Practise → Use, B1/B2: Notice → Build → Use) in line with the Türkiye Yüzyılı Maarif Modeli. It is anchored in verbatim story sentences from several chapters and ends with transfer to a new, everyday context. Rules for authors: `LR_BRIEF.md`. Pilot: Yunus Emre A2.

## Result: all 15 books × EN/AR done (on `preview`)
| | Before | After |
|---|---|---|
| Items per book | 6–10 (stages 2/2/2 to 3/4/3, often wrong for the level) | A2: 9 (3/4/2), B1/B2: 10 (3/4/3) |
| Matching | 2–6 per book, mostly "form → label" | at most 1, often none |
| Quotes not in the story | 15–35 per book | 0 (checked by `tools/checkReview.mts`) |
| Unscored or banned types in the set | quiz-game (Mecca B1, Yunus B1), T/F and sequencing in the Use stage | none |
| Use stage | a reflection (sometimes after a test item) | 1–2 controlled tasks in a new everyday context + writing with frames and a model answer |

Checks for later edits: `npx tsx docs/language-review/tools/checkReview.mts <storyId> <LEVEL>` (all 15 end with OK), `npm run validate`, `npm run build`.

## Notes
- English name spellings are unified: Hagar (not Hajar), Hilfü’l-Fudûl, Sûfî / Sûfîs / Sûfîsm. Audio file URLs keep their old names.
- Every review page is titled "Language Review" at source too (no "A2/B1/B2 Language Review").
- Teacher-review items (one defensible answer is decided by meaning, not grammar): Adam A2 AR item 4, Adam B1 EN/AR item 4, Abraham A2 EN item 4, Mecca B1 EN item 4, Mecca B2 EN item 4, Abraham B2 item 7, Abraham B1 AR item 2 (sequence vs result الفاء).

## Story-text slips reported (story unchanged; items use the correct form)
- Adam A2 AR: ch9 «أَیْضًا» Persian ی; ch6 duplicated Iblis paragraph; ch1 «الْبَشَر» missing kasra. EN: ch8 "offer an offering", ch1 "Angels got surprised".
- Adam B1 AR: ch10 «بينما» used as a contrast linker; ch8 «جميعاً» tanween placement; ch9 «نفسَ الطريق»; ch1–4 have no tashkeel.
- Adam B2 AR: ch7 «وتغير الأجواء» → وتغيّرت; ch12 «أول أطفالهما» (dual); ch16 hadith «مئة وأربعة صحف» (flag only).
- Abraham A2 AR: ch7 «آلِهَتِنا» → آلِهَتَنا; ch12 «فالله خير الماكرين» (wording question).
- Abraham B1 AR: ch12 «تَدَفُّق» → تَدَفَّقْ and mismatched quotation marks; ch7 «مَحْطومة» → مُحَطَّمة.
- Abraham B2 AR: ch30 «لتمنع انتشارُه» → انتشارَه, «سيُبنيه» → سيبنيه; ch29 «شيْئً» → شيئًا; ch35 «شَيَّد» → شُيِّد; ch20 «أن يَحرِق إبراهيم»; ch18 «يَحطِم» → يُحطِّم; ch13 «ابنًاحكيمًا» (space); ch17/22 sukun before «ال»; ch25 a duplicated sentence.
- Moses A2 AR: ch13 «فَاسْتَمِرَّ» → فَاسْتَمَرَّ; ch4, ch10 Latin commas.
- Moses B1 AR: ch12 «لم يستطعْ الأطفال» → يستطعِ. EN: ch7 "sheepmen".
- Moses B2 AR: ch2 «أُوائل» → أَوائل; ch1 «السلامِ» → السلامُ; ch12 «كانت باطنُ» → كان; ch17 «مِنَ فرعون» → مِنْ; ch14 «رعمسيس» vs «رمسيس».
- Mecca A2 AR: ch2 «فيضًا» for faiz (usual: رِبًا); ch13 «حزينًا جدًّا لأن يؤذّن» (calque); ch9 «إذا تريده» (إذا + past); ch12 «كَلِمات» (case).
- Mecca B1 AR: ch12 «وكانَتْ القبائل» → وكانَتِ; ch8 «وكانَتْ الحياة»; ch9 «يُواجِهْنَ» → يواجهون.
- Mecca B2 AR: ch3 «القولُ أنّ» → إنّ; ch12 «أنّهمْ اعتقدوا» → أنّهمُ; ch2 «بَشكل» → بِشكل; ch15 «حمَوْا النبي» → حمَوُا; ch17 «رفض أبو جهل … بشدّة» lacks an object.
- Yunus Emre B1 AR: ch5 «الْمَغول» → الْمُغول; ch10 «أيْ الْمكان» → أيِ; ch11 «يبلغ … إلى». EN: ch10 "heart is the center".
- Yunus Emre B2 AR: «وَفْقًا/وَفِقًا» → وِفْقًا (ch2, ch11); ch6 «مِثيل» → مَثيل; «أيْ + ال» → أيِ (ch2, 9, 10); ch10 «عند يونسِ» → يونسَ.
