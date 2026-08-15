import type { PageData } from '../types';
import type { B2GoldLanguage } from './b2GoldFactory';
import { buildLearningGuides } from './learningGuideSystem';

/** Compatibility wrapper. B2 uses the same Learning Guide System as A2 and B1. */
export const buildB2EvidenceGuides = ({
  effectivePages,
  storyIds,
  language,
}: {
  effectivePages: PageData[];
  storyIds: number[];
  language: B2GoldLanguage;
}) => buildLearningGuides({
  pages: effectivePages,
  storyIds,
  level: 'B2',
  language,
});
