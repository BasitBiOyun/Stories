import type { B1BlueprintConfig } from '../../b1BlueprintSystem';

export const adamB1BlueprintConfig: B1BlueprintConfig = {
  storyIds: Array.from({ length: 12 }, (_, index) => index + 1),
  knowledgeCheckPageId: 13,
  reviewPageId: 14,
  glossaryPageIds: [15, 16],
  finalChallengePageId: 17,
};
