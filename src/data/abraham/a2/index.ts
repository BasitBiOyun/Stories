import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { buildA2ChapterTeacherGuide } from '../../a2ChapterTeacherGuide';
import { buildA2ChapterSelfStudyGuide } from '../../a2ChapterSelfStudyGuide';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import {
  abrahamA2HighlightConfig,
  abrahamA2HighlightTargets,
  abrahamA2PagesFinalAr,
  abrahamA2PagesFinalEn,
  abrahamA2StudentGuideMetadataFinalAr,
  abrahamA2StudentGuideMetadataFinalEn,
  abrahamA2StudentGuideSectionsFinalAr,
  abrahamA2StudentGuideSectionsFinalEn,
  abrahamA2StudentGuideTextFinalAr,
  abrahamA2StudentGuideTextFinalEn,
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

const abrahamA2TeacherGuideEn = buildA2ChapterTeacherGuide(abrahamA2PagesLockedEn, abrahamA2HighlightConfig.storyIds, 'en');
const abrahamA2TeacherGuideAr = buildA2ChapterTeacherGuide(abrahamA2PagesLockedAr, abrahamA2HighlightConfig.storyIds, 'ar');
const abrahamA2SelfStudyGuideEn = buildA2ChapterSelfStudyGuide(abrahamA2PagesLockedEn, abrahamA2HighlightConfig.storyIds, 'en');
const abrahamA2SelfStudyGuideAr = buildA2ChapterSelfStudyGuide(abrahamA2PagesLockedAr, abrahamA2HighlightConfig.storyIds, 'ar');

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en',
  title: 'Stories of the Prophets: Abraham (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: abrahamA2PagesLockedEn,
  teacherGuide: abrahamA2TeacherGuideEn,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: abrahamA2SelfStudyGuideEn,
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
  teacherGuide: abrahamA2TeacherGuideAr,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: abrahamA2SelfStudyGuideAr,
  studentGuideSections: abrahamA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalAr,
  studentGuideText: abrahamA2StudentGuideTextFinalAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
