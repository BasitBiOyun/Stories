import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { mosesA2GoldConfig, mosesA2PagesGoldAr as basePagesAr, mosesA2PagesGoldEn as basePagesEn } from './gold';
import { buildA2SelfStudyGuide, buildA2StudentGuideMetadata, buildA2StudentGuideSections, buildA2StudentGuideText, buildA2TeacherGuide, buildA2TeacherGuideMetadata } from '../../a2GoldFactory';

type VocabularyReplacement = { word: string; definition?: string };
type VocabularyOverrides = Record<number, Record<string, VocabularyReplacement>>;

const applyVocabularyOverrides = (
  pages: typeof basePagesEn,
  overrides: VocabularyOverrides,
) => pages.map((page) => {
  const replacements = overrides[page.id];
  if (!replacements || !page.vocabulary) return page;
  return {
    ...page,
    vocabulary: page.vocabulary.map((entry) => {
      const replacement = replacements[entry.word];
      return replacement ? { ...entry, ...replacement } : entry;
    }),
  };
});

const correctedBasePagesEn = applyVocabularyOverrides(basePagesEn, {
  6: {
    mistake: { word: 'upset', definition: 'Very sad or worried because something bad happened.' },
  },
  7: {
    escape: { word: 'escaped', definition: 'Got away from danger.' },
    'escape from': { word: 'thirsty', definition: 'Needing or wanting water.' },
  },
  11: {
    'take out': { word: 'chest', definition: 'The front part of the body below the neck.' },
  },
  12: {
    'laugh at': { word: 'laughed', definition: 'Showed that something was funny.' },
  },
  14: {
    prepare: { word: 'prepared', definition: 'Got ready for something.' },
  },
});

const correctedBasePagesAr = applyVocabularyOverrides(basePagesAr, {
  1: {
    'رَسُول': { word: 'رَسُولًا' },
    'ظَالِم': { word: 'ظَالِمًا' },
    'حَاكِم': { word: 'حَاكِمًا' },
    'يُؤْمِن': { word: 'يُؤْمِنْ' },
  },
  2: {
    'حُلْم': { word: 'حُلْمًا' },
    'مُسْتَبِدّ': { word: 'المُسْتَبِدِّينَ' },
  },
  3: {
    'تَابُوت': { word: 'تَابُوتًا' },
    'يَحْفَظُ': { word: 'سَيَحْفَظُهُ' },
  },
  5: {
    'حَافِظ': { word: 'الْحَافِظِينَ' },
  },
  6: {
    'خَطَأ': { word: 'الضَّعِيفُ', definition: 'شخص يحتاج إلى المساعدة والحماية.' },
  },
  9: {
    'غَرِيب': { word: 'غَرِيبًا' },
    'عَمَل': { word: 'عَمَلًا' },
  },
  10: {
    'عَصَا': { word: 'عَصَاكَ' },
  },
  11: {
    'نَبِيّ': { word: 'نَبِيًّا' },
    'عَرْش': { word: 'عَرْشِهِ' },
  },
  12: {
    'مُعْجِزَة': { word: 'آيَاتِ', definition: 'علامات أعطاها الله لموسى لتظهر قدرته.' },
  },
  13: {
    'مُتَكَبِّر': { word: 'مُتَكَبِّرًا' },
  },
  14: {
    'قَافِلَة': { word: 'قَافِلَتُهُمْ' },
    'جَيْش': { word: 'جَيْشَهُ' },
  },
  16: {
    'دُرُوس': { word: 'دُرُوسًا' },
  },
});

export const mosesA2PagesFinalEn = applyA2VocabularyGold({ pages: correctedBasePagesEn, storyIds: mosesA2GoldConfig.storyIds, vocabularyPageId: 18, language: 'en' });
export const mosesA2PagesFinalAr = applyA2VocabularyGold({ pages: correctedBasePagesAr, storyIds: mosesA2GoldConfig.storyIds, vocabularyPageId: 18, language: 'ar' });

export const mosesA2TeacherGuideFinalEn = buildA2TeacherGuide(mosesA2PagesFinalEn, mosesA2GoldConfig.storyIds, 'en');
export const mosesA2TeacherGuideFinalAr = buildA2TeacherGuide(mosesA2PagesFinalAr, mosesA2GoldConfig.storyIds, 'ar');
export const mosesA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(mosesA2PagesFinalEn, mosesA2GoldConfig.storyIds, 'en');
export const mosesA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(mosesA2PagesFinalAr, mosesA2GoldConfig.storyIds, 'ar');
export const mosesA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Prophet Moses', mosesA2GoldConfig.storyIds.length, 'en');
export const mosesA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('قصة النبي موسى', mosesA2GoldConfig.storyIds.length, 'ar');
export const mosesA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const mosesA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const mosesA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Prophet Moses', 'en');
export const mosesA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('قصة النبي موسى', 'ar');
export const mosesA2StudentGuideTextFinalEn = buildA2StudentGuideText('Prophet Moses', 'en');
export const mosesA2StudentGuideTextFinalAr = buildA2StudentGuideText('قصة النبي موسى', 'ar');
