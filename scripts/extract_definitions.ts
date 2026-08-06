import { abrahamA2PagesEn } from '../src/data/abraham/a2/en/pages';
import { abrahamA2PagesAr } from '../src/data/abraham/a2/ar/pages';
import { abrahamB1Pages } from '../src/data/abraham/b1/en/pages';
import { abrahamB1PagesAr } from '../src/data/abraham/b1/ar/pages';

console.log("=== A2 EN VOCABULARY AND HOTSPOTS ===");
abrahamA2PagesEn.forEach(p => {
  if (p.type === 'story') {
    console.log(`Page ${p.id}:`);
    console.log(`  Vocab:`, p.vocabulary);
    console.log(`  Hotspots:`, p.hotspots);
    console.log(`  Animated:`, p.animatedWords);
  }
});

console.log("\n=== A2 AR VOCABULARY AND HOTSPOTS ===");
abrahamA2PagesAr.forEach(p => {
  if (p.type === 'story') {
    console.log(`Page ${p.id}:`);
    console.log(`  Vocab:`, p.vocabulary);
    console.log(`  Hotspots:`, p.hotspots);
    console.log(`  Animated:`, p.animatedWords);
  }
});
