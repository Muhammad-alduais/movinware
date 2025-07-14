import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import CanvasAnimatedBackground from './CanvasAnimatedBackground';
import FullBackgroundAnimation from './FullBackgroundAnimation';
import { useAnimatedBackground } from '../hooks/useAnimatedBackground';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  variant?: 'react' | 'canvas' | 'html' | 'auto';
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ 
  children, 
  variant = 'auto' 
}) => {
  const { shouldUseSimpleAnimation, isLowPerformance } = useAnimatedBackground();

  const getBackgroundComponent = () => {
    if (variant === 'auto') {
      if (shouldUseSimpleAnimation) {
        return <FullBackgroundAnimation />;
      } else if (isLowPerformance) {
        return <AnimatedBackground />;
      } else {
        return <CanvasAnimatedBackground />;
      }
    }

    switch (variant) {
      case 'react':
        return <AnimatedBackground />;
      case 'canvas':
        return <CanvasAnimatedBackground />;
      case 'html':
        return <FullBackgroundAnimation />;
      default:
        return <CanvasAnimatedBackground />;
    }
  };

  return (
    <>
      {getBackgroundComponent()}
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {children}
      </div>
    </>
  );
};

export default BackgroundWrapper;