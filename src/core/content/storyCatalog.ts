import type { Level, ProphetStory } from '../../types';

import adamCover from '../../assets/images/adam_cover.webp';
import meccaCover from '../../assets/images/mecca_cover.webp';
import abrahamCover from '../../assets/images/abraham_cover.webp';
import mosesCover from '../../assets/images/moses_cover.webp';
import yunusEmreCover from '../../assets/images/yunus_emre_cover.webp';
import ibnJubayrCover from '../../assets/images/ibn_jubayr_cover.webp';
import prophetsIcon from '../../assets/images/prophets_icon.webp';
import civilizationIcon from '../../assets/images/civilization_icon.webp';
import scholarsIcon from '../../assets/images/scholars_icon.webp';

export type StoryCollectionId = 'prophets' | 'history' | 'turkish';

export interface StoryCatalogItem extends ProphetStory {
  nameAr: string;
  descriptionAr: string;
  collection: StoryCollectionId;
  /** The book has no Arabic edition: the reader opens it in English and hides the language switch. */
  englishOnly?: boolean;
  /** Never listed anywhere; opens only from a preview link (see hashRoute). */
  hidden?: boolean;
}

/**
 * The one place a collection's colours live. The home page reads these fields directly; the reader
 * publishes `readerTokens` as CSS variables on its root, which index.css maps to the `accent`,
 * `accent-strong`, `chrome`, `chrome-menu`, `page` and `page-deep` utilities.
 */
export interface CollectionVisual {
  id: StoryCollectionId;
  nameEn: string;
  nameAr: string;
  shortEn: string;
  shortAr: string;
  accent: string;
  accentBright: string;
  accentSoft: string;
  ambient: string;
  stage: string;
  summaryGradient: string;
  summaryCard: string;
  summaryButton: string;
  icon: string;
  readerTokens: ReaderTokens;
}

export interface ReaderTokens {
  /** Text and outline accent on the dark reader chrome. */
  accent: string;
  /** Filled controls (next button, active TOC row). */
  accentStrong: string;
  /** Header and footer surface. */
  chrome: string;
  /** Side menu and pop-over surface. */
  chromeMenu: string;
  /** Reading surface at A2/B1. */
  page: string;
  /** Slightly deeper reading surface at B2. */
  pageDeep: string;
  /** Eleven-step scale (50-950) behind the `brand-*` utilities used on light surfaces: cards, buttons, borders. */
  scale: BrandScale;
}

export type BrandShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
export type BrandScale = Record<BrandShade, string>;

// Tailwind's own amber, emerald and sky scales, so the migrated components render exactly as before.
const amberScale: BrandScale = {
  '50': 'oklch(98.7% .022 95.277)', '100': 'oklch(96.2% .059 95.617)', '200': 'oklch(92.4% .12 95.746)',
  '300': 'oklch(87.9% .169 91.605)', '400': 'oklch(82.8% .189 84.429)', '500': 'oklch(76.9% .188 70.08)',
  '600': 'oklch(66.6% .179 58.318)', '700': 'oklch(55.5% .163 48.998)', '800': 'oklch(47.3% .137 46.201)',
  '900': 'oklch(41.4% .112 45.904)', '950': 'oklch(27.9% .077 45.635)',
};
const emeraldScale: BrandScale = {
  '50': 'oklch(97.9% .021 166.113)', '100': 'oklch(95% .052 163.051)', '200': 'oklch(90.5% .093 164.15)',
  '300': 'oklch(84.5% .143 164.978)', '400': 'oklch(76.5% .177 163.223)', '500': 'oklch(69.6% .17 162.48)',
  '600': 'oklch(59.6% .145 163.225)', '700': 'oklch(50.8% .118 165.612)', '800': 'oklch(43.2% .095 166.913)',
  '900': 'oklch(37.8% .077 168.94)', '950': 'oklch(26.2% .051 172.552)',
};
const skyScale: BrandScale = {
  '50': 'oklch(97.7% .013 236.62)', '100': 'oklch(95.1% .026 236.824)', '200': 'oklch(90.1% .058 230.902)',
  '300': 'oklch(82.8% .111 230.318)', '400': 'oklch(74.6% .16 232.661)', '500': 'oklch(68.5% .169 237.323)',
  '600': 'oklch(58.8% .158 241.966)', '700': 'oklch(50% .134 242.749)', '800': 'oklch(44.3% .11 240.79)',
  '900': 'oklch(39.1% .09 240.876)', '950': 'oklch(29.3% .066 243.157)',
};

