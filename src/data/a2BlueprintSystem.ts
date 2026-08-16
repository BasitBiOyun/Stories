import type { PageData } from '../types';
import type { LearningBlueprint } from './learningBlueprint';
import { runBlueprintLearningSystem } from './learningBlueprintSystem';
import { preparePairedLearningSources } from './learningSourcePairing';
import type { A2BookConfig } from './a2BookSupport';

/**
 * The single A2 learning entrypoint.
 * A2 books cannot fall back to a legacy question/guide generator: a reviewed
 * manual blueprint is required and the shared blueprint engine only places it.
 */
export const runA2BlueprintSystem = ({
  englishPages,
  arabicPages,
  config,
  blueprint,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: A2BookConfig;
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
      level: 'A2',
      storyIds: config.storyIds,
      knowledgeCheckPageId: config.knowledgeCheckPageId,
      vocabularyPageId: config.vocabularyPageId,
      reviewPageId: config.reviewPageId,
      glossaryPageIds: config.glossaryPageIds,
      finalChallengePageId: config.finalChallengePageId,
    },
  });
};
