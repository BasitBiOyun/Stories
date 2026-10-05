import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { BaseMapDef } from './baseMaps';
import { playMapSound } from './mapSounds';
import type { StoryMap, StoryMapEventScene } from './types';

type Point = [number, number];

const GOLD = '#e9b44c';
const GOLD_DEEP = '#c98f22';
const INK = 'var(--brand-700)';

const reducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** A gentle curve from a to b, bowed to one side, like a route drawn by hand. */
const arcPath = ([ax, ay]: Point, [bx, by]: Point, bend = 0.2) => {
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const dx = bx - ax;
  const dy = by - ay;
  return `M${ax.toFixed(1)} ${ay.toFixed(1)} Q${(mx + dy * bend).toFixed(1)} ${(my - dx * bend).toFixed(1)} ${bx.toFixed(1)} ${by.toFixed(1)}`;
};

const SCENE_CSS = `
  @keyframes scene-draw { to { stroke-dashoffset: 0 } }
  @keyframes scene-grow { 0% { transform: scale(.25); opacity: 0 } 100% { transform: scale(1); opacity: 1 } }
  @keyframes scene-breathe { 0%, 100% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.06); opacity: .8 } }
  @keyframes scene-wave { 0% { transform: scale(.04); opacity: 0 } 12% { opacity: .75 } 100% { transform: scale(1); opacity: 0 } }
  @keyframes scene-pop { 0% { transform: scale(.3); opacity: .9 } 100% { transform: scale(3.2); opacity: 0 } }
  @keyframes scene-fade { from { opacity: 0 } to { opacity: 1 } }
  .scene-draw { stroke-dashoffset: 1; animation: scene-draw var(--dur, 1.6s) cubic-bezier(.45,.05,.35,1) var(--delay, 0s) forwards; }
  .scene-grow { transform-box: fill-box; transform-origin: center; animation: scene-grow 1.8s cubic-bezier(.2,.8,.2,1) var(--delay, 0s) both; }
  .scene-breathe { transform-box: fill-box; transform-origin: center; animation: scene-breathe 4.5s ease-in-out 1.8s infinite; }
  .scene-wave { transform-box: fill-box; transform-origin: center; animation: scene-wave var(--dur, 3.6s) cubic-bezier(.15,.6,.3,1) var(--delay, 0s) var(--count, 1) both; }
  .scene-pop { transform-box: fill-box; transform-origin: center; animation: scene-pop 1.1s ease-out var(--delay, 0s) both; }
  .scene-fade { animation: scene-fade .9s ease-out var(--delay, 0s) both; }
  @media (prefers-reduced-motion: reduce) {
    .scene-draw { animation: none; stroke-dashoffset: 0; }
    .scene-grow, .scene-breathe, .scene-fade { animation: none; }
    .scene-wave, .scene-pop { animation: none; opacity: 0; }
  }
`;

const vars = (values: Record<string, string | number>) => values as React.CSSProperties;

/** A path that draws itself, as dashes, between two moments. */
const DrawnPath: React.FC<{ id: string; d: string; px: number; delay: number; dur: number; colour: string; width?: number; dash?: string }> = ({ id, d, px, delay, dur, colour, width = 2.6, dash = '7 6' }) => (
  <g>
    <mask id={id} maskUnits="userSpaceOnUse" x={-5000} y={-5000} width={10000} height={10000}>
      <path d={d} fill="none" stroke="#fff" strokeWidth={14 * px} strokeLinecap="round" pathLength={1} strokeDasharray="1 1" className="scene-draw" style={vars({ '--delay': `${delay}s`, '--dur': `${dur}s` })} />
    </mask>
    <path d={d} fill="none" stroke="#fffaf0" strokeWidth={6} strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity={0.75} mask={`url(#${id})`} />
    <path d={d} fill="none" stroke={colour} strokeWidth={width} strokeDasharray={dash} strokeLinecap="round" vectorEffect="non-scaling-stroke" mask={`url(#${id})`} />
  </g>
);

