import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Return null if keys are missing to allow fallback/error UI
  if (!url || !anonKey) {
    return null;
  }

  return createBrowserClient(url, anonKey);
}

// Compatibility export for existing imports
export function getBrowserSupabase() {
  return createClient();
}
