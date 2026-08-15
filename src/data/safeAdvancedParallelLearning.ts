import type { PageData } from '../types';
import { runLearningSystem, type LearningSystemConfig } from './learningSystem';

type SafeAdvancedParallelInput = {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: LearningSystemConfig;
};

/**
 * Compatibility entrypoint for existing B1/B2 books.
 * The actual exercise, assessment, parity, media and guide engine is the same
 * level-independent Learning System used by A2, B1 and B2.
 */
export const applySafeAdvancedParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: SafeAdvancedParallelInput) => {
  const output = runLearningSystem({ englishPages, arabicPages, config });
  return { englishPages: output.englishPages, arabicPages: output.arabicPages };
};
