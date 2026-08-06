import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { bookRegistry } from '../../src/core/content/bookRegistry';

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

const hash = (value: string): string => createHash('sha256').update(value, 'utf8').digest('hex');
const defaultPath = resolve('scripts/validation/canonical-baseline.json');
const args = process.argv.slice(2);
const writeMode = args.includes('--write');
const outputArgIndex = args.indexOf('--output');
const outputPath = outputArgIndex >= 0 ? resolve(args[outputArgIndex + 1]) : defaultPath;

const createBaseline = async (): Promise<CanonicalBaseline> => {
  const books: CanonicalBookRecord[] = [];

  for (const definition of bookRegistry) {
    const pair = await definition.load();
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
            title: page.title,
            subtitle: page.subtitle ?? null,
            contentHash: hash(page.content),
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

const stableForComparison = (baseline: CanonicalBaseline): Omit<CanonicalBaseline, 'generatedAt'> => ({
  schemaVersion: baseline.schemaVersion,
  books: baseline.books,
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
    console.error('Canonical story text, chapter identity/order, or audio references changed.');
    console.error('Technical refactors must not update the canonical baseline.');
    process.exitCode = 1;
    return;
  }

  console.log(`Canonical content verified across ${current.books.length} language-level books.`);
};

await main();
