# Architecture Blueprint

Recommended architecture:

Frontend:
Next.js web app

Backend:
Supabase Postgres, Auth, Storage, and API layer

AI layer:
OpenAI API with structured outputs

Observability:
LangSmith tracing and evaluation

Deployment:
GitHub and Vercel

Local machine:
The Lenovo ThinkPad is the command center only. Do not use it for heavy local AI training.

Core architecture:
User -> Next.js Frontend -> Mission Workspace -> Supabase Auth and Postgres -> AI Orchestrator API Route -> OpenAI Structured Output -> Evaluation and Risk Review -> Workflow Library -> LangSmith Trace
