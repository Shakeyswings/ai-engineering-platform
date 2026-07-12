"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmationSent, setConfirmationSent] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!supabase) {
      setError("Supabase is not configured. Please check your environment variables.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Check if email confirmation is required
      if (data?.user && !data.session) {
        setConfirmationSent(true);
        setLoading(false);
      } else if (data?.session) {
        // User is immediately signed in, redirect to home
        router.push("/");
      }
    }
  };

  if (confirmationSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F1419]">
        <div className="bg-[#1A1F2E] p-8 rounded-lg border border-[#2D3748] w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Check Your Email</h1>
          <p className="text-[#A0AEC0] mb-4">
            We've sent a confirmation link to <strong>{email}</strong>. Please check your email and click the link to confirm your account.
          </p>
          <button
            onClick={() => {
              setConfirmationSent(false);
              setEmail("");
              setPassword("");
            }}
            className="w-full py-2 bg-[#00D4FF] text-[#0F1419] font-semibold rounded hover:bg-[#00D4FF]/80 transition"
          >
            Back to Signup
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1419]">
      <div className="bg-[#1A1F2E] p-8 rounded-lg border border-[#2D3748] w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Create Account</h1>
        <form onSubmit={handleSignup} className="space-y-4">
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
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-[#00D4FF] text-[#0F1419] font-semibold rounded hover:bg-[#00D4FF]/80 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-[#A0AEC0]">
          Already have an account?{" "}
          <a href="/login" className="text-[#00D4FF] hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
