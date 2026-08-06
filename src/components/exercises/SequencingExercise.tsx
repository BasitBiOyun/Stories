import React, { useState, useMemo } from 'react';
import { Reorder, motion, AnimatePresence, useDragControls } from 'framer-motion';
import { CheckCircle2, XCircle, RotateCcw, GripVertical, Zap, ArrowDown, ListOrdered } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import confetti from 'canvas-confetti';

// ─── Types ────────────────────────────────────────────────────────────────────

type Item = { id: string; text: string };

type Props = {
  items: Item[];
  onComplete: (correct: boolean) => void;
  collectionId?: string;
};

type Phase = 'arranging' | 'revealed';

type FeedbackState =
  | { kind: 'idle' }
  | { kind: 'correct'; attempts: number }
  | { kind: 'wrong'; wrongCount: number; attempts: number };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Draggable Item ───────────────────────────────────────────────────────────

const DraggableItem: React.FC<{
  id: string;
  text: string;
  index: number;
  phase: Phase;
  isCorrectPosition: boolean;
  correctIndex: number;
  collectionId?: string;
}> = ({
  id,
  text,
  index,
  phase,
  isCorrectPosition,
  correctIndex,
  collectionId,
}) => {
  const { language } = useLanguage();
  const controls = useDragControls();
  const isDone = phase === 'revealed';
  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';

  return (
    <Reorder.Item
      value={id}
      dragListener={false}
      dragControls={controls}
      onPointerDown={(e) => { if (!isDone) e.stopPropagation(); }}
      className={cn(
        'relative rounded-xl border-2 transition-colors duration-200 select-none',
        isDone
          ? isCorrectPosition
            ? 'border-emerald-300 bg-emerald-50'
            : 'border-rose-300 bg-rose-50'
          : isHistory
            ? 'border-emerald-100 bg-white shadow-sm'
            : isTurkish
              ? 'border-sky-101 bg-white shadow-sm'
              : 'border-amber-100 bg-white shadow-sm'
      )}
      style={{ touchAction: 'none' }}
      whileDrag={{ scale: 1.03, boxShadow: '0 12px 32px rgba(0,0,0,0.12)', zIndex: 50 }}
    >
      <div className="flex items-center gap-3 px-4 py-3.5">

        {/* Position number */}
        <div className={cn(
          'w-7 h-7 rounded-lg flex items-center justify-center font-display text-sm font-bold shrink-0 transition-colors',
          isDone
            ? isCorrectPosition
              ? 'bg-emerald-500 text-white'
              : 'bg-rose-500 text-white'
            : isHistory
              ? 'bg-emerald-100 text-emerald-700'
              : isTurkish
                ? 'bg-sky-100 text-sky-700'
                : 'bg-amber-100 text-amber-700'
        )}>
          {isDone
            ? isCorrectPosition ? '✓' : '✗'
            : index + 1}
        </div>

        {/* Text */}
        <p className={cn(
          'font-serif text-xs sm:text-base md:text-lg leading-snug flex-1',
          language === 'ar' && "text-sm sm:text-xl",
          isDone
            ? isCorrectPosition ? 'text-emerald-800' : 'text-rose-800'
            : 'text-wood'
        )}>
          {text}
        </p>

        {/* Wrong position badge */}
        {isDone && !isCorrectPosition && (
          <div className="shrink-0 flex items-center gap-1 text-[11px] font-bold text-rose-500 bg-rose-100 px-2 py-0.5 rounded-full">
            <ArrowDown size={10} />
            #{correctIndex + 1}
          </div>
        )}

        {/* Drag handle — only when arranging */}
        {!isDone && (
          <motion.div
            onPointerDown={(e) => { e.stopPropagation(); controls.start(e); }}
            className={cn(
              "shrink-0 p-1 rounded-lg transition-colors touch-none cursor-grab active:cursor-grabbing",
              isHistory 
                ? "text-emerald-300 hover:text-emerald-550 hover:bg-emerald-555" 
                : isTurkish 
                ? "text-sky-305 hover:text-sky-505 hover:bg-sky-50" 
                : "text-amber-300 hover:text-amber-500 hover:bg-amber-50"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GripVertical size={18} />
          </motion.div>
        )}
      </div>
    </Reorder.Item>
  );
};

// ─── Feedback Panel ───────────────────────────────────────────────────────────

const FeedbackPanel = ({
  feedback,
  onReset,
  onReveal,
  phase,
  totalItems,
  collectionId,
}: {
  feedback: FeedbackState;
  onReset: () => void;
  onReveal: () => void;
  phase: Phase;
  totalItems: number;
  collectionId?: string;
}) => {
  const { t, formatNumber, language } = useLanguage();
  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';
  return (
    <div className="shrink-0 min-h-[70px] sm:min-h-[80px]">
      <AnimatePresence mode="wait">

        {feedback.kind === 'correct' && (
          <motion.div
            key="correct"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="h-full rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-3 sm:px-5 py-2 flex items-center gap-2 sm:gap-4"
          >
            <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-500 text-white shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-wider mb-0.5">
                {t('ex.perfectOrder')}
              </p>
              <p className="font-serif text-xs sm:text-sm text-emerald-700 truncate">
                {t('ex.allEventsCorrect').replace('{total}', formatNumber(totalItems))}
                {feedback.attempts === 1 && ` ${t('ex.firstTry')}`}
                {feedback.attempts === 2 && ` ${t('ex.secondTry')}`}
                {feedback.attempts > 2 && ` ${t('ex.completedIn').replace('{attempts}', formatNumber(feedback.attempts))}`}
              </p>
            </div>
            <button
              onClick={onReset}
              className="shrink-0 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-bold hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              <RotateCcw size={14} /> {t('ex.tryAgain')}
            </button>
          </motion.div>
        )}

        {feedback.kind === 'wrong' && (
          <motion.div
            key="wrong"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="h-full rounded-2xl border-2 border-rose-300 bg-rose-50 px-3 sm:px-5 py-2 flex items-center gap-2 sm:gap-4"
          >
            <div className="p-1.5 sm:p-2 rounded-xl bg-rose-500 text-white shrink-0">
              <XCircle size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-xs sm:text-sm font-bold text-rose-800 uppercase tracking-wider mb-0.5">
                {feedback.wrongCount === 1 
                  ? t('ex.itemOutOfPlace') 
                  : t('ex.itemsOutOfPlace').replace('{count}', formatNumber(feedback.wrongCount))}
              </p>
              <p className="font-serif text-xs sm:text-sm text-rose-700 truncate">
                {t('ex.rearrangeHint')}
              </p>
            </div>
            <div className="flex gap-1.5 sm:gap-2 shrink-0">
              {phase !== 'revealed' && (
                <button
                  onClick={onReveal}
                  className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white border-2 border-rose-200 text-rose-600 text-xs sm:text-sm font-bold hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  {t('ex.showAnswer')}
                </button>
              )}
              <button
                onClick={onReset}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-rose-600 text-white text-xs sm:text-sm font-bold hover:bg-rose-700 transition-colors cursor-pointer"
              >
                <RotateCcw size={14} /> {t('ex.retry')}
              </button>
            </div>
          </motion.div>
        )}

        {feedback.kind === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "h-full rounded-2xl border-2 border-dashed bg-white/40 flex items-center justify-center gap-3 px-6",
              isHistory ? "border-emerald-100" : isTurkish ? "border-sky-101" : "border-amber-100"
            )}
          >
            <GripVertical size={18} className={cn("shrink-0", isHistory ? "text-emerald-400" : isTurkish ? "text-sky-450" : "text-amber-400")} />
            <p className={cn(
              "font-serif text-lg text-wood/50",
              language === 'ar' ? "not-italic text-xl" : "italic"
            )}>
              {t('ex.dragHint')}
            </p>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const SequencingExercise = ({ items, onComplete, collectionId = 'prophets' }: Props) => {
  const { t, formatNumber, language } = useLanguage();
  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';
  const [currentOrder, setCurrentOrder] = useState<string[]>(() =>
    shuffle(items.map((i) => i.id))
  );
  const [phase, setPhase]       = useState<Phase>('arranging');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState>({ kind: 'idle' });
  const [streak, setStreak]     = useState(0);
  const [isWrong, setIsWrong]   = useState(false);

  // Reset state when items change (e.g., navigating to a new chapter)
  React.useEffect(() => {
    setCurrentOrder(shuffle(items.map((i) => i.id)));
    setPhase('arranging');
    setAttempts(0);
    setFeedback({ kind: 'idle' });
  }, [items]);

  // Map id → item for quick lookup
  const itemMap = useMemo(
    () => Object.fromEntries(items.map((i) => [i.id, i])),
    [items]
  );

  // Correct order = items array order
  const correctOrder = items.map((i) => i.id);

  const isCorrectAtIndex = (id: string, idx: number) => correctOrder[idx] === id;

  const wrongCount = currentOrder.filter((id, idx) => !isCorrectAtIndex(id, idx)).length;

  // ── Verify ─────────────────────────────────────────────────────────────────
  const handleVerify = () => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setPhase('revealed');

    const correct = wrongCount === 0;
    if (correct) {
      setStreak((s) => s + 1);
      setFeedback({ kind: 'correct', attempts: newAttempts });
      onComplete(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: isHistory ? ['#059669', '#10B981', '#34D399'] : isTurkish ? ['#0284C7', '#0EA5E9', '#38BDF8'] : ['#D97706', '#F59E0B', '#FCD34D']
      });
    } else {
      setStreak(0);
      setFeedback({ kind: 'wrong', wrongCount, attempts: newAttempts });
      onComplete(false);
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 500);
    }
  };

  // ── Show correct answer ────────────────────────────────────────────────────
  const handleReveal = () => {
    setCurrentOrder([...correctOrder]);
    // Keep revealed phase so items show green
  };

  // ── Reset ──────────────────────────────────────────────────────────────────
  const handleReset = () => {
    setCurrentOrder(shuffle(items.map((i) => i.id)));
    setPhase('arranging');
    setFeedback({ kind: 'idle' });
  };

  const isDone = phase === 'revealed';

  return (
    <div
      className={cn(
        "h-full flex flex-col gap-3 relative overflow-hidden transition-transform duration-100",
        isWrong && "animate-shake"
      )}
      onPointerDown={(e) => e.stopPropagation()}
    >

      {/* ── PROGRESS + STREAK ── */}
      <div className={cn(
        "flex items-center gap-3 shrink-0 border-b-2 pb-3",
        isHistory ? "border-emerald-200" : isTurkish ? "border-sky-200" : "border-amber-200"
      )}>
        <div className="flex items-center gap-2">
          <div className={cn(
            "w-7 h-7 rounded-lg text-white flex items-center justify-center shrink-0",
            isHistory ? "bg-emerald-600" : isTurkish ? "bg-sky-600" : "bg-amber-600"
          )}>
            <ListOrdered size={15} />
          </div>
          <div>
            <p className={cn(
              "font-display text-sm uppercase tracking-widest leading-none",
              isHistory ? "text-emerald-700" : isTurkish ? "text-sky-750" : "text-amber-600"
            )}>
              {t('ex.sequenceChallenge')}
            </p>
            <p className={cn(
              "font-serif text-sm text-wood/40",
              language === 'ar' && "not-italic text-base"
            )}>
              {t('ex.arrangeOrder')}
            </p>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {attempts > 0 && (
            <span className="text-xs font-bold text-wood/40 tabular-nums">
              {t('ex.attempt')} {formatNumber(attempts)}
            </span>
          )}
          <AnimatePresence>
            {streak >= 2 && (
              <motion.div
                key={streak}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-full text-white text-[11px] font-black",
                  isHistory ? "bg-emerald-500" : isTurkish ? "bg-sky-500" : "bg-amber-500"
                )}
              >
                <Zap size={10} fill="white" />{streak}x
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={handleReset}
            className={cn(
              "p-1.5 rounded-lg transition-colors shrink-0",
              isHistory ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-200" : isTurkish ? "bg-sky-101 text-sky-700 hover:bg-sky-200" : "bg-amber-100 text-amber-600 hover:bg-amber-200"
            )}
            aria-label={t('nav.reset')}
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* ── DRAGGABLE LIST ── */}
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
        <Reorder.Group
          axis="y"
          values={currentOrder}
          onReorder={(newOrder) => {
            if (!isDone) setCurrentOrder(newOrder);
          }}
          className="flex flex-col gap-2 pb-1"
          style={{ pointerEvents: isDone ? 'none' : 'auto' }}
        >
          <AnimatePresence initial={false}>
            {currentOrder.map((id, index) => {
              const item = itemMap[id];
              const correctIdx = correctOrder.indexOf(id);
              return (
                <DraggableItem
                  key={id}
                  id={id}
                  text={item?.text ?? ''}
                  index={index}
                  phase={phase}
                  isCorrectPosition={isCorrectAtIndex(id, index)}
                  correctIndex={correctIdx}
                  collectionId={collectionId}
                />
              );
            })}
          </AnimatePresence>
        </Reorder.Group>
      </div>

      {/* ── VERIFY BUTTON (only when arranging) ── */}
      {!isDone && (
        <motion.button
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleVerify}
          className={cn(
            "shrink-0 w-full py-3 text-white rounded-xl font-display text-[11px] uppercase tracking-widest transition-all shadow-lg active:scale-[0.98]",
            isHistory 
              ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200" 
              : isTurkish 
              ? "bg-sky-600 hover:bg-sky-700 shadow-sky-200" 
              : "bg-amber-600 hover:bg-amber-700 shadow-amber-200"
          )}
        >
          {t('ex.verifySequence')}
        </motion.button>
      )}

      {/* ── FEEDBACK PANEL ── */}
      <FeedbackPanel
        feedback={feedback}
        onReset={handleReset}
        onReveal={handleReveal}
        phase={phase}
        totalItems={items.length}
        collectionId={collectionId}
      />

    </div>
  );
};