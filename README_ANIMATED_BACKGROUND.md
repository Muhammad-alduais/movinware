# Animated Background Implementation

This implementation provides three different versions of an elegant animated background with floating particles using your brand color #4942E4.

## Features

✅ **Elegant gradient background**: `linear-gradient(135deg, #ffffff 0%, #f3f3fb 100%)`
✅ **100 animated particles** using brand color #4942E4
✅ **Random placement** on load
✅ **Upward floating motion** with varying speeds
✅ **Fade out effect** as particles rise
✅ **Non-blocking interaction** - users can interact with content normally
✅ **Performance optimized** with multiple implementation options
✅ **Accessibility friendly** - respects `prefers-reduced-motion`
✅ **Responsive** - works on all screen sizes

## Implementation Options

### 1. Canvas Version (Recommended)
- **File**: `CanvasAnimatedBackground.tsx`
- **Best for**: High performance, smooth animations
- **Pros**: Excellent performance, smooth rendering, low DOM overhead
- **Cons**: Slightly more complex

### 2. React State Version
- **File**: `AnimatedBackground.tsx`
- **Best for**: React-heavy applications, easy customization
- **Pros**: Easy to customize, React-friendly, good for complex interactions
- **Cons**: Higher memory usage with many particles

### 3. CSS-Only Version
- **File**: `AnimatedBackgroundCSS.tsx`
- **Best for**: Simple implementation, lower-end devices
- **Pros**: Lightweight, CSS animations, good browser support
- **Cons**: Less control over individual particles

## Usage

### Quick Integration

```tsx
import BackgroundWrapper from '@/components/BackgroundWrapper';

function App() {
  return (
    <BackgroundWrapper variant="auto">
      {/* Your existing content */}
      <YourContent />
    </BackgroundWrapper>
  );
}
```

### Manual Integration

```tsx
import CanvasAnimatedBackground from '@/components/CanvasAnimatedBackground';

function App() {
  return (
    <div>
      <CanvasAnimatedBackground />
      {/* Your content */}
    </div>
  );
}
```

## Customization Options

### Particle Count
Change the number of particles by modifying `numParticles` in any component:
```tsx
const numParticles = 150; // Increase for more particles
```

### Colors
Update the brand color:
```tsx
// In Canvas version
ctx.fillStyle = '#your-color';

// In React version
backgroundColor: '#your-color'

// In CSS version
background-color: #your-color;
```

### Animation Speed
Adjust particle speed:
```tsx
speed: Math.random() * 2 + 0.5, // Faster particles
```

### Particle Size
Modify particle size range:
```tsx
size: Math.random() * 5 + 2, // Larger particles (2-7px)
```

## Performance Features

- **Automatic performance detection** - switches to simpler animation on low-end devices
- **Visibility API integration** - pauses animation when tab is not visible
- **Reduced motion support** - respects user accessibility preferences
- **Optimized rendering** - uses `requestAnimationFrame` and `will-change` CSS property
- **Memory efficient** - particles are reused rather than created/destroyed

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Accessibility

- Respects `prefers-reduced-motion` setting
- Uses `pointer-events: none` to ensure no interaction blocking
- Provides fallback for users with motion sensitivity

## Integration Notes

1. The background is positioned with `z-index: -1` to stay behind content
2. Uses `position: fixed` to cover the entire viewport
3. `pointer-events: none` ensures no interference with user interactions
4. Automatically handles window resizing
5. Optimized for both desktop and mobile devices

## Troubleshooting

**Performance Issues**: Switch to CSS version or reduce particle count
**Particles not visible**: Check z-index stacking context
**Animation stuttering**: Ensure `will-change` is applied and reduce particle count
**Mobile performance**: The auto variant will automatically use the most appropriate version

Choose the implementation that best fits your needs and performance requirements!