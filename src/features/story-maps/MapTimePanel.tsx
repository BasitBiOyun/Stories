import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { Pause, Play } from '../../components/ui/icons';
import { clamp } from './geometry';
import type { StoryMap } from './types';

interface MapTimePanelProps {
  map: StoryMap;
  year: number;
  activeIndex: number;
  playing: boolean;
  eventColor: string;
  onToggleTour: () => void;
  onScrub: (year: number) => void;
  onJump: (index: number) => void;
}

/** Where the thumb rests after jumping to an event, so the event reads as fully happened. */
export const EVENT_SETTLE = 0.6;

export const MapTimePanel: React.FC<MapTimePanelProps> = ({ map, year, activeIndex, playing, eventColor, onToggleTour, onScrub, onJump }) => {
  const { t, formatNumber } = useLanguage();
  const { start, lastYear } = map.time;
  const max = lastYear + 0.99;
  const pct = (value: number) => clamp((value - start) / (max - start), 0, 1) * 100;
  const shownYear = Math.min(Math.floor(year), lastYear);
  const eventIsBattle = (placeId: string) => map.places.find(place => place.id === placeId)?.tone === 'event';

  return (
    <div dir="ltr" className="shrink-0 rounded-2xl border border-brand-200/90 bg-brand-50/88 px-3 py-3 sm:px-4">
      <div className="flex items-center gap-3">
        {map.features.tour && (
          <button
            type="button"
            onClick={onToggleTour}
            aria-pressed={playing}
            className={cn(
              'inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 font-display text-[13px] font-semibold shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
              playing ? 'bg-white text-brand-800 border border-brand-300' : 'bg-brand-700 text-white hover:bg-brand-800'
            )}
          >
            {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" className="translate-x-px" />}
            <span className="hidden sm:inline">{playing ? t('map.tourPause') : t('map.tour')}</span>
            <span className="sr-only sm:hidden">{playing ? t('map.tourPause') : t('map.tour')}</span>
          </button>
        )}

        <div className="relative h-7 min-w-0 flex-1">
          <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
            {map.timeline.map((item, index) => (
              <span
                key={`${item.year}-${index}`}
                className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-sm"
                style={{
                  left: `calc(11px + (100% - 22px) * ${pct(item.year + EVENT_SETTLE) / 100})`,
                  background: eventIsBattle(item.placeId) ? eventColor : 'var(--brand-700)',
                }}
              />
            ))}
          </div>
          <input
            id="story-map-year"
            type="range"
            className="story-map-range relative z-10"
            min={start}
            max={max}
            step={0.05}
            value={clamp(year, start, max)}
            onChange={event => onScrub(Number(event.target.value))}
            aria-label={t('map.timeSlider')}
            aria-valuetext={`${formatNumber(shownYear)} · ${map.timeline[activeIndex]?.label ?? ''}`}
            style={{ '--p': `${pct(year)}%` } as React.CSSProperties}
          />
        </div>

        <span className="w-[4.4ch] shrink-0 text-end font-display text-2xl font-bold tabular-nums text-brand-800 sm:text-3xl" aria-hidden="true">
          {formatNumber(shownYear)}
        </span>
      </div>

      <ol className="mt-2 grid gap-1" style={{ gridTemplateColumns: `repeat(${map.timeline.length}, minmax(0, 1fr))` }}>
        {map.timeline.map((item, index) => {
          const active = index === activeIndex;
          const battle = eventIsBattle(item.placeId);
          return (
            <li key={`${item.year}-${index}`} className="min-w-0">
              <button
                type="button"
                onClick={() => onJump(index)}
                aria-pressed={active}
                className="group flex w-full flex-col items-center gap-1 rounded-xl px-1 py-0.5 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <span
                  className={cn(
                    'flex h-[30px] items-center rounded-full border px-2.5 font-display text-[12px] font-bold tabular-nums transition-colors sm:text-[13px]',
                    active
                      ? (battle ? 'border-transparent text-white' : 'border-transparent bg-brand-700 text-white')
                      : 'border-brand-200 bg-white text-brand-800 group-hover:border-brand-400'
                  )}
                  style={active && battle ? { background: eventColor } : undefined}
                >
                  {formatNumber(item.year)}
                </span>
                <span dir="auto" className="w-full truncate text-[11px] leading-tight text-wood/70 sm:text-[12px]">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
