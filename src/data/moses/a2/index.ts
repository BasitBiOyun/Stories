import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { buildA2ChapterTeacherGuide } from '../../a2ChapterTeacherGuide';
import { buildA2ChapterSelfStudyGuide } from '../../a2ChapterSelfStudyGuide';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import { applyValidatedA2ParallelLearning } from '../../a2ParallelLearningGuard';
import { mosesA2GoldConfig } from './gold';
import {
  mosesA2HighlightConfig,
  mosesA2HighlightTargets,
  mosesA2PagesFinalAr,
  mosesA2PagesFinalEn,
  mosesA2StudentGuideMetadataFinalAr,
  mosesA2StudentGuideMetadataFinalEn,
  mosesA2StudentGuideSectionsFinalAr,
  mosesA2StudentGuideSectionsFinalEn,
  mosesA2StudentGuideTextFinalAr,
  mosesA2StudentGuideTextFinalEn,
  mosesA2TeacherGuideMetadataFinalAr,
  mosesA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const mosesA2StoryIds = Array.from({ length: 16 }, (_, index) => index + 1);

const removeMisplacedChapterTwoHotspot = (pages: typeof mosesA2PagesFinalEn) => pages.map((page) => (
  page.id === 2 && page.type === 'story'
    ? { ...page, hotspots: (page.hotspots || []).filter((hotspot) => hotspot.id !== 'h2-3') }
    : page
));

const mosesA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(removeMisplacedChapterTwoHotspot(mosesA2PagesFinalEn), 'musa', 'en'),
  mosesA2HighlightConfig,
  'en',
);
const mosesA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(removeMisplacedChapterTwoHotspot(mosesA2PagesFinalAr), 'musa', 'ar'),
  mosesA2HighlightConfig,
  'ar',
);

validateA2HighlightStandard(mosesA2PagesLockedEn, mosesA2PagesLockedAr, mosesA2HighlightTargets, mosesA2HighlightConfig);

const mosesA2Parallel = applyValidatedA2ParallelLearning({
  englishPages: mosesA2PagesLockedEn,
  arabicPages: mosesA2PagesLockedAr,
  config: mosesA2GoldConfig,
});

const mosesA2TeacherGuideFramedEn = buildA2ChapterTeacherGuide(mosesA2Parallel.englishPages, mosesA2StoryIds, 'en');
const mosesA2TeacherGuideFramedAr = buildA2ChapterTeacherGuide(mosesA2Parallel.arabicPages, mosesA2StoryIds, 'ar');
const mosesA2SelfStudyGuideFramedEn = buildA2ChapterSelfStudyGuide(mosesA2Parallel.englishPages, mosesA2StoryIds, 'en');
const mosesA2SelfStudyGuideFramedAr = buildA2ChapterSelfStudyGuide(mosesA2Parallel.arabicPages, mosesA2StoryIds, 'ar');

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2Parallel.englishPages,
  teacherGuide: mosesA2TeacherGuideFramedEn,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: mosesA2SelfStudyGuideFramedEn,
  studentGuideSections: mosesA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalEn,
  studentGuideText: mosesA2StudentGuideTextFinalEn,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: mosesA2Parallel.arabicPages,
  teacherGuide: mosesA2TeacherGuideFramedAr,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: mosesA2SelfStudyGuideFramedAr,
  studentGuideSections: mosesA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalAr,
  studentGuideText: mosesA2StudentGuideTextFinalAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
