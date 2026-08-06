import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StoryProgressStats {
  wordsClicked: Set<string>;
  exercisesCompleted: Set<string>;
  finalScore: number | null;
}

interface StoryProgressContextType {
  stats: StoryProgressStats;
  trackWordClick: (word: string) => void;
  trackExerciseComplete: (id: string) => void;
  setFinalScore: (score: number) => void;
  resetStats: () => void;
}

const StoryProgressContext = createContext<StoryProgressContextType | undefined>(undefined);

export const StoryProgressProvider = ({ children }: { children: ReactNode }) => {
  const [stats, setStats] = useState<StoryProgressStats>({
    wordsClicked: new Set<string>(),
    exercisesCompleted: new Set<string>(),
    finalScore: null,
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

  const setFinalScore = (score: number) => {
    setStats(prev => ({ ...prev, finalScore: score }));
  };

  const resetStats = () => {
    setStats({
      wordsClicked: new Set<string>(),
      exercisesCompleted: new Set<string>(),
      finalScore: null,
    });
  };

  return (
    <StoryProgressContext.Provider value={{ stats, trackWordClick, trackExerciseComplete, setFinalScore, resetStats }}>
      {children}
    </StoryProgressContext.Provider>
  );
};

export const useStoryProgress = () => {
  const context = useContext(StoryProgressContext);
  if (context === undefined) {
    throw new Error('useStoryProgress must be used within a StoryProgressProvider');
  }
  return context;
};
