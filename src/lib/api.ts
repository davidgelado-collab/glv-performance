const API_BASE = "https://glvperformance.com/api";

export interface Review {
  id: string;
  name: string;
  vehicle: string | null;
  service_type: string | null;
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
  service_type: string;
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

export async function getApprovedReviews(): Promise<Review[]> {
  const res = await fetch(`${API_BASE}/reviews.php`);
  if (!res.ok) throw new Error("Error al cargar reseñas");
  return res.json();
}

export async function getAllReviews(): Promise<Review[]> {
  const res = await fetch(`${API_BASE}/reviews.php?all=1`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Error al cargar reseñas");
  return res.json();
}

export async function toggleApproval(id: string, approved: boolean): Promise<void> {
  const res = await fetch(`${API_BASE}/reviews.php?id=${encodeURIComponent(id)}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify({ approved: approved ? 1 : 0 }),
  });
  if (!res.ok) throw new Error("Error al actualizar reseña");
}

export async function deleteReview(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/reviews.php?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Error al eliminar reseña");
}

export async function adminLogin(email: string, password: string): Promise<string> {
  const res = await fetch(`${API_BASE}/login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Credenciales incorrectas");
  const data = await res.json();
  localStorage.setItem("admin_token", data.token);
  return data.token;
}

export function adminLogout(): void {
  localStorage.removeItem("admin_token");
}

// ESTA ES LA FUNCIÓN QUE FALTABA EXPORTAR
export function isAdminLoggedIn(): boolean {
  return !!getToken();
}
