import type { StoryMapLayout } from '../../../features/story-maps/types';

/** Shared, language-neutral layout of the map shown after chapter 7. Card text lives in en/ and ar/. */
export const yunusB1StoryMapLayout: StoryMapLayout = {
  baseMap: 'anatolia',
  home: { west: 25.5, east: 51, south: 32.5, north: 43.5 },
  // The Anatolian Seljuk lands turn to "under Mongol pressure" after Kösedağ (1243) and to "joined to the Ilkhanate" after 1308.
  overlays: ['seljuk-1243', 'ilkhanate-1308'],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // The book says Yunus Emre was born around 1240–1241 and died around 1320–1321.
  time: { start: 1240, lastYear: 1320, birth: 1240 },
  routes: [
    // Chapter 4: the Mongol invasion made many people migrate to Anatolia from Central Asia (drawn by the first step).
    { id: 'migrations', points: [[51.5, 38.6], [47.5, 36.9], [43.5, 38.2], [38.6, 38.9]], start: 1240, end: 1240.6, tone: 'journey' },
    // Chapter 5: the Mongols in Azerbaijan take Erzurum (1242), then fight at Kösedağ (1243), then raid three cities.
    { id: 'mongols', points: [[46.1, 38.1], [43.6, 39.15], [41.27, 39.9]], start: 1241.6, end: 1242.6, tone: 'army' },
    { id: 'mongols-kosedag', points: [[41.27, 39.9], [39.4, 40.08], [38.05, 40.1]], start: 1242.6, end: 1243.25, tone: 'army' },
    // The raids finish by 1243.6, where the thumb rests after jumping to 1243, so the step shows them.
    { id: 'raid-sivas', points: [[38.05, 40.1], [37.02, 39.75]], start: 1243.25, end: 1243.6, tone: 'army' },
    { id: 'raid-kayseri', points: [[38.05, 40.1], [36.9, 39.3], [35.49, 38.72]], start: 1243.25, end: 1243.6, tone: 'army' },
    { id: 'raid-erzincan', points: [[38.05, 40.1], [38.8, 39.95], [39.49, 39.75]], start: 1243.25, end: 1243.6, tone: 'army' },
  ],
  places: [
    { id: 'anatolia', lon: 34.1, lat: 39.35, icon: 'quill', tone: 'place', labelSide: 'left' },
    { id: 'erzurum', lon: 41.27, lat: 39.9, icon: 'city', tone: 'event', labelSide: 'top' },
    // The book places the battle 80 km north-east of Sivas; the exact battlefield is not known.
    { id: 'kosedag', lon: 38.05, lat: 40.1, icon: 'swords', tone: 'event', labelSide: 'top' },
    // Medieval Azerbaijan: the land around Tabriz (north-west Iran today).
    { id: 'azerbaijan', lon: 46.29, lat: 38.08, icon: 'route', tone: 'place', areaRadiusKm: 150, labelSide: 'top' },
    // The Ilkhanate was "the Mongol state centred in Iran"; the pin marks the region only.
    { id: 'iran', lon: 49.0, lat: 34.9, icon: 'palace', tone: 'place', areaRadiusKm: 280, labelSide: 'left' },
  ],
  towns: [
    { id: 'sivas', lon: 37.02, lat: 39.75, labelSide: 'bottom' },
    { id: 'kayseri', lon: 35.49, lat: 38.72, labelSide: 'bottom' },
    { id: 'erzincan', lon: 39.49, lat: 39.75, labelSide: 'bottom' },
  ],
  seas: [
    { id: 'blackSea', lon: 34.6, lat: 42.85 },
    { id: 'mediterranean', lon: 30.6, lat: 34.6 },
  ],
  timeline: [
    { year: 1240, placeId: 'anatolia', camera: { lon: 39.5, lat: 38.8, zoom: 1.2 }, scene: { kind: 'dawn', placeId: 'anatolia' } },
    // 1242 and 1243 are shown by the Mongol army routes drawing themselves.
    { year: 1242, placeId: 'erzurum', camera: { lon: 43.6, lat: 39.2, zoom: 1.9 } },
    { year: 1243, placeId: 'kosedag', camera: { lon: 38.3, lat: 39.4, zoom: 1.9 } },
    // The book does not say where the commanders and governors came from; the light only shows Mongol rule reaching Anatolia.
    { year: 1277, placeId: 'iran', camera: { lon: 42.5, lat: 37.6, zoom: 1.25 }, scene: { kind: 'radiate', placeId: 'iran', reach: ['erzurum', 'erzincan', 'sivas', 'kayseri'] } },
    { year: 1308, placeId: 'iran', camera: { lon: 40.5, lat: 38.2, zoom: 1.05 }, scene: { kind: 'radiate', placeId: 'iran', reach: ['anatolia', 'erzurum', 'erzincan', 'sivas', 'kayseri'] } },
    // Chapter 7: Yunus travelled around Anatolia (no towns are named), so the end shows only a wide glow over Anatolia.
    { year: 1320, placeId: 'anatolia', camera: { lon: 37.5, lat: 38.6, zoom: 1.05 }, scene: { kind: 'journey', fromId: 'anatolia', toIds: [] } },
  ],
  challenge: [
    { id: 'anatolia', lon: 33.6, lat: 39.0, radiusKm: 330 },
    { id: 'kosedag', lon: 38.05, lat: 40.1, radiusKm: 110 },
    { id: 'erzurum', lon: 41.27, lat: 39.9, radiusKm: 110 },
    { id: 'kayseri', lon: 35.49, lat: 38.72, radiusKm: 100 },
    { id: 'azerbaijan', lon: 46.29, lat: 38.08, radiusKm: 170 },
  ],
};
