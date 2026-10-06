// The story text of a chapter: Word Notes and place cards in the text, poems and Qur'an verses (moved from
// StoryPage.tsx, unchanged). useStoryTextRenderer returns renderContent(text), which StoryPage calls for the
// phone and desktop layouts.
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { PageData } from '../../types';
import { VocabularyWord } from '../ui/VocabularyWord';
import { getHistoricalEntityIdFromDefinition } from '../../features/historical-entities';
import { cn } from '../../lib/utils';
import { highlightPhraseMatches, highlightTokenMatches, normalizeHighlightText } from '../../lib/highlightTextMatch';
import { VERSE_CLOSE, VERSE_MARKS, VERSE_OPEN } from '../../lib/quranVerses';
import { useLanguage } from '../../contexts/LanguageContext';
import { fallbackDefinitions as rawFallbackDefinitions, arabicAnimatedDefinitions as rawArabicAnimatedDefinitions } from '../../data/fallbackVocab';
import { PoemBlock, parsePoem } from './StoryPoem';

const normalizeArabic = (text: string) => {
  return text
    .replace(/[\u064B-\u0652]/g, "") // Remove diacritics
    .replace(/[أإآ]/g, "ا") // Normalize Alef
    .replace(/ة/g, "ه") // Normalize Teh Marbuta
    .replace(/ى/g, "ي"); // Normalize Alef Maksura
};

export const getResponsiveStoryFontStyle = (baseSize: number, isRTL: boolean, isDyslexic?: boolean) => {
  const desktopPt = baseSize * (isRTL ? 1.35 : 1.1) + (isRTL ? 1 : 0);
  const desktopPx = desktopPt * 1.3333;
  const minPx = Math.max(13, desktopPx * 0.76);
  const slopeVw = isRTL ? 0.85 : 0.65;
  const interceptPx = minPx - (375 * slopeVw / 100);

  return {
    fontSize: `clamp(${minPx.toFixed(1)}px, ${interceptPx.toFixed(1)}px + ${slopeVw.toFixed(2)}vw, ${desktopPx.toFixed(1)}px)`
  };
};

