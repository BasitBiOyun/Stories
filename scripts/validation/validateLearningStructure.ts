import { adamA2BookDataAr, adamA2BookDataEn } from '../../src/data/adam/a2';
import { abrahamA2BookDataAr, abrahamA2BookDataEn } from '../../src/data/abraham/a2';
import { meccaA2BookDataAr, meccaA2BookDataEn } from '../../src/data/mecca/a2';
import { mosesA2BookDataAr, mosesA2BookDataEn } from '../../src/data/moses/a2';
import { yunusEmreA2BookDataAr, yunusEmreA2BookDataEn } from '../../src/data/yunusEmre/a2';
import { adamB1BookDataAr, adamB1BookDataEn, adamB1GoldConfig } from '../../src/data/adam/b1';
import { abrahamB1BookDataAr, abrahamB1BookDataEn, abrahamB1GoldConfig } from '../../src/data/abraham/b1';
import { meccaB1BookDataAr, meccaB1BookDataEn, meccaB1GoldConfig } from '../../src/data/mecca/b1';
import { mosesB1BookDataAr, mosesB1BookDataEn, mosesB1GoldConfig } from '../../src/data/moses/b1';
import { yunusEmreB1BookDataAr, yunusEmreB1BookDataEn, yunusEmreB1GoldConfig } from '../../src/data/yunusEmre/b1';
import { adamB2BookDataAr, adamB2BookDataEn, adamB2GoldConfig } from '../../src/data/adam/b2';
import { abrahamB2BookDataAr, abrahamB2BookDataEn, abrahamB2GoldConfig } from '../../src/data/abraham/b2';
import { meccaB2BookDataAr, meccaB2BookDataEn, meccaB2GoldConfig } from '../../src/data/mecca/b2';
import { mosesB2BookDataAr, mosesB2BookDataEn, mosesB2GoldConfig } from '../../src/data/moses/b2';
import { yunusEmreB2BookDataAr, yunusEmreB2BookDataEn, yunusEmreB2GoldConfig } from '../../src/data/yunusEmre/b2';
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
  { label: 'Adam B1 EN', book: adamB1BookDataEn, config: adamB1GoldConfig },
  { label: 'Adam B1 AR', book: adamB1BookDataAr, config: adamB1GoldConfig },
  { label: 'Abraham B1 EN', book: abrahamB1BookDataEn, config: abrahamB1GoldConfig },
  { label: 'Abraham B1 AR', book: abrahamB1BookDataAr, config: abrahamB1GoldConfig },
  { label: 'Moses B1 EN', book: mosesB1BookDataEn, config: mosesB1GoldConfig },
  { label: 'Moses B1 AR', book: mosesB1BookDataAr, config: mosesB1GoldConfig },
  { label: 'Mecca B1 EN', book: meccaB1BookDataEn, config: meccaB1GoldConfig },
  { label: 'Mecca B1 AR', book: meccaB1BookDataAr, config: meccaB1GoldConfig },
  { label: 'Yunus Emre B1 EN', book: yunusEmreB1BookDataEn, config: yunusEmreB1GoldConfig },
  { label: 'Yunus Emre B1 AR', book: yunusEmreB1BookDataAr, config: yunusEmreB1GoldConfig },
  { label: 'Adam B2 EN', book: adamB2BookDataEn, config: adamB2GoldConfig },
  { label: 'Adam B2 AR', book: adamB2BookDataAr, config: adamB2GoldConfig },
  { label: 'Abraham B2 EN', book: abrahamB2BookDataEn, config: abrahamB2GoldConfig },
  { label: 'Abraham B2 AR', book: abrahamB2BookDataAr, config: abrahamB2GoldConfig },
  { label: 'Moses B2 EN', book: mosesB2BookDataEn, config: mosesB2GoldConfig },
  { label: 'Moses B2 AR', book: mosesB2BookDataAr, config: mosesB2GoldConfig },
  { label: 'Mecca B2 EN', book: meccaB2BookDataEn, config: meccaB2GoldConfig },
  { label: 'Mecca B2 AR', book: meccaB2BookDataAr, config: meccaB2GoldConfig },
  { label: 'Yunus Emre B2 EN', book: yunusEmreB2BookDataEn, config: yunusEmreB2GoldConfig },
  { label: 'Yunus Emre B2 AR', book: yunusEmreB2BookDataAr, config: yunusEmreB2GoldConfig },
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
