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
import {
  applyB1CuratedVocabulary,
  applyB1GoldReview,
  prepareB1GoldLearningStructure,
} from '../../b1GoldStructure';
import { adamB1TeacherGuideMetadata } from './en/teacherGuide';
import { adamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB1LearningBlueprint } from './learningBlueprint';
import { adamB1BlueprintConfig } from './config';
import { adamB1SourcePagesAr, adamB1SourcePagesEn, adamB1HighlightTargets } from './source';

export { adamB1HighlightTargets };

const story = 'adam' as const;
const prepared = prepareB1GoldLearningStructure({
  englishPages: adamB1SourcePagesEn,
  arabicPages: adamB1SourcePagesAr,
  config: adamB1BlueprintConfig,
});
const goldBlueprint = finalizeB1LearningBlueprint(adamB1LearningBlueprint, story);
const compiled = runB1BlueprintSystem({
  englishPages: prepared.englishPages,
  arabicPages: prepared.arabicPages,
  config: prepared.config,
  blueprint: goldBlueprint,
});

const curatedVocabulary = [
  'knowledge', 'intellect', 'arrogant', 'origin', 'deception',
  'repentance', 'sincerity', 'jealousy', 'regret', 'responsibility',
] as const;

const pagesEn = applyB1CuratedVocabulary(
  applyB1GoldReview(compiled.englishPages, prepared.config.reviewPageId, buildB1GoldReview(story, 'en')),
  goldBlueprint,
  prepared.config.vocabularyPageId,
  'en',
  curatedVocabulary,
);
const pagesAr = applyB1CuratedVocabulary(
  applyB1GoldReview(compiled.arabicPages, prepared.config.reviewPageId, buildB1GoldReview(story, 'ar')),
  goldBlueprint,
  prepared.config.vocabularyPageId,
  'ar',
  curatedVocabulary,
);

const teacherMetadataEn = buildB1GoldTeacherGuideMetadata(adamB1TeacherGuideMetadata, story, 'en', prepared.config.storyIds.length);
const teacherMetadataAr = buildB1GoldTeacherGuideMetadata(adamB1TeacherGuideMetadataAr, story, 'ar', prepared.config.storyIds.length);
const studentSectionsEn = buildB1GoldStudentGuideSections(story, 'en');
const studentSectionsAr = buildB1GoldStudentGuideSections(story, 'ar');
const studentMetadataEn = buildB1GoldStudentGuideMetadata(story, 'en');
const studentMetadataAr = buildB1GoldStudentGuideMetadata(story, 'ar');
const studentTextEn = buildB1GoldStudentGuideText(goldBlueprint, story, 'en');
const studentTextAr = buildB1GoldStudentGuideText(goldBlueprint, story, 'ar');

export const adamB1GoldConfig = prepared.config;

export const adamB1BookDataEn: BookData = {
  id: 'b1-prophets-en',
  title: 'Stories of the Prophets: Adam (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: pagesEn,
  teacherGuide: compiled.englishTeacherGuide,
  selfStudyGuide: compiled.englishSelfStudyGuide,
  studentGuideText: studentTextEn,
  studentGuideSections: studentSectionsEn,
  teacherGuideMetadata: teacherMetadataEn,
  studentGuideMetadata: studentMetadataEn,
};

export const adamB1BookDataAr: BookData = {
  id: 'b1-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B1',
  baseFontSize: 14,
  pages: pagesAr,
  teacherGuide: compiled.arabicTeacherGuide,
  selfStudyGuide: compiled.arabicSelfStudyGuide,
  studentGuideText: studentTextAr,
  studentGuideSections: studentSectionsAr,
  teacherGuideMetadata: teacherMetadataAr,
  studentGuideMetadata: studentMetadataAr,
};
