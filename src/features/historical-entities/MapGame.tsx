import React, { useEffect, useMemo, useState } from 'react';
import { Check, Target, X } from '../../components/ui/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { MapChallengeOverlay, type ChallengeAnswer } from '../story-maps/MapChallengeOverlay';
import { playMapSound } from '../story-maps/mapSounds';
import { groupOf } from './categories';
import { EntityMap } from './EntityMap';
import { EntityPicture } from './EntityPicture';
import { MEDITERRANEAN_FEATURES, MEDITERRANEAN_FEATURE_VIEWBOX } from './mediterraneanFeatures';
import { MEDITERRANEAN_MAP_ASPECT, mediterraneanContextMap } from './mediterraneanMap';
import { resolveHistoricalCopy, type BookEntityEntry } from './registry';
import type { HistoricalEntity } from './types';

// "Find it on the map", played like the Map challenge in the story maps: one tap
// per place, a pin, the right place in green, the distance, and a score at the end.
// It only asks for places from the story.

const ROUNDS = 8;
const [, , VIEW_WIDTH, VIEW_HEIGHT] = MEDITERRANEAN_FEATURE_VIEWBOX.split(' ').map(Number);
/** How far from a city dot a tap still counts, in map units (the map is 800 wide). */
const POINT_REACH = 24;
/** Extra reach around a shape's edge, so small islands and thin rivers are fair. */
const EDGE_REACH = 18;
const GOOD = '#0f8a5f';
const BAD = '#b8573f';
const INK = '#3c3428';
const HALO = '#fbf6ea';
// The map frame: 10°W–50°E, 14°N–48°N.
const WEST = -10;
const EAST = 50;
const NORTH = 48;
const SOUTH = 14;

const COPY = {
  title: 'Find it on the map',
  where: (name: string) => `Where is ${name.replace(/^The /, 'the ')}?`,
  inside: 'You tapped inside it.',
  away: (km: string) => `Your answer is ${km} km away. The green shape shows the right place.`,
  close: 'Back to the atlas',
  found: (found: string, total: string) => `${found} of ${total} found`,
};

const toLonLat = (x: number, y: number) => [WEST + (x / VIEW_WIDTH) * (EAST - WEST), NORTH - (y / VIEW_HEIGHT) * (NORTH - SOUTH)] as const;

const distanceKm = (lon1: number, lat1: number, lon2: number, lat2: number) => {
  const rad = Math.PI / 180;
  const a = Math.sin(((lat2 - lat1) * rad) / 2) ** 2
    + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(((lon2 - lon1) * rad) / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.min(1, Math.sqrt(a)));
};

const shapePoints = (entity: HistoricalEntity) => {
  if (entity.focus?.mode !== 'feature') return [];
  const numbers = entity.focus.features
    .map(id => MEDITERRANEAN_FEATURES[id as keyof typeof MEDITERRANEAN_FEATURES]?.d ?? '')
    .join(' ')
    .match(/-?\d+(\.\d+)?/g)
    ?.map(Number) ?? [];
  const points: [number, number][] = [];
  for (let index = 0; index + 1 < numbers.length; index += 2) points.push([numbers[index], numbers[index + 1]]);
  return points;
};

/** Every shape and city in the story can be asked, except shapes so big that any tap is right. */
const isPlayable = (entity: HistoricalEntity) => {
  if (groupOf(entity) === 'people' || !entity.focus) return false;
  if (entity.focus.mode === 'point') return true;
  if (entity.focus.mode !== 'feature' || entity.focus.view) return false;
  const points = shapePoints(entity);
  if (points.length < 2) return false;
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const share = ((Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys))) / (VIEW_WIDTH * VIEW_HEIGHT);
  return share < 0.25;
};

let hitContext: CanvasRenderingContext2D | null | undefined;
const getHitContext = () => {
  if (hitContext === undefined) hitContext = document.createElement('canvas').getContext('2d');
  return hitContext;
};

