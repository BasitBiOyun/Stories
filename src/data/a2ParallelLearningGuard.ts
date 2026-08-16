import type { PageData } from '../types';
import type { A2GoldPageConfig } from './a2GoldFactory';
import type { LearningBlueprint } from './learningBlueprint';
import { runBlueprintAwareLearningSystem } from './learningBlueprintSystem';
import { preparePairedLearningSources } from './learningSourcePairing';

/** Compatibility entrypoint. A2 uses the same Learning System as B1/B2. */
export const applyValidatedA2ParallelLearning = ({
  englishPages,
  arabicPages,
  config,
  blueprint,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: A2GoldPageConfig;
  blueprint?: LearningBlueprint;
}) => {
  const paired = preparePairedLearningSources({ englishPages, arabicPages, storyIds: config.storyIds });
  return runBlueprintAwareLearningSystem({
    englishPages: paired.englishPages,
    arabicPages: paired.arabicPages,
    blueprint,
    config: {
      level: 'A2',
      storyIds: config.storyIds,
      knowledgeCheckPageId: config.knowledgeCheckPageId,
      vocabularyPageId: config.knowledgeCheckPageId + 1,
      reviewPageId: config.reviewPageId,
      glossaryPageIds: config.glossaryPageIds,
      finalChallengePageId: config.finalChallengePageId,
    },
  });
};
