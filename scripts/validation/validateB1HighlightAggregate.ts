import assert from 'node:assert/strict';
import type { BookData, PageData } from '../../src/types';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../src/lib/highlightTextMatch';
import type { B1GoldPageConfig } from '../../src/data/b1GoldFactory';

import { adamB1GoldConfig, adamB1PagesGoldEn, adamB1PagesGoldAr } from '../../src/data/adam/b1/gold';
import { abrahamB1GoldConfig, abrahamB1PagesGoldEn, abrahamB1PagesGoldAr } from '../../src/data/abraham/b1/gold';
import { mosesB1RolloutConfig, mosesB1PagesRolloutEn, mosesB1PagesRolloutAr } from '../../src/data/moses/b1/rollout';
import { meccaB1GoldConfig, meccaB1PagesGoldEn, meccaB1PagesGoldAr } from '../../src/data/mecca/b1/gold';
import { yunusEmreB1GoldConfig, yunusEmreB1PagesGoldEn, yunusEmreB1PagesGoldAr } from '../../src/data/yunusEmre/b1/gold';

type Case = { label: string; en: BookData; ar: BookData; config: B1GoldPageConfig };
type LegacyCase = { label: string; enPages: PageData[]; arPages: PageData[]; config: B1GoldPageConfig };

const legacyCases: LegacyCase[] = [
  { label: 'Adam B1', enPages: adamB1PagesGoldEn, arPages: adamB1PagesGoldAr, config: adamB1GoldConfig },
  { label: 'Abraham B1', enPages: abrahamB1PagesGoldEn, arPages: abrahamB1PagesGoldAr, config: abrahamB1GoldConfig },
  { label: 'Moses B1', enPages: mosesB1PagesRolloutEn, arPages: mosesB1PagesRolloutAr, config: mosesB1RolloutConfig },
  { label: 'Mecca B1', enPages: meccaB1PagesGoldEn, arPages: meccaB1PagesGoldAr, config: meccaB1GoldConfig },
  { label: 'Yunus Emre B1', enPages: yunusEmreB1PagesGoldEn, arPages: yunusEmreB1PagesGoldAr, config: yunusEmreB1GoldConfig },
];

const wordsFor = (pages: PageData[], chapterId: number): string[] =>
  pages.find(page => page.type === 'story' && page.id === chapterId)?.vocabulary?.map(entry => entry.word) ?? [];

console.log('[B1 highlight aggregate] legacy pairing diagnostics');
for (const current of legacyCases) {
  const differences: string[] = [];
  for (const chapterId of current.config.storyIds) {
    const enWords = wordsFor(current.enPages, chapterId);
    const arWords = wordsFor(current.arPages, chapterId);
    if (enWords.length !== arWords.length) {
      differences.push(`Ch${chapterId} EN=${enWords.length}[${enWords.join(' | ')}] AR=${arWords.length}[${arWords.join(' | ')}]`);
    }
  }
  console.log(`[B1 pairing diagnostic] ${current.label}: ${differences.length ? differences.join(' || ') : 'no count drift'}`);
}

const [adam, abraham, moses, mecca, yunus] = await Promise.all([
  import('../../src/data/adam/b1'),
  import('../../src/data/abraham/b1'),
  import('../../src/data/moses/b1'),
  import('../../src/data/mecca/b1'),
  import('../../src/data/yunusEmre/b1'),
]);

const cases: Case[] = [
  { label: 'Adam B1', en: adam.adamB1BookDataEn, ar: adam.adamB1BookDataAr, config: adamB1GoldConfig },
  { label: 'Abraham B1', en: abraham.abrahamB1BookDataEn, ar: abraham.abrahamB1BookDataAr, config: abrahamB1GoldConfig },
  { label: 'Moses B1', en: moses.mosesB1BookDataEn, ar: moses.mosesB1BookDataAr, config: mosesB1RolloutConfig },
  { label: 'Mecca B1', en: mecca.meccaB1BookDataEn, ar: mecca.meccaB1BookDataAr, config: meccaB1GoldConfig },
  { label: 'Yunus Emre B1', en: yunus.yunusEmreB1BookDataEn, ar: yunus.yunusEmreB1BookDataAr, config: yunusEmreB1GoldConfig },
];

const page = (pages: PageData[], id: number, label: string): PageData => {
  const found = pages.find(candidate => candidate.id === id);
  assert.ok(found, `${label}: page ${id} missing.`);
  return found;
};
const chapterVocabulary = (book: BookData, ids: number[]) => ids.flatMap(id => page(book.pages, id, book.id).vocabulary ?? []);

