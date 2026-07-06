"use client";

import { Activity } from "lucide-react";
import { Flame } from "lucide-react";
import { useState } from "react";

interface StreakCounterProps {
  days: number;
  weekBreakdown: number[];
}

export default function StreakCounter({ days, weekBreakdown }: StreakCounterProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-20 z-20 flex justify-end">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full bg-[var(--accent-purple)] px-4 py-3 text-[14px] font-semibold leading-[1.5] text-[var(--text-primary)] transition duration-150 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2"><Activity size={18} aria-hidden="true" /> {days} day streak</span>
      </button>
      {open ? (
        <div className="absolute right-0 top-14 w-64 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4">
          <p className="text-[12px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-[var(--text-tertiary)]">Weekly breakdown</p>
          <div className="mt-4 grid grid-cols-7 gap-2">
            {weekBreakdown.map((value, index) => (
              <div key={`${value}-${index}`} className="flex flex-col items-center gap-2">
                <div className="flex h-8 w-full items-end rounded bg-[var(--bg-tertiary)]" aria-hidden="true">
                  <div className="w-full rounded bg-[var(--accent-cyan)]" style={{ height: `${Math.min(value * 25, 100)}%` }} />
                </div>
                <span className="text-[11px] leading-[1.4] text-[var(--text-tertiary)]">{value}</span>
/** Sticky streak counter with expandable weekly detail. */
export default function StreakCounter({ days, weekBreakdown }: StreakCounterProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="sticky top-6 z-20 flex justify-end">
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="inline-flex items-center gap-2 rounded-[20px] bg-[var(--accent-purple)] px-3 py-2 text-[14px] font-semibold leading-[1.6] text-white transition-transform duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
        aria-expanded={expanded}
      >
        <Flame size={20} aria-hidden="true" />
        {days} day streak
      </button>
      {expanded && (
        <div className="absolute right-0 top-12 w-64 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.24)]">
          <p className="text-[12px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-[var(--text-tertiary)]">Weekly Breakdown</p>
          <div className="mt-3 flex items-end gap-2">
            {weekBreakdown.map((value, index) => (
              <div key={`${index}-${value}`} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-sm bg-[var(--accent-cyan)] transition-all duration-300" style={{ height: `${Math.max(8, value * 8)}px` }} />
                <span className="text-[11px] leading-[1.4] text-[var(--text-tertiary)]">D{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      )}
    </div>
  );
}
