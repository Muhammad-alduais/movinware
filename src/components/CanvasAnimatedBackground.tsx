import React, { useEffect, useRef, useState } from 'react';

interface CanvasParticle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  maxOpacity: number;
  delay: number;
  startTime: number;
}

// High-performance Canvas version for full website background
const CanvasAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<CanvasParticle[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to cover entire viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      const particles: CanvasParticle[] = [];
      const numParticles = 100;

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1 + 0.5,
          opacity: 0,
          maxOpacity: Math.random() * 0.6 + 0.2,
          delay: Math.random() * 5000,
          startTime: Date.now(),
        });
      }

      return particles;
    };

    particlesRef.current = createParticles();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now();

      particlesRef.current.forEach(particle => {
        // Check if particle should start animating
        if (currentTime - particle.startTime < particle.delay) {
          return;
        }

        // Update position
        particle.y -= particle.speed;

        // Update opacity based on position
        if (particle.y > canvas.height * 0.8) {
          particle.opacity = particle.maxOpacity;
        } else if (particle.y > canvas.height * 0.2) {
          const fadeProgress = (particle.y - canvas.height * 0.2) / (canvas.height * 0.6);
          particle.opacity = particle.maxOpacity * fadeProgress;
        } else {
          particle.opacity = particle.maxOpacity * (particle.y / (canvas.height * 0.2));
        }

        // Reset particle when it goes off screen
        if (particle.y < -10 || particle.opacity < 0.01) {
          particle.y = canvas.height + Math.random() * 100;
          particle.x = Math.random() * canvas.width;
          particle.opacity = 0;
          particle.maxOpacity = Math.random() * 0.6 + 0.2;
          particle.speed = Math.random() * 1 + 0.5;
          particle.size = Math.random() * 3 + 1;
        }

        // Draw particle
        if (particle.opacity > 0) {
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = '#4942E4';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;

      if (isVisible) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (isVisible) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  // Pause animation when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #ffffff 0%, #f3f3fb 100%)',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default CanvasAnimatedBackground;