# Carve Design System

> Paste into your CLAUDE.md or reference with: All UI must follow /docs/DESIGN-SYSTEM.md

---

## Philosophy

Premium AI product. Sleek, readable, alive. Dark surfaces with high-contrast text and selective luminance on accents. Readability is non-negotiable — every label, every number, every description must be effortless to read at a glance.

**Reference products:** Riff.ai, Vercel Dashboard, Linear, Stripe Radar, Superhuman.
**Core rule:** If you squint and can't read it, the contrast is too low. Fix it.

---

## Colors

```
/* Backgrounds — gentle progression, never pure black */
--bg-root:       #08090C      /* Deepest */
--bg-app:        #0C0D11      /* App chrome / sidebar */
--bg-card:       #121318      /* Card default */
--bg-card-hover: #171820      /* Card hover */
--bg-elevated:   #1C1D26      /* Dropdowns, popovers, elevated surfaces */
--bg-wash:       #22232E      /* Progress bar tracks, subtle fills */

/* Text — HIGH CONTRAST, four clear levels */
--text-primary:   #F4F4F6     /* Headings, product names, scores, values */
--text-secondary: #B0B1BE     /* Body text, descriptions, nav labels */
--text-tertiary:  #7C7D8E     /* Timestamps, hints, column headers */
--text-muted:     #505168     /* Disabled, decorative — ONLY level that can be hard to read */

/* Accent — Electric Blue */
--blue:          #5B9AFF
--blue-hover:    #4A87F0
--blue-glow:     rgba(91, 154, 255, 0.15)
--blue-bg:       rgba(91, 154, 255, 0.10)

/* Violet — AI / premium indicators only */
--violet:        #9B7AFF
--violet-bg:     rgba(155, 122, 255, 0.12)

/* Semantic — bright enough to pop on dark */
--green:         #4ADE80    /* Score >= 4 */
--green-bg:      rgba(74, 222, 128, 0.10)
--green-border:  rgba(74, 222, 128, 0.22)

--yellow:        #FACC15    /* Score 2.5-3.9 */
--yellow-bg:     rgba(250, 204, 21, 0.10)
--yellow-border: rgba(250, 204, 21, 0.22)

--red:           #F87171    /* Score < 2.5 */
--red-bg:        rgba(248, 113, 113, 0.10)
--red-border:    rgba(248, 113, 113, 0.22)

/* Borders — visible enough to define edges */
--border-subtle:  rgba(255,255,255,0.06)
--border-default: rgba(255,255,255,0.10)
--border-strong:  rgba(255,255,255,0.16)
```

