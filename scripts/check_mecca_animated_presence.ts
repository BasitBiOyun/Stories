import { meccaA2Pages } from '../src/data/mecca/a2/en/pages';
import { meccaA2PagesAr } from '../src/data/mecca/a2/ar/pages';
import { meccaB1Pages } from '../src/data/mecca/b1/en/pages';
import { meccaB1PagesAr } from '../src/data/mecca/b1/ar/pages';
import { meccaB2Pages } from '../src/data/mecca/b2/en/pages';
import { meccaB2PagesAr } from '../src/data/mecca/b2/ar/pages';

function normalizeArabic(text: string) {
  return text
    .replace(/[\u064B-\u0652]/g, "") // Remove diacritics
    .replace(/[أإآ]/g, "ا") // Normalize Alef
    .replace(/ة/g, "ه") // Normalize Teh Marbuta
    .replace(/ى/g, "ي") // Normalize Alef Maksura
    .replace(/[.,!?;:\"'“”‘’`()«»]/g, "")
    .toLowerCase()
    .trim();
}

function normalizeEnglish(text: string) {
  return text
    .replace(/[.,!?;:\"'“”‘’`()«»]/g, "")
    .toLowerCase()
    .trim();
}

function checkPresence(level: string, pages: any[], isAr: boolean) {
  console.log(`\n=== Presence Check for Mecca ${level} (${isAr ? 'AR' : 'EN'}) ===`);
  let missingCount = 0;
  pages.forEach(p => {
    if (p.type !== 'story') return;
    const content = p.content || "";
    const cleanContent = isAr ? normalizeArabic(content) : normalizeEnglish(content);

    // Check animatedWords
    const anim = p.animatedWords || [];
    anim.forEach((aw: string) => {
      const cleanAw = isAr ? normalizeArabic(aw) : normalizeEnglish(aw);
      const cleanAwStripped = isAr ? cleanAw.replace(/^ال/, '') : cleanAw;
      
      const exists = cleanContent.includes(cleanAw) || (isAr && cleanContent.includes(cleanAwStripped));
      if (!exists) {
        console.log(`  [Page ${p.id}] Animated Word NOT FOUND in content: "${aw}"`);
        missingCount++;
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
        missingCount++;
      }
    });
  });
  console.log(`Presence check for ${level} completed. Missing words: ${missingCount}`);
}

checkPresence("A2", meccaA2Pages, false);
checkPresence("A2", meccaA2PagesAr, true);
checkPresence("B1", meccaB1Pages, false);
checkPresence("B1", meccaB1PagesAr, true);
checkPresence("B2", meccaB2Pages, false);
checkPresence("B2", meccaB2PagesAr, true);
