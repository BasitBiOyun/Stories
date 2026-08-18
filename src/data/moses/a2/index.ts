import { BookData, PageData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights } from '../../a2HighlightStandard';
import { applyA2HotspotCopyOverrides } from '../../a2HotspotCopyOverrides';
import { runA2BlueprintSystem } from '../../a2BlueprintSystem';
import { mosesA2GoldConfig } from './gold';
import {
  applyMosesA2GoldVocabularyChallenge,
  buildMosesA2GoldStudentGuideSections,
  buildMosesA2GoldTeacherGuideMetadata,
} from './goldGuides';
import { mosesA2LearningBlueprint } from './learningBlueprint';
import {
  mosesA2HighlightConfig,
  mosesA2PagesFinalAr,
  mosesA2PagesFinalEn,
  mosesA2StudentGuideMetadataFinalAr,
  mosesA2StudentGuideMetadataFinalEn,
  mosesA2StudentGuideTextFinalAr,
  mosesA2StudentGuideTextFinalEn,
  mosesA2TeacherGuideMetadataFinalAr,
  mosesA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

/** Chapter 2 originally contained a third hotspot copied from Chapter 1 context. */
const keepTwoChapterTwoHotspots = (pages: typeof mosesA2PagesFinalEn) => pages.map((page) => (
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
  applyA2FinalStoryLanguageLock(keepTwoChapterTwoHotspots(mosesA2PagesFinalEn), 'musa', 'en'),
  mosesA2HighlightConfig,
  'en',
);
const mosesA2PagesLockedAr = applyA2HotspotCopyOverrides(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(keepTwoChapterTwoHotspots(fixArabicChapterElevenAudio(mosesA2PagesFinalAr)), 'musa', 'ar'),
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

const mosesA2 = runA2BlueprintSystem({
  englishPages: mosesA2PagesLockedEn,
  arabicPages: mosesA2PagesLockedAr,
  config: mosesA2GoldConfig,
  blueprint: mosesA2LearningBlueprint,
});

/**
 * Blueprint generation owns Knowledge/Final/Quick, but Retrieval Review deliberately
 * keeps the four authored rich activities (sequence, match, reflection, quiz game).
 */
const restoreReviewActivities = (generatedPages: PageData[], sourcePages: PageData[]): PageData[] => {
  const sourceReview = sourcePages.find(page => page.id === mosesA2GoldConfig.reviewPageId);
  if (!sourceReview?.exercises?.length) return generatedPages;

  return generatedPages.map(page => page.id === mosesA2GoldConfig.reviewPageId
    ? { ...page, exercises: sourceReview.exercises }
    : page);
};

const mosesA2GoldPagesEn = applyMosesA2GoldVocabularyChallenge(
  restoreReviewActivities(mosesA2.englishPages, mosesA2PagesLockedEn),
  mosesA2LearningBlueprint,
  'en',
);
const mosesA2GoldPagesAr = applyMosesA2GoldVocabularyChallenge(
  restoreReviewActivities(mosesA2.arabicPages, mosesA2PagesLockedAr),
  mosesA2LearningBlueprint,
  'ar',
);

const mosesA2TeacherGuideMetadataEn = buildMosesA2GoldTeacherGuideMetadata(
  mosesA2TeacherGuideMetadataFinalEn,
  'en',
);
const mosesA2TeacherGuideMetadataAr = buildMosesA2GoldTeacherGuideMetadata(
  mosesA2TeacherGuideMetadataFinalAr,
  'ar',
);
const mosesA2StudentGuideSectionsEn = buildMosesA2GoldStudentGuideSections('en');
const mosesA2StudentGuideSectionsAr = buildMosesA2GoldStudentGuideSections('ar');

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2GoldPagesEn,
  teacherGuide: mosesA2.englishTeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataEn,
  selfStudyGuide: mosesA2.englishSelfStudyGuide,
  studentGuideSections: mosesA2StudentGuideSectionsEn,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalEn,
  studentGuideText: mosesA2StudentGuideTextFinalEn,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: mosesA2GoldPagesAr,
  teacherGuide: mosesA2.arabicTeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataAr,
  selfStudyGuide: mosesA2.arabicSelfStudyGuide,
  studentGuideSections: mosesA2StudentGuideSectionsAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalAr,
  studentGuideText: mosesA2StudentGuideTextFinalAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
