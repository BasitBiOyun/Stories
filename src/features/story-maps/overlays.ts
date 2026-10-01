import type { StoryMapOverlay } from './types';

/**
 * Historical overlays in degrees (lon, lat). They are deliberately soft and approximate:
 * the Seljuk area around 1243 is drawn as a blurred zone, never as a hard border line.
 */
export const OVERLAY_SHAPES: Record<StoryMapOverlay, { kind: 'area' | 'route'; points: Array<[number, number]> }> = {
  'seljuk-1243': {
    kind: 'area',
    points: [
      [30.6, 36.85], [32.0, 36.5], [33.3, 36.6], [34.6, 37.3], [36.2, 37.8], [38.3, 38.2], [39.6, 39.4],
      [41.6, 39.8], [40.4, 40.4], [38.6, 40.4], [37.2, 40.9], [36.3, 41.3], [35.2, 41.95], [33.8, 41.6],
      [32.4, 41.1], [31.0, 40.4], [29.8, 39.6], [29.0, 38.3], [29.4, 37.3],
    ],
  },
  // Tabriz → Erzurum (1242) → Kösedağ (1243)
  'mongol-1243': {
    kind: 'route',
    points: [[46.1, 38.1], [43.6, 39.15], [41.27, 39.9], [39.4, 40.08], [38.55, 40.1]],
  },
};

/** Mountain glyph positions on real ranges (Taurus, Pontic, eastern highlands, Caucasus). Decoration only. */
export const ANATOLIA_RELIEF: Array<[number, number]> = [
  [30.9, 37.35], [32.6, 37.0], [34.2, 37.25], [35.6, 37.75], [37.4, 38.15],
  [36.8, 40.75], [38.9, 40.55], [40.6, 40.6], [42.4, 40.95],
  [42.6, 39.35], [44.0, 39.6],
  [44.2, 42.75], [46.3, 42.15],
  [36.6, 34.2],
];

/**
 * Time rules for the slider (fractional years). The Mongol route is drawn between 1242 and 1243;
 * the Seljuk lands change from "own power" to "under Mongol pressure" in the months after Kösedağ (1243).
 */
export const MONGOL_ROUTE_START = 1242;
export const MONGOL_ROUTE_END = 1243;
export const SELJUK_PRESSURE_START = 1243;
export const SELJUK_PRESSURE_SPAN = 0.6;
