import type { PageData } from '../../types';
import type { HistoricalEntity, HistoricalEntityCopy, HistoricalEntityLocale } from './types';
import { IBN_JUBAYR_A2_CHAPTER_ENTITIES, ibnJubayrA2Entities } from './books/ibnJubayrA2';

const HISTORICAL_ENTITY_MARKER = '__historical_entity__:';
const ancientNearEastContextMap = new URL('./assets/maps/ancient-near-east-context-map.svg', import.meta.url).href;
const abrahamA2BabylonMapEn = new URL('./assets/maps/abraham-a2/abraham-a2-babylon-map-en.webp', import.meta.url).href;
const abrahamA2BabylonMapAr = new URL('./assets/maps/abraham-a2/abraham-a2-babylon-map-ar.webp', import.meta.url).href;

const abrahamA2Entities: Record<string, HistoricalEntity> = {
  babylon: {
    id: 'babylon',
    kind: 'kingdom',
    aliases: {
      en: ['Babylon'],
      ar: ['بَابِلَ'],
    },
    copy: {
      en: {
        title: 'Babylon',
        kindLabel: 'Ancient city and kingdom',
        periodLabel: 'Ancient Mesopotamia',
        summary: 'Babylon was an old kingdom in Mesopotamia.',
        mapAlt: 'Historical map showing Babylon and important places.',
      },
      ar: {
        title: 'بابل',
        kindLabel: 'مدينة ومملكة قديمة',
        periodLabel: 'بلاد ما بين النهرين القديمة',
        summary: 'كانت بابل مملكةً قديمة في بلاد ما بين النهرين.',
        mapAlt: 'خريطة تاريخية توضّح بابل وبعض الأماكن المهمة.',
      },
    },
    mapAsset: {
      en: abrahamA2BabylonMapEn,
      ar: abrahamA2BabylonMapAr,
    },
    focus: { mode: 'area', x: 61, y: 38, width: 25, height: 36, rotate: 3 },
    approximate: true,
    sources: [
      'https://www.britannica.com/place/Babylon-ancient-city-Mesopotamia-Asia',
      'https://whc.unesco.org/en/list/278/',
      'https://www.iranicaonline.org/articles/babylonia-index/babylonia-i/',
    ],
  },
  mesopotamia: {
    id: 'mesopotamia',
    kind: 'region',
    aliases: {
      en: ['Mesopotamia'],
      ar: ['بِلَادِ مَا بَيْنَ النَّهْرَيْنِ', 'النَّهْرَيْنِ'],
    },
    copy: {
      en: {
        title: 'Mesopotamia',
        kindLabel: 'Historical region',
        periodLabel: 'Ancient Near East',
        summary: 'Mesopotamia was an old land between two rivers: the Tigris and the Euphrates.',
        mapAlt: 'Map highlighting the approximate Mesopotamian region.',
      },
      ar: {
        title: 'بلاد ما بين النهرين',
        kindLabel: 'منطقة تاريخية',
        periodLabel: 'الشرق الأدنى القديم',
        summary: 'كانت بلاد ما بين النهرين أرضًا قديمة بين نهرَي دجلة والفرات.',
        mapAlt: 'خريطة تبرز المنطقة التقريبية لبلاد ما بين النهرين.',
      },
    },
    mapAsset: ancientNearEastContextMap,
    focus: { mode: 'area', x: 59, y: 28, width: 18, height: 34, rotate: 8 },
    approximate: true,
    sources: [
      'https://www.britannica.com/place/Mesopotamia-historical-region-Asia',
      'https://www.metmuseum.org/toah/hd/meso/hd_meso.htm',
    ],
  },
  syria: {
    id: 'syria',
    kind: 'region',
    aliases: {
      en: ['Syria'],
      ar: ['بِلَادِ الشَّامِ'],
    },
    copy: {
      en: {
        title: 'Syria / al-Sham',
        kindLabel: 'Historical region',
        periodLabel: 'The Levant',
        summary: 'Syria, or al-Sham, was a land west of Mesopotamia. Abraham travelled there after Babylon.',
        mapAlt: 'Map highlighting the approximate Syrian or al-Sham region.',
        approximateLabel: 'Historical regional extent shown approximately',
      },
      ar: {
        title: 'بلاد الشام',
        kindLabel: 'منطقة تاريخية',
        periodLabel: 'بلاد الشام',
        summary: 'كانت بلاد الشام أرضًا إلى الغرب من بلاد ما بين النهرين، وسافر إبراهيم عليه السلام إليها بعد بابل.',
        mapAlt: 'خريطة تبرز بصورة تقريبية منطقة بلاد الشام.',
        approximateLabel: 'النطاق التاريخي للمنطقة موضَّح بصورة تقريبية',
      },
    },
    mapAsset: ancientNearEastContextMap,
    focus: { mode: 'area', x: 46, y: 25, width: 13, height: 22, rotate: -7 },
    approximate: true,
    sources: [
      'https://www.britannica.com/place/Syria',
      'https://www.britannica.com/place/Levant',
    ],
  },
  palestine: {
    id: 'palestine',
    kind: 'region',
    aliases: {
      en: ['Palestine'],
      ar: ['فِلَسْطِينَ'],
    },
    copy: {
      en: {
        title: 'Palestine',
        kindLabel: 'Historical region',
        periodLabel: 'Eastern Mediterranean',
        summary: 'Palestine was a land near the Mediterranean Sea. Abraham travelled there on his journey.',
        mapAlt: 'Map highlighting the approximate historical region of Palestine.',
        approximateLabel: 'Historical regional extent shown approximately',
      },
      ar: {
        title: 'فلسطين',
        kindLabel: 'منطقة تاريخية',
        periodLabel: 'شرق البحر المتوسط',
        summary: 'كانت فلسطين أرضًا قرب البحر المتوسط، وسافر إبراهيم عليه السلام إليها في رحلته.',
        mapAlt: 'خريطة تبرز بصورة تقريبية المنطقة التاريخية لفلسطين.',
        approximateLabel: 'النطاق التاريخي للمنطقة موضَّح بصورة تقريبية',
      },
    },
    mapAsset: ancientNearEastContextMap,
    focus: { mode: 'area', x: 38, y: 32, width: 5.5, height: 15, rotate: -5 },
    approximate: true,
    sources: [
      'https://www.britannica.com/place/Palestine',
    ],
  },
  mecca: {
    id: 'mecca',
    kind: 'city',
    aliases: {
      en: ['Mecca'],
      ar: ['مَكَّةَ'],
    },
    copy: {
      en: {
        title: 'Mecca',
        kindLabel: 'City',
        periodLabel: 'Western Arabia',
        summary: 'Mecca is a city in western Arabia. In the story, people built the city near Zamzam water.',
        mapAlt: 'Map locating Mecca in western Arabia.',
        approximateLabel: 'Location shown on a regional context map',
      },
      ar: {
        title: 'مكة',
        kindLabel: 'مدينة',
        periodLabel: 'غرب الجزيرة العربية',
        summary: 'مكة مدينة في غرب الجزيرة العربية، وتذكر القصة أن الناس بنوا المدينة قرب ماء زمزم.',
        mapAlt: 'خريطة توضّح موقع مكة في غرب الجزيرة العربية.',
        approximateLabel: 'الموقع موضَّح ضمن خريطة إقليمية',
      },
    },
    mapAsset: ancientNearEastContextMap,
    focus: { mode: 'point', x: 50, y: 64 },
    approximate: false,
    sources: [
      'https://www.britannica.com/place/Mecca',
    ],
  },
};

