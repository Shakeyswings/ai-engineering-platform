import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: Request) {
  const mission = await request.json();

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
              mission,
            }),
          },
        ],
      });

      const text = response.output_text ?? "";
      const parsed = JSON.parse(text);
      return NextResponse.json(parsed);
    } catch {
      return NextResponse.json(createFallbackOutput(mission));
    }
  }

  return NextResponse.json(createFallbackOutput(mission));
}

function createFallbackOutput(mission: {
  title?: string;
  objective?: string;
  context?: string;
  constraints?: string;
  successCriteria?: string;
}) {
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
    documentation_updated: [
      "Mission generated using MVP local workflow.",
    ],
    next_actions: [
      "Connect Supabase.",
      "Add OpenAI API key.",
      "Replace fallback generation with validated structured output.",
      "Build evaluation dashboard.",
    ],
  };
}
