import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

interface ContactSectionProps {
  vehiclePreset?: string;
}

const API_BASE = "https://glvperformance.com/api";

const ContactSection = ({ vehiclePreset = "" }: ContactSectionProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (vehiclePreset) {
      setVehicle(vehiclePreset);
    }
  }, [vehiclePreset]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/contact.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, vehicle, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar");
      }
      setSent(true);
      setName("");
      setEmail("");
      setVehicle("");
      setMessage("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al enviar la consulta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="border-t border-border bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">
              Contacto
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">
              Hablemos de<br />
              <span className="text-primary">tu proyecto</span>
            </h2>
            <p className="mt-4 max-w-md font-body text-muted-foreground">
              ¿Listo para llevar tu vehículo al siguiente nivel? Contáctanos para una consulta personalizada.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, text: "+34 696 608 547" },
                { icon: Mail, text: "info@glvperformance.com" },
                { icon: MapPin, text: "Madrid, España" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-body text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center rounded-sm border border-primary/30 bg-primary/5 p-12 text-center"
            >
              <CheckCircle className="mb-4 h-12 w-12 text-primary" />
              <h3 className="font-display text-xl font-bold uppercase text-foreground">
                ¡Mensaje enviado!
              </h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Te responderemos lo antes posible.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-6"
                onClick={() => setSent(false)}
              >
                Enviar otra consulta
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                  className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Vehículo (ej: BMW 335i N54)"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                maxLength={200}
                className="w-full rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                maxLength={2000}
                className="w-full resize-none rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              {error && (
                <p className="font-body text-sm text-destructive">{error}</p>
              )}
              <Button variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Enviando..." : "Enviar Consulta"}
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
