# Phase 1 - Supabase Integration

Status:
Scaffold installed.

Completed:
- Supabase browser client
- Settings page
- Auth page
- Supabase SQL schema
- Mission persistence helper
- Local .env.local placeholder

Manual setup required:
1. Create a Supabase project.
2. Open Supabase SQL Editor.
3. Paste and run supabase/schema.sql.
4. Copy Project URL into NEXT_PUBLIC_SUPABASE_URL.
5. Copy anon public key into NEXT_PUBLIC_SUPABASE_ANON_KEY.
6. Copy service role key into SUPABASE_SERVICE_ROLE_KEY.
7. Restart the Next.js dev server.

Do not expose SUPABASE_SERVICE_ROLE_KEY in browser code.
