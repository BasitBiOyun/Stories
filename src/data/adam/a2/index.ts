import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights } from '../../a2HighlightStandard';
import { adamA2PagesQualityFinalized, adamA2TeacherGuideQualityFinalized } from './en/qualityFinalization';
import { adamA2TeacherGuideMetadata } from './en/teacherGuide';
import { adamA2SelfStudyGuide, adamA2StudentGuideSections, adamA2StudentGuideText } from './en/selfStudyGuide';

import { adamA2PagesArQualityFinalized, adamA2TeacherGuideArQualityFinalized } from './ar/qualityFinalization';
import { adamA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamA2SelfStudyGuideAr, adamA2StudentGuideSectionsAr, adamA2StudentGuideMetadataAr, adamA2StudentGuideTextAr } from './ar/selfStudyGuide';
import { validateAdamA2HighlightContract } from './highlightValidation';

validateAdamA2HighlightContract(adamA2PagesQualityFinalized, adamA2PagesArQualityFinalized);

const adamGlossaryConfig = {
  storyIds: Array.from({ length: 10 }, (_, index) => index + 1),
  glossaryPageIds: [14, 15] as [number, number],
};

const adamA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(adamA2PagesQualityFinalized, 'adam', 'en'),
  adamGlossaryConfig,
  'en',
);
const adamA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(adamA2PagesArQualityFinalized, 'adam', 'ar'),
  adamGlossaryConfig,
  'ar',
);

export const adamA2BookDataEn: BookData = {
  id: 'a2-prophets-en',
  title: 'Stories of the Prophets: Adam (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: adamA2PagesLockedEn,
  teacherGuide: adamA2TeacherGuideQualityFinalized,
  teacherGuideMetadata: adamA2TeacherGuideMetadata,
  selfStudyGuide: adamA2SelfStudyGuide,
  studentGuideSections: adamA2StudentGuideSections,
  studentGuideText: adamA2StudentGuideText,
};

export const adamA2BookDataAr: BookData = {
  id: 'a2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'A2',
  baseFontSize: 14,
  pages: adamA2PagesLockedAr,
  teacherGuide: adamA2TeacherGuideArQualityFinalized,
  teacherGuideMetadata: adamA2TeacherGuideMetadataAr,
  selfStudyGuide: adamA2SelfStudyGuideAr,
  studentGuideSections: adamA2StudentGuideSectionsAr,
  studentGuideMetadata: adamA2StudentGuideMetadataAr,
  studentGuideText: adamA2StudentGuideTextAr,
};

export const adamA2BookData = adamA2BookDataEn;
