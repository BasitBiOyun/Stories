import type { PageData, TeacherGuideSection } from '../types';
import { buildLearningGuides } from './learningGuideSystem';

export type A2TeacherGuideLanguage = 'en' | 'ar';

/** Compatibility wrapper. All levels use the same Learning Guide System. */
export const buildA2ChapterTeacherGuide = (
  finalizedPages: PageData[],
  storyIds: number[],
  language: A2TeacherGuideLanguage,
): TeacherGuideSection[] => buildLearningGuides({
  pages: finalizedPages,
  storyIds,
  level: 'A2',
  language,
}).teacherGuide;
