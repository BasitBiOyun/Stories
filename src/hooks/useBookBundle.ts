import { useEffect, useMemo, useState } from 'react';
import type { Level } from '../types';
import { getBookDefinition } from '../core/content/bookRegistry';
import type { BookDefinition } from '../core/content/bookRegistry';
import type { BookPair } from '../core/content/contracts';
import { setActiveBilingualBookPair } from '../data/bilingualHighlightCards';

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
      const [loadedPair, storageModule] = await Promise.all([
        definition.load(),
        import('../core/storage/storageAssetLoader'),
      ]);
      const loadedAssets = await storageModule.loadBookAssets(definition.storage);
      return storageModule.applyResolvedAssets(loadedPair, loadedAssets);
    };

    load()
      .then(loadedPair => {
        if (cancelled) return;
        // Register before state publication so VocabularyWord sees the complete
        // bilingual pair on its very first render for this book.
        setActiveBilingualBookPair(loadedPair);
        setPair(loadedPair);
        setLoading(false);
      })
      .catch(reason => {
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
