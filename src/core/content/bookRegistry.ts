import type { Level } from '../../types';
import type { BookDisplayTitles, BookPair, CollectionId, StoryId } from './contracts';
import { getStorageManifest } from '../storage/storageManifests';
import type { BookAssetManifest } from '../storage/contracts';
import { finalizeBookPairForUi } from './uiBookFinalization';
import { applyApprovedEnglishStoryCorrections } from './approvedStoryCorrections';

export interface BookDefinition {
  storyId: StoryId;
  level: Level;
  collection: CollectionId;
  titles: BookDisplayTitles;
  storage: BookAssetManifest;
  /** Canonical/prepared book data before the shared UI learning finalization layer. */
  loadSource: () => Promise<BookPair>;
  /** Effective UI book after the shared Learning System and guide finalization. */
  load: () => Promise<BookPair>;
}

const definitionKey = (storyId: StoryId, level: Level): string => `${storyId}:${level}`;

type BookModule = Record<string, unknown> & {
  default?: Record<string, unknown>;
};

/**
 * Vite normally returns ESM named exports directly. Some deployed chunks can be
 * wrapped by an interop layer, however, so prepared A2 books are resolved from
 * either the module namespace or its default object. The import stays lazy: a
 * broken book can fail its own load without taking down the application shell.
 */
const loadBookPairFromModule = async (
  loader: () => Promise<unknown>,
  englishExport: string,
  arabicExport: string,
  label: string,
): Promise<BookPair> => {
  const loaded = await loader();
  const namespace = loaded && typeof loaded === 'object' ? loaded as BookModule : {};
  const defaultNamespace = namespace.default && typeof namespace.default === 'object'
    ? namespace.default
    : {};

  const en = (namespace[englishExport] ?? defaultNamespace[englishExport]) as BookPair['en'] | undefined;
  const ar = (namespace[arabicExport] ?? defaultNamespace[arabicExport]) as BookPair['ar'] | undefined;

  if (!en || !ar) {
    throw new Error(`[Book Registry] ${label} module did not expose prepared EN/AR book data.`);
  }

  return { en, ar };
};

const createDefinition = (
  storyId: StoryId,
  level: Level,
  collection: CollectionId,
  titles: BookDisplayTitles,
  loadSource: () => Promise<BookPair>,
  preservePreparedLearning = false,
): BookDefinition => {
  const loadCorrectedSource = async (): Promise<BookPair> =>
    applyApprovedEnglishStoryCorrections(storyId, level, await loadSource());

  return {
    storyId,
    level,
    collection,
    titles,
    storage: getStorageManifest(storyId, level),
    loadSource: loadCorrectedSource,
    load: async () => {
      const corrected = await loadCorrectedSource();
      return preservePreparedLearning ? corrected : finalizeBookPairForUi(corrected);
    },
  };
};

