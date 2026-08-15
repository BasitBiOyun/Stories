import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { buildA2ChapterTeacherGuide } from '../../a2ChapterTeacherGuide';
import { buildA2ChapterSelfStudyGuide } from '../../a2ChapterSelfStudyGuide';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import { sanitizeA2PlaceholderMedia } from '../../a2PlaceholderMedia';
import {
  meccaA2HighlightConfig,
  meccaA2HighlightTargets,
  meccaA2PagesFinalAr,
  meccaA2PagesFinalEn,
  meccaA2StudentGuideMetadataFinalAr,
  meccaA2StudentGuideMetadataFinalEn,
  meccaA2StudentGuideSectionsFinalAr,
  meccaA2StudentGuideSectionsFinalEn,
  meccaA2StudentGuideTextFinalAr,
  meccaA2StudentGuideTextFinalEn,
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

const meccaA2TeacherGuideEn = buildA2ChapterTeacherGuide(meccaA2PagesLockedEn, meccaA2HighlightConfig.storyIds, 'en');
const meccaA2TeacherGuideAr = buildA2ChapterTeacherGuide(meccaA2PagesLockedAr, meccaA2HighlightConfig.storyIds, 'ar');
const meccaA2SelfStudyGuideEn = buildA2ChapterSelfStudyGuide(meccaA2PagesLockedEn, meccaA2HighlightConfig.storyIds, 'en');
const meccaA2SelfStudyGuideAr = buildA2ChapterSelfStudyGuide(meccaA2PagesLockedAr, meccaA2HighlightConfig.storyIds, 'ar');

export const meccaA2BookDataEn: BookData = {
  id: 'mecca-a2-en',
  title: 'Bilal ibn Rabah and Mecca (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: sanitizeA2PlaceholderMedia(meccaA2PagesLockedEn),
  teacherGuide: meccaA2TeacherGuideEn,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: meccaA2SelfStudyGuideEn,
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
  teacherGuide: meccaA2TeacherGuideAr,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: meccaA2SelfStudyGuideAr,
  studentGuideSections: meccaA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: meccaA2StudentGuideMetadataFinalAr,
  studentGuideText: meccaA2StudentGuideTextFinalAr,
};

export const meccaA2BookData = meccaA2BookDataEn;
