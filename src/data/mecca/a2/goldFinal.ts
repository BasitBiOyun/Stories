import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { applyA2HighlightStandard, type A2HighlightStandardConfig } from '../../a2HighlightStandard';
import { applyA2ArabicDefinitionStandard } from '../../a2ArabicDefinitionStandard';
import {
  applyA2GoldPages,
  buildA2SelfStudyGuide,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuide,
  buildA2TeacherGuideMetadata,
} from '../../a2GoldFactory';
import { meccaA2Pages } from './en/pages';
import { meccaA2PagesAr } from './ar/pages';
import { meccaA2HighlightDefinitionsAr } from './highlightDefinitionsAr';
import { meccaA2GoldConfig, meccaA2HotspotsGoldAr, meccaA2HotspotsGoldEn } from './gold';

const canonicalEnForLearning = meccaA2Pages.map((page) => page.id === 8
  ? {
      ...page,
      exercises: [{
        id: 'ex8-1-gold',
        type: 'multiple-choice' as const,
        title: 'Allah Is One',
        instructions: 'Choose the correct answer.',
        question: 'What did Bilal say when Umayya tried to make him worship idols?',
        options: ['Allah is One, Allah is One', 'I will worship the idols', 'I want money'],
        correctAnswer: 0,
        explanation: 'The chapter says Bilal refused to worship the idols and said, “Allah is One, Allah is One.”',
        feedback: {
          correct: 'Correct. Bilal stayed firm and said that Allah is One.',
          incorrect: 'Go back to the last sentence of the chapter and try again.',
        },
      }],
    }
  : page);

const canonicalArForLearning = meccaA2PagesAr.map((page) => page.id === 8
  ? {
      ...page,
      exercises: [{
        id: 'ex8-1-gold-ar',
        type: 'multiple-choice' as const,
        title: 'الله واحد',
        instructions: 'اختر الإجابة الصحيحة.',
        question: 'ماذا قال بلال عندما حاول أمية إجباره على عبادة الأصنام؟',
        options: ['الله واحد، الله واحد', 'سأعبد الأصنام', 'أريد المال'],
        correctAnswer: 0,
        explanation: 'يقول الفصل إن بلالا رفض عبادة الأصنام وقال: «الله واحد، الله واحد».',
        feedback: {
          correct: 'صحيح. ثبت بلال على إيمانه وقال إن الله واحد.',
          incorrect: 'ارجع إلى آخر جملة في الفصل ثم حاول مرة أخرى.',
        },
      }],
    }
  : page);

const basePagesEn = applyA2GoldPages({
  canonicalPages: canonicalEnForLearning,
  hotspotMap: meccaA2HotspotsGoldEn,
  config: meccaA2GoldConfig,
  language: 'en',
});

const basePagesAr = applyA2GoldPages({
  canonicalPages: canonicalArForLearning,
  hotspotMap: meccaA2HotspotsGoldAr,
  config: meccaA2GoldConfig,
  language: 'ar',
});

const vocabularyGoldEn = applyA2VocabularyGold({
  pages: basePagesEn,
  storyIds: meccaA2GoldConfig.storyIds,
  vocabularyPageId: 15,
  language: 'en',
});

const vocabularyGoldAr = applyA2VocabularyGold({
  pages: basePagesAr,
  storyIds: meccaA2GoldConfig.storyIds,
  vocabularyPageId: 15,
  language: 'ar',
});

export const meccaA2HighlightConfig: A2HighlightStandardConfig = {
  storyKey: 'Mecca',
  storyIds: meccaA2GoldConfig.storyIds,
  glossaryPageIds: meccaA2GoldConfig.glossaryPageIds,
};

const selected = applyA2HighlightStandard(vocabularyGoldEn, vocabularyGoldAr, meccaA2HighlightConfig);
const standardized = applyA2ArabicDefinitionStandard(selected, meccaA2HighlightDefinitionsAr, meccaA2HighlightConfig);

export const meccaA2HighlightTargets = standardized.targets;
export const meccaA2PagesFinalEn = standardized.englishPages;
export const meccaA2PagesFinalAr = standardized.arabicPages;

export const meccaA2TeacherGuideFinalEn = buildA2TeacherGuide(meccaA2PagesFinalEn, meccaA2GoldConfig.storyIds, 'en');
export const meccaA2TeacherGuideFinalAr = buildA2TeacherGuide(meccaA2PagesFinalAr, meccaA2GoldConfig.storyIds, 'ar');
export const meccaA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(meccaA2PagesFinalEn, meccaA2GoldConfig.storyIds, 'en');
export const meccaA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(meccaA2PagesFinalAr, meccaA2GoldConfig.storyIds, 'ar');
export const meccaA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Bilal ibn Rabah and Mecca', meccaA2GoldConfig.storyIds.length, 'en');
export const meccaA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('بلال بن رباح ومكة', meccaA2GoldConfig.storyIds.length, 'ar');
export const meccaA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const meccaA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const meccaA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Bilal ibn Rabah and Mecca', 'en');
export const meccaA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('بلال بن رباح ومكة', 'ar');
export const meccaA2StudentGuideTextFinalEn = buildA2StudentGuideText('Bilal ibn Rabah and Mecca', 'en');
export const meccaA2StudentGuideTextFinalAr = buildA2StudentGuideText('بلال بن رباح ومكة', 'ar');
