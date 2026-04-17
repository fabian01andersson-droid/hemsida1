# DESIGN.md — BridgeToGrants Design System

## Vibe
Premium, trustworthy, modern European consultancy. Clean and professional with generous whitespace. Sophisticated but approachable. High-end B2B feeling without being cold or corporate. Strong focus on trust and clarity.

---

## Colors

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#2E75B6` | Primary brand blue — buttons, links, headings, active states |
| `primary-dark` | `#1B4D7E` | Accent blue — hover states, section backgrounds, emphasis |
| `primary-light` | `#E8F1FA` | Light blue tint — subtle backgrounds, tags, highlights |

### Success / CTA
| Token | Hex | Usage |
|---|---|---|
| `success` | `#38A169` | CTA buttons, success indicators, positive metrics |
| `success-dark` | `#2D8A56` | CTA hover state |
| `success-light` | `#E6F7EE` | Success background tint |

### Neutrals
| Token | Hex | Usage |
|---|---|---|
| `text-primary` | `#1A202C` | Headings, high-emphasis text |
| `text-body` | `#4A5568` | Body text, descriptions |
| `text-muted` | `#A0AEC0` | Captions, placeholders, secondary labels |
| `border` | `#E2E8F0` | Borders, dividers, input outlines |
| `bg-white` | `#FFFFFF` | Primary background |
| `bg-section` | `#F7FAFC` | Alternating section background |
| `bg-card` | `#FFFFFF` | Card surfaces |

### Semantic
| Token | Hex | Usage |
|---|---|---|
| `warning` | `#ECC94B` | Warnings, pending states |
| `error` | `#E53E3E` | Errors, destructive actions |
| `info` | `#2E75B6` | Informational — maps to primary |

---

## Typography

### Font Families
- **Headings:** `Manrope`, fallback `Inter`, `system-ui`, `sans-serif`
- **Body:** `Inter`, `system-ui`, `sans-serif`
- **Mono:** `JetBrains Mono`, `Fira Code`, `monospace` (code/data only)

### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| `h1` | 56px / 3.5rem | 800 (ExtraBold) | 1.1 | -0.02em |
| `h2` | 40px / 2.5rem | 700 (Bold) | 1.2 | -0.01em |
| `h3` | 28px / 1.75rem | 700 (Bold) | 1.3 | -0.005em |
| `h4` | 22px / 1.375rem | 600 (SemiBold) | 1.4 | 0 |
| `body-lg` | 18px / 1.125rem | 400 (Regular) | 1.7 | 0 |
| `body` | 16px / 1rem | 400 (Regular) | 1.7 | 0 |
| `body-sm` | 14px / 0.875rem | 400 (Regular) | 1.6 | 0 |
| `caption` | 12px / 0.75rem | 500 (Medium) | 1.5 | 0.02em |
| `overline` | 12px / 0.75rem | 700 (Bold) | 1.5 | 0.08em |

### Mobile Overrides
| Element | Mobile Size |
|---|---|
| `h1` | 36px / 2.25rem |
| `h2` | 28px / 1.75rem |
| `h3` | 22px / 1.375rem |

---

## Spacing

### Base Unit
`4px` — all spacing is a multiple of 4.

### Section Spacing
| Context | Value |
|---|---|
| Between major sections | `96px` (desktop) / `64px` (mobile) |
| Section inner padding | `80px 0` (desktop) / `48px 0` (mobile) |
| Container max-width | `1200px` |
| Container horizontal padding | `24px` (mobile) / `32px` (tablet) / `0` (desktop, centered) |

### Component Spacing
| Context | Value |
|---|---|
| Card padding | `32px` |
| Card gap (grid) | `24px` |
| Stack gap (vertical items) | `16px` |
| Inline gap (horizontal items) | `12px` |
| Form field gap | `20px` |
| Button internal padding | `12px 24px` (default) / `16px 32px` (large) |

---

## Border Radius

