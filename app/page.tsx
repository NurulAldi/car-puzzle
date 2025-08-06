'use client';

import { useGameStore } from '@/stores/gameStore';
import { GameSidebar } from '@/components/game/GameSidebar';
import { WelcomeScreen } from '@/components/game/WelcomeScreen';
import { QuestionDisplay } from '@/components/game/QuestionDisplay';
import { ScorePage } from '@/components/game/ScorePage';
import { AdPlaceholder } from '@/components/game/AdPlaceholder';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const gameStatus = useGameStore((state) => state.gameStatus);

  const renderMainContent = () => {
    switch (gameStatus) {
      case 'playing':
        return <QuestionDisplay />;
      case 'completed':
        return <ScorePage />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <GameSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1">
          {/* Center Content */}
          <main className="flex-1 p-6 max-w-4xl mx-auto">
            <div className="space-y-8">
              {renderMainContent()}
            </div>
          </main>

          {/* Right Sidebar - Ad Space */}
          <aside className="w-80 p-6 border-l border-border">
            <div className="space-y-6">
              <AdPlaceholder size="large" />
              <AdPlaceholder size="medium" />
            </div>
          </aside>
        </div>

        {/* Bottom Ad Space */}
        <div className="p-6 border-t border-border bg-muted/10">
          <AdPlaceholder orientation="horizontal" size="large" className="max-w-4xl mx-auto" />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}