import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Check, X, Trash2, LogOut } from "lucide-react";
import {
  adminLogin,
  adminLogout,
  isAdminLoggedIn,
  getAllReviews,
  toggleApproval,
  deleteReview as apiDeleteReview,
  type Review,
} from "@/lib/api";

const Admin = () => {
  const [loggedIn, setLoggedIn] = useState(isAdminLoggedIn());
  const [reviews, setReviews] = useState<Review[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();

  const fetchReviews = useCallback(async () => {
    try {
      const data = await getAllReviews();
      setReviews(data);
    } catch {
      // token may be invalid
      adminLogout();
      setLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) fetchReviews();
  }, [loggedIn, fetchReviews]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      await adminLogin(email, password);
      setLoggedIn(true);
    } catch {
      setLoginError("Credenciales incorrectas");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    adminLogout();
    setLoggedIn(false);
    navigate("/");
  };

  const handleToggle = async (id: string, approved: boolean | number) => {
    await toggleApproval(id, !approved);
    fetchReviews();
  };

  const handleDelete = async (id: string) => {
    await apiDeleteReview(id);
    fetchReviews();
  };

  if (!loggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm">
          <h1 className="mb-8 text-center font-display text-2xl font-bold uppercase text-foreground">
            Admin <span className="text-primary">Panel</span>
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            {loginError && (
              <p className="font-body text-sm text-destructive">{loginError}</p>
            )}
            <Button variant="hero" size="lg" className="w-full" disabled={loginLoading}>
              {loginLoading ? "Entrando..." : "Iniciar Sesión"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const pending = reviews.filter((r) => !r.approved);
  const approved = reviews.filter((r) => !!r.approved);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="font-display text-xl font-bold uppercase text-foreground">
            Gestión de <span className="text-primary">Reseñas</span>
          </h1>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Salir
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <h2 className="mb-4 font-display text-lg font-bold uppercase text-foreground">
          Pendientes ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="mb-8 font-body text-sm text-muted-foreground">No hay reseñas pendientes.</p>
        ) : (
          <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pending.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onToggle={() => handleToggle(review.id, review.approved)}
                onDelete={() => handleDelete(review.id)}
              />
            ))}
          </div>
        )}

        <h2 className="mb-4 font-display text-lg font-bold uppercase text-foreground">
          Aprobadas ({approved.length})
        </h2>
        {approved.length === 0 ? (
          <p className="font-body text-sm text-muted-foreground">No hay reseñas aprobadas.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {approved.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
                onToggle={() => handleToggle(review.id, review.approved)}
                onDelete={() => handleDelete(review.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function ReviewCard({
  review,
  onToggle,
  onDelete,
}: {
  review: Review;
  onToggle: () => void;
  onDelete: () => void;
}) {
  const isApproved = !!review.approved;
  return (
    <div className={`rounded-sm border p-5 ${isApproved ? "border-green-500/30 bg-green-500/5" : "border-border bg-card"}`}>
      <div className="mb-2 flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`h-4 w-4 ${s <= review.rating ? "fill-primary text-primary" : "text-muted-foreground/20"}`}
          />
        ))}
      </div>
      <p className="mb-3 font-body text-sm text-muted-foreground">"{review.message}"</p>
      <p className="font-display text-sm font-bold text-foreground">{review.name}</p>
      {review.vehicle && (
        <p className="font-body text-xs text-muted-foreground">{review.vehicle}</p>
      )}
      <p className="mt-1 font-body text-xs text-muted-foreground/50">
        {new Date(review.created_at).toLocaleDateString("es-ES")}
      </p>

      <div className="mt-4 flex gap-2">
        <Button
          variant={isApproved ? "outline" : "default"}
          size="sm"
          onClick={onToggle}
          className="text-xs"
        >
          {isApproved ? (
            <><X className="mr-1 h-3 w-3" /> Desaprobar</>
          ) : (
            <><Check className="mr-1 h-3 w-3" /> Aprobar</>
          )}
        </Button>
        <Button variant="ghost" size="sm" onClick={onDelete} className="text-xs text-destructive hover:text-destructive">
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}

export default Admin;