/** A small traveller that walks along a path, then rests at its end. */
const Traveller: React.FC<{ d: string; px: number; delay: number; dur: number; onArrive?: () => void }> = ({ d, px, delay, dur, onArrive }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [point, setPoint] = useState<{ x: number; y: number; show: boolean }>({ x: 0, y: 0, show: false });
  const arrive = useRef(onArrive);
  arrive.current = onArrive;

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return undefined;
    const length = path.getTotalLength();
    if (reducedMotion()) {
      const end = path.getPointAtLength(length);
      setPoint({ x: end.x, y: end.y, show: true });
      return undefined;
    }
    let raf = 0;
    let arrived = false;
    const start = performance.now() + delay * 1000;
    const step = (now: number) => {
      const t = (now - start) / (dur * 1000);
      if (t >= 0) {
        const eased = t >= 1 ? 1 : 1 - Math.pow(1 - t, 2.2) * (1 - t * 0.2);
        const at = path.getPointAtLength(Math.min(1, eased) * length);
        setPoint({ x: at.x, y: at.y, show: true });
        if (t >= 1 && !arrived) { arrived = true; arrive.current?.(); }
      }
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [d, delay, dur]);

  return (
    <g>
      <path ref={pathRef} d={d} fill="none" stroke="none" />
      {point.show && (
        <g transform={`translate(${point.x} ${point.y}) scale(${px})`}>
          <circle r={9} fill={INK} opacity={0.18} />
          <circle r={5.5} fill="#fff" stroke={INK} strokeWidth={2.6} />
        </g>
      )}
    </g>
  );
};

/** Light rising over a place: a birth. */
const Dawn: React.FC<{ at: Point; px: number; uid: string; km: number }> = ({ at, px, uid, km }) => {
  const r = 300 * km;
  return (
    <g>
      <defs>
        <radialGradient id={`${uid}-dawn`}>
          <stop offset="0" stopColor="#ffe2a0" stopOpacity="0.9" />
          <stop offset="0.45" stopColor={GOLD} stopOpacity="0.35" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform={`translate(${at[0]} ${at[1]})`}>
        <g className="scene-grow"><circle className="scene-breathe" r={r} fill={`url(#${uid}-dawn)`} /></g>
      </g>
      <g transform={`translate(${at[0]} ${at[1]}) scale(${px})`}>
        <g>
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const inner = 30;
            const outer = i % 2 ? 58 : 74;
            return (
              <line
                key={i}
                className="scene-fade"
                x1={Math.cos(angle) * inner} y1={Math.sin(angle) * inner}
                x2={Math.cos(angle) * outer} y2={Math.sin(angle) * outer}
                stroke={GOLD_DEEP} strokeOpacity={0.55} strokeWidth={2} strokeLinecap="round"
                style={vars({ '--delay': `${0.5 + i * 0.06}s` })}
              />
            );
          })}
        </g>
      </g>
    </g>
  );
};

/** Light and rings spreading out from a city, with threads reaching other towns. */
const Radiate: React.FC<{ at: Point; reach: Point[]; px: number; uid: string; km: number }> = ({ at, reach, px, uid, km }) => {
  const r = 420 * km;
  return (
    <g>
      <defs>
        <radialGradient id={`${uid}-glow`}>
          <stop offset="0" stopColor="#ffe6a8" stopOpacity="0.85" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>
      <g transform={`translate(${at[0]} ${at[1]})`}>
        <g className="scene-grow"><circle className="scene-breathe" r={140 * km} fill={`url(#${uid}-glow)`} /></g>
        {[0, 1, 2, 3].map(i => (
          <circle
            key={i}
            className="scene-wave"
            r={r}
            fill="none"
            stroke={GOLD_DEEP}
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            style={vars({ '--delay': `${0.6 + i * 1.1}s`, '--dur': '4.4s', '--count': 'infinite' })}
          />
        ))}
      </g>
      {reach.map((point, i) => (
        <g key={i}>
          <DrawnPath id={`${uid}-reach-${i}`} d={arcPath(at, point, 0.16)} px={px} delay={1.2 + i * 0.35} dur={1.5} colour={GOLD_DEEP} width={1.8} dash="2 5" />
          <g transform={`translate(${point[0]} ${point[1]}) scale(${px})`}>
            <circle className="scene-fade" r={6} fill={GOLD} opacity={0.9} style={vars({ '--delay': `${2.6 + i * 0.35}s` })} />
            <circle className="scene-pop" r={6} fill="none" stroke={GOLD_DEEP} strokeWidth={2} style={vars({ '--delay': `${2.6 + i * 0.35}s` })} />
          </g>
        </g>
      ))}
      <g transform={`translate(${at[0]} ${at[1]}) scale(${px})`}>
        {/* A soft round halo around the place: rings only, never a star or any pointed shape. */}
        <g className="scene-grow" style={vars({ '--delay': '0.15s' })}>
          <g className="scene-breathe">
            <circle r={36} fill="#fff7e2" fillOpacity={0.4} />
            <circle r={36} fill="none" stroke={GOLD_DEEP} strokeWidth={1.4} strokeOpacity={0.75} />
            <circle r={44} fill="none" stroke={GOLD_DEEP} strokeWidth={1} strokeOpacity={0.4} strokeDasharray="2 5" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </g>
  );
};

