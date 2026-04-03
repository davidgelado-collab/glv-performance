// src/integrations/supabase/client.ts

// Tu nueva API en Arsys que ya comprobamos que devuelve []
const API_URL = "https://www.glvperformance.com/api/tuning.php";

/**
 * Simulamos el cliente de Supabase para que la app no rompa,
 * pero redirigimos todas las consultas a tu MySQL en Arsys.
 */
export const supabase = {
  from: (tableName: string) => ({
    // Simula el .select('*')
    select: (columns: string = '*') => ({
      // Llamamos a tu PHP en Arsys
      data: fetch(`${API_URL}?table=${tableName}`)
        .then(res => res.json())
        .catch(err => {
          console.error("Error conectando con Arsys:", err);
          return [];
        }),
      error: null,
      // Añadimos .order() por si Lovable lo usa para ordenar resultados
      order: () => ({
        data: fetch(`${API_URL}?table=${tableName}`).then(res => res.json()),
        error: null
      }),
      // Añadimos .single() por si Lovable espera un solo objeto (ej: un perfil)
      single: () => ({
        data: fetch(`${API_URL}?table=${tableName}`)
          .then(res => res.json())
          .then(data => (Array.isArray(data) ? data[0] : data)),
        error: null
      }),
      // Añadimos .eq() por si Lovable filtra (ej: .eq('id', 1))
      eq: (column: string, value: any) => ({
        data: fetch(`${API_URL}?table=${tableName}&${column}=${value}`)
          .then(res => res.json())
          .then(data => (Array.isArray(data) ? data[0] : data)),
        error: null
      })
    }),
    
    // Dejamos estos vacíos por ahora para que no den error
    insert: (data: any) => ({ data: null, error: null }),
    update: (data: any) => ({ data: null, error: null }),
    delete: () => ({ data: null, error: null }),
  }),

  // Simulamos la autenticación para que no de error al cargar la página
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({ 
      data: { subscription: { unsubscribe: () => {} } } 
    }),
    signOut: async () => ({ error: null }),
  }
} as any;