/** Confetti and other canvas colours that cannot read CSS variables: three mid shades of the scale. */
export const brandConfetti = (scale: BrandScale): string[] => [scale['600'], scale['500'], scale['300']];

/** The CSS variables a collection publishes; App sets them on <html> so portals and overlays see them too. */
export const readerTokenVariables = (tokens: ReaderTokens): Record<string, string> => ({
  '--accent': tokens.accent,
  '--accent-strong': tokens.accentStrong,
  '--chrome': tokens.chrome,
  '--chrome-menu': tokens.chromeMenu,
  '--page': tokens.page,
  '--page-deep': tokens.pageDeep,
  ...Object.fromEntries(Object.entries(tokens.scale).map(([shade, value]) => [`--brand-${shade}`, value])),
});

export const storyCatalog: StoryCatalogItem[] = [
  {
    id: 'adam',
    name: 'Prophet Adam',
    nameAr: 'آدم عليه السلام',
    description: 'The first human, the knowledge of names, and the beginning of humanity.',
    descriptionAr: 'الإنسان الأول، وتعليم الأسماء، وبداية البشرية.',
    image: adamCover,
    availableLevels: ['A2', 'B1', 'B2'],
    collection: 'prophets',
  },
  {
    id: 'ibrahim',
    name: 'Prophet Abraham',
    nameAr: 'إبراهيم عليه السلام',
    description: 'The search for truth, the building of the Ka’ba, and unwavering faith.',
    descriptionAr: 'البحث عن الحقيقة، وبناء الكعبة، والإيمان الراسخ.',
    image: abrahamCover,
    availableLevels: ['A2', 'B1', 'B2'],
    collection: 'prophets',
  },
  {
    id: 'musa',
    name: 'Prophet Moses',
    nameAr: 'موسى عليه السلام',
    description: 'The journey from the palace to the desert, and the liberation of a people.',
    descriptionAr: 'الرحلة من القصر إلى الصحراء، وتحرير بني إسرائيل من فرعون.',
    image: mosesCover,
    availableLevels: ['A2', 'B1', 'B2'],
    collection: 'prophets',
  },
  {
    id: 'mecca',
    name: 'Mecca Before Islam',
    nameAr: 'مكة قبل الإسلام',
    description: 'The City and the Age of Ignorance: Mecca before the dawn of Islam.',
    descriptionAr: 'المدينة وعصر الجاهلية: مكة قبل بزوغ فجر الإسلام.',
    image: meccaCover,
    availableLevels: ['A2', 'B1', 'B2'],
    collection: 'history',
  },
  {
    id: 'ibnJubayr',
    name: 'Ibn Jubayr',
    nameAr: 'ابن جبير',
    description: 'A Great Andalusian Traveler of the Middle Ages',
    descriptionAr: 'رحّالة أندلسي كبير في العصور الوسطى',
    image: ibnJubayrCover,
    availableLevels: ['A2'],
    collection: 'history',
    englishOnly: true,
  },
  {
    id: 'yunusEmre',
    name: 'Yunus Emre',
    nameAr: 'يونس إمره',
    description: 'The story of a wise Anatolian dervish who taught love, humility, and devotion through simple Turkish poetry.',
    descriptionAr: 'قصة يونس إمره وشعره وفكره الأخلاقي وتراثه الروحي في الأناضول.',
    image: yunusEmreCover,
    availableLevels: ['A2', 'B1', 'B2'],
    collection: 'turkish',
  },
];

/**
 * Books that are loaded in the app but not shown to anyone yet: they are kept out of
 * `storyCatalog`, so the home page, shelf, search, next-book links and result codes never
 * see them. They open only from a preview link: `?gizli=1#/<storyId>/<level>`.
 * A book moves into `storyCatalog` when its Arabic edition is ready and the user approves it.
 */
export const hiddenStoryCatalog: StoryCatalogItem[] = [
  {
    id: 'gevherNesibe',
    name: 'Gevher Nesibe',
    nameAr: 'جوهر نسيبة',
    description: 'The first hospital and medical school together in the world, in Seljuk Kayseri.',
    descriptionAr: 'أول مستشفى ومدرسة طبية معًا في العالم، في قيصري السلجوقية.',
    image: scholarsIcon,
    availableLevels: ['A2'],
    collection: 'turkish',
    englishOnly: true,
    hidden: true,
  },
];

export const isHiddenStory = (storyId: string): boolean =>
  hiddenStoryCatalog.some(story => story.id === storyId);

