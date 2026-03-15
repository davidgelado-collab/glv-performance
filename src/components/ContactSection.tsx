import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
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
                { icon: Phone, text: "+XX XXX XXX XXX" },
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

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Nombre"
                className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Vehículo (ej: BMW 335i N54)"
              className="w-full rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <textarea
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full resize-none rounded-sm border border-border bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <Button variant="hero" size="lg" className="w-full">
              Enviar Consulta
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
