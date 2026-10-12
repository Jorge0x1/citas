import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseEnv } from "./env";

// Refresca el token de sesión de Supabase en cada petición y reenvía las cookies actualizadas.
export async function updateSession(request: NextRequest) {
  const { url, publishableKey } = getSupabaseEnv();
  let response = NextResponse.next({ request });

  const supabase = createServerClient(url, publishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value);
        }
        response = NextResponse.next({ request });
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  // No meter código entre createServerClient y getClaims: puede provocar cierres de sesión aleatorios.
  await supabase.auth.getClaims();

  return response;
}
