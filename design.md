# Design System Inspired by Podium

## 1. Visual Theme & Atmosphere

Podium's design system embodies a bold, minimalist aesthetic rooted in high-contrast elegance and cinematic simplicity. The visual language centers on a pure monochromatic palette—stark black and pristine white—that evokes luxury, clarity, and creative sophistication. This refined approach strips away visual noise to allow content—particularly video, photography, and typography—to command full attention. The system thrives on generous whitespace, oversized typography, and dramatic simplicity, reflecting the premium creative services Podium delivers to sports brands globally. The absence of color gradients or decorative elements reinforces a modern, forward-thinking posture that prioritizes substance over ornament.

**Key Characteristics**
- High-contrast monochromatic foundation (black and white only)
- Oversized, boldface typography as primary visual driver
- Generous whitespace and negative space throughout
- Zero border radius—all elements sharp and geometric
- Minimal padding and no decorative shadows
- Text-based navigation and minimal UI chrome
- Cinematic, editorial aesthetic suitable for media-rich content
- Luxury minimalism with no visual clutter

## 2. Color Palette & Roles

### Primary
- **Black** (`#000000`): Core brand color for text, headings, interactive elements, and navigation on light backgrounds. Establishes authority and contrast.
- **White** (`#FFFFFF`): Primary background and text color on dark sections. Creates breathing room and visual hierarchy.

### Neutral Scale
- **Light Gray** (`#D9D9D9`): Subtle dividers, borders, and secondary background elements. Used sparingly for visual separation.
- **Medium Gray** (`#CACACA`): Tertiary border and disabled state indicator. Provides visual softness without compromising contrast.

### Interactive
- **Black Text on White** (`#000000` on `#FFFFFF`): Primary call-to-action text and links in light contexts.
- **White Text on Black** (`#FFFFFF` on `#000000`): Primary call-to-action text and links in dark contexts.

### Surface & Borders
- **White Background** (`#FFFFFF`): Default content surface.
- **Black Background** (`#000000`): Dark section and hero backgrounds.
- **Light Divider** (`#D9D9D9`): Subtle separation between content blocks.

## 3. Typography Rules

### Font Family
**Primary Font:** Futura, sans-serif (fallback: Arial, Helvetica, system-ui)
**Secondary Font:** Futura, sans-serif (same family used throughout; no secondary alternative)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / Hero | Futura | 67.5px | 700 | 60.75px | 0px | Large-scale button and heading text; commands attention |
| Heading 2 | Futura | 61.984px | 700 | 55.786px | 0px | Major section headings and titles |
| Heading 3 | Futura | 24px | 700 | 24px | 0px | Subsection headings and secondary titles |
| Link / CTA | Futura | 21.15px | 700 | 21.15px | 0px | Navigation links and inline call-to-action text |
| Body Text | Futura | 14px | 400 | 14px | 0px | Default paragraph and navigation text |
| Caption / Meta | Futura | 10px | 400 | 15px | 0px | Small labels, timestamps, and supplementary text |

### Principles
- Single typeface family (Futura) enforces visual unity and eliminates font mixing complexity.
- Weight contrast (700 bold vs. 400 regular) drives hierarchy without size variation alone.
- Generous line heights provide breathing room and readability despite high contrast.
- Zero letter spacing maintains geometric precision and modern aesthetic.
- Oversized display sizes (67.5px, 61.984px) prioritize visual impact and luxury positioning.

## 4. Component Stylings

### Buttons

**Primary Button (Large Display)**
- `background-color`: `rgba(0, 0, 0, 0)` (transparent)
- `color`: `#FFFFFF`
- `font-family`: Futura
- `font-size`: `67.5px`
- `font-weight`: `700`
- `line-height`: `60.75px`
- `padding`: `0px`
- `border`: `0px solid #FFFFFF`
- `border-radius`: `0px`
- `box-shadow`: `none`
- `height`: `auto`
- `width`: `auto`
- **Hover State:** Increase opacity to 0.8, maintain color.
- **Active State:** Decrease opacity to 0.6.
- **Notes:** Text-only, no background fill. Used for hero CTAs.

**Secondary Button (Small)**
- `background-color`: `rgba(0, 0, 0, 0)` (transparent)
- `color`: `#000000`
- `font-family`: Futura
- `font-size`: `14px`
- `font-weight`: `700`
- `line-height`: `14px`
- `padding`: `0px`
- `border`: `0px solid #000000`
- `border-radius`: `0px`
- `box-shadow`: `none`
- `height`: `14px`
- `width`: auto
- **Hover State:** Opacity 0.8.
- **Active State:** Opacity 0.6.
- **Notes:** Text-only navigation and control buttons. No stroke or fill.

### Cards & Containers

