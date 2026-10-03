import React, { useEffect, useState } from 'react';
import { Eye, Headphones, CheckCircle, Target } from '../ui/icons';
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

/** The learner's guess for one chapter, kept on the device so a return visit does not hide the text again. */
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
    listenStep: 'Choose your guess, then listen with the text closed.',
    readStep: 'Choose your guess, then read to check.',
    listen: 'Listen to check',
    pause: 'Pause',
    check: 'Check my guess',
    showText: 'Show the text',
    right: 'Your guess was right!',
    wrong: 'Good try. The answer is:',
    hidden: 'Listen first. The text opens after you check your guess.',
    canTitle: 'I can',
    canHint: 'How well can you do these now?',
    yes: 'Yes',
    almost: 'Almost',
    notYet: 'Not yet',
  },
  ar: {
    title: 'قَبْلَ القِرَاءَةِ',
    listenStep: 'اخْتَرْ تَخْمِينَكَ، ثُمَّ اسْتَمِعْ وَالنَّصُّ مُغْلَقٌ.',
    readStep: 'اخْتَرْ تَخْمِينَكَ، ثُمَّ اقْرَأْ لِتَتَحَقَّقَ.',
    listen: 'اسْتَمِعْ لِتَتَحَقَّقَ',
    pause: 'إِيقَافٌ',
    check: 'تَحَقَّقْ مِنْ تَخْمِينِي',
    showText: 'أَظْهِرِ النَّصَّ',
    right: 'تَخْمِينُكَ صَحِيحٌ!',
    wrong: 'مُحَاوَلَةٌ جَيِّدَةٌ. الإِجَابَةُ:',
    hidden: 'اسْتَمِعْ أَوَّلًا. يُفْتَحُ النَّصُّ بَعْدَ أَنْ تَتَحَقَّقَ مِنْ تَخْمِينِكَ.',
    canTitle: 'أَسْتَطِيعُ',
    canHint: 'إِلَى أَيِّ حَدٍّ تَسْتَطِيعُ ذٰلِكَ الآنَ؟',
    yes: 'نَعَمْ',
    almost: 'تَقْرِيبًا',
    notYet: 'لَيْسَ بَعْدُ',
  },
};

export const BeforeYouReadPanel = ({
  data,
  language,
  hasAudio,
  isPlaying,
  onListen,
  state,
  onGuess,
  onCheck,
}: {
  data: BeforeYouRead;
  language: string;
  hasAudio: boolean;
  isPlaying: boolean;
  onListen: () => void;
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
      className="mb-5 rounded-2xl border border-brand-200/90 bg-brand-50/70 p-4 sm:p-5 font-sans"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <header className="flex items-center gap-2 text-brand-800">
        <Eye size={18} />
        <span className={cn('font-display font-semibold uppercase tracking-widest', isArabic ? 'text-sm' : 'text-[11px]')}>{L.title}</span>
      </header>
      <p className={cn('mt-2 font-serif font-semibold text-wood', isArabic ? 'text-lg' : 'text-base sm:text-lg')}>{data.question}</p>
      <p className={cn('mt-1 text-wood/60', isArabic ? 'text-sm' : 'text-xs sm:text-sm')}>{hasAudio ? L.listenStep : L.readStep}</p>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
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
                'min-h-11 rounded-xl border-2 px-3 py-2 text-start font-serif font-semibold transition-colors',
                isArabic ? 'text-base' : 'text-sm',
                isAnswer
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                  : isGuess
                  ? checked ? 'border-amber-400 bg-amber-50 text-wood' : 'border-brand-600 bg-white text-wood ring-2 ring-brand-200'
                  : 'border-white bg-white/80 text-wood/85 hover:border-brand-200',
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      {!checked && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {hasAudio && (
            <button
              type="button"
              disabled={guess === null}
              onClick={onListen}
              className={cn(
                'inline-flex min-h-10 items-center gap-2 rounded-full px-4 font-display text-[12px] font-semibold',
                guess === null ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-brand-700 text-white hover:bg-brand-800',
              )}
            >
              <Headphones size={15} />
              {isPlaying ? L.pause : L.listen}
            </button>
          )}
          <button
            type="button"
            disabled={guess === null}
            onClick={onCheck}
            className={cn(
              'inline-flex min-h-10 items-center gap-2 rounded-full border px-4 font-display text-[12px] font-semibold',
              guess === null ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-brand-300 bg-white text-brand-800 hover:bg-brand-50',
            )}
          >
            <Target size={15} />
            {L.check}
          </button>
        </div>
      )}

      {checked && (
        <div className={cn('mt-3 rounded-xl px-3 py-2', right ? 'bg-emerald-50 text-emerald-900' : 'bg-white text-wood')}>
          <p className={cn('flex items-center gap-2 font-semibold', isArabic ? 'text-base' : 'text-sm')}>
            {right && <CheckCircle size={16} />}
            {right ? L.right : `${L.wrong} ${data.options[data.answer]}`}
          </p>
          {data.quote && <p className={cn('mt-1 font-serif italic text-wood/70', isArabic ? 'text-base not-italic' : 'text-sm')}>“{data.quote}”</p>}
        </div>
      )}
    </section>
  );
};

/** Covers the story text until the learner has listened or checked the guess. */
export const HiddenTextCover = ({ language, onShow }: { language: string; onShow: () => void }) => {
  const L = language === 'ar' ? LABELS.ar : LABELS.en;
  return (
    <div className="absolute inset-0 z-10 flex items-start justify-center pt-10">
      <div className="mx-4 max-w-sm rounded-2xl border border-brand-200 bg-white/95 p-4 text-center shadow-lg font-sans" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Headphones size={22} className="mx-auto text-brand-700" />
        <p className={cn('mt-2 text-wood/80', language === 'ar' ? 'text-base' : 'text-sm')}>{L.hidden}</p>
        <button type="button" onClick={onShow} className="mt-3 font-display text-[12px] font-semibold text-brand-700 underline underline-offset-4">
          {L.showText}
        </button>
      </div>
    </div>
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
