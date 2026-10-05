# Quick Challenge rewrite — status

Standard: `QC_BRIEF.md` (pilot: Mecca A2). One Quick Challenge per story chapter, one question, scored types only (multiple choice, true/false, matching with headings, sequencing), story-based distractors that are not too hard, feedback with evidence. Story text and audio unchanged; ids unchanged.

## Done (EN + AR)
Mecca A2 (pilot), Abraham A2/B1/B2, Adam A2/B1/B2, Mecca B1/B2, Moses A2/B1/B2, Yunus Emre A2/B1/B2.

Check: `npx tsx docs/quick-challenges/tools/checkQuotes.mts <story> <LEVEL> <en|ar>` (every quotation in a question or feedback is found in the chapter text).

## Story-text issues noticed (story unchanged; questions avoid the wrong wording)
- Mecca B1 AR: ch12 not an error — EN says Islam commanded zakat, AR adds that the leaders ignored this command (both fit the story); the real EN/AR difference in ch12 is "almost none" (EN) vs «لم يكن … أحد» (AR); ch13 the funders differ from EN; ch15 an incomplete sentence.
- Mecca B2 AR: ch14 gives 44 where EN gives 46.
- Abraham B2 AR: slips in ch8 and ch10, stray headings inside the text, some chapter titles differ from EN.
- Yunus Emre B2 AR: ch9 «وَتَمْتَدُّ هَذِهِ الْمَحَبَّةُ إِلَى مَحَبَّةِ اللَّهِ» (meaning).
- Moses B1: EN ch6 "friend of Moses" differs from the Arabic text.
- Adam A2: hadith wording "yellow" — checked by the author, stays as is.
- Moses B2: titles of ch10–21 were shifted by one chapter. FIXED in EN (titles + narration re-generated, 2026-09-27): ch10 "A Prayer for Forgiveness", ch11–21 take the titles of the previous chapter's old title list. AR titles have the same shift and are still unchanged (Arabic audio cannot be re-generated). EN ch19 "the Pharaoh Himself". The AR text differs from EN in ch10 (an extra verse) and ch22 («أنا ربكم الأعلى» where EN has "Pharaoh is the only god"; author decision: both stay). AR slips: ch8 «بَيْنَ … أَوْ», ch12 «كَانَتْ بَاطِنُ», ch18 «مِنَ فِرْعَوْنَ», a stray « in ch22.
