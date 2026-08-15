import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import {
  abrahamA2HighlightConfig,
  abrahamA2HighlightTargets,
  abrahamA2PagesFinalAr,
  abrahamA2PagesFinalEn,
  abrahamA2SelfStudyGuideFinalAr,
  abrahamA2SelfStudyGuideFinalEn,
  abrahamA2StudentGuideMetadataFinalAr,
  abrahamA2StudentGuideMetadataFinalEn,
  abrahamA2StudentGuideSectionsFinalAr,
  abrahamA2StudentGuideSectionsFinalEn,
  abrahamA2StudentGuideTextFinalAr,
  abrahamA2StudentGuideTextFinalEn,
  abrahamA2TeacherGuideFinalAr,
  abrahamA2TeacherGuideFinalEn,
  abrahamA2TeacherGuideMetadataFinalAr,
  abrahamA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const abrahamA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(abrahamA2PagesFinalEn, 'ibrahim', 'en'),
  abrahamA2HighlightConfig,
  'en',
);
const abrahamA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(abrahamA2PagesFinalAr, 'ibrahim', 'ar'),
  abrahamA2HighlightConfig,
  'ar',
);

validateA2HighlightStandard(abrahamA2PagesLockedEn, abrahamA2PagesLockedAr, abrahamA2HighlightTargets, abrahamA2HighlightConfig);

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en',
  title: 'Stories of the Prophets: Abraham (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: abrahamA2PagesLockedEn,
  teacherGuide: abrahamA2TeacherGuideFinalEn,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: abrahamA2SelfStudyGuideFinalEn,
  studentGuideSections: abrahamA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalEn,
  studentGuideText: abrahamA2StudentGuideTextFinalEn,
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: abrahamA2PagesLockedAr,
  teacherGuide: abrahamA2TeacherGuideFinalAr,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: abrahamA2SelfStudyGuideFinalAr,
  studentGuideSections: abrahamA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalAr,
  studentGuideText: abrahamA2StudentGuideTextFinalAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
