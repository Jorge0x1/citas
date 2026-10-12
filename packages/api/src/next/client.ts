import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "./env";

// Cliente para Client Components ("use client").
export function createClient() {
  const { url, publishableKey } = getSupabaseEnv();
  return createBrowserClient(url, publishableKey);
}
