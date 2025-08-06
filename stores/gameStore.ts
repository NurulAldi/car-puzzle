import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Question, GameState, ScoreData, GameStats } from '@/types/game';
import questionsData from '@/data/questions.json';

interface GameStore extends GameState {
  // Game actions
  startNewGame: () => void;
  loadQuestion: (index: number) => void;
  updateAnswer: (answer: string[]) => void;
  submitAnswer: () => void;
  skipQuestion: () => void;
  useHint: () => void;
  resetGame: () => void;
  
  // Utility functions
  getRandomQuestions: (count: number) => Question[];
  calculateScore: () => ScoreData;
  getPerformanceLabel: (score: number, total: number, hintsUsed: number) => string;
}

interface StatsStore {
  stats: GameStats;
  scoreHistory: ScoreData[];
  
  // Stats actions
  updateStats: (scoreData: ScoreData) => void;
  resetStats: () => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      // Initial state
      currentQuestion: null,
      currentQuestionIndex: 0,
      questions: [],
      userAnswer: [],
      score: 0,
      hintsUsed: 0,
      questionsSkipped: 0,
      gameStatus: 'idle',
      showHint: false,
      isLoading: false,

      // Actions
      startNewGame: () => {
        const questions = get().getRandomQuestions(10);
        set({
          questions,
          currentQuestionIndex: 0,
          currentQuestion: questions[0],
          userAnswer: new Array(questions[0].answer.replace(/\s/g, '').length).fill(''),
          score: 0,
          hintsUsed: 0,
          questionsSkipped: 0,
          gameStatus: 'playing',
          showHint: false,
          isLoading: false,
        });
      },

      loadQuestion: (index: number) => {
        const { questions } = get();
        if (index < questions.length) {
          const question = questions[index];
          set({
            currentQuestionIndex: index,
            currentQuestion: question,
            userAnswer: new Array(question.answer.replace(/\s/g, '').length).fill(''),
            showHint: false,
          });
        } else {
          set({ gameStatus: 'completed' });
        }
      },

      updateAnswer: (answer: string[]) => {
        set({ userAnswer: answer });
      },

      submitAnswer: () => {
        const { userAnswer, currentQuestion, score, currentQuestionIndex } = get();
        if (!currentQuestion) return;

        const userAnswerString = userAnswer.join('').toUpperCase();
        const correctAnswer = currentQuestion.answer.replace(/\s/g, '').toUpperCase();
        
        let newScore = score;
        if (userAnswerString === correctAnswer) {
          newScore = score + 1;
        }

        set({ score: newScore });

        // Move to next question or complete game
        setTimeout(() => {
          if (currentQuestionIndex < 9) {
            get().loadQuestion(currentQuestionIndex + 1);
          } else {
            set({ gameStatus: 'completed' });
          }
        }, 1000);
      },

      skipQuestion: () => {
        const { currentQuestionIndex, questionsSkipped } = get();
        set({ questionsSkipped: questionsSkipped + 1 });

        setTimeout(() => {
          if (currentQuestionIndex < 9) {
            get().loadQuestion(currentQuestionIndex + 1);
          } else {
            set({ gameStatus: 'completed' });
          }
        }, 500);
      },

      useHint: () => {
        const { hintsUsed } = get();
        set({ 
          showHint: true, 
          hintsUsed: hintsUsed + 1 
        });
      },

      resetGame: () => {
        set({
          currentQuestion: null,
          currentQuestionIndex: 0,
          questions: [],
          userAnswer: [],
          score: 0,
          hintsUsed: 0,
          questionsSkipped: 0,
          gameStatus: 'idle',
          showHint: false,
          isLoading: false,
        });
      },

      // Utility functions
      getRandomQuestions: (count: number) => {
        const questions = [...questionsData] as Question[];
        const shuffled = questions.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      },

      calculateScore: () => {
        const { score, hintsUsed, questionsSkipped } = get();
        const performanceLabel = get().getPerformanceLabel(score, 10, hintsUsed);
        
        return {
          score,
          totalQuestions: 10,
          hintsUsed,
          questionsSkipped,
          completedAt: new Date().toISOString(),
          performanceLabel,
        };
      },

      getPerformanceLabel: (score: number, total: number, hintsUsed: number) => {
        const percentage = (score / total) * 100;
        
        if (percentage === 100 && hintsUsed === 0) {
          return "Perfect Car Genius 🏆";
        } else if (percentage >= 90) {
          return "Certified Car Freak 🔥";
        } else if (percentage >= 80) {
          return "Speed Demon 🏎️";
        } else if (percentage >= 70) {
          return "Car Enthusiast 🚗";
        } else if (percentage >= 60) {
          return "Weekend Racer 🏁";
        } else if (percentage >= 50) {
          return "Casual Driver 🚙";
        } else {
          return "Rookie Driver 🚗";
        }
      },
    }),
    {
      name: 'car-trivia-game',
      partialize: (state) => ({
        gameStatus: state.gameStatus,
        score: state.score,
      }),
    }
  )
);

export const useStatsStore = create<StatsStore>()(
  persist(
    (set, get) => ({
      stats: {
        gamesPlayed: 0,
        bestScore: 0,
        averageScore: 0,
        totalHintsUsed: 0,
        totalQuestionsSkipped: 0,
      },
      scoreHistory: [],

      updateStats: (scoreData: ScoreData) => {
        const { stats, scoreHistory } = get();
        const newHistory = [scoreData, ...scoreHistory].slice(0, 50); // Keep last 50 games
        
        const newStats: GameStats = {
          gamesPlayed: stats.gamesPlayed + 1,
          bestScore: Math.max(stats.bestScore, scoreData.score),
          averageScore: newHistory.reduce((sum, score) => sum + score.score, 0) / newHistory.length,
          totalHintsUsed: stats.totalHintsUsed + scoreData.hintsUsed,
          totalQuestionsSkipped: stats.totalQuestionsSkipped + scoreData.questionsSkipped,
        };

        set({
          stats: newStats,
          scoreHistory: newHistory,
        });
      },

      resetStats: () => {
        set({
          stats: {
            gamesPlayed: 0,
            bestScore: 0,
            averageScore: 0,
            totalHintsUsed: 0,
            totalQuestionsSkipped: 0,
          },
          scoreHistory: [],
        });
      },
    }),
    {
      name: 'car-trivia-stats',
    }
  )
);