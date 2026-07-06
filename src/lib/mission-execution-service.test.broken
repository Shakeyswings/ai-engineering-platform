import { describe, expect, it } from "vitest";
import { createMissionExecutionService } from "./mission-execution-service";
import { createMissionRepository } from "./mission-repository";

describe("MissionExecutionService", () => {
  it("transitions a mission through an allowed status change", () => {
    const repository = createMissionRepository();
    const service = createMissionExecutionService(repository);
    const mission = repository.create({ title: "Generate workflow" });

    const result = service.transitionMission(mission.id, "Generated", "generation-completed");

    expect(result.previousStatus).toBe("Draft");
    expect(result.nextStatus).toBe("Generated");
    expect(result.mission.status).toBe("Generated");
    expect(result.transition.allowed).toBe(true);
  });

  it("rejects disallowed status transitions", () => {
    const repository = createMissionRepository();
    const service = createMissionExecutionService(repository);
    const mission = repository.create({ title: "Invalid transition" });

    expect(() => service.transitionMission(mission.id, "Saved", "workflow-saved")).toThrow(
      "Mission cannot transition from Draft to Saved.",
    );
  });

  it("returns the existing mission when saving an already saved mission", () => {
    const repository = createMissionRepository();
    const service = createMissionExecutionService(repository);
    const mission = repository.create({ title: "Save workflow" });

    service.transitionMission(mission.id, "Generated", "generation-completed");
    const saved = service.transitionMission(mission.id, "Saved", "workflow-saved");
    const savedAgain = service.saveMission(mission.id);

    expect(saved.mission.status).toBe("Saved");
    expect(savedAgain.mission.status).toBe("Saved");
    expect(savedAgain.previousStatus).toBe("Saved");
    expect(savedAgain.nextStatus).toBe("Saved");
    expect(savedAgain.transition.allowed).toBe(true);
  });
});
