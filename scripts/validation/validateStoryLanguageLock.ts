import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { bookRegistry } from '../../src/core/content/bookRegistry';
import type { BookData, PageData } from '../../src/types';
import {
  legacyStoryLanguageBookKeys,
  legacyStoryLanguageSnapshots,
  lockedStoryLanguageBooks,
  type StoryLanguage,
} from './storyLanguageLockPolicy';

type Level = 'A2' | 'B1' | 'B2';

interface ValidationResult {
  errors: string[];
  warnings: string[];
}

const result: ValidationResult = { errors: [], warnings: [] };
const error = (message: string) => result.errors.push(message);
const warn = (message: string) => result.warnings.push(message);

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

const INTERPRETIVE_MARKERS: Record<StoryLanguage, readonly string[]> = {
  en: [
    'symbolizes', 'symbolises', 'represents', 'reflects', 'demonstrates', 'emphasizes', 'emphasises',
    'signifies', 'illustrates', 'embodies', 'suggests', 'stands for', 'serves as',
  ],
  ar: [
    'يرمز', 'يمثل', 'يعكس', 'يجسد', 'يدل على', 'يوضح', 'يبرز', 'يشير الى', 'رمز', 'دلالة',
  ],
};

const MAX_HOTSPOT_DESCRIPTION_WORDS: Record<Level, number> = {
  A2: 26,
  B1: 34,
  B2: 42,
};

const MAX_HOTSPOT_TITLE_WORDS = 4;

const MAX_UNIQUE_HIGHLIGHTS: Record<Level, number> = {
  A2: 8,
  B1: 10,
  B2: 12,
};

/**
 * Reviewed non-source hotspot descriptions are permitted only for short factual
 * place-name clarifications. Add a key here only after editorial review.
 * Format: storyId:level:language:pageId:hotspotId
 */
const REVIEWED_PLACE_HOTSPOT_EXCEPTIONS = new Set<string>();

const stripArabicDiacritics = (text: string): string => text
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '');

