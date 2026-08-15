import type { PageData } from '../types';

export interface PairedLearningSources {
  englishPages: PageData[];
  arabicPages: PageData[];
}

/**
 * Aligns only derived learning-source metadata; story prose is never changed.
 *
 * Hotspots are eligible for assessment generation only when the same hotspot ID
 * exists in both languages for the same chapter. One-language-only hotspots are
 * removed from the effective learning view rather than silently paired by index.
 * Word Notes remain strict: their bilingual order/count is an authored learning
 * contract because they do not have stable IDs.
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
    const pairedEnglishHotspots = (english.hotspots ?? []).filter(hotspot => arabicHotspotsById.has(hotspot.id));
    const pairedArabicHotspots = pairedEnglishHotspots.map(hotspot => arabicHotspotsById.get(hotspot.id)!);

    alignedEnglish.set(id, { ...english, hotspots: pairedEnglishHotspots });
    alignedArabic.set(id, { ...arabic, hotspots: pairedArabicHotspots });
  }

  return {
    englishPages: englishPages.map(page => storyIdSet.has(page.id) ? alignedEnglish.get(page.id)! : page),
    arabicPages: arabicPages.map(page => storyIdSet.has(page.id) ? alignedArabic.get(page.id)! : page),
  };
};
