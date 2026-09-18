import type {
  BookData,
  Level,
  PageData,
  VocabularyChallengePair,
  VocabularyItem,
} from '../../types';
import type { BookPair } from './contracts';
import { getLearningLevelPolicy } from '../../data/learningLevelPolicy';

type Language = 'en' | 'ar';

type VocabularyMeta = {
  word: string;
  definition: string;
  context?: string;
  chapter?: number;
  chapterTitle?: string;
  partOfSpeech?: string;
};

type BilingualCandidate = {
  en: VocabularyMeta;
  ar: VocabularyMeta;
};

const ARABIC_DIACRITICS_RE = /[\u064B-\u065F\u0670\u06D6-\u06ED]/g;
const HTML_RE = /<[^>]+>/g;
const SPACE_RE = /\s+/g;

const normalizeWord = (value: string, language: Language): string => {
  let normalized = value
    .replace(HTML_RE, ' ')
    .toLocaleLowerCase(language === 'ar' ? 'ar' : 'en-US')
    .trim()
    .replace(/[.,!?;:'"“”‘’()[\]{}<>]/g, '')
    .replace(SPACE_RE, ' ');

  if (language === 'ar') {
    normalized = normalized
      .replace(ARABIC_DIACRITICS_RE, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي');
  }

  return normalized;
};

const cleanStoryText = (value: string): string =>
  value
    .replace(HTML_RE, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const sentenceForWord = (
  content: string,
  word: string,
  language: Language,
): string | undefined => {
  const cleaned = cleanStoryText(content);
  if (!cleaned || !word.trim()) return undefined;

  const normalizedWord = normalizeWord(word, language);
  const sentences = cleaned
    .split(/(?<=[.!?؟])\s+|\n+/)
    .map(sentence => sentence.trim())
    .filter(Boolean);

  const direct = sentences.find(sentence =>
    normalizeWord(sentence, language).includes(normalizedWord),
  );

  if (direct) return direct.length <= 260 ? direct : `${direct.slice(0, 257).trim()}…`;

  const normalizedContent = normalizeWord(cleaned, language);
  if (!normalizedContent.includes(normalizedWord)) return undefined;

  const rawIndex = cleaned.toLocaleLowerCase(language === 'ar' ? 'ar' : 'en-US')
    .indexOf(word.toLocaleLowerCase(language === 'ar' ? 'ar' : 'en-US'));
  if (rawIndex < 0) return undefined;

  const start = Math.max(0, rawIndex - 95);
  const end = Math.min(cleaned.length, rawIndex + word.length + 120);
  const excerpt = cleaned.slice(start, end).trim();
  return `${start > 0 ? '…' : ''}${excerpt}${end < cleaned.length ? '…' : ''}`;
};

const metaScore = (item: VocabularyMeta): number =>
  (item.context ? 4 : 0) +
  (typeof item.chapter === 'number' ? 2 : 0) +
  (item.partOfSpeech ? 1 : 0) +
  (item.chapterTitle ? 1 : 0);

const mergeMeta = (current: VocabularyMeta | undefined, next: VocabularyMeta): VocabularyMeta => {
  if (!current) return next;
  return metaScore(next) > metaScore(current)
    ? { ...current, ...next }
    : { ...next, ...current };
};

const vocabularyMetaFromItem = (
  item: VocabularyItem,
  page: PageData,
  language: Language,
): VocabularyMeta => ({
  word: item.word.trim(),
  definition: item.definition.trim(),
  context: item.storyExample
    ?? item.example
    ?? sentenceForWord(page.content ?? '', item.word, language),
  chapter: item.chapter ?? (page.type === 'story' ? page.id : undefined),
  chapterTitle: item.chapterTitle ?? (page.type === 'story' ? page.title : undefined),
  partOfSpeech: item.partOfSpeech,
});

const buildMetadataMap = (book: BookData, language: Language): Map<string, VocabularyMeta> => {
  const map = new Map<string, VocabularyMeta>();

  book.pages.forEach(page => {
    page.vocabulary?.forEach(item => {
      if (!item.word?.trim() || !item.definition?.trim()) return;
      const meta = vocabularyMetaFromItem(item, page, language);
      const key = normalizeWord(meta.word, language);
      map.set(key, mergeMeta(map.get(key), meta));
    });
  });

  return map;
};

const findStoryMeta = (
  book: BookData,
  pair: VocabularyChallengePair,
  language: Language,
  metadata: Map<string, VocabularyMeta>,
): VocabularyMeta | undefined => {
  const direct = metadata.get(normalizeWord(pair.word, language));
  if (direct) return direct;

  for (const page of book.pages) {
    if (page.type !== 'story' || !page.content) continue;
    const context = sentenceForWord(page.content, pair.word, language);
    if (!context) continue;

    return {
      word: pair.word,
      definition: pair.meaning,
      context,
      chapter: page.id,
      chapterTitle: page.title,
    };
  }

  return undefined;
};

const enrichPair = (
  book: BookData,
  pair: VocabularyChallengePair,
  language: Language,
  metadata: Map<string, VocabularyMeta>,
): VocabularyChallengePair => {
  const meta = findStoryMeta(book, pair, language, metadata);

  return {
    ...pair,
    context: pair.context ?? meta?.context,
    chapter: pair.chapter ?? meta?.chapter,
    chapterTitle: pair.chapterTitle ?? meta?.chapterTitle,
    partOfSpeech: pair.partOfSpeech ?? meta?.partOfSpeech,
  };
};

const storyVocabularyMeta = (
  page: PageData,
  item: VocabularyItem,
  language: Language,
): VocabularyMeta => ({
  word: item.word.trim(),
  definition: item.definition.trim(),
  context: item.storyExample
    ?? item.example
    ?? sentenceForWord(page.content ?? '', item.word, language),
  chapter: item.chapter ?? page.id,
  chapterTitle: item.chapterTitle ?? page.title,
  partOfSpeech: item.partOfSpeech,
});

const buildBilingualCandidates = (pair: BookPair): BilingualCandidate[] => {
  const arById = new Map(pair.ar.pages.map(page => [page.id, page]));
  const candidates: BilingualCandidate[] = [];

  pair.en.pages.forEach(enPage => {
    if (enPage.type !== 'story' || !enPage.vocabulary?.length) return;
    const arPage = arById.get(enPage.id);
    if (!arPage || arPage.type !== 'story' || !arPage.vocabulary?.length) return;

    const count = Math.min(enPage.vocabulary.length, arPage.vocabulary.length);
    for (let index = 0; index < count; index += 1) {
      const enItem = enPage.vocabulary[index];
      const arItem = arPage.vocabulary[index];
      if (!enItem?.word?.trim() || !enItem?.definition?.trim()) continue;
      if (!arItem?.word?.trim() || !arItem?.definition?.trim()) continue;

      candidates.push({
        en: storyVocabularyMeta(enPage, enItem, 'en'),
        ar: storyVocabularyMeta(arPage, arItem, 'ar'),
      });
    }
  });

  return candidates;
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (count <= 0) return [];
  if (items.length <= count) return items.slice();

  const picked: T[] = [];
  const used = new Set<number>();

  for (let index = 0; index < count; index += 1) {
    const sourceIndex = count === 1
      ? 0
      : Math.round(index * (items.length - 1) / (count - 1));
    if (used.has(sourceIndex)) continue;
    used.add(sourceIndex);
    picked.push(items[sourceIndex]);
  }

  for (let index = 0; picked.length < count && index < items.length; index += 1) {
    if (used.has(index)) continue;
    used.add(index);
    picked.push(items[index]);
  }

  return picked.slice(0, count);
};

const challengePage = (book: BookData): PageData | undefined =>
  book.pages.find(page => page.type === 'vocabulary-match');

const glossaryVocabulary = (book: BookData): VocabularyItem[] => {
  const seen = new Set<string>();
  const result: VocabularyItem[] = [];

  book.pages.forEach(page => {
    if (page.type !== 'story' && page.type !== 'glossary') return;
    page.vocabulary?.forEach(item => {
      const key = normalizeWord(item.word, 'en');
      if (!key || seen.has(key) || !item.definition?.trim()) return;
      seen.add(key);
      result.push({ ...item });
    });
  });

  return result;
};

const makeGlossaryPage = (book: BookData, language: Language): PageData | null => {
  const vocabulary = glossaryVocabulary(book);
  if (!vocabulary.length) return null;

  const usedIds = new Set(book.pages.map(page => page.id));
  let id = Math.max(0, ...usedIds) + 1;
  while (usedIds.has(id)) id += 1;

  return {
    id,
    type: 'glossary',
    title: language === 'ar' ? 'المعجم الرئيسي' : 'Master Glossary',
    content: language === 'ar'
      ? 'راجع مفردات القصة الأساسية في مكان واحد قبل تحدي المفردات.'
      : 'Review the key story vocabulary in one place before the Vocabulary Challenge.',
    image: '',
    vocabulary,
  };
};

const upgradeChallengePairs = (
  pair: BookPair,
): { en: VocabularyChallengePair[]; ar: VocabularyChallengePair[] } => {
  const level = pair.en.level as Level;
  const targetCount = getLearningLevelPolicy(level).vocabularyCount;
  const enPage = challengePage(pair.en);
  const arPage = challengePage(pair.ar);
  const enExisting = enPage?.vocabularyPairs ?? [];
  const arExisting = arPage?.vocabularyPairs ?? [];

  const enMetadata = buildMetadataMap(pair.en, 'en');
  const arMetadata = buildMetadataMap(pair.ar, 'ar');

  const enPairs = enExisting
    .slice(0, targetCount)
    .map(item => enrichPair(pair.en, item, 'en', enMetadata));
  const arPairs = arExisting
    .slice(0, targetCount)
    .map(item => enrichPair(pair.ar, item, 'ar', arMetadata));

  const existingEn = new Set(enPairs.map(item => normalizeWord(item.word, 'en')));
  const existingAr = new Set(arPairs.map(item => normalizeWord(item.word, 'ar')));

  const candidates = buildBilingualCandidates(pair)
    .filter(candidate =>
      !existingEn.has(normalizeWord(candidate.en.word, 'en')) &&
      !existingAr.has(normalizeWord(candidate.ar.word, 'ar')),
    )
    .sort((a, b) => {
      const contextDelta = Number(Boolean(b.en.context && b.ar.context)) - Number(Boolean(a.en.context && a.ar.context));
      if (contextDelta) return contextDelta;
      return (a.en.chapter ?? 999) - (b.en.chapter ?? 999);
    });

  const needed = Math.max(0, targetCount - Math.min(enPairs.length, arPairs.length));
  const selected = pickEvenly(candidates, needed);

  selected.forEach(candidate => {
    if (enPairs.length < targetCount) {
      enPairs.push({
        word: candidate.en.word,
        meaning: candidate.en.definition,
        context: candidate.en.context,
        chapter: candidate.en.chapter,
        chapterTitle: candidate.en.chapterTitle,
        partOfSpeech: candidate.en.partOfSpeech,
      });
    }

    if (arPairs.length < targetCount) {
      arPairs.push({
        word: candidate.ar.word,
        meaning: candidate.ar.definition,
        context: candidate.ar.context,
        chapter: candidate.ar.chapter,
        chapterTitle: candidate.ar.chapterTitle,
        partOfSpeech: candidate.ar.partOfSpeech,
      });
    }
  });

  return {
    en: enPairs.slice(0, targetCount),
    ar: arPairs.slice(0, targetCount),
  };
};

const updateChallengePage = (
  book: BookData,
  language: Language,
  pairs: VocabularyChallengePair[],
): BookData => {
  const level = book.level as Level;
  const policy = getLearningLevelPolicy(level);
  const hasChallenge = book.pages.some(page => page.type === 'vocabulary-match');

  const pages = book.pages.map(page => {
    if (page.type !== 'vocabulary-match') return { ...page };

    return {
      ...page,
      title: language === 'ar'
        ? `تحدي المفردات ${level}`
        : `${level} Vocabulary Challenge`,
      content: language === 'ar'
        ? `تدرّب على ${policy.vocabularyCount} كلمة مستهدفة عبر المطابقة والسياق والاسترجاع.`
        : `Practise ${policy.vocabularyCount} target words through matching, story context and active recall.`,
      vocabularyPairs: pairs,
    };
  });

  if (!hasChallenge) return { ...book, pages };

  return { ...book, pages };
};

const ensureGlossary = (book: BookData, language: Language): BookData => {
  if (book.pages.some(page => page.type === 'glossary')) return book;
  const glossary = makeGlossaryPage(book, language);
  return glossary ? { ...book, pages: [...book.pages, glossary] } : book;
};

const reorderLearningFlow = (book: BookData): BookData => {
  const knowledge = book.pages.filter(page => page.type === 'quiz');
  const glossaries = book.pages.filter(page => page.type === 'glossary');
  const vocabulary = book.pages.filter(page => page.type === 'vocabulary-match');
  const review = book.pages.filter(page => page.type === 'exercises');
  const finalChallenge = book.pages.filter(page => page.type === 'final-challenge');

  const learningPages = new Set([
    ...knowledge,
    ...glossaries,
    ...vocabulary,
    ...review,
    ...finalChallenge,
  ]);

  const preserved = book.pages.filter(page => !learningPages.has(page));

  return {
    ...book,
    pages: [
      ...preserved,
      ...knowledge,
      ...glossaries,
      ...vocabulary,
      ...review,
      ...finalChallenge,
    ],
  };
};

const upgradeBook = (
  book: BookData,
  language: Language,
  pairs: VocabularyChallengePair[],
): BookData => {
  const withGlossary = ensureGlossary(book, language);
  const withChallenge = updateChallengePage(withGlossary, language, pairs);
  return reorderLearningFlow(withChallenge);
};

export const upgradeVocabularyLearningFlow = (input: BookPair): BookPair => {
  const pairs = upgradeChallengePairs(input);

  return {
    en: upgradeBook(input.en, 'en', pairs.en),
    ar: upgradeBook(input.ar, 'ar', pairs.ar),
  };
};
