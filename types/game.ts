export interface Question {
  id: number;
  question: string;
  answer: string;
  hint: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface GameState {
  currentQuestion: Question | null;
  currentQuestionIndex: number;
  questions: Question[];
  userAnswer: string[];
  score: number;
  hintsUsed: number;
  questionsSkipped: number;
  gameStatus: 'playing' | 'completed' | 'idle';
  showHint: boolean;
  isLoading: boolean;
}

export interface ScoreData {
  score: number;
  totalQuestions: number;
  hintsUsed: number;
  questionsSkipped: number;
  completedAt: string;
  performanceLabel: string;
}

export interface GameStats {
  gamesPlayed: number;
  bestScore: number;
  averageScore: number;
  totalHintsUsed: number;
  totalQuestionsSkipped: number;
}