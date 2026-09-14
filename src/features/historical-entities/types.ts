export type HistoricalEntityLocale = 'en' | 'ar';

export type HistoricalEntityKind =
  | 'city'
  | 'kingdom'
  | 'region'
  | 'people'
  | 'tribe'
  | 'empire';

export type HistoricalMapFocus =
  | {
      mode: 'point';
      x: number;
      y: number;
    }
  | {
      mode: 'area';
      x: number;
      y: number;
      width: number;
      height: number;
      rotate?: number;
    };

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
  aliases: Record<HistoricalEntityLocale, string[]>;
  copy: Record<HistoricalEntityLocale, HistoricalEntityCopy>;
  mapAsset: HistoricalMapAsset;
  focus: HistoricalMapFocus;
  approximate: boolean;
  sources: string[];
}
