export type Priority = "Low" | "Medium" | "High" | "Critical";

export type MissionStatus =
  | "Draft"
  | "Generated"
  | "Evaluated"
  | "Needs Patch"
  | "Saved";

export type Mission = {
  id: string;
  title: string;
  objective: string;
  context: string;
  constraints: string;
  successCriteria: string;
  priority: Priority;
  status: MissionStatus;
  createdAt: string;
  updatedAt: string;
  output?: MissionOutput;
};

export type MissionOutput = {
  mission: string;
  status: string;
  summary: string;
  evidence: string[];
  assumptions: string[];
  architecture: string[];
  implementation: string[];
  risks: string[];
  confidence: number;
  benchmark: {
    accuracy: number;
    completeness: number;
    usability: number;
    risk: number;
    formatCompliance: number;
  };
  war_test: string[];
  patch: string[];
  regression_tests: string[];
  documentation_updated: string[];
  next_actions: string[];
};
