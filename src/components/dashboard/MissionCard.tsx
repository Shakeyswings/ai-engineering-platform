"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Gauge } from "lucide-react";

type MissionStatus = "In Progress" | "Review" | "Approved" | "Deployed";
type Complexity = "Low" | "Medium" | "High" | "Critical";

interface MissionCardProps {
  id: string;
  title: string;
  objective: string;
  status: MissionStatus;
  complexity: Complexity;
  progress: number;
  completedCount: number;
  nextMilestone: number;
}

const statusClass: Record<MissionStatus, string> = {
  "In Progress": "border-[var(--accent-cyan)] text-[var(--accent-cyan)]",
  Review: "border-[var(--color-warning)] text-[var(--color-warning)]",
  Approved: "border-[var(--accent-teal)] text-[var(--accent-teal)]",
  Deployed: "border-[var(--color-success)] text-[var(--color-success)]",
};

const ctaLabel: Record<MissionStatus, string> = {
  "In Progress": "View Details",
  Review: "Approve",
  Approved: "Prepare Deploy",
  Deployed: "Open Report",
};

export default function MissionCard({ id, title, objective, status, complexity, progress, completedCount, nextMilestone }: MissionCardProps) {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(progress, 100) / 100) * circumference;

  return (
    <article className="flex h-[300px] w-full flex-col rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--accent-cyan)] focus-within:border-[var(--accent-cyan)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[18px] font-semibold leading-[1.4] text-[var(--text-primary)]">{title}</h3>
        <span className={`rounded-full border px-3 py-1 text-[12px] font-medium leading-[1.5] ${statusClass[status]}`}>{status}</span>
      </div>

      <p className="mt-4 line-clamp-2 text-[14px] leading-[1.6] text-[var(--text-secondary)]">{objective}</p>

      <div className="mt-4 inline-flex items-center gap-2 text-[12px] font-medium leading-[1.5] text-[var(--text-tertiary)]">
        <Gauge size={16} aria-hidden="true" />
        Complexity: {complexity}
      </div>

      <div className="mt-auto flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg className="h-16 w-16" viewBox="0 0 64 64" role="img" aria-label={`${progress}% progress`}>
            <circle cx="32" cy="32" r={radius} fill="none" stroke="var(--border-default)" strokeWidth="6" />
            <circle cx="32" cy="32" r={radius} fill="none" stroke="var(--accent-cyan)" strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} transform="rotate(-90 32 32)" />
          </svg>
          <div>
            <p className="text-[12px] font-medium leading-[1.5] text-[var(--text-secondary)]">{completedCount}/{nextMilestone}</p>
            <p className="text-[11px] leading-[1.4] text-[var(--text-tertiary)]">Next milestone</p>
          </div>
        </div>

        <Link href={`/missions/${id}`} className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cyan)] px-4 py-3 text-[14px] font-semibold leading-[1.6] text-[var(--text-inverted)] transition duration-150 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]">
          {status === "Deployed" ? <CheckCircle2 size={18} aria-hidden="true" /> : <Clock size={18} aria-hidden="true" />}
          {ctaLabel[status]}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
