import { adamA2BookDataAr, adamA2BookDataEn } from '../../src/data/adam/a2';
import {
  validateLearningBookStructure,
  type LearningBookStructureConfig,
} from '../../src/data/learningStructureContract';

const adamA2Config: LearningBookStructureConfig = {
  storyIds: Array.from({ length: 10 }, (_, index) => index + 1),
  knowledgeCheckPageId: 11,
  vocabularyPageId: 12,
  reviewPageId: 13,
  glossaryPageIds: [14, 15],
  finalChallengePageId: 16,
};

const migratedBooks = [
  { label: 'Adam A2 EN', book: adamA2BookDataEn, config: adamA2Config },
  { label: 'Adam A2 AR', book: adamA2BookDataAr, config: adamA2Config },
];

let failed = false;

for (const entry of migratedBooks) {
  const issues = validateLearningBookStructure(entry.book, entry.config);
  if (!issues.length) {
    console.log(`[PASS] ${entry.label}`);
    continue;
  }

  failed = true;
  console.log(`[FAIL] ${entry.label} — ${issues.length} structure issue(s)`);
  issues.forEach(issue => {
    const page = issue.pageId === undefined ? '' : ` page=${issue.pageId}`;
    console.log(`  - ${issue.code}${page}: ${issue.message}`);
  });
}

if (failed) process.exitCode = 1;
