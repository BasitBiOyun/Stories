import type { PageData } from '../../../types';
import { highlightPhraseOccurs, normalizeHighlightText } from '../../../lib/highlightTextMatch';
import { adamA2HighlightTargets, type AdamA2HighlightLanguage } from './highlights';

const STORY_CHAPTERS = Array.from({ length: 10 }, (_, index) => index + 1);
const ARABIC_DIACRITIC = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/;

const fail = (message: string): never => {
  throw new Error(`[Adam A2 highlight contract] ${message}`);
};

const validateLanguage = (
  pages: PageData[],
  language: AdamA2HighlightLanguage,
): void => {
  for (const chapterId of STORY_CHAPTERS) {
    const page = pages.find((item) => item.type === 'story' && item.id === chapterId);
    if (!page) fail(`Missing ${language.toUpperCase()} story Chapter ${chapterId}.`);

    const targets = adamA2HighlightTargets[chapterId] ?? [];
    const vocabulary = page.vocabulary ?? [];

    if (page.animatedWords?.length) {
      fail(`${language.toUpperCase()} Chapter ${chapterId} still has animatedWords.`);
    }

    if (vocabulary.length !== targets.length) {
      fail(`${language.toUpperCase()} Chapter ${chapterId} has ${vocabulary.length} runtime highlights; expected ${targets.length}.`);
    }

    targets.forEach((target, index) => {
      const expected = target[language];
      const actual = vocabulary[index];
      if (!actual) fail(`Missing ${language.toUpperCase()} Chapter ${chapterId} target ${target.id}.`);

      if (
        normalizeHighlightText(actual.word, language)
        !== normalizeHighlightText(expected.word, language)
      ) {
        fail(`${language.toUpperCase()} Chapter ${chapterId} target ${target.id} diverged from the canonical word.`);
      }

      if (actual.definition !== expected.definition) {
        fail(`${language.toUpperCase()} Chapter ${chapterId} target ${target.id} diverged from the canonical definition.`);
      }

      if (!highlightPhraseOccurs(page.content ?? '', expected.word, language)) {
        fail(`${language.toUpperCase()} Chapter ${chapterId} target ${target.id} does not occur in the chapter prose.`);
      }

      if (!expected.definition.trim()) {
        fail(`${language.toUpperCase()} Chapter ${chapterId} target ${target.id} has an empty definition.`);
      }

      if (language === 'ar' && !ARABIC_DIACRITIC.test(expected.definition)) {
        fail(`Arabic Chapter ${chapterId} target ${target.id} definition is not vocalized.`);
      }
    });
  }
};

/**
 * Build/runtime guard for the Adam A2 pilot standard.
 * The bilingual target list is shared by construction; this guard additionally
 * prevents legacy animatedWords, missing prose matches, empty definitions and
 * accidental quality-layer overrides from silently reintroducing divergence.
 */
export const validateAdamA2HighlightContract = (
  englishPages: PageData[],
  arabicPages: PageData[],
): void => {
  const ids = STORY_CHAPTERS.flatMap((chapterId) => (
    (adamA2HighlightTargets[chapterId] ?? []).map((target) => target.id)
  ));
  if (new Set(ids).size !== ids.length) {
    fail('A target id is repeated across chapters; visible targets must remain chapter-unique in this pilot.');
  }

  validateLanguage(englishPages, 'en');
  validateLanguage(arabicPages, 'ar');
};
