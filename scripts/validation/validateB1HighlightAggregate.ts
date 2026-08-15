import assert from 'node:assert/strict';
import type { BookData, PageData } from '../../src/types';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../src/lib/highlightTextMatch';

import { adamB1BookDataEn, adamB1BookDataAr } from '../../src/data/adam/b1';
import { adamB1GoldConfig } from '../../src/data/adam/b1/gold';
import { abrahamB1BookDataEn, abrahamB1BookDataAr } from '../../src/data/abraham/b1';
import { abrahamB1GoldConfig } from '../../src/data/abraham/b1/gold';
import { mosesB1BookDataEn, mosesB1BookDataAr } from '../../src/data/moses/b1';
import { mosesB1RolloutConfig } from '../../src/data/moses/b1/rollout';
import { meccaB1BookDataEn, meccaB1BookDataAr } from '../../src/data/mecca/b1';
import { meccaB1GoldConfig } from '../../src/data/mecca/b1/gold';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from '../../src/data/yunusEmre/b1';
import { yunusEmreB1GoldConfig } from '../../src/data/yunusEmre/b1/gold';
import type { B1GoldPageConfig } from '../../src/data/b1GoldFactory';

type Case = {
  label: string;
  en: BookData;
  ar: BookData;
  config: B1GoldPageConfig;
};

const cases: Case[] = [
  { label: 'Adam B1', en: adamB1BookDataEn, ar: adamB1BookDataAr, config: adamB1GoldConfig },
  { label: 'Abraham B1', en: abrahamB1BookDataEn, ar: abrahamB1BookDataAr, config: abrahamB1GoldConfig },
  { label: 'Moses B1', en: mosesB1BookDataEn, ar: mosesB1BookDataAr, config: mosesB1RolloutConfig },
  { label: 'Mecca B1', en: meccaB1BookDataEn, ar: meccaB1BookDataAr, config: meccaB1GoldConfig },
  { label: 'Yunus Emre B1', en: yunusEmreB1BookDataEn, ar: yunusEmreB1BookDataAr, config: yunusEmreB1GoldConfig },
];

const page = (pages: PageData[], id: number, label: string): PageData => {
  const found = pages.find((candidate) => candidate.id === id);
  assert.ok(found, `${label}: page ${id} missing.`);
  return found;
};

const chapterVocabulary = (book: BookData, ids: number[]) => ids.flatMap((id) => (
  page(book.pages, id, book.id).vocabulary ?? []
));

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

  if (config.vocabularyPageId) {
    const expectedEn = chapterVocabulary(en, config.storyIds).slice(0, 10);
    const expectedAr = chapterVocabulary(ar, config.storyIds).slice(0, 10);
    const actualEn = page(en.pages, config.vocabularyPageId, `${label} EN vocabulary page`).vocabularyPairs ?? [];
    const actualAr = page(ar.pages, config.vocabularyPageId, `${label} AR vocabulary page`).vocabularyPairs ?? [];
    assert.deepEqual(actualEn, expectedEn.map((entry) => ({ word: entry.word, meaning: entry.definition })), `${label} EN vocabulary page drifted from final highlights.`);
    assert.deepEqual(actualAr, expectedAr.map((entry) => ({ word: entry.word, meaning: entry.definition })), `${label} AR vocabulary page drifted from final highlights.`);
  }
};

for (const current of cases) {
  validateCase(current);
  console.log(`[B1 highlight aggregate] PASS ${current.label}`);
}

console.log(`B1 highlight aggregate: PASS ${cases.length}/${cases.length} books.`);
console.log('- English is the sole canonical learning-target authority');
console.log('- Arabic uses paired same-concept story surfaces with equal visible counts');
console.log('- legacy animatedWords removed from B1 runtime story pages');
console.log('- all targets are grounded in locked prose and have learner definitions');
console.log('- Master Glossary and Vocabulary-in-Context pages derive from final highlights');
