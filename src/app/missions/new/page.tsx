"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveMission } from "@/lib/mission-store";
import type { Mission, Priority } from "@/types/mission";

const inputClass = "w-full rounded-md border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-3 text-[14px] leading-[1.6] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]";

export default function NewMissionPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [objective, setObjective] = useState("");
  const [context, setContext] = useState("");
  const [constraints, setConstraints] = useState("");
  const [successCriteria, setSuccessCriteria] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [loading, setLoading] = useState(false);

  async function createMission() {
    setLoading(true);

    const now = new Date().toISOString();

    const mission: Mission = {
      id: crypto.randomUUID(),
      title: title || "Untitled Mission",
      objective,
      context,
      constraints,
      successCriteria,
      priority,
      status: "Draft",
      createdAt: now,
      updatedAt: now,
    };

    const response = await fetch("/api/mission/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mission),
    });

    const output = await response.json();

    const completed: Mission = {
      ...mission,
      status: "Generated",
      output,
      updatedAt: new Date().toISOString(),
    };

    saveMission(completed);
    router.push(`/missions/${completed.id}`);
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] p-8 text-[var(--text-primary)]">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <p className="text-[12px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-[var(--accent-cyan)]">
            New Mission
          </p>
          <h1 className="mt-4 text-[48px] font-bold leading-[1.1]">Create a Mission</h1>
          <p className="mt-3 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
            Define the work clearly so the platform can generate a structured plan.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
          <input className={inputClass} placeholder="Mission title" value={title} onChange={(event) => setTitle(event.target.value)} />

          <textarea className={`${inputClass} min-h-28`} placeholder="Objective" value={objective} onChange={(event) => setObjective(event.target.value)} />

          <textarea className={`${inputClass} min-h-28`} placeholder="Context" value={context} onChange={(event) => setContext(event.target.value)} />

          <textarea className={`${inputClass} min-h-28`} placeholder="Constraints" value={constraints} onChange={(event) => setConstraints(event.target.value)} />

          <textarea className={`${inputClass} min-h-28`} placeholder="Success criteria" value={successCriteria} onChange={(event) => setSuccessCriteria(event.target.value)} />

          <select className={inputClass} value={priority} onChange={(event) => setPriority(event.target.value as Priority)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

          <button
            onClick={createMission}
            disabled={loading}
            className="w-full rounded-lg bg-[var(--accent-cyan)] px-4 py-3 text-[14px] font-semibold leading-[1.6] text-[var(--text-inverted)] transition duration-150 hover:brightness-110 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
          >
            {loading ? "Generating Mission..." : "Generate Mission Plan"}
          </button>
        </div>
      </section>
    </main>
  );
}
