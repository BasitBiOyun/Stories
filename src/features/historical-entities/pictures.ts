import type { HistoricalEntity } from './types';

// Square card pictures, one per place or person, made small (480px WebP) from
// the files in Storage "places-people/<Story>/". A card without a file yet
// shows a soft placeholder in its group colour.
let files: Record<string, string> = {};
try {
  files = import.meta.glob('./assets/pictures/*/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
} catch {
  // Outside Vite (the Node validation scripts) there are no pictures to list.
}

const byKey = new Map(
  Object.entries(files).map(([path, url]) => {
    const [folder, file] = path.split('/').slice(-2);
    return [`${folder}/${file.replace(/\.webp$/, '')}`, url];
  }),
);

export const entityPictureUrl = (entity: HistoricalEntity) =>
  entity.picture ? byKey.get(`${entity.picture.folder}/${entity.picture.name}`) : undefined;
