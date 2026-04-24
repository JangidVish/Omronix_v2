---
name: Cyber-Kinetic Ledger
colors:
  surface: '#11131b'
  surface-dim: '#11131b'
  surface-bright: '#373942'
  surface-container-lowest: '#0c0e16'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#282a32'
  surface-container-highest: '#32343d'
  on-surface: '#e1e2ed'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e1e2ed'
  inverse-on-surface: '#2e3039'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#11131b'
  on-background: '#e1e2ed'
  surface-variant: '#32343d'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered to evoke a sense of high-velocity security and futuristic reliability for the blockchain and CPaaS sectors. It targets institutional developers and enterprise architects who require a high-tech environment that feels both sophisticated and performant. 

The aesthetic identity is rooted in **Glassmorphism** and **Futuristic Minimalism**. By utilizing deep obsidian backdrops contrasted against luminous, neon-infused accents, the UI creates a sense of infinite digital space. Visual signals like backdrop blurs and subtle glows suggest a "liquid-state" interface, where data flows seamlessly across a secure, transparent architecture.

## Colors

This design system utilizes a high-contrast dark mode palette to emphasize depth and data clarity. The foundation is a deep midnight blue (`#050D1A`), providing a low-energy-consumption canvas for vibrant accents. 

Primary actions and brand identification are driven by a bold blue (`#2563EB`), while secondary interactive elements and data visualizations utilize a tech-cyan (`#06B6D4`). The system relies heavily on a linear gradient between these two hues to represent "flow" and "connectivity." Neutral tones are strictly cool-skewed to maintain a professional, cold-metal aesthetic, ensuring primary text remains at maximum legibility.

## Typography

The typographic strategy balances technical precision with high readability. **Space Grotesk** is used for all headings and labels to inject a geometric, "code-adjacent" personality into the brand identity. Its unique glyph shapes reinforce the futuristic narrative. 

For dense data and long-form body copy, **Inter** is employed. Its utilitarian nature and exceptional x-height ensure clarity in complex dashboard environments. Headlines should leverage tight letter spacing and bold weights to command authority, while labels use all-caps and increased tracking to differentiate them from functional UI text.

## Layout & Spacing

This design system adheres to a rigorous **12-column fluid grid** system built on a 4px baseline. Layouts should prioritize ample negative space to allow the "glow" of components to breathe without creating visual noise.

Margins and gutters are standardized at 24px for desktop views to maintain a spacious, professional feel. Structural elements (containers) should use the `xl` spacing for vertical rhythm to separate distinct sections of the blockchain data flow. Components within cards use `md` padding as the default for a balanced density.

## Elevation & Depth

Depth is conveyed through **translucency and atmospheric perspective** rather than traditional drop shadows. The design system utilizes three distinct tiers of elevation:

1.  **Base (Level 0):** The midnight background (`#050D1A`).
2.  **Surface (Level 1):** Surface cards (`#0F1E35`) with a 1px border (`rgba(59, 130, 246, 0.15)`).
3.  **Floating (Level 2):** Modals and dropdowns utilizing a backdrop blur (12px to 20px) and a semi-transparent fill of the surface color. 

Interactive elements should feature a "Subtle Hover Glow." Upon hover, elements increase their border opacity and gain a faint outer glow using the primary accent color with a high blur radius (20px+) and very low opacity (0.1).

## Shapes

The shape language is a hybrid of geometric discipline and organic softness. While standard layout cards use a **0.5rem (Rounded)** corner radius to feel structured and architectural, interactive call-to-action elements (CTAs) utilize **Pill-shaped (Full)** rounding. This distinction helps the user instantly identify "containers" versus "actions." Small UI controls like checkboxes and input fields should maintain the 0.5rem radius for a consistent structural language.

## Components

-   **Buttons:** Primary CTAs are "rounded-full" and utilize the accent gradient. Secondary buttons use a transparent background with the `border_color` and primary text. On hover, all buttons should emit a soft glow matching their primary hue.
-   **Cards:** Features a "Glassmorphism" effect. Background is `#0F1E35` with a 1px border of `rgba(59, 130, 246, 0.15)`. For high-priority cards, apply a 10px backdrop blur to slightly reveal elements moving behind them.
-   **Inputs:** Fields are dark-filled with the surface color. The border transitions from the subtle blue to the solid primary accent on focus, accompanied by a soft inner glow.
-   **Chips/Tags:** Small, pill-shaped elements with a low-opacity background of the secondary accent (`#06B6D4` at 0.1 opacity) and solid secondary text.
-   **Blockchain Visuals:** Use "Pulse" indicators—small circular pips that utilize the primary accent with a repeating scale-and-fade animation to represent live network activity.
-   **Progress Bars:** Thin, 4px height tracks with the linear gradient used as the fill. The leading edge of the progress bar should have a small "light spark" glow.