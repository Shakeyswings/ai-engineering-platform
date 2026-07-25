---
title: "CONTEXT.md"
owner: "Shakeyswings"
last_updated: "2026-07-03"
---

# AI Engineering Platform - Architectural Context

## Project Overview
**Type:** Next.js 14+ (App Router) AI Engineering Control Center
**Purpose:** Turn goals into reliable, measurable, repeatable engineering outcomes with AI-assisted mission planning, execution tracking, and approval workflows.
**Current Phase:** UI/UX elevation and semi-gamified dashboard implementation
**Tech Stack:** Next.js, TypeScript, Supabase (PostgreSQL), React

---

## Core Philosophy & Design Principles

### Mission-Driven Architecture
The platform operates on a structured **Goal → Mission → Build → Evaluate → Approve → Deploy** loop. Every action is traceable, auditable, and tied to measurable outcomes.

**Key Tenet:** "Reliability is preferred over complexity."

### The Master Control Center Mindset
Users are "Commanders" piloting an engineering platform. The UI should evoke:
- **Control room aesthetics:** Dashboard-like, data-rich, clearly prioritized information
- **Command authority:** Prominent action buttons, approval gates, decision points
- **Mission visibility:** Real-time status, progress indicators, risk flags
- **Strategic thinking:** High-level overview with drill-down capability

---

## Domain Model & Key Entities

### Core Entities

**Missions**
- Title, Objective, Context, Constraints, Success Criteria
- Complexity Level: Low/Medium/High
- Status: Planning → In Progress → Review → Approved → Deployed
- Has multiple Tasks and Evaluations

**Tasks**
- Atomic work units tied to a Mission
- Status: Pending → In Progress → Complete → Evaluated
- Assigned to human or AI, with priority and effort estimation

**Evaluations**
- Score-based review (0-100) across 6 categories:
  - Accuracy, Completeness, Usability, Risk, Source Quality, Format Compliance
- Deployment threshold logic:
  - 95-100: Deploy
  - 90-94: Review then deploy
  - 70-89: Patch required
  - <70: Reject
- Every failure generates a Regression Test

**Approvals**
- Gate on external writes, commits, deployments, integrations
- Two states: Pending, Approved
- Audit trail: who, what, when, why

**System Configuration**
- Supabase credentials status
- Phase completion tracking
- Environment setup checklist

---

## Visual Architecture & Design System

### Color Palette (Dark Theme - Enterprise Control Room)
```
PRIMARY_DARK: #0F1419          // Deep navy background
SURFACE_DARK: #1A1F2E          // Card backgrounds
SURFACE_LIGHT: #242D3D         // Elevated surfaces
ACCENT_CYAN: #00D4FF           // Primary action, highlights
ACCENT_TEAL: #00D9A3           // Secondary accent, success
ACCENT_PURPLE: #7C5AFA         // Gamification, rewards
DANGER: #FF4757                // Errors, warnings
SUCCESS: #2ED573               // Completed, deployed
WARNING: #FFA502               // Needs review, caution
TEXT_PRIMARY: #FFFFFF          // Primary text
TEXT_SECONDARY: #A8B0C0        // Muted text, labels
TEXT_TERTIARY: #6B7280         // Very muted, metadata
BORDER: #2D3748                // Subtle dividers
```

### Typography (Modern, Professional)
- **Font Family:** Inter (system fallback: -apple-system, BlinkMacSystemFont, sans-serif)
- **Headings (H1):** 48px / 700 weight / 1.1 line-height
- **Headings (H2):** 32px / 700 weight / 1.2 line-height
- **Headings (H3):** 24px / 600 weight / 1.3 line-height
- **Headings (H4):** 18px / 600 weight / 1.4 line-height
- **Body (P):** 14px / 400 weight / 1.6 line-height
- **Label (Compact):** 12px / 500 weight / 1.5 line-height
- **Code/Mono:** Fira Code / JetBrains Mono, 12px / 400 weight

### Spacing Grid (4px Base)
- Micro: 4px (internal component spacing)
- Tight: 8px (related elements)
- Small: 12px (element groups)
- Medium: 16px (section spacing)
- Large: 24px (major sections)
- XL: 32px (page-level spacing)
- XXL: 48px (hero/dramatic spacing)

### Component Foundation

**Cards**
- Background: SURFACE_DARK with 1px border (BORDER color)
- Padding: 16px / 24px (content-dependent)
- Border-radius: 8px
- Shadow: subtle (0 4px 12px rgba(0, 0, 0, 0.3))
- Hover state: border shifts to ACCENT_CYAN (no full color change, subtle)

**Buttons**
- Primary (CTA): ACCENT_CYAN background, TEXT_PRIMARY text, 16px padding, 8px border-radius
- Secondary: BORDER background, TEXT_PRIMARY text
- Danger: DANGER background, TEXT_PRIMARY text
- Disabled: opacity 0.5, cursor not-allowed
- Hover: 10% lighter shade, smooth transition (150ms)

