import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-engine.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Motor de alto rendimiento GLV Performance"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 inline-block border-l-2 border-primary pl-3"
            >
              <span className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Performance Engineering
              </span>
            </motion.div>

            <h1 className="mb-6 font-display text-5xl font-extrabold uppercase leading-tight tracking-tight md:text-7xl">
              GLV
              <span className="block text-primary">Performance</span>
            </h1>

            <p className="mb-8 max-w-lg font-body text-lg text-muted-foreground">
              Potencia sin compromiso. Especialistas en reprogramación ECU,
              upgrades turbo y preparaciones de alto rendimiento.
            </p>

            <div className="flex gap-4">
              <Button variant="hero" size="lg">
                Nuestros Servicios
              </Button>
              <Button variant="heroOutline" size="lg">
                Ver Builds
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/50 bg-background/80 backdrop-blur-md"
      >
        <div className="container mx-auto flex justify-around px-6 py-5">
          {[
            { value: "500+", label: "HP Ganados" },
            { value: "200+", label: "Vehículos" },
            { value: "10+", label: "Años" },
            { value: "100%", label: "Pasión" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                {stat.value}
              </div>
              <div className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
