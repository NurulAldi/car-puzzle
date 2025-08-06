'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Trophy, Target, HelpCircle } from 'lucide-react';

export function GameSidebar() {
  return (
    <aside className="w-80 bg-background border-r border-border p-6 overflow-y-auto">
      <div className="space-y-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="p-2 bg-primary rounded-lg">
            <Car className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Car Trivia</h1>
            <p className="text-sm text-muted-foreground">Puzzle Games</p>
          </div>
        </div>

        {/* Current Game */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Current Game
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Car Trivia Puzzle</span>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Test your automotive knowledge with challenging trivia questions!
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Game Rules */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5" />
              How to Play
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>Answer 10 automotive trivia questions</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>Type letters in the boxes provided</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>Use hints when you're stuck (1 per question)</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>Skip questions without penalty</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>Get your final score and performance rating</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Pro Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-muted rounded-lg">
                💡 <strong>Think carefully</strong> - Some answers might be brand names, car models, or racing terms
              </div>
              <div className="p-3 bg-muted rounded-lg">
                🎯 <strong>Use hints wisely</strong> - You only get one hint per question
              </div>
              <div className="p-3 bg-muted rounded-lg">
                🏁 <strong>Don't get stuck</strong> - Skip difficult questions and come back if needed
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coming Soon */}
        <Card className="opacity-60">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">More Games</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>🏍️ Motorcycle Trivia</div>
              <div>🏁 Racing History Quiz</div>
              <div>🔧 Auto Parts Challenge</div>
              <Badge variant="outline" className="mt-2">Coming Soon</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}