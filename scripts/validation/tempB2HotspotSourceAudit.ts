import { bookRegistry } from '../../src/core/content/bookRegistry';
import { normalizeHotspotSourceText } from '../../src/data/storyHotspotSourceLock';
import { adamB2PagesBeforeHotspotSourceLockEn, adamB2PagesBeforeHotspotSourceLockAr } from '../../src/data/adam/b2';
import { abrahamB2PagesBeforeHotspotSourceLockEn, abrahamB2PagesBeforeHotspotSourceLockAr } from '../../src/data/abraham/b2';
import { mosesB2PagesBeforeHotspotSourceLockEn, mosesB2PagesBeforeHotspotSourceLockAr } from '../../src/data/moses/b2';
import { meccaB2PagesBeforeHotspotSourceLockEn, meccaB2PagesBeforeHotspotSourceLockAr } from '../../src/data/mecca/b2';
import { yunusB2PagesBeforeHotspotSourceLockEn, yunusB2PagesBeforeHotspotSourceLockAr } from '../../src/data/yunusEmre/b2';
import type { PageData } from '../../src/types';

type Pair = { en: PageData[]; ar: PageData[] };
const sources: Record<string, Pair> = {
  adam: { en: adamB2PagesBeforeHotspotSourceLockEn, ar: adamB2PagesBeforeHotspotSourceLockAr },
  ibrahim: { en: abrahamB2PagesBeforeHotspotSourceLockEn, ar: abrahamB2PagesBeforeHotspotSourceLockAr },
  musa: { en: mosesB2PagesBeforeHotspotSourceLockEn, ar: mosesB2PagesBeforeHotspotSourceLockAr },
  mecca: { en: meccaB2PagesBeforeHotspotSourceLockEn, ar: meccaB2PagesBeforeHotspotSourceLockAr },
  yunusEmre: { en: yunusB2PagesBeforeHotspotSourceLockEn, ar: yunusB2PagesBeforeHotspotSourceLockAr },
};

const errors: string[] = [];
let hotspotCount = 0;
let storyPageCount = 0;

const protectedDerivedFields = (page: PageData) => JSON.stringify({
  content: page.content,
  vocabulary: page.vocabulary ?? [],
  animatedWords: page.animatedWords ?? [],
  exercises: page.exercises ?? [],
  image: page.image,
  audioUrl: page.audioUrl,
  syncPoints: page.syncPoints ?? [],
  timedChunks: page.timedChunks ?? [],
});

for (const definition of bookRegistry.filter(item => item.level === 'B2')) {
  const sourcePair = sources[definition.storyId];
  if (!sourcePair) {
    errors.push(`${definition.storyId}: missing B2 source pair`);
    continue;
  }

  const runtime = await definition.load();
  for (const language of ['en', 'ar'] as const) {
    const runtimeBook = runtime[language];
    const sourcePages = sourcePair[language];

    for (const page of runtimeBook.pages.filter(item => item.type === 'story')) {
      storyPageCount += 1;
      const sourcePage = sourcePages.find(item => item.id === page.id);
      if (!sourcePage) {
        errors.push(`${definition.storyId}:B2:${language}:page${page.id} missing pre-hotspot source page`);
        continue;
      }

      if (protectedDerivedFields(page) !== protectedDerivedFields(sourcePage)) {
        errors.push(`${definition.storyId}:B2:${language}:page${page.id} non-hotspot protected fields changed`);
      }

      const source = normalizeHotspotSourceText(page.content ?? '', language);
      for (const hotspot of page.hotspots ?? []) {
        hotspotCount += 1;
        const description = normalizeHotspotSourceText(hotspot.description ?? '', language);
        const title = normalizeHotspotSourceText(hotspot.title ?? '', language);
        const titleWords = title ? title.split(' ') : [];

        if (!description || !source.includes(description)) {
          errors.push(`${definition.storyId}:B2:${language}:page${page.id}:${hotspot.id} description is not a direct chapter extract`);
        }
        if (!title || !source.includes(title)) {
          errors.push(`${definition.storyId}:B2:${language}:page${page.id}:${hotspot.id} title is not a direct chapter phrase`);
        }
        if (titleWords.length > 4) {
          errors.push(`${definition.storyId}:B2:${language}:page${page.id}:${hotspot.id} title is too long (${titleWords.length} words)`);
        }

        if (language === 'en') {
          console.log(`HOTSPOT\t${definition.storyId}\t${page.id}\t${hotspot.id}\t${hotspot.title}\t${hotspot.description}`);
        }
      }
    }
  }
}

console.log(`B2 source hotspot audit checked ${hotspotCount} EN/AR hotspots across ${storyPageCount} story-page variants.`);
if (errors.length) {
  for (const item of errors) console.error(`ERROR: ${item}`);
  process.exitCode = 1;
} else {
  console.log('B2 source hotspot audit passed; non-hotspot protected fields are unchanged by the source gate.');
}
