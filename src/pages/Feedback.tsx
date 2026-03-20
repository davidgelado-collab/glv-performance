import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitReview } from "@/lib/api";
import logoImg from "@/assets/logo-glv.png";

const Feedback = () => {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [serviceType, setServiceType] = useState(""); // 1. NUEVO ESTADO
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 2. VALIDACIÓN ACTUALIZADA (Añadido serviceType)
    if (!name.trim() || !message.trim() || !serviceType.trim() || rating === 0) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 3. ENVÍO ACTUALIZADO
      await submitReview({
        name: name.trim(),
        vehicle: vehicle.trim(),
        service_type: serviceType.trim(), // Enviamos el nuevo campo
        rating,
        message: message.trim(),
      });
      setSubmitted(true);
    } catch {
      setError("Error al enviar la reseña. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    // ... (El bloque de 'submitted' se queda igual)
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center"
        >
          <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" />
          <h2 className="mb-3 font-display text-3xl font-bold uppercase text-foreground">
            ¡Gracias!
          </h2>
          <p className="font-body text-muted-foreground">
            Tu reseña ha sido enviada correctamente. Será publicada una vez aprobada por nuestro equipo.
          </p>
          <a
            href="/#/"
            className="mt-8 inline-block rounded-sm bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/80"
          >
            Volver al inicio
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-lg"
      >
        <div className="mb-8 text-center">
          <a href="/#/">
            <img src={logoImg} alt="GLV Performance" className="mx-auto mb-6 h-16" />
          </a>
          <h1 className="font-display text-3xl font-bold uppercase text-foreground md:text-4xl">
            Tu opinión <span className="text-primary">importa</span>
          </h1>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            Cuéntanos tu experiencia con GLV Performance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1 block font-body text-xs uppercase tracking-wider text-muted-foreground">
              Nombre *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              maxLength={100}
              className="w-full rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-body text-xs uppercase tracking-wider text-muted-foreground">
                Vehículo
              </label>
              <input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="Ej: BMW 335i N54"
                maxLength={100}
                className="w-full rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>

            {/* 4. NUEVO INPUT VISUAL */}
            <div>
              <label className="mb-1 block font-body text-xs uppercase tracking-wider text-muted-foreground">
                Tipo de Trabajo *
              </label>
              <input
                type="text"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                placeholder="Ej: Stage 1 / Downpipe"
                maxLength={100}
                className="w-full rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* ... Resto del formulario (Valoración y Experiencia) igual ... */}
          <div>
            <label className="mb-1 block font-body text-xs uppercase tracking-wider text-muted-foreground">
              Valoración *
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= (hoverRating || rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block font-body text-xs uppercase tracking-wider text-muted-foreground">
              Tu experiencia *
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Cuéntanos tu experiencia..."
              maxLength={1000}
              className="w-full resize-none rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>

          {error && (
            <p className="font-body text-sm text-destructive">{error}</p>
          )}

          <Button variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              "Enviando..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Enviar Reseña
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default Feedback;
