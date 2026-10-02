import React, { useId } from 'react';
import { cn } from '../../lib/utils';
import { MEDITERRANEAN_FEATURES, MEDITERRANEAN_FEATURE_VIEWBOX } from './mediterraneanFeatures';
import type { HistoricalMapFocus } from './types';

interface MapMarker {
  id: string;
  x: number;
  y: number;
}

const HIGHLIGHT = '#e11d48';

/**
 * A context map with the entity's place drawn on top: a pin for a city or a
 * building, a round soft area for a land, the real shape of a sea, a river
 * or an island lit up with a glow, and for a people their lands, cities and
 * the way they came. The map zooms around the place, so the
 * pin stays where it is on the canvas.
 */
export const EntityMap = ({
  src,
  alt,
  focus,
  label,
  showFocus = true,
  aspect = '4 / 3',
  markers = [],
  onMarkerClick,
  className,
}: {
  src: string;
  alt: string;
  focus?: HistoricalMapFocus;
  label?: string;
  showFocus?: boolean;
  /** CSS aspect ratio of the map image. */
  aspect?: string;
  /** Small dots for other places, used on the Places page overview. */
  markers?: MapMarker[];
  onMarkerClick?: (id: string) => void;
  className?: string;
}) => {
  const uid = useId().replace(/:/g, '');
  const glowId = `entity-glow-${uid}`;
  const arrowId = `entity-arrow-${uid}`;
  const [aspectWidth, aspectHeight] = aspect.split('/').map(part => Number(part.trim()) || 1);
  const zoom = showFocus && focus?.zoom ? focus.zoom : 1;
  const originX = focus?.x ?? 50;
  const originY = focus?.y ?? 50;
  const labelOnLeft = (focus?.x ?? 0) > 68;
  const feature = showFocus && focus?.mode === 'feature'
    ? MEDITERRANEAN_FEATURES[focus.feature as keyof typeof MEDITERRANEAN_FEATURES]
    : undefined;
  const group = showFocus && focus?.mode === 'group' ? focus : undefined;

  return (
    <div className={cn('relative overflow-hidden rounded-xl bg-[#b9d3cf]', className)} style={{ aspectRatio: aspect }}>
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: `scale(${zoom})`, transformOrigin: `${originX}% ${originY}%` }}
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-contain"
          draggable={false}
        />

        {feature && (
          <svg
            aria-hidden="true"
            viewBox={MEDITERRANEAN_FEATURE_VIEWBOX}
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <defs>
              <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {feature.kind === 'line' ? (
              <path
                d={feature.d}
                fill="none"
                stroke={HIGHLIGHT}
                strokeWidth={5}
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={`url(#${glowId})`}
              />
            ) : (
              <path
                d={feature.d}
                fill={HIGHLIGHT}
                fillOpacity={0.32}
                stroke={HIGHLIGHT}
                strokeWidth={2.2}
                strokeLinejoin="round"
                filter={`url(#${glowId})`}
              />
            )}
          </svg>
        )}

        {markers.map(marker => (
          <button
            key={marker.id}
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => onMarkerClick?.(marker.id)}
            className="absolute h-2.5 w-2.5 rounded-full border border-white/90 bg-teal-700/70 shadow-sm"
            style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: `translate(-50%, -50%) scale(${1 / zoom})` }}
          />
        ))}

        {showFocus && focus?.mode === 'area' && (
          <span
            aria-hidden="true"
            className="absolute rounded-[50%] border-2 border-dashed border-rose-700/80 bg-rose-500/20"
            style={{
              left: `${focus.x}%`,
              top: `${focus.y}%`,
              width: `${focus.width}%`,
              height: `${focus.height}%`,
              transform: `translate(-50%, -50%) rotate(${focus.rotate ?? 0}deg)`,
            }}
          />
        )}

        {showFocus && focus?.mode === 'circle' && <RoundArea x={focus.x} y={focus.y} radius={focus.radius} />}

        {group?.areas.map((area, index) => (
          <RoundArea key={`area-${index}`} x={area.x} y={area.y} radius={area.radius} faint={area.faint} />
        ))}

        {group?.arrows && group.arrows.length > 0 && (
          <svg
            aria-hidden="true"
            viewBox={`0 0 ${aspectWidth} ${aspectHeight}`}
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <defs>
              <marker id={arrowId} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={HIGHLIGHT} />
              </marker>
            </defs>
            {group.arrows.map((arrow, index) => (
              <line
                key={`arrow-${index}`}
                x1={(arrow.fromX / 100) * aspectWidth}
                y1={(arrow.fromY / 100) * aspectHeight}
                x2={(arrow.toX / 100) * aspectWidth}
                y2={(arrow.toY / 100) * aspectHeight}
                stroke={HIGHLIGHT}
                strokeWidth={4}
                strokeDasharray="10 7"
                strokeLinecap="round"
                markerEnd={`url(#${arrowId})`}
              />
            ))}
          </svg>
        )}

        {group?.pins.map(pin => (
          <span
            key={`pin-${pin.label}`}
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: `scale(${1 / zoom})`, transformOrigin: '0 0' }}
          >
            <span className="absolute -left-[6px] -top-[6px] h-3 w-3 rounded-full border-2 border-white bg-rose-600 shadow-md" />
            <span
              className={cn(
                'absolute top-0 -translate-y-1/2 whitespace-nowrap rounded bg-white/85 px-1 py-px text-[10px] font-semibold leading-tight text-stone-800 shadow-sm',
                pin.x > 70 ? 'right-[9px]' : 'left-[9px]',
              )}
            >
              {pin.label}
            </span>
          </span>
        ))}
      </div>

      {showFocus && focus?.mode === 'point' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ left: `${focus.x}%`, top: `${focus.y}%` }}
        >
          <span className="absolute -left-3 -top-3 h-6 w-6 animate-ping rounded-full bg-rose-500/35" />
          <span className="absolute -left-[7px] -top-[7px] h-3.5 w-3.5 rounded-full border-2 border-white bg-rose-600 shadow-md" />
        </span>
      )}

      {showFocus && focus && label && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute whitespace-nowrap rounded-md bg-white/90 px-1.5 py-0.5 font-display text-[11px] font-bold text-stone-900 shadow-sm"
          style={{
            // A label for an area sits in its middle, kept off the map edge.
            left: `${focus.mode === 'point' ? focus.x : Math.min(Math.max(focus.x, 14), 86)}%`,
            top: `${focus.y}%`,
            transform: focus.mode === 'point'
              ? `translate(${labelOnLeft ? 'calc(-100% - 12px)' : '12px'}, -50%)`
              : 'translate(-50%, -50%)',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

/** A round, approximate land. `radius` is a percentage of the map width. */
const RoundArea = ({ x, y, radius, faint = false }: { x: number; y: number; radius: number; faint?: boolean }) => (
  <span
    aria-hidden="true"
    className={cn(
      'absolute aspect-square rounded-full border-2 border-dashed',
      faint
        ? 'border-rose-700/45 bg-rose-500/10'
        : 'border-rose-700/80 bg-rose-500/20 shadow-[0_0_18px_rgba(225,29,72,0.35)]',
    )}
    style={{ left: `${x}%`, top: `${y}%`, width: `${radius * 2}%`, transform: 'translate(-50%, -50%)' }}
  />
);
