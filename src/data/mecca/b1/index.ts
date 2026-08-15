import { BookData } from '../../../types';
import { buildB1EvidenceGuides } from '../../b1GoldGuides';
import { applyB1HighlightStandard } from '../../b1HighlightStandard';
import { applyValidatedAdvancedParallelLearning } from '../../advancedParallelLearning';
import { applyHighlightSurfaceForms } from '../../highlightSourceLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { meccaB1TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB1StudentGuideSections, meccaB1StudentGuideText, meccaB1StudentGuideMetadata } from './en/selfStudyGuide';

import { meccaB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB1StudentGuideSectionsAr, meccaB1StudentGuideTextAr, meccaB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { meccaB1GoldConfig, meccaB1PagesGoldEn, meccaB1PagesGoldAr } from './gold';

const meccaB1PagesLockedEn = applyHotspotSourceLock(meccaB1PagesGoldEn, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    7: { 'h7-1': 'Rich' },
    8: { 'h8-2': 'Tribe' },
    12: { 'h12-1': 'Quraysh' },
    13: { 'h13-1': 'Bilal' },
  },
});
const meccaB1PagesLockedAr = applyHighlightSurfaceForms(
  applyHotspotSourceLock(meccaB1PagesGoldAr, { language: 'ar', level: 'B1' }),
  'ar',
);

const meccaB1HighlightStandard = applyB1HighlightStandard(meccaB1PagesLockedEn, meccaB1PagesLockedAr, {
  storyKey: 'Mecca',
  storyIds: meccaB1GoldConfig.storyIds,
  glossaryPageIds: meccaB1GoldConfig.glossaryPageIds,
  vocabularyPageId: meccaB1GoldConfig.vocabularyPageId,
});

export const meccaB1HighlightTargets = meccaB1HighlightStandard.targets;
const meccaB1Parallel = applyValidatedAdvancedParallelLearning({
  englishPages: meccaB1HighlightStandard.englishPages,
  arabicPages: meccaB1HighlightStandard.arabicPages,
  config: { level: 'B1', ...meccaB1GoldConfig },
});
const meccaB1GuidesEn = buildB1EvidenceGuides(meccaB1Parallel.englishPages, 'en');
const meccaB1GuidesAr = buildB1EvidenceGuides(meccaB1Parallel.arabicPages, 'ar');

export const meccaB1BookDataEn: BookData = {
  id: 'mecca-b1-en',
  title: 'Stories of the Prophets: Mecca (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: meccaB1Parallel.englishPages,
  teacherGuide: meccaB1GuidesEn.teacherGuide,
  teacherGuideMetadata: meccaB1TeacherGuideMetadata,
  selfStudyGuide: meccaB1GuidesEn.selfStudyGuide,
  studentGuideSections: meccaB1StudentGuideSections,
  studentGuideText: meccaB1StudentGuideText,
  studentGuideMetadata: meccaB1StudentGuideMetadata,
};

export const meccaB1BookDataAr: BookData = {
  id: 'mecca-b1-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: meccaB1Parallel.arabicPages,
  teacherGuide: meccaB1GuidesAr.teacherGuide,
  teacherGuideMetadata: meccaB1TeacherGuideMetadataAr,
  selfStudyGuide: meccaB1GuidesAr.selfStudyGuide,
  studentGuideSections: meccaB1StudentGuideSectionsAr,
  studentGuideText: meccaB1StudentGuideTextAr,
  studentGuideMetadata: meccaB1StudentGuideMetadataAr,
};

export const meccaB1BookData = meccaB1BookDataEn;
