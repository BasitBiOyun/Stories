import * as fs from 'fs';
import { mosesA2Pages } from '../src/data/moses/a2/en/pages';
import { mosesA2PagesAr } from '../src/data/moses/a2/ar/pages';
import { mosesB1Pages } from '../src/data/moses/b1/en/pages';
import { mosesB1PagesAr } from '../src/data/moses/b1/ar/pages';
import { mosesB2Pages } from '../src/data/moses/b2/en/pages';
import { mosesB2PagesAr } from '../src/data/moses/b2/ar/pages';

let report = '';
function log(msg: string) {
  report += msg + '\n';
  console.log(msg);
}

function comparePages(level: string, enPages: any[], arPages: any[]) {
  log(`\n=== Comparing ${level} Pages ===`);
  if (enPages.length !== arPages.length) {
    log(`Page count mismatch! English: ${enPages.length}, Arabic: ${arPages.length}`);
    return;
  }

  let totalMismatches = 0;

  for (let i = 0; i < enPages.length; i++) {
    const en = enPages[i];
    const ar = arPages[i];
    const pageId = en.id;

    if (en.type !== ar.type) {
      log(`[Page ${pageId}] Type Mismatch: EN is ${en.type}, AR is ${ar.type}`);
      totalMismatches++;
      continue;
    }

    if (en.type !== 'story') {
      continue; // Skip non-story pages (exercises/final challenge)
    }

    // Compare animatedWords count and content
    const enAnim = en.animatedWords || [];
    const arAnim = ar.animatedWords || [];
    if (enAnim.length !== arAnim.length) {
      log(`[Page ${pageId}] AnimatedWords Mismatch: EN has ${enAnim.length} [${enAnim.join(', ')}] vs AR has ${arAnim.length} [${arAnim.join(', ')}]`);
      totalMismatches++;
    }

    // Compare vocabulary
    const enVocab = en.vocabulary || [];
    const arVocab = ar.vocabulary || [];
    if (enVocab.length !== arVocab.length) {
      log(`[Page ${pageId}] Vocabulary count mismatch: EN has ${enVocab.length} vs AR has ${arVocab.length}`);
      log(`  EN: ${enVocab.map((v: any) => v.word).join(', ')}`);
      log(`  AR: ${arVocab.map((v: any) => v.word).join(', ')}`);
      totalMismatches++;
    } else {
      for (let j = 0; j < enVocab.length; j++) {
        const ev = enVocab[j];
        const av = arVocab[j];
        if (!av) {
          log(`[Page ${pageId}] Vocabulary Item ${j} missing in AR`);
          totalMismatches++;
        }
      }
    }

    // Compare hotspots
    const enHot = en.hotspots || [];
    const arHot = ar.hotspots || [];
    if (enHot.length !== arHot.length) {
      log(`[Page ${pageId}] Hotspots Mismatch: EN has ${enHot.length} vs AR has ${arHot.length}`);
      totalMismatches++;
    } else {
      for (let j = 0; j < enHot.length; j++) {
        const eh = enHot[j];
        const ah = arHot[j];
        if (eh.id !== ah.id) {
          log(`[Page ${pageId}] Hotspot ${j} ID mismatch! EN: ${eh.id} vs AR: ${ah.id}`);
          totalMismatches++;
        }
      }
    }
  }

  log(`Finished ${level}. Total mismatches/warnings: ${totalMismatches}`);
}

log("Starting comparison for Moses...");
comparePages("A2", mosesA2Pages, mosesA2PagesAr);
comparePages("B1", mosesB1Pages, mosesB1PagesAr);
comparePages("B2", mosesB2Pages, mosesB2PagesAr);

fs.writeFileSync('scripts/moses_comparison_report.txt', report);
log("\nSaved report to scripts/moses_comparison_report.txt");

