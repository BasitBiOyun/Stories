import type { BookData } from '../../../types';
import { runB2BlueprintSystem } from '../../b2BlueprintSystem';
import { polishB2GuideSections } from '../../b2GuidePresentation';
import {
  buildB2FriendlyStudentGuideSections,
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
import { buildB2StudentFriendlyGuideText } from '../../b2StudentFriendlyGuide';
import { makeB2CurriculumVisible } from '../../b2TeacherCurriculumSurface';
import { abrahamB2LearningBlueprint } from './learningBlueprint';
import { abrahamB2BlueprintConfig } from './config';
import {
  abrahamB2HighlightTargets,
  abrahamB2LearningPagesAr,
  abrahamB2LearningPagesEn,
} from './source';
import {
  abrahamB2TeacherGuideMetadataBlueprintAr,
  abrahamB2TeacherGuideMetadataBlueprintEn,
} from './support';

export { abrahamB2HighlightTargets };

const story = 'abraham' as const;
const prepared = prepareB2GoldLearningStructure({
  englishPages: abrahamB2LearningPagesEn,
  arabicPages: abrahamB2LearningPagesAr,
  config: abrahamB2BlueprintConfig,
});
const goldBlueprint = finalizeB2LearningBlueprint(abrahamB2LearningBlueprint, story);
const compiled = runB2BlueprintSystem({
  englishPages: prepared.englishPages,
  arabicPages: prepared.arabicPages,
  config: prepared.config,
  blueprint: goldBlueprint,
});

const curatedVocabulary = [
  'monotheism', 'idolatry', 'hanif', 'guidance', 'miracle',
  'migration', 'sacrifice', 'Zamzam', 'pilgrimage', 'legacy',
] as const;

const pagesEn = applyB2CuratedVocabulary(
  applyB2GoldReview(compiled.englishPages, prepared.config.reviewPageId, buildB2GoldReview(story, 'en')),
  goldBlueprint, prepared.config.vocabularyPageId, 'en', curatedVocabulary,
);
const pagesAr = applyB2CuratedVocabulary(
  applyB2GoldReview(compiled.arabicPages, prepared.config.reviewPageId, buildB2GoldReview(story, 'ar')),
  goldBlueprint, prepared.config.vocabularyPageId, 'ar', curatedVocabulary,
);

const teacherGuideEn = polishB2GuideSections(compiled.englishTeacherGuide, goldBlueprint, 'en', 'teacher');
const teacherGuideAr = polishB2GuideSections(compiled.arabicTeacherGuide, goldBlueprint, 'ar', 'teacher');
const selfStudyGuideEn = polishB2GuideSections(compiled.englishSelfStudyGuide, goldBlueprint, 'en', 'self');
const selfStudyGuideAr = polishB2GuideSections(compiled.arabicSelfStudyGuide, goldBlueprint, 'ar', 'self');

export const abrahamB2GoldConfig = prepared.config;

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: pagesEn,
  teacherGuide: teacherGuideEn,
  teacherGuideMetadata: makeB2CurriculumVisible(
    buildB2GoldTeacherGuideMetadata(abrahamB2TeacherGuideMetadataBlueprintEn, story, 'en', prepared.config.storyIds.length),
    'en',
  ),
  selfStudyGuide: selfStudyGuideEn,
  studentGuideSections: buildB2FriendlyStudentGuideSections(story, 'en'),
  studentGuideText: buildB2StudentFriendlyGuideText(goldBlueprint, story, 'en'),
  studentGuideMetadata: buildB2GoldStudentGuideMetadata(story, 'en'),
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (ع)',
  level: 'B2',
  baseFontSize: 14,
  pages: pagesAr,
  teacherGuide: teacherGuideAr,
  teacherGuideMetadata: makeB2CurriculumVisible(
    buildB2GoldTeacherGuideMetadata(abrahamB2TeacherGuideMetadataBlueprintAr, story, 'ar', prepared.config.storyIds.length),
    'ar',
  ),
  selfStudyGuide: selfStudyGuideAr,
  studentGuideSections: buildB2FriendlyStudentGuideSections(story, 'ar'),
  studentGuideText: buildB2StudentFriendlyGuideText(goldBlueprint, story, 'ar'),
  studentGuideMetadata: buildB2GoldStudentGuideMetadata(story, 'ar'),
};
