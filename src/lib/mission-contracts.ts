import { z } from "zod";

export const prioritySchema = z.enum(["Low", "Medium", "High", "Critical"]);

export const missionStatusSchema = z.enum([
  "Draft",
  "Generated",
  "Evaluated",
  "Needs Patch",
  "Saved",
]);

export const missionInputSchema = z.object({
  id: z.string().optional().default(""),
  title: z.string().optional().default("Untitled Mission"),
  objective: z.string().optional().default(""),
  context: z.string().optional().default(""),
  constraints: z.string().optional().default(""),
  successCriteria: z.string().optional().default(""),
  priority: prioritySchema.optional().default("Medium"),
  status: missionStatusSchema.optional().default("Draft"),
  createdAt: z.string().optional().default(""),
  updatedAt: z.string().optional().default(""),
});

export const benchmarkSchema = z.object({
  accuracy: z.number().min(0).max(100),
  completeness: z.number().min(0).max(100),
  usability: z.number().min(0).max(100),
  risk: z.number().min(0).max(100),
  formatCompliance: z.number().min(0).max(100),
});

export const missionOutputSchema = z.object({
  mission: z.string(),
  status: z.string(),
  summary: z.string(),
  evidence: z.array(z.string()),
  assumptions: z.array(z.string()),
  architecture: z.array(z.string()),
  implementation: z.array(z.string()),
  risks: z.array(z.string()),
  confidence: z.number().min(0).max(100),
  benchmark: benchmarkSchema,
  war_test: z.array(z.string()),
  patch: z.array(z.string()),
  regression_tests: z.array(z.string()),
  documentation_updated: z.array(z.string()),
  next_actions: z.array(z.string()),
});

export type MissionStatusContract = z.infer<typeof missionStatusSchema>;
export type MissionInputContract = z.infer<typeof missionInputSchema>;
export type MissionOutputContract = z.infer<typeof missionOutputSchema>;

export function normalizeMissionInput(value: unknown): MissionInputContract {
  const parsed = missionInputSchema.safeParse(value ?? {});
  return parsed.success ? parsed.data : missionInputSchema.parse({});
}

export function normalizeMissionOutput(value: unknown, fallback: MissionOutputContract): MissionOutputContract {
  const parsed = missionOutputSchema.safeParse(value);
  return parsed.success ? parsed.data : fallback;
}
