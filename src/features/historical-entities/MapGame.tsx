import React, { useMemo, useState } from 'react';
import { RotateCcw, Star, Target, X } from '../../components/ui/icons';
import { cn } from '../../lib/utils';
import { GROUP_COLORS, groupOf, tint } from './categories';
import { EntityMap } from './EntityMap';
import { LearnerName } from './LearnerNameLine';
import { MEDITERRANEAN_FEATURES, MEDITERRANEAN_FEATURE_VIEWBOX } from './mediterraneanFeatures';
import { resolveHistoricalCopy, resolveHistoricalMapAsset, type BookEntityEntry } from './registry';
import type { HistoricalEntity } from './types';

const ROUNDS = 8;
const [, , VIEW_WIDTH, VIEW_HEIGHT] = MEDITERRANEAN_FEATURE_VIEWBOX.split(' ').map(Number);
/** How far from a city dot a tap still counts, in map units (the map is 800 wide). */
const POINT_REACH = 24;
/** Extra reach around a shape's edge, so small islands and thin rivers are fair. */
const EDGE_REACH = 18;
const NEAR = 70;

const COPY = {
  title: 'Find it on the map',
  find: 'Find',
  question: (round: number) => `Place ${round} of ${ROUNDS}`,
  tapHint: 'Tap the map where you think it is.',
  correct: 'Well done! You found it.',
  near: 'Very close! Try again.',
  away: (direction: string) => `Not here. Look a little more to the ${direction}.`,
  revealed: 'Here it is. Look at the map.',
  next: 'Next place',
  finish: 'See my score',
  result: (found: number) => `You found ${found} of ${ROUNDS} places.`,
  again: 'Play again',
  close: 'Back to the atlas',
};

const DIRECTIONS = ['east', 'south-east', 'south', 'south-west', 'west', 'north-west', 'north', 'north-east'];

type Status = 'asking' | 'retry' | 'correct' | 'revealed';

/** Every shape and city in the story can be asked, except shapes so big that any tap is right. */
const isPlayable = (entity: HistoricalEntity) => {
  if (groupOf(entity) === 'people' || !entity.focus) return false;
  if (entity.focus.mode === 'point') return true;
  if (entity.focus.mode !== 'feature') return false;
  const numbers = entity.focus.features
    .map(id => MEDITERRANEAN_FEATURES[id as keyof typeof MEDITERRANEAN_FEATURES]?.d ?? '')
    .join(' ')
    .match(/-?\d+(\.\d+)?/g)
    ?.map(Number) ?? [];
  if (numbers.length < 4) return false;
  const xs = numbers.filter((_, index) => index % 2 === 0);
  const ys = numbers.filter((_, index) => index % 2 === 1);
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

const shuffle = <T,>(items: T[]) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
};

