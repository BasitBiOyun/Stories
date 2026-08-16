import { BookData } from '../../../types';
import { applyB1HighlightStandard } from '../../b1HighlightStandard';
import { runB1BlueprintSystem } from '../../b1BlueprintSystem';
import { applyHighlightSurfaceForms } from '../../highlightSourceLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { adamB1TeacherGuideMetadata } from './en/teacherGuide';
import { adamB1StudentGuideText, adamB1StudentGuideMetadata, adamB1StudentGuideSections } from './en/selfStudyGuide';
import { adamB1Pages } from './en/pages';
import { adamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB1StudentGuideTextAr, adamB1StudentGuideMetadataAr, adamB1StudentGuideSectionsAr } from './ar/selfStudyGuide';
import { adamB1PagesAr } from './ar/pages';
import { adamB1ExplicitHighlightTargets } from './highlights';
import { adamB1LearningBlueprint } from './learningBlueprint';
import { adamB1BlueprintConfig } from './config';

const adamB1PagesLockedEn = applyHotspotSourceLock(adamB1Pages, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    10: { 'h10-1': 'Sheep', 'h10-2': 'Crops' },
    11: { 'h11-1': 'Raven', 'h11-2': 'Anger' },
  },
});

const adamB1PagesLockedAr = applyHighlightSurfaceForms(
  applyHotspotSourceLock(adamB1PagesAr, { language: 'ar', level: 'B1' }),
  'ar',
);

const adamB1HighlightStandard = applyB1HighlightStandard(adamB1PagesLockedEn, adamB1PagesLockedAr, {
  storyKey: 'Adam',
  storyIds: adamB1BlueprintConfig.storyIds,
  glossaryPageIds: adamB1BlueprintConfig.glossaryPageIds,
  vocabularyPageId: adamB1BlueprintConfig.vocabularyPageId,
  explicitTargets: adamB1ExplicitHighlightTargets,
});

export const adamB1HighlightTargets = adamB1HighlightStandard.targets;

const adamB1Blueprint = runB1BlueprintSystem({
  englishPages: adamB1HighlightStandard.englishPages,
  arabicPages: adamB1HighlightStandard.arabicPages,
  config: adamB1BlueprintConfig,
  blueprint: adamB1LearningBlueprint,
});

export const adamB1BookDataEn: BookData = {
  id: 'b1-prophets-en',
  title: 'Stories of the Prophets: Adam (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: adamB1Blueprint.englishPages,
  teacherGuide: adamB1Blueprint.englishTeacherGuide,
  selfStudyGuide: adamB1Blueprint.englishSelfStudyGuide,
  studentGuideText: adamB1StudentGuideText,
  studentGuideSections: adamB1StudentGuideSections,
  teacherGuideMetadata: adamB1TeacherGuideMetadata,
  studentGuideMetadata: adamB1StudentGuideMetadata,
};

export const adamB1BookDataAr: BookData = {
  id: 'b1-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B1',
  baseFontSize: 14,
  pages: adamB1Blueprint.arabicPages,
  teacherGuide: adamB1Blueprint.arabicTeacherGuide,
  selfStudyGuide: adamB1Blueprint.arabicSelfStudyGuide,
  studentGuideText: adamB1StudentGuideTextAr,
  studentGuideSections: adamB1StudentGuideSectionsAr,
  teacherGuideMetadata: adamB1TeacherGuideMetadataAr,
  studentGuideMetadata: adamB1StudentGuideMetadataAr,
};
