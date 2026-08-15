import assert from 'node:assert/strict';
import type { BookData, Exercise, PageData } from '../../src/types';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../src/lib/highlightTextMatch';
import { normalizeHotspotSourceText } from '../../src/data/storyHotspotSourceLock';
import { adamB1BookDataEn, adamB1BookDataAr } from '../../src/data/adam/b1';
import { abrahamB1BookDataEn, abrahamB1BookDataAr } from '../../src/data/abraham/b1';
import { mosesB1BookDataEn, mosesB1BookDataAr } from '../../src/data/moses/b1';
import { meccaB1BookDataEn, meccaB1BookDataAr } from '../../src/data/mecca/b1';
import { yunusEmreB1BookDataEn, yunusEmreB1BookDataAr } from '../../src/data/yunusEmre/b1';

const cases = [
  [adamB1BookDataEn, 'en'], [adamB1BookDataAr, 'ar'],
  [abrahamB1BookDataEn, 'en'], [abrahamB1BookDataAr, 'ar'],
  [mosesB1BookDataEn, 'en'], [mosesB1BookDataAr, 'ar'],
  [meccaB1BookDataEn, 'en'], [meccaB1BookDataAr, 'ar'],
  [yunusEmreB1BookDataEn, 'en'], [yunusEmreB1BookDataAr, 'ar'],
] as const satisfies ReadonlyArray<readonly [BookData, 'en' | 'ar']>;

const normalized = (value: string, language: 'en' | 'ar') => normalizeHighlightText(value, language).trim();
const retryReturnsToText = (exercise: Exercise, language: 'en' | 'ar') => {
  const retry = normalized(exercise.feedback?.incorrect || '', language);
  if (language === 'ar') return /ارجع|راجع|الفصل|النص/.test(retry);
  return /return|chapter|text|reread|check/.test(retry);
};

const visibleFacts = (page: PageData, language: 'en' | 'ar') => {
  const facts = [
    ...(page.hotspots ?? []).flatMap(item => [item.title, item.description]),
    ...(page.vocabulary ?? []).flatMap(item => [item.word, item.definition]),
  ];
  return new Set(facts.map(value => normalized(value, language)).filter(Boolean));
};

const assertSourceGroundedHotspots = (book: BookData, language: 'en' | 'ar') => {
  for (const story of book.pages.filter(candidate => candidate.type === 'story')) {
    const chapter = normalizeHotspotSourceText(story.content, language);
    for (const current of story.hotspots ?? []) {
      assert.ok(current.title.trim(), `${book.id} ${current.id}: hotspot title is empty.`);
      assert.ok(current.description.trim(), `${book.id} ${current.id}: hotspot description is empty.`);
      assert.ok(chapter.includes(normalizeHotspotSourceText(current.title, language)), `${book.id} ${current.id}: effective hotspot title is not from its own chapter.`);
      assert.ok(chapter.includes(normalizeHotspotSourceText(current.description, language)), `${book.id} ${current.id}: effective hotspot description is not from its own chapter.`);
      assert.ok(!/^the chapter (?:presents|connects|teaches|shows)\b/i.test(current.description), `${book.id} ${current.id}: invented hotspot meta-framing returned.`);
    }
  }
};

const assertUnifiedQuickIsSourceGrounded = (book: BookData, language: 'en' | 'ar') => {
  for (const story of book.pages.filter(candidate => candidate.type === 'story')) {
    const exercise = story.exercises?.[0];
    assert.ok(exercise, `${book.id} chapter ${story.id}: Quick Challenge missing.`);
    assert.ok(exercise.id.startsWith('learning-b1-quick-'), `${book.id} chapter ${story.id}: Quick Challenge is not owned by unified B1 system.`);
    assert.ok(exercise.question?.trim(), `${book.id} chapter ${story.id}: question missing.`);
    assert.ok(exercise.explanation?.trim(), `${book.id} chapter ${story.id}: explanation missing.`);
    assert.ok(retryReturnsToText(exercise, language), `${book.id} chapter ${story.id}: retry feedback does not send the learner back to chapter evidence.`);

    const facts = visibleFacts(story, language);
    if (exercise.type === 'multiple-choice') {
      assert.ok(exercise.question.includes(language === 'ar' ? `الفصل ${story.id}` : `Chapter ${story.id}`), `${book.id} chapter ${story.id}: multiple-choice question does not identify its source chapter.`);
      assert.ok(facts.has(normalized(exercise.explanation, language)), `${book.id} chapter ${story.id}: multiple-choice explanation is not a visible chapter learning fact.`);
    } else if (exercise.type === 'true-false') {
      assert.ok(exercise.question.includes(language === 'ar' ? `الفصل ${story.id}` : `Chapter ${story.id}`), `${book.id} chapter ${story.id}: true-false question does not identify its source chapter.`);
      assert.ok(facts.has(normalized(exercise.explanation, language)), `${book.id} chapter ${story.id}: true-false explanation is not a visible chapter learning fact.`);
    } else if (exercise.type === 'matching') {
      const pairs = exercise.matchingPairs ?? [];
      assert.ok(pairs.length >= 3, `${book.id} chapter ${story.id}: matching needs at least three chapter pairs.`);
      pairs.forEach(pair => {
        assert.ok(facts.has(normalized(pair.left, language)), `${book.id} chapter ${story.id}: matching label is not a chapter learning source.`);
        assert.ok(facts.has(normalized(pair.right, language)), `${book.id} chapter ${story.id}: matching answer is not a chapter learning source.`);
      });
    } else if (exercise.type === 'fill-blanks') {
      assert.ok(exercise.fillBlanksText?.includes('[blank]'), `${book.id} chapter ${story.id}: fill-blank sentence missing.`);
      assert.ok(typeof exercise.correctAnswer === 'string', `${book.id} chapter ${story.id}: fill-blank answer missing.`);
      assert.ok(highlightPhraseOccurs(story.content, String(exercise.correctAnswer), language), `${book.id} chapter ${story.id}: fill-blank answer does not occur in chapter prose.`);
    } else if (exercise.type === 'tap-reveal') {
      const items = exercise.tapRevealItems ?? [];
      assert.ok(items.length >= 1, `${book.id} chapter ${story.id}: tap-reveal item missing.`);
      items.forEach(item => {
        assert.ok(facts.has(normalized(item.question, language)), `${book.id} chapter ${story.id}: tap-reveal prompt is not a chapter learning source.`);
        assert.ok(facts.has(normalized(item.answer, language)), `${book.id} chapter ${story.id}: tap-reveal answer is not a chapter learning source.`);
      });
    } else {
      assert.fail(`${book.id} chapter ${story.id}: unsupported Quick Challenge type ${exercise.type}.`);
    }
  }
};

for (const [book, language] of cases) {
  assertSourceGroundedHotspots(book, language);
  assertUnifiedQuickIsSourceGrounded(book, language);
}

console.log('B1 source-grounded safety: PASS');
console.log('- all 10 B1 language variants use the unified source-grounded Quick Challenge contract');
console.log('- effective hotspots are direct same-chapter phrases/extracts');
console.log('- each exercise type is validated by its evidence semantics rather than a story-specific wording prefix');
console.log('- retry feedback returns learners to chapter evidence');