**Form Inputs**
- Background: SURFACE_LIGHT
- Border: 1px BORDER, focus: 2px ACCENT_CYAN
- Padding: 12px
- Border-radius: 6px
- Placeholder: TEXT_TERTIARY

**Status Badges**
- Success: GREEN background, dark text
- Warning: WARNING background, dark text
- Error: DANGER background, white text
- Info: ACCENT_CYAN background, dark text

---

## UI/UX Patterns & Conventions

### Dashboard Architecture
The dashboard is the command center. It follows this hierarchy:

1. **Header Section:** Platform logo, user profile, notifications
2. **Navigation Sidebar:** Persistent, collapsible, shows current section
3. **Main Content Area:**
   - Hero/Status Section (top priority data)
   - Metrics/KPIs Grid (real-time stats)
   - Active Missions Card
   - Pending Approvals (urgent)
   - Recent Activity Feed
4. **Footer:** Status, help, dark mode toggle

### Mission Creation Flow
- **Page:** `/missions/new`
- **Form Fields:** Mission title, Objective, Context, Constraints, Success criteria, Complexity
- **Gamification:** Progress indicator as user fills form
- **CTA:** "Generate Mission Plan" button (prominent cyan)
- **Next Step:** Shows auto-generated breakdown with Edit/Approve options

### Approval Gates
- **Visual:** Modal overlay with clear "Approve / Reject / Request Changes" buttons
- **Info Shown:** What's being approved, who requested it, why (risk summary)
- **Gamification:** Badge reward on approval completion

### Status Indicators
- Circular progress: for multi-step processes
- Linear progress: for phase completion
- Dot indicators: for small status markers
- Color-coded: green (done), cyan (in progress), orange (review), red (failed)

### Data Tables (for Missions, Tasks, Evaluations)
- Sortable headers
- Clickable rows → detail view
- Inline actions (Edit, Delete, Archive)
- Pagination: 10, 25, 50 per page
- Search/filter bar above table

---

## Gamification Elements

### Progress & Achievement System
1. **Mission Streaks:** Count consecutive deployed missions
2. **Evaluation Badges:**
   - 🏆 "Perfect Score" (95+)
   - ⚡ "Fast Track" (approved without revisions)
   - 🎯 "High Velocity" (5+ missions in a week)
3. **Completion Rings:** Visual goal progress (missions, approvals, deployments)
4. **XP/Points:** Accumulated by completing missions, solving issues
5. **Leaderboard (optional):** User or team rankings

### Visual Rewards
- Animated confetti or particles on mission deployment
- Notification toasts with celebratory copy
- Achievement unlocks with animated popover
- Color shifts to ACCENT_PURPLE for reward states

### Motivation Hooks
- Displayed current streak at top of dashboard
- "Next milestone" hint (e.g., "2 missions until gold badge")
- Daily mission suggestions based on history
- Celebratory status messages (e.g., "You crushed it! Mission deployed in record time.")

---

## Navigation & Information Hierarchy

### Primary Navigation (Sidebar)
1. **Dashboard** → Overview, KPIs, activity
2. **Missions** → List, create, archive
3. **Tasks** → Assigned work, backlog
4. **Approvals** → Pending gates, history
5. **Evaluations** → Scoring, feedback, regression tests
6. **System** → Configuration, status, logs
7. **Settings** → Profile, preferences, integrations

### Breadcrumb Pattern
Always show: `Dashboard > Current Section > Current Item`

### Deep Links
Every major entity has a detail page with full context.

---

## Data Flow & Key Interactions

### Mission Lifecycle
1. **Create:** Fill form → Auto-generate plan → Preview
2. **Review:** See breakdown, edit constraints, adjust scope
3. **Approve:** Stakeholder gate (human approval required)
4. **Execute:** Display tasks, track progress in real-time
5. **Evaluate:** Auto-score via AI, show breakdown, allow manual adjustment
6. **Deploy:** Final approval gate → Go live
7. **Archive:** After 30 days, move to historical view

### Approval Flow
- Risk checks run automatically
- Alert icons and warning badges appear if issues detected
- User sees: What + Why + Risk + Recommendation + Approve/Reject buttons
- Audit log entry created for every decision

### Error & Exception Handling
- Inline validation on forms (no nasty surprises on submit)
- Toast notifications for transient errors (auto-dismiss after 4s)
- Alert modals for critical/blocking errors (require user action)
- Error messages are actionable (not technical jargon)

---

## Build & Development Conventions

