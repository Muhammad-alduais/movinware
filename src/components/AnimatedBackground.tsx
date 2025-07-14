import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  delay: number;
}

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  // Create initial particles
  useEffect(() => {
    const createParticles = (): Particle[] => {
      const newParticles: Particle[] = [];
      const numParticles = 100;

      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // percentage
          y: Math.random() * 120 + 10, // start slightly below viewport
          size: Math.random() * 3 + 1, // 1-4px
          speed: Math.random() * 0.5 + 0.2, // 0.2-0.7 units per frame
          opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
          delay: Math.random() * 5000, // 0-5 second delay
        });
      }

      return newParticles;
    };

    setParticles(createParticles());
  }, []);

  // Animation loop
  useEffect(() => {
    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Check if particle should start animating (delay passed)
          if (currentTime - startTime < particle.delay) {
            return particle;
          }

          let newY = particle.y - particle.speed;
          let newOpacity = particle.opacity;

          // Fade out as particle rises
          if (newY < 80) {
            newOpacity = particle.opacity * (newY / 80);
          }

          // Reset particle when it goes off screen
          if (newY < -10 || newOpacity < 0.01) {
            return {
              ...particle,
              y: Math.random() * 20 + 100, // Reset below viewport
              x: Math.random() * 100, // New random x position
              opacity: Math.random() * 0.6 + 0.2,
              size: Math.random() * 3 + 1,
              speed: Math.random() * 0.5 + 0.2,
            };
          }

          return {
            ...particle,
            y: newY,
            opacity: newOpacity,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  // Pause animation when tab is not visible (performance optimization)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="animated-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #ffffff 0%, #f3f3fb 100%)',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: 'absolute',
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#4942E4',
            borderRadius: '50%',
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;