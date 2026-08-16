import type { B2BlueprintConfig } from '../../b2BlueprintSystem';

export const mosesB2BlueprintConfig: B2BlueprintConfig = {
  storyIds: Array.from({ length: 24 }, (_, index) => index + 1),
  knowledgeCheckPageId: 25,
  vocabularyPageId: 26,
  glossaryPageIds: [27, 28],
  reviewPageId: 29,
  finalChallengePageId: 30,
};
