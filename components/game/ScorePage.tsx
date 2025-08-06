'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useGameStore } from '@/stores/gameStore';
import { downloadScreenshot, shareScore } from '@/utils/screenshot';
import { Trophy, Download, Share2, RotateCcw, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScorePage() {
  const { score, hintsUsed, questionsSkipped, calculateScore, resetGame } = useGameStore();
  const [scoreData, setScoreData] = useState(calculateScore());
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const data = calculateScore();
    setScoreData(data);
  }, []);

  const handleDownloadScreenshot = async () => {
    setIsDownloading(true);
    const success = await downloadScreenshot('score-display', 'car-trivia-score');
    if (!success) {
      alert('Failed to download screenshot. Please try again.');
    }
    setIsDownloading(false);
  };

  const handleShare = () => {
    shareScore(scoreData);
  };

  const handlePlayAgain = () => {
    useGameStore.getState().startNewGame();
  };

  const handleGoHome = () => {
    resetGame();
  };

  const getScoreColor = (score: number) => {
    if (score >= 9) return 'text-green-600';
    if (score >= 7) return 'text-blue-600';
    if (score >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    if (score === 10) return "Perfect game! You're a true car expert! 🏆";
    if (score >= 8) return "Excellent performance! You know your cars! 🚗";
    if (score >= 6) return "Good job! You have solid automotive knowledge! 👍";
    if (score >= 4) return "Not bad! Keep learning about cars! 📚";
    return "Keep practicing! There's always room to improve! 💪";
  };

  return (
    <div className="space-y-6">
      {/* Score Display Card */}
      <Card id="score-display" className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <Trophy className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-3xl mb-2">Game Complete!</CardTitle>
            <p className="text-muted-foreground">Here's how you performed</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Main Score */}
          <div className="text-center space-y-4">
            <div className={`text-6xl font-bold ${getScoreColor(scoreData.score)}`}>
              {scoreData.score}/10
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {scoreData.performanceLabel}
            </Badge>
            <p className="text-muted-foreground max-w-md mx-auto">
              {getScoreMessage(scoreData.score)}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{hintsUsed}</div>
              <div className="text-sm text-muted-foreground">Hints Used</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{questionsSkipped}</div>
              <div className="text-sm text-muted-foreground">Questions Skipped</div>
            </div>
          </div>

          {/* Performance Breakdown */}
          <div className="space-y-3">
            <h3 className="font-semibold text-center">Performance Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Correct Answers:</span>
                <span className="font-medium">{scoreData.score}/10</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Accuracy:</span>
                <span className="font-medium">{Math.round((scoreData.score / 10) * 100)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Hints Used:</span>
                <span className="font-medium">{hintsUsed}/10</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button onClick={handlePlayAgain} className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4" />
          Play Again
        </Button>
        
        <Button onClick={handleDownloadScreenshot} variant="outline" disabled={isDownloading} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          {isDownloading ? 'Downloading...' : 'Download Score'}
        </Button>
        
        <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share Score
        </Button>
        
        <Button onClick={handleGoHome} variant="ghost" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Home
        </Button>
      </div>
    </div>
  );
}