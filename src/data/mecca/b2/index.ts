import type { BookData } from '../../../types';
import { runB2BlueprintSystem } from '../../b2BlueprintSystem';
import { polishB2GuideSections } from '../../b2GuidePresentation';
import {
  buildB2FriendlyStudentGuideSections,
  buildB2FriendlyStudentGuideText,
  buildB2GoldStudentGuideMetadata,
  buildB2GoldTeacherGuideMetadata,
} from '../../b2GoldGuides';
import { finalizeB2LearningBlueprint } from '../../b2GoldPedagogy';
import { buildB2GoldReview } from '../../b2GoldReview';
import {
  applyB2CuratedVocabulary,
  applyB2GoldReview,
  prepareB2GoldLearningStructure,
} from '../../b2GoldStructure';
import { meccaB2LearningBlueprint } from './learningBlueprint';
import { meccaB2BlueprintConfig } from './config';
import { meccaB2HighlightTargets, meccaB2SourcePagesAr, meccaB2SourcePagesEn } from './source';
import {
  meccaB2TeacherGuideMetadataBlueprintAr,
  meccaB2TeacherGuideMetadataBlueprintEn,
} from './support';

export { meccaB2HighlightTargets };

const story = 'mecca' as const;
const prepared = prepareB2GoldLearningStructure({
  englishPages: meccaB2SourcePagesEn,
  arabicPages: meccaB2SourcePagesAr,
  config: meccaB2BlueprintConfig,
});
const goldBlueprint = finalizeB2LearningBlueprint(meccaB2LearningBlueprint, story);
const compiled = runB2BlueprintSystem({
  englishPages: prepared.englishPages,
  arabicPages: prepared.arabicPages,
  config: prepared.config,
  blueprint: goldBlueprint,
});

const curatedVocabulary = [
  'Jahiliyyah', 'peninsula', 'caravan', 'pilgrimage', 'usury',
  'prestige', 'tribe', 'slavery', 'monotheism', 'revelation',
] as const;

const pagesEn = applyB2CuratedVocabulary(
  applyB2GoldReview(compiled.englishPages, prepared.config.reviewPageId, buildB2GoldReview(story, 'en')),
  goldBlueprint,
  prepared.config.vocabularyPageId,
  'en',
  curatedVocabulary,
);
const pagesAr = applyB2CuratedVocabulary(
  applyB2GoldReview(compiled.arabicPages, prepared.config.reviewPageId, buildB2GoldReview(story, 'ar')),
  goldBlueprint,
  prepared.config.vocabularyPageId,
  'ar',
  curatedVocabulary,
);

const teacherGuideEn = polishB2GuideSections(compiled.englishTeacherGuide, goldBlueprint, 'en', 'teacher');
const teacherGuideAr = polishB2GuideSections(compiled.arabicTeacherGuide, goldBlueprint, 'ar', 'teacher');
const selfStudyGuideEn = polishB2GuideSections(compiled.englishSelfStudyGuide, goldBlueprint, 'en', 'self');
const selfStudyGuideAr = polishB2GuideSections(compiled.arabicSelfStudyGuide, goldBlueprint, 'ar', 'self');

export const meccaB2GoldConfig = prepared.config;

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Stories of the Prophets: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: pagesEn,
  teacherGuide: teacherGuideEn,
  teacherGuideMetadata: buildB2GoldTeacherGuideMetadata(meccaB2TeacherGuideMetadataBlueprintEn, story, 'en', prepared.config.storyIds.length),
  selfStudyGuide: selfStudyGuideEn,
  studentGuideSections: buildB2FriendlyStudentGuideSections(story, 'en'),
  studentGuideText: buildB2FriendlyStudentGuideText(goldBlueprint, story, 'en'),
  studentGuideMetadata: buildB2GoldStudentGuideMetadata(story, 'en'),
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: pagesAr,
  teacherGuide: teacherGuideAr,
  teacherGuideMetadata: buildB2GoldTeacherGuideMetadata(meccaB2TeacherGuideMetadataBlueprintAr, story, 'ar', prepared.config.storyIds.length),
  selfStudyGuide: selfStudyGuideAr,
  studentGuideSections: buildB2FriendlyStudentGuideSections(story, 'ar'),
  studentGuideText: buildB2FriendlyStudentGuideText(goldBlueprint, story, 'ar'),
  studentGuideMetadata: buildB2GoldStudentGuideMetadata(story, 'ar'),
};

export const meccaB2BookData = meccaB2BookDataEn;
