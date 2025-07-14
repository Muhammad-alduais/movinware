# Full Website Background Animation

This implementation creates an elegant animated background that covers your **entire website** with floating particles using your brand color #4942E4.

## 🌟 **Key Features**

✅ **Full website coverage** - Animation spans the entire background of your site
✅ **Elegant gradient background**: `linear-gradient(135deg, #ffffff 0%, #f3f3fb 100%)`
✅ **100 animated particles** using brand color #4942E4
✅ **Non-blocking interaction** - Users can interact with content normally
✅ **Performance optimized** with multiple implementation options
✅ **Accessibility friendly** - Respects `prefers-reduced-motion`
✅ **Responsive** - Works on all screen sizes and devices

## 🚀 **Implementation Options**

### 1. Canvas Version (Recommended)
- **Best performance** for complex animations
- **Smooth 60fps** rendering
- **Low memory usage**

### 2. React State Version
- **Easy customization**
- **React-friendly** integration
- **Good for interactive features**

### 3. Pure HTML/CSS/JS Version
- **Lightweight** implementation
- **No framework dependencies**
- **Excellent browser support**

## 📱 **Usage**

### Quick Integration (Recommended)
```tsx
import BackgroundWrapper from '@/components/BackgroundWrapper';

function App() {
  return (
    <BackgroundWrapper variant="auto">
      <YourEntireWebsite />
    </BackgroundWrapper>
  );
}
```

### Manual Integration
```tsx
import CanvasAnimatedBackground from '@/components/CanvasAnimatedBackground';

function App() {
  return (
    <>
      <CanvasAnimatedBackground />
      <YourContent />
    </>
  );
}
```

## 🎨 **Customization**

### Particle Count
```tsx
const numParticles = 150; // More particles
```

### Brand Color
```tsx
backgroundColor: '#your-brand-color'
```

### Animation Speed
```tsx
speed: Math.random() * 2 + 0.5 // Faster particles
```

### Background Gradient
```tsx
background: 'linear-gradient(135deg, #your-start 0%, #your-end 100%)'
```

## ⚡ **Performance Features**

- **Automatic optimization** - Chooses best version based on device
- **Visibility API** - Pauses when tab is not visible
- **Reduced motion support** - Respects accessibility preferences
- **Memory efficient** - Particles are recycled, not recreated
- **GPU acceleration** - Uses `will-change` and `transform3d`

## 🔧 **Technical Details**

- **Position**: `fixed` with `z-index: -1` to stay behind all content
- **Coverage**: `100vw` x `100vh` to cover entire viewport
- **Interaction**: `pointer-events: none` ensures no blocking
- **Responsive**: Automatically handles window resizing
- **Smooth**: Uses `requestAnimationFrame` for optimal performance

## 🌐 **Browser Support**

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🎯 **Integration Notes**

1. The background automatically covers your **entire website**
2. All content remains fully interactive
3. Animation adapts to screen size changes
4. Optimized for both desktop and mobile
5. No interference with existing styles or layouts

Choose `variant="auto"` for automatic optimization, or select a specific version based on your needs!