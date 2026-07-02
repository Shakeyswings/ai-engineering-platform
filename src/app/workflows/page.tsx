"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getMissions } from "@/lib/mission-store";
import type { Mission } from "@/types/mission";

export default function WorkflowLibraryPage() {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    setMissions(getMissions());
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Workflow Library
            </p>
            <h1 className="mt-4 text-4xl font-bold">Saved Missions</h1>
          </div>

          <Link
            href="/missions/new"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            New Mission
          </Link>
        </div>

        <div className="space-y-4">
          {missions.length === 0 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-300">
              No missions saved yet.
            </div>
          )}

          {missions.map((mission) => (
            <Link
              href={`/missions/${mission.id}`}
              key={mission.id}
              className="block rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-600"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">{mission.title}</h2>
                  <p className="mt-2 text-slate-400">{mission.objective}</p>
                </div>
                <div className="text-right text-sm text-slate-400">
                  <p>{mission.status}</p>
                  <p>{mission.priority}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
