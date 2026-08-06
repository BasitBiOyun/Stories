import { abrahamA2PagesEn } from '../src/data/abraham/a2/en/pages';
import { abrahamA2PagesAr } from '../src/data/abraham/a2/ar/pages';
import { abrahamB1Pages } from '../src/data/abraham/b1/en/pages';
import { abrahamB1PagesAr } from '../src/data/abraham/b1/ar/pages';
import { abrahamB2Pages } from '../src/data/abraham/b2/en/pages';
import { abrahamB2PagesAr } from '../src/data/abraham/b2/ar/pages';

function comparePages(level: string, enPages: any[], arPages: any[]) {
  console.log(`\n=== Comparing ${level} Pages ===`);
  if (enPages.length !== arPages.length) {
    console.error(`Page count mismatch! English: ${enPages.length}, Arabic: ${arPages.length}`);
    return;
  }

  let totalMismatches = 0;

  for (let i = 0; i < enPages.length; i++) {
    const en = enPages[i];
    const ar = arPages[i];
    const pageId = en.id;

    // Compare animatedWords
    const enAnim = en.animatedWords || [];
    const arAnim = ar.animatedWords || [];
    if (enAnim.length !== arAnim.length) {
      console.warn(`[Page ${pageId}] AnimatedWords Mismatch: EN has ${enAnim.length} [${enAnim.join(', ')}] vs AR has ${arAnim.length} [${arAnim.join(', ')}]`);
      totalMismatches++;
    }

    // Compare vocabulary
    const enVocab = en.vocabulary || [];
    const arVocab = ar.vocabulary || [];
    if (enVocab.length !== arVocab.length) {
      console.warn(`[Page ${pageId}] Vocabulary Mismatch: EN has ${enVocab.length} vs AR has ${arVocab.length}`);
      totalMismatches++;
    } else {
      // Check if word/definition pairs exist
      for (let j = 0; j < enVocab.length; j++) {
        const ev = enVocab[j];
        const av = arVocab[j];
        if (!av) {
          console.warn(`[Page ${pageId}] Vocabulary Item ${j} missing in AR`);
          totalMismatches++;
        }
      }
    }

    // Compare hotspots
    const enHot = en.hotspots || [];
    const arHot = ar.hotspots || [];
    if (enHot.length !== arHot.length) {
      console.warn(`[Page ${pageId}] Hotspots Mismatch: EN has ${enHot.length} vs AR has ${arHot.length}`);
      totalMismatches++;
    } else {
      for (let j = 0; j < enHot.length; j++) {
        const eh = enHot[j];
        const ah = arHot[j];
        if (eh.id !== ah.id) {
          console.warn(`[Page ${pageId}] Hotspot ${j} ID mismatch! EN: ${eh.id} vs AR: ${ah.id}`);
          totalMismatches++;
        }
      }
    }
  }

  console.log(`Finished ${level}. Total page mismatches: ${totalMismatches}`);
}

console.log("Starting comparison...");
comparePages("A2", abrahamA2PagesEn, abrahamA2PagesAr);
comparePages("B1", abrahamB1Pages, abrahamB1PagesAr);
comparePages("B2", abrahamB2Pages, abrahamB2PagesAr);