export const useStoryTextRenderer = ({
  page,
  allPages,
  currentIndex,
  showHighlights,
  fontSize,
  collectionId,
}: {
  page: PageData;
  allPages: PageData[];
  currentIndex: number;
  showHighlights: boolean;
  fontSize: number;
  collectionId: string;
}) => {
  const { language } = useLanguage();
  const highlightVocabulary = showHighlights ? page.vocabulary : undefined;
  const highlightAnimatedWords = showHighlights ? page.animatedWords : undefined;
  const highlightLanguage = language === 'ar' ? 'ar' : 'en';

  const vocabStyle = "border-b-2 border-brand-600/40 hover:border-brand-700 font-bold text-brand-900 transition-colors cursor-help";

  const animatedStyle = "text-brand-700 border-b-2 border-brand-500/50 hover:border-brand-600 transition-colors font-bold cursor-help";

  // Place and history cards show in every chapter that lists them.
  const isPlaceCard = (definition: string) => Boolean(getHistoricalEntityIdFromDefinition(definition));
  const seenHighlightedWords = useMemo(() => {
    const seen = new Set<string>();
    for (let i = 0; i < currentIndex; i++) {
      const prevPage = allPages[i];
      if (prevPage.animatedWords) {
        prevPage.animatedWords.forEach(word => seen.add(word));
      }
      if (prevPage.vocabulary) {
        // Place and history cards stay tappable in every chapter they are listed for.
        prevPage.vocabulary
          .filter(v => !getHistoricalEntityIdFromDefinition(v.definition))
          .forEach(v => seen.add(v.word));
      }
    }
    return seen;
  }, [allPages, currentIndex]);

  // Dynamic book vocabulary map built from all pages of the current book
  const bookVocabularyMap = useMemo(() => {
    const map = new Map<string, string>();
    allPages.forEach(p => {
      p.vocabulary?.forEach(v => {
        const wordClean = v.word.replace(/[.,!?;:\"'“”‘’`()]/g, '').toLowerCase().trim();
        map.set(wordClean, v.definition);
        const norm = normalizeArabic(wordClean);
        if (norm !== wordClean) {
          map.set(norm, v.definition);
        }
        // Also strip "ال" for Arabic
        if (language === 'ar') {
          const stripped = normalizeArabic(wordClean.replace(/^ال/, ''));
          if (stripped !== norm) {
            map.set(stripped, v.definition);
          }
        }
      });
    });
    return map;
  }, [allPages, language]);

  const fallbackDefinitionsMap = useMemo(() => {
    const map = new Map<string, string>();
    Object.entries(rawFallbackDefinitions).forEach(([k, v]) => {
      map.set(k.toLowerCase().trim(), v);
    });
    return map;
  }, []);

  const fallbackArabicDefinitionsMap = useMemo(() => {
    const map = new Map<string, string>();
    Object.entries(rawArabicAnimatedDefinitions).forEach(([k, v]) => {
      const kClean = k.toLowerCase().trim();
      const kNorm = normalizeArabic(kClean);
      map.set(kNorm, v);
      map.set(kClean, v);
      const stripped = normalizeArabic(kClean.replace(/^ال/, ''));
      map.set(stripped, v);
    });
    return map;
  }, []);

  const getEnglishDefinition = (text: string) => {
    const clean = text.replace(/[.,!?;:\"'“”‘’`()]/g, '').toLowerCase().trim();
    if (bookVocabularyMap.has(clean)) {
      return bookVocabularyMap.get(clean)!;
    }
    
    let singular = clean;
    if (clean.endsWith('s')) singular = clean.slice(0, -1);
    if (clean.endsWith('es')) singular = clean.slice(0, -2);
    if (clean.endsWith('ies')) singular = clean.slice(0, -3) + 'y';
    if (bookVocabularyMap.has(singular)) {
      return bookVocabularyMap.get(singular)!;
    }

    for (const [k, v] of bookVocabularyMap.entries()) {
      if (clean.startsWith(k) && clean.length <= k.length + 3) {
        return v;
      }
      if (k.startsWith(clean) && k.length <= clean.length + 3) {
        return v;
      }
    }

    if (fallbackDefinitionsMap.has(clean)) {
      return fallbackDefinitionsMap.get(clean)!;
    }
    if (fallbackDefinitionsMap.has(singular)) {
      return fallbackDefinitionsMap.get(singular)!;
    }

    for (const [k, v] of fallbackDefinitionsMap.entries()) {
      if (clean.startsWith(k) && clean.length <= k.length + 3) {
        return v;
      }
      if (k.startsWith(clean) && k.length <= clean.length + 3) {
        return v;
      }
    }
    return '';
  };

  const getArabicDefinition = (text: string) => {
    const clean = text.replace(/[.,!?;:\"'“”‘’`()]/g, '').toLowerCase().trim();
    const norm = normalizeArabic(clean);
    const stripped = normalizeArabic(clean.replace(/^ال/, ''));

    if (bookVocabularyMap.has(norm)) {
      return bookVocabularyMap.get(norm)!;
    }
    if (bookVocabularyMap.has(stripped)) {
      return bookVocabularyMap.get(stripped)!;
    }
    if (bookVocabularyMap.has(clean)) {
      return bookVocabularyMap.get(clean)!;
    }

    for (const [k, v] of bookVocabularyMap.entries()) {
      if (highlightPhraseMatches(text, k, 'ar')) {
        return v;
      }
      const kNorm = normalizeArabic(k);
      const kStripped = normalizeArabic(k.replace(/^ال/, ''));
      if ((norm.startsWith(kNorm) || norm.startsWith(kStripped)) && norm.length <= kNorm.length + 3) {
        return v;
      }
      if ((kNorm.startsWith(norm) || kStripped.startsWith(norm)) && kNorm.length <= norm.length + 3) {
        return v;
      }
    }

    if (fallbackArabicDefinitionsMap.has(norm)) {
      return fallbackArabicDefinitionsMap.get(norm)!;
    }
    if (fallbackArabicDefinitionsMap.has(stripped)) {
      return fallbackArabicDefinitionsMap.get(stripped)!;
    }
    if (fallbackArabicDefinitionsMap.has(clean)) {
      return fallbackArabicDefinitionsMap.get(clean)!;
    }

    for (const [k, v] of fallbackArabicDefinitionsMap.entries()) {
      if (highlightPhraseMatches(text, k, 'ar')) {
        return v;
      }
      const kNorm = normalizeArabic(k);
      if (norm.startsWith(kNorm) && norm.length <= kNorm.length + 3) {
        return v;
      }
      if (kNorm.startsWith(norm) && kNorm.length <= norm.length + 3) {
        return v;
      }
    }
    return '';
  };

  const renderContent = (content: string) => {
    const parts = content.split(/(\[POEM_GRID\][\s\S]*?\[\/POEM_GRID\]|\[POEM(?:\s+compact)?\][\s\S]*?\[\/POEM\])/g);
    const highlightWordCount = (value: string) => {
      const normalized = normalizeHighlightText(value, highlightLanguage);
      return normalized ? normalized.split(' ').length : 0;
    };
    const maxPhraseWords = Math.max(
      1,
      ...(highlightVocabulary ?? []).map(v => highlightWordCount(v.word)),
      ...(highlightAnimatedWords ?? []).map(highlightWordCount),
    );
    const hasAlreadyBeenHighlighted = (requested: string, seen: Set<string>) => {
      const normalizedRequested = normalizeHighlightText(requested, highlightLanguage);
      return [...seen].some(previous => (
        normalizeHighlightText(previous, highlightLanguage) === normalizedRequested
      ));
    };
    
    let globalWordCounter = 0;
    const seenOnCurrentPage = new Set<string>();
    // Qur'an verses are printed in italics; a verse can run over several paragraphs.
    let inVerse = false;

    const renderInlineHighlights = (text: string, keyPrefix: string): React.ReactNode[] => {
      const words = text.split(/(\s+)/);
      const rendered: React.ReactNode[] = [];
      let skipCount = 0;

      for (let wIdx = 0; wIdx < words.length; wIdx += 1) {
        if (skipCount > 0) {
          skipCount -= 1;
          continue;
        }

        const word = words[wIdx];
        if (/\s+/.test(word)) {
          rendered.push(word);
          continue;
        }

        let foundPhrase: { vocab?: { word: string; definition: string }; animatedWord?: string; endIdx: number; text: string } | null = null;
        // A hyphenated word such as "Al-Andalus" or "middle-aged" is one surface
        // token but two normalized words, so it is matched as a phrase too.
        const potentialPhrases: { text: string; endIdx: number }[] = highlightWordCount(word) > 1
          ? [{ text: word, endIdx: wIdx }]
          : [];
        let currentPotential = word;
        let wordsInPotential = 1;

        for (let lookAhead = 1; wIdx + lookAhead < words.length && wordsInPotential < maxPhraseWords; lookAhead += 1) {
          const nextPart = words[wIdx + lookAhead];
          currentPotential += nextPart;
          if (!/\s+/.test(nextPart)) {
            wordsInPotential += 1;
            potentialPhrases.push({ text: currentPotential, endIdx: wIdx + lookAhead });
          }
        }

        for (let i = potentialPhrases.length - 1; i >= 0; i -= 1) {
          const candidate = potentialPhrases[i];
          const vocab = highlightVocabulary?.find(v => (
            highlightWordCount(v.word) > 1
            && (isPlaceCard(v.definition) || !hasAlreadyBeenHighlighted(v.word, seenHighlightedWords))
            && !hasAlreadyBeenHighlighted(v.word, seenOnCurrentPage)
            && highlightPhraseMatches(candidate.text, v.word, highlightLanguage)
          ));
          const animatedWord = !vocab ? highlightAnimatedWords?.find(aw => (
            highlightWordCount(aw) > 1
            && !hasAlreadyBeenHighlighted(aw, seenHighlightedWords)
            && !hasAlreadyBeenHighlighted(aw, seenOnCurrentPage)
            && highlightPhraseMatches(candidate.text, aw, highlightLanguage)
          )) : undefined;

          if (vocab || animatedWord) {
            foundPhrase = { vocab, animatedWord, endIdx: candidate.endIdx, text: candidate.text };
            break;
          }
        }

        if (foundPhrase) {
          const canonicalWord = foundPhrase.vocab?.word ?? foundPhrase.animatedWord ?? foundPhrase.text;
          seenOnCurrentPage.add(canonicalWord);
          skipCount = foundPhrase.endIdx - wIdx;
          const element = foundPhrase.vocab ? (
            <VocabularyWord
              word={foundPhrase.text}
              definition={foundPhrase.vocab.definition}
              customStyle={vocabStyle}
              collectionId={collectionId}
            />
          ) : (
            <VocabularyWord
              word={foundPhrase.text}
              definition={language === 'ar' ? getArabicDefinition(canonicalWord) : getEnglishDefinition(canonicalWord)}
              customStyle={animatedStyle}
              collectionId={collectionId}
            />
          );
          rendered.push(<span key={`${keyPrefix}-${wIdx}`}>{element}</span>);
          continue;
        }

        const vocab = highlightVocabulary?.find(v => (
          highlightWordCount(v.word) === 1
          && (isPlaceCard(v.definition) || !hasAlreadyBeenHighlighted(v.word, seenHighlightedWords))
          && !hasAlreadyBeenHighlighted(v.word, seenOnCurrentPage)
          && highlightTokenMatches(word, v.word, highlightLanguage)
        ));
        const animatedWord = !vocab ? highlightAnimatedWords?.find(aw => (
          highlightWordCount(aw) === 1
          && !hasAlreadyBeenHighlighted(aw, seenHighlightedWords)
          && !hasAlreadyBeenHighlighted(aw, seenOnCurrentPage)
          && highlightTokenMatches(word, aw, highlightLanguage)
        )) : undefined;

        const canonicalWord = vocab?.word ?? animatedWord;
        if (canonicalWord) seenOnCurrentPage.add(canonicalWord);

        const element = vocab ? (
          <VocabularyWord
            word={word}
            definition={vocab.definition}
            customStyle={vocabStyle}
            collectionId={collectionId}
          />
        ) : animatedWord ? (
          <VocabularyWord
            word={word}
            definition={language === 'ar' ? getArabicDefinition(animatedWord) : getEnglishDefinition(animatedWord)}
            customStyle={animatedStyle}
            collectionId={collectionId}
          />
        ) : word;

        rendered.push(<span key={`${keyPrefix}-${wIdx}`}>{element}</span>);
      }

      return rendered;
    };

    return parts.map((markedPart, partIdx) => {
      // Poems are never verses, so their marks are dropped.
      const part = /^\[POEM/.test(markedPart) ? markedPart.replace(VERSE_MARKS, '') : markedPart;
      if (part.startsWith('[POEM_GRID]') && part.endsWith('[/POEM_GRID]')) {
        const poemParts = [...part.matchAll(/\[POEM(?:\s+compact)?\][\s\S]*?\[\/POEM\]/gi)].map(match => match[0]);
        if (poemParts.length > 0) {
          return (
            <div key={`poem-grid-${partIdx}`} className="my-6 clear-both grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {poemParts.map((poemPart, poemIndex) => {
                const poem = parsePoem(poemPart);
                if (!poem.translation) return null;
                return (
                  <PoemBlock
                    key={`poem-grid-${partIdx}-${poemIndex}`}
                    english={poem.translation}
                    turkish={poem.original}
                    fontSize={fontSize}
                    compact
                    inGrid
                    renderTranslation={(line, lineIndex) => renderInlineHighlights(line, `poem-grid-${partIdx}-${poemIndex}-${lineIndex}`)}
                  />
                );
              })}
            </div>
          );
        }
      }

      if (/^\[POEM(?:\s+compact)?\]/i.test(part) && part.endsWith('[/POEM]')) {
        const poem = parsePoem(part);
        if (poem.translation) {
          const compact = /^\[POEM\s+compact\]/i.test(part);
          return (
            <PoemBlock 
              key={`poem-${partIdx}`} 
              english={poem.translation} 
              turkish={poem.original} 
              fontSize={fontSize}
              compact={compact}
              renderTranslation={(line, lineIndex) => renderInlineHighlights(line, `poem-${partIdx}-${lineIndex}`)}
            />
          );
        }
      }

      // Normal text part
      const paragraphs = part
        .split('\n')
        .filter(line => !/^\s*\/\/\s*c\d+[ab]?\s*$/.test(line))
        .join('\n')
        .split('\n\n')
        .filter(p => p.trim().length > 0);
      return paragraphs.map((paragraph, pIdx) => {
        const verseWords = new Set<number>();
        const words = paragraph.split(/(\s+)/).map((token, tIdx) => {
          if (token.includes(VERSE_OPEN)) inVerse = true;
          if (inVerse && !/^\s+$/.test(token)) verseWords.add(tIdx);
          if (token.includes(VERSE_CLOSE)) inVerse = false;
          return token.replace(VERSE_MARKS, '');
        });

        const renderedElements: React.ReactNode[] = [];
        let skipCount = 0;

        for (let wIdx = 0; wIdx < words.length; wIdx++) {
          if (skipCount > 0) {
            skipCount--;
            continue;
          }

          const word = words[wIdx];
          if (/\s+/.test(word)) {
            renderedElements.push(word);
            continue;
          }

          let foundPhrase = null;
          // Hyphenated words ("Al-Andalus", "middle-aged") match as phrases too.
          const potentialPhrases: { text: string; endIdx: number }[] = highlightWordCount(word) > 1
            ? [{ text: word, endIdx: wIdx }]
            : [];
          let currentPotential = word;
          let wordsInPotential = 1;
          
          // Look ahead as far as the longest configured vocabulary/animated phrase.
          for (let lookAhead = 1; wIdx + lookAhead < words.length && wordsInPotential < maxPhraseWords; lookAhead++) {
            const nextPart = words[wIdx + lookAhead];
            currentPotential += nextPart;
            if (!/\s+/.test(nextPart)) {
              wordsInPotential += 1;
              potentialPhrases.push({ text: currentPotential, endIdx: wIdx + lookAhead });
            }
          }

          // Check longest phrases first.
          for (let i = potentialPhrases.length - 1; i >= 0; i--) {
            const p = potentialPhrases[i];
            const vocab = highlightVocabulary?.find(v => (
              highlightWordCount(v.word) > 1
              && (isPlaceCard(v.definition) || !hasAlreadyBeenHighlighted(v.word, seenHighlightedWords))
              && !hasAlreadyBeenHighlighted(v.word, seenOnCurrentPage)
              && highlightPhraseMatches(p.text, v.word, highlightLanguage)
            ));

            const animatedWord = !vocab ? highlightAnimatedWords?.find(aw => (
              highlightWordCount(aw) > 1
              && !hasAlreadyBeenHighlighted(aw, seenHighlightedWords)
              && !hasAlreadyBeenHighlighted(aw, seenOnCurrentPage)
              && highlightPhraseMatches(p.text, aw, highlightLanguage)
            )) : undefined;

            if (vocab || animatedWord) {
              foundPhrase = { vocab, animatedWord, endIdx: p.endIdx, text: p.text };
              break;
            }
          }

          const currentGlobalIdx = globalWordCounter;
          void currentGlobalIdx;

          if (foundPhrase) {
            const wordsInPhrase = foundPhrase.text.split(/\s+/).filter(w => w.length > 0).length;
            const canonicalWord = foundPhrase.vocab?.word ?? foundPhrase.animatedWord ?? foundPhrase.text;
            seenOnCurrentPage.add(canonicalWord);
            
            globalWordCounter += wordsInPhrase;
            skipCount = foundPhrase.endIdx - wIdx;

            let element: React.ReactNode;
            if (foundPhrase.vocab) {
              element = (
                <VocabularyWord 
                  word={foundPhrase.text} 
                  definition={foundPhrase.vocab.definition} 
                  customStyle={vocabStyle}
                  collectionId={collectionId}
                />
              );
            } else {
              const definitionSource = foundPhrase.animatedWord ?? foundPhrase.text;
              const definition = language === 'ar' 
                ? getArabicDefinition(definitionSource)
                : getEnglishDefinition(definitionSource);
              element = (
                <VocabularyWord 
                  word={foundPhrase.text} 
                  definition={definition} 
                  customStyle={animatedStyle}
                  collectionId={collectionId}
                />
              );
            }

            renderedElements.push(
              <motion.span
                key={`${partIdx}-${pIdx}-${wIdx}`}
                className={cn('inline-block rounded px-0.5', verseWords.has(wIdx) && 'quran-verse italic')}
              >
                {element}
              </motion.span>
            );
          } else {
            const vocab = highlightVocabulary?.find(v => (
              highlightWordCount(v.word) === 1
              && (isPlaceCard(v.definition) || !hasAlreadyBeenHighlighted(v.word, seenHighlightedWords))
              && !hasAlreadyBeenHighlighted(v.word, seenOnCurrentPage)
              && highlightTokenMatches(word, v.word, highlightLanguage)
            ));
            
            const animatedWord = !vocab ? highlightAnimatedWords?.find(aw => (
              highlightWordCount(aw) === 1
              && !hasAlreadyBeenHighlighted(aw, seenHighlightedWords)
              && !hasAlreadyBeenHighlighted(aw, seenOnCurrentPage)
              && highlightTokenMatches(word, aw, highlightLanguage)
            )) : undefined;

            const canonicalWord = vocab?.word ?? animatedWord;
            if (canonicalWord) {
              seenOnCurrentPage.add(canonicalWord);
            }

            globalWordCounter++;

            let element: React.ReactNode = word;
            if (vocab) {
              element = (
                <VocabularyWord 
                  word={word} 
                  definition={vocab.definition} 
                  customStyle={vocabStyle}
                  collectionId={collectionId}
                />
              );
            } else if (animatedWord) {
              const definition = language === 'ar' 
                ? getArabicDefinition(animatedWord)
                : getEnglishDefinition(animatedWord);
              element = (
                <VocabularyWord 
                  word={word} 
                  definition={definition} 
                  customStyle={animatedStyle}
                  collectionId={collectionId}
                />
              );
            }

            renderedElements.push(
              <motion.span
                key={`${partIdx}-${pIdx}-${wIdx}`}
                className={cn('inline-block rounded px-0.5', verseWords.has(wIdx) && 'quran-verse italic')}
              >
                {element}
              </motion.span>
            );
          }
        }

        return (
          <p key={`${partIdx}-${pIdx}`} className="mb-4">
            {renderedElements}
          </p>
        );
      });
    });
  };

  return renderContent;
};