### File Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Auth routes
│   ├── dashboard/         # Main dashboard
│   ├── missions/          # Mission CRUD
│   ├── approvals/         # Approval gates
│   ├── evaluations/       # Scoring & feedback
│   └── settings/          # Configuration
├── components/
│   ├── layout/            # Header, Sidebar, Footer
│   ├── cards/             # Reusable card components
│   ├── forms/             # Form inputs, mission form
│   ├── modals/            # Approval, confirmation modals
│   └── gamification/      # Badge, streak, reward components
├── services/              # Business logic
│   ├── missionService.ts
│   ├── evaluationService.ts
│   ├── approvalService.ts
│   └── supabaseClient.ts
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript interfaces
├── utils/                 # Helpers, constants
└── styles/                # Global CSS variables
```

### Component Naming
- Descriptive: `MissionCard.tsx`, `ApprovalGate.tsx`, `EvaluationScore.tsx`
- Never abbreviated unless universal (UI, API, ID)

### State Management
- Use React Context for global app state (user, theme, notifications)
- Use Supabase real-time subscriptions for live mission/task updates
- Local state (useState) for form inputs, UI toggles

### API & Backend
- Supabase PostgreSQL for data
- Row-Level Security (RLS) enforced for all tables
- Real-time subscriptions for mission status, approval changes
- Service layer abstracts Supabase calls (e.g., `missionService.getMission()`)

### Testing & QA
- Unit tests for critical business logic (evaluation scoring, approval gates)
- E2E tests for mission creation, approval flow
- Visual regression tests for component library

---

## Styling Approach (CSS-in-JS / Tailwind Hybrid)

Use **Tailwind CSS** as the foundation with the custom color palette mapped via CSS variables.

**CSS Variable Definitions (in `globals.css`):**
```css
:root {
  --color-primary-dark: #0F1419;
  --color-surface-dark: #1A1F2E;
  --color-surface-light: #242D3D;
  --color-accent-cyan: #00D4FF;
  --color-accent-teal: #00D9A3;
  --color-accent-purple: #7C5AFA;
  --color-danger: #FF4757;
  --color-success: #2ED573;
  --color-warning: #FFA502;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A8B0C0;
  --color-text-tertiary: #6B7280;
  --color-border: #2D3748;
}
```

**Component Example (React + Tailwind):**
```tsx
export const MissionCard = ({ mission }) => (
  <div className="bg-[var(--color-surface-dark)] border border-[var(--color-border)] rounded-lg p-4 hover:border-[var(--color-accent-cyan)] transition-colors">
    <h3 className="text-white font-bold text-lg">{mission.title}</h3>
    <p className="text-[var(--color-text-secondary)] text-sm mt-2">{mission.objective}</p>
    <div className="mt-4 flex gap-2">
      <button className="bg-[var(--color-accent-cyan)] text-black px-4 py-2 rounded-lg hover:brightness-110">
        View Details
      </button>
    </div>
  </div>
);
```

---

## Performance & Optimization

- Code-split routes (automatic via Next.js)
- Image optimization (next/image)
- Lazy-load components below the fold
- Debounce search/filter inputs
- Cache Supabase queries with SWR or React Query

---

## Accessibility (A11y)

- WCAG 2.1 AA compliance
- Semantic HTML (proper heading hierarchy)
- ARIA labels for interactive components
- Keyboard navigation fully supported
- Color contrast ratio ≥ 4.5:1 for all text
- Focus indicators visible and clear

---

## What NOT to Do

- ❌ Cute or overly playful aesthetics (this is enterprise software)
- ❌ Cluttered layouts; prioritize whitespace and clarity
- ❌ Slow animations (keep under 300ms)
- ❌ Jargon without explanation
- ❌ Hidden features or unintuitive navigation
- ❌ Data that doesn't update in real-time when it should

---

## Success Criteria for UI/UX Implementation

1. ✅ Dashboard loads in <2s, feels instantly responsive
2. ✅ Mission creation form has <3 minutes time-to-completion (with tooltips)
3. ✅ Approval flow is 1-click decision (after reading info)
4. ✅ All entities (Mission, Task, Approval) have detail page + edit flow
5. ✅ Gamification elements visible but not distracting (≤15% of screen real estate)
6. ✅ Real-time updates (task status, approval changes) within 1s
7. ✅ Zero console errors; clean code
8. ✅ Passes basic accessibility scan (Lighthouse A11y ≥90)
9. ✅ Mobile-responsive (tablet at minimum; mobile secondary)
10. ✅ User can complete a mission from start to deployment in <10 minutes

---

## Deployment & Rollout Strategy

1. **Phase 1:** Dashboard redesign + Mission card polish
2. **Phase 2:** Form flows + Gamification badges
3. **Phase 3:** Approval gates + Evaluation detail pages
4. **Phase 4:** Real-time subscriptions + Live activity feed
5. **Phase 5:** Mobile responsiveness + Performance tuning

---

## References & Inspiration

- **Stripe Dashboard:** Clean, data-rich, excellent hierarchy
- **Linear:** Minimalist, task-focused, smooth interactions
- **Figma:** Collaboration + progress visuals, excellent status indicators
- **Notion:** Dark mode with color accents, gamified elements (progress rings)

---

## How to Use This Document

This is the **"brain"** of your project. Share it with:
- ✅ GPT/Claude every time you want UI/UX refinement
- ✅ New team members onboarding
- ✅ Design reviews (as reference standard)
- ✅ Code reviews (to ensure consistency)

**Update this document whenever:**
- New core entities are added
- Design decisions change
- Accessibility or performance requirements shift
- Gamification elements are added/removed

---

**Last Updated:** 2026-07-03
**Owner:** [Your Name]
**Status:** Active
