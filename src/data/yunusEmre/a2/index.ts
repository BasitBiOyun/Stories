import { BookData, PageData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights } from '../../a2HighlightStandard';
import { applyA2HotspotCopyOverrides } from '../../a2HotspotCopyOverrides';
import { runA2BlueprintSystem } from '../../a2BlueprintSystem';
import { applyYunusA2PoemCard } from './poemCard';
import { yunusA2GoldConfig } from './gold';
import { yunusA2GoldLearningBlueprint } from './goldLearningBlueprint';
import {
  applyYunusA2GoldVocabularyChallenge,
  buildYunusA2GoldStudentGuideSections,
  buildYunusA2GoldTeacherGuideMetadata,
} from './goldGuides';
import {
  yunusA2HighlightConfig,
  yunusA2PagesFinalAr,
  yunusA2PagesFinalEn,
  yunusA2StudentGuideMetadataFinalAr,
  yunusA2StudentGuideMetadataFinalEn,
  yunusA2TeacherGuideMetadataFinalAr,
  yunusA2TeacherGuideMetadataFinalEn,
} from './goldFinal';
import { buildYunusA2GoldStudentGuideText } from './studentGuideText';

const yunusA2PagesLockedEn = applyYunusA2PoemCard(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(yunusA2PagesFinalEn, 'yunusEmre', 'en'),
    yunusA2HighlightConfig,
    'en',
  ),
);
const yunusA2PagesLockedAr = applyA2HotspotCopyOverrides(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(yunusA2PagesFinalAr, 'yunusEmre', 'ar'),
    yunusA2HighlightConfig,
    'ar',
  ),
  {
    4: {
      'h4-2': {
        title: 'الْحَطَبُ الْمُعْوَجُّ',
        description: 'لَمْ يَقْطَعْ يونُس وَلَمْ يُحْضِرْ أَبَدًا حَطَبًا أَخْضَرَ أَوْ مُعْوَجًّا.',
      },
    },
  },
);

const yunusA2 = runA2BlueprintSystem({
  englishPages: yunusA2PagesLockedEn,
  arabicPages: yunusA2PagesLockedAr,
  config: yunusA2GoldConfig,
  blueprint: yunusA2GoldLearningBlueprint,
});

const restoreReviewActivities = (generatedPages: PageData[], sourcePages: PageData[]): PageData[] => {
  const sourceReview = sourcePages.find(page => page.id === yunusA2GoldConfig.reviewPageId);
  if (!sourceReview?.exercises?.length) return generatedPages;
  return generatedPages.map(page => page.id === yunusA2GoldConfig.reviewPageId
    ? { ...page, exercises: sourceReview.exercises }
    : page);
};

const goldPagesEn = applyYunusA2GoldVocabularyChallenge(
  restoreReviewActivities(yunusA2.englishPages, yunusA2PagesLockedEn),
  yunusA2GoldLearningBlueprint,
  'en',
);
const goldPagesAr = applyYunusA2GoldVocabularyChallenge(
  restoreReviewActivities(yunusA2.arabicPages, yunusA2PagesLockedAr),
  yunusA2GoldLearningBlueprint,
  'ar',
);

const teacherMetadataEn = buildYunusA2GoldTeacherGuideMetadata(yunusA2TeacherGuideMetadataFinalEn, 'en');
const teacherMetadataAr = buildYunusA2GoldTeacherGuideMetadata(yunusA2TeacherGuideMetadataFinalAr, 'ar');
const studentSectionsEn = buildYunusA2GoldStudentGuideSections('en');
const studentSectionsAr = buildYunusA2GoldStudentGuideSections('ar');
const studentTextEn = buildYunusA2GoldStudentGuideText(yunusA2GoldLearningBlueprint, 'en');
const studentTextAr = buildYunusA2GoldStudentGuideText(yunusA2GoldLearningBlueprint, 'ar');

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Yunus Emre: Faith, Character, and Poetry (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: goldPagesEn,
  teacherGuide: yunusA2.englishTeacherGuide,
  teacherGuideMetadata: teacherMetadataEn,
  selfStudyGuide: yunusA2.englishSelfStudyGuide,
  studentGuideSections: studentSectionsEn,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalEn,
  studentGuideText: studentTextEn,
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'يونس إمره: الإيمان والأخلاق والشعر (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: goldPagesAr,
  teacherGuide: yunusA2.arabicTeacherGuide,
  teacherGuideMetadata: teacherMetadataAr,
  selfStudyGuide: yunusA2.arabicSelfStudyGuide,
  studentGuideSections: studentSectionsAr,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalAr,
  studentGuideText: studentTextAr,
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
