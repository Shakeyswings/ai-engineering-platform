# AI Engineering Platform - GPT Prompts for UI/UX Elevation

Use these prompts as governed build briefs. Attach `docs/architecture/CONTEXT.md` and `docs/design/UI_CONSTRAINTS.md` when using an AI assistant.

## Phase 1 - Dashboard and Card Components

Target: Make the dashboard visually strong, semi-gamified, and data-rich.

Deliverables:

- `Dashboard.tsx`
- `MissionCard.tsx`
- `KPICard.tsx`
- `AchievementBadge.tsx`
- `StreakCounter.tsx`
- `StatusIndicator.tsx`
- `Sidebar.tsx`
- `RewardToast.tsx`

Constraints:

- Follow `CONTEXT.md` and `UI_CONSTRAINTS.md` exactly.
- Use only approved colors.
- Use Inter exclusively.
- Use the 4px spacing grid.
- Maintain contrast of at least 4.5:1.
- Include focus rings on every interactive element.
- Keep animations below 600ms.
- Use `lucide-react` icons.
- Do not introduce gradients, playful UI, or excessive shadows.

Acceptance:

- Dashboard renders without console errors.
- Components are responsive on desktop and tablet.
- KPI cards have hover drill-down affordance.
- Mission cards route to mission detail pages.
- Pending approvals are visually prominent.

## Phase 2 - Mission Creation Form

Target: Build a guided mission creation experience with validation and progress tracking.

Deliverables:

- `MissionForm.tsx`
- `FormProgress.tsx`
- `FormField.tsx`
- `ComplexitySelector.tsx`
- `FormHints.tsx`
- `FormSubmitSection.tsx`
- `FieldRewardBadge.tsx`

Requirements:

- Two-column desktop layout.
- Stacked tablet/mobile layout.
- Real-time validation.
- Character counters.
- Draft autosave.
- Progress bar.
- Disabled submit until required fields are valid.
- Loading state during submission.

## Phase 3 - Approval Gates and Evaluation Pages

Target: Build authoritative decision workflows for approvals and evaluations.

Deliverables:

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

Requirements:

- Decision-first hierarchy.
- Risk assessment displayed clearly.
- Approve, request changes, and reject actions.
- Reject/destructive actions require confirmation.
- Evaluation score shown with category breakdown.
- Audit trail visible.
- Keyboard navigation works.

## Implementation Checklist

After each phase:

- Run `npm run dev`.
- Check browser console.
- Verify focus rings.
- Verify color palette compliance.
- Verify responsive behavior.
- Verify animations are below 600ms.
- Commit with a focused message.

Recommended commit messages:

- `ui: add dashboard command center`
- `ui: add mission creation form system`
- `ui: add approval and evaluation workflow components`
