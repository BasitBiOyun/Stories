import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '../../src/lib/firebase';
import { getBookDefinition } from '../../src/core/content/bookRegistry';
import { narrativeLearningPages } from '../../src/data/learningPageRoles';
import { parseChapterNumber } from '../../src/core/storage/storageAssetLoader';
import type { AssetKind, StoragePathCandidates } from '../../src/core/storage/contracts';
import type { Level } from '../../src/types';

const IMAGE_EXTENSION = /\.(?:png|jpe?g|webp|avif|gif)$/i;
const AUDIO_EXTENSION = /\.(?:mp3|m4a|aac|wav|ogg|opus|mpeg)$/i;

type AssetRole = 'image' | 'englishAudio' | 'arabicAudio';

type CandidateAsset = {
  role: AssetRole;
  kind: AssetKind;
  chapter: number;
  candidatePriority: number;
  candidateFolder: string;
  name: string;
  fullPath: string;
  downloadUrl: string;
};

type ScanResult = {
  selected: Record<number, CandidateAsset>;
  candidates: Record<number, CandidateAsset[]>;
  unavailableFolders: { folder: string; error: string }[];
  unresolvedFiles: { fullPath: string; error: string }[];
};

const extensionMatchesKind = (name: string, kind: AssetKind) =>
  kind === 'image' ? IMAGE_EXTENSION.test(name) : AUDIO_EXTENSION.test(name);

const errorMessage = (error: unknown) => error instanceof Error ? error.message : String(error);

const scanCandidates = async (
  role: AssetRole,
  source: StoragePathCandidates | undefined,
): Promise<ScanResult> => {
  const selected: Record<number, CandidateAsset> = {};
  const candidates: Record<number, CandidateAsset[]> = {};
  const unavailableFolders: ScanResult['unavailableFolders'] = [];
  const unresolvedFiles: ScanResult['unresolvedFiles'] = [];

  if (!source) return { selected, candidates, unavailableFolders, unresolvedFiles };

  for (let candidatePriority = 0; candidatePriority < source.paths.length; candidatePriority += 1) {
    const candidateFolder = source.paths[candidatePriority];
    let result;

    try {
      result = await listAll(ref(storage, candidateFolder));
    } catch (error) {
      unavailableFolders.push({ folder: candidateFolder, error: errorMessage(error) });
      continue;
    }

    const items = [...result.items]
      .filter(item => extensionMatchesKind(item.name, source.kind))
      .sort((left, right) => left.name.localeCompare(right.name));

    for (const item of items) {
      const chapter = parseChapterNumber(item.name);
      if (chapter === null) continue;

      let downloadUrl = '';
      try {
        downloadUrl = await getDownloadURL(item);
      } catch (error) {
        unresolvedFiles.push({ fullPath: item.fullPath, error: errorMessage(error) });
        continue;
      }

      const asset: CandidateAsset = {
        role,
        kind: source.kind,
        chapter,
        candidatePriority,
        candidateFolder,
        name: item.name,
        fullPath: item.fullPath,
        downloadUrl,
      };

      candidates[chapter] ??= [];
      candidates[chapter].push(asset);

      // Mirrors storageAssetLoader.ts exactly: earlier candidate folders win,
      // then alphabetically first valid file for the same chapter wins.
      selected[chapter] ??= asset;
    }
  }

  return { selected, candidates, unavailableFolders, unresolvedFiles };
};

const main = async () => {
  const storyId = process.argv[2] ?? 'yunusEmre';
  const level = (process.argv[3] ?? 'B2') as Level;
  const definition = getBookDefinition(storyId, level);

  if (!definition) {
    throw new Error(`Unknown story/level: ${storyId}:${level}`);
  }

  const pair = await definition.loadSource();
  const chapterIds = narrativeLearningPages(pair.en.pages)
    .filter(page => page.type === 'story')
    .map(page => page.id)
    .sort((a, b) => a - b);

  const [images, englishAudio, arabicAudio] = await Promise.all([
    scanCandidates('image', definition.storage.sharedImages),
    scanCandidates('englishAudio', definition.storage.englishAudio),
    scanCandidates('arabicAudio', definition.storage.arabicAudio),
  ]);

  const chapters = chapterIds.map(chapter => ({
    chapter,
    image: images.selected[chapter] ?? null,
    englishAudio: englishAudio.selected[chapter] ?? null,
    arabicAudio: arabicAudio.selected[chapter] ?? null,
  }));

  const missing = {
    images: chapterIds.filter(chapter => !images.selected[chapter]),
    englishAudio: chapterIds.filter(chapter => !englishAudio.selected[chapter]),
    arabicAudio: chapterIds.filter(chapter => !arabicAudio.selected[chapter]),
  };

  const duplicateCandidates = {
    images: Object.entries(images.candidates)
      .filter(([, items]) => items.length > 1)
      .map(([chapter, items]) => ({ chapter: Number(chapter), candidates: items })),
    englishAudio: Object.entries(englishAudio.candidates)
      .filter(([, items]) => items.length > 1)
      .map(([chapter, items]) => ({ chapter: Number(chapter), candidates: items })),
    arabicAudio: Object.entries(arabicAudio.candidates)
      .filter(([, items]) => items.length > 1)
      .map(([chapter, items]) => ({ chapter: Number(chapter), candidates: items })),
  };

  const sameEnglishArabicAudio = chapterIds.filter(chapter => {
    const en = englishAudio.selected[chapter]?.downloadUrl;
    const ar = arabicAudio.selected[chapter]?.downloadUrl;
    return Boolean(en && ar && en === ar);
  });

  const output = {
    generatedAt: new Date().toISOString(),
    book: {
      storyId: definition.storyId,
      level: definition.level,
      expectedNarrativeChapters: chapterIds,
    },
    configuredFolders: {
      sharedImages: definition.storage.sharedImages?.paths ?? [],
      englishAudio: definition.storage.englishAudio?.paths ?? [],
      arabicAudio: definition.storage.arabicAudio?.paths ?? [],
    },
    chapters,
    diagnostics: {
      missing,
      duplicateCandidates,
      sameEnglishArabicAudio,
      unavailableFolders: {
        images: images.unavailableFolders,
        englishAudio: englishAudio.unavailableFolders,
        arabicAudio: arabicAudio.unavailableFolders,
      },
      unresolvedFiles: {
        images: images.unresolvedFiles,
        englishAudio: englishAudio.unresolvedFiles,
        arabicAudio: arabicAudio.unresolvedFiles,
      },
    },
  };

  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
};

main().catch(error => {
  console.error('[Storage inventory export] failed:', error);
  process.exitCode = 1;
});
