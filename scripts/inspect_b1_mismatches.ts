import { abrahamB1Pages } from '../src/data/abraham/b1/en/pages';
import { abrahamB1PagesAr } from '../src/data/abraham/b1/ar/pages';

const pagesToInspect = [4, 8, 9];

pagesToInspect.forEach(id => {
  const en = abrahamB1Pages.find(p => p.id === id);
  const ar = abrahamB1PagesAr.find(p => p.id === id);

  console.log(`\n================ B1 PAGE ${id} ===============`);
  if (en) {
    console.log(`[EN CONTENT]:\n`, en.content);
    console.log(`[EN VOCAB]:`, en.vocabulary);
    console.log(`[EN ANIM]:`, en.animatedWords);
  }
  if (ar) {
    console.log(`[AR CONTENT]:\n`, ar.content);
    console.log(`[AR VOCAB]:`, ar.vocabulary);
    console.log(`[AR ANIM]:`, ar.animatedWords);
  }
});
