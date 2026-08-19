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
const teacherGuideEn = polishB1GuideSections(compiled.englishTeacherGuide, goldBlueprint, 'en', 'teacher');
const teacherGuideAr = polishB1GuideSections(compiled.arabicTeacherGuide, goldBlueprint, 'ar', 'teacher');
const selfStudyGuideEn = polishB1GuideSections(compiled.englishSelfStudyGuide, goldBlueprint, 'en', 'self');
const selfStudyGuideAr = polishB1GuideSections(compiled.arabicSelfStudyGuide, goldBlueprint, 'ar', 'self');
const studentSectionsEn = buildB1FriendlyStudentGuideSections('en');
const studentSectionsAr = buildB1FriendlyStudentGuideSections('ar');
const studentTextEn = buildB1FriendlyStudentGuideText(goldBlueprint, story, 'en');
const studentTextAr = buildB1FriendlyStudentGuideText(goldBlueprint, story, 'ar');

export const mosesB1GoldConfig = prepared.config;

export const mosesB1BookDataEn: BookData = {
  id: 'moses-b1-en',
  title: 'Stories of the Prophets: Moses (B1)',
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

export const mosesB1BookDataAr: BookData = {
  id: 'moses-b1-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B1)',
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

export const mosesB1BookData = mosesB1BookDataEn;
