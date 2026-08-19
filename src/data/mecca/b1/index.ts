import { BookData } from '../../../types';
import { runB1BlueprintSystem } from '../../b1BlueprintSystem';
import { polishB1GuideSections } from '../../b1GuidePresentation';
import {
  buildB1GoldStudentGuideMetadata,
  buildB1GoldTeacherGuideMetadata,
} from '../../b1GoldGuides';
import { finalizeB1LearningBlueprint } from '../../b1GoldPedagogy';
import { buildB1GoldReview } from '../../b1GoldReview';
import { applyB1CuratedVocabulary, applyB1GoldReview, prepareB1GoldLearningStructure } from '../../b1GoldStructure';
import {
  buildB1FriendlyStudentGuideSections,
  buildB1FriendlyStudentGuideText,
} from '../../b1StudentFriendlyGuide';
import { meccaB1TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB1LearningBlueprint } from './learningBlueprint';
import { meccaB1BlueprintConfig } from './config';
import { meccaB1HighlightTargets, meccaB1SourcePagesAr, meccaB1SourcePagesEn } from './source';

export { meccaB1HighlightTargets };

const story = 'mecca' as const;
const prepared = prepareB1GoldLearningStructure({
  englishPages: meccaB1SourcePagesEn,
  arabicPages: meccaB1SourcePagesAr,
  config: meccaB1BlueprintConfig,
});
const goldBlueprint = finalizeB1LearningBlueprint(meccaB1LearningBlueprint, story);
const compiled = runB1BlueprintSystem({
  englishPages: prepared.englishPages,
  arabicPages: prepared.arabicPages,
  config: prepared.config,
  blueprint: goldBlueprint,
});

const curatedVocabulary = [
  'Jahiliyyah', 'barren', 'caravan', 'pilgrimage', 'usury',
  'prestige', 'monotheism', 'revelation', 'boycott', 'equality',
] as const;

const pagesEn = applyB1CuratedVocabulary(
  applyB1GoldReview(compiled.englishPages, prepared.config.reviewPageId, buildB1GoldReview(story, 'en')),
  goldBlueprint, prepared.config.vocabularyPageId, 'en', curatedVocabulary,
);
const pagesAr = applyB1CuratedVocabulary(
  applyB1GoldReview(compiled.arabicPages, prepared.config.reviewPageId, buildB1GoldReview(story, 'ar')),
  goldBlueprint, prepared.config.vocabularyPageId, 'ar', curatedVocabulary,
);

const teacherMetadataEn = buildB1GoldTeacherGuideMetadata(meccaB1TeacherGuideMetadata, story, 'en', prepared.config.storyIds.length);
const teacherMetadataAr = buildB1GoldTeacherGuideMetadata(meccaB1TeacherGuideMetadataAr, story, 'ar', prepared.config.storyIds.length);
const teacherGuideEn = polishB1GuideSections(compiled.englishTeacherGuide, goldBlueprint, 'en', 'teacher');
const teacherGuideAr = polishB1GuideSections(compiled.arabicTeacherGuide, goldBlueprint, 'ar', 'teacher');
const selfStudyGuideEn = polishB1GuideSections(compiled.englishSelfStudyGuide, goldBlueprint, 'en', 'self');
const selfStudyGuideAr = polishB1GuideSections(compiled.arabicSelfStudyGuide, goldBlueprint, 'ar', 'self');
const studentSectionsEn = buildB1FriendlyStudentGuideSections('en');
const studentSectionsAr = buildB1FriendlyStudentGuideSections('ar');
const studentTextEn = buildB1FriendlyStudentGuideText(goldBlueprint, story, 'en');
const studentTextAr = buildB1FriendlyStudentGuideText(goldBlueprint, story, 'ar');

export const meccaB1GoldConfig = prepared.config;

export const meccaB1BookDataEn: BookData = {
  id: 'mecca-b1-en',
  title: 'Stories of the Prophets: Mecca (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: pagesEn,
  teacherGuide: teacherGuideEn,
  teacherGuideMetadata: teacherMetadataEn,
  selfStudyGuide: selfStudyGuideEn,
  studentGuideSections: studentSectionsEn,
  studentGuideText: studentTextEn,
  studentGuideMetadata: buildB1GoldStudentGuideMetadata(story, 'en'),
};

export const meccaB1BookDataAr: BookData = {
  id: 'mecca-b1-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: pagesAr,
  teacherGuide: teacherGuideAr,
  teacherGuideMetadata: teacherMetadataAr,
  selfStudyGuide: selfStudyGuideAr,
  studentGuideSections: studentSectionsAr,
  studentGuideText: studentTextAr,
  studentGuideMetadata: buildB1GoldStudentGuideMetadata(story, 'ar'),
};

export const meccaB1BookData = meccaB1BookDataEn;
