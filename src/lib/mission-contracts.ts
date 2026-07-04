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
  id: z.string().min(1),
  title: z.string().default("Untitled Mission"),
  objective: z.string().default(""),
  context: z.string().default(""),
  constraints: z.string().default(""),
  successCriteria: z.string().default(""),
  priority: prioritySchema.default("Medium"),
  status: missionStatusSchema.default("Draft"),
  createdAt: z.string().default(""),
  updatedAt: z.string().default(""),
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

export type MissionInputContract = z.infer<typeof missionInputSchema>;
export type MissionOutputContract = z.infer<typeof missionOutputSchema>;

export function normalizeMissionOutput(value: unknown, fallback: MissionOutputContract): MissionOutputContract {
  const parsed = missionOutputSchema.safeParse(value);
  return parsed.success ? parsed.data : fallback;
}
