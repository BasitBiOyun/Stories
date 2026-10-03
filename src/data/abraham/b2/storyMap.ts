import type { StoryMapLayout } from '../../../features/story-maps/types';

/**
 * Shared, language-neutral layout of the map shown between chapters 4 and 5. Card text lives in en/ and ar/.
 * The B2 dates are hedged ("believed", "some sources … 2200–2000 BC"), so the slider follows the chapters.
 */
export const abrahamB2StoryMapLayout: StoryMapLayout = {
  baseMap: 'nearEast',
  home: { west: 28.5, east: 48.5, south: 12.5, north: 38 },
  overlays: [],
  features: { timeSlider: true, tour: true, challenge: true, classroom: true },
  time: { start: 1, lastYear: 9, birth: 1, mode: 'stages' },
  places: [
    // Chapter 4: "born in the city of Ur or Babylon". One birth card; Ur is the small town dot.
    { id: 'babylon', entityId: 'abraham-babylon', lon: 44.42, lat: 32.54, icon: 'city', tone: 'place', labelSide: 'left' },
    // Chapter 4: only "some sources" say he migrated to Harran. Ancient Harran, south-east Türkiye today.
    { id: 'harran', entityId: 'abraham-harran', lon: 39.03, lat: 36.87, icon: 'route', tone: 'place', labelSide: 'right' },
    // The text does not say where the fire was; the pin sits beside Babylon so the event has its own card.
    { id: 'fire', lon: 45.3, lat: 33.0, icon: 'palace', tone: 'event', labelSide: 'right' },
    { id: 'egypt', entityId: 'abraham-egypt-ancient', lon: 30.9, lat: 28.4, icon: 'waves', tone: 'place', areaRadiusKm: 300, showArea: true, labelSide: 'bottom' },
    { id: 'palestine', entityId: 'abraham-palestine-ancient', lon: 35.2, lat: 31.6, icon: 'route', tone: 'place', areaRadiusKm: 110, labelSide: 'right' },
    { id: 'mecca', entityId: 'abraham-mecca-valley-ancient', lon: 39.83, lat: 21.42, icon: 'kaaba', tone: 'place', labelSide: 'left' },
    // Chapter 30: Jurham came "from southern Arabia, Yemen".
    { id: 'yemen', entityId: 'abraham-yemen', lon: 44.8, lat: 15.6, icon: 'tent', tone: 'place', areaRadiusKm: 260, showArea: true, labelSide: 'right' },
  ],
  towns: [
    { id: 'ur', lon: 46.1, lat: 30.96 },
  ],
  seas: [
    { id: 'mediterranean', lon: 31.5, lat: 33.2 },
    { id: 'redSea', lon: 37.0, lat: 23.5 },
  ],
  routes: [
    // Chapter 4 (hedged): "Some sources say that he was born in the land of Sumer, Mesopotamia, and migrated from there to Harran."
    {
      id: 'harran',
      points: [[46.1, 30.96], [45.2, 31.9], [43.4, 33.6], [42.0, 34.45], [40.2, 35.35], [39.3, 36.1], [39.03, 36.87]],
      start: 1.6,
      end: 2,
      tone: 'journey',
    },
    // Chapter 25: "After Egypt, Abraham (pbuh) traveled to Palestine and settled there." No line is drawn to Egypt:
    // the text does not say where he started from.
    {
      id: 'egyptPalestine',
      points: [[30.9, 28.4], [31.6, 30.0], [32.8, 30.9], [34.2, 31.3], [35.2, 31.6]],
      start: 4.6,
      end: 5,
      tone: 'journey',
    },
    // Chapters 26 and 28: Hagar and Ishmael "had to leave Palestine and settle in the barren valley of Mecca".
    {
      id: 'toMecca',
      points: [[35.2, 31.6], [35.6, 30.0], [36.6, 28.0], [37.9, 25.6], [39.3, 23.6], [39.83, 21.42]],
      start: 5.6,
      end: 6,
      tone: 'journey',
    },
    // Chapter 30: the tribe of Jurham, moving from southern Arabia, Yemen, stops by the valley of Mecca.
    {
      id: 'jurham',
      points: [[44.8, 15.6], [43.8, 17.4], [42.5, 19.0], [41.0, 20.4], [39.83, 21.42]],
      start: 6.6,
      end: 7,
      tone: 'journey',
    },
    // Chapter 33: "Abraham (pbuh) returned to Palestine." Drawn a little apart from the way south.
    {
      id: 'returnPalestine',
      points: [[39.83, 21.42], [39.1, 23.3], [37.8, 25.6], [36.3, 28.1], [35.3, 30.0], [35.2, 31.6]],
      start: 7.6,
      end: 8,
      tone: 'journey',
    },
  ],
  timeline: [
    { year: 1, chapter: 4, placeId: 'babylon', camera: { lon: 44.9, lat: 31.9, zoom: 2.0 }, scene: { kind: 'dawn', placeId: 'babylon' } },
    { year: 2, chapter: 4, placeId: 'harran', camera: { lon: 42.5, lat: 34.0, zoom: 1.6 } },
    // "Abraham (pbuh)'s fame spread throughout the entire kingdom of Babylonia" (chapter 24).
    { year: 3, chapter: 21, placeId: 'fire', camera: { lon: 44.8, lat: 32.8, zoom: 2.3 }, scene: { kind: 'radiate', placeId: 'fire', reach: ['babylon'] } },
    { year: 4, chapter: 25, placeId: 'egypt', camera: { lon: 31.6, lat: 29.0, zoom: 1.8 } },
    { year: 5, chapter: 25, placeId: 'palestine', camera: { lon: 33.3, lat: 30.3, zoom: 1.8 } },
    { year: 6, chapter: 26, placeId: 'mecca', camera: { lon: 37.6, lat: 26.5, zoom: 1.35 } },
    { year: 7, chapter: 30, placeId: 'mecca', camera: { lon: 41.8, lat: 18.8, zoom: 1.5 }, scene: { kind: 'dawn', placeId: 'mecca' } },
    { year: 8, chapter: 33, placeId: 'palestine', camera: { lon: 37.6, lat: 26.5, zoom: 1.35 } },
    // Chapters 34–35: Abraham (pbuh) travels to Mecca to build the Ka’ba; he leaves Palestine to Isaac and Mecca to Ishmael.
    { year: 9, chapter: 35, placeId: 'mecca', camera: { lon: 37.6, lat: 26.5, zoom: 1.15 }, scene: { kind: 'journey', fromId: 'palestine', toIds: ['mecca'] } },
  ],
  challenge: [
    { id: 'babylon', lon: 44.9, lat: 31.8, radiusKm: 170 },
    { id: 'egypt', lon: 30.9, lat: 28.4, radiusKm: 300 },
    { id: 'palestine', lon: 35.2, lat: 31.6, radiusKm: 160 },
    { id: 'mecca', lon: 39.83, lat: 21.42, radiusKm: 120 },
    { id: 'yemen', lon: 44.8, lat: 15.6, radiusKm: 280 },
  ],
};
