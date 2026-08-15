import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import {
  mosesA2HighlightConfig,
  mosesA2HighlightTargets,
  mosesA2PagesFinalAr,
  mosesA2PagesFinalEn,
  mosesA2SelfStudyGuideFinalAr,
  mosesA2SelfStudyGuideFinalEn,
  mosesA2StudentGuideMetadataFinalAr,
  mosesA2StudentGuideMetadataFinalEn,
  mosesA2StudentGuideSectionsFinalAr,
  mosesA2StudentGuideSectionsFinalEn,
  mosesA2StudentGuideTextFinalAr,
  mosesA2StudentGuideTextFinalEn,
  mosesA2TeacherGuideFinalAr,
  mosesA2TeacherGuideFinalEn,
  mosesA2TeacherGuideMetadataFinalAr,
  mosesA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const mosesA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(mosesA2PagesFinalEn, 'musa', 'en'),
  mosesA2HighlightConfig,
  'en',
);
const mosesA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(mosesA2PagesFinalAr, 'musa', 'ar'),
  mosesA2HighlightConfig,
  'ar',
);

validateA2HighlightStandard(mosesA2PagesLockedEn, mosesA2PagesLockedAr, mosesA2HighlightTargets, mosesA2HighlightConfig);

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2PagesLockedEn,
  teacherGuide: mosesA2TeacherGuideFinalEn,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: mosesA2SelfStudyGuideFinalEn,
  studentGuideSections: mosesA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalEn,
  studentGuideText: mosesA2StudentGuideTextFinalEn,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: mosesA2PagesLockedAr,
  teacherGuide: mosesA2TeacherGuideFinalAr,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: mosesA2SelfStudyGuideFinalAr,
  studentGuideSections: mosesA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalAr,
  studentGuideText: mosesA2StudentGuideTextFinalAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
