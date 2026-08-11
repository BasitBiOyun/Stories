import { bookRegistry } from '../../src/core/content/bookRegistry';
import { normalizeHotspotSourceText } from '../../src/data/storyHotspotSourceLock';
import { adamB1PagesGoldEn, adamB1PagesGoldAr } from '../../src/data/adam/b1/gold';
import { abrahamB1PagesGoldEn, abrahamB1PagesGoldAr } from '../../src/data/abraham/b1/gold';
import { mosesB1PagesRolloutEn, mosesB1PagesRolloutAr } from '../../src/data/moses/b1/rollout';
import { meccaB1PagesGoldEn, meccaB1PagesGoldAr } from '../../src/data/mecca/b1/gold';
import { yunusEmreB1PagesGoldEn, yunusEmreB1PagesGoldAr } from '../../src/data/yunusEmre/b1/gold';
import type { PageData } from '../../src/types';

type Language = 'en' | 'ar';

type Pair = { en: PageData[]; ar: PageData[] };
const sources: Record<string, Pair> = {
  adam: { en: adamB1PagesGoldEn, ar: adamB1PagesGoldAr },
  ibrahim: { en: abrahamB1PagesGoldEn, ar: abrahamB1PagesGoldAr },
  musa: { en: mosesB1PagesRolloutEn, ar: mosesB1PagesRolloutAr },
  mecca: { en: meccaB1PagesGoldEn, ar: meccaB1PagesGoldAr },
  yunusEmre: { en: yunusEmreB1PagesGoldEn, ar: yunusEmreB1PagesGoldAr },
};

const errors: string[] = [];
let hotspotCount = 0;
let storyPageCount = 0;

const stableLearningMetadata = (page: PageData) => JSON.stringify({
  vocabulary: page.vocabulary ?? [],
  animatedWords: page.animatedWords ?? [],
});

for (const definition of bookRegistry.filter(item => item.level === 'B1')) {
  const sourcePair = sources[definition.storyId];
  if (!sourcePair) {
    errors.push(`${definition.storyId}: missing B1 source pair`);
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
        errors.push(`${definition.storyId}:B1:${language}:page${page.id} missing source page`);
        continue;
      }

      if (page.content !== sourcePage.content) {
        errors.push(`${definition.storyId}:B1:${language}:page${page.id} canonical content changed`);
      }
      if (stableLearningMetadata(page) !== stableLearningMetadata(sourcePage)) {
        errors.push(`${definition.storyId}:B1:${language}:page${page.id} vocabulary/animatedWords changed`);
      }

      const source = normalizeHotspotSourceText(page.content ?? '', language);
      for (const hotspot of page.hotspots ?? []) {
        hotspotCount += 1;
        const description = normalizeHotspotSourceText(hotspot.description ?? '', language);
        const title = normalizeHotspotSourceText(hotspot.title ?? '', language);
        const titleWords = title ? title.split(' ') : [];

        if (!description || !source.includes(description)) {
          errors.push(`${definition.storyId}:B1:${language}:page${page.id}:${hotspot.id} description is not a direct chapter extract`);
        }
        if (!title || !source.includes(title)) {
          errors.push(`${definition.storyId}:B1:${language}:page${page.id}:${hotspot.id} title is not a direct chapter phrase`);
        }
        if (titleWords.length > 4) {
          errors.push(`${definition.storyId}:B1:${language}:page${page.id}:${hotspot.id} title is too long (${titleWords.length} words)`);
        }

        if (language === 'en') {
          console.log(`HOTSPOT\t${definition.storyId}\t${page.id}\t${hotspot.id}\t${hotspot.title}\t${hotspot.description}`);
        }
      }
    }
  }
}

console.log(`B1 source hotspot audit checked ${hotspotCount} EN/AR hotspots across ${storyPageCount} story-page variants.`);
if (errors.length) {
  for (const item of errors) console.error(`ERROR: ${item}`);
  process.exitCode = 1;
} else {
  console.log('B1 source hotspot audit passed; canonical content and highlight metadata are unchanged.');
}
