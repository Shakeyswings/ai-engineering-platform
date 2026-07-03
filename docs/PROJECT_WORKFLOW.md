# AI Engineering Platform - Governed Build Workflow

## Purpose

This workflow controls how the AI Engineering Platform is developed from this point forward. The repository is the source of truth. No feature should be added without checking the architecture and design system documents first.

## Authoritative Files

1. `docs/architecture/CONTEXT.md` - product architecture, domain model, mission lifecycle, navigation, and rollout strategy.
2. `docs/design/UI_CONSTRAINTS.md` - mandatory visual rules for colors, typography, spacing, accessibility, motion, and component behavior.
3. `docs/design/QUICK_REFERENCE.md` - daily implementation checklist and condensed design reference.
4. `docs/prompts/GPT_PROMPTS_PHASE_1-3.md` - standardized AI prompts for Phase 1 dashboard, Phase 2 mission form, and Phase 3 approvals/evaluations.
5. `docs/PROJECT_WORKFLOW.md` - this file.

## Operating Rule

Before changing code, identify which layer the change belongs to:

- Architecture
- Design system
- Component implementation
- Feature integration
- Backend/Supabase
- Authentication
- Testing/deployment

Do not mix unrelated layers in a single commit.

## Phase Sequence

### Phase 0 - Repository Governance

Status: In progress.

Tasks:

- Add project reference documents under `docs/`.
- Align `globals.css` with `UI_CONSTRAINTS.md`.
- Ensure `--border` and `--border-default` aliases both work.
- Ensure Inter is the global font stack.
- Add design-system QA checklist.

### Phase 1 - Dashboard and Core Cards

Status: partially implemented.

Target components:

- `Dashboard.tsx`
- `MissionCard.tsx`
- `KPICard.tsx`
- `AchievementBadge.tsx`
- `StreakCounter.tsx`
- `StatusIndicator.tsx`
- `Sidebar.tsx`
- `RewardToast.tsx`

Acceptance criteria:

- Uses only approved CSS variables.
- All spacing follows a 4px grid.
- All interactive elements have visible focus rings.
- Animations are under 600ms.
- Dashboard loads without console errors.

### Phase 2 - Mission Creation Form

Status: pending.

Target components:

- `MissionForm.tsx`
- `FormProgress.tsx`
- `FormField.tsx`
- `ComplexitySelector.tsx`
- `FormHints.tsx`
- `FormSubmitSection.tsx`
- `FieldRewardBadge.tsx`

Acceptance criteria:

- Real-time validation.
- Draft autosave.
- Clear field hints.
- Progress indicator.
- Disabled submit until required fields are valid.
- Supabase persistence planned but not mixed into visual implementation unless explicitly scoped.

### Phase 3 - Approvals and Evaluations

Status: pending.

Target components:

- `ApprovalGateModal.tsx`
- `ApprovalSummaryCard.tsx`
- `RiskAssessmentPanel.tsx`
- `RecommendationSection.tsx`
- `ApprovalDecisionPanel.tsx`
- `EvaluationDetailPage.tsx`
- `ScoringCategoryCard.tsx`
- `DetailedFeedbackSection.tsx`
- `EvaluationHistoryTimeline.tsx`
- `PatchSuggestionCard.tsx`
- `ApprovalAuditTrail.tsx`
- `DeployConfirmationModal.tsx`

Acceptance criteria:

- Decision-first hierarchy.
- Clear risk display.
- Keyboard navigable modal flow.
- Audit trail visible.
- No destructive action without confirmation.

### Phase 4 - Real Data Integration

Status: pending.

Tasks:

- Replace demo dashboard data with Supabase queries.
- Add service layer for missions, evaluations, approvals, and workflows.
- Add loading, empty, and error states.
- Introduce real-time subscriptions only after stable CRUD exists.

### Phase 5 - Authentication Stabilization

Status: pending.

Tasks:

- Audit current Supabase auth implementation.
- Confirm login, signup, logout, redirect, and session persistence.
- Protect app routes without breaking public login/signup routes.
- Keep authentication changes separate from UI redesign commits.

### Phase 6 - AI Orchestration

Status: pending.

Tasks:

- Add structured AI output route.
- Validate with Zod.
- Save generated outputs to Supabase.
- Add evaluation and risk review.

## Required Commit Pattern

Use focused commits:

- `docs: add design reference files`
- `style: align global design tokens`
- `ui: add dashboard component`
- `ui: add mission form components`
- `auth: fix Supabase signup flow`
- `data: persist missions to Supabase`

Avoid commits like:

- `fix stuff`
- `update files`
- `auth and dashboard changes`

## Pre-Commit Checklist

Before committing:

- Run `npm run dev`.
- Check browser console.
- Confirm no broken imports.
- Confirm no new unapproved colors.
- Confirm focus rings exist.
- Confirm spacing uses 4px multiples.
- Confirm animations are below 600ms.
- Confirm the commit touches only one logical area.

## Recovery Rule

Before risky changes:

1. Create a branch.
2. Make the change.
3. Test locally.
4. Commit if successful.
5. If broken, switch back to the stable branch.

Do not delete or reset work until a stable branch is confirmed running.

## Current Next Action

Complete Phase 0 governance, then audit the existing dashboard components against `UI_CONSTRAINTS.md` before continuing to Phase 2.
