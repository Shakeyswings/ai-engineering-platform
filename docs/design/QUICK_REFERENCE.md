# AI Engineering Platform - Quick Reference Card

Use this file while coding. It is the short-form checklist for the platform design system.

## Color Palette

```css
--bg-primary: #0F1419;
--bg-secondary: #1A1F2E;
--bg-tertiary: #242D3D;
--bg-hover: #2D3748;

--accent-cyan: #00D4FF;
--accent-teal: #00D9A3;
--accent-purple: #7C5AFA;

--color-success: #2ED573;
--color-warning: #FFA502;
--color-danger: #FF4757;
--color-info: #00D4FF;

--text-primary: #FFFFFF;
--text-secondary: #A8B0C0;
--text-tertiary: #6B7280;
--text-inverted: #0F1419;

--border-default: #2D3748;
--border: #2D3748;
--border-accent: #00D4FF;
--border-danger: #FF4757;
```

## Typography

Font: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

| Role | Size | Weight | Line Height |
|---|---:|---:|---:|
| H1 | 48px | 700 | 1.1 |
| H2 | 32px | 700 | 1.2 |
| H3 | 24px | 600 | 1.3 |
| H4 | 18px | 600 | 1.4 |
| Body | 14px | 400 | 1.6 |
| Label | 12px | 500 | 1.5 |
| Meta | 11px | 400 | 1.4 |
| Code | 12px | 400 | 1.5 |

## 4px Spacing Grid

- 4px: micro
- 8px: tight
- 12px: small
- 16px: base
- 24px: medium
- 32px: large
- 48px: XL
- 64px: XXL

## Component Specs

### Button

- Background: `--accent-cyan`
- Text: `--text-inverted`
- Padding: 12px horizontal x 16px vertical
- Radius: 8px
- Font: 14px / 600
- Hover: `brightness-110`
- Transition: 150ms ease-out
- Focus: 2px `--accent-cyan` outline, 2px offset

### Card

- Background: `--bg-secondary`
- Border: 1px solid `--border-default`
- Radius: 8px
- Padding: 16px or 24px
- Shadow: `0 4px 12px rgba(0,0,0,0.3)`
- Hover: border shifts to `--accent-cyan`
- Transition: 150ms ease-out

### Input

- Background: `--bg-tertiary`
- Border: 1px solid `--border-default`
- Radius: 6px
- Padding: 12px
- Font: 14px / 400
- Focus: 2px `--accent-cyan`
- Error: 2px `--color-danger`

### Modal

- Overlay: `rgba(15,20,25,0.8)`
- Container: `--bg-secondary`
- Border: 1px solid `--border-default`
- Radius: 12px
- Padding: 24px
- Max width: 500px default, 600px form

## Motion

- Hover/focus: 100ms
- Color/click transitions: 150ms
- Modal/card expansion: 300ms
- Rewards: 600ms max
- Never exceed 1000ms

## Responsive Targets

- Mobile: below 768px
- Tablet: 768px+
- Desktop: 1440px+
- Desktop sidebar: 240px fixed
- Tablet sidebar: icon-only, expands on hover
- Mobile sidebar: hidden behind hamburger
- Touch targets: 44px minimum

## Accessibility

- Text contrast must be 4.5:1 or better.
- All interactive elements must have visible focus rings.
- Use semantic headings.
- Use ARIA labels where visible text is insufficient.
- Form labels must use `htmlFor`.
- Do not rely on color alone to show status.

## Never Do

- No new colors.
- No font sizes outside the type scale.
- No spacing outside the 4px grid.
- No hidden focus rings.
- No animation above 600ms for normal interactions.
- No gradients unless design approval explicitly changes `UI_CONSTRAINTS.md`.
- No rounded corners above 12px.
- No color-only state indicators.

## QA Checklist Before Commit

- [ ] Colors use approved variables.
- [ ] Typography follows scale.
- [ ] Spacing uses 4px multiples.
- [ ] Focus rings are visible.
- [ ] Hover and active states exist.
- [ ] Disabled states exist where needed.
- [ ] Contrast is 4.5:1 or better.
- [ ] Responsive behavior works on desktop and tablet.
- [ ] Animations are below 600ms.
- [ ] Browser console is clean.
- [ ] Component works in isolation.
