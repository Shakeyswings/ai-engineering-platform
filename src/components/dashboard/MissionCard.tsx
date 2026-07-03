"use client";

import Link from "next/link";
import { CheckCircle2, CircleDot, Rocket, ShieldCheck } from "lucide-react";

type MissionStatus = "In Progress" | "Review" | "Approved" | "Deployed";

interface MissionCardProps {
  id: string;
  title: string;
  objective: string;
  status: MissionStatus;
  complexity: "Low" | "Medium" | "High";
  progress: number;
  completedCount: number;
  nextMilestone: number;
}

const statusMap = {
  "In Progress": { color: "bg-[var(--accent-cyan)]", text: "text-[var(--text-inverted)]", cta: "Edit", icon: CircleDot },
  Review: { color: "bg-[var(--color-warning)]", text: "text-[var(--text-inverted)]", cta: "Approve", icon: ShieldCheck },
  Approved: { color: "bg-[var(--accent-teal)]", text: "text-[var(--text-inverted)]", cta: "View Details", icon: CheckCircle2 },
  Deployed: { color: "bg-[var(--color-success)]", text: "text-[var(--text-inverted)]", cta: "View Details", icon: Rocket },
};

/** Fixed-height mission card with status badge, complexity, progress ring, and CTA. */
export default function MissionCard({ id, title, objective, status, complexity, progress, completedCount, nextMilestone }: MissionCardProps) {
  const config = statusMap[status];
  const Icon = config.icon;
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(Math.max(progress, 0), 100) / 100) * circumference;

  return (
    <Link
      href={`/missions/${id}`}
      className="group flex h-[300px] w-full flex-col justify-between rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--accent-cyan)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="line-clamp-2 text-[18px] font-semibold leading-[1.4] text-[var(--text-primary)]">{title}</h3>
          <span className={`inline-flex shrink-0 items-center gap-1 rounded px-2 py-1 text-[12px] font-medium leading-[1.5] ${config.color} ${config.text}`}>
            <Icon size={12} aria-hidden="true" />
            {status}
          </span>
        </div>
        <p className="mt-4 line-clamp-2 text-[14px] font-normal leading-[1.6] text-[var(--text-secondary)]">{objective}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded border border-[var(--border-default)] px-3 py-2 text-[12px] font-medium leading-[1.5] text-[var(--text-secondary)]">
          Complexity <span className="text-[var(--text-primary)]">{complexity}</span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="relative h-20 w-20">
          <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90" aria-label="Mission progress">
            <circle cx="40" cy="40" r={radius} fill="none" stroke="var(--border-default)" strokeWidth="8" />
            <circle cx="40" cy="40" r={radius} fill="none" stroke="var(--accent-cyan)" strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-300" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[12px] font-medium text-[var(--text-primary)]">{completedCount}/{nextMilestone}</span>
        </div>
        <span className="rounded-lg bg-[var(--accent-cyan)] px-4 py-3 text-[14px] font-semibold leading-[1.6] text-[var(--text-inverted)] transition-filter duration-150 group-hover:brightness-110">{config.cta}</span>
      </div>
    </Link>
  );
}