### Contrast Rules
- **text-primary (#F4F4F6)** on bg-card (#121318) = ~12:1 contrast. Use for all important text.
- **text-secondary (#B0B1BE)** on bg-card = ~7.5:1. Use for body, descriptions, sidebar labels.
- **text-tertiary (#7C7D8E)** on bg-card = ~4.2:1. Use for timestamps, column headers, hints.
- **NEVER use text-muted (#505168) for anything the user needs to read.** It's decorative only.
- Card backgrounds (#121318) must be visibly distinct from the page (#08090C). If cards blend into the page, the hierarchy breaks.

---

## Typography

**Body:** "Inter", system-ui, sans-serif
**Mono:** "JetBrains Mono", monospace — for SKUs, GTINs, API keys, field names

```
Display:    26px / 600-750 / -0.035em    /* Page titles */
Heading:    14-16px / 600-640            /* Section headers, card titles */
Body:       13-14px / 440-520            /* Default text, table cells */
Label:      11-12px / 600-650 / uppercase / 0.06-0.08em tracking  /* Functional UI labels and column headers */
Mono:       11.5px / 400-500             /* Technical identifiers */
```

### Rules
- All numbers: `font-variant-numeric: tabular-nums`
- Score numbers: colored by score, weight 680+
- Product names in tables: text-primary color, weight 520. These are the row's anchor.
- Nav items: text-secondary when inactive, text-primary when active or hovered.
- Do not default to a small uppercase “eyebrow” above a headline. It creates a repetitive template rhythm and weakens the headline.
- Let strong page and section headlines open the thought directly. Use a pre-headline only when it adds information the headline cannot carry, such as required product state or navigation context.
- Functional labels inside interfaces (field names, table headers, evidence states, SKUs) may remain compact or uppercase; do not style marketing slogans as interface metadata.
- Do not turn supporting marketing copy into a decorative micro-caption with a short line, dot, orb, or other visual prefix. If a sentence such as “Connect Shopify…” is important, write it into the body or a functional connection flow; otherwise remove it.

---

## Cards

Solid dark backgrounds, not glass/transparency. Clear borders.

```
Default:  bg: #121318, border: rgba(255,255,255,0.10), radius: 14px, padding: 20px
Hover:    bg: #171820, border: rgba(255,255,255,0.16)
```

- Cards must be visually distinct from the page background.
- No backdrop-blur on regular cards. Save blur for modals only.
- Glow (box-shadow in score/accent color) is used only on hero score cards and primary CTAs.
- One ambient radial gradient per page (very subtle, 4-5% opacity blue) for atmosphere.

---

## Buttons

```
Primary:    bg: #5B9AFF, hover: #4A87F0, text: white, glow: 0 0 14px rgba(91,154,255,0.15)
Secondary:  bg: #121318, hover: #1C1D26, text: secondary→primary on hover, border: default→strong
Ghost:      bg: transparent, hover: rgba(255,255,255,0.06), text: tertiary→primary on hover
```

- Primary buttons glow blue on hover (intensifies).
- All buttons have press state: scale(0.97) on mousedown.
- Radius: 6px. Padding: 7px 15px (default), 5px 12px (small).

---

## Tables

```
Wrapper:   Card component (bg-card, border-default, radius-lg, no padding)
Header:    bg-card, uppercase labels in text-tertiary, weight 650, letter-spacing 0.06em
Rows:      50px height, border-bottom: border-subtle, hover: bg-card-hover
Product:   text-primary, weight 520 (the row's anchor — must stand out)
SKU:       font-mono, text-tertiary
Score:     colored by score, weight 680, tabular-nums
```

- No vertical borders. Horizontal dividers only (border-subtle).
- Row action (chevron) appears on hover only (opacity 0→1).
- Table footer with count and pagination buttons.
- Sortable: active column header shifts to text-secondary, chevron direction changes.

---

## Score Display

The hero component. Must feel premium.

```
Card:       bg-card, border in score color (22% opacity), glow in score color
Number:     60px, weight 800, score color, text-shadow glow, counts up from 0 (850ms)
Bar:        7px tall, bg-wash track, score-color fill with gradient + glow
Sub-scores: grid layout (label / mini bar / number), staggered entrance animation
```

---

## Sidebar

```
Background: bg-app (#0C0D11), border-right: border-default
Width:      252px, sticky, full height
Active:     bg: blue-bg, text-primary, border-left: 2px blue, weight 600
Inactive:   text-secondary, hover: text-primary + rgba(255,255,255,0.04) bg
Icons:      16px, full opacity when active, 55% when inactive
```

- User avatar at bottom with initials, name, role.
- Search bar with ⌘K shortcut hint.
- "AI" badge on Optimizer nav item (violet).

---

## Motion

- Default transition: all 150-160ms ease
- Score count-up: 850ms, quartic ease-out
- Page entrance: fadeUp (opacity 0→1, translateY 5px→0, 320ms) with stagger on metric cards
- Bar fill: scaleX 0→1, 700-900ms, ease-out
- Hover: color/border shift only. No scale except buttons (press state).
- Toast: slideIn from right, 220ms

---

## AVOID

1. Low contrast text on dark backgrounds. If text-tertiary isn't readable, bump to secondary.
2. Pure black (#000000) backgrounds. Use #08090C minimum.
3. Backdrop-blur on cards. Cards are solid bg-card. Blur is for modals only.
4. Uniform glass opacity everywhere. Cards have defined solid backgrounds.
5. Gradient buttons. Solid or bordered only.
6. Emoji. Use Lucide icons.
7. Light mode. Dark only.
8. Animated backgrounds, particles, excessive shimmer.
9. More than one ambient page glow. One subtle radial is enough.
10. Overusing violet. Blue is the workhorse accent. Violet is rare (AI badges only).
11. Decorative marketing eyebrows above every H1 or H2, especially the repeated `CATEGORY → BIG STATEMENT` pattern.
12. Eyebrow-like helper lines above or below CTAs. Decorative framing does not make generic supporting copy more useful.

---

## Checklist

- [ ] Text-primary (#F4F4F6) on all headings, product names, values
- [ ] Text-secondary (#B0B1BE) on body text, descriptions — clearly readable
- [ ] Text-tertiary (#7C7D8E) on timestamps, hints — still visible
- [ ] Cards (#121318) visually distinct from page (#08090C)
- [ ] Score display has colored glow + count-up animation
- [ ] Primary buttons have blue glow
- [ ] Table product names are the brightest text in each row
- [ ] Sidebar active item clearly highlighted (blue bg + border)
- [ ] tabular-nums on all numbers, font-mono on SKUs
- [ ] No text readability issues at any screen brightness
