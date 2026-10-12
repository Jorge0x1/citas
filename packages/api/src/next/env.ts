// Las variables NEXT_PUBLIC_* deben leerse de forma literal para que Next.js las incruste en el bundle del cliente.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export function getSupabaseEnv() {
  if (!url || !publishableKey) {
    throw new Error(
      "Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY. Revisa apps/web/.env.local",
    );
  }
  return { url, publishableKey };
}
