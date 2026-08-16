import type { BookData } from '../../../types';
import { runB2BlueprintSystem } from '../../b2BlueprintSystem';
import { yunusEmreB2LearningBlueprint } from './learningBlueprint';
import { yunusEmreB2BlueprintConfig } from './config';
import {
  yunusEmreB2HighlightTargets,
  yunusEmreB2SourcePagesAr,
  yunusEmreB2SourcePagesEn,
} from './source';
import {
  yunusEmreB2StudentGuideMetadataBlueprintAr,
  yunusEmreB2StudentGuideMetadataBlueprintEn,
  yunusEmreB2StudentGuideSectionsBlueprintAr,
  yunusEmreB2StudentGuideSectionsBlueprintEn,
  yunusEmreB2StudentGuideTextBlueprintAr,
  yunusEmreB2StudentGuideTextBlueprintEn,
  yunusEmreB2TeacherGuideMetadataBlueprintAr,
  yunusEmreB2TeacherGuideMetadataBlueprintEn,
} from './support';

export { yunusEmreB2HighlightTargets };

const yunusEmreB2Blueprint = runB2BlueprintSystem({
  englishPages: yunusEmreB2SourcePagesEn,
  arabicPages: yunusEmreB2SourcePagesAr,
  config: yunusEmreB2BlueprintConfig,
  blueprint: yunusEmreB2LearningBlueprint,
});

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Stories of the Prophets: Yunus Emre (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: yunusEmreB2Blueprint.englishPages,
  teacherGuide: yunusEmreB2Blueprint.englishTeacherGuide,
  teacherGuideMetadata: yunusEmreB2TeacherGuideMetadataBlueprintEn,
  selfStudyGuide: yunusEmreB2Blueprint.englishSelfStudyGuide,
  studentGuideSections: yunusEmreB2StudentGuideSectionsBlueprintEn,
  studentGuideText: yunusEmreB2StudentGuideTextBlueprintEn,
  studentGuideMetadata: yunusEmreB2StudentGuideMetadataBlueprintEn,
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'قصص الأنبياء: يونس إمره (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: yunusEmreB2Blueprint.arabicPages,
  teacherGuide: yunusEmreB2Blueprint.arabicTeacherGuide,
  teacherGuideMetadata: yunusEmreB2TeacherGuideMetadataBlueprintAr,
  selfStudyGuide: yunusEmreB2Blueprint.arabicSelfStudyGuide,
  studentGuideSections: yunusEmreB2StudentGuideSectionsBlueprintAr,
  studentGuideText: yunusEmreB2StudentGuideTextBlueprintAr,
  studentGuideMetadata: yunusEmreB2StudentGuideMetadataBlueprintAr,
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
