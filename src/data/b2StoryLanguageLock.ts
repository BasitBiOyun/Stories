import type { PageData } from '../types';
import { highlightPhraseOccurs } from '../lib/highlightTextMatch';

export type B2StoryLanguage = 'en' | 'ar';

type HotspotTitleOverrides = Record<number, Record<string, string>>;

export interface B2StoryLanguageLockOptions {
  language: B2StoryLanguage;
  blockedHighlights?: readonly string[];
  titleOverrides?: HotspotTitleOverrides;
  maxUniqueHighlights?: number;
}

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

const INTERPRETIVE_MARKERS: Record<B2StoryLanguage, readonly string[]> = {
  en: [
    'symbolizes', 'symbolises', 'represents', 'reflects', 'demonstrates', 'emphasizes', 'emphasises',
    'signifies', 'illustrates', 'embodies', 'suggests', 'stands for', 'serves as',
  ],
  ar: ['يرمز', 'يمثل', 'يعكس', 'يجسد', 'يدل على', 'يوضح', 'يبرز', 'يشير الى', 'رمز', 'دلالة'],
};

const stripArabicDiacritics = (text: string): string => text
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '');

const normalizeText = (text: string, language: B2StoryLanguage): string => {
  let normalized = text.normalize('NFKC').toLowerCase();
  normalized = normalized.replace(/[’']s\b/g, '');

  if (language === 'ar') {
    normalized = normalized.replace(/\u064B\u0627/g, '');
    normalized = stripArabicDiacritics(normalized)
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/ة/g, 'ه');
  }

  return normalized
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const canonicalToken = (rawToken: string, language: B2StoryLanguage): string => {
  let token = normalizeText(rawToken, language);
  if (!token) return token;

  if (language === 'ar') {
    if ((token.startsWith('و') || token.startsWith('ف')) && token.length > 4) token = token.slice(1);
    if (token.startsWith('بال') && token.length > 5) token = token.slice(3);
    else if (token.startsWith('كال') && token.length > 5) token = token.slice(3);
    else if (token.startsWith('لل') && token.length > 4) token = token.slice(2);
    else if (token.startsWith('ال') && token.length > 4) token = token.slice(2);
    return token;
  }

  if (token.length > 4 && token.endsWith('ies')) return `${token.slice(0, -3)}y`;
  if (token.length > 4 && token.endsWith('es') && !token.endsWith('ses')) return token.slice(0, -2);
  if (token.length > 4 && token.endsWith('s') && !token.endsWith('ss')) return token.slice(0, -1);
  return token;
};

const tokenize = (text: string, language: B2StoryLanguage): string[] => {
  const normalized = normalizeText(text, language);
  if (!normalized) return [];
  return normalized.split(' ').map(token => canonicalToken(token, language)).filter(Boolean);
};

const isStopword = (token: string, language: B2StoryLanguage): boolean => (
  language === 'ar' ? AR_STOPWORDS.has(token) : EN_STOPWORDS.has(token)
);

const significantTokens = (text: string, language: B2StoryLanguage): string[] => (
  tokenize(text, language).filter(token => !isStopword(token, language) && !/^\d+$/.test(token))
);

// Highlight grounding must mirror StoryPage rather than use the older exact-token
// matcher. This keeps correct inflected Arabic surfaces (prefixes/suffixes and
// common morphology) from being discarded before the bilingual target lock runs.
const containsTokenSequence = (content: string, phrase: string, language: B2StoryLanguage): boolean => (
  highlightPhraseOccurs(content, phrase, language)
);

const titleIsGrounded = (content: string, title: string, language: B2StoryLanguage): boolean => {
  const contentSet = new Set(significantTokens(content, language));
  return significantTokens(title, language).every(token => contentSet.has(token));
};

const descriptionIsGrounded = (content: string, description: string, language: B2StoryLanguage): boolean => {
  const contentSet = new Set(significantTokens(content, language));
  const tokens = significantTokens(description, language);
  const novel = [...new Set(tokens.filter(token => !contentSet.has(token)))];
  const matched = tokens.filter(token => contentSet.has(token)).length;
  const coverage = tokens.length ? matched / tokens.length : 0;
  const wordCount = tokenize(description, language).length;
  const normalizedContent = normalizeText(content, language);
  const normalizedDescription = normalizeText(description, language);
  const unsupportedMarker = INTERPRETIVE_MARKERS[language].some(marker => {
    const normalizedMarker = normalizeText(marker, language);
    return normalizedDescription.includes(normalizedMarker) && !normalizedContent.includes(normalizedMarker);
  });

  return coverage >= 0.66 && novel.length <= 7 && wordCount <= 42 && !unsupportedMarker;
};

const cleanStoryText = (value: string): string => value
  .replace(/\[\/?POEM\]/gi, ' ')
  .replace(/\*\*/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const sourceSentences = (content: string, language: B2StoryLanguage): string[] => {
  const cleaned = cleanStoryText(content);
  const candidates = cleaned
    .split(/(?<=[.!?؟])\s+/u)
    .map(sentence => sentence.trim())
    .filter(Boolean);

  const withinLimit = candidates.filter(sentence => {
    const count = tokenize(sentence, language).length;
    return count >= 3 && count <= 42;
  });
  return withinLimit.length ? withinLimit : candidates;
};

const bestSourceSentence = (
  content: string,
  title: string,
  description: string,
  language: B2StoryLanguage,
): string => {
  const sentences = sourceSentences(content, language);
  if (!sentences.length) return cleanStoryText(content).split(/\s+/).slice(0, 38).join(' ');

  const titleSignal = new Set(significantTokens(title, language));
  const descriptionSignal = new Set(significantTokens(description, language));

  const scored = sentences.map((sentence, index) => {
    const tokens = significantTokens(sentence, language);
    const titleHits = tokens.filter(token => titleSignal.has(token)).length;
    const descriptionHits = tokens.filter(token => descriptionSignal.has(token)).length;
    return { sentence, index, score: (titleHits * 3) + descriptionHits };
  });

  scored.sort((a, b) => b.score - a.score || a.index - b.index);
  const chosen = scored[0]?.sentence ?? sentences[0];
  if (tokenize(chosen, language).length <= 42) return chosen;
  return chosen.split(/\s+/).slice(0, 42).join(' ');
};

const fallbackTitleFromSentence = (sentence: string, language: B2StoryLanguage): string => {
  const rawWords = sentence.match(/[\p{L}\p{N}’'’-]+/gu) ?? [];
  const useful = rawWords.filter(word => {
    const token = canonicalToken(word, language);
    return token && !isStopword(token, language) && !/^\d+$/.test(token);
  });
  return (useful.length ? useful : rawWords).slice(0, 3).join(' ');
};

const applyHotspotGrounding = (
  page: PageData,
  language: B2StoryLanguage,
  titleOverrides: HotspotTitleOverrides,
): PageData => ({
  ...page,
  hotspots: page.hotspots?.map(hotspot => {
    const sourceDescription = descriptionIsGrounded(page.content, hotspot.description ?? '', language)
      ? hotspot.description
      : bestSourceSentence(page.content, hotspot.title ?? '', hotspot.description ?? '', language);
    const requestedTitle = titleOverrides[page.id]?.[hotspot.id] ?? hotspot.title ?? '';
    const sourceTitle = titleIsGrounded(page.content, requestedTitle, language)
      ? requestedTitle
      : fallbackTitleFromSentence(sourceDescription, language);
    return { ...hotspot, title: sourceTitle, description: sourceDescription };
  }),
});

const applyHighlightGrounding = (
  page: PageData,
  language: B2StoryLanguage,
  blocked: Set<string>,
  maxUniqueHighlights: number,
): PageData => {
  const vocabulary = (page.vocabulary ?? []).filter(entry => (
    containsTokenSequence(page.content, entry.word, language)
    && !blocked.has(normalizeText(entry.word, language))
  ));

  const seen = new Set<string>();
  const cappedVocabulary = vocabulary.filter(entry => {
    const key = normalizeText(entry.word, language);
    if (!key || seen.has(key) || seen.size >= maxUniqueHighlights) return false;
    seen.add(key);
    return true;
  });

  const animatedWords = (page.animatedWords ?? []).filter(word => {
    const key = normalizeText(word, language);
    if (!key || seen.has(key) || seen.size >= maxUniqueHighlights) return false;
    if (blocked.has(key) || !containsTokenSequence(page.content, word, language)) return false;
    seen.add(key);
    return true;
  });

  return { ...page, vocabulary: cappedVocabulary, animatedWords };
};

/**
 * Final B2 Story Language Lock pass.
 * It never changes canonical story prose, media, page ids/order or exercises.
 * It only grounds story-page hotspots and highlighted learning metadata in the same chapter.
 */
export const applyB2StoryLanguageLock = (
  pages: PageData[],
  options: B2StoryLanguageLockOptions,
): PageData[] => {
  const blocked = new Set((options.blockedHighlights ?? []).map(item => normalizeText(item, options.language)));
  const titleOverrides = options.titleOverrides ?? {};
  const maxUniqueHighlights = options.maxUniqueHighlights ?? 10;

  return pages.map(page => {
    if (page.type !== 'story') return page;
    const groundedHotspots = applyHotspotGrounding(page, options.language, titleOverrides);
    return applyHighlightGrounding(groundedHotspots, options.language, blocked, maxUniqueHighlights);
  });
};
