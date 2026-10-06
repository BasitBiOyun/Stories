// Chapter pictures and covers are full-size PNGs in Firebase Storage (they are made for print).
// The app shows a 1200 px wide WebP copy made by its own server (deploy/server.mjs, /media-image);
// on the dev server, or for any other address, the original is used.
const STORAGE_PREFIX = 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/';

export const appImage = (url: string | undefined, width = 1200): string => {
  if (!url) return '';
  if (import.meta.env.DEV || !url.startsWith(STORAGE_PREFIX)) return url;
  return `/media-image?w=${width}&src=${encodeURIComponent(url)}`;
};

/** If the small copy ever fails to load, the picture falls back to the original. */
export const fallBackToOriginal = (original: string | undefined) => (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (original && img.src !== original) img.src = original;
};
