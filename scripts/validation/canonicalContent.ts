import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { bookRegistry } from '../../src/core/content/bookRegistry';
import type { StoryId } from '../../src/core/content/contracts';
import { restoreApprovedEnglishStoryCorrectionsForBaseline } from '../../src/core/content/approvedStoryCorrections';
import { isLearningReferenceTitle } from '../../src/data/learningPageRoles';
import { restoreYunusA2ArabicPoemProse, restoreYunusA2LockedPoemProse } from '../../src/data/yunusEmre/a2/poemCard';

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

type ComparablePage = Omit<CanonicalPageRecord, 'audioUrl'>;
type ComparableBook = { key: string; language: 'en' | 'ar'; storyPages: ComparablePage[] };
type CanonicalStoryComparison = { schemaVersion: 1; books: ComparableBook[] };

const hash = (value: string): string => createHash('sha256').update(value, 'utf8').digest('hex');
const defaultPath = resolve('scripts/validation/canonical-baseline.json');
const args = process.argv.slice(2);
const writeMode = args.includes('--write');
const outputArgIndex = args.indexOf('--output');
const outputPath = outputArgIndex >= 0 ? resolve(args[outputArgIndex + 1]) : defaultPath;

const normalizeApprovedMechanicalFixesForBaseline = (
  storyId: StoryId,
  level: string,
  language: 'en' | 'ar',
  pageId: number,
  rawContent: string,
): string => {
  let content = rawContent;
  if (storyId === 'yunusEmre' && level === 'A2' && pageId === 3) {
    content = language === 'en'
      ? restoreYunusA2LockedPoemProse(content)
      : restoreYunusA2ArabicPoemProse(content);
  }
  if (language !== 'en') return content;

  content = restoreApprovedEnglishStoryCorrectionsForBaseline(storyId, level as 'A2' | 'B1' | 'B2', pageId, content);

  if (storyId === 'yunusEmre' && level === 'B1' && pageId === 8) return content.replaceAll('Tawhid', '**Tawhid**');
  if (level !== 'A2') return content;
  if (storyId === 'adam' && pageId === 7) return content.replaceAll('They also had lots of children.', 'They had also lots of children.');
  if (storyId === 'adam' && pageId === 9) return content.replaceAll("his brother's dead body", 'his brother dead body');
  if (storyId === 'yunusEmre' && pageId === 7) {
    return content.replace('Yunus replied, “My teacher, I walked around the fields,', 'Yunus replied, “My teacher” “I walked around the fields,');
  }
  return content;
};

const normalizeApprovedMechanicalTitleForBaseline = (
  storyId: string,
  level: string,
  language: 'en' | 'ar',
  pageId: number,
  title: string,
): string => storyId === 'yunusEmre' && level === 'B1' && language === 'en' && pageId === 8
  ? title.replaceAll('Tawhid', '**Tawhid**')
  : title;

const createBaseline = async (): Promise<CanonicalBaseline> => {
  const books: CanonicalBookRecord[] = [];
  for (const definition of bookRegistry) {
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
            title: normalizeApprovedMechanicalTitleForBaseline(definition.storyId, definition.level, language, page.id, page.title),
            subtitle: page.subtitle ?? null,
            contentHash: hash(normalizeApprovedMechanicalFixesForBaseline(definition.storyId, definition.level, language, page.id, page.content)),
            audioUrl: page.audioUrl ?? null,
          })),
        audioStoragePaths: language === 'ar' ? definition.storage.arabicAudio?.paths ?? [] : [],
      });
    }
  }
  return { schemaVersion: 1, generatedAt: new Date().toISOString(), books };
};

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

const reportFirstDifference = (approved: CanonicalStoryComparison, current: CanonicalStoryComparison) => {
  if (approved.books.length !== current.books.length) {
    console.error(`Canonical book count differs: approved=${approved.books.length}, current=${current.books.length}.`);
    return;
  }

  for (let bookIndex = 0; bookIndex < approved.books.length; bookIndex += 1) {
    const expectedBook = approved.books[bookIndex];
    const actualBook = current.books[bookIndex];
    if (expectedBook.key !== actualBook.key || expectedBook.language !== actualBook.language) {
      console.error(`Canonical book identity/order differs at index ${bookIndex}: approved=${expectedBook.key}:${expectedBook.language}, current=${actualBook.key}:${actualBook.language}.`);
      return;
    }
    if (expectedBook.storyPages.length !== actualBook.storyPages.length) {
      console.error(`${expectedBook.key}:${expectedBook.language} narrative chapter count differs: approved=${expectedBook.storyPages.length}, current=${actualBook.storyPages.length}.`);
      console.error(`Approved IDs: ${expectedBook.storyPages.map(page => page.id).join(',')}`);
      console.error(`Current IDs: ${actualBook.storyPages.map(page => page.id).join(',')}`);
      return;
    }

    for (let pageIndex = 0; pageIndex < expectedBook.storyPages.length; pageIndex += 1) {
      const expectedPage = expectedBook.storyPages[pageIndex];
      const actualPage = actualBook.storyPages[pageIndex];
      for (const field of ['id', 'type', 'title', 'subtitle', 'contentHash'] as const) {
        if (expectedPage[field] !== actualPage[field]) {
          console.error(`${expectedBook.key}:${expectedBook.language} chapter slot ${pageIndex + 1} field ${field} differs.`);
          console.error(`approved=${String(expectedPage[field])}`);
          console.error(`current=${String(actualPage[field])}`);
          return;
        }
      }
    }
  }
};

const main = async () => {
  const current = await createBaseline();
  if (writeMode || !existsSync(outputPath)) {
    writeFileSync(outputPath, `${JSON.stringify(current, null, 2)}\n`, 'utf8');
    console.log(`Canonical baseline written to ${outputPath}`);
    if (!writeMode) console.warn('Baseline did not exist. Commit the generated file before enabling strict canonical validation.');
    return;
  }

  const approved = JSON.parse(readFileSync(outputPath, 'utf8')) as CanonicalBaseline;
  const currentStable = stableForComparison(current);
  const approvedStable = stableForComparison(approved);
  if (JSON.stringify(currentStable) !== JSON.stringify(approvedStable)) {
    console.error('Canonical narrative story prose or chapter identity/order changed.');
    reportFirstDifference(approvedStable, currentStable);
    console.error('Technical learning/media refactors must not update the canonical story baseline.');
    process.exitCode = 1;
    return;
  }

  console.log(`Canonical narrative story identity and prose verified across ${current.books.length} language-level books.`);
};

await main();
