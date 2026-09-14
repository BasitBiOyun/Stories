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
        summary: 'Babylon was an ancient city and kingdom on the Euphrates River in Mesopotamia, in the area of modern Iraq.',
        mapAlt: 'Map locating Babylon in Mesopotamia.',
        approximateLabel: 'Historical location shown approximately',
      },
      ar: {
        title: 'بابل',
        kindLabel: 'مدينة ومملكة قديمة',
        periodLabel: 'بلاد ما بين النهرين القديمة',
        summary: 'كانت بابل مدينةً ومملكةً قديمة على نهر الفرات في بلاد ما بين النهرين، في منطقة تقع اليوم داخل العراق.',
        mapAlt: 'خريطة توضّح موقع بابل في بلاد ما بين النهرين.',
        approximateLabel: 'الموقع التاريخي موضَّح بصورة تقريبية',
      },
    },
    mapAsset: ancientNearEastContextMap,
    focus: { mode: 'point', x: 61, y: 30 },
    approximate: true,
    sources: [
      'https://www.britannica.com/place/Babylon-ancient-city-Mesopotamia-Asia',
      'https://whc.unesco.org/en/list/278/',
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
        summary: 'Mesopotamia is the historical region around the Tigris and Euphrates rivers. Much of it lies in modern Iraq.',
        mapAlt: 'Map highlighting the approximate Mesopotamian region.',
        approximateLabel: 'Regional extent shown approximately',
      },
      ar: {
        title: 'بلاد ما بين النهرين',
        kindLabel: 'منطقة تاريخية',
        periodLabel: 'الشرق الأدنى القديم',
        summary: 'بلاد ما بين النهرين منطقة تاريخية حول نهري دجلة والفرات، ويقع جزء كبير منها اليوم داخل العراق.',
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
        summary: 'In historical usage, Syria or al-Sham referred broadly to lands east of the Mediterranean. The story places it on Abraham’s journey after Babylon.',
        mapAlt: 'Map highlighting the approximate Syrian or al-Sham region.',
        approximateLabel: 'Historical regional extent shown approximately',
      },
      ar: {
        title: 'بلاد الشام',
        kindLabel: 'منطقة تاريخية',
        periodLabel: 'بلاد الشام',
        summary: 'كان اسم بلاد الشام يُستعمل تاريخيًّا لمنطقة واسعة شرقي البحر المتوسط. وتذكر القصة أن إبراهيم سافر إليها بعد مغادرة بابل.',
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
        summary: 'Palestine is a historical geographic region on the eastern Mediterranean. Its exact boundaries changed across different periods.',
        mapAlt: 'Map highlighting the approximate historical region of Palestine.',
        approximateLabel: 'Historical regional extent shown approximately',
      },
      ar: {
        title: 'فلسطين',
        kindLabel: 'منطقة تاريخية',
        periodLabel: 'شرق البحر المتوسط',
        summary: 'فلسطين منطقة جغرافية تاريخية على الساحل الشرقي للبحر المتوسط، وقد تغيّرت حدودها عبر الفترات التاريخية المختلفة.',
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
        summary: 'Mecca lies in western Arabia, inland from the Red Sea. In the story, the settlement grows near the Zamzam water.',
        mapAlt: 'Map locating Mecca in western Arabia.',
        approximateLabel: 'Location shown on a regional context map',
      },
      ar: {
        title: 'مكة',
        kindLabel: 'مدينة',
        periodLabel: 'غرب الجزيرة العربية',
        summary: 'تقع مكة في غرب الجزيرة العربية داخل اليابسة من ساحل البحر الأحمر. وتذكر القصة أن العمران نشأ قرب ماء زمزم.',
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
