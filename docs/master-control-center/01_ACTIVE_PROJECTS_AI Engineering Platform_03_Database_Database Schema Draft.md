# Database Schema Draft

Required tables:
- users_profile
- workspaces
- missions
- mission_runs
- agents
- workflow_templates
- prompt_templates
- evaluations
- risk_items
- approvals
- documents
- document_chunks
- decision_logs
- regression_tests
- integration_connections

Core table:
missions

Required mission fields:
- id
- workspace_id
- created_by
- title
- goal
- task_type
- priority
- status
- context
- constraints
- success_criteria
- confidence
- created_at
- updated_at

Core table:
mission_runs

Required run fields:
- id
- mission_id
- run_type
- input_payload
- output_payload
- model_used
- status
- latency_ms
- token_input
- token_output
- cost_estimate
- trace_url
- created_at
