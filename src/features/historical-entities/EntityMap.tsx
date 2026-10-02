import React from 'react';
import { cn } from '../../lib/utils';
import type { HistoricalEntity, HistoricalMapFocus } from './types';

interface MapMarker {
  id: string;
  x: number;
  y: number;
}

/**
 * A context map with the entity's place drawn on top: a pin for a city or a
 * building, a soft oval for a land, a sea or a river. The map zooms around the
 * place, so the pin stays where it is on the canvas.
 */
export const EntityMap = ({
  src,
  alt,
  focus,
  label,
  showFocus = true,
  markers = [],
  onMarkerClick,
  className,
}: {
  src: string;
  alt: string;
  focus?: HistoricalMapFocus;
  label?: string;
  showFocus?: boolean;
  /** Small dots for other places, used on the Places page overview. */
  markers?: MapMarker[];
  onMarkerClick?: (id: string) => void;
  className?: string;
}) => {
  const zoom = showFocus && focus?.zoom ? focus.zoom : 1;
  const originX = focus?.x ?? 50;
  const originY = focus?.y ?? 50;
  const labelOnLeft = (focus?.x ?? 0) > 68;

  return (
    <div className={cn('relative aspect-[4/3] overflow-hidden rounded-xl bg-[#b9d3cf]', className)}>
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
        {markers.map(marker => (
          <button
            key={marker.id}
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => onMarkerClick?.(marker.id)}
            className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90 bg-teal-700/70 shadow-sm"
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
          className={cn(
            'pointer-events-none absolute whitespace-nowrap rounded-md bg-white/90 px-1.5 py-0.5 font-display text-[11px] font-bold text-stone-900 shadow-sm',
          )}
          style={{
            // An area label sits in the middle of the oval, kept off the map edge.
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

export const entityHasMap = (entity: HistoricalEntity) => Boolean(entity.mapAsset);
