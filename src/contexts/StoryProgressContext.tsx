import React, { createContext, useContext, useState, ReactNode } from 'react';

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
}

const StoryProgressContext = createContext<StoryProgressContextType | undefined>(undefined);

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
      const next = new Set(prev.chaptersVisited);
      next.add(id);
      return { ...prev, chaptersVisited: next };
    });
  };

  const trackAudioChapter = (id: number) => {
    setStats(prev => {
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

  return (
    <StoryProgressContext.Provider value={{ stats, trackWordClick, trackExerciseComplete, trackChapterVisit, trackAudioChapter, setFinalScore, setFinalChallengeDetails, resetStats }}>
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
