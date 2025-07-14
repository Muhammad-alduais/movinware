import React, { useEffect } from 'react';

// Alternative CSS-only version for better performance on lower-end devices
const AnimatedBackgroundCSS: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('css-animated-background');
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'css-particle';
      
      // Random positioning and animation properties
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 8 + 6}s`; // 6-14 seconds
      star.style.animationDelay = `${Math.random() * 5}s`; // 0-5 second delay
      star.style.setProperty('--size', `${Math.random() * 3 + 1}px`);
      star.style.setProperty('--opacity', `${Math.random() * 0.6 + 0.2}`);
      
      container.appendChild(star);
    }
  }, []);

  return (
    <>
      <div 
        id="css-animated-background"
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
      />
      
      <style jsx>{`
        .css-particle {
          position: absolute;
          width: var(--size);
          height: var(--size);
          background-color: #4942E4;
          border-radius: 50%;
          opacity: var(--opacity);
          animation: floatUp linear infinite;
          will-change: transform, opacity;
          pointer-events: none;
          top: 100vh;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: var(--opacity);
          }
          20% {
            opacity: var(--opacity);
          }
          80% {
            opacity: calc(var(--opacity) * 0.3);
          }
          100% {
            transform: translateY(-120vh) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .css-particle {
            animation-duration: 20s !important;
            animation-delay: 0s !important;
          }
        }
      `}</style>
    </>
  );
};

export default AnimatedBackgroundCSS;