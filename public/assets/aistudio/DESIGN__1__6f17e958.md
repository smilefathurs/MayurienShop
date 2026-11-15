---
name: Pastel Pop Brutalism Dark
colors:
  surface: '#131319'
  surface-dim: '#131319'
  surface-bright: '#393840'
  surface-container-lowest: '#0d0e14'
  surface-container-low: '#1b1b22'
  surface-container: '#1f1f26'
  surface-container-high: '#292931'
  surface-container-highest: '#34343b'
  on-surface: '#e4e1eb'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e4e1eb'
  inverse-on-surface: '#303037'
  outline: '#948e9b'
  outline-variant: '#494550'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#381f6e'
  primary-container: '#b39af0'
  on-primary-container: '#452e7c'
  inverse-primary: '#6850a0'
  secondary: '#ffb0cd'
  on-secondary: '#591637'
  secondary-container: '#762d4e'
  on-secondary-container: '#f799bd'
  tertiary: '#aac7ff'
  on-tertiary: '#002f65'
  tertiary-container: '#7fa8f1'
  on-tertiary-container: '#003b7c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#230259'
  on-primary-fixed-variant: '#4f3886'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cd'
  on-secondary-fixed: '#3e0021'
  on-secondary-fixed-variant: '#762d4e'
  tertiary-fixed: '#d7e3ff'
  tertiary-fixed-dim: '#aac7ff'
  on-tertiary-fixed: '#001b3e'
  on-tertiary-fixed-variant: '#104688'
  background: '#131319'
  on-background: '#e4e1eb'
  surface-variant: '#34343b'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Epilogue
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Epilogue
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Nunito Sans
    fontSize: 13px
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
    letterSpacing: 0.04em
  numeric-price:
    fontFamily: Nunito Sans
    fontSize: 18px
    fontWeight: '800'
    lineHeight: 24px
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
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system synthesizes the structural punch of neobrutalism with a plush, pastel-infused dark palette. It avoids the harsh starkness of classic black-and-white brutalism by leveraging rich charcoal surfaces, tactile offset drop shadows, thick structural borders, and electric pastel accents.

The emotional tone is assertive yet playful, arcade-adjacent, and contemporary. Bold structural borders give high-density layouts firm architectural integrity, while pill-softened corners and pastel candy highlights soften interactions into approachable, tactile moments.

## Colors
The color architecture relies on a deep muted charcoal foundation accented by high-contrast pastel focal points.

- **Canvas & Surfaces:**
  - Base Background: `#202027`
  - Cards & Primary Containers: `#2C2A35`
  - Surface High (Hover states, elevated popovers): `#353340`
  - Surface Low (Recessed panels, input wells): `#25242D`
- **Text & Foreground:**
  - High-emphasis Text: `#F5F3F7`
  - Muted / Supporting Labels: `#A9A4B5`
- **Linework & Framing:**
  - Standard Outlines: `#4E4958` (interior dividers, quiet edges)
  - Bold Structural Borders: `#696273` (card perimeters, input edges, interactive targets)
- **Pastel Accents & Roles:**
  - Primary (`#B39AF0` - Lavender): Primary CTA surfaces, dominant active states, focused indicators.
  - Secondary (`#FF9FC4` - Bubblegum): Destructive highlights, secondary interactive tags, energetic accents.
  - Interactive (`#8CB5FF` - Sky Blue): Information chips, links, secondary action items.
  - Badges & Notices (`#F6D56A` - Warm Pop Yellow): Status pips, discount tags, currency emphasis, ratings.

## Typography
Headings rely on a heavy, geometric sans display treatment with soft contours, while interface controls, metadata, and long-form copy use Nunito Sans for open counterforms and high legibility against dark slate.

- Apply tabular lining figures (`font-variant-numeric: tabular-nums`) globally to currency, pricing tiers (IDR), counts, and data tables.
- All button labels and badge tags apply `label-md` or `label-lg` with tight tracking and uppercase or bold title-casing to emphasize structural punch.

