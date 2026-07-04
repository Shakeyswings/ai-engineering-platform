"use client";

import { Activity } from "lucide-react";
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
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
