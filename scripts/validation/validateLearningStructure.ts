import { adamA2BookDataAr, adamA2BookDataEn } from '../../src/data/adam/a2';
import { abrahamA2BookDataAr, abrahamA2BookDataEn } from '../../src/data/abraham/a2';
import { meccaA2BookDataAr, meccaA2BookDataEn } from '../../src/data/mecca/a2';
import { mosesA2BookDataAr, mosesA2BookDataEn } from '../../src/data/moses/a2';
import { yunusEmreA2BookDataAr, yunusEmreA2BookDataEn } from '../../src/data/yunusEmre/a2';
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

const mosesA2Config: LearningBookStructureConfig = {
  storyIds: Array.from({ length: 16 }, (_, index) => index + 1),
  knowledgeCheckPageId: 17,
  vocabularyPageId: 18,
  reviewPageId: 21,
  glossaryPageIds: [19, 20],
  finalChallengePageId: 22,
};

const abrahamA2Config: LearningBookStructureConfig = {
  storyIds: Array.from({ length: 14 }, (_, index) => index + 1),
  knowledgeCheckPageId: 15,
  vocabularyPageId: 16,
  reviewPageId: 17,
  glossaryPageIds: [18, 19],
  finalChallengePageId: 20,
};

const meccaA2Config: LearningBookStructureConfig = {
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 14,
  vocabularyPageId: 15,
  reviewPageId: 16,
  glossaryPageIds: [17, 18],
  finalChallengePageId: 19,
};

const yunusA2Config: LearningBookStructureConfig = {
  storyIds: Array.from({ length: 8 }, (_, index) => index + 1),
  knowledgeCheckPageId: 9,
  vocabularyPageId: 10,
  reviewPageId: 13,
  glossaryPageIds: [11, 12],
  finalChallengePageId: 14,
};

const migratedBooks = [
  { label: 'Adam A2 EN', book: adamA2BookDataEn, config: adamA2Config },
  { label: 'Adam A2 AR', book: adamA2BookDataAr, config: adamA2Config },
  { label: 'Moses A2 EN', book: mosesA2BookDataEn, config: mosesA2Config },
  { label: 'Moses A2 AR', book: mosesA2BookDataAr, config: mosesA2Config },
  { label: 'Abraham A2 EN', book: abrahamA2BookDataEn, config: abrahamA2Config },
  { label: 'Abraham A2 AR', book: abrahamA2BookDataAr, config: abrahamA2Config },
  { label: 'Mecca A2 EN', book: meccaA2BookDataEn, config: meccaA2Config },
  { label: 'Mecca A2 AR', book: meccaA2BookDataAr, config: meccaA2Config },
  { label: 'Yunus Emre A2 EN', book: yunusEmreA2BookDataEn, config: yunusA2Config },
  { label: 'Yunus Emre A2 AR', book: yunusEmreA2BookDataAr, config: yunusA2Config },
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
