# AI Engineering Platform - UI/UX Design Constraints

This document is the visual law. Every component, screen, and interaction must comply with these rules.

## Color Palette

### Background & Surfaces

```css
--bg-primary: #0F1419;
--bg-secondary: #1A1F2E;
--bg-tertiary: #242D3D;
--bg-hover: #2D3748;
```

### Accents

```css
--accent-cyan: #00D4FF;
--accent-teal: #00D9A3;
--accent-purple: #7C5AFA;
```

### Semantic Colors

```css
--color-success: #2ED573;
--color-warning: #FFA502;
--color-danger: #FF4757;
--color-info: #00D4FF;
```

### Text

```css
--text-primary: #FFFFFF;
--text-secondary: #A8B0C0;
--text-tertiary: #6B7280;
--text-inverted: #0F1419;
```

### Borders

```css
--border-default: #2D3748;
--border-accent: #00D4FF;
--border-danger: #FF4757;
```

Rule: Never introduce new colors without extending this file first.

## Typography

Font stack:

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

Type scale:

| Use Case | Size | Weight | Line Height |
|---|---:|---:|---:|
| H1 | 48px | 700 | 1.1 |
| H2 | 32px | 700 | 1.2 |
| H3 | 24px | 600 | 1.3 |
| H4 | 18px | 600 | 1.4 |
| Body | 14px | 400 | 1.6 |
| Label | 12px | 500 | 1.5 |
| Meta | 11px | 400 | 1.4 |

Rules:

- Use Inter everywhere.
- Maintain text contrast at 4.5:1 or higher.
- Do not use font sizes outside the type scale.
- Do not mix weights within a single line.
- All caps only for labels and system messages.

## Spacing Grid

All measurements must use a 4px base grid.

- 4px: micro
- 8px: tight
- 12px: small
- 16px: base
- 24px: medium
- 32px: large
- 48px: XL
- 64px: XXL

## Cards

Cards must use:

```css
background: var(--bg-secondary);
border: 1px solid var(--border-default);
border-radius: 8px;
padding: 16px or 24px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
transition: all 150ms ease-out;
```

Hover:

```css
border-color: var(--accent-cyan);
```

Never use thick shadows, oversized radii, random overlays, or full-fill hover effects.

## Buttons

### Primary

```css
background: var(--accent-cyan);
color: var(--text-inverted);
padding: 12px 16px;
border-radius: 8px;
font-size: 14px;
font-weight: 600;
transition: all 150ms ease-out;
```

### Secondary

```css
background: var(--border-default);
color: var(--text-primary);
border: 1px solid var(--border-default);
padding: 12px 16px;
```

### Danger

```css
background: var(--color-danger);
color: var(--text-primary);
```

All buttons must have visible focus indicators.

## Inputs

```css
background: var(--bg-tertiary);
border: 1px solid var(--border-default);
border-radius: 6px;
padding: 12px;
font-size: 14px;
color: var(--text-primary);
```

Focus:

```css
outline: 2px solid var(--border-accent);
outline-offset: 2px;
```

## Motion

- Standard hover/focus: 150ms
- State transitions: 150–300ms
- Larger entrance or exit: up to 600ms
- No external animation libraries
- Avoid excessive motion

## Dashboard Requirements

Dashboard must include:

- Header bar
- Sidebar navigation
- Hero section with current stats
- KPI cards
- Active Missions
- Pending Approvals alert
- Recent Activity timeline
- Footer with system status and help link

## Mission Card Requirements

Mission cards must include:

- Title at 18px/600
- Status badge right-aligned
- Objective truncated to two lines
- Complexity indicator
- Progress ring
- CTA button based on status
- Fixed height of 300px
- Hover lift of 2px maximum

## KPI Card Requirements

KPI cards must include:

- 12px uppercase title using text tertiary
- 32px/700 metric value
- Trend indicator
- Sparkline chart using accent cyan
- `bg-secondary` background with 1px border

## Accessibility

- All interactive elements require focus rings.
- All readable text must have contrast ratio at least 4.5:1.
- Use semantic HTML where possible.
- Do not rely on color alone to communicate state.

## Prohibited

- No gradients.
- No new colors.
- No excessive shadows.
- No cute emoji-heavy UI.
- No random pixel values outside the 4px grid.
- No animation longer than 600ms.
