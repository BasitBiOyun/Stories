import React from 'react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { MatchConnectors, pairColor } from './MatchConnectors';

/**
 * The one matching interaction of the app (Quick Challenge, Language Focus, Vocabulary
 * Challenge, Final Challenge): tap an item on one side, then its partner on the other; the
 * pair gets a shared number. Any pairing is allowed; results (✓/✕) appear only when the
 * caller says the round was checked. Re-tapping an item moves or replaces its pair.
 */

export interface MatchingPairLike {
  left: string;
  right: string;
}

interface MatchingBoardProps {
  pairs: MatchingPairLike[];
  /** Right-hand items in display order (usually shuffled). */
  meanings: string[];
  assignments: Record<string, string>;
  onAssignmentsChange: (next: Record<string, string>) => void;
  /** When true, every assigned pair shows ✓ or ✕ against `pairs`. */
  submitted?: boolean;
  /** Per-left result override (true ✓, false ✕, missing = neutral); used for partial checks. */
  results?: Record<string, boolean>;
  /** Left items that can no longer be changed (e.g. already confirmed correct). */
  lockedLefts?: ReadonlySet<string>;
  disabled?: boolean;
  headings?: { left: string; right: string };
  instructions?: string | null;
  renderLeft?: (left: string) => React.ReactNode;
  className?: string;
}

const MatchPairBadge = ({ label, color, result, description }: { label: string; color: string; result: boolean | null; description: string }) => (
  <span
    className="inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full px-1.5 font-display text-[11px] font-black text-white"
    style={{ backgroundColor: result === null ? color : result ? '#10B981' : '#F43F5E' }}
  >
    {result === null ? label : result ? '✓' : '✕'}
    <span className="sr-only">{` ${description}`}</span>
  </span>
);

const resultColor = (index: number, result: boolean | null) =>
  result === null ? pairColor(index) : result ? '#10B981' : '#F43F5E';

