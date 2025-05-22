
'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedStatCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  animationDelay?: string;
}

export default function AnimatedStatCard({ label, value, icon: Icon, animationDelay = '0s' }: AnimatedStatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const animationTriggeredRef = useRef(false);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    if (!currentCardRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggeredRef.current) {
          animationTriggeredRef.current = true; 
          
          let start = 0;
          const end = value;
          
          if (end === 0 && start === 0) {
            setDisplayValue(0);
            observer.unobserve(currentCardRef);
            return;
          }

          const duration = 1500; // Animation duration in ms
          const frameDuration = 1000 / 60; // 60 FPS
          const totalFrames = Math.round(duration / frameDuration);
          let currentFrame = 0;

          const counter = () => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const currentNum = Math.round(end * progress);
            
            setDisplayValue(currentNum > end ? end : currentNum);

            if (currentFrame < totalFrames) {
              requestAnimationFrame(counter);
            } else {
              setDisplayValue(end); // Ensure it ends exactly on the value
            }
          };
          
          requestAnimationFrame(counter);
          observer.unobserve(currentCardRef); 
        }
      },
      { threshold: 0.1 } 
    );

    observer.observe(currentCardRef);

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, [value]);

  return (
    <Card
      ref={cardRef}
      className={cn(
        "glass-experience-card", // Applied glassmorphism style
        "text-center shadow-lg" // Kept base shadow
      )}
      style={{ animationDelay }}
    >
      <CardHeader className="pb-2">
        <Icon className="h-10 w-10 mx-auto text-accent mb-2" />
        <CardTitle className="text-3xl font-bold text-primary">
          {displayValue.toLocaleString()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
