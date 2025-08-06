import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car Trivia Puzzle Game - Test Your Automotive Knowledge',
  description: 'Challenge yourself with automotive trivia questions! Test your knowledge of cars, racing, brands, and more in this engaging puzzle game.',
  keywords: 'car trivia, automotive quiz, car knowledge test, puzzle game, racing trivia, car brands quiz',
  authors: [{ name: 'Car Trivia Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Car Trivia Puzzle Game',
    description: 'Test your automotive knowledge with challenging trivia questions!',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}