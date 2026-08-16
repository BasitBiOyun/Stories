import type { B1BlueprintConfig } from '../../b1BlueprintSystem';

export const meccaB1BlueprintConfig: B1BlueprintConfig = {
  storyIds: Array.from({ length: 15 }, (_, index) => index + 1),
  knowledgeCheckPageId: 16,
  reviewPageId: 17,
  glossaryPageIds: [18, 19],
  finalChallengePageId: 20,
};
