import { BookData } from '../../../types';
import { runB1BlueprintSystem } from '../../b1BlueprintSystem';
import {
  buildB1GoldStudentGuideMetadata,
  buildB1GoldStudentGuideSections,
  buildB1GoldStudentGuideText,
  buildB1GoldTeacherGuideMetadata,
} from '../../b1GoldGuides';
import { finalizeB1LearningBlueprint } from '../../b1GoldPedagogy';
import { buildB1GoldReview } from '../../b1GoldReview';
import { applyB1CuratedVocabulary, applyB1GoldReview, prepareB1GoldLearningStructure } from '../../b1GoldStructure';
import { mosesB1TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB1LearningBlueprint } from './learningBlueprint';
import { mosesB1BlueprintConfig } from './config';
import { mosesB1HighlightTargets, mosesB1SourcePagesAr, mosesB1SourcePagesEn } from './source';

export { mosesB1HighlightTargets };

const story = 'moses' as const;
const prepared = prepareB1GoldLearningStructure({
  englishPages: mosesB1SourcePagesEn,
  arabicPages: mosesB1SourcePagesAr,
  config: mosesB1BlueprintConfig,
});
const goldBlueprint = finalizeB1LearningBlueprint(mosesB1LearningBlueprint, story);
const compiled = runB1BlueprintSystem({
  englishPages: prepared.englishPages,
  arabicPages: prepared.arabicPages,
  config: prepared.config,
  blueprint: goldBlueprint,
});

const curatedVocabulary = [
  'dictatorial', 'heartless', 'accidentally', 'guided', 'spring',
  'companion', 'arrogant', 'seized', 'enslave', 'visible',
] as const;

const pagesEn = applyB1CuratedVocabulary(
  applyB1GoldReview(compiled.englishPages, prepared.config.reviewPageId, buildB1GoldReview(story, 'en')),
  goldBlueprint, prepared.config.vocabularyPageId, 'en', curatedVocabulary,
);
const pagesAr = applyB1CuratedVocabulary(
  applyB1GoldReview(compiled.arabicPages, prepared.config.reviewPageId, buildB1GoldReview(story, 'ar')),
  goldBlueprint, prepared.config.vocabularyPageId, 'ar', curatedVocabulary,
);

const teacherMetadataEn = buildB1GoldTeacherGuideMetadata(mosesB1TeacherGuideMetadata, story, 'en', prepared.config.storyIds.length);
const teacherMetadataAr = buildB1GoldTeacherGuideMetadata(mosesB1TeacherGuideMetadataAr, story, 'ar', prepared.config.storyIds.length);

export const mosesB1GoldConfig = prepared.config;

export const mosesB1BookDataEn: BookData = {
  id: 'moses-b1-en',
  title: 'Stories of the Prophets: Moses (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: pagesEn,
  teacherGuide: compiled.englishTeacherGuide,
  teacherGuideMetadata: teacherMetadataEn,
  selfStudyGuide: compiled.englishSelfStudyGuide,
  studentGuideSections: buildB1GoldStudentGuideSections(story, 'en'),
  studentGuideText: buildB1GoldStudentGuideText(goldBlueprint, story, 'en'),
  studentGuideMetadata: buildB1GoldStudentGuideMetadata(story, 'en'),
};

export const mosesB1BookDataAr: BookData = {
  id: 'moses-b1-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: pagesAr,
  teacherGuide: compiled.arabicTeacherGuide,
  teacherGuideMetadata: teacherMetadataAr,
  selfStudyGuide: compiled.arabicSelfStudyGuide,
  studentGuideSections: buildB1GoldStudentGuideSections(story, 'ar'),
  studentGuideText: buildB1GoldStudentGuideText(goldBlueprint, story, 'ar'),
  studentGuideMetadata: buildB1GoldStudentGuideMetadata(story, 'ar'),
};

export const mosesB1BookData = mosesB1BookDataEn;
