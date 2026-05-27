---
name: Verset
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#434843'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#747872'
  outline-variant: '#c3c8c1'
  surface-tint: '#526254'
  primary: '#506052'
  on-primary: '#ffffff'
  primary-container: '#687969'
  on-primary-container: '#f6fff4'
  inverse-primary: '#b9cbb9'
  secondary: '#7b5455'
  on-secondary: '#ffffff'
  secondary-container: '#fdcbcb'
  on-secondary-container: '#795354'
  tertiary: '#5d5c58'
  on-tertiary: '#ffffff'
  tertiary-container: '#767470'
  on-tertiary-container: '#fdffdf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e7d5'
  primary-fixed-dim: '#b9cbb9'
  on-primary-fixed: '#101f13'
  on-primary-fixed-variant: '#3b4b3d'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ecbbba'
  on-secondary-fixed: '#2f1314'
  on-secondary-fixed-variant: '#603d3e'
  tertiary-fixed: '#e5e2dc'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474743'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  poem-display:
    fontFamily: literata
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: -0.02em
  poem-display-mobile:
    fontFamily: literata
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.5'
  poem-body:
    fontFamily: literata
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.8'
  ui-label-lg:
    fontFamily: dmSans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.05em
  ui-label-sm:
    fontFamily: dmSans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  caption:
    fontFamily: literata
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  margin-mobile: 24px
  margin-desktop: 64px
  gutter: 16px
  poem-vertical-gap: 48px
---

## Brand & Style

This design system is built on the philosophy of **Quietude**. It seeks to transform the digital interface into a sanctuary for the written word, mimicking the tactile grace of premium stationery and the hushed atmosphere of a private library. 

The aesthetic is **Poetic Minimalism**. It prioritizes focus by eliminating unnecessary decoration, using generous whitespace as a rhythmic pause between elements. The emotional response should be one of serenity and introspection, encouraging users to linger on a single stanza rather than rushing through a feed.

## Colors

The palette is derived from natural, muted tones that reduce eye strain and evoke a sense of heritage.

- **Primary (Sage Green):** Used for primary actions and highlights. It represents growth and balance.
- **Secondary (Dusty Rose):** Used sparingly for secondary accents, favorites, or emotional cues.
- **Background (Parchment):** A warm, off-white neutral (`#F2EFE9`) serves as the base, providing a softer contrast than pure white to mimic high-quality paper.
- **Ink (Charcoal):** All text and iconography utilize a deep, slightly warm charcoal (`#2C2C2C`) instead of true black, maintaining a "printed" feel.

## Typography

The typography strategy employs a "Dual-Tone" approach:

1.  **The Literary Serif (Literata):** Used for the core content—the poems. It features a high x-height and gentle curves, optimized for long-form reading and digital screens while maintaining a classic bookish charm.
2.  **The Modern Sans (DM Sans):** Used for the utilitarian "frame" of the app. It is geometric and understated, ensuring that the UI feels secondary to the poetry itself.

**Formatting Rules:**
- Poem text should always have a generous line height (minimum 1.6) to allow the words to breathe.
- UI labels should often be set in uppercase with slight letter spacing to differentiate them from the prose.

## Layout & Spacing

The layout follows a **Centered Fluid Grid** model. Content is prioritized in a single, focused column to eliminate distractions.

- **Desktop:** Max-width of 720px for the central poem container, anchored in the middle of the screen.
- **Mobile:** Side margins are increased to 24px to create a "framed" effect, making the screen feel like a page in a notebook.
- **Rhythm:** Spacing between stanzas or UI blocks should be significant (48px+) to enforce a slower pace of interaction.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** and **Soft Diffusion** rather than harsh shadows.

- **Base Layer:** The Parchment background.
- **Surface Layer:** Use a slightly lighter tint or a very subtle 1px border in a darker parchment shade to define cards or modules.
- **Shadows:** Use "Ambient Whispers"—low-opacity (5-8%), large-radius blurs in the Primary color's shadow. This makes elements feel like they are gently resting on paper rather than floating in space.
- **Glassmorphism:** Occasional use of backdrop blurs on navigation bars (tinted with the Background color at 80% opacity) to maintain a sense of context during scrolls.

## Shapes

The shape language is organic and approachable. 

- **Containers:** Use `rounded-lg` (16px) for cards and modals to mirror the soft corners of a well-worn journal.
- **Small Elements:** Buttons and tags use `rounded-xl` (24px) for a "pebble-like" tactile feel.
- **Interactive States:** On hover or focus, shapes may subtly expand or the stroke weight may increase, avoiding aggressive color shifts.

## Components

### Buttons
Primary buttons are solid Sage Green with Ink-colored text. Secondary buttons are outlined with a 1px Ink stroke. Both feature generous horizontal padding and a soft, rounded appearance.

### The Poem Card
The central component. It should have no visible borders or shadows by default, relying on the Parchment background. When "saved" or "focused," it gains a subtle secondary-color glow and a soft 1px border.

### Input Fields
Minimalist underlines or very light Parchment-filled boxes with no heavy borders. The cursor should be the same deep Charcoal as the text.

### Chips & Tags
Used for poem categories (e.g., "Nature," "Solitude"). These are pill-shaped with a Dusty Rose background at 10% opacity and Rose-colored text.

### Navigation
A bottom-anchored bar or a very thin top header, using the UI-Label-Sm typography. Icons should be light-weight (2px stroke) and never filled, maintaining the airy feel.

### Additional Elements
- **Progress Indicators:** A thin, horizontal line that grows as the user reads a poem.
- **Empty States:** Hand-drawn style illustrations in Charcoal line-work to maintain the artisan feel.