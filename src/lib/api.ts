const API_BASE = "https://glvperformance.com/api";

export interface Review {
  id: string;
  name: string;
  vehicle: string | null;
  service_type: string | null; // <-- 1. AÑADIDO: Interfaz para recibir datos
  rating: number;
  message: string;
  approved: boolean | number;
  created_at: string;
}

function getToken(): string | null {
  return localStorage.getItem("admin_token");
}

function authHeaders(): HeadersInit {
  const token = getToken();
  return token
    ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    : { "Content-Type": "application/json" };
}

export async function submitReview(data: {
  name: string;
  vehicle: string;
  service_type: string; // <-- 2. AÑADIDO: Parámetro para enviar datos
  rating: number;
  message: string;
}): Promise<void> {
  const res = await fetch(`${API_BASE}/reviews.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Error al enviar la reseña");
  }
}

// ... El resto de funciones (getApprovedReviews, getAllReviews, etc.) se mantienen igual
