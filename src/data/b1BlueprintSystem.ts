import type { PageData } from '../types';
import type { LearningBlueprint } from './learningBlueprint';
import { runBlueprintLearningSystem } from './learningBlueprintSystem';
import { preparePairedLearningSources } from './learningSourcePairing';

export interface B1BlueprintConfig {
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId?: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
  knowledgeCount?: number;
  vocabularyCount?: number;
  reviewCount?: number;
  finalCount?: number;
}

/**
 * Single Blueprint entrypoint for migrated B1 books.
 * A migrated B1 book must supply a reviewed manual blueprint; no legacy question
 * bank or guide generator is used by this runtime path.
 */
export const runB1BlueprintSystem = ({
  englishPages,
  arabicPages,
  config,
  blueprint,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: B1BlueprintConfig;
  blueprint: LearningBlueprint;
}) => {
  const paired = preparePairedLearningSources({
    englishPages,
    arabicPages,
    storyIds: config.storyIds,
  });

  return runBlueprintLearningSystem({
    englishPages: paired.englishPages,
    arabicPages: paired.arabicPages,
    blueprint,
    config: {
      level: 'B1',
      storyIds: config.storyIds,
      knowledgeCheckPageId: config.knowledgeCheckPageId,
      vocabularyPageId: config.vocabularyPageId,
      reviewPageId: config.reviewPageId,
      glossaryPageIds: config.glossaryPageIds,
      finalChallengePageId: config.finalChallengePageId,
      knowledgeCount: config.knowledgeCount,
      vocabularyCount: config.vocabularyCount,
      reviewCount: config.reviewCount,
      finalCount: config.finalCount,
    },
  });
};
