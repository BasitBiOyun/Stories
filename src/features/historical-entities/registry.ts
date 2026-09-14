import type { PageData } from '../../types';
import type { HistoricalEntity, HistoricalEntityLocale } from './types';

const HISTORICAL_ENTITY_MARKER = '__historical_entity__:';
const ancientNearEastContextMap = new URL('./assets/maps/ancient-near-east-context-map.svg', import.meta.url).href;

export const historicalEntities: Record<string, HistoricalEntity> = {
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
        mapAlt: 'Historical map showing Babylon and its wider territory.',
        approximateLabel: 'Historical borders are approximate',
      },
      ar: {
        title: 'بابل',
        kindLabel: 'مدينة ومملكة قديمة',
        periodLabel: 'بلاد ما بين النهرين القديمة',
        summary: 'كانت بابل مملكةً قديمة في بلاد ما بين النهرين.',
        mapAlt: 'خريطة تاريخية توضّح بابل ومجالها الأوسع.',
        approximateLabel: 'الحدود التاريخية تقريبية',
      },
    },
    mapAsset: ancientNearEastContextMap,
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
        approximateLabel: 'Regional extent shown approximately',
      },
      ar: {
        title: 'بلاد ما بين النهرين',
        kindLabel: 'منطقة تاريخية',
        periodLabel: 'الشرق الأدنى القديم',
        summary: 'كانت بلاد ما بين النهرين أرضًا قديمة بين نهرَي دجلة والفرات.',
        mapAlt: 'خريطة تبرز المنطقة التقريبية لبلاد ما بين النهرين.',
        approximateLabel: 'نطاق المنطقة موضَّح بصورة تقريبية',
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
        summary: 'كانت بلاد الشام أرضًا إلى الغرب من بلاد ما بين النهرين، وسافر إبراهيم إليها بعد بابل.',
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
        summary: 'كانت فلسطين أرضًا قرب البحر المتوسط، وسافر إبراهيم إليها في رحلته.',
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

const ABRAHAM_A2_CHAPTER_ENTITIES: Record<number, string[]> = {
  1: ['babylon', 'mesopotamia'],
  11: ['syria', 'palestine'],
  13: ['mecca'],
};

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
): string => typeof entity.mapAsset === 'string' ? entity.mapAsset : entity.mapAsset[locale];

export const applyHistoricalEntitiesToPage = (
  page: PageData,
  bookKey: 'abraham-a2',
  locale: HistoricalEntityLocale,
): PageData => {
  if (bookKey !== 'abraham-a2' || page.type !== 'story') return page;

  const entityIds = ABRAHAM_A2_CHAPTER_ENTITIES[page.id] ?? [];
  if (entityIds.length === 0) return page;

  const historicalVocabulary = entityIds.flatMap(entityId => {
    const entity = historicalEntities[entityId];
    if (!entity) return [];

    const alias = entity.aliases[locale].find(candidate => page.content.includes(candidate));
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
