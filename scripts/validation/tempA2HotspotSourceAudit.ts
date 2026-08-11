import { bookRegistry } from '../../src/core/content/bookRegistry';

const normalize = (value: string, language: 'en' | 'ar') => {
  let text = value.normalize('NFKC').toLowerCase();
  if (language === 'ar') {
    text = text
      .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
      .replace(/ـ/g, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/ة/g, 'ه');
  }
  return text.replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
};

let hotspotCount = 0;
const errors: string[] = [];

for (const definition of bookRegistry.filter((item) => item.level === 'A2')) {
  const pair = await definition.load();
  for (const [language, book] of [['en', pair.en], ['ar', pair.ar]] as const) {
    for (const page of book.pages.filter((item) => item.type === 'story')) {
      const source = normalize(page.content || '', language);
      for (const hotspot of page.hotspots || []) {
        hotspotCount += 1;
        const description = normalize(hotspot.description || '', language);
        if (!description || !source.includes(description)) {
          errors.push(`${definition.storyId}:A2:${language}:page${page.id}:${hotspot.id} description is not a direct chapter extract`);
        }
        const titleWords = normalize(hotspot.title || '', language).split(' ').filter(Boolean);
        if (titleWords.length > 4) {
          errors.push(`${definition.storyId}:A2:${language}:page${page.id}:${hotspot.id} title is too long (${titleWords.length} words)`);
        }
      }
    }
  }
}

const musa = bookRegistry.find((item) => item.storyId === 'musa' && item.level === 'A2');
const ibrahim = bookRegistry.find((item) => item.storyId === 'ibrahim' && item.level === 'A2');
const adam = bookRegistry.find((item) => item.storyId === 'adam' && item.level === 'A2');
const yunus = bookRegistry.find((item) => item.storyId === 'yunusEmre' && item.level === 'A2');
if (!musa || !ibrahim || !adam || !yunus) throw new Error('A2 registry entry missing');

const musaPair = await musa.load();
const ibrahimPair = await ibrahim.load();
const adamPair = await adam.load();
const yunusPair = await yunus.load();

if (!musaPair.en.pages.find((p) => p.id === 5)?.content?.includes('the king was not god.')) {
  errors.push('Musa A2 Ch5 protected wording changed');
}
if (!ibrahimPair.en.pages.find((p) => p.id === 8)?.content?.includes('He placed him on a catapult.')) {
  errors.push('Ibrahim A2 Ch8 protected wording changed');
}
if (!adamPair.en.pages.find((p) => p.id === 7)?.content?.includes('They also had lots of children.')) {
  errors.push('Adam A2 Ch7 approved grammar correction missing');
}
if (!adamPair.en.pages.find((p) => p.id === 9)?.content?.includes("his brother's dead body")) {
  errors.push('Adam A2 Ch9 approved possessive correction missing');
}
if (!yunusPair.en.pages.find((p) => p.id === 7)?.content?.includes('Yunus replied, “My teacher, I walked around the fields,')) {
  errors.push('Yunus A2 Ch7 approved punctuation correction missing');
}

console.log(`A2 source hotspot audit checked ${hotspotCount} EN/AR hotspots.`);
if (errors.length) {
  for (const item of errors) console.error(`ERROR: ${item}`);
  process.exitCode = 1;
} else {
  console.log('A2 source hotspot audit passed.');
}
