---
name: Pastel Pop Brutalism
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#494551'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#7a7582'
  outline-variant: '#cbc4d3'
  surface-tint: '#6a4da9'
  primary: '#674ba7'
  on-primary: '#ffffff'
  primary-container: '#8064c2'
  on-primary-container: '#fffbff'
  inverse-primary: '#d1bcff'
  secondary: '#9b3e64'
  on-secondary: '#ffffff'
  secondary-container: '#fe8eb7'
  on-secondary-container: '#792248'
  tertiary: '#725c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#caa82c'
  on-tertiary-container: '#4e3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eaddff'
  primary-fixed-dim: '#d1bcff'
  on-primary-fixed: '#24005b'
  on-primary-fixed-variant: '#513490'
  secondary-fixed: '#ffd9e3'
  secondary-fixed-dim: '#ffb0ca'
  on-secondary-fixed: '#3e001f'
  on-secondary-fixed-variant: '#7d264c'
  tertiary-fixed: '#ffe081'
  tertiary-fixed-dim: '#e8c346'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#564500'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-hero:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Quicksand
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
  currency-price:
    fontFamily: Nunito Sans
    fontSize: 16px
    fontWeight: '800'
    lineHeight: 22px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system blends **Playful Minimalism** with **Subtle Neobrutalism** to create an approachable, high-spirited shopping environment for Indonesian Gen Z and millennial stationery enthusiasts. The experience captures the joy of unboxing charming desk accessories, bullet journal supplies, and lifestyle gifting items.

### Personality & Emotional Response
- **Vibrant & Whimsical:** Uses tactile pastel pop color blocks, clean white spaces, and distinct graphic delineations.
- **Friendly & Casual:** Driven by cheerful Indonesian microcopy, welcoming tone, and playful badges ("Little Things, Big Happiness!").
- **Grounded & Tactile:** Incorporates crisp 1px borders paired with physical, stamp-like hard offset drop shadows that make buttons and cards feel pressable and tangible.
- **Uncluttered & Clear:** High legibility, generous breathing room, structured grid rhythm, and tidy tabular price displays avoid visual overwhelm.

## Colors

The color palette centers on soft yet saturated candy tones balanced by crisp dark structural ink lines and pure backdrop surfaces.

### Functional Palette Mapping
- **Primary (`#9B7EDE` | Dark: `#B39AF0`):** Core brand actions, prime CTAs, cart highlights, and active tab indicators.
- **Secondary (`#FF8FB8` | Dark: `#FF9FC4`):** Wishlist hearts, celebratory sale callouts, secondary tags, and promo banners.
- **Tertiary Accent / Badge (`#FFD95A`):** New arrivals, "Best Seller" badges, limited-run product markers, and flash sale ribbons.
- **Interactive Blue (`#5B8DEF`):** Order status indicators, shipping trackers, informational tooltips, and interactive hyperlinks.
- **Neutral Dark / Ink (`#171717`):** Primary typography, high-contrast outlines, hard drop-shadows, and iconography in light mode.
- **Light Surfaces:** Base Canvas `#FFFFFF`, Neutral Card Fill `#F8F7FB`, Border/Divider Line `#171717`, Muted Gray `#E5E5E5`.
- **Dark Mode Surfaces:** Base Canvas `#202027`, Neutral Card Fill `#2C2A35`, Primary Text `#F5F3F7`, Structural Borders `#696273`, Muted Borders `#3B3945`.

## Typography

The typographic hierarchy pairs the soft, rounded warmth of **Quicksand** for display headers and titles with the clean geometric clarity of **Nunito Sans** for transactional copy, descriptions, navigation, and badges.

### Typographic Implementation Rules
- **Numerics & Pricing:** All monetary expressions (`Rp 45.000`, `Rp 129.000`) must activate OpenType tabular numbers (`font-variant-numeric: tabular-nums; font-feature-settings: "tnum" 1;`) to ensure orderly vertical scannability across cart summaries, product grids, and checkout invoices.
- **Headlines:** Display and Headline styles should be set in sentence case to sustain an informal, welcoming tone.
- **Copy Tone:** Headings and promotional callouts leverage breezy, cheerful colloquial Indonesian microcopy (e.g., *"Yuk intip koleksi baru!", "Checkout sekarang biar meja kerjamu makin estetik"*).

## Layout & Spacing

The layout operates on a standard fluid grid with maximum container constraints to deliver an airy, catalog-like browsing flow.

### Grid & Breakpoints
- **Mobile (0 - 639px):** 4-column layout, `margin: 1rem` (16px), `gutter: 1rem` (16px). Product listings default to a compact 2-column card arrangement.
- **Tablet (640px - 1023px):** 8-column layout, `margin: 2rem` (32px), `gutter: 1.25rem` (20px). Suitable for 3-column product showcase grids and split-pane cart drawers.
- **Desktop (1024px+):** 12-column layout, max-width `1280px`, `margin: 3rem` (48px) centered, `gutter: 1.5rem` (24px). Accommodates 4-column product matrices, sticky filter sidebars, and hero campaign carousels.

