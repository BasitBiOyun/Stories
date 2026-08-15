import { bookRegistry } from '../../src/core/content/bookRegistry';
import { applyResolvedAssets, isValidAudioUrl, isValidImageUrl, loadBookAssets } from '../../src/core/storage/storageAssetLoader';

const main = async () => {
  console.log('[Storage media audit] scanning configured Firebase folders...');
  const summaries: string[] = [];
  let contradictions = 0;

  for (const definition of bookRegistry) {
    const label = `${definition.storyId}:${definition.level}`;
    const pair = await definition.load();
    const storyIds = pair.en.pages.filter(page => page.type === 'story').map(page => page.id);
    const assets = await loadBookAssets(definition.storage);
    const resolved = applyResolvedAssets(pair, assets);
    const arById = new Map(resolved.ar.pages.map(page => [page.id, page]));

    let images = 0;
    let englishAudio = 0;
    let arabicAudio = 0;
    const missingImages: number[] = [];
    const missingEnglishAudio: number[] = [];
    const missingArabicAudio: number[] = [];

    for (const id of storyIds) {
      const en = resolved.en.pages.find(page => page.id === id && page.type === 'story');
      const ar = arById.get(id);
      if (!en || ar?.type !== 'story') {
        contradictions += 1;
        console.error(`[Storage media audit] ${label} chapter ${id}: EN/AR story page pairing missing.`);
        continue;
      }

      if (en.image && isValidImageUrl(en.image) && ar.image === en.image) images += 1;
      else missingImages.push(id);

      if (en.audioUrl && isValidAudioUrl(en.audioUrl)) englishAudio += 1;
      else missingEnglishAudio.push(id);

      if (ar.audioUrl && isValidAudioUrl(ar.audioUrl) && ar.audioUrl !== en.audioUrl) arabicAudio += 1;
      else missingArabicAudio.push(id);

      if (en.image !== ar.image) {
        contradictions += 1;
        console.error(`[Storage media audit] ${label} chapter ${id}: EN/AR images differ.`);
      }
      if (en.audioUrl && ar.audioUrl && en.audioUrl === ar.audioUrl) {
        contradictions += 1;
        console.error(`[Storage media audit] ${label} chapter ${id}: EN/AR narration URL is identical.`);
      }
    }

    const total = storyIds.length;
    const detail = [
      `images ${images}/${total}${missingImages.length ? ` missing[${missingImages.join(',')}]` : ''}`,
      `EN audio ${englishAudio}/${total}${missingEnglishAudio.length ? ` missing[${missingEnglishAudio.join(',')}]` : ''}`,
      `AR audio ${arabicAudio}/${total}${missingArabicAudio.length ? ` missing[${missingArabicAudio.join(',')}]` : ''}`,
    ].join(' | ');
    summaries.push(`${label}: ${detail}`);
  }

  summaries.forEach(summary => console.log(`[Storage media audit] ${summary}`));
  if (contradictions) throw new Error(`[Storage media audit] found ${contradictions} chapter-level media contradictions.`);
  console.log('[Storage media audit] no wrong-type, cross-language, or chapter-pair contradictions found. Missing media is reported above and remains blank rather than being substituted incorrectly.');
};

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
