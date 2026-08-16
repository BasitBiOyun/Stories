import type { B2BlueprintConfig } from '../../b2BlueprintSystem';

export const abrahamB2BlueprintConfig: B2BlueprintConfig = {
  storyIds: Array.from({ length: 35 }, (_, index) => index + 1),
  knowledgeCheckPageId: 36,
  reviewPageId: 37,
  glossaryPageIds: [38, 39],
  finalChallengePageId: 40,
};
