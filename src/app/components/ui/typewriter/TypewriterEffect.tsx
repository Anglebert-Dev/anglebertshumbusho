'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypewriterEffect({
  text,
  className = '',
  speed = 50,
  delay = 0,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const startDelay = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [delay, isMounted]);

  useEffect(() => {
    if (!isStarted || !isMounted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isStarted, isMounted]);

  if (!isMounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
} 