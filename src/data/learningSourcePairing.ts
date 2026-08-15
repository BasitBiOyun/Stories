import type { PageData } from '../types';
import { normalizeHighlightText } from '../lib/highlightTextMatch';

export interface PairedLearningSources {
  englishPages: PageData[];
  arabicPages: PageData[];
}

const key = (value: string, language: 'en' | 'ar') => normalizeHighlightText(value, language).trim();

/**
 * Aligns only bilingual hotspot availability; story prose and visible Word Notes
 * are never edited. Hotspots can feed assessments only when the same hotspot ID
 * exists in both languages. If a hotspot repeats a visible Word Note label (or
 * another hotspot label) in either language, that hotspot is excluded from the
 * assessment-source view in BOTH languages. Word Notes remain untouched so the
 * glossary/highlight contract stays intact.
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

    const englishVocabularyKeys = new Set(englishVocabulary.map(entry => key(entry.word, 'en')).filter(Boolean));
    const arabicVocabularyKeys = new Set(arabicVocabulary.map(entry => key(entry.word, 'ar')).filter(Boolean));
    const arabicHotspotsById = new Map((arabic.hotspots ?? []).map(hotspot => [hotspot.id, hotspot]));
    const seenEnglishHotspots = new Set<string>();
    const seenArabicHotspots = new Set<string>();

    const hotspotPairs = (english.hotspots ?? [])
      .map(englishHotspot => ({ english: englishHotspot, arabic: arabicHotspotsById.get(englishHotspot.id) }))
      .filter((pair): pair is {
        english: NonNullable<PageData['hotspots']>[number];
        arabic: NonNullable<PageData['hotspots']>[number];
      } => Boolean(pair.arabic))
      .filter(pair => {
        const englishKey = key(pair.english.title, 'en');
        const arabicKey = key(pair.arabic.title, 'ar');
        if (!englishKey || !arabicKey) return false;
        if (englishVocabularyKeys.has(englishKey) || arabicVocabularyKeys.has(arabicKey)) return false;
        if (seenEnglishHotspots.has(englishKey) || seenArabicHotspots.has(arabicKey)) return false;
        seenEnglishHotspots.add(englishKey);
        seenArabicHotspots.add(arabicKey);
        return true;
      });

    if (!hotspotPairs.length && !englishVocabulary.length) {
      throw new Error(`[Learning Source Pairing] Chapter ${id} has no paired hotspot or Word Notes source.`);
    }

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
