"use client";

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
    </div>
  );
}
