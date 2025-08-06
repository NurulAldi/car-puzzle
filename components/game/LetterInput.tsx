'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface LetterInputProps {
  value: string;
  onChange: (value: string) => void;
  index: number;
  isCorrect?: boolean;
  isIncorrect?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
}

export function LetterInput({
  value,
  onChange,
  index,
  isCorrect,
  isIncorrect,
  disabled,
  autoFocus
}: LetterInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toUpperCase();
    if (newValue.length <= 1 && /^[A-Z]*$/.test(newValue)) {
      onChange(newValue);
      
      // Auto-focus next input
      if (newValue && !disabled) {
        const nextInput = document.querySelector(
          `input[data-index="${index + 1}"]`
        ) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !value) {
      // Focus previous input on backspace
      const prevInput = document.querySelector(
        `input[data-index="${index - 1}"]`
      ) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
    
    if (e.key === 'ArrowLeft') {
      const prevInput = document.querySelector(
        `input[data-index="${index - 1}"]`
      ) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
    
    if (e.key === 'ArrowRight') {
      const nextInput = document.querySelector(
        `input[data-index="${index + 1}"]`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      data-index={index}
      maxLength={1}
      className={cn(
        'w-12 h-12 text-center text-xl font-bold border-2 rounded-lg transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'border-green-500 bg-green-50 text-green-800': isCorrect,
          'border-red-500 bg-red-50 text-red-800': isIncorrect,
          'border-gray-300 bg-white hover:border-gray-400': !isCorrect && !isIncorrect,
        }
      )}
      placeholder=""
    />
  );
}