export const MatchingBoard: React.FC<MatchingBoardProps> = ({
  pairs,
  meanings,
  assignments,
  onAssignmentsChange,
  submitted = false,
  results,
  lockedLefts,
  disabled = false,
  headings,
  instructions,
  renderLeft,
  className,
}) => {
  const { language, t, formatNumber } = useLanguage();
  const isArabic = language === 'ar';
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [selectedLeft, setSelectedLeft] = React.useState<string | null>(null);
  const [selectedRight, setSelectedRight] = React.useState<string | null>(null);

  React.useEffect(() => {
    setSelectedLeft(null);
    setSelectedRight(null);
  }, [pairs, submitted]);

  const isLocked = (left: string) => Boolean(lockedLefts?.has(left));
  const ownerOf = (meaning: string) => pairs.findIndex(pair => assignments[pair.left] === meaning);
  const resultFor = (left: string): boolean | null => {
    if (results && left in results) return results[left];
    if (!submitted) return null;
    const pair = pairs.find(candidate => candidate.left === left);
    const assigned = assignments[left];
    return pair && assigned ? assigned === pair.right : null;
  };

  const link = (left: string, meaning: string) => {
    const next = { ...assignments };
    for (const [otherLeft, otherMeaning] of Object.entries(next)) {
      if (otherMeaning === meaning && !isLocked(otherLeft)) delete next[otherLeft];
    }
    next[left] = meaning;
    onAssignmentsChange(next);
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  const tapLeft = (left: string) => {
    if (disabled || submitted || isLocked(left)) return;
    if (selectedRight) {
      link(left, selectedRight);
      return;
    }
    setSelectedLeft(current => (current === left ? null : left));
  };

  const tapRight = (meaning: string) => {
    if (disabled || submitted) return;
    const ownerIndex = ownerOf(meaning);
    if (ownerIndex >= 0 && isLocked(pairs[ownerIndex].left)) return;
    if (selectedLeft) {
      link(selectedLeft, meaning);
      return;
    }
    setSelectedRight(current => (current === meaning ? null : meaning));
  };

  const cardBase = cn(
    'w-full min-h-14 rounded-xl border-2 px-4 py-3 text-start font-serif transition-[color,background-color,border-color,transform] duration-150 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 disabled:cursor-default enabled:active:scale-[0.99]',
    isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
  );

  return (
    <div className={cn('space-y-5', className)}>
      {instructions !== null && (
        <p className={cn('font-serif text-wood/55', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base')}>
          {instructions ?? t('nav.matchingInstructions')}
        </p>
      )}
      <div ref={gridRef} className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8" data-matching-board>
        {/* Below md the words become chips that stay pinned on top while the meanings scroll under them. */}
        <div className="space-y-2.5 max-md:sticky max-md:top-0 max-md:z-10 max-md:-mx-1 max-md:flex max-md:flex-wrap max-md:gap-2 max-md:space-y-0 max-md:bg-[#FBFAF6]/95 max-md:px-1 max-md:pb-2.5 max-md:pt-1 max-md:backdrop-blur-sm">
          <p className={cn('font-display uppercase tracking-widest font-black text-brand-700 max-md:w-full', isArabic ? 'text-sm sm:text-base' : 'text-xs')}>
            {headings?.left ?? (isArabic ? 'المفاهيم' : 'Concepts')}
          </p>
          {pairs.map((pair, pairIndex) => {
            const assigned = assignments[pair.left];
            const selected = selectedLeft === pair.left;
            const result = assigned ? resultFor(pair.left) : null;
            const locked = isLocked(pair.left);
            return (
              <button
                key={pair.left}
                type="button"
                data-match-left={pair.left}
                disabled={disabled || submitted || locked}
                onClick={() => tapLeft(pair.left)}
                aria-pressed={selected}
                className={cn(
                  cardBase,
                  'justify-between font-bold max-md:min-h-11 max-md:w-auto max-md:gap-2 max-md:rounded-full max-md:px-3.5 max-md:py-1.5',
                  selected ? 'border-brand-500 bg-brand-50 text-brand-950' : 'border-brand-200 bg-white text-wood',
                  result === true && 'bg-emerald-50/60',
                  result === false && 'bg-rose-50/60',
                )}
                style={assigned && !selected ? { borderColor: resultColor(pairIndex, result) } : undefined}
              >
                <span className="min-w-0 flex-1">{renderLeft ? renderLeft(pair.left) : pair.left}</span>
                {assigned && (
                  <MatchPairBadge
                    label={formatNumber(pairIndex + 1)}
                    color={pairColor(pairIndex)}
                    result={result}
                    description={isArabic ? `مرتبط بـ«${assigned}»` : `linked to “${assigned}”`}
                  />
                )}
              </button>
            );
          })}
        </div>
        <div className="space-y-2.5">
          <p className={cn('font-display uppercase tracking-widest font-black text-brand-700', isArabic ? 'text-sm sm:text-base' : 'text-xs')}>
            {headings?.right ?? (isArabic ? 'المعاني' : 'Meanings')}
          </p>
          {meanings.map(meaning => {
            const ownerIndex = ownerOf(meaning);
            const owner = ownerIndex >= 0 ? pairs[ownerIndex] : null;
            const selected = selectedRight === meaning;
            const result = owner ? resultFor(owner.left) : null;
            const locked = owner ? isLocked(owner.left) : false;
            return (
              <button
                key={meaning}
                type="button"
                data-match-right={meaning}
                disabled={disabled || submitted || locked}
                onClick={() => tapRight(meaning)}
                aria-pressed={selected}
                className={cn(
                  cardBase,
                  'font-medium',
                  selected ? 'border-brand-500 bg-brand-50 text-brand-950' : owner ? 'bg-white text-wood' : 'border-brand-200 bg-white text-wood/85 hover:bg-brand-50/40',
                  result === true && 'bg-emerald-50/60',
                  result === false && 'bg-rose-50/60',
                )}
                style={owner && !selected ? { borderColor: resultColor(ownerIndex, result) } : undefined}
              >
                {owner && (
                  <MatchPairBadge
                    label={formatNumber(ownerIndex + 1)}
                    color={pairColor(ownerIndex)}
                    result={result}
                    description={isArabic ? `مرتبط بـ«${owner.left}»` : `linked to “${owner.left}”`}
                  />
                )}
                <span className="min-w-0 flex-1">{meaning}</span>
              </button>
            );
          })}
        </div>
        <MatchConnectors
          containerRef={gridRef}
          connectors={pairs.flatMap((pair, pairIndex) => {
            const assigned = assignments[pair.left];
            if (!assigned) return [];
            const result = resultFor(pair.left);
            return [{ left: pair.left, right: assigned, color: resultColor(pairIndex, result), dashed: result === false }];
          })}
        />
      </div>
    </div>
  );
};
