'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: AnimationDirection;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const directionStyles: Record<AnimationDirection, { initial: string; animate: string }> = {
  up: {
    initial: 'opacity-0 translate-y-10',
    animate: 'opacity-100 translate-y-0',
  },
  down: {
    initial: 'opacity-0 -translate-y-10',
    animate: 'opacity-100 translate-y-0',
  },
  left: {
    initial: 'opacity-0 translate-x-10',
    animate: 'opacity-100 translate-x-0',
  },
  right: {
    initial: 'opacity-0 -translate-x-10',
    animate: 'opacity-100 translate-x-0',
  },
  fade: {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
};

export default function ScrollAnimation({
  children,
  direction = 'up',
  duration = 600,
  delay = 0,
  threshold = 0.1,
  className,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once]);

  const styles = directionStyles[direction];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        isVisible ? styles.animate : styles.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
