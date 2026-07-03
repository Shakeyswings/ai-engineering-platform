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

## Never Do

- No new colors.
- No font sizes outside the type scale.
- No spacing outside the 4px grid.
- No hidden focus rings.
- No animation above 600ms for normal interactions.
- No gradients unless design approval explicitly changes `UI_CONSTRAINTS.md`.
- No rounded corners above 12px.
- No color-only state indicators.
