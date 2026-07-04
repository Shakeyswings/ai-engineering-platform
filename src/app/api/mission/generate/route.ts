import { NextResponse } from "next/server";
import OpenAI from "openai";
import {
  missionInputSchema,
  normalizeMissionOutput,
  type MissionInputContract,
  type MissionOutputContract,
} from "@/lib/mission-contracts";

export async function POST(request: Request) {
  const rawMission = await request.json();
  const mission = missionInputSchema.parse(rawMission);
  const fallback = createFallbackOutput(mission);

  if (process.env.OPENAI_API_KEY) {
    try {
      const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const response = await client.responses.create({
        model: "gpt-5.1-mini",
        input: [
          {
            role: "system",
            content:
              "You are an AI Engineering Platform orchestrator. Return only valid JSON matching the required output contract.",
          },
          {
            role: "user",
            content: JSON.stringify({
              instruction:
                "Generate a structured mission plan with evaluation, risks, patch, regression tests, and next actions.",
              output_contract: [
                "mission",
                "status",
                "summary",
                "evidence",
                "assumptions",
                "architecture",
                "implementation",
                "risks",
                "confidence",
                "benchmark",
                "war_test",
                "patch",
                "regression_tests",
                "documentation_updated",
                "next_actions",
              ],
              mission,
            }),
          },
        ],
      });

      const text = response.output_text ?? "";
      const parsed = JSON.parse(text);
      return NextResponse.json(normalizeMissionOutput(parsed, fallback));
    } catch {
      return NextResponse.json(fallback);
    }
  }

  return NextResponse.json(fallback);
}

function createFallbackOutput(mission: MissionInputContract): MissionOutputContract {
  return {
    mission: mission.title || "Untitled Mission",
    status: "Generated",
    summary:
      mission.objective ||
      "Mission created. Add more objective detail to improve output quality.",
    evidence: [
      "Mission was generated from user-provided objective, context, constraints, and success criteria.",
    ],
    assumptions: [
      "The user wants a practical MVP before advanced automation.",
      "Human approval remains required before external side effects.",
    ],
    architecture: [
      "Use a single orchestrator first.",
      "Store mission state before adding advanced agents.",
      "Keep the platform cloud-first and evaluation-driven.",
    ],
    implementation: [
      "Create mission record.",
      "Generate structured plan.",
      "Evaluate plan quality.",
      "Save reusable workflow.",
    ],
    risks: [
      "Scope may expand too quickly.",
      "Missing API keys prevent live AI calls.",
      "Database persistence is not connected yet.",
    ],
    confidence: 82,
    benchmark: {
      accuracy: 80,
      completeness: 78,
      usability: 86,
      risk: 74,
      formatCompliance: 100,
    },
    war_test: [
      "Check behavior with vague objectives.",
      "Check behavior with missing context.",
      "Check behavior with conflicting constraints.",
    ],
    patch: [
      "Add Supabase persistence.",
      "Add OpenAI structured output schema validation.",
      "Add mission evaluation scoring.",
    ],
    regression_tests: [
      "Incomplete mission input should still produce a safe fallback.",
      "Missing OpenAI key should not crash the app.",
      "Generated output must preserve required contract fields.",
    ],
    documentation_updated: ["Mission generated using MVP local workflow."],
    next_actions: [
      "Connect Supabase.",
      "Add OpenAI API key.",
      "Replace fallback generation with validated structured output.",
      "Build evaluation dashboard.",
    ],
  };
}
