"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getMission, saveWorkflow } from "@/lib/mission-store";
import { useEffect, useState } from "react";
import type { Mission } from "@/types/mission";

export default function MissionWorkspacePage() {
  const params = useParams<{ id: string }>();
  const [mission, setMission] = useState<Mission | null>(null);

  useEffect(() => {
    setMission(getMission(params.id) ?? null);
  }, [params.id]);

  if (!mission) {
    return (
      <main className="min-h-screen bg-slate-950 p-8 text-white">
        <p>Mission not found.</p>
        <Link href="/" className="text-cyan-400">Return to dashboard</Link>
      </main>
    );
  }

  const output = mission.output;

  function handleSaveWorkflow() {
    const saved = saveWorkflow(mission);
    setMission(saved);
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Mission Workspace
            </p>
            <h1 className="mt-4 text-4xl font-bold">{mission.title}</h1>
            <p className="mt-3 text-slate-300">{mission.objective}</p>
          </div>

          <button
            onClick={handleSaveWorkflow}
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Save Workflow
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Metric label="Status" value={mission.status} />
          <Metric label="Priority" value={mission.priority} />
          <Metric label="Confidence" value={`${output?.confidence ?? 0}%`} />
          <Metric label="Result" value={output ? "Generated" : "Draft"} />
        </div>

        {output && (
          <div className="grid gap-4 lg:grid-cols-2">
            <Panel title="Summary" items={[output.summary]} />
            <Panel title="Assumptions" items={output.assumptions} />
            <Panel title="Architecture" items={output.architecture} />
            <Panel title="Implementation" items={output.implementation} />
            <Panel title="Risks" items={output.risks} />
            <Panel title="Patch" items={output.patch} />
            <Panel title="Regression Tests" items={output.regression_tests} />
            <Panel title="Next Actions" items={output.next_actions} />
          </div>
        )}

        <Link href="/workflows" className="inline-block text-cyan-400">
          Open Workflow Library
        </Link>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-semibold">{value}</p>
    </div>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
