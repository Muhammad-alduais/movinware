import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import AnimatedBackgroundCSS from './AnimatedBackgroundCSS';
import CanvasAnimatedBackground from './CanvasAnimatedBackground';
import { useAnimatedBackground } from '../hooks/useAnimatedBackground';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  variant?: 'react' | 'css' | 'canvas' | 'auto';
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ 
  children, 
  variant = 'auto' 
}) => {
  const { shouldUseSimpleAnimation, isLowPerformance } = useAnimatedBackground();

  const getBackgroundComponent = () => {
    if (variant === 'auto') {
      if (shouldUseSimpleAnimation) {
        return <AnimatedBackgroundCSS />;
      } else if (isLowPerformance) {
        return <AnimatedBackgroundCSS />;
      } else {
        return <CanvasAnimatedBackground />;
      }
    }

    switch (variant) {
      case 'react':
        return <AnimatedBackground />;
      case 'css':
        return <AnimatedBackgroundCSS />;
      case 'canvas':
        return <CanvasAnimatedBackground />;
      default:
        return <AnimatedBackgroundCSS />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {getBackgroundComponent()}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;