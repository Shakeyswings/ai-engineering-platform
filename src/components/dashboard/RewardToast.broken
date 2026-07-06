"use client";

import { Award, X } from "lucide-react";
import { Trophy, X } from "lucide-react";
import { useEffect, useState } from "react";

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
/** Bottom-right reward toast with timed dismissal. */
export default function RewardToast({ badgeName, visible, onClose }: RewardToastProps) {
  const [rendered, setRendered] = useState(visible);

  useEffect(() => {
    if (visible) setRendered(true);
    if (!visible) {
      const timeout = window.setTimeout(() => setRendered(false), 300);
      return () => window.clearTimeout(timeout);
    }
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const timeout = window.setTimeout(onClose, 4000);
    return () => window.clearTimeout(timeout);
  }, [visible, onClose]);

  if (!rendered) return null;

  return (
    <div role="status" aria-live="polite" className={`fixed bottom-6 right-6 z-50 flex max-w-[360px] items-center gap-3 rounded-lg bg-[var(--accent-teal)] p-4 text-[14px] font-medium leading-[1.6] text-[var(--text-inverted)] shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
      <Trophy size={24} aria-hidden="true" />
      <span>You earned: {badgeName}</span>
      <button type="button" onClick={onClose} aria-label="Dismiss reward" className="ml-2 flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-150 hover:bg-[rgba(15,20,25,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bg-primary)]">
        <X size={20} />
      </button>
    </div>
  );
}
