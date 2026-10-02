import type { StoryMapLayout } from '../../../features/story-maps/types';

/** Shared, language-neutral layout of the map shown between chapters 1 and 2. Card text lives in en/ and ar/. */
export const yunusA2StoryMapLayout: StoryMapLayout = {
  baseMap: 'anatolia',
  home: { west: 25.5, east: 49, south: 32.5, north: 43.5 },
  overlays: ['seljuk-1243', 'mongol-1243'],
  // A2 learners get the full set of tools; each is simple to use on its own.
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // The book says Yunus Emre was born in 1240 and died in 1320.
  time: { start: 1240, lastYear: 1320, birth: 1240 },
  places: [
    { id: 'anatolia', entityId: 'yunus-anatolia', lon: 34.1, lat: 39.35, icon: 'quill', tone: 'place', labelSide: 'left' },
    { id: 'konya', entityId: 'yunus-konya', lon: 32.49, lat: 37.87, icon: 'dome', tone: 'place', labelSide: 'bottom' },
    // The exact battlefield is not known; sources place it near Kösedağ, about 80 km north-east of Sivas.
    { id: 'kosedag', entityId: 'yunus-kosedag', lon: 38.05, lat: 40.1, icon: 'swords', tone: 'event', labelSide: 'top' },
    { id: 'syria', entityId: 'yunus-syria', lon: 37.3, lat: 34.9, icon: 'route', tone: 'place', areaRadiusKm: 230, labelSide: 'right' },
    // Medieval Azerbaijan: the land around Tabriz (north-west Iran today).
    { id: 'azerbaijan', entityId: 'yunus-azerbaijan', lon: 46.29, lat: 38.08, icon: 'route', tone: 'place', areaRadiusKm: 150, labelSide: 'top' },
  ],
  towns: [
    { id: 'sivas', lon: 37.02, lat: 39.75, labelSide: 'bottom' },
    { id: 'erzurum', lon: 41.27, lat: 39.9 },
    { id: 'aleppo', lon: 37.16, lat: 36.2 },
    { id: 'damascus', lon: 36.29, lat: 33.51 },
  ],
  seas: [
    { id: 'blackSea', lon: 34.6, lat: 42.85 },
    { id: 'mediterranean', lon: 30.6, lat: 34.6 },
  ],
  timeline: [
    { year: 1240, placeId: 'anatolia', camera: { lon: 34.5, lat: 39.2, zoom: 1.5 }, scene: { kind: 'dawn', placeId: 'anatolia' } },
    { year: 1243, placeId: 'kosedag', camera: { lon: 41.5, lat: 39.6, zoom: 1.7 } },
    { year: 1273, placeId: 'konya', camera: { lon: 33.6, lat: 38.5, zoom: 1.9 }, scene: { kind: 'radiate', placeId: 'konya' } },
    // The A2 text names Yunus's travels without dates, so they are drawn only as a summary of his life at its end.
    { year: 1320, placeId: 'anatolia', camera: { lon: 38.6, lat: 37.6, zoom: 1.05 }, scene: { kind: 'journey', fromId: 'anatolia', toIds: ['syria', 'azerbaijan'] } },
  ],
  // The accepted answer is a circle, wide enough for a child's finger and for places that are regions.
  challenge: [
    { id: 'anatolia', lon: 33.6, lat: 39.0, radiusKm: 330 },
    { id: 'konya', lon: 32.49, lat: 37.87, radiusKm: 110 },
    { id: 'syria', lon: 37.3, lat: 34.9, radiusKm: 230 },
    { id: 'azerbaijan', lon: 46.29, lat: 38.08, radiusKm: 170 },
    { id: 'kosedag', lon: 38.05, lat: 40.1, radiusKm: 110 },
  ],
};
