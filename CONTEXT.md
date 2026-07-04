# AI Engineering Platform - Architectural Context

## Project Overview

**Type:** Next.js App Router AI Engineering Control Center  
**Purpose:** Turn goals into reliable, measurable, repeatable engineering outcomes with AI-assisted mission planning, execution tracking, and approval workflows.  
**Current Phase:** UI/UX elevation and semi-gamified dashboard implementation  
**Tech Stack:** Next.js, TypeScript, Supabase PostgreSQL, React

## Core Philosophy

The platform operates on a structured **Goal → Mission → Build → Evaluate → Approve → Deploy** loop. Every action is traceable, auditable, and tied to measurable outcomes.

**Key Tenet:** Reliability is preferred over complexity.

## Master Control Center Mindset

Users are commanders piloting an engineering platform. The UI should evoke:

- Control room aesthetics: dashboard-like, data-rich, clearly prioritized information
- Command authority: prominent action buttons, approval gates, decision points
- Mission visibility: real-time status, progress indicators, risk flags
- Strategic thinking: high-level overview with drill-down capability

## Core Entities

### Missions

- Title, objective, context, constraints, success criteria
- Complexity level: Low, Medium, High
- Status: Planning → In Progress → Review → Approved → Deployed
- Has multiple tasks and evaluations

### Tasks

- Atomic work units tied to a mission
- Status: Pending → In Progress → Complete → Evaluated
- Assigned to human or AI, with priority and effort estimation

### Evaluations

Score-based review from 0–100 across:

- Accuracy
- Completeness
- Usability
- Risk
- Source quality
- Format compliance

Deployment threshold logic:

- 95–100: Deploy
- 90–94: Review then deploy
- 70–89: Patch required
- Below 70: Reject

Every failure generates a regression test.

### Approvals

- Gate external writes, commits, deployments, and integrations
- States: Pending, Approved
- Audit trail: who, what, when, why

### System Configuration

- Supabase credentials status
- Phase completion tracking
- Environment setup checklist

## Dashboard Architecture

The dashboard is the command center. It follows this hierarchy:

1. Header section: logo, profile, notifications
2. Sidebar: persistent, collapsible, current section visible
3. Main content:
   - Hero/status section
   - Metrics/KPI grid
   - Active Missions
   - Pending Approvals
   - Recent Activity feed
4. Footer: system status, help, dark mode toggle

## Mission Creation Flow

- Page: `/missions/new`
- Fields: title, objective, context, constraints, success criteria, complexity
- Gamification: progress indicator as the user fills the form
- CTA: Generate Mission Plan
- Next step: auto-generated breakdown with edit/approve options

## Navigation

Primary navigation:

- Dashboard
- Missions
- Tasks
- Approvals
- Evaluations
- System
- Settings

Every major entity should have a detail page with full context.

## Gamification Principles

Gamification is subtle, motivating, and never dominant.

Examples:

- Mission streaks
- Evaluation badges
- Completion rings
- Next milestone hints
- Reward toast after completing meaningful actions

Gamification should stay below 15% of screen real estate.

## AI Output Contract

Every significant AI output should eventually include:

- Mission
- Status
- Summary
- Evidence
- Assumptions
- Architecture
- Implementation
- Risks
- Confidence
- Benchmark
- War Test
- Patch
- Regression Tests
- Documentation Updated
- Next Actions

## Engineering Direction

The platform should not be a set of isolated pages. It should become a mission-driven operating system where all features orbit the Mission object.

Core loop:

Mission → Research → Reasoning → Evaluation → Approval → Workflow → Deployment
