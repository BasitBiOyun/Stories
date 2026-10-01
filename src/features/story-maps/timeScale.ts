import { clamp } from './geometry';
import type { StoryMap } from './types';

/** Where the thumb rests after jumping to an event, so the event reads as fully happened. */
export const EVENT_SETTLE = 0.6;

export interface TimeScale {
  /** Slider position (0–1) for a year. */
  toPos: (year: number) => number;
  /** Year for a slider position (0–1). */
  toYear: (pos: number) => number;
  /** Position of each event; events sit at the centres of equal cells, so labels line up under them. */
  eventPos: number[];
  minYear: number;
  maxYear: number;
}

/**
 * The time line gives every event the same space, whatever the gap in years (3 years before
 * Kösedağ, 47 before 1320). Between two events, time runs evenly. Each event sits at the centre of
 * its own cell, so the year buttons under the track line up exactly with the dots on it.
 */
export const makeTimeScale = (map: StoryMap): TimeScale => {
  const n = map.timeline.length;
  const minYear = map.time.start;
  const maxYear = map.time.lastYear + 0.99;
  const eventPos = map.timeline.map((_, index) => (index + 0.5) / n);
  const knots: [number, number][] = [
    [minYear, 0],
    ...map.timeline.map((item, index): [number, number] => [Math.min(item.year + EVENT_SETTLE, maxYear), eventPos[index]]),
    [maxYear, 1],
  ].filter((knot, index, all) => index === 0 || knot[0] > all[index - 1][0]) as [number, number][];

  const interpolate = (value: number, from: 0 | 1, to: 0 | 1) => {
    for (let i = 1; i < knots.length; i += 1) {
      const [a, b] = [knots[i - 1], knots[i]];
      if (value <= b[from] || i === knots.length - 1) {
        const span = b[from] - a[from];
        const t = span === 0 ? 0 : clamp((value - a[from]) / span, 0, 1);
        return a[to] + (b[to] - a[to]) * t;
      }
    }
    return knots[knots.length - 1][to];
  };

  return {
    toPos: year => interpolate(clamp(year, minYear, maxYear), 0, 1),
    toYear: pos => interpolate(clamp(pos, 0, 1), 1, 0),
    eventPos,
    minYear,
    maxYear,
  };
};
