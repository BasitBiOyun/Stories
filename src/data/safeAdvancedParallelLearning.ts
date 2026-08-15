import type { PageData } from '../types';
import { runLearningSystem, type LearningSystemConfig } from './learningSystem';
import { preparePairedLearningSources } from './learningSourcePairing';

type SafeAdvancedParallelInput = {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: LearningSystemConfig;
};

/** Compatibility entrypoint. B1/B2 use the same Learning System as A2. */
export const applySafeAdvancedParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: SafeAdvancedParallelInput) => {
  const paired = preparePairedLearningSources({ englishPages, arabicPages, storyIds: config.storyIds });
  const output = runLearningSystem({
    englishPages: paired.englishPages,
    arabicPages: paired.arabicPages,
    config,
  });
  return { englishPages: output.englishPages, arabicPages: output.arabicPages };
};