export const historicalEntities: Record<string, HistoricalEntity> = {
  ...abrahamA2Entities,
  ...ibnJubayrA2Entities,
};

const ABRAHAM_A2_CHAPTER_ENTITIES: Record<number, string[]> = {
  1: ['babylon', 'mesopotamia'],
  10: ['babylon'],
  11: ['babylon', 'syria', 'palestine'],
  13: ['mecca'],
  14: ['mecca'],
};

export type HistoricalEntityBookKey = 'abraham-a2' | 'ibnjubayr-a2';

const BOOK_CHAPTER_ENTITIES: Record<HistoricalEntityBookKey, Record<number, string[]>> = {
  'abraham-a2': ABRAHAM_A2_CHAPTER_ENTITIES,
  'ibnjubayr-a2': IBN_JUBAYR_A2_CHAPTER_ENTITIES,
};

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

export const applyHistoricalEntitiesToPage = (
  page: PageData,
  bookKey: HistoricalEntityBookKey,
  locale: HistoricalEntityLocale,
): PageData => {
  if (page.type !== 'story') return page;

  const entityIds = BOOK_CHAPTER_ENTITIES[bookKey]?.[page.id] ?? [];
  if (entityIds.length === 0) return page;

  const historicalVocabulary = entityIds.flatMap(entityId => {
    const entity = historicalEntities[entityId];
    if (!entity) return [];

    const alias = (entity.aliases[locale] ?? []).find(candidate => page.content.includes(candidate));
    if (!alias) return [];

    return [{ word: alias, definition: historicalEntityDefinition(entityId) }];
  });

  if (historicalVocabulary.length === 0) return page;

  const historicalWords = new Set(
    entityIds.flatMap(entityId => historicalEntities[entityId]?.aliases[locale] ?? [])
      .map(normalizeForMerge),
  );
  const ordinaryVocabulary = (page.vocabulary ?? []).filter(
    item => !historicalWords.has(normalizeForMerge(item.word)),
  );

  return {
    ...page,
    vocabulary: [...historicalVocabulary, ...ordinaryVocabulary],
  };
};