export const collectionStoryIds: Record<StoryCollectionId, string[]> = {
  prophets: storyCatalog.filter(story => story.collection === 'prophets').map(story => story.id),
  history: storyCatalog.filter(story => story.collection === 'history').map(story => story.id),
  turkish: storyCatalog.filter(story => story.collection === 'turkish').map(story => story.id),
};

export const collectionVisuals: Record<StoryCollectionId, CollectionVisual> = {
  prophets: {
    id: 'prophets',
    nameEn: 'Stories of the Prophets',
    nameAr: 'قصص الأنبياء',
    shortEn: 'Prophets',
    shortAr: 'الأنبياء',
    accent: '#D8B35C',
    accentBright: '#F3D58A',
    accentSoft: 'rgba(216,179,92,0.14)',
    ambient: 'rgba(111,74,29,0.44)',
    stage: 'linear-gradient(135deg, #17140f 0%, #21180f 46%, #10130f 100%)',
    summaryGradient: 'linear-gradient(145deg, #130d09 0%, #2a180d 48%, #0c0d0a 100%)',
    summaryCard: 'rgba(216,179,92,0.075)',
    summaryButton: '#B7791F',
    icon: prophetsIcon,
    readerTokens: {
      accent: '#c2aa6b',
      accentStrong: '#b7791f',
      chrome: '#2a1d0c',
      chromeMenu: '#14221a',
      page: '#fff7ed',
      pageDeep: '#f4f1ea',
      scale: amberScale,
    },
  },
  history: {
    id: 'history',
    nameEn: 'Islamic History & Civilization',
    nameAr: 'التاريخ والحضارة الإسلامية',
    shortEn: 'History & Civilization',
    shortAr: 'التاريخ والحضارة',
    accent: '#55C997',
    accentBright: '#86EDBD',
    accentSoft: 'rgba(85,201,151,0.14)',
    ambient: 'rgba(14,95,65,0.40)',
    stage: 'linear-gradient(135deg, #0d1714 0%, #10251d 48%, #0b1512 100%)',
    summaryGradient: 'linear-gradient(145deg, #07140f 0%, #0d2a1d 48%, #06110d 100%)',
    summaryCard: 'rgba(85,201,151,0.075)',
    summaryButton: '#16865F',
    icon: civilizationIcon,
    readerTokens: {
      accent: '#34d399',
      accentStrong: '#059669',
      chrome: '#022c22',
      chromeMenu: '#042416',
      page: '#f4f7f5',
      pageDeep: '#edf2ee',
      scale: emeraldScale,
    },
  },
  turkish: {
    id: 'turkish',
    nameEn: 'Turkish-Islamic Heritage',
    nameAr: 'التراث التركي الإسلامي',
    shortEn: 'Turkish-Islamic Heritage',
    shortAr: 'التراث التركي الإسلامي',
    accent: '#58CBE0',
    accentBright: '#8AE8F5',
    accentSoft: 'rgba(88,203,224,0.14)',
    ambient: 'rgba(22,88,108,0.42)',
    stage: 'linear-gradient(135deg, #0b1418 0%, #10242b 48%, #0a1216 100%)',
    summaryGradient: 'linear-gradient(145deg, #071116 0%, #0c2730 48%, #061015 100%)',
    summaryCard: 'rgba(88,203,224,0.075)',
    summaryButton: '#137D93',
    icon: scholarsIcon,
    readerTokens: {
      accent: '#22d3ee',
      accentStrong: '#0369a1',
      chrome: '#0d1d2c',
      chromeMenu: '#0a1826',
      page: '#f2f6f9',
      pageDeep: '#eaf0f4',
      scale: skyScale,
    },
  },
};

/** The visual set for a collection id that may come from a loosely typed prop; unknown ids fall back to Prophets. */
export const collectionVisualFor = (collectionId?: string): CollectionVisual =>
  collectionVisuals[(collectionId ?? 'prophets') as StoryCollectionId] ?? collectionVisuals.prophets;

export const getStoryCollection = (storyId: string): StoryCollectionId =>
  getStoryMeta(storyId)?.collection ?? 'prophets';

export const getStoryMeta = (storyId: string): StoryCatalogItem | undefined =>
  storyCatalog.find(story => story.id === storyId) ?? hiddenStoryCatalog.find(story => story.id === storyId);

export const getNextLevel = (level: Level): Level | null => {
  const levels: Level[] = ['A2', 'B1', 'B2'];
  const index = levels.indexOf(level);
  return index >= 0 && index < levels.length - 1 ? levels[index + 1] : null;
};
