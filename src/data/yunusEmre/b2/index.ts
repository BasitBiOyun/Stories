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
import { yunusEmreB2LearningBlueprint } from './learningBlueprint';
import { yunusEmreB2BlueprintConfig } from './config';
import {
  yunusEmreB2HighlightTargets,
  yunusEmreB2SourcePagesAr,
  yunusEmreB2SourcePagesEn,
} from './source';
import {
  yunusEmreB2TeacherGuideMetadataBlueprintAr,
  yunusEmreB2TeacherGuideMetadataBlueprintEn,
} from './support';

export { yunusEmreB2HighlightTargets };

const story = 'yunusEmre' as const;
const prepared = prepareB2GoldLearningStructure({
  englishPages: yunusEmreB2SourcePagesEn,
  arabicPages: yunusEmreB2SourcePagesAr,
  config: yunusEmreB2BlueprintConfig,
});
const goldBlueprint = finalizeB2LearningBlueprint(yunusEmreB2LearningBlueprint, story);
const compiled = runB2BlueprintSystem({
  englishPages: prepared.englishPages,
  arabicPages: prepared.arabicPages,
  config: prepared.config,
  blueprint: goldBlueprint,
});

const curatedVocabulary = [
  'mysticism', 'dervish', 'tekke', 'uprising', 'invasion',
  'solidarity', 'Tawhid', 'humility', 'generosity', 'patience',
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

export const yunusEmreB2GoldConfig = prepared.config;

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Stories of the Prophets: Yunus Emre (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: pagesEn,
  teacherGuide: teacherGuideEn,
  teacherGuideMetadata: makeB2CurriculumVisible(
    buildB2GoldTeacherGuideMetadata(yunusEmreB2TeacherGuideMetadataBlueprintEn, story, 'en', prepared.config.storyIds.length),
    'en',
  ),
  selfStudyGuide: selfStudyGuideEn,
  studentGuideSections: buildB2FriendlyStudentGuideSections(story, 'en'),
  studentGuideText: buildB2StudentFriendlyGuideText(goldBlueprint, story, 'en'),
  studentGuideMetadata: buildB2GoldStudentGuideMetadata(story, 'en'),
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'قصص الأنبياء: يونس إمره (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: pagesAr,
  teacherGuide: teacherGuideAr,
  teacherGuideMetadata: makeB2CurriculumVisible(
    buildB2GoldTeacherGuideMetadata(yunusEmreB2TeacherGuideMetadataBlueprintAr, story, 'ar', prepared.config.storyIds.length),
    'ar',
  ),
  selfStudyGuide: selfStudyGuideAr,
  studentGuideSections: buildB2FriendlyStudentGuideSections(story, 'ar'),
  studentGuideText: buildB2StudentFriendlyGuideText(goldBlueprint, story, 'ar'),
  studentGuideMetadata: buildB2GoldStudentGuideMetadata(story, 'ar'),
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