export const MapGame = ({
  entries,
  mapSrc,
  aspect,
  locale,
  mapClassName,
  mapStyle,
  onClose,
}: {
  entries: BookEntityEntry[];
  mapSrc: string;
  aspect: string;
  locale: 'en' | 'ar';
  mapClassName?: string;
  mapStyle?: React.CSSProperties;
  onClose: () => void;
}) => {
  const pool = useMemo(() => entries.map(entry => entry.entity).filter(isPlayable), [entries]);
  const [questions, setQuestions] = useState(() => shuffle(pool).slice(0, ROUNDS));
  const [round, setRound] = useState(0);
  const [status, setStatus] = useState<Status>('asking');
  const [hint, setHint] = useState('');
  const [tap, setTap] = useState<{ x: number; y: number }>();
  const [found, setFound] = useState(0);
  const [done, setDone] = useState(false);

  const target = questions[round];
  if (!target) return null;
  const copy = resolveHistoricalCopy(target, locale);
  const colors = GROUP_COLORS[groupOf(target)];
  const answered = status === 'correct' || status === 'revealed';

  const handleTap = (xPercent: number, yPercent: number) => {
    if (answered || done || !target.focus) return;
    const x = (xPercent / 100) * VIEW_WIDTH;
    const y = (yPercent / 100) * VIEW_HEIGHT;
    setTap({ x: xPercent, y: yPercent });
    if (isHit(target, x, y)) {
      setStatus('correct');
      setFound(count => count + 1);
      return;
    }
    if (status === 'retry') {
      setStatus('revealed');
      return;
    }
    const dx = (target.focus.x / 100) * VIEW_WIDTH - x;
    const dy = (target.focus.y / 100) * VIEW_HEIGHT - y;
    const direction = DIRECTIONS[Math.round(((Math.atan2(dy, dx) * 180) / Math.PI + 360) % 360 / 45) % 8];
    setHint(Math.hypot(dx, dy) <= NEAR ? COPY.near : COPY.away(direction));
    setStatus('retry');
  };

  const next = () => {
    setTap(undefined);
    setHint('');
    setStatus('asking');
    if (round + 1 >= questions.length) setDone(true);
    else setRound(value => value + 1);
  };

  const restart = () => {
    setQuestions(shuffle(pool).slice(0, ROUNDS));
    setRound(0);
    setFound(0);
    setDone(false);
    setTap(undefined);
    setHint('');
    setStatus('asking');
  };

  const stars = found >= ROUNDS - 1 ? 3 : found >= Math.ceil(ROUNDS * 0.6) ? 2 : 1;
  const message = status === 'correct' ? COPY.correct : status === 'revealed' ? COPY.revealed : status === 'retry' ? hint : COPY.tapHint;

  return (
    <div className="flex h-full min-h-0 flex-col gap-2.5">
      <div className="flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2 text-teal-900">
          <Target size={18} />
          <span className="font-display text-sm font-bold">{COPY.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 sm:flex" aria-hidden="true">
            {questions.map((question, index) => (
              <span
                key={question.id}
                className={cn('h-2 w-2 rounded-full', index < round || (index === round && (answered || done)) ? 'bg-teal-600' : index === round ? 'bg-teal-600/50' : 'bg-wood/15')}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1 rounded-lg border border-black/10 bg-white/70 px-2 py-1 text-[11px] font-bold text-wood/80 hover:bg-white"
          >
            <X size={13} /> {COPY.close}
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center lg:[container-type:size]">
        <EntityMap
          src={resolveHistoricalMapAsset(target, locale) ?? mapSrc}
          alt=""
          aspect={aspect}
          focus={answered ? { ...target.focus!, zoom: 1 } : undefined}
          showFocus={answered}
          color={colors.base}
          label={answered ? copy.title : undefined}
          onMapClick={done ? undefined : handleTap}
          tap={tap}
          className={mapClassName}
          style={mapStyle}
        />
      </div>

      {done ? (
        <div className="flex flex-col items-center gap-2 rounded-xl bg-white/60 px-3 py-3 text-center" aria-live="polite">
          <div className="flex gap-1 text-amber-500" aria-hidden="true">
            {[0, 1, 2].map(index => (
              <Star key={index} size={26} className={index < stars ? 'fill-amber-400' : 'opacity-25'} />
            ))}
          </div>
          <p className="font-display text-base font-bold text-brand-950">{COPY.result(found)}</p>
          <div className="flex gap-2">
            <button type="button" onClick={restart} className="inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-teal-800">
              <RotateCcw size={14} /> {COPY.again}
            </button>
            <button type="button" onClick={onClose} className="rounded-lg border border-teal-700/20 bg-white px-3 py-1.5 text-xs font-bold text-teal-900 hover:bg-teal-50">
              {COPY.close}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3 rounded-xl px-3 py-2" style={{ backgroundColor: tint(colors.base, 0.08) }}>
          <div className="min-w-0" aria-live="polite">
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: colors.base }}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: colors.base }} />
              {COPY.question(round + 1)} · {copy.kindLabel}
            </span>
            <p className="font-display text-lg font-bold leading-tight text-brand-950">
              {COPY.find}: {copy.title}
              <LearnerName entity={target} className="text-wood/75" />
            </p>
            <p className={cn('mt-0.5 text-[13px] leading-snug', status === 'correct' ? 'font-bold text-emerald-700' : status === 'retry' ? 'font-semibold text-amber-800' : 'text-wood/70')}>
              {message}
            </p>
          </div>
          {answered && (
            <button type="button" onClick={next} className="shrink-0 rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-teal-800">
              {round + 1 >= questions.length ? COPY.finish : COPY.next}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
