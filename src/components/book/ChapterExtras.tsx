import React, { useEffect, useState } from 'react';
import { Eye, CheckCircle, Target } from '../ui/icons';
import type { BeforeYouRead } from '../../types';
import { cn } from '../../lib/utils';

const readStored = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const writeStored = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be unavailable; the answer then lasts for this visit only.
  }
};

export interface BeforeYouReadState {
  guess: number | null;
  checked: boolean;
}

/** The learner's guess for one chapter, kept on the device. */
export const useBeforeYouRead = (storageKey: string) => {
  const [state, setState] = useState<BeforeYouReadState>(() => readStored(storageKey, { guess: null, checked: false }));
  useEffect(() => setState(readStored(storageKey, { guess: null, checked: false })), [storageKey]);
  const update = (next: BeforeYouReadState) => {
    setState(next);
    writeStored(storageKey, next);
  };
  return {
    state,
    guess: (index: number) => update({ guess: index, checked: false }),
    check: () => update({ ...state, checked: true }),
  };
};

const LABELS = {
  en: {
    title: 'Before you read',
    check: 'Check my guess',
    right: 'Your guess was right!',
    wrong: 'Good try. The answer is:',
    canTitle: 'I can',
    canHint: 'How well can you do these now?',
    yes: 'Yes',
    almost: 'Almost',
    notYet: 'Not yet',
  },
  ar: {
    title: 'قَبْلَ القِرَاءَةِ',
    check: 'تَحَقَّقْ مِنْ تَخْمِينِي',
    right: 'تَخْمِينُكَ صَحِيحٌ!',
    wrong: 'مُحَاوَلَةٌ جَيِّدَةٌ. الإِجَابَةُ:',
    canTitle: 'أَسْتَطِيعُ',
    canHint: 'إِلَى أَيِّ حَدٍّ تَسْتَطِيعُ ذٰلِكَ الآنَ؟',
    yes: 'نَعَمْ',
    almost: 'تَقْرِيبًا',
    notYet: 'لَيْسَ بَعْدُ',
  },
};

/** A small optional guess above the story. The text is always visible; the learner can skip it. */
export const BeforeYouReadPanel = ({
  data,
  language,
  state,
  onGuess,
  onCheck,
}: {
  data: BeforeYouRead;
  language: string;
  state: BeforeYouReadState;
  onGuess: (index: number) => void;
  onCheck: () => void;
}) => {
  const L = language === 'ar' ? LABELS.ar : LABELS.en;
  const isArabic = language === 'ar';
  const { guess, checked } = state;
  const right = checked && guess === data.answer;

  return (
    <section
      data-before-you-read
      className="mb-4 rounded-xl border border-brand-200/80 bg-brand-50/60 px-3.5 py-3 font-sans"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <p className={cn('text-wood', isArabic ? 'text-base' : 'text-sm')}>
        <span className={cn('me-2 inline-flex items-center gap-1 align-middle font-display font-semibold uppercase tracking-widest text-brand-800', isArabic ? 'text-xs' : 'text-[10px]')}>
          <Eye size={14} />
          {L.title}
        </span>
        <span className="font-semibold">{data.question}</span>
      </p>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {data.options.map((option, index) => {
          const isGuess = guess === index;
          const isAnswer = checked && index === data.answer;
          return (
            <button
              key={option}
              type="button"
              disabled={checked}
              onClick={() => onGuess(index)}
              className={cn(
                'min-h-8 rounded-full border px-3 py-1 text-start transition-colors',
                isArabic ? 'text-sm' : 'text-[13px]',
                isAnswer
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold'
                  : isGuess
                  ? checked ? 'border-amber-400 bg-amber-50 text-wood' : 'border-brand-600 bg-white text-wood font-semibold'
                  : 'border-brand-100 bg-white text-wood/80 hover:border-brand-300',
              )}
            >
              {option}
            </button>
          );
        })}
        {!checked && guess !== null && (
          <button
            type="button"
            onClick={onCheck}
            className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-brand-700 px-3 font-display text-[12px] font-semibold text-white hover:bg-brand-800"
          >
            <Target size={14} />
            {L.check}
          </button>
        )}
      </div>

      {checked && (
        <p className={cn('mt-2', isArabic ? 'text-sm' : 'text-[13px]', right ? 'text-emerald-800' : 'text-wood/80')}>
          <span className="inline-flex items-center gap-1 font-semibold">
            {right && <CheckCircle size={14} />}
            {right ? L.right : `${L.wrong} ${data.options[data.answer]}`}
          </span>
          {data.quote && data.quote.replace(/[.\s]+$/, '') !== data.options[data.answer].replace(/[.\s]+$/, '') && <span className={cn('ms-1.5 font-serif text-wood/60', !isArabic && 'italic')}>{isArabic ? `«${data.quote}»` : `“${data.quote}”`}</span>}
        </p>
      )}
    </section>
  );
};

type Rating = 'yes' | 'almost' | 'notYet';

export const ICanPanel = ({ items, language, storageKey }: { items: string[]; language: string; storageKey: string }) => {
  const L = language === 'ar' ? LABELS.ar : LABELS.en;
  const isArabic = language === 'ar';
  const [ratings, setRatings] = useState<Record<number, Rating>>(() => readStored(storageKey, {}));
  useEffect(() => setRatings(readStored(storageKey, {})), [storageKey]);
  const rate = (index: number, value: Rating) => {
    const next = { ...ratings, [index]: value };
    setRatings(next);
    writeStored(storageKey, next);
  };
  const options: { value: Rating; label: string; on: string }[] = [
    { value: 'yes', label: L.yes, on: 'bg-emerald-600 text-white border-emerald-600' },
    { value: 'almost', label: L.almost, on: 'bg-amber-500 text-white border-amber-500' },
    { value: 'notYet', label: L.notYet, on: 'bg-wood/70 text-white border-wood/70' },
  ];

  return (
    <section data-i-can className="mt-6 rounded-[26px] border border-brand-100 bg-white p-5 sm:p-6 shadow-[0_14px_38px_rgba(63,49,28,0.06)] font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="flex items-baseline gap-3">
        <span className="inline-flex items-center gap-2 text-brand-800">
          <CheckCircle size={18} />
          <span className={cn('font-display font-semibold uppercase tracking-widest', isArabic ? 'text-sm' : 'text-[11px]')}>{L.canTitle}</span>
        </span>
        <span className={cn('text-wood/55', isArabic ? 'text-sm' : 'text-xs')}>{L.canHint}</span>
      </header>
      <ul className="mt-3 divide-y divide-gray-100">
        {items.map((item, index) => (
          <li key={item} className="flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between">
            <span className={cn('font-serif text-wood', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base')}>{item}</span>
            <span className="flex shrink-0 gap-1.5">
              {options.map(option => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={ratings[index] === option.value}
                  onClick={() => rate(index, option.value)}
                  className={cn(
                    'min-h-9 rounded-full border px-3 font-display text-[12px] font-semibold transition-colors',
                    ratings[index] === option.value ? option.on : 'border-gray-200 bg-white text-wood/65 hover:border-gray-300',
                  )}
                >
                  {option.label}
                </button>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
