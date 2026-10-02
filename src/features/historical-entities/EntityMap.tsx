import React, { useId } from 'react';
import { cn } from '../../lib/utils';
import { MEDITERRANEAN_FEATURES, MEDITERRANEAN_FEATURE_VIEWBOX } from './mediterraneanFeatures';
import type { HistoricalMapFocus } from './types';

interface MapMarker {
  id: string;
  x: number;
  y: number;
  color?: string;
}

const DEFAULT_COLOR = '#e11d48';
const [, , VIEW_WIDTH, VIEW_HEIGHT] = MEDITERRANEAN_FEATURE_VIEWBOX.split(' ').map(Number);

/**
 * A context map with the entity's place drawn on top in its group colour: a
 * glowing dot for a city or a building, the real shape of a sea, a river or an
 * island, a soft shape for a land or the lands a people ruled, and arrows for
 * where a people came from. The map zooms around the place, so the dot stays
 * where it is on the canvas.
 */
export const EntityMap = ({
  src,
  alt,
  focus,
  label,
  showFocus = true,
  aspect = '4 / 3',
  color = DEFAULT_COLOR,
  markers = [],
  onMarkerClick,
  onMapClick,
  tap,
  className,
  style,
}: {
  src: string;
  alt: string;
  focus?: HistoricalMapFocus;
  label?: string;
  showFocus?: boolean;
  /** CSS aspect ratio of the map image. */
  aspect?: string;
  /** Highlight colour, usually the entity's group colour. */
  color?: string;
  /** Small dots for other places, used on the Places page overview. */
  markers?: MapMarker[];
  onMarkerClick?: (id: string) => void;
  /** Tap anywhere on the map; receives the point as percentages. Used by the map game. */
  onMapClick?: (x: number, y: number) => void;
  /** Where the learner tapped, shown as a small ring. */
  tap?: { x: number; y: number };
  className?: string;
  style?: React.CSSProperties;
}) => {
  const glowId = `entity-glow-${useId().replace(/:/g, '')}`;
  const arrowId = `${glowId}-arrow`;
  const zoom = showFocus && focus?.zoom ? focus.zoom : 1;
  const originX = focus?.x ?? 50;
  const originY = focus?.y ?? 50;
  const labelOnLeft = (focus?.x ?? 0) > 68;
  const featureFocus = showFocus && focus?.mode === 'feature' ? focus : undefined;
  const shapes = (featureFocus?.features ?? [])
    .map(id => MEDITERRANEAN_FEATURES[id as keyof typeof MEDITERRANEAN_FEATURES])
    .filter(Boolean);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!onMapClick) return;
    const rect = event.currentTarget.getBoundingClientRect();
    onMapClick(((event.clientX - rect.left) / rect.width) * 100, ((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <div
      className={cn('relative overflow-hidden rounded-xl bg-[#b9d3cf]', onMapClick && 'cursor-crosshair', className)}
      style={{ aspectRatio: aspect, ...style }}
      onClick={onMapClick ? handleClick : undefined}
    >
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

        {featureFocus && (
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
              <marker id={arrowId} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
              </marker>
            </defs>
            {shapes.map((shape, index) => {
              if (shape.kind === 'line') {
                return (
                  <path key={index} d={shape.d} fill="none" stroke={color} strokeWidth={5}
                    strokeLinecap="round" strokeLinejoin="round" filter={`url(#${glowId})`} />
                );
              }
              if (shape.kind === 'land') {
                return (
                  <path key={index} d={shape.d} fill={color} fillOpacity={0.3} stroke={color} strokeWidth={1.6}
                    strokeDasharray="6 4" strokeLinejoin="round" filter={`url(#${glowId})`} />
                );
              }
              return (
                <path key={index} d={shape.d} fill={color} fillOpacity={0.34} stroke={color} strokeWidth={2.2}
                  strokeLinejoin="round" filter={`url(#${glowId})`} />
              );
            })}
            {featureFocus.arrows?.map((arrow, index) => (
              <line
                key={`arrow-${index}`}
                x1={(arrow.fromX / 100) * VIEW_WIDTH}
                y1={(arrow.fromY / 100) * VIEW_HEIGHT}
                x2={(arrow.toX / 100) * VIEW_WIDTH}
                y2={(arrow.toY / 100) * VIEW_HEIGHT}
                stroke={color}
                strokeWidth={4}
                strokeDasharray="10 7"
                strokeLinecap="round"
                markerEnd={`url(#${arrowId})`}
              />
            ))}
          </svg>
        )}

        {featureFocus?.pins?.map(pin => (
          <span
            key={`pin-${pin.label}`}
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: `scale(${1 / zoom})`, transformOrigin: '0 0' }}
          >
            <span className="absolute -left-[6px] -top-[6px] h-3 w-3 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: color }} />
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

        {markers.map(marker => (
          <button
            key={marker.id}
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={(event) => {
              event.stopPropagation();
              onMarkerClick?.(marker.id);
            }}
            className="absolute h-2.5 w-2.5 rounded-full border border-white/90 shadow-sm"
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`,
              backgroundColor: marker.color ?? 'rgba(15, 118, 110, 0.7)',
              transform: `translate(-50%, -50%) scale(${1 / zoom})`,
            }}
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
      </div>

      {showFocus && focus?.mode === 'point' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ left: `${focus.x}%`, top: `${focus.y}%` }}
        >
          <span className="absolute -left-3.5 -top-3.5 h-7 w-7 animate-ping rounded-full opacity-40" style={{ backgroundColor: color }} />
          <span
            className="absolute -left-2 -top-2 h-4 w-4 rounded-full border-2 border-white"
            style={{ backgroundColor: color, boxShadow: `0 0 10px 3px ${color}99` }}
          />
        </span>
      )}

      {tap && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-stone-900/80 bg-white/40"
          style={{ left: `${tap.x}%`, top: `${tap.y}%` }}
        />
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
