import { abrahamB1Pages } from '../src/data/abraham/b1/en/pages';
import { abrahamB1PagesAr } from '../src/data/abraham/b1/ar/pages';

const pEn = abrahamB1Pages.find(p => p.id === 5);
const pAr = abrahamB1PagesAr.find(p => p.id === 5);

if (pEn) {
  console.log("=== EN PAGE 5 ===");
  console.log("Content:\n", pEn.content);
  console.log("Vocab:", pEn.vocabulary);
  console.log("Anim:", pEn.animatedWords);
}

if (pAr) {
  console.log("\n=== AR PAGE 5 ===");
  console.log("Content:\n", pAr.content);
  console.log("Vocab:", pAr.vocabulary);
  console.log("Anim:", pAr.animatedWords);
}
