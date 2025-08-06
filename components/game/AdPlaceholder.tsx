'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AdPlaceholderProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  size?: 'small' | 'medium' | 'large';
}

export function AdPlaceholder({ 
  className, 
  orientation = 'vertical',
  size = 'medium'
}: AdPlaceholderProps) {
  const sizeClasses = {
    small: orientation === 'vertical' ? 'h-32' : 'h-16',
    medium: orientation === 'vertical' ? 'h-64' : 'h-24',
    large: orientation === 'vertical' ? 'h-96' : 'h-32',
  };

  return (
    <Card className={cn(
      'border-2 border-dashed border-muted-foreground/20 bg-muted/10 flex items-center justify-center',
      sizeClasses[size],
      className
    )}>
      <div className="text-center space-y-2">
        <div className="text-muted-foreground/50 text-sm font-medium">
          Advertisement Space
        </div>
        <div className="text-muted-foreground/30 text-xs">
          {orientation === 'vertical' ? '300x600' : '728x90'}
        </div>
      </div>
    </Card>
  );
}