"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  trend: number;
  data: number[];
  href?: string;
}

/** KPI card with trend and compact sparkline drill-down affordance. */
export default function KPICard({ title, value, trend, data, href }: KPICardProps) {
  const values = data.length > 1 ? data : [0, 0];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const path = values.map((point, index) => {
    const x = (index / (values.length - 1)) * 100;
    const y = 36 - ((point - min) / range) * 32;
    return `${index === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");
  const positive = trend >= 0;
  const className = "group block w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--accent-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]";
  const path = values
    .map((point, index) => {
      const x = (index / (values.length - 1)) * 100;
      const y = 36 - ((point - min) / range) * 32;
      return `${index === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
  const positive = trend >= 0;
  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[12px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-[var(--text-tertiary)]">{title}</p>
          <p className="mt-2 text-[32px] font-bold leading-[1.2] text-[var(--text-primary)]">{value}</p>
        </div>
        <span className={`inline-flex items-center gap-1 text-[14px] font-semibold leading-[1.6] ${positive ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>
          {positive ? <ArrowUpRight size={20} aria-hidden="true" /> : <ArrowDownRight size={20} aria-hidden="true" />}
          {positive ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
          {Math.abs(trend)}%
        </span>
      </div>
      <svg className="mt-4 h-10 w-[100px]" viewBox="0 0 100 40" role="img" aria-label={`${title} trend`}>
        <path d={path} fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="mt-3 block text-[12px] font-medium leading-[1.5] text-[var(--text-tertiary)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">View drill-down</span>
    </>
  );

      <span className="mt-3 block text-[12px] font-medium leading-[1.5] text-[var(--text-tertiary)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
        View drill-down
      </span>
    </>
  );

  const className = "group block w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--accent-cyan)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]";

  return href ? <a href={href} className={className}>{content}</a> : <button type="button" className={className}>{content}</button>;
}
