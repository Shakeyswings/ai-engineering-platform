import { z } from "zod";
import { missionStatusSchema } from "./mission-contracts";

export type MissionStatus = z.infer<typeof missionStatusSchema>;

export type MissionTransitionReason =
  | "mission-created"
  | "generation-started"
  | "generation-completed"
  | "evaluation-completed"
  | "patch-required"
  | "patch-applied"
  | "workflow-saved";

export interface MissionTransitionResult {
  allowed: boolean;
  from: MissionStatus;
  to: MissionStatus;
  reason?: MissionTransitionReason;
  message: string;
}

const transitions: Record<MissionStatus, MissionStatus[]> = {
  Draft: ["Generated"],
  Generated: ["Evaluated", "Needs Patch", "Saved"],
  Evaluated: ["Needs Patch", "Saved"],
  "Needs Patch": ["Generated", "Evaluated"],
  Saved: [],
};

const terminalStatuses = new Set<MissionStatus>(["Saved"]);

export function getAllowedMissionTransitions(status: MissionStatus): MissionStatus[] {
  return transitions[status] ?? [];
}

export function isTerminalMissionStatus(status: MissionStatus): boolean {
  return terminalStatuses.has(status);
}

export function canTransitionMission(from: MissionStatus, to: MissionStatus): boolean {
  return getAllowedMissionTransitions(from).includes(to);
}

export function evaluateMissionTransition(
  from: MissionStatus,
  to: MissionStatus,
  reason?: MissionTransitionReason,
): MissionTransitionResult {
  const allowed = canTransitionMission(from, to);

  return {
    allowed,
    from,
    to,
    reason,
    message: allowed
      ? `Mission can transition from ${from} to ${to}.`
      : `Mission cannot transition from ${from} to ${to}.`,
  };
}

export function assertMissionTransition(
  from: MissionStatus,
  to: MissionStatus,
  reason?: MissionTransitionReason,
): MissionTransitionResult {
  const result = evaluateMissionTransition(from, to, reason);

  if (!result.allowed) {
    throw new Error(result.message);
  }

  return result;
}
