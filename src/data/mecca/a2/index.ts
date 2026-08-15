import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { buildA2ChapterTeacherGuide } from '../../a2ChapterTeacherGuide';
import { buildA2ChapterSelfStudyGuide } from '../../a2ChapterSelfStudyGuide';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import { applyA2HotspotCopyOverrides } from '../../a2HotspotCopyOverrides';
import { applyValidatedA2ParallelLearning } from '../../a2ParallelLearningGuard';
import { meccaA2GoldConfig } from './gold';
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
const meccaA2PagesLockedAr = applyA2HotspotCopyOverrides(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(meccaA2PagesFinalAr, 'mecca', 'ar'),
    meccaA2HighlightConfig,
    'ar',
  ),
  {
    6: {
      'h6-2': {
        title: 'أَبُو بَكْرٍ',
        description: 'كَانَ أَبُو بَكْرٍ رَجُلًا لَطِيفًا جِدًّا، وَكَانَ الْجَمِيعُ يَعْرِفُونَ أَنَّهُ كَانَ طَيِّبًا جِدًّا مَعَ الْعَبِيدِ.',
      },
    },
    11: {
      'h11-2': {
        title: 'الْأَذَانُ الْأَوَّلُ',
        description: 'بَعْدَ الْهِجْرَةِ، أَرَادَ الرَّسُولُ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ شَخْصًا يُنَادِي النَّاسَ إِلَى الصَّلاةِ، فَاخْتَارَ بِلالًا.',
      },
    },
  },
);

validateA2HighlightStandard(meccaA2PagesLockedEn, meccaA2PagesLockedAr, meccaA2HighlightTargets, meccaA2HighlightConfig);

const meccaA2Parallel = applyValidatedA2ParallelLearning({
  englishPages: meccaA2PagesLockedEn,
  arabicPages: meccaA2PagesLockedAr,
  config: meccaA2GoldConfig,
});

const meccaA2TeacherGuideEn = buildA2ChapterTeacherGuide(meccaA2Parallel.englishPages, meccaA2HighlightConfig.storyIds, 'en');
const meccaA2TeacherGuideAr = buildA2ChapterTeacherGuide(meccaA2Parallel.arabicPages, meccaA2HighlightConfig.storyIds, 'ar');
const meccaA2SelfStudyGuideEn = buildA2ChapterSelfStudyGuide(meccaA2Parallel.englishPages, meccaA2HighlightConfig.storyIds, 'en');
const meccaA2SelfStudyGuideAr = buildA2ChapterSelfStudyGuide(meccaA2Parallel.arabicPages, meccaA2HighlightConfig.storyIds, 'ar');

export const meccaA2BookDataEn: BookData = {
  id: 'mecca-a2-en',
  title: 'Bilal ibn Rabah and Mecca (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: meccaA2Parallel.englishPages,
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
  pages: meccaA2Parallel.arabicPages,
  teacherGuide: meccaA2TeacherGuideAr,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: meccaA2SelfStudyGuideAr,
  studentGuideSections: meccaA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: meccaA2StudentGuideMetadataFinalAr,
  studentGuideText: meccaA2StudentGuideTextFinalAr,
};

export const meccaA2BookData = meccaA2BookDataEn;
