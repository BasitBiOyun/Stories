import type { PageData, TeacherGuideSection } from '../types';
import {
  applyA2SourceHotspots,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuideMetadata,
  type A2BookLanguage,
  type A2HotspotMap,
} from './a2BookSupport';

/**
 * Temporary source-compatibility aliases for the old per-book hotspot-map modules.
 * This file is no longer a learning system: it does not select, generate, reuse,
 * or rewrite any Quick/Knowledge/Review/Final question and it does not author guides.
 * All A2 learning material is produced only by a reviewed manual blueprint through
 * a2BlueprintSystem.ts.
 */
export type A2GoldLanguage = A2BookLanguage;
export type { A2HotspotMap };

export interface A2GoldPageConfig {
  storyIds: number[];
  knowledgeCheckPageId: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
}

export const applyA2GoldPages = ({
  canonicalPages,
  hotspotMap,
  config,
}: {
  canonicalPages: PageData[];
  hotspotMap: A2HotspotMap;
  config: A2GoldPageConfig;
  language: A2GoldLanguage;
}): PageData[] => applyA2SourceHotspots({
  pages: canonicalPages,
  storyIds: config.storyIds,
  hotspotMap,
});

// These exports keep old source-map modules loadable while they are flattened.
// Runtime book indexes never consume them; chapter guides come from blueprints.
export const buildA2TeacherGuide = (): TeacherGuideSection[] => [];
export const buildA2SelfStudyGuide = (): TeacherGuideSection[] => [];

export {
  buildA2TeacherGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideText,
};
