import type { PageData } from '../types';
import type { A2GoldPageConfig } from './a2GoldFactory';
import { runLearningSystem } from './learningSystem';

/**
 * Compatibility entrypoint for existing A2 books.
 * The actual exercise, assessment, parity, media and guide engine is the same
 * level-independent Learning System used by A2, B1 and B2.
 */
export const applyValidatedA2ParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: A2GoldPageConfig;
}) => {
  const output = runLearningSystem({
    englishPages,
    arabicPages,
    config: {
      level: 'A2',
      storyIds: config.storyIds,
      knowledgeCheckPageId: config.knowledgeCheckPageId,
      vocabularyPageId: config.knowledgeCheckPageId + 1,
      reviewPageId: config.reviewPageId,
      glossaryPageIds: config.glossaryPageIds,
      finalChallengePageId: config.finalChallengePageId,
      knowledgeCount: 8,
      vocabularyCount: 6,
      reviewCount: 8,
      finalCount: 10,
    },
  });

  return { englishPages: output.englishPages, arabicPages: output.arabicPages };
};
