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

export const meccaB1GoldConfig = prepared.config;

export const meccaB1BookDataEn: BookData = {
  id: 'mecca-b1-en',
  title: 'Stories of the Prophets: Mecca (B1)',
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

export const meccaB1BookDataAr: BookData = {
  id: 'mecca-b1-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B1)',
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

export const meccaB1BookData = meccaB1BookDataEn;
