import { BookData } from '../../../types';
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
import { adamB2TeacherGuideMetadata } from './en/teacherGuide';
import { adamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB2LearningBlueprint } from './learningBlueprint';
import { adamB2BlueprintConfig } from './config';
import { adamB2HighlightTargets, adamB2SourcePagesAr, adamB2SourcePagesEn } from './source';

export { adamB2HighlightTargets };

const story = 'adam' as const;
const prepared = prepareB2GoldLearningStructure({
  englishPages: adamB2SourcePagesEn,
  arabicPages: adamB2SourcePagesAr,
  config: adamB2BlueprintConfig,
});
const goldBlueprint = finalizeB2LearningBlueprint(adamB2LearningBlueprint, story);
const compiled = runB2BlueprintSystem({
  englishPages: prepared.englishPages,
  arabicPages: prepared.arabicPages,
  config: prepared.config,
  blueprint: goldBlueprint,
});

const curatedVocabulary = [
  'origin', 'intellect', 'superiority', 'arrogance', 'deception',
  'repentance', 'sincerity', 'jealousy', 'consequence', 'responsibility',
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

export const adamB2GoldConfig = prepared.config;

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: pagesEn,
  teacherGuide: teacherGuideEn,
  selfStudyGuide: selfStudyGuideEn,
  studentGuideText: buildB2FriendlyStudentGuideText(goldBlueprint, story, 'en'),
  studentGuideSections: buildB2FriendlyStudentGuideSections(story, 'en'),
  teacherGuideMetadata: buildB2GoldTeacherGuideMetadata(adamB2TeacherGuideMetadata, story, 'en', prepared.config.storyIds.length),
  studentGuideMetadata: buildB2GoldStudentGuideMetadata(story, 'en'),
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: pagesAr,
  teacherGuide: teacherGuideAr,
  selfStudyGuide: selfStudyGuideAr,
  studentGuideText: buildB2FriendlyStudentGuideText(goldBlueprint, story, 'ar'),
  studentGuideSections: buildB2FriendlyStudentGuideSections(story, 'ar'),
  teacherGuideMetadata: buildB2GoldTeacherGuideMetadata(adamB2TeacherGuideMetadataAr, story, 'ar', prepared.config.storyIds.length),
  studentGuideMetadata: buildB2GoldStudentGuideMetadata(story, 'ar'),
};
