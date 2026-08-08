import assert from 'node:assert/strict';
import type { BookData, PageData } from '../../src/types';
import { adamB1BookDataEn, adamB1BookDataAr } from '../../src/data/adam/b1';
import { meccaB1BookDataEn, meccaB1BookDataAr } from '../../src/data/mecca/b1';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from '../../src/data/yunusEmre/b1';

const page = (book: BookData, id: number): PageData => {
  const value = book.pages.find((candidate) => candidate.id === id);
  assert.ok(value, `${book.id}: page ${id} is missing.`);
  return value;
};

const hotspot = (book: BookData, pageId: number, hotspotId: string) => {
  const value = page(book, pageId).hotspots?.find((candidate) => candidate.id === hotspotId);
  assert.ok(value, `${book.id}: hotspot ${hotspotId} is missing on page ${pageId}.`);
  return value;
};

// Adam: remove unsupported symbolic/theological claims from derived hotspot copy.
assert.equal(hotspot(adamB1BookDataEn, 1, 'h2').title, 'Knowledge and Responsibility');
assert.ok(!hotspot(adamB1BookDataEn, 1, 'h2').description.toLowerCase().includes('light'));
assert.ok(!hotspot(adamB1BookDataEn, 7, 'h7-2').description.toLowerCase().includes('guilty'));
assert.equal(hotspot(adamB1BookDataAr, 1, 'h2').title, 'الْعِلْمُ وَالْمَسْؤُولِيَّة');
assert.ok(!hotspot(adamB1BookDataAr, 1, 'h2').description.includes('النور'));

// Mecca: sensitive oppression hotspots stay factual without repeating graphic details.
const meccaBilalEn = hotspot(meccaB1BookDataEn, 13, 'h13-1');
assert.equal(meccaBilalEn.title, 'Bilal’s Steadfast Faith');
assert.ok(!/rock|chest|midday sun/i.test(meccaBilalEn.description), 'Mecca B1 EN: Bilal hotspot became unnecessarily graphic.');
const meccaBoycottEn = hotspot(meccaB1BookDataEn, 14, 'h14-1');
assert.equal(meccaBoycottEn.title, 'Hardship During the Boycott');
assert.ok(!/tree leaves|died of hunger|cries of hungry children/i.test(meccaBoycottEn.description), 'Mecca B1 EN: boycott hotspot became unnecessarily graphic.');
assert.equal(hotspot(meccaB1BookDataAr, 13, 'h13-1').title, 'ثَبَاتُ بِلالٍ عَلَى إِيمَانِهِ');
assert.equal(hotspot(meccaB1BookDataAr, 14, 'h14-1').title, 'مَشَقَّةُ الْحِصَارِ');

// Yunus Emre: all newly authored hotspot and assessment copy must retain attribution framing.
for (const [book, language] of [
  [yunusEmreB1BookDataEn, 'en'],
  [yunusEmreB1BookDataAr, 'ar'],
] as const) {
  for (const story of book.pages.filter((candidate) => candidate.type === 'story')) {
    for (const current of story.hotspots ?? []) {
      if (language === 'en') {
        assert.ok(
          current.description.startsWith("The chapter presents this in Yunus Emre's historical and literary context:"),
          `${book.id} ${current.id}: missing Yunus attribution framing.`,
        );
      } else {
        assert.ok(
          current.description.includes('سِيَاقِ يُونُس إِمْرَه'),
          `${book.id} ${current.id}: missing Yunus attribution framing.`,
        );
      }
    }

    const quick = story.exercises?.[0];
    assert.ok(quick?.question, `${book.id} chapter ${story.id}: Quick Challenge question missing.`);
    if (language === 'en') {
      assert.ok(quick.question.startsWith('According to the chapter,'), `${book.id} chapter ${story.id}: question lacks attribution framing.`);
      assert.ok(quick.explanation?.startsWith("The chapter presents this idea in Yunus Emre's context:"), `${book.id} chapter ${story.id}: explanation lacks attribution framing.`);
    } else {
      assert.ok(quick.question.includes('بِحَسَبِ مَا يُقَدِّمُهُ الْفَصْلُ'), `${book.id} chapter ${story.id}: Arabic question lacks attribution framing.`);
      assert.ok(quick.explanation?.includes('سِيَاقِ يُونُس إِمْرَه'), `${book.id} chapter ${story.id}: Arabic explanation lacks attribution framing.`);
    }
  }

  for (const assessmentPage of book.pages.filter((candidate) => ['quiz', 'exercises', 'final-challenge'].includes(candidate.type))) {
    for (const exercise of assessmentPage.exercises ?? []) {
      if (!exercise.question) continue;
      if (language === 'en') {
        assert.ok(exercise.question.startsWith('According to the chapter,'), `${book.id} ${exercise.id}: assessment question lacks attribution framing.`);
      } else {
        assert.ok(exercise.question.includes('بِحَسَبِ مَا يُقَدِّمُهُ الْفَصْلُ'), `${book.id} ${exercise.id}: Arabic assessment question lacks attribution framing.`);
      }
    }
  }
}

console.log('B1 religious/historical hotspot safety: PASS');
console.log('- Adam unsupported hotspot symbolism removed from finalized overlay');
console.log('- Mecca sensitive oppression hotspots use non-graphic framing');
console.log('- Yunus Emre derived hotspots and assessment copy retain explicit attribution');
