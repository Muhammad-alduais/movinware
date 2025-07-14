import React, { useEffect } from 'react';

// Pure HTML/CSS/JS version for full website background
const FullBackgroundAnimation: React.FC = () => {
  useEffect(() => {
    // Create the background container
    const backgroundContainer = document.createElement('div');
    backgroundContainer.id = 'full-animated-background';
    backgroundContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, #ffffff 0%, #f3f3fb 100%);
      z-index: -1;
      overflow: hidden;
      pointer-events: none;
    `;

    // Insert at the beginning of body
    document.body.insertBefore(backgroundContainer, document.body.firstChild);

    // Create particles
    const numStars = 100;
    const particles: HTMLElement[] = [];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'floating-particle';
      
      // Random positioning and properties
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.6 + 0.2;
      const duration = Math.random() * 8 + 6; // 6-14 seconds
      const delay = Math.random() * 5; // 0-5 second delay
      
      star.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        width: ${size}px;
        height: ${size}px;
        background-color: #4942E4;
        border-radius: 50%;
        opacity: ${opacity};
        animation: floatUpFade ${duration}s linear infinite;
        animation-delay: ${delay}s;
        will-change: transform, opacity;
        pointer-events: none;
      `;
      
      particles.push(star);
      backgroundContainer.appendChild(star);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUpFade {
        0% {
          transform: translateY(0) translateX(0);
          opacity: var(--particle-opacity, 0.6);
        }
        20% {
          opacity: var(--particle-opacity, 0.6);
        }
        80% {
          opacity: calc(var(--particle-opacity, 0.6) * 0.3);
        }
        100% {
          transform: translateY(-120vh) translateX(${Math.random() * 40 - 20}px);
          opacity: 0;
        }
      }

      /* Respect reduced motion preference */
      @media (prefers-reduced-motion: reduce) {
        .floating-particle {
          animation-duration: 20s !important;
          animation-delay: 0s !important;
        }
      }

      /* Ensure background covers everything */
      body {
        position: relative;
      }
    `;
    
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (backgroundContainer.parentNode) {
        backgroundContainer.parentNode.removeChild(backgroundContainer);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default FullBackgroundAnimation;