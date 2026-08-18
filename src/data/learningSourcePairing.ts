import type { PageData } from '../types';

export interface PairedLearningSources {
  englishPages: PageData[];
  arabicPages: PageData[];
}

/**
 * Keeps the visible story sources intact while confirming bilingual hotspot IDs.
 *
 * A hotspot must never disappear from the learner-facing story merely because its
 * title overlaps with a Word Note or another learning source. The blueprint is
 * manually authored, so source de-duplication belongs in authoring decisions, not
 * in the visible PageData transformation.
 */
export const preparePairedLearningSources = ({
  englishPages,
  arabicPages,
  storyIds,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  storyIds: number[];
}): PairedLearningSources => {
  const storyIdSet = new Set(storyIds);
  const englishById = new Map(englishPages.map(page => [page.id, page]));
  const arabicById = new Map(arabicPages.map(page => [page.id, page]));
  const alignedEnglish = new Map<number, PageData>();
  const alignedArabic = new Map<number, PageData>();

  for (const id of storyIds) {
    const english = englishById.get(id);
    const arabic = arabicById.get(id);
    if (!english || english.type !== 'story' || !arabic || arabic.type !== 'story') {
      throw new Error(`[Learning Source Pairing] Story chapter ${id} is missing in one language.`);
    }

    const englishVocabulary = english.vocabulary ?? [];
    const arabicVocabulary = arabic.vocabulary ?? [];
    if (englishVocabulary.length !== arabicVocabulary.length) {
      throw new Error(`[Learning Source Pairing] Chapter ${id} Word Notes counts differ: EN=${englishVocabulary.length}, AR=${arabicVocabulary.length}.`);
    }

    const arabicHotspotsById = new Map((arabic.hotspots ?? []).map(hotspot => [hotspot.id, hotspot]));
    const hotspotPairs = (english.hotspots ?? [])
      .map(englishHotspot => ({ english: englishHotspot, arabic: arabicHotspotsById.get(englishHotspot.id) }))
      .filter((pair): pair is {
        english: NonNullable<PageData['hotspots']>[number];
        arabic: NonNullable<PageData['hotspots']>[number];
      } => Boolean(pair.arabic));

    alignedEnglish.set(id, {
      ...english,
      hotspots: hotspotPairs.map(pair => pair.english),
      vocabulary: englishVocabulary,
    });
    alignedArabic.set(id, {
      ...arabic,
      hotspots: hotspotPairs.map(pair => pair.arabic),
      vocabulary: arabicVocabulary,
    });
  }

  return {
    englishPages: englishPages.map(page => storyIdSet.has(page.id) ? alignedEnglish.get(page.id)! : page),
    arabicPages: arabicPages.map(page => storyIdSet.has(page.id) ? alignedArabic.get(page.id)! : page),
  };
};
