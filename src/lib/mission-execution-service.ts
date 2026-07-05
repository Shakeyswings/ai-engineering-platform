import type { MissionRecord, MissionRepository } from "./mission-repository";
import {
  assertMissionTransition,
  evaluateMissionTransition,
  isTerminalMissionStatus,
  type MissionStatus,
  type MissionTransitionReason,
  type MissionTransitionResult,
} from "./mission-state-machine";

export interface MissionExecutionResult {
  mission: MissionRecord;
  previousStatus: MissionStatus;
  nextStatus: MissionStatus;
  transition: MissionTransitionResult;
}

export class MissionExecutionService {
  constructor(private readonly repository: MissionRepository) {}

  listMissions(): MissionRecord[] {
    return this.repository.list();
  }

  getMission(id: string): MissionRecord | null {
    return this.repository.get(id);
  }

  canTransitionMission(
    id: string,
    nextStatus: MissionStatus,
    reason?: MissionTransitionReason,
  ): MissionTransitionResult {
    const mission = this.requireMission(id);

    return evaluateMissionTransition(mission.status, nextStatus, reason);
  }

  transitionMission(
    id: string,
    nextStatus: MissionStatus,
    reason?: MissionTransitionReason,
  ): MissionExecutionResult {
    const mission = this.requireMission(id);
    const previousStatus = mission.status;
    const transition = assertMissionTransition(previousStatus, nextStatus, reason);
    const updatedMission = this.repository.transition(id, nextStatus);

    return {
      mission: updatedMission,
      previousStatus,
      nextStatus,
      transition,
    };
  }

  saveMission(id: string, reason: MissionTransitionReason = "workflow-saved"): MissionExecutionResult {
    const mission = this.requireMission(id);

    if (isTerminalMissionStatus(mission.status)) {
      return {
        mission,
        previousStatus: mission.status,
        nextStatus: mission.status,
        transition: {
          allowed: true,
          from: mission.status,
          to: mission.status,
          reason,
          message: `Mission is already ${mission.status}.`,
        },
      };
    }

    return this.transitionMission(id, "Saved", reason);
  }

  private requireMission(id: string): MissionRecord {
    const mission = this.repository.get(id);

    if (!mission) {
      throw new Error(`Mission ${id} was not found.`);
    }

    return mission;
  }
}

export function createMissionExecutionService(
  repository: MissionRepository,
): MissionExecutionService {
  return new MissionExecutionService(repository);
}
