import { useState, useEffect } from 'react';

export const useLoading = (initialLoading = true, duration = 3000) => {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isLoading, duration]);

  return { isLoading, setIsLoading };
};
