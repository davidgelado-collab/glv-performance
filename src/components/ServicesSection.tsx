import { motion } from "framer-motion";
import serviceTuning from "@/assets/service-tuning.jpg";
import serviceTurbo from "@/assets/service-turbo.jpg";
import serviceDyno from "@/assets/service-dyno.jpg";

const services = [
  {
    title: "Reprogramación ECU",
    description: "Mapas personalizados Stage 1, 2 y 3. Optimización de potencia, torque y respuesta del acelerador.",
    image: serviceTuning,
    stats: "+30-80 HP",
  },
  {
    title: "Upgrades Turbo",
    description: "Instalación y configuración de turbos de alto rendimiento. Kits completos con intercooler y downpipe.",
    image: serviceTurbo,
    stats: "+100-300 HP",
  },
  {
    title: "Dyno & Diagnóstico",
    description: "Banco de potencia profesional para medición precisa. Diagnóstico completo de rendimiento.",
    image: serviceDyno,
    stats: "Datos reales",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">
            Qué hacemos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">
            Servicios
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="group relative overflow-hidden rounded-sm border border-border bg-card transition-all duration-150 hover:border-primary/50"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-3 right-3 rounded-sm bg-primary px-3 py-1 font-display text-sm font-bold text-primary-foreground">
                  {service.stats}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-display text-xl font-bold uppercase">
                  {service.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
