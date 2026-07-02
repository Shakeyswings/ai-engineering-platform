# Approval Rules

Human approval is required before:

- External write actions
- GitHub commits
- Production deployments
- Sending emails or messages
- Deleting files or data
- Changing system architecture
- Running paid API-heavy jobs
- Connecting new integrations
- Automating external services

Default rule:
Read actions may proceed with logging.
Write actions require approval.
Destructive actions require explicit approval.
