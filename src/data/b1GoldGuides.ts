import type { PageData } from '../types';
import { buildLearningGuides } from './learningGuideSystem';

type Language = 'en' | 'ar';

/** Compatibility wrapper. B1 uses the same Learning Guide System as A2 and B2. */
export const buildB1EvidenceGuides = (effectivePages: PageData[], language: Language) =>
  buildLearningGuides({
    pages: effectivePages,
    storyIds: effectivePages.filter((page) => page.type === 'story').map((page) => page.id),
    level: 'B1',
    language,
  });
