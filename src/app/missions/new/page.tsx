"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveMission } from "@/lib/mission-store";
import type { Mission, Priority } from "@/types/mission";

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
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            New Mission
          </p>
          <h1 className="mt-4 text-4xl font-bold">Create a Mission</h1>
          <p className="mt-3 text-slate-300">
            Define the work clearly so the platform can generate a structured plan.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Mission title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <textarea
            className="min-h-28 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Objective"
            value={objective}
            onChange={(event) => setObjective(event.target.value)}
          />

          <textarea
            className="min-h-28 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Context"
            value={context}
            onChange={(event) => setContext(event.target.value)}
          />

          <textarea
            className="min-h-28 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Constraints"
            value={constraints}
            onChange={(event) => setConstraints(event.target.value)}
          />

          <textarea
            className="min-h-28 w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Success criteria"
            value={successCriteria}
            onChange={(event) => setSuccessCriteria(event.target.value)}
          />

          <select
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            value={priority}
            onChange={(event) => setPriority(event.target.value as Priority)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

          <button
            onClick={createMission}
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300 disabled:opacity-50"
          >
            {loading ? "Generating Mission..." : "Generate Mission Plan"}
          </button>
        </div>
      </section>
    </main>
  );
}