export const bookRegistry: readonly BookDefinition[] = [
  createDefinition('adam', 'A2', 'prophets', {
    en: 'Stories of the Prophets: Adam (A2)',
    ar: 'قصص الأنبياء: آدم (عليه السلام)',
  }, () => loadBookPairFromModule(
    () => import('../../data/adam/a2'),
    'adamA2BookDataEn',
    'adamA2BookDataAr',
    'Adam A2',
  ), true),
  createDefinition('adam', 'B1', 'prophets', {
    en: 'Stories of the Prophets: Adam (B1)',
    ar: 'قصص الأنبياء: آدم (عليه السلام)',
  }, async () => {
    const module = await import('../../data/adam/b1');
    return { en: module.adamB1BookDataEn, ar: module.adamB1BookDataAr };
  }),
  createDefinition('adam', 'B2', 'prophets', {
    en: 'Stories of the Prophets: Adam (B2)',
    ar: 'قصص الأنبياء: آدم (عليه السلام)',
  }, async () => {
    const module = await import('../../data/adam/b2');
    return { en: module.adamB2BookDataEn, ar: module.adamB2BookDataAr };
  }),

  createDefinition('ibrahim', 'A2', 'prophets', {
    en: 'Stories of the Prophets: Abraham (A2)',
    ar: 'قصص الأنبياء: إبراهيم (عليه السلام)',
  }, () => loadBookPairFromModule(
    () => import('../../data/abraham/a2'),
    'abrahamA2BookDataEn',
    'abrahamA2BookDataAr',
    'Abraham A2',
  ), true),
  createDefinition('ibrahim', 'B1', 'prophets', {
    en: 'Stories of the Prophets: Abraham (B1)',
    ar: 'قصص الأنبياء: إبراهيم (عليه السلام)',
  }, async () => {
    const module = await import('../../data/abraham/b1');
    return { en: module.abrahamB1BookDataEn, ar: module.abrahamB1BookDataAr };
  }),
  createDefinition('ibrahim', 'B2', 'prophets', {
    en: 'Stories of the Prophets: Abraham (B2)',
    ar: 'قصص الأنبياء: إبراهيم (عليه السلام)',
  }, async () => {
    const module = await import('../../data/abraham/b2');
    return { en: module.abrahamB2BookDataEn, ar: module.abrahamB2BookDataAr };
  }),

  createDefinition('musa', 'A2', 'prophets', {
    en: 'Stories of the Prophets: Moses (A2)',
    ar: 'قصص الأنبياء: موسى (عليه السلام)',
  }, () => loadBookPairFromModule(
    () => import('../../data/moses/a2'),
    'mosesA2BookDataEn',
    'mosesA2BookDataAr',
    'Moses A2',
  ), true),
  createDefinition('musa', 'B1', 'prophets', {
    en: 'Stories of the Prophets: Moses (B1)',
    ar: 'قصص الأنبياء: موسى (عليه السلام)',
  }, async () => {
    const module = await import('../../data/moses/b1');
    return { en: module.mosesB1BookDataEn, ar: module.mosesB1BookDataAr };
  }),
  createDefinition('musa', 'B2', 'prophets', {
    en: 'Stories of the Prophets: Moses (B2)',
    ar: 'قصص الأنبياء: موسى (عليه السلام)',
  }, async () => {
    const module = await import('../../data/moses/b2');
    return { en: module.mosesB2BookDataEn, ar: module.mosesB2BookDataAr };
  }),

  createDefinition('mecca', 'A2', 'history', {
    en: 'Islamic History & Civilization: Mecca',
    ar: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام',
  }, () => loadBookPairFromModule(
    () => import('../../data/mecca/a2'),
    'meccaA2BookDataEn',
    'meccaA2BookDataAr',
    'Mecca A2',
  ), true),
  createDefinition('mecca', 'B1', 'history', {
    en: 'Islamic History & Civilization: Mecca',
    ar: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام',
  }, async () => {
    const module = await import('../../data/mecca/b1');
    return { en: module.meccaB1BookDataEn, ar: module.meccaB1BookDataAr };
  }),
  createDefinition('mecca', 'B2', 'history', {
    en: 'Islamic History & Civilization: Mecca',
    ar: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام',
  }, async () => {
    const module = await import('../../data/mecca/b2');
    return { en: module.meccaB2BookDataEn, ar: module.meccaB2BookDataAr };
  }),

  createDefinition('yunusEmre', 'A2', 'turkish', {
    en: 'Great Figures of Turkish-Islamic Heritage: Yunus Emre',
    ar: 'أعلام التراث التركي الإسلامي: يونس إمره',
  }, () => loadBookPairFromModule(
    () => import('../../data/yunusEmre/a2'),
    'yunusEmreA2BookDataEn',
    'yunusEmreA2BookDataAr',
    'Yunus Emre A2',
  ), true),
  createDefinition('yunusEmre', 'B1', 'turkish', {
    en: 'Great Figures of Turkish-Islamic Heritage: Yunus Emre',
    ar: 'أعلام التراث التركي الإسلامي: يونس إمره',
  }, async () => {
    const module = await import('../../data/yunusEmre/b1');
    return { en: module.yunusEmreB1BookDataEn, ar: module.yunusEmreB1BookDataAr };
  }),
  createDefinition('yunusEmre', 'B2', 'turkish', {
    en: 'Great Figures of Turkish-Islamic Heritage: Yunus Emre',
    ar: 'أعلام التراث التركي الإسلامي: يونس إمره',
  }, async () => {
    const module = await import('../../data/yunusEmre/b2');
    return { en: module.yunusEmreB2BookDataEn, ar: module.yunusEmreB2BookDataAr };
  }),
] as const;

const registryByKey = new Map(bookRegistry.map(definition => [definitionKey(definition.storyId, definition.level), definition]));

export const getBookDefinition = (storyId: string, level: Level): BookDefinition | null =>
  registryByKey.get(definitionKey(storyId as StoryId, level)) ?? null;

export const isRegisteredStoryId = (value: string): value is StoryId =>
  bookRegistry.some(definition => definition.storyId === value);

/** Preloads only the selected finalized UI book chunk; it never imports all story content eagerly. */
export const preloadBook = (storyId: string, level: Level): Promise<BookPair> | null =>
  getBookDefinition(storyId, level)?.load() ?? null;
