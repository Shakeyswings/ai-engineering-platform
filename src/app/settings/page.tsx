import Link from "next/link";
import { getSupabaseStatus } from "@/lib/supabase/env";

export default function SettingsPage() {
  const supabase = getSupabaseStatus();

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <Link href="/" className="text-cyan-400">← Dashboard</Link>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Settings</p>
          <h1 className="mt-4 text-4xl font-bold">System Configuration</h1>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Supabase</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>NEXT_PUBLIC_SUPABASE_URL: {supabase.hasUrl ? "Configured" : "Missing"}</li>
            <li>NEXT_PUBLIC_SUPABASE_ANON_KEY: {supabase.hasAnonKey ? "Configured" : "Missing"}</li>
            <li>SUPABASE_SERVICE_ROLE_KEY: {supabase.hasServiceRole ? "Configured" : "Missing"}</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-semibold">Phase 1 Status</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>Supabase client scaffold installed</li>
            <li>Auth page installed</li>
            <li>Database schema file generated</li>
            <li>Mission persistence helpers installed</li>
            <li>Manual step remaining: create Supabase project and paste keys into .env.local</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
