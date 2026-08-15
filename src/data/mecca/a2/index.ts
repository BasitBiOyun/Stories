import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import {
  meccaA2HighlightConfig,
  meccaA2HighlightTargets,
  meccaA2PagesFinalAr,
  meccaA2PagesFinalEn,
  meccaA2SelfStudyGuideFinalAr,
  meccaA2SelfStudyGuideFinalEn,
  meccaA2StudentGuideMetadataFinalAr,
  meccaA2StudentGuideMetadataFinalEn,
  meccaA2StudentGuideSectionsFinalAr,
  meccaA2StudentGuideSectionsFinalEn,
  meccaA2StudentGuideTextFinalAr,
  meccaA2StudentGuideTextFinalEn,
  meccaA2TeacherGuideFinalAr,
  meccaA2TeacherGuideFinalEn,
  meccaA2TeacherGuideMetadataFinalAr,
  meccaA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const meccaA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(meccaA2PagesFinalEn, 'mecca', 'en'),
  meccaA2HighlightConfig,
  'en',
);
const meccaA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(meccaA2PagesFinalAr, 'mecca', 'ar'),
  meccaA2HighlightConfig,
  'ar',
);

validateA2HighlightStandard(meccaA2PagesLockedEn, meccaA2PagesLockedAr, meccaA2HighlightTargets, meccaA2HighlightConfig);

export const meccaA2BookDataEn: BookData = {
  id: 'mecca-a2-en',
  title: 'Bilal ibn Rabah and Mecca (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: meccaA2PagesLockedEn,
  teacherGuide: meccaA2TeacherGuideFinalEn,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: meccaA2SelfStudyGuideFinalEn,
  studentGuideSections: meccaA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: meccaA2StudentGuideMetadataFinalEn,
  studentGuideText: meccaA2StudentGuideTextFinalEn,
};

export const meccaA2BookDataAr: BookData = {
  id: 'mecca-a2-ar',
  title: 'بلال بن رباح ومكة (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: meccaA2PagesLockedAr,
  teacherGuide: meccaA2TeacherGuideFinalAr,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: meccaA2SelfStudyGuideFinalAr,
  studentGuideSections: meccaA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: meccaA2StudentGuideMetadataFinalAr,
  studentGuideText: meccaA2StudentGuideTextFinalAr,
};

export const meccaA2BookData = meccaA2BookDataEn;