/** Did a tap at (x, y), in map units, land on the entity? */
const isHit = (entity: HistoricalEntity, x: number, y: number) => {
  const focus = entity.focus;
  if (!focus) return false;
  if (focus.mode === 'point') {
    return Math.hypot((focus.x / 100) * VIEW_WIDTH - x, (focus.y / 100) * VIEW_HEIGHT - y) <= POINT_REACH;
  }
  if (focus.mode !== 'feature') return false;
  const context = getHitContext();
  if (!context) return false;
  return focus.features.some(id => {
    const shape = MEDITERRANEAN_FEATURES[id as keyof typeof MEDITERRANEAN_FEATURES];
    if (!shape) return false;
    const path = new Path2D(shape.d);
    context.lineWidth = EDGE_REACH * 2;
    if (context.isPointInStroke(path, x, y)) return true;
    return shape.kind !== 'line' && context.isPointInPath(path, x, y);
  });
};

/** The point of the target the answer is measured to: the city, or the nearest edge of the shape. */
const targetPointFor = (entity: HistoricalEntity, x: number, y: number): [number, number] => {
  const focus = entity.focus!;
  if (focus.mode === 'point') return [(focus.x / 100) * VIEW_WIDTH, (focus.y / 100) * VIEW_HEIGHT];
  let best: [number, number] = [(focus.x / 100) * VIEW_WIDTH, (focus.y / 100) * VIEW_HEIGHT];
  let bestDistance = Infinity;
  shapePoints(entity).forEach(point => {
    const distance = Math.hypot(point[0] - x, point[1] - y);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = point;
    }
  });
  return best;
};

const shuffle = <T,>(items: T[]) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
};

const buzz = () => { try { navigator.vibrate?.(10); } catch { /* not available */ } };

interface GameAnswer extends ChallengeAnswer {
  /** Where the learner tapped and the point it was measured to, in map units. */
  tap: [number, number];
  target: [number, number];
}

