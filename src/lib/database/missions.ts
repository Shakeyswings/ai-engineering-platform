import { getBrowserSupabase } from "@/lib/supabase/client";
import type { Mission } from "@/types/mission";

export async function saveMissionToSupabase(mission: Mission) {
  const supabase = getBrowserSupabase();

  if (!supabase) {
    return {
      ok: false,
      reason: "Supabase environment variables are missing.",
    };
  }

  const { error } = await supabase.from("missions").upsert({
    id: mission.id,
    title: mission.title,
    objective: mission.objective,
    context: mission.context,
    constraints: mission.constraints,
    success_criteria: mission.successCriteria,
    priority: mission.priority,
    status: mission.status,
    output: mission.output ?? null,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    return {
      ok: false,
      reason: error.message,
    };
  }

  return {
    ok: true,
    reason: "Mission saved to Supabase.",
  };
}

export async function loadMissionsFromSupabase() {
  const supabase = getBrowserSupabase();

  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("missions")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error || !data) {
    return [];
  }

  return data;
}
