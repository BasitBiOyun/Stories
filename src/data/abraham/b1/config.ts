import type { B1BlueprintConfig } from '../../b1BlueprintSystem';

export const abrahamB1BlueprintConfig: B1BlueprintConfig = {
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 14,
  reviewPageId: 15,
  glossaryPageIds: [16, 17],
  finalChallengePageId: 18,
};
