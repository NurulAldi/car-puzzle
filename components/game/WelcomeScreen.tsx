'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useGameStore, useStatsStore } from '@/stores/gameStore';
import { Play, Trophy, Target, Clock } from 'lucide-react';

export function WelcomeScreen() {
  const startNewGame = useGameStore((state) => state.startNewGame);
  const { stats } = useStatsStore();

  const handleStartGame = () => {
    startNewGame();
  };

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <Target className="h-10 w-10 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-3xl mb-2">Car Trivia Puzzle Game</CardTitle>
            <p className="text-muted-foreground text-lg">Test your automotive knowledge with challenging trivia questions!</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <Button onClick={handleStartGame} size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 h-6 w-6" />
              Start New Game
            </Button>
          </div>

          {/* Game Features */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <Target className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">10 Questions</h3>
              <p className="text-sm text-muted-foreground">Random questions from our extensive database</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">No Time Limit</h3>
              <p className="text-sm text-muted-foreground">Take your time and think carefully</p>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Score & Share</h3>
              <p className="text-sm text-muted-foreground">Get your performance rating and share results</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Card */}
      {stats.gamesPlayed > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Trophy className="h-5 w-5" />
              Your Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{stats.gamesPlayed}</div>
                <div className="text-sm text-muted-foreground">Games Played</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{stats.bestScore}/10</div>
                <div className="text-sm text-muted-foreground">Best Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{Math.round(stats.averageScore * 10) / 10}/10</div>
                <div className="text-sm text-muted-foreground">Average Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{Math.round((stats.averageScore / 10) * 100)}%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Play</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-medium">Answer Questions</h4>
                <p className="text-sm text-muted-foreground">Type your answers in the letter boxes provided. Each box represents one letter.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-medium">Use Hints Wisely</h4>
                <p className="text-sm text-muted-foreground">Get one hint per question when you're stuck. Hints provide additional clues about the answer.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-medium">Skip if Needed</h4>
                <p className="text-sm text-muted-foreground">Can't figure out an answer? Skip it without penalty and move to the next question.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-medium">Get Your Score</h4>
                <p className="text-sm text-muted-foreground">After 10 questions, see your final score, performance rating, and download/share your results!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}