import type { B2BlueprintConfig } from '../../b2BlueprintSystem';

export const yunusEmreB2BlueprintConfig: B2BlueprintConfig = {
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 15,
  vocabularyPageId: 16,
  glossaryPageIds: [17, 18],
  reviewPageId: 19,
  finalChallengePageId: 20,
};
