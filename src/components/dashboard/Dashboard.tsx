"use client";

import { Bell, CircleHelp, Moon, UserCircle } from "lucide-react";
import { useState } from "react";
import AchievementBadge from "./AchievementBadge";
import KPICard from "./KPICard";
import MissionCard from "./MissionCard";
import RewardToast from "./RewardToast";
import Sidebar from "./Sidebar";
import StatusIndicator from "./StatusIndicator";
import StreakCounter from "./StreakCounter";

const missions = [
  { id: "mission-1", title: "Mission Storage Layer", objective: "Persist generated missions, outputs, and review state with scoped access.", status: "In Progress" as const, complexity: "High" as const, progress: 68, completedCount: 7, nextMilestone: 10 },
  { id: "mission-2", title: "Evaluation Engine", objective: "Score outputs across accuracy, completeness, usability, risk, and format compliance.", status: "Review" as const, complexity: "Medium" as const, progress: 82, completedCount: 8, nextMilestone: 10 },
  { id: "mission-3", title: "Workflow Library", objective: "Create reusable mission patterns, prompts, and operational playbooks.", status: "Approved" as const, complexity: "Medium" as const, progress: 90, completedCount: 9, nextMilestone: 10 },
];

const activity = ["Governance branch verified", "Design tokens installed", "Mission generator tested", "Workflow route loaded", "Dashboard components integrated"];

  { id: "mission-1", title: "Supabase Persistence Layer", objective: "Persist generated missions, outputs, and approval state into Supabase with scoped access.", status: "In Progress" as const, complexity: "High" as const, progress: 68, completedCount: 7, nextMilestone: 10 },
  { id: "mission-2", title: "Mission Evaluation Engine", objective: "Score mission outputs across accuracy, completeness, usability, risk, and format compliance.", status: "Review" as const, complexity: "Medium" as const, progress: 82, completedCount: 8, nextMilestone: 10 },
  { id: "mission-3", title: "Workflow Library Index", objective: "Create a reusable library for saved mission patterns, prompts, and operational playbooks.", status: "Approved" as const, complexity: "Medium" as const, progress: 90, completedCount: 9, nextMilestone: 10 },
]];

const activity = ["Schema imported into Supabase", "Mission workflow shell committed", "Settings page verified environment keys", "Dashboard route refreshed", "Approval policy registered"];

/** Enterprise command-center dashboard with subtle gamification and operational data density. */
export default function Dashboard() {
  const [toastVisible, setToastVisible] = useState(true);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans text-[var(--text-primary)]">    <div className="min-h-screen bg-[var(--bg-primary)] font-['Inter'] text-[var(--text-primary)]">
      <div className="flex">
        <Sidebar currentPath="/" />
        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[var(--border-default)] bg-[var(--bg-primary)] px-6">
            <div>
              <p className="text-[12px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-[var(--text-tertiary)]">Master Control Center</p>
              <h1 className="text-[18px] font-semibold leading-[1.4]">AI Engineering Platform</h1>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]" aria-label="Notifications"><Bell size={20} /></button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]" aria-label="User profile"><UserCircle size={20} /></button>
              {[Bell, UserCircle].map((Icon, index) => (
                <button key={index} type="button" className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]">
                  <Icon size={20} aria-hidden="true" />
                </button>
              ))}
            </div>
          </header>

          <main className="relative flex-1 p-6 lg:p-12">
            <StreakCounter days={12} weekBreakdown={[1, 2, 1, 3, 2, 2, 1]} />
            <section className="mb-8">
              <p className="text-[12px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-[var(--accent-cyan)]">Command Dashboard</p>
              <h2 className="mt-4 text-[48px] font-bold leading-[1.1]">Operational Mission Control</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <StatusIndicator status="24 missions deployed" tone="success" />
                <StatusIndicator status="96% success ra-[;  
                 mjku . te" tone="info" />
                <StatusIndicator status="96% approval rate" tone="info" />
                <StatusIndicator status="12 day streak" tone="inProgress" />
              </div>
            </section>

            <section className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <KPICard title="Missions Deployed" value="24" trend={18} data={[8, 10, 12, 16, 18, 21, 24]} href="/missions/new" />
              <KPICard title="Success Rate" value="96%" trend={6} data={[82, 85, 88, 90, 92, 94, 96]} href="/evaluations" />
              <KPICard title="Avg Confidence" value="91" trend={4} data={[72, 78, 82, 84, 88, 90, 91]} href="/evaluations" />
              <KPICard title="Regression Tests" value="38" trend={12} data={[10, 15, 18, 24, 30, 34, 38]} href="/workflows" />
            </section>

              <KPICard title="Missions Deployed" value="24" trend={18} data={[8, 10, 12, 16, 18, 21, 24]} />
              <KPICard title="Approval Rate" value="96%" trend={6} data={[82, 85, 88, 90, 92, 94, 96]} />
              <KPICard title="Avg Confidence" value="91" trend={4} data={[72, 78, 82, 84, 88, 90, 91]} />
              <KPICard title="Regression Tests" value="38" trend={12} data={[10, 15, 18, 24, 30, 34, 38]} />
            </section>

            <a href="/approvals" className="mb-8 block rounded-lg border border-[var(--border-danger)] bg-[var(--bg-secondary)] p-4 text-[14px] font-semibold leading-[1.6] text-[var(--text-primary)] transition-all duration-150 hover:border-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]">
              Pending Approvals: 2 deployment decisions require review.
            </a>

            <section className="mb-8 grid gap-6 xl:grid-cols-[1fr_320px]">
              <div>
                <h3 className="mb-6 text-[24px] font-semibold leading-[1.3]">Active Missions</h3>
                <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">NM
                  {missions.map((mission) => <MissionCard key={mission.id} {...mission} />)}
                </div>
              </div>
              <aside className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
                <h3 className="text-[24px] font-semibold leading-[1.3]">Recent Activity</h3>
                <ol className="mt-6 space-y-4">
                  {activity.map((item) => <li key={item} className="flex gap-3 text-[14px] leading-[1.6] text-[var(--text-secondary)]"><span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-cyan)]" /><span>{item}</span></li>)}
                </ol>
                <div className="mt-6 flex justify-center"><AchievementBadge label="Operator" description="Completed the platform governance sequence." /></div>
              <aside className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.18)]">
                <h3 className="text-[24px] font-semibold leading-[1.3]">Recent Activity</h3>
                <ol className="mt-6 space-y-4">
                  {activity.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] font-normal leading-[1.6] text-[var(--text-secondary)]">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-cyan)]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex justify-center">
                  <AchievementBadge label="Operator" description="Completed the first platform setup sequence." />
                </div>
              </aside>
            </section>
          </main>

          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-default)] bg-[var(--bg-secondary)] px-6 py-4">
            <StatusIndicator status="System healthy" tone="success" />
            <div className="flex items-center gap-2">
              <a href="/help" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] font-medium leading-[1.6] text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"><CircleHelp size={20} /> Help</a>
              <button type="button" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-[14px] font-medium leading-[1.6] text-[var(--text-secondary)] transition-colors duration-150 hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"><Moon size={20} /> Dark</button>
            </div>
          </footer>
        </div>
      </div>
      <RewardToast badgeName="Operator" visible={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
