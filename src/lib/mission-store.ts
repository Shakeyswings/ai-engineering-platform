import type { Mission } from "@/types/mission";

const KEY = "ai_engineering_platform_missions";

export function getMissions(): Mission[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Mission[];
  } catch {
    return [];
  }
}

export function getMission(id: string): Mission | undefined {
  return getMissions().find((mission) => mission.id === id);
}

export function saveMission(mission: Mission) {
  const missions = getMissions();
  const index = missions.findIndex((item) => item.id === mission.id);
  const next = [...missions];

  if (index >= 0) {
    next[index] = mission;
  } else {
    next.unshift(mission);
  }

  window.localStorage.setItem(KEY, JSON.stringify(next));
}

export function saveWorkflow(mission: Mission) {
  const saved = {
    ...mission,
    status: "Saved" as const,
    updatedAt: new Date().toISOString(),
  };

  saveMission(saved);
  return saved;
}