**Portfolio Card**
- `background-color`: `rgba(0, 0, 0, 0)` (transparent)
- `color`: `#FFFFFF`
- `font-family`: Futura
- `font-size`: `10px`
- `font-weight`: `400`
- `line-height`: `15px`
- `padding`: `0px`
- `border`: `0px solid #FFFFFF`
- `border-radius`: `0px`
- `box-shadow`: `none`
- `height`: `321.406px` or `246.219px` (variable)
- `width`: `330.828px`
- **Content Structure:** Image/video overlay with caption text. Text positioned absolutely over media.
- **Hover State:** Opacity shift on text, subtle zoom on image (scale: 1.02).
- **Notes:** No padding; content floats freely within defined dimensions.

**Section Container**
- `background-color`: `#FFFFFF` or `#000000` (alternating)
- `padding`: `116px` to `124px` (top/bottom), `84px` to `120px` (left/right)
- `border-radius`: `0px`
- `border`: none
- `box-shadow`: `none`
- **Notes:** Massive padding creates generous whitespace. No visible borders or shadows.

### Inputs & Forms

**Text Input / Form Field**
- `background-color`: `#FFFFFF`
- `border`: `1px solid #D9D9D9`
- `border-radius`: `0px`
- `padding`: `12px` to `24px`
- `font-family`: Futura
- `font-size`: `14px`
- `color`: `#000000`
- `box-shadow`: `none`
- **Focus State:** `border-color: #000000`, `outline: none`.
- **Placeholder:** `color: #CACACA`, `font-weight: 400`.

### Navigation

**Top Navigation Bar**
- `background-color`: `rgba(0, 0, 0, 0)` (transparent)
- `color`: `#000000`
- `font-family`: Futura
- `font-size`: `10px`
- `font-weight`: `400`
- `line-height`: `15px`
- `padding`: `0px`
- `border`: `none`
- `border-radius`: `0px`
- `box-shadow`: `none`
- **Link Spacing:** `32px` between items (gap).
- **Hover State:** `opacity: 0.7`, text underline optional.
- **Active State:** Slight opacity boost or underline indicator.
- **Notes:** Minimal, text-only. No icons or decorative elements.

### Links

**Inline Link (Large)**
- `background-color`: `rgba(0, 0, 0, 0)` (transparent)
- `color`: `#FFFFFF` (on dark background) or `#000000` (on light background)
- `font-family`: Futura
- `font-size`: `21.15px`
- `font-weight`: `700`
- `line-height`: `21.15px`
- `padding`: `0px`
- `border`: `0px solid` (matching text color)
- `border-radius`: `0px`
- `box-shadow`: `none`
- **Hover State:** `opacity: 0.7`, optional subtle underline.
- **Active State:** `opacity: 0.5`.

## 5. Layout Principles

### Spacing System

**Base Unit:** `8px`

**Scale:**
- `4px` — Micro margins between inline elements
- `8px` — Tight spacing within components
- `12px` — Input padding and form spacing
- `16px` — Component internal padding
- `24px` — Card/section padding
- `32px` — Gap between navigation items and moderate column spacing
- `48px` — Large gap between content sections
- `56px` — Extra-large gap for visual separation
- `84px` — Horizontal section padding
- `116px`, `120px`, `124px` — Massive vertical section padding for hero and full-bleed blocks

**Usage Context:**
- Micro spacing (`4px`, `8px`) for typography, form inputs, and icon alignment.
- Medium spacing (`24px`, `32px`) for component internals and moderate separations.
- Large spacing (`84px` and above) for section demarcation and whitespace dominance.

### Grid & Container

**Max Width:** No hard max-width constraint; full-bleed design on all screens.

**Column Strategy:** Flexible grid based on content type:
- Hero sections: Single-column, full width.
- Portfolio grids: 3-column layout on desktop, collapsing to 1–2 columns on tablet and mobile.
- Text sections: 1–2 columns for readability.

**Section Patterns:**
- Full-bleed colored sections (`#FFFFFF` or `#000000`) with alternating backgrounds.
- Generous internal padding (`116px–124px` vertical) to create breathing room.
- No constrained container; content spans edge-to-edge.

### Whitespace Philosophy

The design system treats whitespace as a primary design element. Large padding blocks, minimal text per section, and strategic use of negative space create a luxury, editorial aesthetic. Whitespace breathing allows oversized typography and media to dominate without visual clutter. No dense layouts or cramped spacing; every element enjoys ample room.

### Border Radius Scale

- `0px` — All components, buttons, inputs, cards, and containers use square corners exclusively. Zero radius enforces geometric precision and modern minimalism.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow; `box-shadow: none` | All primary components: buttons, cards, navigation, inputs. Default elevation. |
| Hover (Level 1) | Subtle opacity shift only; `box-shadow: none`, `opacity: 0.8–0.9` | Interactive elements on hover; no shadow added. |
| Active (Level 2) | Opacity reduction; `opacity: 0.6–0.7` | Pressed buttons, active navigation states. |

**Shadow Philosophy:**

