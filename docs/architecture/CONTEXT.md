# AI Engineering Platform - Architectural Context

## Project Overview

Type: Next.js App Router AI Engineering Control Center.

Purpose: Turn goals into reliable, measurable, repeatable engineering outcomes with AI-assisted mission planning, execution tracking, evaluation, approval, and workflow reuse.

Tech stack: Next.js, TypeScript, React, Supabase PostgreSQL.

## Core Philosophy

The platform operates on a structured loop:

Goal -> Mission -> Build -> Evaluate -> Approve -> Deploy

Every action should be traceable, auditable, and tied to measurable outcomes.

Key tenet: reliability is preferred over complexity.

## Master Control Center Mindset

Users operate as commanders piloting an engineering platform. The UI should communicate:

- Control room aesthetics.
- Command authority.
- Mission visibility.
- Strategic thinking.
- Clear decision gates.

## Domain Model

### Missions

Primary platform object. Missions contain:

- Title
- Objective
- Context
- Constraints
- Success criteria
- Complexity level
- Status
- Tasks
- Evaluations
- Approvals

Mission statuses:

Planning -> In Progress -> Review -> Approved -> Deployed

### Tasks

Atomic work units tied to a mission.

Task statuses:

Pending -> In Progress -> Complete -> Evaluated

### Evaluations

Score-based review from 0 to 100 across:

- Accuracy
- Completeness
- Usability
- Risk
- Source quality
- Format compliance

Deployment threshold logic:

- 95-100: deploy
- 90-94: review then deploy
- 70-89: patch required
- below 70: reject

Every failure should generate a regression test.

### Approvals

Approvals gate consequential actions:

- External writes
- Commits
- Deployments
- Integrations
- Destructive actions

Every approval requires an audit trail: who, what, when, and why.

### System Configuration

Tracks:

- Supabase connection status
- Environment readiness
- Phase completion
- Integration status

## Dashboard Architecture

The dashboard is the command center. Required hierarchy:

1. Header with platform identity, profile, and notifications.
2. Sidebar navigation.
3. Hero/status section.
4. KPI grid.
5. Active missions.
6. Pending approvals.
7. Recent activity.
8. Footer with system status and help links.

## Primary Navigation

- Dashboard
- Missions
- Tasks
- Approvals
- Evaluations
- System
- Settings

## Mission Creation Flow

Route: `/missions/new`

Fields:

- Mission title
- Objective
- Context
- Constraints
- Success criteria
- Complexity

Expected flow:

Fill form -> generate mission plan -> preview -> edit/approve -> save -> evaluate -> deploy.

## Data Flow

Mission lifecycle:

1. Create.
2. Review.
3. Approve.
4. Execute.
5. Evaluate.
6. Deploy.
7. Archive.

Approval flow:

1. Risk checks run.
2. User sees what, why, risk, and recommendation.
3. User approves, rejects, or requests changes.
4. Audit log is created.

## Build Conventions

Recommended structure:

```text
src/
  app/
  components/
  services/
  hooks/
  types/
  utils/
  styles/
```

Component naming must be descriptive. Avoid abbreviations unless standard.

Business logic should live in services, not page components.

Use Supabase through a service layer.

## Development Standards

- Repository is the source of truth.
- Small commits.
- One logical change per commit.
- No redesign during backend fixes.
- No backend rewrite during UI work.
- No unapproved colors or visual deviations.

## Rollout Strategy

1. Dashboard redesign and mission card polish.
2. Mission form and gamification badges.
3. Approval gates and evaluation detail pages.
4. Real-time subscriptions and live activity feed.
5. Mobile responsiveness and performance tuning.

## Success Criteria

- Dashboard loads in under 2 seconds.
- Mission form can be completed in under 3 minutes.
- Approval flow supports one-click decision after context review.
- Major entities have detail pages.
- Gamification is visible but not distracting.
- Accessibility score target: Lighthouse 90 or higher.
- Zero console errors.
