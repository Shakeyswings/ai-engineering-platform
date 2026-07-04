"use client";

import { Award, X } from "lucide-react";

interface RewardToastProps {
  badgeName: string;
  visible: boolean;
  onClose: () => void;
}

export default function RewardToast({ badgeName, visible, onClose }: RewardToastProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex w-80 animate-[uiSlideIn_300ms_ease-out] items-center gap-3 rounded-lg bg-[var(--accent-teal)] p-4 text-[var(--text-inverted)]">
      <Award size={24} aria-hidden="true" />
      <p className="flex-1 text-[14px] font-medium leading-[1.6]">You earned: {badgeName}</p>
      <button
        type="button"
        onClick={onClose}
        className="rounded-md p-1 transition duration-150 hover:bg-[var(--text-inverted)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-inverted)]"
        aria-label="Dismiss reward"
      >
        <X size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
