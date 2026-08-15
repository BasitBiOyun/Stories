import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { applyA2HighlightStandard, type A2HighlightStandardConfig } from '../../a2HighlightStandard';
import { applyA2ArabicDefinitionStandard } from '../../a2ArabicDefinitionStandard';
import { yunusA2HighlightDefinitionsAr } from './highlightDefinitionsAr';
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

const fixApprovedObviousTextSlips = (pages: typeof basePagesEn) => pages.map((page) => {
  if (page.type !== 'story' || page.id !== 7) return page;
  return {
    ...page,
    content: (page.content || '').replace(
      'Yunus replied, “My teacher” “I walked around the fields,',
      'Yunus replied, “My teacher, I walked around the fields,',
    ),
  };
});

const correctedBasePagesEn = applyVocabularyOverrides(fixApprovedObviousTextSlips(basePagesEn), {
  5: {
    wound: { word: 'cuts', definition: 'Painful marks or injuries on the body.' },
  },
  8: {
    approached: { word: 'dying', definition: 'Coming to the end of life.' },
  },
});

const correctedBasePagesAr = applyVocabularyOverrides(basePagesAr, {
  1: {
    'شَاعِر': { word: 'الشُّعَراءِ', definition: 'أَشْخَاصٌ يَكْتُبُونَ الْقَصَائِدَ.' },
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
    'الْأَكْثَرُ اسْتِقَامَة': { word: 'اسْتِقامَةً', definition: 'أَنْ يَكُونَ الشَّيْءُ مُسْتَقِيمًا وَغَيْرَ مُعْوَجٍّ.' },
    'النَّفْس/الْأَنَا': { word: 'نَفْسُ', definition: 'الذَّاتُ الَّتِي تَحْتَاجُ إِلَى التَّدْرِيبِ وَتَرْكِ الْأَنَانِيَّةِ.' },
    'مُصْلَح': { word: 'إِصْلاحٍ', definition: 'جَعْلُ الشَّيْءِ أَفْضَلَ وَأَكْثَرَ صِحَّةً.' },
  },
  7: {
    'حَقْل': { word: 'الْحُقولِ' },
    'هَمَسُوا': { word: 'يَهْمِسونَ' },
  },
  8: {
    'دَنَا': { word: 'اِنْتَهى', definition: 'وَصَلَ إِلَى نِهَايَتِهِ.' },
    'يَبِسَتْ': { word: 'يَبِسْتُ', definition: 'جَفَّ وَفَقَدَ الْمَاءَ وَالْحَيَاةَ.' },
  },
});

const vocabularyGoldEn = applyA2VocabularyGold({ pages: correctedBasePagesEn, storyIds: yunusA2GoldConfig.storyIds, vocabularyPageId: 10, language: 'en' });
const vocabularyGoldAr = applyA2VocabularyGold({ pages: correctedBasePagesAr, storyIds: yunusA2GoldConfig.storyIds, vocabularyPageId: 10, language: 'ar' });

export const yunusA2HighlightConfig: A2HighlightStandardConfig = {
  storyKey: 'Yunus Emre',
  storyIds: yunusA2GoldConfig.storyIds,
  glossaryPageIds: yunusA2GoldConfig.glossaryPageIds,
  arabicOverrides: {
    4: {
      assigned: { word: 'فَطَلَبَ' },
      ego: { word: 'النَّفْسِ' },
    },
    5: {
      fixing: { word: 'يُصْلِحُ' },
      noticed: { word: 'لاحَظَ' },
    },
    6: {
      quiet: { word: 'هادِئَةٌ' },
      rivers: { word: 'أَنْهارٌ' },
    },
  },
};

const selected = applyA2HighlightStandard(vocabularyGoldEn, vocabularyGoldAr, yunusA2HighlightConfig);
const standardized = applyA2ArabicDefinitionStandard(selected, yunusA2HighlightDefinitionsAr, yunusA2HighlightConfig);

export const yunusA2HighlightTargets = standardized.targets;
export const yunusA2PagesFinalEn = standardized.englishPages;
export const yunusA2PagesFinalAr = standardized.arabicPages;

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
