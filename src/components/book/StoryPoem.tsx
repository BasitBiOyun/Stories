// Poems in the story text ([POEM] / [POEM_GRID], Yunus Emre): the block and the parser (moved from StoryPage.tsx).
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight } from '../ui/icons';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';

export const PoemBlock = ({ 
  english, 
  turkish, 
  fontSize,
  renderTranslation,
  compact = false,
  inGrid = false,
}: { 
  english: string; 
  turkish?: string; 
  fontSize: number;
  renderTranslation?: (line: string, lineIndex: number) => React.ReactNode;
  compact?: boolean;
  inGrid?: boolean;
}) => {
  const { isRTL } = useLanguage();
  const [showOriginal, setShowOriginal] = useState(false);
  const hasOriginal = Boolean(turkish?.trim());

  const poemFontSize = compact
    ? `clamp(0.82rem, 0.74rem + 0.42vw, ${(fontSize * 1.08 * 1.3333).toFixed(1)}px)`
    : `clamp(0.95rem, 0.8rem + 0.6vw, ${(fontSize * 1.25 * 1.3333).toFixed(1)}px)`;

  const renderPoemLines = (
    text: string,
    useHighlights: boolean,
  ) => text.split('\n').map((line, idx) => (
    <div key={idx} className="my-1">
      {useHighlights && renderTranslation ? renderTranslation(line.trim(), idx) : line.trim()}
    </div>
  ));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => hasOriginal && setShowOriginal(current => !current)}
      className={cn(
        "w-auto p-4 md:py-4 rounded-2xl bg-parchment/45 border border-sky-300/60 border-l-4 border-r-4 border-sky-400 shadow-md relative overflow-hidden flex flex-col items-center justify-center text-center page-texture transition-all hover:shadow-lg hover:bg-parchment/55 hover:border-sky-500 select-none",
        inGrid ? "my-0 h-full min-h-[180px]" : "my-6 clear-both", // clear-both: in story mode a poem goes under the chapter picture, full width
        hasOriginal ? "md:ps-10 md:pe-16 cursor-pointer" : "md:px-10"
      )}
    >
      <div className="grid w-full place-items-center">
        <motion.div
          aria-hidden={showOriginal}
          animate={{ opacity: showOriginal ? 0 : 1, scale: showOriginal ? 0.985 : 1 }}
          transition={{ duration: 0.15 }}
          dir={isRTL ? 'rtl' : 'ltr'}
          lang={isRTL ? 'ar' : 'en'}
          className={cn(
            "col-start-1 row-start-1 py-3 select-text selection:bg-gold/20 leading-relaxed font-semibold italic",
            showOriginal && "pointer-events-none"
          )}
          style={{
            fontSize: poemFontSize,
            fontFamily: isRTL ? "'Arakom', sans-serif" : "'Poppins', sans-serif",
          }}
        >
          {renderPoemLines(english, true)}
        </motion.div>

        {hasOriginal && (
          <motion.div
            aria-hidden={!showOriginal}
            animate={{ opacity: showOriginal ? 1 : 0, scale: showOriginal ? 1 : 0.985 }}
            transition={{ duration: 0.15 }}
            dir="ltr"
            lang="tr"
            className={cn(
              "col-start-1 row-start-1 py-3 select-text selection:bg-gold/20 leading-relaxed font-semibold italic",
              !showOriginal && "pointer-events-none"
            )}
            style={{
              fontSize: poemFontSize,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {renderPoemLines(turkish!, false)}
          </motion.div>
        )}
      </div>

      {hasOriginal && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setShowOriginal(current => !current);
          }}
          aria-label={showOriginal ? 'Show translation' : 'Show original Turkish'}
          className="absolute end-4 md:end-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-600 transition-colors shadow-sm border border-sky-100 flex items-center justify-center"
        >
          <ArrowLeftRight size={16} />
        </button>
      )}
    </motion.div>
  );
};

const normalizePoemLabel = (line: string) =>
  line
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .trim()
    .toLowerCase();

const cleanPoemText = (lines: string[]) => {
  const text = lines
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !/^\/\/\s*c\d+[ab]?$/i.test(line))
    .join('\n')
    .trim();

  return text
    .replace(/^[“"«]\s*/, '')
    .replace(/\s*[”"»](?=\s*[.!?،؛]?\s*$)/, '')
    .trim();
};

export const parsePoem = (part: string) => {
  const body = part
    .replace(/^\[POEM(?:\s+compact)?\]\s*/i, '')
    .replace(/\s*\[\/POEM\]$/i, '')
    .trim();
  const lines = body.split('\n');
  const translationLabelIndex = lines.findIndex((line) => {
    const label = normalizePoemLabel(line);
    return label === 'english:' || label === 'arabic:' || label === 'العربية:';
  });
  const turkishLabelIndex = lines.findIndex((line) => {
    const label = normalizePoemLabel(line);
    return label === 'turkish:' || label === 'التركية:';
  });

  if (turkishLabelIndex >= 0) {
    const translationStart = translationLabelIndex >= 0 ? translationLabelIndex + 1 : 0;
    return {
      translation: cleanPoemText(lines.slice(translationStart, turkishLabelIndex)),
      original: cleanPoemText(lines.slice(turkishLabelIndex + 1)),
    };
  }

  const translationStart = translationLabelIndex >= 0 ? translationLabelIndex + 1 : 0;
  return {
    translation: cleanPoemText(lines.slice(translationStart)),
    original: undefined,
  };
};
