# AI Engineering Platform - UI/UX Design Constraints

This document is the visual law. Every component, screen, and interaction must comply with these rules.

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

Rule: never introduce new colors without updating this document first.

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
| Code | 12px | 400 | 1.5 |

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

## Component Rules

Cards:

- Background: `--bg-secondary`
- Border: 1px solid `--border-default`
- Border radius: 8px
- Padding: 16px or 24px
- Hover: border shifts to `--accent-cyan`
- Transition: 150ms ease-out

Buttons:

- Primary background: `--accent-cyan`
- Primary text: `--text-inverted`
- Padding: 12px horizontal x 16px vertical
- Radius: 8px
- Font: 14px / 600
- Visible focus state required

Inputs:

- Background: `--bg-tertiary`
- Border: 1px solid `--border-default`
- Border radius: 6px
- Padding: 12px
- Focus: 2px solid `--border-accent`

## Motion

- Hover/focus: 100ms
- Button/color changes: 150ms
- Modal/card expansion: 300ms
- Reward animation: 600ms
- Never exceed 1000ms.

## Accessibility

- Contrast ratio must be 4.5:1 or higher.
- Interactive elements must have focus rings.
- Keyboard navigation must work.
- Use semantic HTML.
- Form labels must use `htmlFor`.
- Do not rely on color alone to communicate state.

## Anti-Patterns

Never use:

- New colors.
- Arbitrary font sizes.
- Spacing outside the 4px grid.
- Hidden focus rings.
- Animation over 600ms for normal interactions.
- Rounded corners above 12px.
- Color-only state communication.
