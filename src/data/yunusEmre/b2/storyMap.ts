import type { StoryMapLayout } from '../../../features/story-maps/types';

/** Shared, language-neutral layout of the map shown after chapter 7. Card text lives in en/ and ar/. */
export const yunusB2StoryMapLayout: StoryMapLayout = {
  baseMap: 'anatolia',
  home: { west: 25.5, east: 51, south: 32.5, north: 43.5 },
  // The Anatolian Seljuk lands turn to "under Mongol pressure" after Kösedağ (1243) and to "joined to the Ilkhanate" after 1308.
  overlays: ['seljuk-1243', 'ilkhanate-1308'],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  // The book gives the widely accepted view: born in 1240–41, died in 1320–21.
  time: { start: 1240, lastYear: 1320, birth: 1240 },
  routes: [
    // Chapter 4: Oguz and Turkmen tribes migrated to Anatolia from Central Asia (drawn by the first step).
    { id: 'migrations', points: [[51.5, 38.6], [47.5, 36.9], [43.5, 38.2], [38.6, 38.9], [36.2, 39.0], [34.1, 39.35]], start: 1240, end: 1240.6, tone: 'journey' },
    // Chapter 5: the Mongols in Azerbaijan take Erzurum (1242), then fight at Kösedağ (1243), then raid three cities.
    // B2 says "late 1242", so the first army line starts late in 1242.
    { id: 'mongols', points: [[46.29, 38.08], [43.6, 39.15], [41.27, 39.9]], start: 1242.1, end: 1242.6, tone: 'army' },
    { id: 'mongols-kosedag', points: [[41.27, 39.9], [39.4, 40.08], [38.05, 40.1]], start: 1242.6, end: 1243.25, tone: 'army' },
    // The raids finish by 1243.6, where the thumb rests after jumping to 1243, so the step shows them.
    { id: 'raid-sivas', points: [[38.05, 40.1], [37.02, 39.75]], start: 1243.25, end: 1243.6, tone: 'army' },
    { id: 'raid-kayseri', points: [[38.05, 40.1], [36.9, 39.3], [35.49, 38.72]], start: 1243.25, end: 1243.6, tone: 'army' },
    { id: 'raid-erzincan', points: [[38.05, 40.1], [38.8, 39.95], [39.49, 39.75]], start: 1243.25, end: 1243.6, tone: 'army' },
  ],
  places: [
    { id: 'anatolia', entityId: 'yunus-anatolia', lon: 34.1, lat: 39.35, icon: 'quill', tone: 'place', labelSide: 'left' },
    // B2 names Konya only in "the Seljuk Sultanate of Konya"; the pin marks the city.
    { id: 'konya', entityId: 'yunus-konya', lon: 32.49, lat: 37.87, icon: 'dome', tone: 'place', labelSide: 'bottom' },
    { id: 'erzurum', entityId: 'yunus-erzurum', lon: 41.27, lat: 39.9, icon: 'city', tone: 'event', labelSide: 'top' },
    // The book places the battle 80 km north-east of Sivas; the exact battlefield is not known.
    { id: 'kosedag', entityId: 'yunus-kosedag', lon: 38.05, lat: 40.1, icon: 'swords', tone: 'event', labelSide: 'top' },
    // Medieval Azerbaijan: the land around Tabriz (north-west Iran today).
    { id: 'azerbaijan', entityId: 'yunus-azerbaijan', lon: 46.29, lat: 38.08, icon: 'route', tone: 'place', areaRadiusKm: 150, labelSide: 'top' },
    // The Ilkhanate was "the Mongol state centred in Iran"; the pin marks the region only.
    { id: 'iran', entityId: 'yunus-iran', lon: 49.0, lat: 34.9, icon: 'palace', tone: 'place', areaRadiusKm: 280, labelSide: 'left' },
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
    // 1240: the Baba İshak uprising (chapter 4) and, around this time, Yunus's birth (1240–41).
    { year: 1240, placeId: 'anatolia', camera: { lon: 39.5, lat: 38.8, zoom: 1.2 }, scene: { kind: 'dawn', placeId: 'anatolia' } },
    // 1242 and 1243 are shown by the Mongol army routes drawing themselves.
    { year: 1242, placeId: 'erzurum', camera: { lon: 43.6, lat: 39.2, zoom: 1.9 } },
    { year: 1243, placeId: 'kosedag', camera: { lon: 38.3, lat: 39.4, zoom: 1.9 } },
    // The light from Iran shows the lands of Anatolia joined to the Ilkhanate, the Mongol state centred in Iran.
    { year: 1308, placeId: 'iran', camera: { lon: 40.5, lat: 38.0, zoom: 1.05 }, scene: { kind: 'radiate', placeId: 'iran', reach: ['anatolia', 'konya', 'erzurum', 'erzincan', 'sivas', 'kayseri'] } },
    // Chapter 7: Yunus travelled around Anatolia (no towns are named), so the end shows only a wide glow over Anatolia.
    { year: 1320, placeId: 'anatolia', camera: { lon: 37.5, lat: 38.6, zoom: 1.05 }, scene: { kind: 'journey', fromId: 'anatolia', toIds: [] } },
  ],
  challenge: [
    { id: 'konya', lon: 32.49, lat: 37.87, radiusKm: 110 },
    { id: 'kosedag', lon: 38.05, lat: 40.1, radiusKm: 110 },
    { id: 'erzurum', lon: 41.27, lat: 39.9, radiusKm: 110 },
    { id: 'erzincan', lon: 39.49, lat: 39.75, radiusKm: 90 },
    { id: 'azerbaijan', lon: 46.29, lat: 38.08, radiusKm: 170 },
  ],
};
