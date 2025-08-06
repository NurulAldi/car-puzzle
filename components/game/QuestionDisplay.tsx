'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LetterInput } from './LetterInput';
import { useGameStore } from '@/stores/gameStore';
import { HelpCircle, SkipForward, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export function QuestionDisplay() {
  const {
    currentQuestion,
    currentQuestionIndex,
    userAnswer,
    showHint,
    gameStatus,
    updateAnswer,
    submitAnswer,
    skipQuestion,
    useHint,
  } = useGameStore();

  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setShowResult(false);
    setIsCorrect(false);
  }, [currentQuestion]);

  if (!currentQuestion || gameStatus !== 'playing') {
    return null;
  }

  const handleLetterChange = (index: number, value: string) => {
    const newAnswer = [...userAnswer];
    newAnswer[index] = value;
    updateAnswer(newAnswer);
  };

  const handleSubmit = () => {
    const userAnswerString = userAnswer.join('').toUpperCase();
    const correctAnswer = currentQuestion.answer.replace(/\s/g, '').toUpperCase();
    
    setIsCorrect(userAnswerString === correctAnswer);
    setShowResult(true);
    
    setTimeout(() => {
      submitAnswer();
      setShowResult(false);
    }, 2000);
  };

  const handleSkip = () => {
    skipQuestion();
  };

  const handleHint = () => {
    useHint();
  };

  const isAnswerComplete = userAnswer.every(letter => letter.trim() !== '');
  
  // Split answer into words for proper spacing
  const answerWords = currentQuestion.answer.split(' ');
  let letterIndex = 0;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="px-3 py-1">
            Question {currentQuestionIndex + 1} of 10
          </Badge>
          <Badge variant="secondary" className="capitalize">
            {currentQuestion.difficulty}
          </Badge>
        </div>
        <div className="w-full max-w-xs mx-4">
          <div className="bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / 10) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">
            {currentQuestion.question}
          </CardTitle>
          {showHint && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900 mb-1">Hint:</p>
                  <p className="text-blue-800">{currentQuestion.hint}</p>
                </div>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent>
          {/* Answer Input */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center items-center">
              {answerWords.map((word, wordIndex) => (
                <div key={wordIndex} className="flex gap-1">
                  {Array.from(word).map((_, letterIdx) => {
                    const currentIndex = letterIndex++;
                    return (
                      <LetterInput
                        key={currentIndex}
                        value={userAnswer[currentIndex] || ''}
                        onChange={(value) => handleLetterChange(currentIndex, value)}
                        index={currentIndex}
                        isCorrect={showResult && isCorrect}
                        isIncorrect={showResult && !isCorrect}
                        disabled={showResult}
                        autoFocus={currentIndex === 0}
                      />
                    );
                  })}
                  {wordIndex < answerWords.length - 1 && (
                    <div className="w-4 flex items-center justify-center">
                      <div className="w-2 h-0.5 bg-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Result Display */}
            {showResult && (
              <div className="text-center space-y-2">
                <div className={`text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
                </div>
                {!isCorrect && (
                  <div className="text-muted-foreground">
                    The correct answer was: <span className="font-bold">{currentQuestion.answer}</span>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            {!showResult && (
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  onClick={handleSubmit}
                  disabled={!isAnswerComplete}
                  className="flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Submit Answer
                </Button>
                
                <Button
                  onClick={handleHint}
                  variant="outline"
                  disabled={showHint}
                  className="flex items-center gap-2"
                >
                  <HelpCircle className="h-4 w-4" />
                  {showHint ? 'Hint Used' : 'Get Hint'}
                </Button>
                
                <Button
                  onClick={handleSkip}
                  variant="ghost"
                  className="flex items-center gap-2"
                >
                  <SkipForward className="h-4 w-4" />
                  Skip Question
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}