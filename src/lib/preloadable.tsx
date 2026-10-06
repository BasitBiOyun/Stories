import React, { lazy, useState } from 'react';

/**
 * A component kept out of the first download that can be fetched ahead of time. Once fetched it
 * renders straight away, with no Suspense pause; before that it suspends like React.lazy.
 */
export function preloadable<P extends object>(load: () => Promise<React.ComponentType<P>>) {
  let loaded: React.ComponentType<P> | null = null;
  let pending: Promise<React.ComponentType<P>> | null = null;

  const preload = () => {
    pending ??= load()
      .then(component => (loaded = component))
      .catch(error => {
        pending = null;
        throw error;
      });
    return pending;
  };

  const Lazy = lazy(() => preload().then(component => ({ default: component })));

  const Component = (props: P) => {
    // Chosen once per mount, so the element type never changes under a mounted page.
    const [Ready] = useState(() => loaded);
    return Ready ? <Ready {...props} /> : <Lazy {...props} />;
  };

  return { Component, preload };
}
