import { useEffect, useMemo, useRef, useState } from 'react';
import type { Level } from '../types';
import { getBookDefinition } from '../core/content/bookRegistry';
import type { BookDefinition } from '../core/content/bookRegistry';
import type { BookPair } from '../core/content/contracts';
import { setActiveBilingualBookPair } from '../data/bilingualHighlightCards';
import { loadReaderChunks } from '../components/book/readerChunks';
import { panelAssetOverrides, usePanelPreviewRevision } from '../content/panelPreview';
import type { ResolvedBookAssets } from '../core/storage/contracts';
import {
  applyResolvedAssets,
  EMPTY_RESOLVED_ASSETS,
  loadBookAssets,
} from '../core/storage/storageAssetLoader';

export interface BookBundleState {
  definition: BookDefinition | null;
  pair: BookPair | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Loads only the selected story-level bundle. The Firebase Storage SDK is
 * imported after selection, and canonical BookData is never mutated.
 */
export const useBookBundle = (storyId: string | null, level: Level | null): BookBundleState => {
  const definition = useMemo(
    () => storyId && level ? getBookDefinition(storyId, level) : null,
    [storyId, level],
  );
  const [pair, setPair] = useState<BookPair | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  // Grows only inside the content panel's frame, when an edited file changes.
  const panelRevision = usePanelPreviewRevision();
  const [loadedFor, setLoadedFor] = useState<BookDefinition | null>(null);
  // The media found for the open book, so a panel reload shows the edit at once with its pictures.
  const lastAssets = useRef<ResolvedBookAssets>(EMPTY_RESOLVED_ASSETS);

  useEffect(() => {
    let cancelled = false;
    let mediaTimer: number | null = null;
    // A panel change reloads the open book in place; a new book starts from an empty reader.
    const softReload = loadedFor === definition && panelRevision > 0;
    if (!softReload) {
      setActiveBilingualBookPair(null);
      setPair(null);
    }
    setError(null);

    if (!definition) {
      setLoading(false);
      return () => {
        cancelled = true;
        setActiveBilingualBookPair(null);
      };
    }

    if (!softReload) setLoading(true);
    const loadStartedAt = performance.now();

    const load = async () => {
      // The reader pages are their own download; fetch them alongside the book content.
      const [loadedPair] = await Promise.all([definition.load(), loadReaderChunks()]);
      if (cancelled) return;

      // Open the book as soon as its reviewed content chunk is ready. Existing
      // authored media URLs are validated immediately, while Firebase folder
      // discovery continues without blocking the first render.
      const withPanelMedia = (assets: ResolvedBookAssets): ResolvedBookAssets => {
        const overrides = panelAssetOverrides(definition.storyId, definition.level);
        if (!overrides) return assets;
        return {
          images: { ...assets.images, ...overrides.images },
          englishAudio: { ...assets.englishAudio, ...overrides.englishAudio },
          arabicAudio: { ...assets.arabicAudio, ...overrides.arabicAudio },
        };
      };
      if (!softReload) lastAssets.current = EMPTY_RESOLVED_ASSETS;
      const immediatePair = applyResolvedAssets(loadedPair, withPanelMedia(lastAssets.current));
      setActiveBilingualBookPair(immediatePair);
      setPair(immediatePair);
      setLoadedFor(definition);
      setLoading(false);
      console.info(
        `[Book performance] ${definition.storyId} ${definition.level} reader ready in ${Math.round(performance.now() - loadStartedAt)} ms`,
      );

      // A panel reload keeps the media already found; only the first load looks for it.
      if (softReload && lastAssets.current !== EMPTY_RESOLVED_ASSETS) return;
      mediaTimer = window.setTimeout(() => {
        loadBookAssets(definition.storage)
          .then(loadedAssets => {
            if (cancelled) return;
            lastAssets.current = loadedAssets;
            const resolvedPair = applyResolvedAssets(loadedPair, withPanelMedia(loadedAssets));
            setActiveBilingualBookPair(resolvedPair);
            setPair(resolvedPair);
            console.info(
              `[Book performance] ${definition.storyId} ${definition.level} media resolved in ${Math.round(performance.now() - loadStartedAt)} ms`,
            );
          })
          .catch(reason => {
            // Media discovery is an enhancement layer. The authored book remains
            // usable even when Firebase listing is slow or temporarily unavailable.
            console.warn('[Book media] Background media resolution failed.', reason);
          });
      }, softReload ? 0 : 250);
    };

    load().catch(reason => {
      if (cancelled) return;
      setActiveBilingualBookPair(null);
      setError(reason instanceof Error ? reason : new Error(String(reason)));
      setLoading(false);
    });

    return () => {
      cancelled = true;
      if (mediaTimer !== null) window.clearTimeout(mediaTimer);
      setActiveBilingualBookPair(null);
    };
    // loadedFor only tells a panel reload from a new book; it must not start a load itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [definition, panelRevision]);

  return { definition, pair, loading, error };
};
