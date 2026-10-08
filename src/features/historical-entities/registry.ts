import type { PageData } from '../../types';
import { findPlaceName } from './placeMatch';
import type { HistoricalEntity, HistoricalEntityCopy, HistoricalEntityLocale } from './types';
import { BOOK_SETS } from './books';
import cardWords from '../../content/entityCards.json';

const HISTORICAL_ENTITY_MARKER = '__historical_entity__:';

type CardWords = Pick<HistoricalEntityCopy, 'title' | 'kindLabel' | 'periodLabel' | 'summary' | 'more'>;
interface CardFileEntry {
  en?: CardWords;
  ar?: CardWords;
  aliases?: Partial<Record<HistoricalEntityLocale, string[]>>;
  tr?: string;
}

/**
 * The cards' words live in src/content/entityCards.json, where the panel edits them; the maps,
 * pictures and chapters stay in ./books. A card missing from the file keeps the words in code.
 */
const withCardWords = (entity: HistoricalEntity): HistoricalEntity => {
  const words = (cardWords as { cards: Record<string, CardFileEntry> }).cards[entity.id];
  if (!words) return entity;
  const copy = { ...entity.copy };
  for (const locale of ['en', 'ar'] as const) {
    const next = words[locale];
    const current = copy[locale];
    if (!next || !current) continue;
    const { more: _more, ...rest } = current;
    copy[locale] = {
      ...rest,
      ...next,
      mapAlt: current.mapAlt && next.title ? current.mapAlt.replace(current.title, next.title) : current.mapAlt,
    };
  }
  return {
    ...entity,
    copy: copy as HistoricalEntity['copy'],
    aliases: { ...entity.aliases, ...(words.aliases ?? {}) },
    ...(words.tr ? { learnerNames: { ...entity.learnerNames, tr: words.tr } } : {}),
  };
};

export const historicalEntities: Record<string, HistoricalEntity> = Object.fromEntries(
  BOOK_SETS.flatMap(set => set.entities).map(entity => [entity.id, withCardWords(entity)]),
);

/** A book level, e.g. 'mecca-b1': which cards each story chapter offers. */
export type HistoricalEntityBookKey = string;

const BOOK_CHAPTER_ENTITIES: Record<HistoricalEntityBookKey, Record<number, string[]>> = Object.assign(
  {},
  ...BOOK_SETS.map(set => set.chapters),
);


export const isHistoricalEntityBookKey = (value: unknown): value is HistoricalEntityBookKey =>
  typeof value === 'string' && value in BOOK_CHAPTER_ENTITIES;

const normalizeForMerge = (value: string) => value
  .normalize('NFKD')
  .replace(/[\u064B-\u065F\u0670]/g, '')
  .replace(/[أإآ]/g, 'ا')
  .replace(/ة/g, 'ه')
  .replace(/ى/g, 'ي')
  .toLowerCase()
  .trim();

export const historicalEntityDefinition = (entityId: string) => `${HISTORICAL_ENTITY_MARKER}${entityId}`;

export const getHistoricalEntityIdFromDefinition = (definition?: string) => {
  const value = definition?.trim() ?? '';
  return value.startsWith(HISTORICAL_ENTITY_MARKER)
    ? value.slice(HISTORICAL_ENTITY_MARKER.length)
    : null;
};

export const getHistoricalEntity = (entityId: string) => historicalEntities[entityId];

export const resolveHistoricalMapAsset = (
  entity: HistoricalEntity,
  locale: HistoricalEntityLocale,
): string | undefined => {
  if (!entity.mapAsset) return undefined;
  return typeof entity.mapAsset === 'string' ? entity.mapAsset : entity.mapAsset[locale];
};

export const resolveHistoricalCopy = (
  entity: HistoricalEntity,
  locale: HistoricalEntityLocale,
): HistoricalEntityCopy => entity.copy[locale] ?? entity.copy.en;

export interface BookEntityEntry {
  entity: HistoricalEntity;
  chapters: number[];
}

/** Every card a book offers, in order of first appearance, with its chapters. */
export const getBookEntityIndex = (bookKey: HistoricalEntityBookKey): BookEntityEntry[] => {
  const chapters = new Map<string, number[]>();
  Object.entries(BOOK_CHAPTER_ENTITIES[bookKey])
    .map(([chapter, ids]) => [Number(chapter), ids] as const)
    .sort(([left], [right]) => left - right)
    .forEach(([chapter, ids]) => {
      ids.forEach(id => {
        const list = chapters.get(id) ?? [];
        if (!list.includes(chapter)) list.push(chapter);
        chapters.set(id, list);
      });
    });

  return [...chapters.entries()].flatMap(([id, list]) => {
    const entity = historicalEntities[id];
    return entity ? [{ entity, chapters: list }] : [];
  });
};

