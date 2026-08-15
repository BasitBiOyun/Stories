import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { buildA2ChapterTeacherGuide } from '../../a2ChapterTeacherGuide';
import { buildA2ChapterSelfStudyGuide } from '../../a2ChapterSelfStudyGuide';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import { applyValidatedA2ParallelLearning } from '../../a2ParallelLearningGuard';
import { applyYunusA2PoemCard } from './poemCard';
import { yunusA2GoldConfig } from './gold';
import {
  yunusA2HighlightConfig,
  yunusA2HighlightTargets,
  yunusA2PagesFinalAr,
  yunusA2PagesFinalEn,
  yunusA2StudentGuideMetadataFinalAr,
  yunusA2StudentGuideMetadataFinalEn,
  yunusA2StudentGuideSectionsFinalAr,
  yunusA2StudentGuideSectionsFinalEn,
  yunusA2StudentGuideTextFinalAr,
  yunusA2StudentGuideTextFinalEn,
  yunusA2TeacherGuideMetadataFinalAr,
  yunusA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const yunusA2StoryIds = Array.from({ length: 8 }, (_, index) => index + 1);

const yunusA2PagesLockedEn = applyYunusA2PoemCard(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(yunusA2PagesFinalEn, 'yunusEmre', 'en'),
    yunusA2HighlightConfig,
    'en',
  ),
);
const yunusA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(yunusA2PagesFinalAr, 'yunusEmre', 'ar'),
  yunusA2HighlightConfig,
  'ar',
);

validateA2HighlightStandard(yunusA2PagesLockedEn, yunusA2PagesLockedAr, yunusA2HighlightTargets, yunusA2HighlightConfig);

const yunusA2Parallel = applyValidatedA2ParallelLearning({
  englishPages: yunusA2PagesLockedEn,
  arabicPages: yunusA2PagesLockedAr,
  config: yunusA2GoldConfig,
});

const yunusA2TeacherGuideEn = buildA2ChapterTeacherGuide(yunusA2Parallel.englishPages, yunusA2StoryIds, 'en');
const yunusA2TeacherGuideAr = buildA2ChapterTeacherGuide(yunusA2Parallel.arabicPages, yunusA2StoryIds, 'ar');
const yunusA2SelfStudyGuideEn = buildA2ChapterSelfStudyGuide(yunusA2Parallel.englishPages, yunusA2StoryIds, 'en');
const yunusA2SelfStudyGuideAr = buildA2ChapterSelfStudyGuide(yunusA2Parallel.arabicPages, yunusA2StoryIds, 'ar');

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Yunus Emre: Faith, Character, and Poetry (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: yunusA2Parallel.englishPages,
  teacherGuide: yunusA2TeacherGuideEn,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: yunusA2SelfStudyGuideEn,
  studentGuideSections: yunusA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalEn,
  studentGuideText: yunusA2StudentGuideTextFinalEn,
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'يونس إمره: الإيمان والأخلاق والشعر (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: yunusA2Parallel.arabicPages,
  teacherGuide: yunusA2TeacherGuideAr,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: yunusA2SelfStudyGuideAr,
  studentGuideSections: yunusA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalAr,
  studentGuideText: yunusA2StudentGuideTextFinalAr,
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
