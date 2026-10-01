import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { PageData } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUserRole } from '../../contexts/UserRoleContext';
import { cn } from '../../lib/utils';
import { ArrowRight, Check, Clock, GraduationCap, MapPin, RotateCcw } from '../../components/ui/icons';
import { ANATOLIA_BASE, ANATOLIA_UNITS_PER_KM, projectAnatolia } from './baseMaps/anatolia';
import { ANATOLIA_RELIEF, OVERLAY_SHAPES } from './overlays';
import { MapGlyph } from './MapGlyph';
import type { StoryMap, StoryMapPlace } from './types';

type View = { x: number; y: number; w: number; h: number };

const BASE = ANATOLIA_BASE;
const MAX_ZOOM = 6;
const PIN = 17;

// Soft atlas palette, fixed so the map reads the same in every collection; markers take the book accent.
const PALETTE = {
  seaTop: '#d9ebef',
  seaBottom: '#c3dde4',
  coastGlow: '#eef7f8',
  land: '#f6ecd6',
  landShade: '#efe0bf',
  coast: '#bda57c',
  river: '#8fbccb',
  relief: '#c9b48c',
  seljuk: '#e0ad48',
  mongol: '#b8573f',
  label: '#3c3428',
  halo: '#fbf6ea',
  sea: '#5f8f9c',
};