/** A life drawn as a whole: the travels, the places lighting up, then a wide glow spreading out. */
const Journey: React.FC<{ from: Point; to: Point[]; lifePlaces: Point[]; px: number; uid: string; km: number; radiusKm?: number }> = ({ from, to, lifePlaces, px, uid, km, radiusKm = 820 }) => {
  const legacyAt = 0.6 + to.length * 1.9 + 0.5;
  const r = radiusKm * km;

  useEffect(() => {
    const timer = window.setTimeout(() => playMapSound('finish'), legacyAt * 1000);
    return () => window.clearTimeout(timer);
  }, [legacyAt]);

  return (
    <g>
      <defs>
        <radialGradient id={`${uid}-legacy`}>
          <stop offset="0" stopColor="#ffe6a8" stopOpacity="0.55" />
          <stop offset="0.6" stopColor={GOLD} stopOpacity="0.16" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* The wide warm glow that stays at the end */}
      <g transform={`translate(${from[0]} ${from[1]})`}>
        <circle className="scene-fade" r={r * 0.75} fill={`url(#${uid}-legacy)`} style={vars({ '--delay': `${legacyAt + 0.4}s` })} />
        {[0, 1, 2].map(i => (
          <circle
            key={i}
            className="scene-wave"
            r={r}
            fill="none"
            stroke={GOLD_DEEP}
            strokeWidth={2.2}
            vectorEffect="non-scaling-stroke"
            style={vars({ '--delay': `${legacyAt + i * 0.8}s`, '--dur': '3.4s' })}
          />
        ))}
      </g>
      {to.map((point, i) => {
        const d = arcPath(from, point, i % 2 ? -0.18 : 0.18);
        const start = 0.6 + i * 1.9;
        return (
          <g key={i}>
            <DrawnPath id={`${uid}-trip-${i}`} d={d} px={px} delay={start} dur={1.7} colour={INK} />
            <Traveller d={d} px={px} delay={start} dur={1.7} onArrive={() => playMapSound('select')} />
            <g transform={`translate(${point[0]} ${point[1]}) scale(${px})`}>
              <circle className="scene-pop" r={14} fill="none" stroke={INK} strokeWidth={2.5} style={vars({ '--delay': `${start + 1.7}s` })} />
            </g>
          </g>
        );
      })}
      {lifePlaces.map((point, i) => (
        <g key={`life-${i}`} transform={`translate(${point[0]} ${point[1]}) scale(${px})`}>
          <circle className="scene-pop" r={16} fill="none" stroke={GOLD_DEEP} strokeWidth={3} style={vars({ '--delay': `${legacyAt - 0.4 + i * 0.12}s` })} />
        </g>
      ))}
    </g>
  );
};

interface MapEventSceneProps {
  scene: StoryMapEventScene;
  map: StoryMap;
  base: BaseMapDef;
  px: number;
  uid: string;
}

/** Plays one event's scene on the map. Mount it with a new key to play it again. */
export const MapEventScene: React.FC<MapEventSceneProps> = ({ scene, map, base, px, uid }) => {
  const km = base.unitsPerKm;
  const placeAt = useMemo(() => {
    const lookup = new Map<string, Point>();
    map.places.forEach(place => lookup.set(place.id, base.project(place.lon, place.lat)));
    return lookup;
  }, [map.places, base]);

  let body: React.ReactNode = null;
  if (scene.kind === 'dawn') {
    const at = placeAt.get(scene.placeId);
    if (at) body = <Dawn at={at} px={px} uid={uid} km={km} />;
  } else if (scene.kind === 'radiate') {
    const at = placeAt.get(scene.placeId);
    const points = [...map.towns, ...map.places].filter(point => point.id !== scene.placeId);
    const reach = (scene.reach ? points.filter(point => scene.reach?.includes(point.id)) : map.towns)
      .map(point => base.project(point.lon, point.lat));
    if (at) body = <Radiate at={at} reach={reach} px={px} uid={uid} km={km} />;
  } else {
    const from = placeAt.get(scene.fromId);
    const to = scene.toIds.map(id => placeAt.get(id)).filter((point): point is Point => !!point);
    const lifePlaces = map.places.filter(place => place.tone !== 'event').map(place => placeAt.get(place.id) as Point);
    if (from) body = <Journey from={from} to={to} lifePlaces={lifePlaces} px={px} uid={uid} km={km} />;
  }

  return (
    <g pointerEvents="none">
      <style>{SCENE_CSS}</style>
      {body}
    </g>
  );
};