### Spacing Principles
- Consistent use of 8px baseline increments (`0.25rem`, `0.5rem`, `1rem`, `1.5rem`, `2.5rem`).
- Internal component pads stay snug (`space-sm` to `space-md`) to balance the tactile neobrutalist containment, while exterior sectional gaps scale up to `space-xl` for optimal breathing room.

## Elevation & Depth

This design system avoids traditional soft Gaussian drop shadows and blurry light cones. Instead, it relies on crisp, structural neobrutalist offset shadows and layered solid surfaces to communicate elevation and affordance.

### Hard Offset Shadow Rules
- **Standard Interactive Elements (Buttons, Inputs, Product Cards):**
  - Light Mode: `3px 3px 0px #171717`
  - Dark Mode: `3px 3px 0px #696273`
- **Featured Panels & Hero Banner Cards:**
  - Light Mode: `5px 5px 0px #171717`
  - Dark Mode: `5px 5px 0px #696273`
- **Small Chips & Badges:**
  - Light Mode: `2px 2px 0px #171717`
  - Dark Mode: `2px 2px 0px #696273`

### Depth States & Transitions
- **Resting:** Element features standard border and default offset shadow.
- **Hover:** The offset shadow expands slightly (e.g., from `3px 3px` to `4px 4px 0px #171717`) while translating `translate(-1px, -1px)`.
- **Active / Pressed:** The shadow collapses to `0px 0px 0px #171717`, and the element translates down `translate(3px, 3px)` to deliver a punchy, mechanical key-press feel.

## Shapes

The geometric signature is defined by combining friendly, generous rounded corners with stark 1px architectural outlines. This softens the aggressive tone typically associated with brutalism, yielding a safe, kawaii-adjacent aesthetic.

### Corner Radius Hierarchy
- **Buttons, Text Inputs, Segmented Tabs:** `8px` (`0.5rem`)
- **Product Listing Cards, Modal Dialogs:** `12px` (`0.75rem`)
- **Category Tiles & Navigation Bubbles:** `16px` (`1rem`)
- **Hero Promo Banners, Discount Panels:** `20px` (`1.25rem`)
- **Pills, Quantifiers, and Mini Badges:** `9999px` (Fully rounded pills)

### Stroke Configuration
All structural boundaries carry a consistent `1px solid #171717` (light mode) or `1px solid #696273` (dark mode). Borders must not be omitted, as they establish essential figure-ground separation against pastel tinted backgrounds.

## Components

### Buttons
- **Primary Button:** Background `#9B7EDE`, text `#FFFFFF`, border `1px solid #171717`, border-radius `8px`, shadow `3px 3px 0 #171717`. Active state shifts element down `3px 3px` with shadow flattened.
- **Secondary Button:** Background `#FF8FB8`, text `#171717`, border `1px solid #171717`, border-radius `8px`, shadow `3px 3px 0 #171717`.
- **Ghost/Tertiary Button:** Background `transparent`, text `#171717`, border `1px solid #171717`, shadow `none`, with hover state filling into `#F8F7FB` with `2px 2px 0 #171717`.

### Product Cards
- **Structure:** Surface background `#F8F7FB` (light) or `#2C2A35` (dark), border `1px solid #171717`, border-radius `12px`, shadow `3px 3px 0 #171717`.
- **Image Area:** Nested container with `border-bottom: 1px solid #171717`, aspect ratio `1:1`, soft pastel background backplate.
- **Wishlist Trigger:** Floating circular button top-right, size `36x36px`, rounded `9999px`, background `#FFFFFF`, border `1px solid #171717`, containing secondary pink heart icon.
- **Price Tag:** Rendered using `currency-price` token with tabular numbers (e.g., `Rp 35.000`).

### Badges & Chips
- **Category Chips:** Pill-shaped (`rounded: 9999px`), background `#FFFFFF`, border `1px solid #171717`, shadow `2px 2px 0 #171717`. Selected state switches background to `#9B7EDE` with white text.
- **Status Badges:** Compact pill or `rounded: 6px`, border `1px solid #171717`. "Best Seller" uses `#FFD95A`; "New" uses `#FF8FB8`; "Ready Stock" uses `#5B8DEF`.

### Input Fields & Controls
- **Search & Text Inputs:** Height `44px`, background `#FFFFFF`, border `1px solid #171717`, border-radius `8px`, shadow `2px 2px 0 #171717`. Focus state rings with a `2px solid #9B7EDE` inner highlight while preserving the outer dark border.
- **Quantity Selector:** Pill or rounded `8px` container featuring minus/plus icon buttons isolated by internal `1px` vertical borders and a central tabular digit display.
- **Checkboxes & Radios:** `20x20px`, border `1.5px solid #171717`, shadow `1.5px 1.5px 0 #171717`. Checked states fill with `#9B7EDE` and display a crisp white checkmark or dot.

### Specialized Commerce Components
- **Voucher / Promo Code Banner:** Scalloped or dashed perimeter styling with `border: 1px dashed #171717`, background `#FFD95A`, with quick copy-to-clipboard button.
- **Cart Sticky Drawer:** Solid off-white canvas with a thick top border `2px solid #171717` and a bottom summary panel utilizing clear price breakdown rows.