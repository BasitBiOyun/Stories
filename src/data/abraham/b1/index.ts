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
import { abrahamB1TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB1LearningBlueprint } from './learningBlueprint';
import { abrahamB1BlueprintConfig } from './config';
import { abrahamB1HighlightTargets, abrahamB1SourcePagesAr, abrahamB1SourcePagesEn } from './source';

export { abrahamB1HighlightTargets };

const story = 'abraham' as const;
const prepared = prepareB1GoldLearningStructure({
  englishPages: abrahamB1SourcePagesEn,
  arabicPages: abrahamB1SourcePagesAr,
  config: abrahamB1BlueprintConfig,
});
const goldBlueprint = finalizeB1LearningBlueprint(abrahamB1LearningBlueprint, story);
const compiled = runB1BlueprintSystem({
  englishPages: prepared.englishPages,
  arabicPages: prepared.arabicPages,
  config: prepared.config,
  blueprint: goldBlueprint,
});

const curatedVocabulary = [
  'Creator', 'idols', 'worshipped', 'guidance', 'Messenger',
  'miracle', 'migration', 'patience', 'Zamzam', 'journey',
] as const;

const pagesEn = applyB1CuratedVocabulary(
  applyB1GoldReview(compiled.englishPages, prepared.config.reviewPageId, buildB1GoldReview(story, 'en')),
  goldBlueprint, prepared.config.vocabularyPageId, 'en', curatedVocabulary,
);
const pagesAr = applyB1CuratedVocabulary(
  applyB1GoldReview(compiled.arabicPages, prepared.config.reviewPageId, buildB1GoldReview(story, 'ar')),
  goldBlueprint, prepared.config.vocabularyPageId, 'ar', curatedVocabulary,
);

const teacherMetadataEn = buildB1GoldTeacherGuideMetadata(abrahamB1TeacherGuideMetadata, story, 'en', prepared.config.storyIds.length);
const teacherMetadataAr = buildB1GoldTeacherGuideMetadata(abrahamB1TeacherGuideMetadataAr, story, 'ar', prepared.config.storyIds.length);

export const abrahamB1GoldConfig = prepared.config;

export const abrahamB1BookDataEn: BookData = {
  id: 'b1-abraham-en',
  title: 'Stories of the Prophets: Abraham (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: pagesEn,
  teacherGuide: compiled.englishTeacherGuide,
  selfStudyGuide: compiled.englishSelfStudyGuide,
  studentGuideText: buildB1GoldStudentGuideText(goldBlueprint, story, 'en'),
  studentGuideSections: buildB1GoldStudentGuideSections(story, 'en'),
  teacherGuideMetadata: teacherMetadataEn,
  studentGuideMetadata: buildB1GoldStudentGuideMetadata(story, 'en'),
};

export const abrahamB1BookDataAr: BookData = {
  id: 'b1-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: pagesAr,
  teacherGuide: compiled.arabicTeacherGuide,
  selfStudyGuide: compiled.arabicSelfStudyGuide,
  studentGuideText: buildB1GoldStudentGuideText(goldBlueprint, story, 'ar'),
  studentGuideSections: buildB1GoldStudentGuideSections(story, 'ar'),
  teacherGuideMetadata: teacherMetadataAr,
  studentGuideMetadata: buildB1GoldStudentGuideMetadata(story, 'ar'),
};

export const abrahamB1BookData = abrahamB1BookDataEn;