export const MapGame = ({
  entries,
  locale,
  onClose,
}: {
  entries: BookEntityEntry[];
  locale: 'en' | 'ar';
  onClose: () => void;
}) => {
  const { t, formatNumber, language } = useLanguage();
  const pool = useMemo(() => entries.map(entry => entry.entity).filter(isPlayable), [entries]);
  const [questions, setQuestions] = useState(() => shuffle(pool).slice(0, ROUNDS));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<GameAnswer[]>([]);

  useEffect(() => { playMapSound('start'); }, []);

  const total = questions.length;
  const done = index >= total;
  const target = done ? undefined : questions[index];
  const answer = answers[index];
  const score = answers.filter(item => item?.correct).length;
  const prompts = useMemo(() => questions.map(entity => {
    const copy = resolveHistoricalCopy(entity, locale);
    const learnerName = entity.learnerNames?.tr;
    return COPY.where(learnerName ? `${copy.title} (${learnerName})` : copy.title);
  }), [questions, locale]);

  const handleTap = (xPercent: number, yPercent: number) => {
    if (!target || answer) return;
    const x = (xPercent / 100) * VIEW_WIDTH;
    const y = (yPercent / 100) * VIEW_HEIGHT;
    const correct = isHit(target, x, y);
    const point = targetPointFor(target, x, y);
    const [lon, lat] = toLonLat(x, y);
    const [targetLon, targetLat] = toLonLat(point[0], point[1]);
    const inside = correct && target.focus?.mode === 'feature';
    const next: GameAnswer = { lon, lat, distanceKm: inside ? 0 : distanceKm(lon, lat, targetLon, targetLat), correct, tap: [x, y], target: point };
    setAnswers(previous => {
      const list = [...previous];
      list[index] = next;
      return list;
    });
    buzz();
    playMapSound('drop');
    window.setTimeout(() => playMapSound(correct ? 'correct' : 'wrong'), 560);
    if (correct) {
      window.setTimeout(() => {
        void import('canvas-confetti').then(module => module.default({
          particleCount: 36, spread: 70, startVelocity: 22, ticks: 90, scalar: 0.8,
          origin: { x: 0.3, y: 0.5 },
          colors: [GOOD, '#e0ad48', '#1f5f63'],
        }));
      }, 560);
    }
  };

  const nextQuestion = () => {
    playMapSound('next');
    setIndex(value => value + 1);
  };

  const restart = () => {
    setQuestions(shuffle(pool).slice(0, ROUNDS));
    setIndex(0);
    setAnswers([]);
    playMapSound('start');
  };

  useEffect(() => {
    if (!done || score !== total || total === 0) return;
    void import('canvas-confetti').then(module => module.default({ particleCount: 90, spread: 65, origin: { y: 0.65 }, colors: [GOOD, '#e0ad48', '#1f5f63'] }));
  }, [done, score, total]);

  const isFeature = target?.focus?.mode === 'feature';
  const detail = answer && target && isFeature
    ? (answer.correct ? COPY.inside : COPY.away(formatNumber(Math.round(answer.distanceKm))))
    : undefined;
  const ratio = (() => {
    const [width, height] = MEDITERRANEAN_MAP_ASPECT.split('/').map(Number);
    return width / height;
  })();
  const svgFont = language === 'ar' ? 'var(--font-arabic, var(--font-display))' : 'var(--font-display)';
  const tag = (label: string, fill: string, y: number, delay: string) => (
    <text y={y} textAnchor="middle" fontSize={12} fontWeight={700} fill={fill} stroke={HALO} strokeWidth={4} paintOrder="stroke" strokeLinejoin="round" className="story-map-fade" style={{ fontFamily: svgFont, animationDelay: delay }}>
      {label}
    </text>
  );

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-3 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
      <style>{`
        @keyframes story-map-grow { 0% { transform: scale(0); opacity: 0 } 65% { transform: scale(1.06); opacity: 1 } 100% { transform: scale(1); opacity: 1 } }
        @keyframes story-map-line { from { stroke-dashoffset: var(--len) } to { stroke-dashoffset: 0 } }
        @keyframes story-map-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes story-map-tapring { 0% { transform: scale(.6); opacity: .85 } 100% { transform: scale(4.2); opacity: 0 } }
        @keyframes story-map-pinland { 0% { transform: translateY(-34px) scale(.4); opacity: 0 } 55% { transform: translateY(0) scale(1.08); opacity: 1 } 75% { transform: translateY(-5px) } 100% { transform: none; opacity: 1 } }
        @keyframes story-map-shake { 0%, 100% { transform: translateX(0) } 20% { transform: translateX(-5px) } 40% { transform: translateX(5px) } 60% { transform: translateX(-3px) } 80% { transform: translateX(2px) } }
        @keyframes story-map-cue { 0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,.5) } 50% { transform: scale(1.12); box-shadow: 0 0 0 7px rgba(255,255,255,0) } }
        .story-map-grow { transform-box: fill-box; transform-origin: center; animation: story-map-grow .7s cubic-bezier(.2,.9,.3,1.2) .55s both; }
        .story-map-line { animation: story-map-line .5s ease-out .3s both; }
        .story-map-fade { animation: story-map-fade .4s ease-out both; opacity: 0; }
        .story-map-tapring { transform-box: fill-box; transform-origin: center; animation: story-map-tapring .8s ease-out both; }
        .story-map-pinland { transform-box: fill-box; transform-origin: center; animation: story-map-pinland .55s cubic-bezier(.3,.8,.4,1) both; }
        .story-map-shake { animation: story-map-pinland .55s cubic-bezier(.3,.8,.4,1) both, story-map-shake .45s ease-in-out .6s both; }
        .story-map-cue { animation: story-map-cue 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .story-map-grow, .story-map-line, .story-map-fade, .story-map-tapring, .story-map-pinland, .story-map-shake, .story-map-cue { animation: none; opacity: 1; } }
      `}</style>

      <section className="flex items-center justify-center rounded-2xl border border-black/5 bg-white/55 p-3 shadow-sm backdrop-blur-sm lg:min-h-0 lg:[container-type:size]">
        <div
          className="relative w-full lg:w-[min(100cqw,calc(100cqh*var(--map-ratio)))]"
          style={{ '--map-ratio': ratio } as React.CSSProperties}
        >
          <EntityMap
            src={mediterraneanContextMap}
            alt=""
            aspect={MEDITERRANEAN_MAP_ASPECT}
            focus={answer && target?.focus ? { ...target.focus, zoom: 1 } : undefined}
            showFocus={Boolean(answer && isFeature)}
            color={GOOD}
            label={answer && isFeature && target ? resolveHistoricalCopy(target, locale).title : undefined}
            onMapClick={done || answer ? undefined : handleTap}
            className={cn('w-full', !done && !answer && 'cursor-crosshair')}
          />

          {answer && target && (
            <svg viewBox={MEDITERRANEAN_FEATURE_VIEWBOX} preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
              {(() => {
                const [ax, ay] = answer.tap;
                const [tx, ty] = answer.target;
                const colour = answer.correct ? GOOD : BAD;
                const length = Math.hypot(tx - ax, ty - ay);
                const showLine = !answer.correct && length > 1;
                const km = `${formatNumber(Math.round(answer.distanceKm))} ${t('map.km')}`;
                return (
                  <g key={`answer-${index}`}>
                    {!isFeature && (
                      <g transform={`translate(${tx} ${ty})`}>
                        <circle className="story-map-grow" r={POINT_REACH} fill={GOOD} fillOpacity={0.18} stroke={GOOD} strokeWidth={2.2} strokeDasharray="6 5" />
                        <circle className="story-map-fade" r={5} fill={GOOD} stroke="#fff" strokeWidth={2} style={{ animationDelay: '0.6s' }} />
                        <g transform={`translate(0 ${-POINT_REACH})`}>{tag(t('map.rightPlace'), GOOD, -9, '0.95s')}</g>
                      </g>
                    )}
                    {showLine && (
                      <line
                        className="story-map-line"
                        x1={ax} y1={ay} x2={tx} y2={ty}
                        stroke={INK} strokeOpacity={0.6} strokeWidth={2} strokeLinecap="round"
                        strokeDasharray={length}
                        style={{ '--len': length } as React.CSSProperties}
                      />
                    )}
                    {showLine && (
                      <g transform={`translate(${(ax + tx) / 2} ${(ay + ty) / 2})`} className="story-map-fade" style={{ animationDelay: '0.95s' }}>
                        <rect x={-31} y={-11} width={62} height={22} rx={11} fill="#fffdf7" stroke={INK} strokeOpacity={0.35} />
                        <text y={4.5} textAnchor="middle" fontSize={12} fontWeight={700} fill={INK} style={{ fontFamily: svgFont }}>{km}</text>
                      </g>
                    )}
                    <g transform={`translate(${ax} ${ay})`}>
                      <circle className="story-map-tapring" r={11} fill="none" stroke={colour} strokeWidth={2.5} />
                      <circle className="story-map-tapring" r={11} fill="none" stroke={colour} strokeWidth={2.5} style={{ animationDelay: '0.14s' }} />
                      <g className={answer.correct ? 'story-map-pinland' : 'story-map-pinland story-map-shake'}>
                        <circle r={11} fill="#fff" stroke={colour} strokeWidth={3.5} />
                        {answer.correct
                          ? <path d="M-4.5 0.4 L-1.4 3.4 L4.6 -3" fill="none" stroke={colour} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
                          : <path d="M-4 -4 L4 4 M4 -4 L-4 4" fill="none" stroke={colour} strokeWidth={2.6} strokeLinecap="round" />}
                      </g>
                      {tag(t('map.yourAnswer'), colour, 30, '0.5s')}
                    </g>
                  </g>
                );
              })()}
            </svg>
          )}

          <MapChallengeOverlay
            question={target ? { id: target.id, prompt: prompts[index], lon: 0, lat: 0, radiusKm: 0 } : undefined}
            index={index}
            total={total}
            answer={answer}
            results={answers}
            done={done}
            score={score}
            onNext={nextQuestion}
            onRetry={restart}
            onExit={onClose}
            detail={detail}
          />
        </div>
      </section>

      <aside className="flex flex-col gap-3 rounded-2xl border border-brand-200/90 bg-brand-50/88 p-4 shadow-sm lg:min-h-0 lg:overflow-y-auto custom-scrollbar" aria-live="polite">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
            <Target size={22} aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="font-display text-lg font-semibold leading-tight text-wood xl:text-xl">{COPY.title}</h4>
            <p className="text-[13px] font-bold text-brand-700">{COPY.found(formatNumber(score), formatNumber(total))}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-[12px] font-bold text-brand-800 hover:bg-brand-50"
          >
            <X size={13} /> {COPY.close}
          </button>
        </div>

        <ol className="flex flex-col gap-1.5" aria-label={t('map.challengeText')}>
          {(['map.step1', 'map.step2', 'map.step3'] as const).map((key, step) => {
            const activeStep = done ? -1 : answer ? 2 : 1;
            const on = step === activeStep || (step === 0 && !answer && !done);
            return (
              <li key={key} className={cn('flex items-center gap-2.5 text-wood transition-opacity', on ? 'opacity-100' : 'opacity-45')}>
                <span className={cn('flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-display text-[12px] font-bold', on ? 'bg-brand-700 text-white' : 'bg-brand-200 text-brand-800')}>{formatNumber(step + 1)}</span>
                <span className="font-serif text-[14px] leading-snug">{t(key)}</span>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 rounded-xl border border-brand-200/80 bg-white/70 px-3 py-2 text-[12px] text-wood/85 [@media(max-height:820px)]:lg:hidden">
          <span className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="-9 -9 18 18" aria-hidden="true"><circle r="6.5" fill="#fff" stroke={BAD} strokeWidth="2.5" /></svg>
            {t('map.yourAnswer')}
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="18" height="18" viewBox="-9 -9 18 18" aria-hidden="true"><circle r="7" fill={GOOD} fillOpacity="0.2" stroke={GOOD} strokeWidth="1.8" strokeDasharray="3 2.5" /></svg>
            {t('map.rightPlace')}
          </span>
        </div>

        <ol className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1 [@media(max-height:820px)]:gap-1">
          {questions.map((entity, item) => {
            const result = answers[item];
            const current = item === index && !done;
            const copy = resolveHistoricalCopy(entity, locale);
            return (
              <li
                key={entity.id}
                className={cn('flex min-h-10 items-center gap-2.5 rounded-xl border px-2 py-1 transition-colors [@media(max-height:820px)]:min-h-9 [@media(max-height:820px)]:py-0.5 [@media(min-height:900px)]:min-h-12', current ? 'border-brand-500 bg-white shadow-sm' : 'border-brand-200/80 bg-white/70')}
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[12px] font-bold text-white"
                  style={{ background: result ? (result.correct ? GOOD : BAD) : current ? 'var(--brand-700)' : 'var(--brand-300)' }}
                >
                  {result ? (result.correct ? <Check size={14} aria-hidden="true" /> : <X size={13} aria-hidden="true" />) : formatNumber(item + 1)}
                </span>
                {result ? (
                  <>
                    <EntityPicture entity={entity} iconSize={14} className="h-8 w-8 shrink-0 rounded-md" />
                    <span className="min-w-0 flex-1 truncate font-display text-[14px] font-bold text-brand-950">{copy.title}</span>
                  </>
                ) : (
                  <span className="min-w-0 flex-1 text-[13px] leading-snug text-wood/60">{current ? prompts[item] : t('map.question')}</span>
                )}
              </li>
            );
          })}
        </ol>
      </aside>
    </div>
  );
};
