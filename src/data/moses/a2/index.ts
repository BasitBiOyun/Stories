import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import { applyA2HotspotCopyOverrides } from '../../a2HotspotCopyOverrides';
import { applyValidatedA2ParallelLearning } from '../../a2ParallelLearningGuard';
import { mosesA2GoldConfig } from './gold';
import { mosesA2LearningBlueprint } from './learningBlueprint';
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

const removeMisplacedChapterTwoHotspot = (pages: typeof mosesA2PagesFinalEn) => pages.map((page) => (
  page.id === 2 && page.type === 'story'
    ? { ...page, hotspots: (page.hotspots || []).filter((hotspot) => hotspot.id !== 'h2-3') }
    : page
));

const MOSES_A2_CH11_AUDIO = 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fa2%2Faudio%2F10_Chapter_11_The_Signs_of_Allah.mp3?alt=media&token=5ae1efb5-a3ed-4cd0-b6df-e0486199c964';

const fixArabicChapterElevenAudio = (pages: typeof mosesA2PagesFinalAr) => pages.map((page) => (
  page.id === 11 && page.type === 'story'
    ? { ...page, audioUrl: MOSES_A2_CH11_AUDIO }
    : page
));

const mosesA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(removeMisplacedChapterTwoHotspot(mosesA2PagesFinalEn), 'musa', 'en'),
  mosesA2HighlightConfig,
  'en',
);
const mosesA2PagesLockedAr = applyA2HotspotCopyOverrides(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(removeMisplacedChapterTwoHotspot(fixArabicChapterElevenAudio(mosesA2PagesFinalAr)), 'musa', 'ar'),
    mosesA2HighlightConfig,
    'ar',
  ),
  {
    15: {
      'h15-2': {
        title: 'جُدْرَانُ الْمَاءِ',
        description: 'سَارَ مُوسَى عَلَيْهِ السَّلَامُ وَقَوْمُهُ بِأَمَانٍ بَيْنَ جُدْرَانٍ مِنَ الْمَاءِ.',
      },
    },
  },
);

validateA2HighlightStandard(mosesA2PagesLockedEn, mosesA2PagesLockedAr, mosesA2HighlightTargets, mosesA2HighlightConfig);

const mosesA2Parallel = applyValidatedA2ParallelLearning({
  englishPages: mosesA2PagesLockedEn,
  arabicPages: mosesA2PagesLockedAr,
  config: mosesA2GoldConfig,
  blueprint: mosesA2LearningBlueprint,
});

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2Parallel.englishPages,
  teacherGuide: mosesA2Parallel.englishTeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: mosesA2Parallel.englishSelfStudyGuide,
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
  teacherGuide: mosesA2Parallel.arabicTeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: mosesA2Parallel.arabicSelfStudyGuide,
  studentGuideSections: mosesA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalAr,
  studentGuideText: mosesA2StudentGuideTextFinalAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
