"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1419]">
      <div className="bg-[#1A1F2E] p-8 rounded-lg border border-[#2D3748] w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">AI Engineering Platform</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-[#A0AEC0] mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-[#0F1419] border border-[#2D3748] rounded text-white focus:outline-none focus:border-[#00D4FF]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#A0AEC0] mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[#0F1419] border border-[#2D3748] rounded text-white focus:outline-none focus:border-[#00D4FF]"
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[#00D4FF] text-[#0F1419] font-semibold rounded hover:bg-[#00D4FF]/80 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-[#A0AEC0]">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#00D4FF] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}