/** The first book, built before Word Notes and cards shared chapters. */
const BOOKS_WHERE_CARDS_REPLACE_WORD_NOTES = new Set(['ibnjubayr-a2']);

export const applyHistoricalEntitiesToPage = (
  page: PageData,
  bookKey: HistoricalEntityBookKey,
  locale: HistoricalEntityLocale,
): PageData => {
  if (page.type !== 'story') return page;

  const entityIds = BOOK_CHAPTER_ENTITIES[bookKey]?.[page.id] ?? [];
  if (entityIds.length === 0) return page;

  // Word Notes written by the teacher always win: in the bilingual books a
  // place that is also a Word Note keeps its Word Note in that chapter, so the
  // English and Arabic editions keep the same Word Notes.
  const wordNotesFirst = !BOOKS_WHERE_CARDS_REPLACE_WORD_NOTES.has(bookKey);
  const wordNotes = (page.vocabulary ?? []).filter(item => !getHistoricalEntityIdFromDefinition(item.definition));
  const wordNoteKeys = new Set(wordNotes.map(item => normalizeForMerge(item.word)));

  const historicalVocabulary = entityIds.flatMap(entityId => {
    const entity = historicalEntities[entityId];
    if (!entity) return [];

    // The name as the story writes it, so an Arabic name still matches with
    // its vowels and attached letters (بِبَابِلَ, وَمِصْرَ).
    const aliases = entity.aliases[locale] ?? [];
    const alias = aliases
      .map(candidate => findPlaceName(page.content, candidate, locale))
      .find(Boolean);
    if (!alias) return [];
    if (wordNotesFirst && [alias, ...aliases].some(name => wordNoteKeys.has(normalizeForMerge(name)))) return [];

    return [{ word: alias, definition: historicalEntityDefinition(entityId) }];
  });

  if (historicalVocabulary.length === 0) return page;

  const historicalWords = new Set(
    entityIds.flatMap(entityId => historicalEntities[entityId]?.aliases[locale] ?? [])
      .map(normalizeForMerge),
  );
  const ordinaryVocabulary = wordNotesFirst
    ? wordNotes
    : wordNotes.filter(item => !historicalWords.has(normalizeForMerge(item.word)));

  return {
    ...page,
    vocabulary: [...historicalVocabulary, ...ordinaryVocabulary],
  };
};

const PLACES_PAGE_ID = 102;

const PLACES_PAGE_COPY: Record<HistoricalEntityLocale, { title: string; content: string }> = {
  en: { title: 'Places & People', content: 'Find every city, land, sea and person from the story on the map.' },
  ar: { title: 'الأَمَاكِنُ وَالأَشْخَاصُ', content: 'اِبْحَثْ عَلَى الخَرِيطَةِ عَنْ كُلِّ مَدِينَةٍ وَأَرْضٍ وَبَحْرٍ وَشَخْصٍ فِي القِصَّةِ.' },
};

/**
 * Makes the story's places tappable and adds the Places & People page. The
 * pages after the story then run Knowledge Check, Master Glossary, Places &
 * People, Vocabulary Challenge, Language Review, Final Challenge.
 */
export const withPlacesLayer = (
  pages: PageData[],
  bookKey: HistoricalEntityBookKey,
  locale: HistoricalEntityLocale,
): PageData[] => {
  if (!isHistoricalEntityBookKey(bookKey)) return pages;
  const withCards = pages.map(page => applyHistoricalEntitiesToPage(page, bookKey, locale));
  if (withCards.some(page => page.type === 'places')) return inBookEndOrder(withCards);

  const placesPage: PageData = { id: PLACES_PAGE_ID, type: 'places', ...PLACES_PAGE_COPY[locale], entityBookKey: bookKey };
  return inBookEndOrder([...withCards, placesPage]);
};

// The pages after the story run in the same order in every book. This matches
// reorderPreparedLearningFlow (core/content/uiBookFinalization.ts), which later
// puts Knowledge Check, Glossary, Vocabulary Challenge, Language Review and
// Final Challenge back into these slots, so Places & People stays right after
// the Master Glossary.
const BOOK_END_ORDER: PageData['type'][] = ['quiz', 'glossary', 'places', 'vocabulary-match', 'exercises', 'final-challenge'];

const inBookEndOrder = (pages: PageData[]): PageData[] => {
  const isEnd = (page: PageData) => BOOK_END_ORDER.includes(page.type);
  const firstEnd = pages.findIndex(isEnd);
  if (firstEnd < 0) return pages;
  const head = pages.slice(0, firstEnd);
  const tail = pages.slice(firstEnd);
  const ends = tail.filter(isEnd).sort((a, b) => BOOK_END_ORDER.indexOf(a.type) - BOOK_END_ORDER.indexOf(b.type));
  return [...head, ...ends, ...tail.filter(page => !isEnd(page))];
};
