import assert from 'node:assert/strict';
import type { BookData } from '../../src/types';
import { adamB1BookDataEn, adamB1BookDataAr } from '../../src/data/adam/b1';
import { meccaB1BookDataEn, meccaB1BookDataAr } from '../../src/data/mecca/b1';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from '../../src/data/yunusEmre/b1';

const normalize = (value: string, language: 'en' | 'ar'): string => {
  let result = value
    .normalize('NFKC')
    .replaceAll('**', '')
    .replace(/\s+/g, ' ')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .toLocaleLowerCase()
    .trim();

  if (language === 'ar') {
    result = result
      .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
      .replace(/ـ/g, '')
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي');
  }
  return result;
};

const assertSourceGroundedHotspots = (book: BookData, language: 'en' | 'ar') => {
  for (const story of book.pages.filter(candidate => candidate.type === 'story')) {
    const chapter = normalize(story.content, language);
    for (const current of story.hotspots ?? []) {
      assert.ok(current.title.trim(), `${book.id} ${current.id}: hotspot title is empty.`);
      assert.ok(current.description.trim(), `${book.id} ${current.id}: hotspot description is empty.`);
      assert.ok(
        chapter.includes(normalize(current.title, language)),
        `${book.id} ${current.id}: hotspot title is not a direct phrase from its own chapter.`,
      );
      assert.ok(
        chapter.includes(normalize(current.description, language)),
        `${book.id} ${current.id}: hotspot description is not a direct extract from its own chapter.`,
      );
    }
  }
};

for (const [book, language] of [
  [adamB1BookDataEn, 'en'],
  [adamB1BookDataAr, 'ar'],
  [meccaB1BookDataEn, 'en'],
  [meccaB1BookDataAr, 'ar'],
  [yunusEmreB1BookDataEn, 'en'],
  [yunusEmreB1BookDataAr, 'ar'],
] as const) {
  assertSourceGroundedHotspots(book, language);
}

// Derived hotspots may select chapter evidence, but must never reintroduce the old
// invented meta-framing or unsupported symbolic language that the source lock removed.
for (const book of [adamB1BookDataEn, meccaB1BookDataEn, yunusEmreB1BookDataEn]) {
  for (const story of book.pages.filter(candidate => candidate.type === 'story')) {
    for (const current of story.hotspots ?? []) {
      assert.ok(!/^the chapter (?:presents|connects|teaches|shows)\b/i.test(current.description), `${book.id} ${current.id}: invented hotspot meta-framing returned.`);
    }
  }
}

// Yunus assessment questions keep explicit chapter attribution because these are
// authored learning materials rather than canonical prose extracts.
for (const [book, language] of [
  [yunusEmreB1BookDataEn, 'en'],
  [yunusEmreB1BookDataAr, 'ar'],
] as const) {
  for (const story of book.pages.filter(candidate => candidate.type === 'story')) {
    const quick = story.exercises?.[0];
    assert.ok(quick?.question, `${book.id} chapter ${story.id}: Quick Challenge question missing.`);
    if (language === 'en') {
      assert.ok(quick.question.startsWith('According to the chapter,'), `${book.id} chapter ${story.id}: question lacks chapter attribution.`);
    } else {
      assert.ok(quick.question.includes('بِحَسَبِ مَا يُقَدِّمُهُ الْفَصْلُ'), `${book.id} chapter ${story.id}: Arabic question lacks chapter attribution.`);
    }
  }
}

console.log('B1 source-grounded safety: PASS');
console.log('- Adam, Mecca, and Yunus Emre EN/AR hotspots are direct same-chapter phrases/extracts');
console.log('- obsolete invented hotspot meta-framing is prohibited');
console.log('- Yunus Emre authored assessment questions retain explicit chapter attribution');
