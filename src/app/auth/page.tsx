"use client";

import { useState } from "react";
import Link from "next/link";
import { getBrowserSupabase } from "@/lib/supabase/client";

export default function AuthPage() {
  const supabase = getBrowserSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  async function signUp() {
    if (!supabase) {
      setStatus("Supabase is not configured yet.");
      return;
    }

    const { error } = await supabase.auth.signUp({ email, password });
    setStatus(error ? error.message : "Signup submitted. Check email if confirmation is enabled.");
  }

  async function signIn() {
    if (!supabase) {
      setStatus("Supabase is not configured yet.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setStatus(error ? error.message : "Signed in.");
  }

  async function signOut() {
    if (!supabase) {
      setStatus("Supabase is not configured yet.");
      return;
    }

    await supabase.auth.signOut();
    setStatus("Signed out.");
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <section className="mx-auto max-w-xl space-y-8">
        <Link href="/" className="text-cyan-400">← Dashboard</Link>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Auth</p>
          <h1 className="mt-4 text-4xl font-bold">Supabase Login</h1>
          <p className="mt-3 text-slate-300">
            This page is ready, but it requires Supabase keys in .env.local.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <div className="grid gap-3 md:grid-cols-3">
            <button onClick={signIn} className="rounded-xl bg-cyan-400 p-3 font-semibold text-slate-950">
              Sign In
            </button>
            <button onClick={signUp} className="rounded-xl bg-slate-800 p-3 font-semibold">
              Sign Up
            </button>
            <button onClick={signOut} className="rounded-xl bg-slate-800 p-3 font-semibold">
              Sign Out
            </button>
          </div>

          {status && <p className="text-slate-300">{status}</p>}
        </div>
      </section>
    </main>
  );
}