const validateVocabularySelection = (label: string, en: BookData, ar: BookData, config: B1GoldPageConfig) => {
  if (!config.vocabularyPageId) return;
  const allEn = chapterVocabulary(en, config.storyIds);
  const allAr = chapterVocabulary(ar, config.storyIds);
  assert.equal(allEn.length, allAr.length, `${label}: flattened EN/AR Word Notes counts differ.`);

  const actualEn = page(en.pages, config.vocabularyPageId, `${label} EN vocabulary page`).vocabularyPairs ?? [];
  const actualAr = page(ar.pages, config.vocabularyPageId, `${label} AR vocabulary page`).vocabularyPairs ?? [];
  assert.equal(actualEn.length, 10, `${label}: B1 Vocabulary Challenge must contain 10 pairs.`);
  assert.equal(actualAr.length, 10, `${label}: Arabic B1 Vocabulary Challenge must contain 10 pairs.`);

  actualEn.forEach((selected, index) => {
    const sourceIndex = allEn.findIndex(entry => entry.word === selected.word && entry.definition === selected.meaning);
    assert.ok(sourceIndex >= 0, `${label}: EN selected vocabulary ${selected.word} is not from final Word Notes.`);
    const pairedArabic = allAr[sourceIndex];
    assert.deepEqual(actualAr[index], { word: pairedArabic.word, meaning: pairedArabic.definition }, `${label}: vocabulary pair ${index + 1} does not use the same EN/AR source coordinate.`);
  });
};

const validateCase = ({ label, en, ar, config }: Case): void => {
  const seenEn = new Set<string>();
  const seenAr = new Set<string>();

  for (const chapterId of config.storyIds) {
    const enPage = page(en.pages, chapterId, `${label} EN`);
    const arPage = page(ar.pages, chapterId, `${label} AR`);
    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];

    assert.equal(enPage.animatedWords, undefined, `${label} EN Ch${chapterId}: legacy animatedWords remain.`);
    assert.equal(arPage.animatedWords, undefined, `${label} AR Ch${chapterId}: legacy animatedWords remain.`);
    assert.equal(enVocabulary.length, arVocabulary.length, `${label} Ch${chapterId}: visible EN/AR target counts differ.`);
    assert.ok(enVocabulary.length >= 1 && enVocabulary.length <= 5, `${label} Ch${chapterId}: canonical target count must be 1–5.`);

    enVocabulary.forEach((entry, index) => {
      const arEntry = arVocabulary[index];
      assert.ok(entry.definition.trim(), `${label} EN Ch${chapterId}: ${entry.word} has no definition.`);
      assert.ok(arEntry?.definition.trim(), `${label} AR Ch${chapterId}: paired definition missing.`);
      assert.ok(highlightPhraseOccurs(enPage.content, entry.word, 'en'), `${label} EN Ch${chapterId}: ${entry.word} is not in story prose.`);
      assert.ok(arEntry && highlightPhraseOccurs(arPage.content, arEntry.word, 'ar'), `${label} AR Ch${chapterId}: ${arEntry?.word ?? 'missing'} is not in story prose.`);

      const enKey = normalizeHighlightText(entry.word, 'en');
      const arKey = normalizeHighlightText(arEntry.word, 'ar');
      assert.ok(!seenEn.has(enKey), `${label}: repeated English runtime target ${entry.word}.`);
      assert.ok(!seenAr.has(arKey), `${label}: repeated Arabic runtime target ${arEntry.word}.`);
      if (enKey) seenEn.add(enKey);
      if (arKey) seenAr.add(arKey);
    });
  }

  const midpoint = Math.ceil(config.storyIds.length / 2);
  const halves = [config.storyIds.slice(0, midpoint), config.storyIds.slice(midpoint)];
  config.glossaryPageIds.forEach((glossaryPageId, index) => {
    const expectedEn = chapterVocabulary(en, halves[index]);
    const expectedAr = chapterVocabulary(ar, halves[index]);
    const actualEn = page(en.pages, glossaryPageId, `${label} EN glossary`).vocabulary ?? [];
    const actualAr = page(ar.pages, glossaryPageId, `${label} AR glossary`).vocabulary ?? [];
    assert.deepEqual(actualEn, expectedEn, `${label} EN glossary ${index + 1} is not derived from final highlights.`);
    assert.deepEqual(actualAr, expectedAr, `${label} AR glossary ${index + 1} is not derived from final highlights.`);
  });

  validateVocabularySelection(label, en, ar, config);
};

for (const current of cases) {
  validateCase(current);
  console.log(`[B1 highlight aggregate] PASS ${current.label}`);
}

console.log(`B1 highlight aggregate: PASS ${cases.length}/${cases.length} books.`);
console.log('- final EN/AR visible Word Notes remain chapter-grounded and count-aligned');
console.log('- legacy animatedWords are removed from B1 runtime story pages');
console.log('- Master Glossary derives from final visible Word Notes');
console.log('- Vocabulary Challenge uses balanced selections from final Word Notes with the same EN/AR source coordinates');
