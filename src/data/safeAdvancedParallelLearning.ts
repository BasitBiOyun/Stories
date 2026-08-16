import type { PageData } from '../types';
import type { LearningBlueprint } from './learningBlueprint';
import { runBlueprintAwareLearningSystem } from './learningBlueprintSystem';
import type { LearningSystemConfig } from './learningSystem';
import { preparePairedLearningSources } from './learningSourcePairing';

type SafeAdvancedParallelInput = {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: LearningSystemConfig;
  blueprint?: LearningBlueprint;
};

/** Compatibility entrypoint. B1/B2 use the same Learning System as A2. */
export const applySafeAdvancedParallelLearning = ({
  englishPages,
  arabicPages,
  config,
  blueprint,
}: SafeAdvancedParallelInput) => {
  const paired = preparePairedLearningSources({ englishPages, arabicPages, storyIds: config.storyIds });
  return runBlueprintAwareLearningSystem({
    englishPages: paired.englishPages,
    arabicPages: paired.arabicPages,
    config,
    blueprint,
  });
};
