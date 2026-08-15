import type { PageData } from '../types';
import type { A2GoldPageConfig } from './a2GoldFactory';
import { runLearningSystem } from './learningSystem';
import { preparePairedLearningSources } from './learningSourcePairing';

/** Compatibility entrypoint. A2 uses the same Learning System as B1/B2. */
export const applyValidatedA2ParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: A2GoldPageConfig;
}) => {
  const paired = preparePairedLearningSources({ englishPages, arabicPages, storyIds: config.storyIds });
  const output = runLearningSystem({
    englishPages: paired.englishPages,
    arabicPages: paired.arabicPages,
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
  return { englishPages: output.englishPages, arabicPages: output.arabicPages };
};
