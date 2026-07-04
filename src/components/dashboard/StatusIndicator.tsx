"use client";

export type StatusTone = "success" | "warning" | "error" | "info" | "inProgress";
export type StatusSize = "small" | "medium" | "large";

interface StatusIndicatorProps {
  status: string;
  tone?: StatusTone;
  size?: StatusSize;
  className?: string;
}

const toneClass: Record<StatusTone, string> = {
  success: "bg-[var(--color-success)]",
  warning: "bg-[var(--color-warning)]",
  error: "bg-[var(--color-danger)]",
  info: "bg-[var(--color-info)]",
  inProgress: "bg-[var(--accent-cyan)] animate-[uiPulse_2s_ease-in-out_infinite]",
};

const sizeClass: Record<StatusSize, string> = {
  small: "text-[12px]",
  medium: "text-[14px]",
  large: "text-[16px]",
};

/** Inline status label with accessible dot and text indicator. */
export default function StatusIndicator({
  status,
  tone = "info",
  size = "medium",
  className = "",
}: StatusIndicatorProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-medium leading-[1.5] text-[var(--text-secondary)] ${sizeClass[size]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${toneClass[tone]}`} aria-hidden="true" />
      <span>{status}</span>
    </span>
  );
}
