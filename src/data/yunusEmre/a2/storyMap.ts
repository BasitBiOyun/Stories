import type { StoryMapLayout } from '../../../features/story-maps/types';

/** Shared, language-neutral layout of the map shown between chapters 1 and 2. Card text lives in en/ and ar/. */
export const yunusA2StoryMapLayout: StoryMapLayout = {
  baseMap: 'anatolia',
  home: { west: 25.5, east: 49, south: 32.5, north: 43.5 },
  overlays: ['seljuk-1243', 'mongol-1243'],
  places: [
    { id: 'anatolia', lon: 34.1, lat: 39.35, icon: 'quill', tone: 'place', labelSide: 'left' },
    { id: 'konya', lon: 32.49, lat: 37.87, icon: 'dome', tone: 'place', labelSide: 'bottom' },
    // The exact battlefield is not known; sources place it near Kösedağ, about 80 km north-east of Sivas.
    { id: 'kosedag', lon: 38.05, lat: 40.1, icon: 'swords', tone: 'event', labelSide: 'top' },
    { id: 'syria', lon: 37.3, lat: 34.9, icon: 'route', tone: 'place', areaRadiusKm: 230, labelSide: 'right' },
    // Medieval Azerbaijan: the land around Tabriz (north-west Iran today).
    { id: 'azerbaijan', lon: 46.29, lat: 38.08, icon: 'route', tone: 'place', areaRadiusKm: 150, labelSide: 'top' },
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
    { year: 1240, placeId: 'anatolia' },
    { year: 1243, placeId: 'kosedag' },
    { year: 1273, placeId: 'konya' },
    { year: 1320, placeId: 'anatolia' },
  ],
};
