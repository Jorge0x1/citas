import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseEnv } from "./env";

// Cliente para Server Components, Server Functions y Route Handlers.
// Crear uno nuevo por petición: nunca guardarlo en una variable global.
export async function createClient() {
  const { url, publishableKey } = getSupabaseEnv();
  const cookieStore = await cookies();

  return createServerClient(url, publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Llamado desde un Server Component, donde no se pueden escribir cookies.
          // Es seguro ignorarlo: el proxy refresca la sesión en cada petición.
        }
      },
    },
  });
}
