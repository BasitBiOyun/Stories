import { useEffect, useMemo, useState } from 'react';
import type { Level } from '../types';
import { getBookDefinition } from '../core/content/bookRegistry';
import type { BookDefinition } from '../core/content/bookRegistry';
import type { BookPair } from '../core/content/contracts';
import { applyResolvedAssets, loadBookAssets } from '../core/storage/storageAssetLoader';

export interface BookBundleState {
  definition: BookDefinition | null;
  pair: BookPair | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Loads only the selected story-level bundle and its optional Storage overlays.
 * Canonical BookData is never mutated; Storage URLs are applied to a derived view model.
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
    setPair(null);
    setError(null);

    if (!definition) {
      setLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setLoading(true);
    Promise.all([
      definition.load(),
      loadBookAssets(definition.storage),
    ])
      .then(([loadedPair, loadedAssets]) => {
        if (cancelled) return;
        setPair(applyResolvedAssets(loadedPair, loadedAssets));
        setLoading(false);
      })
      .catch(reason => {
        if (cancelled) return;
        setError(reason instanceof Error ? reason : new Error(String(reason)));
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [definition]);

  return { definition, pair, loading, error };
};