## Layout & Spacing
A fluid 12-column grid system drives desktop viewport organization, collapsing down to 8 columns on tablet and 4 columns on mobile. 

Layout rhythm adheres strictly to an 8px base spacing grid (`0.5rem` steps):
- **Outer Shell:** Compact screen margins start at `1rem` on mobile, scaling up to `2.5rem` on desktop viewport edges to preserve a focused application canvas.
- **Gutters:** Standardized to `1rem` on compact displays, widening to `1.5rem` across desktop multi-column layouts.
- **Card Spacing:** Use `space-md` (`1rem`) internally for compact cards and `space-lg` (`1.5rem`) for standard cards to accommodate thick boundaries and drop shadows without clutter.

## Elevation & Depth
Elevation abandons soft blurred shadows in favor of crisp, hard-offset neobrutalist projection blocks.

- **Primary Shadow Token:** `3px 3px 0 #121216` (or `#0D0D10` for maximum contrast against base background).
- **Interactive State Projection:**
  - **Resting:** Element features standard border (`#696273`) with a `3px 3px 0 #121216` projection.
  - **Hover:** The projection increases to `4px 4px 0 #121216`, with the element translating `-1px, -1px`.
  - **Active / Pressed:** The shadow collapses entirely (`0px 0px 0 #121216`), and the element translates `+3px, +3px` along both axes, delivering physical button-push feedback.
- **Modal & Popover Layers:** Pushed further with an elevated offset: `6px 6px 0 #0D0D10` coupled with a solid 2px outline.

## Shapes
Shapes strike a careful balance between brutalism's rigid frames and playful curves. Corner geometry stays uniformly within an 8px to 16px threshold:
- Input fields, small chips, checkboxes, and buttons: `8px` (`roundedness: 2` base).
- Structural containers, cards, and modal dialogs: `12px` to `16px`.
- High-contrast pill badges or floating action icons: Fully circular or capped pills (`9999px`) where intentional contrast against rectangular blocks is required.

## Components

### Buttons
- **Primary:** Filled in `#B39AF0` with `#202027` text, solid 2px `#696273` border, and `3px 3px 0 #121216` offset shadow. On click, translates down-right by 3px with zero shadow.
- **Secondary:** Surface fill `#2C2A35` with `#F5F3F7` text, 2px `#696273` border, and `3px 3px 0 #121216` shadow. On hover, background shifts to `#353340`.
- **Accent / Special:** Filled in `#FF9FC4` or `#8CB5FF` with dark `#202027` text for high-impact actions.

### Cards & Panels
- Constructed with `#2C2A35` background, enclosed with a 2px `#696273` or `#4E4958` outline.
- Anchored by standard `3px 3px 0 #121216` bottom-right offset shadow.
- Header bands can optionally leverage alternating pastel borders or filled header strips (`#25242D`).

### Form Inputs & Text Fields
- Container fill: `#25242D` (inset / recessed look).
- Border: 2px `#4E4958` default, moving to 2px `#B39AF0` with an active `2px 2px 0 #121216` shadow upon focus.
- Placeholder text: `#A9A4B5`. Input value text: `#F5F3F7`.

### Chips & Badges
- **Status / Currency (IDR):** Background `#F6D56A`, text `#202027`, 1.5px border `#121216`, pill or 8px roundedness.
- **Category Chips:** Background `#2C2A35`, text `#A9A4B5`, border 1.5px `#4E4958`. Active chips toggle to `#8CB5FF` background with `#202027` text and 2px `#121216` drop shadow.

### Checkboxes & Radios
- Size: 20px x 20px box with 4px corner radius (checkbox) or circle (radio).
- Default: `#25242D` fill, 2px `#696273` border.
- Checked: `#B39AF0` fill, `#202027` checkmark glyph, 2px `#121216` border with a crisp `2px 2px 0 #121216` offset shadow.