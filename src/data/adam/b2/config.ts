import type { B2BlueprintConfig } from '../../b2BlueprintSystem';

export const adamB2BlueprintConfig: B2BlueprintConfig = {
  storyIds: Array.from({ length: 17 }, (_, index) => index + 1),
  knowledgeCheckPageId: 18,
  reviewPageId: 19,
  glossaryPageIds: [20, 21],
  finalChallengePageId: 22,
};
