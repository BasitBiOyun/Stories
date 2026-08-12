import type { PageData } from '../types';
import { normalizeHighlightText } from '../lib/highlightTextMatch';
import {
  applyA2HotspotSourceLock,
  type A2SourceLanguage,
  type A2SourceStoryId,
} from './a2HotspotSourceLock';
import { applyHighlightSurfaceForms } from './highlightSourceLock';
import { applyHotspotSourceLock } from './storyHotspotSourceLock';

type ReviewedReplacement = { from: string; to: string };
type ReviewedPageCorrections = {
  vocabulary?: ReviewedReplacement[];
  animatedWords?: ReviewedReplacement[];
  removeAnimatedWords?: string[];
};

type ReviewedA2Corrections = Partial<Record<
  `${A2SourceStoryId}:${A2SourceLanguage}`,
  Record<number, ReviewedPageCorrections>
>>;

/**
 * Small, editorially reviewed surface-form corrections for cases where a useful
 * learning target was selected correctly but its stored lemma/paraphrase cannot
 * be highlighted in the locked chapter text. The concept is retained; only the
 * display key is moved to wording that actually occurs in the chapter.
 */
const REVIEWED_A2_CORRECTIONS: ReviewedA2Corrections = {
  'adam:en': {
    5: { vocabulary: [{ from: 'regret', to: 'very sad' }] },
  },
  'adam:ar': {
    4: { vocabulary: [{ from: 'تحذير', to: 'حَذَّرَ' }] },
    5: { vocabulary: [{ from: 'ندم', to: 'حَزِنَا' }] },
    9: { vocabulary: [{ from: 'يؤذي', to: 'أُؤْذِيَكَ' }] },
  },
  'mecca:en': {
    // "rope" in vocabulary already highlights the surface plural "ropes" in
    // the reader. Keeping a second animated "ropes" entry would consume a ninth
    // A2 highlight without adding a new learning target.
    8: { removeAnimatedWords: ['ropes'] },
  },
  'yunusEmre:ar': {
    8: { vocabulary: [{ from: 'الْحَيَاةُ الْيَوْمِيَّة', to: 'حَياتِنا الْيَوْمِيَّةِ' }] },
  },
};

const applyReviewedCorrections = (
  pages: PageData[],
  storyId: A2SourceStoryId,
  language: A2SourceLanguage,
): PageData[] => {
  const pageCorrections = REVIEWED_A2_CORRECTIONS[`${storyId}:${language}`];
  if (!pageCorrections) return pages;

  const matches = (left: string, right: string) => (
    normalizeHighlightText(left, language) === normalizeHighlightText(right, language)
  );

  return pages.map((page) => {
    if (page.type !== 'story') return page;
    const correction = pageCorrections[page.id];
    if (!correction) return page;

    const vocabulary = page.vocabulary?.map((entry) => {
      const replacement = correction.vocabulary?.find(item => matches(entry.word, item.from));
      return replacement ? { ...entry, word: replacement.to } : entry;
    });

    const animatedWords = page.animatedWords
      ?.filter(word => !(correction.removeAnimatedWords ?? []).some(item => matches(word, item)))
      .map((word) => {
        const replacement = correction.animatedWords?.find(item => matches(word, item.from));
        return replacement?.to ?? word;
      });

    return { ...page, vocabulary, animatedWords };
  });
};

/**
 * Final A2 gate.
 *
 * 1. Keeps the reviewed A2 hotspot selections.
 * 2. Enforces direct same-chapter title/description source locking and the
 *    A2 description length limit.
 * 3. For Arabic only, preserves reviewed highlight choices while storing the
 *    exact inflected/cliticized surface form that occurs in the chapter.
 * 4. For Arabic A2, attaches only reviewed non-generic definitions to animated
 *    surface forms when they would otherwise open without a meaning.
 * 5. Applies only explicitly reviewed surface corrections for useful targets
 *    that cannot otherwise be highlighted from the locked prose.
 *
 * Canonical story prose, exercises, media, ids/order and timing values are not
 * changed here.
 */
export const applyA2FinalStoryLanguageLock = (
  pages: PageData[],
  storyId: A2SourceStoryId,
  language: A2SourceLanguage,
): PageData[] => {
  const reviewed = applyA2HotspotSourceLock(pages, storyId, language);
  const sourceLocked = applyHotspotSourceLock(reviewed, { language, level: 'A2' });
  const surfaced = language === 'ar'
    ? applyHighlightSurfaceForms(sourceLocked, language, { enrichArabicDefinitions: true })
    : sourceLocked;
  return applyReviewedCorrections(surfaced, storyId, language);
};