const pointsPath = (points: Array<[number, number]>, closed: boolean) =>
  points
    .map(([lon, lat], index) => {
      const [x, y] = projectAnatolia(lon, lat);
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ') + (closed ? 'Z' : '');

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

interface StoryMapPageProps {
  page: PageData;
}

export const StoryMapPage: React.FC<StoryMapPageProps> = ({ page }) => {
  const map = page.map as StoryMap;
  const { t, language, isRTL, formatNumber } = useLanguage();
  const { isTeacher } = useUserRole();
  const uid = useId().replace(/:/g, '');

  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [view, setView] = useState<View>({ x: 0, y: 0, w: BASE.width, h: BASE.height });
  const viewRef = useRef(view);
  viewRef.current = view;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visited, setVisited] = useState<Set<string>>(() => new Set());

  const places = map.places;
  const selected = places.find(place => place.id === selectedId) ?? null;
  const selectedIndex = selected ? places.indexOf(selected) : -1;

  // --- View geometry ---------------------------------------------------------------------------
  const homeRect = useMemo(() => {
    const [x0, y0] = projectAnatolia(map.home.west, map.home.north);
    const [x1, y1] = projectAnatolia(map.home.east, map.home.south);
    return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
  }, [map.home]);

  // Widest view: the home area fitted to the screen, but never taller than the base map
  // (on a tall phone screen the sides are cropped instead of showing empty sea).
  const fitWidth = useCallback((aspect: number) =>
    Math.min(Math.max(homeRect.w, homeRect.h * aspect), BASE.height * aspect), [homeRect]);

  const limitWidth = useCallback((w: number, aspect: number) =>
    Math.min(fitWidth(aspect), Math.max(homeRect.w / MAX_ZOOM, w)), [homeRect, fitWidth]);

  const clampView = useCallback((next: View, aspect: number): View => {
    const w = limitWidth(next.w, aspect);
    const h = w / aspect;
    const cx = next.x + next.w / 2;
    const cy = next.y + next.h / 2;
    let x = cx - w / 2;
    let y = cy - h / 2;
    x = w >= BASE.width ? (BASE.width - w) / 2 : Math.min(Math.max(x, 0), BASE.width - w);
    y = h >= BASE.height ? (BASE.height - h) / 2 : Math.min(Math.max(y, 0), BASE.height - h);
    return { x, y, w, h };
  }, [limitWidth]);

  // Centre of the places, so a cropped home view still keeps every marker in sight.
  const placesCentre = useMemo(() => {
    const xs = map.places.map(place => projectAnatolia(place.lon, place.lat)[0]);
    return (Math.min(...xs) + Math.max(...xs)) / 2;
  }, [map.places]);

  const homeView = useCallback((aspect: number): View => {
    const w = fitWidth(aspect);
    const h = w / aspect;
    const cx = w < homeRect.w ? placesCentre : homeRect.x + homeRect.w / 2;
    return clampView({ x: cx - w / 2, y: homeRect.y + homeRect.h / 2 - h / 2, w, h }, aspect);
  }, [homeRect, fitWidth, placesCentre, clampView]);

  const aspect = size.w > 0 && size.h > 0 ? size.w / size.h : BASE.width / BASE.height;
  const isHome = useMemo(() => {
    const home = homeView(aspect);
    return Math.abs(home.w - view.w) < 1 && Math.abs(home.x - view.x) < 1 && Math.abs(home.y - view.y) < 1;
  }, [aspect, homeView, view]);

  const sizedRef = useRef(false);
  useEffect(() => {
    const element = stageRef.current;
    if (!element) return;
    const observer = new ResizeObserver(entries => {
      const rect = entries[0]?.contentRect;
      if (!rect || rect.width === 0 || rect.height === 0) return;
      const nextAspect = rect.width / rect.height;
      if (!sizedRef.current) setView(homeView(nextAspect));
      else setView(current => clampView({ ...current, h: current.w / nextAspect }, nextAspect));
      sizedRef.current = true;
      setSize({ w: rect.width, h: rect.height });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [homeView, clampView]);

  // --- Animated moves (buttons, place focus) ----------------------------------------------------
  const animationRef = useRef<number | null>(null);
  const animateTo = useCallback((target: View) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (prefersReducedMotion()) { setView(target); return; }
    const from = viewRef.current;
    const start = performance.now();
    const duration = 320;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const e = 1 - Math.pow(1 - p, 3);
      setView({
        x: from.x + (target.x - from.x) * e,
        y: from.y + (target.y - from.y) * e,
        w: from.w + (target.w - from.w) * e,
        h: from.h + (target.h - from.h) * e,
      });
      if (p < 1) animationRef.current = requestAnimationFrame(step);
    };
    animationRef.current = requestAnimationFrame(step);
  }, []);
  useEffect(() => () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); }, []);

  const zoomBy = useCallback((factor: number, cx?: number, cy?: number, animate = true) => {
    const current = viewRef.current;
    const px = cx ?? current.x + current.w / 2;
    const py = cy ?? current.y + current.h / 2;
    const w = limitWidth(current.w * factor, aspect);
    const f = w / current.w;
    // Keep the point under the finger or cursor where it is.
    const target = clampView({ x: px - (px - current.x) * f, y: py - (py - current.y) * f, w, h: w / aspect }, aspect);
    if (animate) animateTo(target); else setView(target);
  }, [aspect, limitWidth, clampView, animateTo]);

  const resetView = useCallback(() => animateTo(homeView(aspect)), [animateTo, homeView, aspect]);

  const toMap = useCallback((clientX: number, clientY: number): [number, number] => {
    const svg = svgRef.current;
    const matrix = svg?.getScreenCTM();
    if (!svg || !matrix) return [0, 0];
    const point = new DOMPoint(clientX, clientY).matrixTransform(matrix.inverse());
    return [point.x, point.y];
  }, []);

  // Keep a selected place on screen when it is chosen from the card or the timeline.
  const revealPlace = useCallback((place: StoryMapPlace) => {
    const current = viewRef.current;
    const [px, py] = projectAnatolia(place.lon, place.lat);
    const margin = current.w * 0.12;
    const inside = px > current.x + margin && px < current.x + current.w - margin
      && py > current.y + margin && py < current.y + current.h - margin;
    if (inside) return;
    animateTo(clampView({ ...current, x: px - current.w / 2, y: py - current.h / 2 }, aspect));
  }, [animateTo, clampView, aspect]);

  const selectPlace = useCallback((id: string | null, reveal = false) => {
    setSelectedId(id);
    if (!id) return;
    setVisited(previous => (previous.has(id) ? previous : new Set(previous).add(id)));
    const place = places.find(item => item.id === id);
    if (place && reveal) revealPlace(place);
  }, [places, revealPlace]);

  // --- Pointer: drag to pan, pinch and wheel to zoom ---------------------------------------------
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchRef = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);

  const onPointerDown = (event: React.PointerEvent) => {
    if ((event.target as Element).closest('[data-map-pin]')) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    (event.currentTarget as Element).setPointerCapture?.(event.pointerId);
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinchRef.current = Math.hypot(a.x - b.x, a.y - b.y);
    }
    setDragging(true);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    const previous = pointers.current.get(event.pointerId);
    if (!previous) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (animationRef.current) { cancelAnimationFrame(animationRef.current); animationRef.current = null; }

    if (pointers.current.size === 2 && pinchRef.current) {
      const [a, b] = [...pointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const [mx, my] = toMap((a.x + b.x) / 2, (a.y + b.y) / 2);
      zoomBy(pinchRef.current / distance, mx, my, false);
      pinchRef.current = distance;
      return;
    }
    if (pointers.current.size === 1 && size.w > 0) {
      const current = viewRef.current;
      const scale = current.w / size.w;
      setView(clampView({
        ...current,
        x: current.x - (event.clientX - previous.x) * scale,
        y: current.y - (event.clientY - previous.y) * scale,
      }, aspect));
    }
  };

  const onPointerEnd = (event: React.PointerEvent) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinchRef.current = null;
    if (pointers.current.size === 0) setDragging(false);
  };

  useEffect(() => {
    const element = svgRef.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const [x, y] = toMap(event.clientX, event.clientY);
      zoomBy(event.deltaY > 0 ? 1.18 : 1 / 1.18, x, y, false);
    };
    element.addEventListener('wheel', onWheel, { passive: false });
    return () => element.removeEventListener('wheel', onWheel);
  }, [toMap, zoomBy]);

  const onDoubleClick = (event: React.MouseEvent) => {
    if ((event.target as Element).closest('[data-map-pin]')) return;
    const [x, y] = toMap(event.clientX, event.clientY);
    zoomBy(0.55, x, y);
  };

  const onStageKey = (event: React.KeyboardEvent) => {
    if (event.key === '+' || event.key === '=') { event.preventDefault(); zoomBy(0.7); }
    if (event.key === '-' || event.key === '_') { event.preventDefault(); zoomBy(1 / 0.7); }
    if (event.key === '0') { event.preventDefault(); resetView(); }
  };

  // --- Derived drawing values -------------------------------------------------------------------
  const px = size.w > 0 ? view.w / size.w : 1; // map units per screen pixel
  const zoomLevel = homeView(aspect).w / view.w;
  const pinScale = size.w > 0 && size.w < 520 ? 0.8 : 1;
  const showTownLabels = size.w >= 600 || zoomLevel >= 1.6;
  const zoomed = view.w < homeView(aspect).w - 1;
  const seljukPath = useMemo(() => pointsPath(OVERLAY_SHAPES['seljuk-1243'].points, true), []);
  const mongolPoints = useMemo(() => OVERLAY_SHAPES['mongol-1243'].points.map(([lon, lat]) => projectAnatolia(lon, lat)), []);
  const mongolPath = useMemo(() => pointsPath(OVERLAY_SHAPES['mongol-1243'].points, false), []);
  const mongolHead = useMemo(() => {
    const end = mongolPoints[mongolPoints.length - 1];
    const before = mongolPoints[mongolPoints.length - 2];
    return { x: end[0], y: end[1], angle: (Math.atan2(end[1] - before[1], end[0] - before[0]) * 180) / Math.PI };
  }, [mongolPoints]);
  const scaleKm = 200;
  const scaleBarPx = (scaleKm * ANATOLIA_UNITS_PER_KM) / px;

  const exploredText = `${t('map.explored')} ${formatNumber(visited.size)} / ${formatNumber(places.length)}`;
  const svgFont = language === 'ar' ? 'var(--font-arabic, var(--font-display))' : 'var(--font-display)';

  const labelOffset = (side: StoryMapPlace['labelSide']) => {
    switch (side) {
      case 'left': return { dx: -(PIN + 7), dy: 5, anchor: 'end' as const };
      case 'top': return { dx: 0, dy: -(PIN + 9), anchor: 'middle' as const };
      case 'bottom': return { dx: 0, dy: PIN + 19, anchor: 'middle' as const };
      default: return { dx: PIN + 7, dy: 5, anchor: 'start' as const };
    }
  };

  const legend = (
    <div className="rounded-xl border border-white/70 bg-white/80 px-3 py-2 text-[11px] leading-snug text-[#3c3428] shadow-sm backdrop-blur-sm sm:text-[12px]">
      {map.overlays.includes('seljuk-1243') && map.legend['seljuk-1243'] && (
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-4 rounded-sm border border-dashed" style={{ background: 'rgba(224,173,72,.35)', borderColor: PALETTE.seljuk }} aria-hidden="true" />
          {map.legend['seljuk-1243']}
        </div>
      )}
      {map.overlays.includes('mongol-1243') && map.legend['mongol-1243'] && (
        <div className="flex items-center gap-2">
          <svg width="16" height="8" viewBox="0 0 16 8" aria-hidden="true"><path d="M0 4 H11" stroke={PALETTE.mongol} strokeWidth="2" strokeDasharray="4 2" /><path d="M10 0.5 L15.5 4 L10 7.5 Z" fill={PALETTE.mongol} /></svg>
          {map.legend['mongol-1243']}
        </div>
      )}
      <div className="mt-0.5 opacity-70">{t('map.approximate')}</div>
    </div>
  );

  // --- Render -----------------------------------------------------------------------------------
  return (
    <div className="h-full min-h-0 flex flex-col overflow-y-auto lg:overflow-hidden custom-scrollbar">
      <style>{`
        @keyframes story-map-pulse { 0% { transform: scale(1); opacity: .55 } 100% { transform: scale(1.75); opacity: 0 } }
        @keyframes story-map-march { to { stroke-dashoffset: -28 } }
        .story-map-pulse { transform-box: fill-box; transform-origin: center; animation: story-map-pulse 2.2s ease-out infinite; }
        .story-map-march { animation: story-map-march 1.6s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .story-map-pulse, .story-map-march { animation: none; } }
      `}</style>

      {/* Title row, matching the chapter pages */}
      <div className={cn('flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-3 sm:mb-5 shrink-0', isRTL && 'text-right')}>
        <div className="min-w-0">
          <h3 className="font-display text-xl sm:text-3xl lg:text-4xl text-wood font-semibold tracking-[-0.03em] leading-tight">
            {page.title}
          </h3>
          <p className={cn('mt-0.5 flex items-center gap-1.5 font-serif text-xs sm:text-base lg:text-lg text-brand-600', language !== 'ar' && 'italic')}>
            <MapPin size={16} aria-hidden="true" className="shrink-0 not-italic" />
            {page.subtitle ?? t('map.label')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50/90 px-3 py-1.5 font-display text-[12px] font-semibold text-brand-800">
            <span className="flex gap-1" aria-hidden="true">
              {places.map(place => (
                <span
                  key={place.id}
                  className={cn('h-1.5 w-1.5 rounded-full', visited.has(place.id) ? 'bg-brand-600' : 'bg-brand-200')}
                />
              ))}
            </span>
            {exploredText}
          </span>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-4 lg:flex-1 lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(300px,370px)] lg:grid-rows-[minmax(0,1fr)_auto]">
        {/* Map */}
          <div
            ref={stageRef}
            data-no-swipe
            tabIndex={0}
            onKeyDown={onStageKey}
            aria-label={page.title}
            className="relative h-[52svh] min-h-[300px] lg:h-auto lg:min-h-0 lg:col-start-1 lg:row-start-1 overflow-hidden rounded-[1.5rem] border border-brand-200/80 shadow-[0_14px_40px_rgba(63,49,28,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            style={{ background: PALETTE.seaBottom, touchAction: zoomed ? 'none' : 'pan-y' }}
          >
            <svg
              ref={svgRef}
              viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
              preserveAspectRatio="xMidYMid meet"
              className={cn('absolute inset-0 h-full w-full select-none', dragging ? 'cursor-grabbing' : 'cursor-grab')}
              style={{ direction: 'ltr' }}
              role="presentation"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerEnd}
              onPointerCancel={onPointerEnd}
              onDoubleClick={onDoubleClick}
            >
              <defs>
                <linearGradient id={`${uid}-sea`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor={PALETTE.seaTop} />
                  <stop offset="1" stopColor={PALETTE.seaBottom} />
                </linearGradient>
                <radialGradient id={`${uid}-land`} cx="0.45" cy="0.4" r="0.75">
                  <stop offset="0" stopColor={PALETTE.land} />
                  <stop offset="1" stopColor={PALETTE.landShade} />
                </radialGradient>
                <filter id={`${uid}-soft`} x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="7" />
                </filter>
                <filter id={`${uid}-shadow`} x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="1.5" stdDeviation="1.6" floodColor="#3c3428" floodOpacity="0.28" />
                </filter>
                <path id={`${uid}-landpath`} d={BASE.land} fillRule="evenodd" />
              </defs>

              <rect x={-BASE.width} y={-BASE.height} width={BASE.width * 3} height={BASE.height * 3} fill={`url(#${uid}-sea)`} />

              {/* Soft coastline: a pale wash around the land, then the land itself */}
              <use href={`#${uid}-landpath`} fill="none" stroke={PALETTE.coastGlow} strokeWidth={9} strokeLinejoin="round" vectorEffect="non-scaling-stroke" opacity={0.75} />
              <use href={`#${uid}-landpath`} fill={`url(#${uid}-land)`} stroke={PALETTE.coast} strokeWidth={0.9} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <path d={BASE.lakes} fill={PALETTE.seaTop} stroke={PALETTE.coast} strokeWidth={0.6} vectorEffect="non-scaling-stroke" />
              <path d={BASE.rivers} fill="none" stroke={PALETTE.river} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />

              {/* Relief glyphs */}
              {ANATOLIA_RELIEF.map(([lon, lat]) => {
                const [x, y] = projectAnatolia(lon, lat);
                return (
                  <g key={`${lon}-${lat}`} transform={`translate(${x} ${y}) scale(${px})`} fill="none" stroke={PALETTE.relief} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" opacity={0.85}>
                    <path d="M-13 4 L-6 -5 L0 2 L5 -3 L12 4" />
                  </g>
                );
              })}

              {/* Historical overlays */}
              {map.overlays.includes('seljuk-1243') && (
                <g>
                  <path d={seljukPath} fill={PALETTE.seljuk} opacity={0.26} filter={`url(#${uid}-soft)`} />
                  <path d={seljukPath} fill="none" stroke={PALETTE.seljuk} strokeWidth={1.6} strokeDasharray="2 7" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity={0.9} />
                </g>
              )}

              {map.overlays.includes('mongol-1243') && (
                <g>
                  <path d={mongolPath} fill="none" stroke={PALETTE.halo} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" opacity={0.7} />
                  <path className="story-map-march" d={mongolPath} fill="none" stroke={PALETTE.mongol} strokeWidth={2.6} strokeDasharray="9 5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
                  <g transform={`translate(${mongolHead.x} ${mongolHead.y}) rotate(${mongolHead.angle}) scale(${px})`}>
                    <path d="M-9 -7 L3 0 L-9 7 Z" fill={PALETTE.mongol} stroke={PALETTE.halo} strokeWidth={1.4} strokeLinejoin="round" />
                  </g>
                </g>
              )}

              {/* Sea names */}
              {map.seas.map(sea => {
                const [x, y] = projectAnatolia(sea.lon, sea.lat);
                return (
                  <text key={sea.id} transform={`translate(${x} ${y}) scale(${px})`} textAnchor="middle" fill={PALETTE.sea} fontSize={14} fontStyle={language === 'ar' ? 'normal' : 'italic'} letterSpacing={language === 'ar' ? 0 : 1.5} style={{ fontFamily: svgFont }} opacity={0.9}>
                    {sea.name}
                  </text>
                );
              })}

              {/* Selected region wash */}
              {selected?.areaRadiusKm && (() => {
                const [x, y] = projectAnatolia(selected.lon, selected.lat);
                const r = selected.areaRadiusKm * ANATOLIA_UNITS_PER_KM;
                return (
                  <circle cx={x} cy={y} r={r} fill="var(--brand-500)" fillOpacity={0.12} stroke="var(--brand-600)" strokeOpacity={0.55} strokeWidth={1.5} strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
                );
              })()}

              {/* Reference towns */}
              {map.towns.map(town => {
                const [x, y] = projectAnatolia(town.lon, town.lat);
                return (
                  <g key={town.id} transform={`translate(${x} ${y}) scale(${px})`}>
                    <circle r={3.4} fill={PALETTE.halo} stroke={PALETTE.label} strokeWidth={1.4} />
                    {showTownLabels && <text x={town.labelSide === 'bottom' ? 0 : 7} y={town.labelSide === 'bottom' ? 17 : 4} textAnchor={town.labelSide === 'bottom' ? 'middle' : 'start'} fontSize={12} fill={PALETTE.label} stroke={PALETTE.halo} strokeWidth={3} paintOrder="stroke" strokeLinejoin="round" style={{ fontFamily: svgFont }}>
                      {town.name}
                    </text>}
                  </g>
                );
              })}

              {/* Places */}
              {places.map((place, index) => {
                const [x, y] = projectAnatolia(place.lon, place.lat);
                const isSelected = place.id === selectedId;
                const isVisited = visited.has(place.id);
                const fill = place.tone === 'event' ? PALETTE.mongol : 'var(--brand-700)';
                const label = labelOffset(place.labelSide);
                return (
                  <g
                    key={place.id}
                    data-map-pin
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={`${formatNumber(index + 1)}. ${place.name}`}
                    transform={`translate(${x} ${y}) scale(${px * pinScale})`}
                    className="cursor-pointer outline-none [&:focus-visible>circle.ring]:opacity-100"
                    onClick={() => selectPlace(place.id)}
                    onKeyDown={event => {
                      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectPlace(place.id); }
                    }}
                  >
                    {!isVisited && !isSelected && (
                      <circle className="story-map-pulse" r={PIN + 1} fill="none" stroke={fill} strokeWidth={2} />
                    )}
                    <circle className="ring" r={PIN + 6} fill="none" stroke="var(--brand-500)" strokeWidth={2.5} opacity={isSelected ? 1 : 0} />
                    <g transform={isSelected ? 'scale(1.12)' : undefined} filter={`url(#${uid}-shadow)`}>
                      <circle r={PIN + 2.5} fill="#fffdf7" />
                      <circle r={PIN - 1} fill={fill} />
                      <g color="#ffffff">
                        <MapGlyph icon={place.icon} size={20} x={-10} y={-10} strokeWidth={2} />
                      </g>
                      <g transform={`translate(${PIN - 2} ${-(PIN - 2)})`}>
                        <circle r={8.5} fill={isVisited ? '#0f8a5f' : '#fffdf7'} stroke={isVisited ? '#fffdf7' : fill} strokeWidth={1.6} />
                        {isVisited ? (
                          <path d="M-3.6 0.2 L-1 2.8 L3.8 -2.4" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        ) : (
                          <text y={3.8} textAnchor="middle" fontSize={11} fontWeight={700} fill={fill} style={{ fontFamily: 'var(--font-display)' }}>
                            {formatNumber(index + 1)}
                          </text>
                        )}
                      </g>
                    </g>
                    <text
                      x={label.dx}
                      y={label.dy}
                      textAnchor={label.anchor}
                      fontSize={isSelected ? 15 : 14}
                      fontWeight={isSelected ? 700 : 600}
                      fill={PALETTE.label}
                      stroke={PALETTE.halo}
                      strokeWidth={4}
                      strokeLinejoin="round"
                      paintOrder="stroke"
                      style={{ fontFamily: svgFont }}
                    >
                      {place.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Compass */}
            <div className="pointer-events-none absolute left-3 top-3 flex h-11 w-11 flex-col items-center justify-center rounded-full border border-white/70 bg-white/60 font-display text-[10px] font-bold text-[#5f8f9c] shadow-sm backdrop-blur-sm" aria-hidden="true" dir="ltr">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2 L15 12 L12 10.5 L9 12 Z" fill="#b8573f" /><path d="M12 22 L9 12 L12 13.5 L15 12 Z" fill="#9fb9c0" /></svg>
              N
            </div>

            {/* Zoom controls */}
            <div className="absolute right-3 top-3 flex flex-col overflow-hidden rounded-2xl border border-brand-200 bg-white/90 shadow-md backdrop-blur-sm">
              <button type="button" onClick={() => zoomBy(0.7)} aria-label={t('map.zoomIn')} title={t('map.zoomIn')} className="flex h-11 w-11 items-center justify-center font-display text-xl font-semibold text-brand-800 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500">+</button>
              <span className="mx-2 h-px bg-brand-100" aria-hidden="true" />
              <button type="button" onClick={() => zoomBy(1 / 0.7)} disabled={!zoomed} aria-label={t('map.zoomOut')} title={t('map.zoomOut')} className="flex h-11 w-11 items-center justify-center font-display text-xl font-semibold text-brand-800 hover:bg-brand-50 disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500">−</button>
              <span className="mx-2 h-px bg-brand-100" aria-hidden="true" />
              <button type="button" onClick={resetView} disabled={isHome} aria-label={t('map.reset')} title={t('map.reset')} className="flex h-11 w-11 items-center justify-center text-brand-800 hover:bg-brand-50 disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500">
                <RotateCcw size={18} />
              </button>
            </div>

            {/* Legend and scale */}
            <div className="pointer-events-none absolute bottom-3 start-3 end-3 flex flex-wrap items-end justify-between gap-2">
              <div className="hidden sm:block">{legend}</div>
              <div className="ms-auto rounded-lg bg-white/75 px-2 py-1 text-[10px] font-semibold text-[#3c3428] shadow-sm backdrop-blur-sm" dir="ltr">
                <div className="h-1.5 border-x-2 border-b-2 border-[#3c3428]/70" style={{ width: `${Math.max(24, Math.min(160, scaleBarPx))}px` }} aria-hidden="true" />
                <div className="mt-0.5 text-center">{formatNumber(scaleKm)} {t('map.km')}</div>
              </div>
            </div>
          </div>

        {/* Info card */}
        <aside
          className="min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:min-h-0 lg:overflow-y-auto custom-scrollbar rounded-[1.5rem] border border-brand-200/90 bg-brand-50/88 p-4 sm:p-5 shadow-[0_10px_30px_rgba(63,49,28,0.10)] flex flex-col"
          aria-live="polite"
        >
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex flex-1 flex-col gap-3"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                    style={{ background: selected.tone === 'event' ? PALETTE.mongol : 'var(--brand-700)' }}
                  >
                    <MapGlyph icon={selected.icon} size={21} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                      {formatNumber(selectedIndex + 1)} · {selected.kind}
                    </div>
                    <h4 className="font-display text-xl font-semibold leading-tight text-wood sm:text-2xl">{selected.name}</h4>
                  </div>
                </div>

                <p className={cn('font-serif text-wood/90', language === 'ar' ? 'text-[19px] leading-[1.95]' : 'text-[16px] leading-[1.7] sm:text-[17px]')}>
                  {selected.text}
                </p>

                {isTeacher && (selected.teacherNote || selected.source) && (
                  <div className="rounded-2xl border border-dashed border-brand-300 bg-white/70 p-3 text-[13px] leading-relaxed text-wood/80 sm:text-[14px]">
                    <div className="mb-1 flex items-center gap-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700">
                      <GraduationCap size={15} aria-hidden="true" />
                      {t('map.teacherNote')}
                    </div>
                    {selected.teacherNote && <p>{selected.teacherNote}</p>}
                    {selected.source && (
                      <p className="mt-1.5 text-[12px] text-wood/60">
                        <span className="font-semibold">{t('map.source')}:</span> <bdi dir="ltr">{selected.source}</bdi>
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => selectPlace(places[(selectedIndex - 1 + places.length) % places.length].id, true)}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-brand-200 bg-white px-4 font-display text-[12px] font-semibold text-brand-800 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <ArrowRight size={15} className={cn(!isRTL && 'rotate-180')} aria-hidden="true" />
                    {t('map.previous')}
                  </button>
                  <button
                    type="button"
                    onClick={() => selectPlace(places[(selectedIndex + 1) % places.length].id, true)}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-brand-700 px-4 font-display text-[12px] font-semibold text-white shadow-md hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    {t('map.next')}
                    <ArrowRight size={15} className={cn(isRTL && 'rotate-180')} aria-hidden="true" />
                  </button>
                </div>
                {visited.size === places.length && (
                  <p className="flex items-center gap-1.5 rounded-xl bg-emerald-500/10 px-3 py-2 font-display text-[12px] font-semibold text-emerald-800">
                    <Check size={15} aria-hidden="true" />
                    {t('map.allExplored')}
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-1 flex-col gap-3"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <MapPin size={22} aria-hidden="true" />
                </span>
                <h4 className="font-display text-xl font-semibold leading-tight text-wood sm:text-2xl">{t('map.startTitle')}</h4>
                <p className={cn('font-serif text-wood/80', language === 'ar' ? 'text-[18px] leading-[1.9]' : 'text-[15px] leading-[1.7] sm:text-[16px]')}>
                  {t('map.startText')}
                </p>
                <ol className="flex flex-col gap-1.5">
                  {places.map((place, index) => (
                    <li key={place.id}>
                      <button
                        type="button"
                        onClick={() => selectPlace(place.id, true)}
                        className="flex min-h-11 w-full items-center gap-3 rounded-xl border border-brand-200/80 bg-white/80 px-3 py-2 text-start hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                      >
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                          style={{ background: place.tone === 'event' ? PALETTE.mongol : 'var(--brand-700)' }}
                        >
                          <MapGlyph icon={place.icon} size={17} strokeWidth={2.1} />
                        </span>
                        <span className="min-w-0 flex-1 truncate font-display text-[14px] font-semibold text-wood">
                          {formatNumber(index + 1)}. {place.name}
                        </span>
                        <span className="shrink-0 text-[11px] text-wood/55">{place.kind}</span>
                      </button>
                    </li>
                  ))}
                </ol>
                <p className="mt-auto text-[12px] leading-snug text-wood/55">{t('map.hint')}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>
        {/* Legend (phones) and timeline */}
        <div className="min-w-0 flex flex-col gap-3 lg:col-start-1 lg:row-start-2">
          <div className="sm:hidden">{legend}</div>

          {/* Timeline */}
          {map.timeline.length > 0 && (
            <div className="shrink-0 rounded-2xl border border-brand-200/90 bg-brand-50/88 px-3 py-2.5 sm:px-4">
              <div className="mb-1.5 flex items-center gap-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
                <Clock size={14} aria-hidden="true" />
                {t('map.timeline')}
              </div>
              <ol className="relative grid gap-1" style={{ gridTemplateColumns: `repeat(${map.timeline.length}, minmax(0, 1fr))` }}>
                <span className="pointer-events-none absolute inset-x-[12%] top-[15px] h-0.5 rounded bg-brand-200" aria-hidden="true" />
                {map.timeline.map(item => {
                  const place = places.find(entry => entry.id === item.placeId);
                  const active = selectedId === item.placeId;
                  return (
                    <li key={`${item.year}-${item.placeId}`} className="relative min-w-0">
                      <button
                        type="button"
                        onClick={() => selectPlace(item.placeId, true)}
                        aria-pressed={active}
                        className="group flex w-full flex-col items-center gap-1 rounded-xl px-1 py-0.5 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                      >
                        <span className={cn(
                          'relative z-10 flex h-[30px] items-center rounded-full border px-2.5 font-display text-[12px] font-bold tabular-nums transition-colors sm:text-[13px]',
                          active
                            ? (place?.tone === 'event' ? 'border-transparent text-white' : 'border-transparent bg-brand-700 text-white')
                            : 'border-brand-200 bg-white text-brand-800 group-hover:border-brand-400'
                        )}
                          style={active && place?.tone === 'event' ? { background: PALETTE.mongol } : undefined}
                        >
                          {formatNumber(item.year)}
                        </span>
                        <span className="w-full truncate text-[11px] leading-tight text-wood/70 sm:text-[12px]">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryMapPage;
