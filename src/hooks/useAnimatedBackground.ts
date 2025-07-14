import { useEffect, useState } from 'react';

// Custom hook for managing animated background preferences
export const useAnimatedBackground = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Simple performance detection
    const checkPerformance = () => {
      const start = performance.now();
      for (let i = 0; i < 100000; i++) {
        Math.random();
      }
      const end = performance.now();
      
      // If this simple operation takes more than 10ms, consider it low performance
      setIsLowPerformance(end - start > 10);
    };

    checkPerformance();

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    prefersReducedMotion,
    isLowPerformance,
    shouldUseSimpleAnimation: prefersReducedMotion || isLowPerformance,
  };
};