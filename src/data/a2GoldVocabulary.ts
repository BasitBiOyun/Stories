import type { PageData } from '../types';

export type A2VocabularyEntry = NonNullable<PageData['vocabulary']>[number];

const keyOf = (word: string): string => word.toLowerCase().trim();

const uniqueEntries = (entries: A2VocabularyEntry[]): A2VocabularyEntry[] => {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    const key = keyOf(entry.word);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return Boolean(entry.definition.trim());
  });
};

const pickSix = (entries: A2VocabularyEntry[]): A2VocabularyEntry[] => {
  const unique = uniqueEntries(entries);
  if (unique.length <= 6) return unique;
  const indexes = [0, 1, Math.floor(unique.length / 3), Math.floor(unique.length / 2), Math.floor(unique.length * 0.75), unique.length - 1];
  const selected: A2VocabularyEntry[] = [];
  const seen = new Set<string>();
  for (const index of indexes) {
    const entry = unique[Math.min(index, unique.length - 1)];
    const key = keyOf(entry.word);
    if (seen.has(key)) continue;
    seen.add(key);
    selected.push(entry);
  }
  for (const entry of unique) {
    if (selected.length >= 6) break;
    const key = keyOf(entry.word);
    if (seen.has(key)) continue;
    seen.add(key);
    selected.push(entry);
  }
  return selected.slice(0, 6);
};

export const applyA2VocabularyGold = ({
  pages,
  storyIds,
  vocabularyPageId,
  language,
  chapterAdditions = {},
}: {
  pages: PageData[];
  storyIds: number[];
  vocabularyPageId: number;
  language: 'en' | 'ar';
  chapterAdditions?: Record<number, A2VocabularyEntry[]>;
}): PageData[] => {
  const withWordNotes = pages.map((page) => {
    if (!storyIds.includes(page.id)) return page;
    const additions = chapterAdditions[page.id] || [];
    if (!additions.length) return page;
    return {
      ...page,
      vocabulary: uniqueEntries([...(page.vocabulary || []), ...additions]),
    };
  });

  const storyVocabulary = storyIds.flatMap((id) =>
    withWordNotes.find((page) => page.id === id)?.vocabulary || []
  );
  const challengeWords = pickSix(storyVocabulary);

  return withWordNotes.map((page) => page.id === vocabularyPageId
    ? {
        ...page,
        content: language === 'ar'
          ? 'صِل ست كلمات مفيدة من القصة بمعانيها.'
          : 'Match six useful words from the story with their meanings.',
        vocabularyPairs: challengeWords.map((entry) => ({ word: entry.word, meaning: entry.definition })),
      }
    : page);
};
