import { useEffect, useMemo, useState } from 'react';
import type { Level } from '../types';
import { getBookDefinition } from '../core/content/bookRegistry';
import type { BookDefinition } from '../core/content/bookRegistry';
import type { BookPair } from '../core/content/contracts';
import { setActiveBilingualBookPair } from '../data/bilingualHighlightCards';
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

  useEffect(() => {
    let cancelled = false;
    setActiveBilingualBookPair(null);
    setPair(null);
    setError(null);

    if (!definition) {
      setLoading(false);
      return () => {
        cancelled = true;
        setActiveBilingualBookPair(null);
      };
    }

    setLoading(true);

    const load = async () => {
      const loadedPair = await definition.load();
      if (cancelled) return;

      // Open the book as soon as its reviewed content chunk is ready. Existing
      // authored media URLs are validated immediately, while Firebase folder
      // discovery continues without blocking the first render.
      const immediatePair = applyResolvedAssets(loadedPair, EMPTY_RESOLVED_ASSETS);
      setActiveBilingualBookPair(immediatePair);
      setPair(immediatePair);
      setLoading(false);

      loadBookAssets(definition.storage)
        .then(loadedAssets => {
          if (cancelled) return;
          const resolvedPair = applyResolvedAssets(loadedPair, loadedAssets);
          setActiveBilingualBookPair(resolvedPair);
          setPair(resolvedPair);
        })
        .catch(reason => {
          // Media discovery is an enhancement layer. The authored book remains
          // usable even when Firebase listing is slow or temporarily unavailable.
          console.warn('[Book media] Background media resolution failed.', reason);
        });
    };

    load().catch(reason => {
      if (cancelled) return;
      setActiveBilingualBookPair(null);
      setError(reason instanceof Error ? reason : new Error(String(reason)));
      setLoading(false);
    });

    return () => {
      cancelled = true;
      setActiveBilingualBookPair(null);
    };
  }, [definition]);

  return { definition, pair, loading, error };
};
