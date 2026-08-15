import assert from 'node:assert/strict';
import type { BookData, PageData } from '../../src/types';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../src/lib/highlightTextMatch';

type B2HighlightCase = {
  label: string;
  en: BookData;
  ar: BookData;
  storyIds: number[];
  glossaryPageIds: [number, number];
  vocabularyPageId?: number;
};

const page = (pages: PageData[], id: number, label: string): PageData => {
  const found = pages.find((candidate) => candidate.id === id);
  assert.ok(found, `${label}: page ${id} missing.`);
  return found;
};

const chapterVocabulary = (book: BookData, ids: number[]) => ids.flatMap((id) => (
  page(book.pages, id, book.id).vocabulary ?? []
));

// Import final books dynamically so that each book's canonical B2 highlight
// contract runs before the aggregate assertions below.
const [adam, abraham, moses, mecca, yunus] = await Promise.all([
  import('../../src/data/adam/b2'),
  import('../../src/data/abraham/b2'),
  import('../../src/data/moses/b2'),
  import('../../src/data/mecca/b2'),
  import('../../src/data/yunusEmre/b2'),
]);

const cases: B2HighlightCase[] = [
  {
    label: 'Adam B2',
    en: adam.adamB2BookDataEn,
    ar: adam.adamB2BookDataAr,
    storyIds: Array.from({ length: 17 }, (_, index) => index + 1),
    glossaryPageIds: [20, 21],
  },
  {
    label: 'Abraham B2',
    en: abraham.abrahamB2BookDataEn,
    ar: abraham.abrahamB2BookDataAr,
    storyIds: Array.from({ length: 35 }, (_, index) => index + 1),
    glossaryPageIds: [38, 39],
  },
  {
    label: 'Moses B2',
    en: moses.mosesB2BookDataEn,
    ar: moses.mosesB2BookDataAr,
    storyIds: Array.from({ length: 24 }, (_, index) => index + 1),
    glossaryPageIds: [27, 28],
    vocabularyPageId: 26,
  },
  {
    label: 'Mecca B2',
    en: mecca.meccaB2BookDataEn,
    ar: mecca.meccaB2BookDataAr,
    storyIds: Array.from({ length: 17 }, (_, index) => index + 1),
    glossaryPageIds: [20, 21],
  },
  {
    label: 'Yunus Emre B2',
    en: yunus.yunusEmreB2BookDataEn,
    ar: yunus.yunusEmreB2BookDataAr,
    storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
    glossaryPageIds: [17, 18],
    vocabularyPageId: 16,
  },
];