| Element | Radius |
|---|---|
| Buttons | `8px` |
| Cards | `12px` |
| Input fields | `8px` |
| Badges / tags | `6px` |
| Avatars | `50%` (circle) |
| Modals / dialogs | `16px` |
| Full-round pills | `9999px` |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift — inputs, small elements |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Cards at rest |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.10)` | Cards on hover, dropdowns |
| `shadow-xl` | `0 16px 48px rgba(0,0,0,0.12)` | Modals, floating panels |

---

## Component Styles

### Buttons
- **Primary:** `bg: #38A169`, `text: #FFFFFF`, `radius: 8px`, `font-weight: 600`, `shadow: shadow-sm`. Hover: `bg: #2D8A56`, `shadow: shadow-md`.
- **Secondary:** `bg: transparent`, `border: 1.5px solid #2E75B6`, `text: #2E75B6`, `radius: 8px`. Hover: `bg: #E8F1FA`.
- **Ghost:** `bg: transparent`, `text: #4A5568`. Hover: `bg: #F7FAFC`.
- **Sizes:** Default `h: 44px`, Large `h: 52px`, Small `h: 36px`.
- **Transition:** `all 200ms ease`.

### Cards
- `bg: #FFFFFF`, `border: 1px solid #E2E8F0`, `radius: 12px`, `padding: 32px`, `shadow: shadow-md`.
- Hover: `shadow: shadow-lg`, `border-color: #2E75B6` (subtle), `transform: translateY(-2px)`.
- Transition: `all 300ms ease`.

### Navigation (Navbar)
- `bg: #FFFFFF`, `border-bottom: 1px solid #E2E8F0`, `shadow: shadow-sm`.
- Sticky top, `height: 72px`, `z-index: 50`.
- Links: `text: #4A5568`, `font-weight: 500`. Active/hover: `text: #2E75B6`.
- Mobile: slide-in sheet from right, full-height.

### Sidebar (Dashboard)
- `bg: #1B4D7E`, `text: #FFFFFF`, `width: 260px`.
- Nav items: `padding: 12px 20px`, `radius: 8px`. Active: `bg: rgba(255,255,255,0.15)`.
- Collapsible on mobile (hamburger toggle).

### Inputs
- `height: 44px`, `border: 1.5px solid #E2E8F0`, `radius: 8px`, `padding: 0 16px`.
- Focus: `border-color: #2E75B6`, `ring: 3px solid #E8F1FA`.
- Error: `border-color: #E53E3E`.

### Badges / Tags
- `padding: 4px 12px`, `radius: 6px`, `font-size: 12px`, `font-weight: 600`.
- Variants: primary (`bg: #E8F1FA`, `text: #2E75B6`), success (`bg: #E6F7EE`, `text: #38A169`), neutral (`bg: #F7FAFC`, `text: #4A5568`).

### Metrics / Stats
- Large number: `font-size: 48px`, `font-weight: 800`, `color: #2E75B6`.
- Label below: `font-size: 14px`, `color: #A0AEC0`, `text-transform: uppercase`, `letter-spacing: 0.08em`.

---

## Motion / Transitions

| Context | Duration | Easing |
|---|---|---|
| Hover effects | `200ms` | `ease` |
| Card interactions | `300ms` | `ease` |
| Page transitions | `400ms` | `ease-in-out` |
| Scroll reveals | `600ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Micro-interactions | `150ms` | `ease` |

### Scroll Reveal Pattern
Elements enter with `opacity: 0`, `translateY: 20px` and animate to `opacity: 1`, `translateY: 0`.

---

## Layout Principles

1. **Mobile-first** — design for 375px, then scale up.
2. **Max content width** — `1200px`, centered.
3. **Grid** — 12-column on desktop, collapse to stacked on mobile.
4. **Generous whitespace** — minimum 80-100px between major sections on desktop.
5. **Alternating backgrounds** — alternate between `#FFFFFF` and `#F7FAFC` for visual rhythm.
6. **Card grids** — 3-column on desktop, 2 on tablet, 1 on mobile. Gap: `24px`.

---

## Accessibility (WCAG AA)

- All text meets 4.5:1 contrast ratio against its background.
- Focus indicators: visible `3px` ring in `#2E75B6` on all interactive elements.
- Touch targets: minimum `44px` height/width.
- Semantic HTML: proper heading hierarchy, landmarks, ARIA labels.
- Keyboard navigable: all interactive elements reachable via Tab.
- Reduced motion: respect `prefers-reduced-motion` — disable scroll reveals and transitions.
- Alt text on all images. Decorative images use `aria-hidden`.
