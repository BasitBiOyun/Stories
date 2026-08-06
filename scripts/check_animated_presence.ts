import { abrahamA2PagesEn } from '../src/data/abraham/a2/en/pages';
import { abrahamA2PagesAr } from '../src/data/abraham/a2/ar/pages';
import { abrahamB1Pages } from '../src/data/abraham/b1/en/pages';
import { abrahamB1PagesAr } from '../src/data/abraham/b1/ar/pages';
import { abrahamB2Pages } from '../src/data/abraham/b2/en/pages';
import { abrahamB2PagesAr } from '../src/data/abraham/b2/ar/pages';

function normalizeArabic(text: string) {
  return text
    .replace(/[\u064B-\u0652]/g, "") // Remove diacritics
    .replace(/[أإآ]/g, "ا") // Normalize Alef
    .replace(/ة/g, "ه") // Normalize Teh Marbuta
    .replace(/ى/g, "ي") // Normalize Alef Maksura
    .replace(/[.,!?;:\"'“”‘’`()]/g, "")
    .toLowerCase()
    .trim();
}

function normalizeEnglish(text: string) {
  return text
    .replace(/[.,!?;:\"'“”‘’`()]/g, "")
    .toLowerCase()
    .trim();
}

function checkPresence(level: string, pages: any[], isAr: boolean) {
  console.log(`\n=== Presence Check for ${level} (${isAr ? 'AR' : 'EN'}) ===`);
  pages.forEach(p => {
    if (p.type !== 'story') return;
    const content = p.content || "";
    const cleanContent = isAr ? normalizeArabic(content) : normalizeEnglish(content);

    // Check animatedWords
    const anim = p.animatedWords || [];
    anim.forEach((aw: string) => {
      const cleanAw = isAr ? normalizeArabic(aw) : normalizeEnglish(aw);
      const cleanAwStripped = isAr ? cleanAw.replace(/^ال/, '') : cleanAw;
      
      // Check if it exists as a substring or word
      const exists = cleanContent.includes(cleanAw) || (isAr && cleanContent.includes(cleanAwStripped));
      if (!exists) {
        console.log(`  [Page ${p.id}] Animated Word NOT FOUND in content: "${aw}"`);
      }
    });

    // Check vocabulary
    const vocab = p.vocabulary || [];
    vocab.forEach((v: any) => {
      const vw = v.word;
      const cleanVw = isAr ? normalizeArabic(vw) : normalizeEnglish(vw);
      const cleanVwStripped = isAr ? cleanVw.replace(/^ال/, '') : cleanVw;

      const exists = cleanContent.includes(cleanVw) || (isAr && cleanContent.includes(cleanVwStripped));
      if (!exists) {
        console.log(`  [Page ${p.id}] Vocabulary Word NOT FOUND in content: "${vw}"`);
      }
    });
  });
}

checkPresence("A2", abrahamA2PagesEn, false);
checkPresence("A2", abrahamA2PagesAr, true);
checkPresence("B1", abrahamB1Pages, false);
checkPresence("B1", abrahamB1PagesAr, true);
checkPresence("B2", abrahamB2Pages, false);
checkPresence("B2", abrahamB2PagesAr, true);
