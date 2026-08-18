import { BookData, PageData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights } from '../../a2HighlightStandard';
import { applyA2HotspotCopyOverrides } from '../../a2HotspotCopyOverrides';
import { runA2BlueprintSystem } from '../../a2BlueprintSystem';
import { meccaA2GoldConfig } from './gold';
import { meccaA2GoldLearningBlueprint } from './goldLearningBlueprint';
import {
  applyMeccaA2GoldVocabularyChallenge,
  buildMeccaA2GoldStudentGuideSections,
  buildMeccaA2GoldTeacherGuideMetadata,
} from './goldGuides';
import {
  meccaA2HighlightConfig,
  meccaA2PagesFinalAr,
  meccaA2PagesFinalEn,
  meccaA2StudentGuideMetadataFinalAr,
  meccaA2StudentGuideMetadataFinalEn,
  meccaA2TeacherGuideMetadataFinalAr,
  meccaA2TeacherGuideMetadataFinalEn,
} from './goldFinal';
import { buildMeccaA2GoldStudentGuideText } from './studentGuideText';

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

const meccaA2 = runA2BlueprintSystem({
  englishPages: meccaA2PagesLockedEn,
  arabicPages: meccaA2PagesLockedAr,
  config: meccaA2GoldConfig,
  blueprint: meccaA2GoldLearningBlueprint,
});

const restoreReviewActivities = (generatedPages: PageData[], sourcePages: PageData[]): PageData[] => {
  const sourceReview = sourcePages.find(page => page.id === meccaA2GoldConfig.reviewPageId);
  if (!sourceReview?.exercises?.length) return generatedPages;
  return generatedPages.map(page => page.id === meccaA2GoldConfig.reviewPageId
    ? { ...page, exercises: sourceReview.exercises }
    : page);
};

const goldPagesEn = applyMeccaA2GoldVocabularyChallenge(
  restoreReviewActivities(meccaA2.englishPages, meccaA2PagesLockedEn),
  meccaA2GoldLearningBlueprint,
  'en',
);
const goldPagesAr = applyMeccaA2GoldVocabularyChallenge(
  restoreReviewActivities(meccaA2.arabicPages, meccaA2PagesLockedAr),
  meccaA2GoldLearningBlueprint,
  'ar',
);

const teacherMetadataEn = buildMeccaA2GoldTeacherGuideMetadata(meccaA2TeacherGuideMetadataFinalEn, 'en');
const teacherMetadataAr = buildMeccaA2GoldTeacherGuideMetadata(meccaA2TeacherGuideMetadataFinalAr, 'ar');
const studentSectionsEn = buildMeccaA2GoldStudentGuideSections('en');
const studentSectionsAr = buildMeccaA2GoldStudentGuideSections('ar');
const studentTextEn = buildMeccaA2GoldStudentGuideText(meccaA2GoldLearningBlueprint, 'en');
const studentTextAr = buildMeccaA2GoldStudentGuideText(meccaA2GoldLearningBlueprint, 'ar');

export const meccaA2BookDataEn: BookData = {
  id: 'mecca-a2-en',
  title: 'Bilal ibn Rabah and Mecca (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: goldPagesEn,
  teacherGuide: meccaA2.englishTeacherGuide,
  teacherGuideMetadata: teacherMetadataEn,
  selfStudyGuide: meccaA2.englishSelfStudyGuide,
  studentGuideSections: studentSectionsEn,
  studentGuideMetadata: meccaA2StudentGuideMetadataFinalEn,
  studentGuideText: studentTextEn,
};

export const meccaA2BookDataAr: BookData = {
  id: 'mecca-a2-ar',
  title: 'بلال بن رباح ومكة (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: goldPagesAr,
  teacherGuide: meccaA2.arabicTeacherGuide,
  teacherGuideMetadata: teacherMetadataAr,
  selfStudyGuide: meccaA2.arabicSelfStudyGuide,
  studentGuideSections: studentSectionsAr,
  studentGuideMetadata: meccaA2StudentGuideMetadataFinalAr,
  studentGuideText: studentTextAr,
};

export const meccaA2BookData = meccaA2BookDataEn;
