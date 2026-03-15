import { motion } from "framer-motion";
import build1 from "@/assets/build-1.jpg";
import build2 from "@/assets/build-2.jpg";

const builds = [
  {
    image: build1,
    title: "GT-R R35 Stage 3",
    power: "850 HP",
    description: "Twin turbo upgrade, E85, intercooler racing",
  },
  {
    image: build2,
    title: "V8 Twin Turbo Build",
    power: "700 HP",
    description: "Motor completo forjado, turbos GT35, gestión Haltech",
  },
];

const BuildsSection = () => {
  return (
    <section id="trabajos" className="border-t border-border bg-card py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-16 text-center"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">
            Nuestros Builds
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {builds.map((build, i) => (
            <motion.div
              key={build.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="group relative overflow-hidden rounded-sm border border-border"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={build.image}
                  alt={build.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-1 font-display text-2xl font-bold text-primary">
                  {build.power}
                </div>
                <h3 className="mb-1 font-display text-xl font-bold uppercase">
                  {build.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {build.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildsSection;
