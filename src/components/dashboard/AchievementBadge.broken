"use client";

import type { LucideIcon } from "lucide-react";
import { Trophy } from "lucide-react";

interface AchievementBadgeProps {
  label: string;
  description: string;
}

export default function AchievementBadge({ label, description }: AchievementBadgeProps) {
  return (
    <div className="group relative inline-flex flex-col items-center gap-2">
      <div className="flex h-16 w-16 animate-[uiScaleIn_600ms_ease-out] items-center justify-center rounded-full border-2 border-[var(--accent-teal)] bg-[var(--accent-purple)]">
        <Trophy size={32} className="text-white" aria-hidden="true" />
      </div>
      <span className="max-w-20 text-center text-[12px] font-medium leading-[1.5] text-[var(--text-secondary)]">{label}</span>
      <span className="pointer-events-none absolute bottom-full mb-3 w-52 rounded-lg border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-3 text-center text-[12px] leading-[1.5] text-[var(--text-secondary)] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
        {description}
      </span>
  icon?: LucideIcon;
}

/** Circular achievement badge with tooltip and first-render pulse. */
export default function AchievementBadge({ label, description, icon: Icon = Trophy }: AchievementBadgeProps) {
  return (
    <div className="group relative inline-flex flex-col items-center gap-2">
      <button
        type="button"
        aria-label={`${label}: ${description}`}
        className="flex h-16 w-16 animate-[badgePulse_600ms_ease-out_1] items-center justify-center rounded-full border-2 border-[var(--accent-teal)] bg-[var(--accent-purple)] shadow-[0_8px_24px_rgba(124,90,250,0.3)] transition-transform duration-150 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
      >
        <Icon size={32} className="text-white" aria-hidden="true" />
      </button>
      <span className="max-w-[96px] text-center text-[12px] font-medium leading-[1.5] text-[var(--text-secondary)]">{label}</span>
      <span className="pointer-events-none absolute top-[76px] z-20 w-48 rounded-lg border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-3 text-center text-[12px] font-medium leading-[1.5] text-[var(--text-primary)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
        {description}
      </span>
      <style jsx>{`
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
