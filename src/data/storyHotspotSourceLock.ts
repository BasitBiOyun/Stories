import type { PageData } from '../types';

export type HotspotSourceLanguage = 'en' | 'ar';
export type HotspotSourceLevel = 'B1' | 'B2';

export interface HotspotSourceText {
  title?: string;
  description: string;
}

export type HotspotPlaceOverrides = Record<number, Record<string, HotspotSourceText>>;

export interface HotspotSourceLockOptions {
  language: HotspotSourceLanguage;
  level: HotspotSourceLevel;
  placeOverrides?: HotspotPlaceOverrides;
}

const MAX_DESCRIPTION_WORDS: Record<HotspotSourceLevel, number> = {
  B1: 34,
  B2: 42,
};

const MAX_TITLE_WORDS = 4;

const EN_STOPWORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'be', 'been', 'being', 'but', 'by', 'for', 'from', 'had', 'has', 'have',
  'he', 'her', 'hers', 'him', 'his', 'i', 'in', 'into', 'is', 'it', 'its', 'of', 'on', 'or', 'our', 'she',
  'so', 'that', 'the', 'their', 'them', 'they', 'this', 'to', 'was', 'we', 'were', 'with', 'you', 'your',
]);

const AR_STOPWORDS = new Set([
  'ان', 'او', 'الي', 'الى', 'ام', 'اي', 'ايضا', 'بان', 'بأن', 'بما', 'بل', 'ثم', 'ذلك', 'علي', 'على', 'عن',
  'عند', 'في', 'قد', 'كان', 'كانت', 'كما', 'كل', 'لا', 'لان', 'لأن', 'لكن', 'ما', 'من', 'هو', 'هي', 'هذا',
  'هذه', 'هناك', 'و', 'يا',
]);

const stripArabicDiacritics = (text: string): string => text
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '');

export const normalizeHotspotSourceText = (
  value: string,
  language: HotspotSourceLanguage,
): string => {
  let text = value.normalize('NFKC').toLowerCase();
  if (language === 'ar') {
    text = text.replace(/\u064B\u0627/g, '');
    text = stripArabicDiacritics(text)
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/ة/g, 'ه');
  }
  return text
    .replace(/[’']/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const words = (value: string, language: HotspotSourceLanguage): string[] => {
  const normalized = normalizeHotspotSourceText(value, language);
  return normalized ? normalized.split(' ') : [];
};

const directExtract = (
  content: string,
  candidate: string,
  language: HotspotSourceLanguage,
): boolean => {
  const source = normalizeHotspotSourceText(content, language);
  const target = normalizeHotspotSourceText(candidate, language);
  return Boolean(target) && source.includes(target);
};

const cleanStoryText = (value: string): string => value
  .replace(/\[\/?POEM\]/gi, ' ')
  .replace(/\*\*/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const sourceSentences = (
  content: string,
  language: HotspotSourceLanguage,
  maxWords: number,
): string[] => {
  const candidates = cleanStoryText(content)
    .split(/(?<=[.!?؟])\s+/u)
    .map(sentence => sentence.trim())
    .filter(Boolean);
  const short = candidates.filter(sentence => {
    const count = words(sentence, language).length;
    return count >= 2 && count <= maxWords;
  });
  return short.length ? short : candidates;
};

const significantWordSet = (
  value: string,
  language: HotspotSourceLanguage,
): Set<string> => {
  const stopwords = language === 'ar' ? AR_STOPWORDS : EN_STOPWORDS;
  return new Set(words(value, language).filter(word => !stopwords.has(word) && !/^\d+$/.test(word)));
};

const bestSourceSentence = (
  content: string,
  title: string,
  description: string,
  language: HotspotSourceLanguage,
  maxWords: number,
): string => {
  const sentences = sourceSentences(content, language, maxWords);
  if (!sentences.length) return cleanStoryText(content).split(/\s+/).slice(0, maxWords).join(' ');

  const titleSignal = significantWordSet(title, language);
  const descriptionSignal = significantWordSet(description, language);
  const scored = sentences.map((sentence, index) => {
    const sentenceWords = significantWordSet(sentence, language);
    const titleHits = [...titleSignal].filter(word => sentenceWords.has(word)).length;
    const descriptionHits = [...descriptionSignal].filter(word => sentenceWords.has(word)).length;
    return { sentence, index, score: titleHits * 4 + descriptionHits };
  });
  scored.sort((a, b) => b.score - a.score || a.index - b.index);
  return scored[0]?.sentence ?? sentences[0];
};

const titleIsUsable = (
  content: string,
  title: string,
  language: HotspotSourceLanguage,
): boolean => words(title, language).length <= MAX_TITLE_WORDS && directExtract(content, title, language);

const fallbackTitle = (
  sentence: string,
  language: HotspotSourceLanguage,
): string => {
  const rawWords = sentence.match(/[\p{L}\p{N}’'’-]+/gu) ?? [];
  const stopwords = language === 'ar' ? AR_STOPWORDS : EN_STOPWORDS;
  const useful = rawWords.filter(word => {
    const normalized = normalizeHotspotSourceText(word, language);
    return normalized && !stopwords.has(normalized) && !/^\d+$/.test(normalized);
  });
  return (useful.length ? useful : rawWords).slice(0, 3).join(' ');
};

/**
 * Strict B1/B2 hotspot gate.
 *
 * Normal hotspot descriptions must be direct extracts from the same chapter.
 * Titles must be short phrases that occur in the same chapter. The only
 * permitted non-extract description is an explicitly registered place-name
 * explanation supplied through placeOverrides; this keeps the exception small,
 * reviewable and level-appropriate instead of reopening general paraphrasing.
 *
 * Canonical prose, vocabulary, animated words, exercises, media and timing data
 * are never changed by this function.
 */
export const applyHotspotSourceLock = (
  pages: PageData[],
  options: HotspotSourceLockOptions,
): PageData[] => {
  const maxWords = MAX_DESCRIPTION_WORDS[options.level];
  const placeOverrides = options.placeOverrides ?? {};

  return pages.map(page => {
    if (page.type !== 'story' || !page.hotspots?.length) return page;

    return {
      ...page,
      hotspots: page.hotspots.map(hotspot => {
        const placeOverride = placeOverrides[page.id]?.[hotspot.id];
        const currentTitle = hotspot.title ?? '';
        const currentDescription = hotspot.description ?? '';

        if (placeOverride) {
          const placeDescription = words(placeOverride.description, options.language).length <= maxWords
            ? placeOverride.description
            : placeOverride.description.split(/\s+/).slice(0, maxWords).join(' ');
          const requestedTitle = placeOverride.title ?? currentTitle;
          const sourceTitle = titleIsUsable(page.content ?? '', requestedTitle, options.language)
            ? requestedTitle
            : fallbackTitle(bestSourceSentence(
                page.content ?? '',
                requestedTitle,
                currentDescription,
                options.language,
                maxWords,
              ), options.language);
          return { ...hotspot, title: sourceTitle, description: placeDescription };
        }

        const sourceDescription = directExtract(page.content ?? '', currentDescription, options.language)
          && words(currentDescription, options.language).length <= maxWords
          ? currentDescription
          : bestSourceSentence(
              page.content ?? '',
              currentTitle,
              currentDescription,
              options.language,
              maxWords,
            );

        const sourceTitle = titleIsUsable(page.content ?? '', currentTitle, options.language)
          ? currentTitle
          : fallbackTitle(sourceDescription, options.language);

        return { ...hotspot, title: sourceTitle, description: sourceDescription };
      }),
    };
  });
};
