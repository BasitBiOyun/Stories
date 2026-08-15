import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { applyA2HighlightStandard, type A2HighlightStandardConfig } from '../../a2HighlightStandard';
import { applyA2ArabicDefinitionStandard } from '../../a2ArabicDefinitionStandard';
import { abrahamA2HighlightDefinitionsAr } from './highlightDefinitionsAr';
import {
  abrahamA2GoldConfig,
  abrahamA2PagesGoldAr as basePagesAr,
  abrahamA2PagesGoldEn as basePagesEn,
} from './gold';
import {
  buildA2SelfStudyGuide,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuide,
  buildA2TeacherGuideMetadata,
} from '../../a2GoldFactory';

const vocabularyGoldEn = applyA2VocabularyGold({
  pages: basePagesEn,
  storyIds: abrahamA2GoldConfig.storyIds,
  vocabularyPageId: 16,
  language: 'en',
  chapterAdditions: {
    6: [{ word: 'axe', definition: 'A heavy tool used for cutting or breaking things.' }],
    8: [{ word: 'trusted', definition: 'Believed that Allah would protect and help him.' }],
  },
});

const vocabularyGoldAr = applyA2VocabularyGold({
  pages: basePagesAr,
  storyIds: abrahamA2GoldConfig.storyIds,
  vocabularyPageId: 16,
  language: 'ar',
  chapterAdditions: {
    6: [{ word: 'فَأْس', definition: 'أَدَاةٌ ثَقِيلَةٌ تُسْتَعْمَلُ لِلْقَطْعِ أَوِ التَّكْسِيرِ.' }],
  },
});

export const abrahamA2HighlightConfig: A2HighlightStandardConfig = {
  storyKey: 'Abraham',
  storyIds: abrahamA2GoldConfig.storyIds,
  glossaryPageIds: abrahamA2GoldConfig.glossaryPageIds,
  arabicOverrides: {
    8: {
      trusted: { word: 'يَثِقُ' },
    },
    12: {
      planner: { word: 'الْمَاكِرِينَ' },
      die: { word: 'نَمُوتُ' },
    },
  },
};

const selected = applyA2HighlightStandard(vocabularyGoldEn, vocabularyGoldAr, abrahamA2HighlightConfig);
const standardized = applyA2ArabicDefinitionStandard(selected, abrahamA2HighlightDefinitionsAr, abrahamA2HighlightConfig);

export const abrahamA2HighlightTargets = standardized.targets;
export const abrahamA2PagesFinalEn = standardized.englishPages;
export const abrahamA2PagesFinalAr = standardized.arabicPages;

export const abrahamA2TeacherGuideFinalEn = buildA2TeacherGuide(abrahamA2PagesFinalEn, abrahamA2GoldConfig.storyIds, 'en');
export const abrahamA2TeacherGuideFinalAr = buildA2TeacherGuide(abrahamA2PagesFinalAr, abrahamA2GoldConfig.storyIds, 'ar');
export const abrahamA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(abrahamA2PagesFinalEn, abrahamA2GoldConfig.storyIds, 'en');
export const abrahamA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(abrahamA2PagesFinalAr, abrahamA2GoldConfig.storyIds, 'ar');
export const abrahamA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Prophet Abraham', abrahamA2GoldConfig.storyIds.length, 'en');
export const abrahamA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('قصة النبي إبراهيم', abrahamA2GoldConfig.storyIds.length, 'ar');
export const abrahamA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const abrahamA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const abrahamA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Prophet Abraham', 'en');
export const abrahamA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('قصة النبي إبراهيم', 'ar');
export const abrahamA2StudentGuideTextFinalEn = buildA2StudentGuideText('Prophet Abraham', 'en');
export const abrahamA2StudentGuideTextFinalAr = buildA2StudentGuideText('قصة النبي إبراهيم', 'ar');
