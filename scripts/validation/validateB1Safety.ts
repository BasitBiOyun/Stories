import assert from 'node:assert/strict';
import type { BookData, Exercise } from '../../src/types';
import { normalizeHighlightText } from '../../src/lib/highlightTextMatch';
import { normalizeHotspotSourceText } from '../../src/data/storyHotspotSourceLock';
import { abrahamB1BookDataEn, abrahamB1BookDataAr } from '../../src/data/abraham/b1';
import { mosesB1BookDataEn, mosesB1BookDataAr } from '../../src/data/moses/b1';
import { meccaB1BookDataEn, meccaB1BookDataAr } from '../../src/data/mecca/b1';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from '../../src/data/yunusEmre/b1';

/** Temporary safety contract for B1 books not yet migrated to Blueprint. */
const cases = [
  [abrahamB1BookDataEn, 'en'], [abrahamB1BookDataAr, 'ar'],
  [mosesB1BookDataEn, 'en'], [mosesB1BookDataAr, 'ar'],
  [meccaB1BookDataEn, 'en'], [meccaB1BookDataAr, 'ar'],
  [yunusEmreB1BookDataEn, 'en'], [yunusEmreB1BookDataAr, 'ar'],
] as const satisfies ReadonlyArray<readonly [BookData, 'en' | 'ar']>;

const normalized = (value: string, language: 'en' | 'ar') => normalizeHighlightText(value, language).trim();
const retryReturnsToText = (exercise: Exercise, language: 'en' | 'ar') => {
  const retry = normalized(exercise.feedback?.incorrect || '', language);
  return language === 'ar' ? /ارجع|راجع|الفصل|النص/.test(retry) : /return|chapter|text|reread|check/.test(retry);
};

for (const [book, language] of cases) {
  for (const story of book.pages.filter(candidate => candidate.type === 'story')) {
    const chapter = normalizeHotspotSourceText(story.content, language);
    for (const hotspot of story.hotspots ?? []) {
      assert.ok(hotspot.title.trim() && hotspot.description.trim(), `${book.id} ${hotspot.id}: hotspot is incomplete.`);
      assert.ok(chapter.includes(normalizeHotspotSourceText(hotspot.title, language)), `${book.id} ${hotspot.id}: hotspot title is not from its chapter.`);
      assert.ok(chapter.includes(normalizeHotspotSourceText(hotspot.description, language)), `${book.id} ${hotspot.id}: hotspot description is not from its chapter.`);
    }

    const quick = story.exercises?.[0];
    assert.ok(quick, `${book.id} Chapter ${story.id}: Quick Challenge missing.`);
    assert.ok(quick.id.startsWith('learning-b1-quick-'), `${book.id} Chapter ${story.id}: legacy B1 Quick ownership changed before migration.`);
    assert.ok(quick.question?.trim() && quick.explanation?.trim(), `${book.id} Chapter ${story.id}: Quick Challenge is incomplete.`);
    assert.ok(retryReturnsToText(quick, language), `${book.id} Chapter ${story.id}: retry feedback does not return to chapter evidence.`);
  }
}

console.log('B1 legacy safety: PASS');
console.log(`- ${cases.length} unmigrated B1 language variants checked`);
console.log('- Adam B1 is intentionally excluded because it is validated by validateB1Blueprints.ts');