const normalizeText = (text: string, language: StoryLanguage): string => {
  let normalized = text.normalize('NFKC').toLowerCase();
  normalized = normalized.replace(/[’']s\b/g, '');

  if (language === 'ar') {
    // Arabic accusative indefinite case adds fathatan + alif to the same lexical word
    // (for example رسولًا vs رسول). Remove only that case ending before diacritic stripping.
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

const canonicalToken = (rawToken: string, language: StoryLanguage): string => {
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

const tokenize = (text: string, language: StoryLanguage): string[] => {
  const normalized = normalizeText(text, language);
  if (!normalized) return [];
  return normalized.split(' ').map(token => canonicalToken(token, language)).filter(Boolean);
};

const isStopword = (token: string, language: StoryLanguage): boolean => (
  language === 'ar' ? AR_STOPWORDS.has(token) : EN_STOPWORDS.has(token)
);

const significantTokens = (text: string, language: StoryLanguage): string[] => (
  tokenize(text, language).filter(token => !isStopword(token, language) && !/^\d+$/.test(token))
);

const containsTokenSequence = (content: string, phrase: string, language: StoryLanguage): boolean => {
  const contentTokens = significantTokens(content, language);
  const phraseTokens = significantTokens(phrase, language);

  if (!phraseTokens.length) return false;
  if (phraseTokens.length === 1) return contentTokens.includes(phraseTokens[0]);

  for (let start = 0; start <= contentTokens.length - phraseTokens.length; start += 1) {
    let matches = true;
    for (let offset = 0; offset < phraseTokens.length; offset += 1) {
      if (contentTokens[start + offset] !== phraseTokens[offset]) {
        matches = false;
        break;
      }
    }
    if (matches) return true;
  }

  return false;
};

const isDirectChapterExtract = (
  content: string,
  candidate: string,
  language: StoryLanguage,
): boolean => {
  const normalizedContent = normalizeText(content, language);
  const normalizedCandidate = normalizeText(candidate, language);
  return Boolean(normalizedCandidate) && normalizedContent.includes(normalizedCandidate);
};

const markerAppearsOnlyInHotspot = (content: string, hotspotText: string, language: StoryLanguage): string[] => {
  const normalizedContent = normalizeText(content, language);
  const normalizedHotspot = normalizeText(hotspotText, language);
  return INTERPRETIVE_MARKERS[language].filter(marker => {
    const normalizedMarker = normalizeText(marker, language);
    return normalizedHotspot.includes(normalizedMarker) && !normalizedContent.includes(normalizedMarker);
  });
};

const collectPageViolations = (
  bookKey: string,
  language: StoryLanguage,
  level: Level,
  page: PageData,
): string[] => {
  if (page.type !== 'story') return [];

  const violations: string[] = [];
  const label = `${bookKey}:${language} page ${page.id}`;
  const content = page.content ?? '';

  for (const hotspot of page.hotspots ?? []) {
    const hotspotLabel = `${label} hotspot ${hotspot.id}`;
    const title = hotspot.title ?? '';
    const description = hotspot.description ?? '';

    if (!title.trim()) violations.push(`${hotspotLabel}: title is empty.`);
    if (!description.trim()) violations.push(`${hotspotLabel}: description is empty.`);

    const titleWordCount = normalizeText(title, language).split(' ').filter(Boolean).length;
    if (titleWordCount > MAX_HOTSPOT_TITLE_WORDS) {
      violations.push(`${hotspotLabel}: title has ${titleWordCount} words; maximum is ${MAX_HOTSPOT_TITLE_WORDS}.`);
    }
    if (title.trim() && !isDirectChapterExtract(content, title, language)) {
      violations.push(`${hotspotLabel}: title is not a direct phrase from this chapter.`);
    }

    const placeExceptionKey = `${bookKey}:${language}:${page.id}:${hotspot.id}`;
    const isReviewedPlaceException = REVIEWED_PLACE_HOTSPOT_EXCEPTIONS.has(placeExceptionKey);
    if (description.trim() && !isReviewedPlaceException && !isDirectChapterExtract(content, description, language)) {
      violations.push(`${hotspotLabel}: description is not a direct extract from this chapter.`);
    }

    const descriptionWordCount = normalizeText(description, language).split(' ').filter(Boolean).length;
    if (descriptionWordCount > MAX_HOTSPOT_DESCRIPTION_WORDS[level]) {
      violations.push(
        `${hotspotLabel}: description has ${descriptionWordCount} words; `
        + `${level} maximum is ${MAX_HOTSPOT_DESCRIPTION_WORDS[level]}.`,
      );
    }

    const unsupportedMarkers = markerAppearsOnlyInHotspot(
      content,
      `${title} ${description}`,
      language,
    );
    if (unsupportedMarkers.length) {
      violations.push(
        `${hotspotLabel}: adds interpretive language not present in the chapter: ${unsupportedMarkers.join(', ')}.`,
      );
    }
  }

  const highlightedItems = [
    ...(page.vocabulary ?? []).map(item => ({ kind: 'vocabulary', text: item.word })),
    ...(page.animatedWords ?? []).map(text => ({ kind: 'animatedWord', text })),
  ];

  for (const item of highlightedItems) {
    if (!item.text?.trim()) {
      violations.push(`${label}: ${item.kind} contains an empty item.`);
      continue;
    }
    if (!containsTokenSequence(content, item.text, language)) {
      violations.push(`${label}: ${item.kind} "${item.text}" does not occur in this chapter.`);
    }
  }

  const uniqueHighlights = new Set(
    highlightedItems
      .map(item => normalizeText(item.text, language))
      .filter(Boolean),
  );
  if (uniqueHighlights.size > MAX_UNIQUE_HIGHLIGHTS[level]) {
    violations.push(
      `${label}: ${uniqueHighlights.size} unique highlighted items exceed the ${level} limit of ${MAX_UNIQUE_HIGHLIGHTS[level]}.`,
    );
  }

  return violations;
};

const collectBookViolations = (
  bookKey: string,
  language: StoryLanguage,
  book: BookData,
): string[] => book.pages.flatMap(page => collectPageViolations(bookKey, language, book.level as Level, page));

const gitBlobSha = (path: string): string => {
  const bytes = readFileSync(path);
  return createHash('sha1')
    .update(Buffer.from(`blob ${bytes.length}\0`, 'utf8'))
    .update(bytes)
    .digest('hex');
};

const validateLegacyFreeze = () => {
  const snapshotsPerBook = new Map<string, Set<StoryLanguage>>();

  for (const snapshot of legacyStoryLanguageSnapshots) {
    const languages = snapshotsPerBook.get(snapshot.bookKey) ?? new Set<StoryLanguage>();
    languages.add(snapshot.language);
    snapshotsPerBook.set(snapshot.bookKey, languages);

    if (lockedStoryLanguageBooks.has(snapshot.bookKey)) continue;

    let actualSha = '';
    try {
      actualSha = gitBlobSha(snapshot.path);
    } catch {
      error(`${snapshot.bookKey}:${snapshot.language}: frozen legacy source is missing: ${snapshot.path}.`);
      continue;
    }

    if (actualSha !== snapshot.blobSha) {
      error(
        `${snapshot.bookKey}:${snapshot.language}: legacy Story Language source changed while still frozen. `
        + `Restore ${snapshot.path}, or clean BOTH languages and promote ${snapshot.bookKey} to lockedStoryLanguageBooks in the same change.`,
      );
    }
  }

  for (const [bookKey, languages] of snapshotsPerBook) {
    if (!languages.has('en') || !languages.has('ar')) {
      error(`${bookKey}: legacy freeze must contain both English and Arabic source snapshots.`);
    }
  }
};

const main = async () => {
  validateLegacyFreeze();

  const registryKeys = new Set(bookRegistry.map(definition => `${definition.storyId}:${definition.level}`));

  for (const lockedKey of lockedStoryLanguageBooks) {
    if (!registryKeys.has(lockedKey)) error(`${lockedKey}: locked Story Language book is not registered.`);
  }

  let lockedCount = 0;
  let frozenLegacyCount = 0;
  let legacyViolationCount = 0;

  for (const definition of bookRegistry) {
    const bookKey = `${definition.storyId}:${definition.level}`;
    const isLocked = lockedStoryLanguageBooks.has(bookKey);
    const isKnownLegacy = legacyStoryLanguageBookKeys.has(bookKey);

    if (!isLocked && !isKnownLegacy) {
      error(
        `${bookKey}: new/unclassified book is forbidden by Story Language Lock. `
        + `New books must be added directly to lockedStoryLanguageBooks and pass strict validation.`,
      );
      continue;
    }

    const pair = await definition.load();
    const variants: Array<[StoryLanguage, BookData]> = [
      ['en', pair.en],
      ['ar', pair.ar],
    ];

    if (isLocked) {
      lockedCount += 1;
      for (const [language, book] of variants) {
        for (const violation of collectBookViolations(bookKey, language, book)) error(violation);
      }
      continue;
    }

    frozenLegacyCount += 1;
    for (const [language, book] of variants) {
      const violations = collectBookViolations(bookKey, language, book);
      legacyViolationCount += violations.length;
      if (violations.length) {
        warn(`${bookKey}:${language}: ${violations.length} existing Story Language Lock violation(s) frozen for staged cleanup.`);
        if (process.env.STORY_LANGUAGE_LOCK_VERBOSE === '1') {
          for (const violation of violations) warn(`  ${violation}`);
        }
      }
    }
  }

  for (const warning of result.warnings) console.warn(`WARN: ${warning}`);
  for (const validationError of result.errors) console.error(`ERROR: ${validationError}`);

  console.log(
    `Story Language Lock: ${lockedCount} locked book(s), ${frozenLegacyCount} frozen legacy book(s), `
    + `${legacyViolationCount} legacy violation(s) queued for migration.`,
  );
  console.log(`${result.errors.length} blocking error(s).`);

  if (result.errors.length) process.exitCode = 1;
};

await main();
