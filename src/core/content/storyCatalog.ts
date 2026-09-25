import type { Level, ProphetStory } from '../../types';

// @ts-ignore
import meccaCover from '../../assets/images/mecca_cover_1781516729384.jpg';
// @ts-ignore
import abrahamCover from '../../assets/images/abraham_cover.png';
// @ts-ignore
import mosesCover from '../../assets/images/moses_cover.png';
// @ts-ignore
import yunusEmreCover from '../../assets/images/yunus_emre_cover.png';

export type StoryCollectionId = 'prophets' | 'history' | 'turkish';

export interface StoryCatalogItem extends ProphetStory {
  nameAr: string;
  descriptionAr: string;
  collection: StoryCollectionId;
}

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
}

export const storyCatalog: StoryCatalogItem[] = [
  {
    id: 'adam',
    name: 'Prophet Adam',
    nameAr: 'آدم عليه السلام',
    description: 'The first human, the knowledge of names, and the beginning of humanity.',
    descriptionAr: 'الإنسان الأول، وتعليم الأسماء، وبداية البشرية.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2FAdam_soil.png?alt=media&token=88abb96a-8dad-4f48-9b60-f30073f9dd9c',
    availableLevels: ['A2', 'B1', 'B2'],
    collection: 'prophets',
  },
  {
    id: 'ibrahim',
    name: 'Prophet Abraham',
    nameAr: 'إبراهيم عليه السلام',
    description: 'The search for truth, the building of the Kaaba, and unwavering faith.',
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
    icon:
      'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/prophets_icon.png?alt=media&token=985739ce-9484-4998-a9e3-a11077955048',
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
    icon:
      'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/civilization_icon.png?alt=media&token=fc8ac841-d12e-4169-a052-4946d20409f2',
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
    icon:
      'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/scholars_icon.png?alt=media&token=3c0b480b-bea3-42e3-9718-2a1967dacf78',
  },
};

export const getStoryCollection = (storyId: string): StoryCollectionId =>
  storyCatalog.find(story => story.id === storyId)?.collection ?? 'prophets';

export const getStoryMeta = (storyId: string): StoryCatalogItem | undefined =>
  storyCatalog.find(story => story.id === storyId);

export const getNextLevel = (level: Level): Level | null => {
  const levels: Level[] = ['A2', 'B1', 'B2'];
  const index = levels.indexOf(level);
  return index >= 0 && index < levels.length - 1 ? levels[index + 1] : null;
};