The design system eschews all drop shadows, box shadows, and elevation effects. Depth is communicated purely through color contrast (black/white), opacity shifts, and scale changes. This flat, geometric approach reinforces the minimalist, editorial aesthetic and maintains visual clarity without layering complexity. Hover and active states rely on opacity changes rather than shadow effects.

## 7. Do's and Don'ts

### Do
- Use bold, oversized Futura typography (67.5px, 61.984px) for hero and heading sections to command visual attention.
- Maintain strict high-contrast black-and-white color usage; avoid introducing additional colors.
- Employ generous whitespace and padding (116px+) between major sections to create luxury breathing room.
- Keep all border radius values at `0px` for sharp, geometric aesthetics.
- Use opacity shifts (0.6–0.9) for interactive hover and active states instead of color changes or shadows.
- Alternate section backgrounds (`#FFFFFF` and `#000000`) to create visual rhythm and separation.
- Apply text-only buttons and links with no fill or excessive decoration.
- Use `#D9D9D9` or `#CACACA` sparingly for subtle dividers and secondary elements only.

### Don't
- Introduce colors beyond the monochromatic palette (`#000000`, `#FFFFFF`, `#D9D9D9`, `#CACACA`).
- Apply border radius values greater than `0px`; maintain sharp corners exclusively.
- Add drop shadows, box shadows, or elevation effects; rely on flat geometry and opacity.
- Crowd layouts with dense text or multiple UI elements; prioritize whitespace.
- Mix typefaces; Futura is the sole font family throughout.
- Use animated transitions longer than 300ms; keep interactions snappy.
- Apply padding less than `12px` on major sections; maintain generosity.
- Decorate buttons or links with underlines, borders, or background fills by default; use text-only styling.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width | Key Changes |
|-----------------|-------|-------------|
| Desktop | 1920px and above | Full 3-column portfolio grid; 116px–124px section padding; oversized typography at full scale |
| Tablet | 768px to 1919px | 2-column portfolio grid; 84px section padding; typography scaled down 10–15% |
| Mobile | Below 768px | 1-column layout; 48px–56px section padding; typography scaled down 20–30%; stacked navigation |

### Touch Targets

- **Minimum Touch Target Size:** `44px × 44px` for buttons and interactive links.
- **Spacing Between Targets:** At least `8px` between adjacent interactive elements to prevent accidental activation.
- **Text Link Targets:** Minimum `21.15px` font size with `8px` padding on sides for comfortable tapping.

### Collapsing Strategy

- **Hero Typography:** Reduce display button size from `67.5px` (desktop) to `48px` (tablet) to `32px` (mobile).
- **Section Padding:** Scale vertically from `124px` (desktop) → `84px` (tablet) → `48px` (mobile); maintain minimum `24px` horizontal padding.
- **Portfolio Grid:** 3-column (desktop) → 2-column (tablet) → 1-column (mobile); adjust card width to `100%` on mobile.
- **Navigation:** Horizontal text menu (desktop) → Hamburger menu with vertical drawer (mobile); maintain `10px` font size.
- **Spacing Gaps:** Scale gap values proportionally: `32px` (desktop) → `24px` (tablet) → `16px` (mobile).

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** White (`#FFFFFF`) on Black background or Black (`#000000`) on White background
- **Background:** White (`#FFFFFF`) or Black (`#000000`), alternating per section
- **Heading Text:** Black (`#000000`) on white; White (`#FFFFFF`) on black
- **Body Text:** Black (`#000000`) on white; White (`#FFFFFF`) on black
- **Dividers:** Light Gray (`#D9D9D9`)
- **Disabled / Secondary:** Medium Gray (`#CACACA`)

### Iteration Guide

1. **Start monochromatic:** Use only `#000000`, `#FFFFFF`, `#D9D9D9`, and `#CACACA`. No additional colors.
2. **Maximize whitespace:** Apply at least `116px` top/bottom padding to major sections; never constrain content tightly.
3. **Oversized typography:** Set hero buttons to `67.5px`, headings to `61.984px`, and body to `14px` minimum; prioritize scale over density.
4. **Zero border radius:** All elements—buttons, cards, inputs, containers—use `border-radius: 0px` exclusively.
5. **Text-only components:** Buttons and links default to transparent background (`rgba(0, 0, 0, 0)`) with no stroke; add visual styling via opacity changes on hover/active.
6. **No shadows:** Discard all `box-shadow` values; use opacity and color contrast for depth and hierarchy.
7. **Futura font only:** Single typeface throughout; fallback to Arial, Helvetica, or system-ui if unavailable.
8. **High contrast:** Ensure minimum 7:1 WCAG AA contrast ratio between text and background; maintain black-on-white or white-on-black dominant pattern.
9. **Responsive scaling:** Reduce typography and padding by 10–20% on tablet; reduce by 20–30% on mobile. Collapse grids from 3 → 2 → 1 column.
10. **Opacity for interactivity:** Hover states use `opacity: 0.7–0.8`; active states use `opacity: 0.6`; avoid color or shadow changes.