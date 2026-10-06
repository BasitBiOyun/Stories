import React, { createContext, useContext, useRef, useState, ReactNode } from 'react';

interface FinalChallengeMissedQuestion {
  id: string;
  title: string;
  question: string;
}

interface FinalChallengeDetails {
  firstAttemptAccuracy: number;
  masteryAccuracy: number;
  correctedAnswers: number;
  missedQuestionCount: number;
  missedQuestions: FinalChallengeMissedQuestion[];
  reflectionCompleted: number;
  scoredQuestionCount: number;
}

interface StoryProgressStats {
  wordsClicked: Set<string>;
  exercisesCompleted: Set<string>;
  chaptersVisited: Set<number>;
  audioChaptersPlayed: Set<number>;
  finalScore: number | null;
  finalChallengeDetails: FinalChallengeDetails | null;
}

interface StoryProgressContextType {
  stats: StoryProgressStats;
  trackWordClick: (word: string) => void;
  trackExerciseComplete: (id: string) => void;
  trackChapterVisit: (id: number) => void;
  trackAudioChapter: (id: number) => void;
  setFinalScore: (score: number) => void;
  setFinalChallengeDetails: (details: FinalChallengeDetails) => void;
  resetStats: () => void;
  /** Restores stored progress for the open book, so completed exercises stay completed across pages and sessions. */
  hydrateStats: (saved: { exercisesCompleted: Iterable<string>; chaptersVisited: Iterable<number> }) => void;
}

const StoryProgressContext = createContext<StoryProgressContextType | undefined>(undefined);
type StoryProgressActions = Omit<StoryProgressContextType, 'stats'>;
/** The same actions without the stats: a component that only records progress (a word note, the audio bar) does
 * not re-render each time the stats change. */
const StoryProgressActionsContext = createContext<StoryProgressActions | undefined>(undefined);

export const StoryProgressProvider = ({ children }: { children: ReactNode }) => {
  const [stats, setStats] = useState<StoryProgressStats>({
    wordsClicked: new Set<string>(),
    exercisesCompleted: new Set<string>(),
    chaptersVisited: new Set<number>(),
    audioChaptersPlayed: new Set<number>(),
    finalScore: null,
    finalChallengeDetails: null,
  });

  const trackWordClick = (word: string) => {
    setStats(prev => {
      const next = new Set(prev.wordsClicked);
      next.add(word.toLowerCase().trim());
      return { ...prev, wordsClicked: next };
    });
  };

  const trackExerciseComplete = (id: string) => {
    setStats(prev => {
      const next = new Set(prev.exercisesCompleted);
      next.add(id);
      return { ...prev, exercisesCompleted: next };
    });
  };

  const trackChapterVisit = (id: number) => {
    setStats(prev => {
      if (prev.chaptersVisited.has(id)) return prev; // no change: nothing re-renders
      const next = new Set(prev.chaptersVisited);
      next.add(id);
      return { ...prev, chaptersVisited: next };
    });
  };

  const trackAudioChapter = (id: number) => {
    setStats(prev => {
      if (prev.audioChaptersPlayed.has(id)) return prev;
      const next = new Set(prev.audioChaptersPlayed);
      next.add(id);
      return { ...prev, audioChaptersPlayed: next };
    });
  };

  const setFinalScore = (score: number) => {
    setStats(prev => ({ ...prev, finalScore: score }));
  };

  const setFinalChallengeDetails = (details: FinalChallengeDetails) => {
    setStats(prev => ({ ...prev, finalChallengeDetails: details }));
  };

  const resetStats = () => {
    setStats({
      wordsClicked: new Set<string>(),
      exercisesCompleted: new Set<string>(),
      chaptersVisited: new Set<number>(),
      audioChaptersPlayed: new Set<number>(),
      finalScore: null,
      finalChallengeDetails: null,
    });
  };

  const hydrateStats = (saved: { exercisesCompleted: Iterable<string>; chaptersVisited: Iterable<number> }) => {
    setStats(prev => ({
      ...prev,
      exercisesCompleted: new Set([...prev.exercisesCompleted, ...saved.exercisesCompleted]),
      chaptersVisited: new Set([...prev.chaptersVisited, ...saved.chaptersVisited]),
    }));
  };

  // the actions only call setStats, so the first render's functions stay valid
  const actionsRef = useRef<StoryProgressActions | null>(null);
  actionsRef.current ??= { trackWordClick, trackExerciseComplete, trackChapterVisit, trackAudioChapter, setFinalScore, setFinalChallengeDetails, resetStats, hydrateStats };

  return (
    <StoryProgressActionsContext.Provider value={actionsRef.current}>
      <StoryProgressContext.Provider value={{ stats, ...actionsRef.current }}>
        {children}
      </StoryProgressContext.Provider>
    </StoryProgressActionsContext.Provider>
  );
};

export const useStoryProgress = () => {
  const context = useContext(StoryProgressContext);
  if (context === undefined) {
    throw new Error('useStoryProgress must be used within a StoryProgressProvider');
  }
  return context;
};

export const useStoryProgressActions = () => {
  const context = useContext(StoryProgressActionsContext);
  if (context === undefined) {
    throw new Error('useStoryProgressActions must be used within a StoryProgressProvider');
  }
  return context;
};
