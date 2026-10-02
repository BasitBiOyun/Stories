import React from 'react';
import { cn } from '../../lib/utils';
import type { HistoricalTimeline } from './types';

const TICK_STEP = 200;

/**
 * A small time strip for a people or a ruler: their years as bars, the
 * story's own moment (the journey) as a teal line, and a legend below.
 */
export const TimelineStrip = ({
  timeline,
  tone = 'light',
  className,
}: {
  timeline: HistoricalTimeline;
  tone?: 'light' | 'dark';
  className?: string;
}) => {
  const [start, end] = timeline.axis;
  const at = (year: number) => `${Math.min(Math.max(((year - start) / (end - start)) * 100, 0), 100)}%`;
  const ticks: number[] = [];
  for (let year = Math.ceil(start / TICK_STEP) * TICK_STEP; year <= end; year += TICK_STEP) ticks.push(year);

  const dark = tone === 'dark';
  const muted = dark ? 'text-parchment/60' : 'text-wood/55';
  const legendText = dark ? 'text-parchment/85' : 'text-wood/80';
  const { reference } = timeline;
  const years = (from: number, to: number) => (from === to ? `${from}` : `${from}–${to}`);

  return (
    <div className={cn('select-none', className)} aria-hidden="true">
      <div className="relative mx-1 h-[34px]">
        <div className={cn('absolute inset-x-0 top-[13px] h-px', dark ? 'bg-parchment/25' : 'bg-wood/20')} />
        {timeline.segments.map((segment, index) => (
          <span
            key={`segment-${index}`}
            className={cn(
              'absolute top-[9px] h-2 rounded-full',
              segment.faint ? 'border border-dashed border-rose-500/70 bg-rose-500/15' : 'bg-rose-600 shadow-[0_0_8px_rgba(225,29,72,0.45)]',
            )}
            style={{ left: at(segment.from), width: `max(6px, calc(${at(segment.to)} - ${at(segment.from)}))` }}
          />
        ))}
        {timeline.events?.map(event => (
          <span
            key={`event-${event.year}`}
            className="absolute top-[13px] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-stone-900"
            style={{ left: at(event.year) }}
          />
        ))}
        <span
          className="absolute top-[4px] h-[18px] w-[3px] -translate-x-1/2 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.8)]"
          style={{ left: at((reference.from + reference.to) / 2) }}
        />
        {ticks.map(year => (
          <span
            key={`tick-${year}`}
            className={cn('absolute top-[25px] -translate-x-1/2 text-[9px] leading-none tabular-nums', muted)}
            style={{ left: at(year) }}
          >
            {year}
          </span>
        ))}
      </div>
      <div className={cn('mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-[10.5px] leading-tight', legendText)}>
        {timeline.segments.map((segment, index) => (
          <span key={`legend-${index}`} className="inline-flex items-center gap-1">
            <span
              className={cn(
                'inline-block h-1.5 w-3 rounded-full',
                segment.faint ? 'border border-dashed border-rose-500/70' : 'bg-rose-600',
              )}
            />
            <span className="font-semibold tabular-nums">{segment.text ?? years(segment.from, segment.to)}</span>
            {segment.label && <span>{segment.label}</span>}
          </span>
        ))}
        {timeline.events?.map(event => (
          <span key={`legend-event-${event.year}`} className="inline-flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full border border-white bg-stone-900" />
            <span className="font-semibold tabular-nums">{event.year}</span>
            <span>{event.label}</span>
          </span>
        ))}
        <span className="inline-flex items-center gap-1">
          <span className="inline-block h-2.5 w-[3px] rounded-full bg-teal-400" />
          <span className="font-semibold tabular-nums">{years(reference.from, reference.to)}</span>
          <span>{reference.label}</span>
        </span>
      </div>
    </div>
  );
};
