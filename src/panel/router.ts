import { useSyncExternalStore } from 'react';

/** The panel's pages live in the address after #, so the browser's back button and links work. */
const ROUTE_EVENT = 'panel-route';

export const navigate = (to: string, { replace = false }: { replace?: boolean } = {}) => {
  const hash = `#${to.startsWith('/') ? to : `/${to}`}`;
  if (window.location.hash === hash) return;
  if (replace) {
    history.replaceState(null, '', hash);
    window.dispatchEvent(new Event(ROUTE_EVENT));
  } else window.location.hash = hash;
};

const subscribe = (listener: () => void) => {
  window.addEventListener('hashchange', listener);
  window.addEventListener(ROUTE_EVENT, listener);
  return () => {
    window.removeEventListener('hashchange', listener);
    window.removeEventListener(ROUTE_EVENT, listener);
  };
};

export interface Route {
  parts: string[];
  query: URLSearchParams;
}

let cached: { hash: string; route: Route } | null = null;
const read = (): Route => {
  const hash = window.location.hash;
  if (cached?.hash === hash) return cached.route;
  const [path, search = ''] = hash.replace(/^#\/?/, '').split('?');
  const route = { parts: path.split('/').filter(Boolean).map(decodeURIComponent), query: new URLSearchParams(search) };
  cached = { hash, route };
  return route;
};

export const useRoute = (): Route => useSyncExternalStore(subscribe, read);
