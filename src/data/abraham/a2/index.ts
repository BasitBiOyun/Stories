import { BookData, PageData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights } from '../../a2HighlightStandard';
import { applyA2HotspotCopyOverrides } from '../../a2HotspotCopyOverrides';
import { runA2BlueprintSystem } from '../../a2BlueprintSystem';
import { abrahamA2GoldConfig } from './gold';
import {
  applyAbrahamA2GoldVocabularyChallenge,
  buildAbrahamA2GoldStudentGuideSections,
  buildAbrahamA2GoldTeacherGuideMetadata,
} from './goldGuides';
import { abrahamA2GoldLearningBlueprint } from './goldLearningBlueprint';
import {
  abrahamA2HighlightConfig,
  abrahamA2PagesFinalAr,
  abrahamA2PagesFinalEn,
  abrahamA2StudentGuideMetadataFinalAr,
  abrahamA2StudentGuideMetadataFinalEn,
  abrahamA2TeacherGuideMetadataFinalAr,
  abrahamA2TeacherGuideMetadataFinalEn,
} from './goldFinal';
import { buildAbrahamA2GoldStudentGuideText } from './studentGuideText';

const abrahamA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(abrahamA2PagesFinalEn, 'ibrahim', 'en'),
  abrahamA2HighlightConfig,
  'en',
);
const abrahamA2PagesLockedAr = applyA2HotspotCopyOverrides(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(abrahamA2PagesFinalAr, 'ibrahim', 'ar'),
    abrahamA2HighlightConfig,
    'ar',
  ),
  {
    1: {
      h2: {
        title: 'الأشياء الحجرية',
        description: 'كَانَ النَّاسُ يَعْتَقِدُونَ أَنَّ هَذِهِ الْأَشْيَاءَ آلِهَتُهُمْ.',
      },
    },
  },
);

const abrahamA2 = runA2BlueprintSystem({
  englishPages: abrahamA2PagesLockedEn,
  arabicPages: abrahamA2PagesLockedAr,
  config: abrahamA2GoldConfig,
  blueprint: abrahamA2GoldLearningBlueprint,
});

const restoreReviewActivities = (generatedPages: PageData[], sourcePages: PageData[]): PageData[] => {
  const sourceReview = sourcePages.find(page => page.id === abrahamA2GoldConfig.reviewPageId);
  if (!sourceReview?.exercises?.length) return generatedPages;
  return generatedPages.map(page => page.id === abrahamA2GoldConfig.reviewPageId
    ? { ...page, exercises: sourceReview.exercises }
    : page);
};

const abrahamA2GoldPagesEn = applyAbrahamA2GoldVocabularyChallenge(
  restoreReviewActivities(abrahamA2.englishPages, abrahamA2PagesLockedEn),
  abrahamA2GoldLearningBlueprint,
  'en',
);
const abrahamA2GoldPagesAr = applyAbrahamA2GoldVocabularyChallenge(
  restoreReviewActivities(abrahamA2.arabicPages, abrahamA2PagesLockedAr),
  abrahamA2GoldLearningBlueprint,
  'ar',
);

const teacherMetadataEn = buildAbrahamA2GoldTeacherGuideMetadata(abrahamA2TeacherGuideMetadataFinalEn, 'en');
const teacherMetadataAr = buildAbrahamA2GoldTeacherGuideMetadata(abrahamA2TeacherGuideMetadataFinalAr, 'ar');
const studentSectionsEn = buildAbrahamA2GoldStudentGuideSections('en');
const studentSectionsAr = buildAbrahamA2GoldStudentGuideSections('ar');
const studentGuideTextEn = buildAbrahamA2GoldStudentGuideText(abrahamA2GoldLearningBlueprint, 'en');
const studentGuideTextAr = buildAbrahamA2GoldStudentGuideText(abrahamA2GoldLearningBlueprint, 'ar');

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en',
  title: 'Stories of the Prophets: Abraham (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: abrahamA2GoldPagesEn,
  teacherGuide: abrahamA2.englishTeacherGuide,
  teacherGuideMetadata: teacherMetadataEn,
  selfStudyGuide: abrahamA2.englishSelfStudyGuide,
  studentGuideSections: studentSectionsEn,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalEn,
  studentGuideText: studentGuideTextEn,
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: abrahamA2GoldPagesAr,
  teacherGuide: abrahamA2.arabicTeacherGuide,
  teacherGuideMetadata: teacherMetadataAr,
  selfStudyGuide: abrahamA2.arabicSelfStudyGuide,
  studentGuideSections: studentSectionsAr,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalAr,
  studentGuideText: studentGuideTextAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
