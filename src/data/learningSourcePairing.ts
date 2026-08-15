import type { PageData } from '../types';
import { normalizeHighlightText } from '../lib/highlightTextMatch';

export interface PairedLearningSources {
  englishPages: PageData[];
  arabicPages: PageData[];
}

const sourceKey = (value: string, language: 'en' | 'ar') => normalizeHighlightText(value, language).trim();

/**
 * Aligns only derived learning-source metadata; story prose is never changed.
 *
 * Hotspots are eligible only when the same hotspot ID exists in both languages.
 * Word Notes are paired by authored index. The effective source list is then
 * de-duplicated by BOTH English and Arabic visible labels across hotspots and
 * Word Notes. This guarantees that matching exercises select the same source
 * coordinates in both languages instead of independently dropping duplicates.
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
    const rawHotspotPairs = (english.hotspots ?? [])
      .map(englishHotspot => ({ english: englishHotspot, arabic: arabicHotspotsById.get(englishHotspot.id) }))
      .filter((pair): pair is { english: NonNullable<PageData['hotspots']>[number]; arabic: NonNullable<PageData['hotspots']>[number] } => Boolean(pair.arabic));

    const seenEnglishLabels = new Set<string>();
    const seenArabicLabels = new Set<string>();
    const hotspotPairs = rawHotspotPairs.filter(pair => {
      const englishKey = sourceKey(pair.english.title, 'en');
      const arabicKey = sourceKey(pair.arabic.title, 'ar');
      if (!englishKey || !arabicKey || seenEnglishLabels.has(englishKey) || seenArabicLabels.has(arabicKey)) return false;
      seenEnglishLabels.add(englishKey);
      seenArabicLabels.add(arabicKey);
      return true;
    });

    const vocabularyPairs = englishVocabulary
      .map((englishEntry, index) => ({ english: englishEntry, arabic: arabicVocabulary[index] }))
      .filter(pair => Boolean(pair.arabic))
      .filter(pair => {
        const englishKey = sourceKey(pair.english.word, 'en');
        const arabicKey = sourceKey(pair.arabic.word, 'ar');
        if (!englishKey || !arabicKey || seenEnglishLabels.has(englishKey) || seenArabicLabels.has(arabicKey)) return false;
        seenEnglishLabels.add(englishKey);
        seenArabicLabels.add(arabicKey);
        return true;
      });

    if (!hotspotPairs.length && !vocabularyPairs.length) {
      throw new Error(`[Learning Source Pairing] Chapter ${id} has no distinct paired hotspot or Word Notes source.`);
    }

    alignedEnglish.set(id, {
      ...english,
      hotspots: hotspotPairs.map(pair => pair.english),
      vocabulary: vocabularyPairs.map(pair => pair.english),
    });
    alignedArabic.set(id, {
      ...arabic,
      hotspots: hotspotPairs.map(pair => pair.arabic),
      vocabulary: vocabularyPairs.map(pair => pair.arabic),
    });
  }

  return {
    englishPages: englishPages.map(page => storyIdSet.has(page.id) ? alignedEnglish.get(page.id)! : page),
    arabicPages: arabicPages.map(page => storyIdSet.has(page.id) ? alignedArabic.get(page.id)! : page),
  };
};
