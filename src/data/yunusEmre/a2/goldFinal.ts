import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { yunusA2GoldConfig, yunusA2PagesGoldAr as basePagesAr, yunusA2PagesGoldEn as basePagesEn } from './gold';
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
  5: {
    wound: { word: 'cuts', definition: 'Painful marks or injuries on the body.' },
  },
  8: {
    approached: { word: 'dying', definition: 'Coming to the end of life.' },
  },
});

const correctedBasePagesAr = applyVocabularyOverrides(basePagesAr, {
  1: {
    'شَاعِر': { word: 'الشُّعَراءِ', definition: 'أشخاص يكتبون القصائد.' },
    'أَخْلَاقِي': { word: 'أَخْلاقِيَّةً' },
    'دَرْوِيش': { word: 'دَرْوِيشًا' },
    'تِلْمِيذ': { word: 'تِلْميذًا' },
  },
  2: {
    'شَهِدُوا': { word: 'يَشْهَدونَ' },
    'كَرِيمُ الْقَلْب': { word: 'كِرامَ الْقُلوبِ' },
    'عَابِس': { word: 'عابِسِينَ' },
  },
  3: {
    'مُعْتَدِل': { word: 'مُعْتَدِلَةً' },
    'مُنَظَّم': { word: 'مُنَظَّمَةً' },
  },
  4: {
    'مُتَوَاضِع': { word: 'مُتَواضِعًا' },
    'عَادِي': { word: 'عادِيَّةً' },
    'مُعْوَجّ': { word: 'مُعْوَجًّا' },
  },
  5: {
    'جُرُوح': { word: 'جُروحًا' },
    'الْأَكْثَرُ اسْتِقَامَة': { word: 'اسْتِقامَةً', definition: 'أن يكون الشيء مستقيمًا وغير معوج.' },
    'النَّفْس/الْأَنَا': { word: 'نَفْسُ', definition: 'الذات التي تحتاج إلى التدريب وترك الأنانية.' },
    'مُصْلَح': { word: 'إِصْلاحٍ', definition: 'جعل الشيء أفضل وأكثر صحة.' },
  },
  7: {
    'حَقْل': { word: 'الْحُقولِ' },
    'هَمَسُوا': { word: 'يَهْمِسونَ' },
  },
  8: {
    'دَنَا': { word: 'اِنْتَهى', definition: 'وصل إلى نهايته.' },
    'يَبِسَتْ': { word: 'يَبِسْتُ', definition: 'جففت وفقدت الماء والحياة.' },
  },
});

export const yunusA2PagesFinalEn = applyA2VocabularyGold({ pages: correctedBasePagesEn, storyIds: yunusA2GoldConfig.storyIds, vocabularyPageId: 10, language: 'en' });
export const yunusA2PagesFinalAr = applyA2VocabularyGold({ pages: correctedBasePagesAr, storyIds: yunusA2GoldConfig.storyIds, vocabularyPageId: 10, language: 'ar' });

export const yunusA2TeacherGuideFinalEn = buildA2TeacherGuide(yunusA2PagesFinalEn, yunusA2GoldConfig.storyIds, 'en');
export const yunusA2TeacherGuideFinalAr = buildA2TeacherGuide(yunusA2PagesFinalAr, yunusA2GoldConfig.storyIds, 'ar');
export const yunusA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(yunusA2PagesFinalEn, yunusA2GoldConfig.storyIds, 'en');
export const yunusA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(yunusA2PagesFinalAr, yunusA2GoldConfig.storyIds, 'ar');
export const yunusA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Yunus Emre', yunusA2GoldConfig.storyIds.length, 'en');
export const yunusA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('يونس إمره', yunusA2GoldConfig.storyIds.length, 'ar');
export const yunusA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const yunusA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const yunusA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Yunus Emre', 'en');
export const yunusA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('يونس إمره', 'ar');
export const yunusA2StudentGuideTextFinalEn = buildA2StudentGuideText('Yunus Emre', 'en');
export const yunusA2StudentGuideTextFinalAr = buildA2StudentGuideText('يونس إمره', 'ar');
