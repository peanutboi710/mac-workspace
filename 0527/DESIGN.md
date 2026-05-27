---
name: Arctic Breeze Community
colors:
  surface: '#f5fafc'
  surface-dim: '#d6dbdd'
  surface-bright: '#f5fafc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4f6'
  surface-container: '#eaeff1'
  surface-container-high: '#e4e9eb'
  surface-container-highest: '#dee3e5'
  on-surface: '#171c1e'
  on-surface-variant: '#424849'
  inverse-surface: '#2c3133'
  inverse-on-surface: '#ecf2f4'
  outline: '#727879'
  outline-variant: '#c2c7c8'
  surface-tint: '#4d6265'
  primary: '#4d6265'
  on-primary: '#ffffff'
  primary-container: '#e0f7fa'
  on-primary-container: '#5d7275'
  inverse-primary: '#b4cbce'
  secondary: '#006876'
  on-secondary: '#ffffff'
  secondary-container: '#58e6ff'
  on-secondary-container: '#006573'
  tertiary: '#006972'
  on-tertiary: '#ffffff'
  tertiary-container: '#d3f9ff'
  on-tertiary-container: '#007a85'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e7ea'
  primary-fixed-dim: '#b4cbce'
  on-primary-fixed: '#091f21'
  on-primary-fixed-variant: '#364a4d'
  secondary-fixed: '#a1efff'
  secondary-fixed-dim: '#44d8f1'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e59'
  tertiary-fixed: '#92f1fe'
  tertiary-fixed-dim: '#75d5e2'
  on-tertiary-fixed: '#001f23'
  on-tertiary-fixed-variant: '#004f56'
  background: '#f5fafc'
  on-background: '#171c1e'
  surface-variant: '#dee3e5'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 40px
  gutter: 16px
  section-gap: 48px
---

## Brand & Style

The design system centers on the concept of "Thermal Relief." It aims to provide an immediate psychological cooling effect the moment a user engages with the interface. The brand personality is calm, airy, and rejuvenating—acting as a digital sanctuary from the oppressive summer heat.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**. By utilizing translucent layers, frosted textures, and subtle "frozen" gradients, the UI mimics the physical properties of ice and chilled water. White space is treated as "breathing room," ensuring the layout feels light and breezy rather than cluttered or heavy.

**Target Audience:** Urban dwellers, travelers, and community members seeking air-conditioned "oasis" locations, cold food recommendations, and heat-avoidance tips.
**Emotional Response:** Instant refreshment, clarity, and physical comfort.

## Colors

The palette is strictly cool-toned to reinforce the "Anti-Heat" narrative. 

- **Primary (Icy Blue):** Used for large background surfaces and "cold" zones. It provides the base level of refreshment.
- **Secondary (Cool Teal):** Reserved for primary actions, links, and highlights. It represents deep water and vitality.
- **Tertiary (Deep Arctic):** Used for high-contrast text and critical UI elements to ensure readability against light backgrounds.
- **Neutral (Frost White):** A crisp, clean white used for card surfaces and text containers to simulate the look of fresh snow or bright ice.

Avoid warm tones (reds, oranges, yellows) entirely. Even "Warning" states should use high-contrast cool tones or deep purples to maintain the thermal consistency.

## Typography

This design system utilizes a combination of **Plus Jakarta Sans** for headlines and **Hanken Grotesk** for body and UI elements. 

- **Plus Jakarta Sans** provides a soft, approachable, and "breezy" feel with its open counters and friendly curves. It should be used for all H1-H3 levels to set a welcoming tone.
- **Hanken Grotesk** offers a sharp, modern, and highly technical legibility that balances the softness of the headlines. It ensures that community posts and data-heavy information (like temperatures or distances) are processed effortlessly.

For Korean text rendering, pair these with a clean, modern Neo-Grotesque Sans-Serif (like Pretendard or Apple SD Gothic Neo) to maintain the "Modern & Clean" aesthetic across languages.

## Layout & Spacing

The layout follows a **Fluid Grid** model optimized for mobile-first consumption. 

- **Mobile:** A single-column layout with 20px side margins. Elements should feel "airy," utilizing generous vertical padding (32px+) between content blocks to prevent a sense of "cramped heat."
- **Desktop:** Transitions to a 12-column grid with a maximum content width of 1200px. 
- **Rhythm:** Use an 8px base unit. Component internal padding should lean toward "generous" to enhance the feeling of space and calmness.

Horizontal scrolling "chips" or "cards" are encouraged for mobile category navigation (e.g., "Nearby Cafes," "Public Pools") to keep the UI interactive and fluid like water.

## Elevation & Depth

Depth in this design system is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Surface Levels:** The base background is a soft blue-to-white gradient. Primary content containers use a "Frosted Glass" effect—70% opacity white with a 20px backdrop blur and a 1px semi-transparent white border to simulate the edge of an ice cube.
- **Shadows:** Use "Ambient Cool Shadows." Instead of black or grey, shadows should use a low-opacity Deep Teal (#00838F at 8-10% opacity) with a large blur radius (30px+) to create a soft, ethereal lift.
- **Interactive States:** When hovered or pressed, elements should increase in "clarity" (less blur, higher opacity) or show a subtle "ripple" animation to mimic water.

## Shapes

The shape language is **Rounded (Level 2)**. 

Corners are softened to 0.5rem (8px) for standard components and up to 1.5rem (24px) for large containers. This avoids the "aggressive" sharpness of brutalism while maintaining a modern structure. 

**Visual Accents:**
- Incorporate "Water Ripple" organic shapes in background decorations.
- Use perfect circles for status indicators or temperature badges.
- Use "Pill" shapes for tags and categories to maintain a friendly, soft-touch interface.

## Components

### Buttons
Primary buttons use a vibrant Teal-to-Blue gradient with a high-gloss sheen. Secondary buttons should be "Ghost" style with a frosted glass background and a 1px white border. Use a subtle inner-glow on hover to simulate light hitting ice.

### Cards
Cards are the primary content vehicle. They must feature a `backdrop-filter: blur(12px)` and a subtle "frost" texture overlay (a very fine, low-opacity noise). Headers within cards should be crisp and dark teal.

### Inputs & Forms
Input fields should be semi-transparent with a 1px "Ice Blue" border that glows slightly when focused. Use placeholder text in a muted cool-grey-blue.

### Chips & Tags
Small, pill-shaped elements with light blue backgrounds and dark teal text. These should feel like small "ice chips" floating on the UI.

### Navigation (Mobile)
A floating bottom navigation bar with a frosted glass effect. Active icons should glow with a soft blue light, suggesting "cooling" functionality.

### Additional Elements
- **Temperature Gauge:** A circular progress component using a gradient from Deep Blue (coldest) to Light Cyan.
- **Frost Overlays:** Use a subtle "vignette" of frost particles at the very edges of the screen for top-tier desktop experiences.