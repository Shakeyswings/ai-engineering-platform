# Structured Output Schema

Every AI run must return this structure:

{
  "mission": "",
  "status": "",
  "summary": "",
  "evidence": [],
  "assumptions": [],
  "architecture": {},
  "implementation": {},
  "risks": [],
  "confidence": 0,
  "benchmark": {},
  "war_test": {},
  "patch": {},
  "regression_tests": [],
  "documentation_updated": [],
  "next_actions": []
}

Rules:
- No free-form final outputs between system steps.
- Validate AI responses before saving.
- Failed validation creates a regression test.
