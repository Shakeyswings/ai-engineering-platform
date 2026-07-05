import {
  normalizeMissionInput,
  type MissionInputContract,
  type MissionOutputContract,
  type MissionStatusContract,
} from "./mission-contracts";
import { assertMissionTransition } from "./mission-state-machine";

export interface MissionRecord extends MissionInputContract {
  id: string;
  status: MissionStatusContract;
  output?: MissionOutputContract;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateMissionRecordInput {
  title?: string;
  objective?: string;
  context?: string;
  constraints?: string;
  successCriteria?: string;
  priority?: MissionInputContract["priority"];
}

export interface UpdateMissionRecordInput extends Partial<CreateMissionRecordInput> {
  output?: MissionOutputContract;
}

export interface MissionRepository {
  list(): MissionRecord[];
  get(id: string): MissionRecord | null;
  create(input: CreateMissionRecordInput): MissionRecord;
  update(id: string, input: UpdateMissionRecordInput): MissionRecord;
  transition(id: string, status: MissionStatusContract): MissionRecord;
}

export class InMemoryMissionRepository implements MissionRepository {
  private records = new Map<string, MissionRecord>();

  list(): MissionRecord[] {
    return [...this.records.values()].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }

  get(id: string): MissionRecord | null {
    return this.records.get(id) ?? null;
  }

  create(input: CreateMissionRecordInput): MissionRecord {
    const now = new Date().toISOString();
    const normalized = normalizeMissionInput({
      ...input,
      id: createMissionId(),
      status: "Draft",
      createdAt: now,
      updatedAt: now,
    });

    const record: MissionRecord = {
      ...normalized,
      id: normalized.id || createMissionId(),
      status: "Draft",
      version: 1,
      createdAt: now,
      updatedAt: now,
    };

    this.records.set(record.id, record);
    return record;
  }

  update(id: string, input: UpdateMissionRecordInput): MissionRecord {
    const existing = this.require(id);
    const now = new Date().toISOString();
    const normalized = normalizeMissionInput({
      ...existing,
      ...input,
      id: existing.id,
      status: existing.status,
      createdAt: existing.createdAt,
      updatedAt: now,
    });

    const record: MissionRecord = {
      ...existing,
      ...normalized,
      output: input.output ?? existing.output,
      version: existing.version + 1,
      updatedAt: now,
    };

    this.records.set(id, record);
    return record;
  }

  transition(id: string, status: MissionStatusContract): MissionRecord {
    const existing = this.require(id);
    assertMissionTransition(existing.status, status);

    const now = new Date().toISOString();
    const record: MissionRecord = {
      ...existing,
      status,
      version: existing.version + 1,
      updatedAt: now,
    };

    this.records.set(id, record);
    return record;
  }

  private require(id: string): MissionRecord {
    const record = this.get(id);

    if (!record) {
      throw new Error(`Mission ${id} was not found.`);
    }

    return record;
  }
}

export function createMissionRepository(): MissionRepository {
  return new InMemoryMissionRepository();
}

function createMissionId(): string {
  return `mission-${crypto.randomUUID()}`;
}
