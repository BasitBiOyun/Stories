import { BookData } from '../../../types';
import { buildB1EvidenceGuides } from '../../b1GoldGuides';
import { applyB1HighlightStandard } from '../../b1HighlightStandard';
import { applyValidatedAdvancedParallelLearning } from '../../advancedParallelLearning';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { mosesB1TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB1StudentGuideSections, mosesB1StudentGuideText, mosesB1StudentGuideMetadata } from './en/selfStudyGuide';

import { mosesB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB1StudentGuideSectionsAr, mosesB1StudentGuideTextAr, mosesB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { mosesB1PagesRolloutEn, mosesB1PagesRolloutAr, mosesB1RolloutConfig } from './rollout';
import { mosesB1ExplicitHighlightTargets } from './highlights';

import { mosesA2TeacherGuideMetadata } from '../a2/en/teacherGuide';
import { mosesA2StudentGuideSections, mosesA2StudentGuideText, mosesA2StudentGuideMetadata } from '../a2/en/selfStudyGuide';

const mosesB1PagesLockedEn = applyHotspotSourceLock(mosesB1PagesRolloutEn, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    4: { 'h4-1': 'Mother', 'h4-2': 'Queen Asiye' },
    9: { 'h9-1': 'Voice' },
    11: { 'h11-2': 'Staff' },
    12: { 'h12-1': 'Night' },
  },
});
const mosesB1PagesLockedAr = applyHotspotSourceLock(mosesB1PagesRolloutAr, { language: 'ar', level: 'B1' });

const mosesB1HighlightStandard = applyB1HighlightStandard(mosesB1PagesLockedEn, mosesB1PagesLockedAr, {
  storyKey: 'Moses',
  storyIds: mosesB1RolloutConfig.storyIds,
  glossaryPageIds: mosesB1RolloutConfig.glossaryPageIds,
  vocabularyPageId: mosesB1RolloutConfig.vocabularyPageId,
  explicitTargets: mosesB1ExplicitHighlightTargets,
});

export const mosesB1HighlightTargets = mosesB1HighlightStandard.targets;
const mosesB1Parallel = applyValidatedAdvancedParallelLearning({
  englishPages: mosesB1HighlightStandard.englishPages,
  arabicPages: mosesB1HighlightStandard.arabicPages,
  config: { level: 'B1', ...mosesB1RolloutConfig },
});
const mosesB1GuidesEn = buildB1EvidenceGuides(mosesB1Parallel.englishPages, 'en');
const mosesB1GuidesAr = buildB1EvidenceGuides(mosesB1Parallel.arabicPages, 'ar');

export const mosesB1BookDataEn: BookData = {
  id: 'moses-b1-en',
  title: 'Stories of the Prophets: Moses (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: mosesB1Parallel.englishPages,
  teacherGuide: mosesB1GuidesEn.teacherGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadata.targetLearners ? mosesB1TeacherGuideMetadata : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB1GuidesEn.selfStudyGuide,
  studentGuideSections: mosesB1StudentGuideSections.length > 0 ? mosesB1StudentGuideSections : mosesA2StudentGuideSections,
  studentGuideText: mosesB1StudentGuideText || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB1StudentGuideMetadata.whoIsThisFor ? mosesB1StudentGuideMetadata : mosesA2StudentGuideMetadata,
};

export const mosesB1BookDataAr: BookData = {
  id: 'moses-b1-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: mosesB1Parallel.arabicPages,
  teacherGuide: mosesB1GuidesAr.teacherGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadataAr.targetLearners ? mosesB1TeacherGuideMetadataAr : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB1GuidesAr.selfStudyGuide,
  studentGuideSections: mosesB1StudentGuideSectionsAr.length > 0 ? mosesB1StudentGuideSectionsAr : mosesA2StudentGuideSections,
  studentGuideText: mosesB1StudentGuideTextAr || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB1StudentGuideMetadataAr.whoIsThisFor ? mosesB1StudentGuideMetadataAr : mosesA2StudentGuideMetadata,
};

export const mosesB1BookData = mosesB1BookDataEn;
