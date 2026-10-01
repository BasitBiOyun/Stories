import React, { useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { Pause, Play } from '../../components/ui/icons';
import { makeTimeScale } from './timeScale';
import type { StoryMap } from './types';

export { EVENT_SETTLE } from './timeScale';

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

/** Centre of the range thumb for a position, so dots and labels sit exactly where the thumb stops. */
const THUMB = 22;
const along = (pos: number) => `calc(${THUMB / 2}px + (100% - ${THUMB}px) * ${pos})`;

export const MapTimePanel: React.FC<MapTimePanelProps> = ({ map, year, activeIndex, playing, eventColor, onToggleTour, onScrub, onJump }) => {
  const { t, formatNumber } = useLanguage();
  const scale = useMemo(() => makeTimeScale(map), [map]);
  const pos = scale.toPos(year);
  const shownYear = Math.min(Math.floor(year), map.time.lastYear);
  const n = map.timeline.length;
  const stages = map.time.mode === 'stages';
  // In stages mode the buttons show chapters, not years.
  const stepText = (index: number) => {
    const chapter = map.timeline[index]?.chapter;
    return stages
      ? (chapter ? t('map.chapterShort').replace('{n}', formatNumber(chapter)) : formatNumber(index + 1))
      : formatNumber(map.timeline[index]?.year ?? 0);
  };
  const isBattle = (placeId: string) => map.places.find(place => place.id === placeId)?.tone === 'event';

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Arrow keys step from event to event; the time line is about the events, not single years.
    const forward = event.key === 'ArrowRight' || event.key === 'ArrowUp';
    const back = event.key === 'ArrowLeft' || event.key === 'ArrowDown';
    if (!forward && !back) return;
    event.preventDefault();
    const target = forward
      ? scale.eventPos.findIndex(p => p > pos + 0.001)
      : scale.eventPos.map((p, index) => (p < pos - 0.001 ? index : -1)).filter(index => index >= 0).pop() ?? -1;
    if (target >= 0) onJump(target);
  };

  return (
    <div dir="ltr" className="shrink-0 rounded-2xl border border-brand-200/90 bg-brand-50/88 px-3 pb-2 pt-3 sm:px-4">
      <div className="flex items-start gap-3 sm:gap-4">
        {map.features.tour && (
          <button
            type="button"
            onClick={onToggleTour}
            aria-pressed={playing}
            className={cn(
              'mt-1 inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 font-display text-[13px] font-semibold shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
              playing ? 'border border-brand-300 bg-white text-brand-800' : 'bg-brand-700 text-white hover:bg-brand-800'
            )}
          >
            {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" className="translate-x-px" />}
            <span className="hidden sm:inline">{playing ? t('map.tourPause') : t('map.tour')}</span>
            <span className="sr-only sm:hidden">{playing ? t('map.tourPause') : t('map.tour')}</span>
          </button>
        )}

        {/* Track, dots and labels share one column, so they always line up */}
        <div className="relative min-w-0 flex-1">
          <div className="relative mt-3 h-7">
            <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
              {map.timeline.map((item, index) => {
                const reached = Math.floor(year) >= item.year;
                const colour = isBattle(item.placeId) ? eventColor : 'var(--brand-700)';
                return (
                  <span
                    key={`dot-${item.year}`}
                    className="absolute top-1/2 h-3.5 w-3.5 rounded-full border-2 transition-[background-color,transform] duration-300"
                    style={{
                      left: along(scale.eventPos[index]),
                      borderColor: reached ? '#fff' : colour,
                      background: reached ? colour : '#fff',
                      transform: `translate(-50%, -50%) scale(${index === activeIndex ? 1.15 : 1})`,
                    }}
                  />
                );
              })}
              {/* How many years each stretch of the line covers: the stretches are drawn the same size */}
              {!stages && map.timeline.slice(1).map((item, index) => (
                <span
                  key={`gap-${item.year}`}
                  className="absolute -top-3.5 -translate-x-1/2 font-display text-[10px] font-semibold tabular-nums text-brand-700/60"
                  style={{ left: along((scale.eventPos[index] + scale.eventPos[index + 1]) / 2) }}
                >
                  +{formatNumber(item.year - map.timeline[index].year)}
                </span>
              ))}
            </div>
            <input
              id="story-map-year"
              type="range"
              className="story-map-range relative z-10 block"
              min={0}
              max={1}
              step={0.001}
              value={pos}
              onChange={event => onScrub(scale.toYear(Number(event.target.value)))}
              onKeyDown={onKeyDown}
              aria-label={stages ? t('map.stepSlider') : t('map.timeSlider')}
              aria-valuetext={`${stages ? stepText(activeIndex) : formatNumber(shownYear)} · ${map.timeline[activeIndex]?.label ?? ''}`}
              style={{ '--p': along(pos) } as React.CSSProperties}
            />
          </div>

          <ol className="relative h-[58px]">
            {map.timeline.map((item, index) => {
              const active = index === activeIndex;
              const battle = isBattle(item.placeId);
              return (
                <li
                  key={`label-${item.year}`}
                  className="absolute top-0 -translate-x-1/2"
                  style={{ left: along(scale.eventPos[index]), width: `calc((100% - ${THUMB}px) / ${n})` }}
                >
                  <button
                    type="button"
                    onClick={() => onJump(index)}
                    aria-pressed={active}
                    className="group flex w-full flex-col items-center gap-1 rounded-xl px-0.5 py-0.5 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <span
                      className={cn(
                        'flex h-[26px] items-center rounded-full border px-1.5 font-display text-[11px] font-bold tabular-nums transition-colors duration-300 sm:h-[28px] sm:px-2.5 sm:text-[13px]',
                        active
                          ? (battle ? 'border-transparent text-white' : 'border-transparent bg-brand-700 text-white')
                          : 'border-brand-200 bg-white text-brand-800 group-hover:border-brand-400'
                      )}
                      style={active && battle ? { background: eventColor } : undefined}
                    >
                      {stepText(index)}
                    </span>
                    <span dir="auto" className={cn('line-clamp-2 w-full text-[10px] leading-tight sm:text-[12px]', active ? 'font-semibold text-wood' : 'text-wood/65')}>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <span className={cn('mt-[-2px] hidden shrink-0 text-end font-display font-bold tabular-nums text-brand-800 sm:block', stages ? 'min-w-[4.4ch] whitespace-nowrap text-xl sm:text-2xl' : 'w-[4.4ch] text-2xl sm:text-3xl')} aria-hidden="true">
          {stages ? stepText(activeIndex) : formatNumber(shownYear)}
        </span>
      </div>
    </div>
  );
};
