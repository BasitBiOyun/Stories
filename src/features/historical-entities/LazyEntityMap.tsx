import React, { Suspense, lazy } from 'react';
import { cn } from '../../lib/utils';

// The map outlines are large, so they stay out of the first download. They are fetched in the
// background once the page is idle (see preloadDeferredChunks), so a card opens without waiting.
const loadEntityMap = () => import('./EntityMap');
const EntityMapImpl = lazy(() => loadEntityMap().then(module => ({ default: module.EntityMap })));

export const preloadEntityMap = () => loadEntityMap();

type EntityMapProps = React.ComponentProps<typeof EntityMapImpl>;

/** EntityMap behind Suspense: until the code arrives, a map-coloured box of the same size holds the place. */
export const EntityMap = (props: EntityMapProps) => (
  <Suspense
    fallback={(
      <div
        className={cn('relative overflow-hidden rounded-xl bg-[#b9d3cf]', props.className)}
        style={{ aspectRatio: props.aspect ?? '4 / 3', ...props.style }}
      />
    )}
  >
    <EntityMapImpl {...props} />
  </Suspense>
);
