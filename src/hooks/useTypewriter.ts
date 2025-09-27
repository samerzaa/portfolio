import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export const useTypewriter = ({ 
  text, 
  speed = 80, 
  delay = 0, 
  loop = false 
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    // Reset everything
    setDisplayText('');
    setIsComplete(false);
    currentIndexRef.current = 0;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const startTyping = () => {
      const typeNextChar = () => {
        if (currentIndexRef.current < text.length) {
          const currentChar = text[currentIndexRef.current];
          let charDelay = speed;
          
          // Longer pause for spaces and punctuation
          if (currentChar === ' ') {
            charDelay = speed * 1.5;
          } else if (currentChar === ',' || currentChar === '.' || currentChar === "'") {
            charDelay = speed * 2;
          } else if (currentChar === 'I') {
            charDelay = speed * 0.7;
          }
          
          // Add slight random variation
          const variation = Math.random() * 20 - 10;
          charDelay += variation;

          setDisplayText(prev => prev + currentChar);
          currentIndexRef.current++;

          timeoutRef.current = setTimeout(typeNextChar, Math.max(charDelay, 30));
        } else {
          setIsComplete(true);
        }
      };

      typeNextChar();
    };

    if (delay > 0) {
      timeoutRef.current = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, delay]);

  useEffect(() => {
    if (loop && isComplete) {
      const resetTimeout = setTimeout(() => {
        setDisplayText('');
        setIsComplete(false);
        currentIndexRef.current = 0;
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [isComplete, loop]);

  return { displayText, isComplete };
};