const validateCase = ({ label, en, ar, storyIds, glossaryPageIds, vocabularyPageId }: B2HighlightCase): void => {
  const seenEn = new Set<string>();
  const seenAr = new Set<string>();

  for (const chapterId of storyIds) {
    const enPage = page(en.pages, chapterId, `${label} EN`);
    const arPage = page(ar.pages, chapterId, `${label} AR`);
    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];

    assert.equal(enPage.type, 'story', `${label} EN Ch${chapterId}: expected story page.`);
    assert.equal(arPage.type, 'story', `${label} AR Ch${chapterId}: expected story page.`);
    assert.equal(enPage.animatedWords, undefined, `${label} EN Ch${chapterId}: legacy animatedWords remain.`);
    assert.equal(arPage.animatedWords, undefined, `${label} AR Ch${chapterId}: legacy animatedWords remain.`);
    assert.equal(enVocabulary.length, arVocabulary.length, `${label} Ch${chapterId}: visible EN/AR target counts differ.`);
    assert.ok(enVocabulary.length >= 1 && enVocabulary.length <= 7, `${label} Ch${chapterId}: canonical target count must be 1–7.`);

    enVocabulary.forEach((entry, index) => {
      const arEntry = arVocabulary[index];
      assert.ok(entry.word.trim(), `${label} EN Ch${chapterId}: empty target.`);
      assert.ok(entry.definition.trim(), `${label} EN Ch${chapterId}: ${entry.word} has no definition.`);
      assert.ok(arEntry?.word.trim(), `${label} AR Ch${chapterId}: paired target missing.`);
      assert.ok(arEntry?.definition.trim(), `${label} AR Ch${chapterId}: paired definition missing.`);
      assert.ok(highlightPhraseOccurs(enPage.content, entry.word, 'en'), `${label} EN Ch${chapterId}: ${entry.word} is not in locked story prose.`);
      assert.ok(arEntry && highlightPhraseOccurs(arPage.content, arEntry.word, 'ar'), `${label} AR Ch${chapterId}: ${arEntry?.word ?? 'missing'} is not in locked story prose.`);

      const enKey = normalizeHighlightText(entry.word, 'en');
      const arKey = normalizeHighlightText(arEntry.word, 'ar');
      assert.ok(enKey, `${label} EN Ch${chapterId}: ${entry.word} normalizes to an empty key.`);
      assert.ok(arKey, `${label} AR Ch${chapterId}: ${arEntry.word} normalizes to an empty key.`);
      assert.ok(!seenEn.has(enKey), `${label}: repeated English runtime target ${entry.word}.`);
      assert.ok(!seenAr.has(arKey), `${label}: repeated Arabic runtime target ${arEntry.word}.`);
      seenEn.add(enKey);
      seenAr.add(arKey);
    });
  }

  const midpoint = Math.ceil(storyIds.length / 2);
  const halves = [storyIds.slice(0, midpoint), storyIds.slice(midpoint)];
  glossaryPageIds.forEach((glossaryPageId, index) => {
    const expectedEn = chapterVocabulary(en, halves[index]);
    const expectedAr = chapterVocabulary(ar, halves[index]);
    const actualEn = page(en.pages, glossaryPageId, `${label} EN glossary`).vocabulary ?? [];
    const actualAr = page(ar.pages, glossaryPageId, `${label} AR glossary`).vocabulary ?? [];
    assert.deepEqual(actualEn, expectedEn, `${label} EN glossary ${index + 1} is not derived from final highlights.`);
    assert.deepEqual(actualAr, expectedAr, `${label} AR glossary ${index + 1} is not derived from final highlights.`);
  });

  if (vocabularyPageId) {
    const expectedEn = chapterVocabulary(en, storyIds).slice(0, 10);
    const expectedAr = chapterVocabulary(ar, storyIds).slice(0, 10);
    const actualEn = page(en.pages, vocabularyPageId, `${label} EN vocabulary page`).vocabularyPairs ?? [];
    const actualAr = page(ar.pages, vocabularyPageId, `${label} AR vocabulary page`).vocabularyPairs ?? [];
    assert.deepEqual(
      actualEn,
      expectedEn.map((entry) => ({ word: entry.word, meaning: entry.definition })),
      `${label} EN Vocabulary-in-Context drifted from final highlights.`,
    );
    assert.deepEqual(
      actualAr,
      expectedAr.map((entry) => ({ word: entry.word, meaning: entry.definition })),
      `${label} AR Vocabulary-in-Context drifted from final highlights.`,
    );
  }
};

for (const current of cases) {
  validateCase(current);
  console.log(`[B2 highlight aggregate] PASS ${current.label}`);
}

console.log(`B2 highlight aggregate: PASS ${cases.length}/${cases.length} books.`);
console.log('- English is the sole canonical B2 learning-target authority');
console.log('- Arabic uses reviewed same-concept surfaces from the locked Arabic story');
console.log('- visible EN/AR target counts remain equal chapter by chapter');
console.log('- legacy animatedWords are removed from B2 runtime story pages');
console.log('- repeated runtime targets are suppressed consistently with the reader');
console.log('- Master Glossary and Vocabulary-in-Context derive from final highlights');
