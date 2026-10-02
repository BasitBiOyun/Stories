export type HistoricalEntityLocale = 'en' | 'ar';

/** The learner's own language, shown as a small "name in your language" line. */
export type LearnerLanguage = 'tr';

export type HistoricalEntityKind =
  | 'city'
  | 'kingdom'
  | 'region'
  | 'country'
  | 'sea'
  | 'river'
  | 'island'
  | 'landmark'
  | 'people'
  | 'tribe'
  | 'dynasty'
  | 'person'
  | 'empire';

export type HistoricalMapFocus =
  | {
      mode: 'point';
      x: number;
      y: number;
      /** Card map zoom around the point. 1 shows the whole map. */
      zoom?: number;
    }
  | {
      mode: 'area';
      x: number;
      y: number;
      width: number;
      height: number;
      rotate?: number;
      zoom?: number;
    }
  | {
      /** A round, approximate area. `radius` is a percentage of the map width. */
      mode: 'circle';
      x: number;
      y: number;
      radius: number;
      zoom?: number;
    }
  | {
      /** A sea, river or island drawn in its own shape; x/y place the label. */
      mode: 'feature';
      feature: string;
      x: number;
      y: number;
      zoom?: number;
    }
  | {
      /**
       * Where a people or a ruling family lived and acted: round lands, pins
       * for their main cities and arrows for where they came from. x/y place
       * the title label. All values are percentages of the map.
       */
      mode: 'group';
      x: number;
      y: number;
      zoom?: number;
      areas: { x: number; y: number; radius: number; faint?: boolean }[];
      pins: { x: number; y: number; label: string }[];
      arrows?: { fromX: number; fromY: number; toX: number; toY: number }[];
    };

/** A short time strip that sets a people or a ruler against the story's own years. */
export interface HistoricalTimeline {
  /** First and last year of the strip. */
  axis: [number, number];
  /** The story's own moment, e.g. the journey years. */
  reference: { from: number; to: number; label: string };
  segments: { from: number; to: number; label?: string; text?: string; faint?: boolean }[];
  events?: { year: number; label: string }[];
}

export interface HistoricalEntityCopy {
  title: string;
  kindLabel: string;
  periodLabel: string;
  summary: string;
  mapAlt: string;
  approximateLabel?: string;
}

export type HistoricalMapAsset = string | Record<HistoricalEntityLocale, string>;

export interface HistoricalEntity {
  id: string;
  kind: HistoricalEntityKind;
  aliases: Partial<Record<HistoricalEntityLocale, string[]>>;
  /** English is required; other editions fall back to it until they are written. */
  copy: { en: HistoricalEntityCopy } & Partial<Record<HistoricalEntityLocale, HistoricalEntityCopy>>;
  /** Optional: a card without a map shows only its text. */
  mapAsset?: HistoricalMapAsset;
  /** CSS aspect ratio of the map image, e.g. '800 / 537'. Defaults to 4 / 3. */
  mapAspect?: string;
  focus?: HistoricalMapFocus;
  /**
   * Draw the focus on top of a plain context map. Off for maps that already
   * carry their own marker artwork.
   */
  showFocus?: boolean;
  approximate: boolean;
  timeline?: HistoricalTimeline;
  /** The usual name in the learner's own language, when there is one. */
  learnerNames?: Partial<Record<LearnerLanguage, string>>;
  sources: string[];
}
