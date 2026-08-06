import { abrahamA2PagesAr } from '../src/data/abraham/a2/ar/pages';

function normalizeArabic(text: string) {
  return text
    .replace(/[\u064B-\u0652]/g, "") // Remove diacritics
    .replace(/[أإآ]/g, "ا") // Normalize Alef
    .replace(/ة/g, "ه") // Normalize Teh Marbuta
    .replace(/ى/g, "ي") // Normalize Alef Maksura
    .replace(/[.,!?;:\"'高度“”‘’`()]/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

const p = abrahamA2PagesAr[11]; // Page 12 is index 11
console.log("Original content:\n", p.content);
console.log("\nNormalized content:\n", normalizeArabic(p.content));

console.log("\nVocabulary Words:");
p.vocabulary.forEach((v: any) => {
  console.log(`Word: "${v.word}" -> Normalized: "${normalizeArabic(v.word)}" -> Exists:`, normalizeArabic(p.content).includes(normalizeArabic(v.word)));
});

console.log("\nAnimated Words:");
p.animatedWords.forEach((aw: string) => {
  console.log(`Word: "${aw}" -> Normalized: "${normalizeArabic(aw)}" -> Exists:`, normalizeArabic(p.content).includes(normalizeArabic(aw)));
});
