import type { PageData, TeacherGuideSection } from '../types';
import { buildLearningGuides } from './learningGuideSystem';

export type A2SelfStudyLanguage = 'en' | 'ar';

/** Compatibility wrapper. All levels use the same Learning Guide System. */
export const buildA2ChapterSelfStudyGuide = (
  finalizedPages: PageData[],
  storyIds: number[],
  language: A2SelfStudyLanguage,
): TeacherGuideSection[] => buildLearningGuides({
  pages: finalizedPages,
  storyIds,
  level: 'A2',
  language,
}).selfStudyGuide;
