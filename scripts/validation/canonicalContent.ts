import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { bookRegistry } from '../../src/core/content/bookRegistry';
import { isLearningReferenceTitle } from '../../src/data/learningPageRoles';

interface CanonicalPageRecord {
  id: number;
  type: string;
  title: string;
  subtitle: string | null;
  contentHash: string;
  audioUrl: string | null;
}

interface CanonicalBookRecord {
  key: string;
  language: 'en' | 'ar';
  storyPages: CanonicalPageRecord[];
  audioStoragePaths: readonly string[];
}

interface CanonicalBaseline {
  schemaVersion: 1;
  generatedAt: string;
  books: CanonicalBookRecord[];
}

type CanonicalStoryComparison = {
  schemaVersion: 1;
  books: Array<{
    key: string;
    language: 'en' | 'ar';
    storyPages: Array<Omit<CanonicalPageRecord, 'audioUrl'>>;
  }>;
};

const hash = (value: string): string => createHash('sha256').update(value, 'utf8').digest('hex');
const defaultPath = resolve('scripts/validation/canonical-baseline.json');
const args = process.argv.slice(2);
const writeMode = args.includes('--write');
const outputArgIndex = args.indexOf('--output');
const outputPath = outputArgIndex >= 0 ? resolve(args[outputArgIndex + 1]) : defaultPath;

const normalizeApprovedMechanicalFixesForBaseline = (
  storyId: string,
  level: string,
  language: 'en' | 'ar',
  pageId: number,
  content: string,
): string => {
  if (language !== 'en') return content;

  if (storyId === 'yunusEmre' && level === 'B1' && pageId === 8) {
    return content.replaceAll('Tawhid', '**Tawhid**');
  }

  if (level !== 'A2') return content;

  if (storyId === 'adam' && pageId === 7) {
    return content.replaceAll('They also had lots of children.', 'They had also lots of children.');
  }
  if (storyId === 'adam' && pageId === 9) {
    return content.replaceAll("his brother's dead body", 'his brother dead body');
  }
  if (storyId === 'yunusEmre' && pageId === 7) {
    return content.replace(
      'Yunus replied, “My teacher, I walked around the fields,',
      'Yunus replied, “My teacher” “I walked around the fields,',
    );
  }

  return content;
};

const normalizeApprovedMechanicalTitleForBaseline = (
  storyId: string,
  level: string,
  language: 'en' | 'ar',
  pageId: number,
  title: string,
): string => {
  if (storyId === 'yunusEmre' && level === 'B1' && language === 'en' && pageId === 8) {
    return title.replaceAll('Tawhid', '**Tawhid**');
  }
  return title;
};

const createBaseline = async (): Promise<CanonicalBaseline> => {
  const books: CanonicalBookRecord[] = [];

  for (const definition of bookRegistry) {
    // Canonical validation deliberately reads the source/prepared book BEFORE
    // Learning System/UI finalization. Runtime media has its own Storage audit.
    const pair = await definition.loadSource();
    for (const language of ['en', 'ar'] as const) {
      const book = pair[language];
      books.push({
        key: `${definition.storyId}:${definition.level}`,
        language,
        storyPages: book.pages
          .filter(page => page.type === 'story')
          .map(page => ({
            id: page.id,
            type: page.type,
            title: normalizeApprovedMechanicalTitleForBaseline(
              definition.storyId,
              definition.level,
              language,
              page.id,
              page.title,
            ),
            subtitle: page.subtitle ?? null,
            contentHash: hash(normalizeApprovedMechanicalFixesForBaseline(
              definition.storyId,
              definition.level,
              language,
              page.id,
              page.content,
            )),
            audioUrl: page.audioUrl ?? null,
          })),
        audioStoragePaths: language === 'ar' ? definition.storage.arabicAudio?.paths ?? [] : [],
      });
    }
  }

  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    books,
  };
};

/**
 * Canonical comparison protects narrative chapter identity/order/title/subtitle
 * and prose only. Auxiliary References/Source pages, audio URLs and Storage
 * folder candidates are protected by their own page-role/media contracts.
 */
const stableForComparison = (baseline: CanonicalBaseline): CanonicalStoryComparison => ({
  schemaVersion: baseline.schemaVersion,
  books: baseline.books.map(book => ({
    key: book.key,
    language: book.language,
    storyPages: book.storyPages
      .filter(story => !isLearningReferenceTitle(story.title))
      .map(({ audioUrl: _audioUrl, ...story }) => story),
  })),
});

const main = async () => {
  const current = await createBaseline();

  if (writeMode || !existsSync(outputPath)) {
    writeFileSync(outputPath, `${JSON.stringify(current, null, 2)}\n`, 'utf8');
    console.log(`Canonical baseline written to ${outputPath}`);
    if (!writeMode) {
      console.warn('Baseline did not exist. Commit the generated file before enabling strict canonical validation.');
    }
    return;
  }

  const approved = JSON.parse(readFileSync(outputPath, 'utf8')) as CanonicalBaseline;
  const currentComparable = JSON.stringify(stableForComparison(current), null, 2);
  const approvedComparable = JSON.stringify(stableForComparison(approved), null, 2);

  if (currentComparable !== approvedComparable) {
    console.error('Canonical narrative story prose or chapter identity/order changed.');
    console.error('Technical learning/media refactors must not update the canonical story baseline.');
    process.exitCode = 1;
    return;
  }

  console.log(`Canonical narrative story identity and prose verified across ${current.books.length} language-level books.`);
};

await main();
