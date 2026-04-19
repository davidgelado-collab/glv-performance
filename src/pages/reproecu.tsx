import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // Importamos WhatsApp
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navega a la home y busca la sección de contacto
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contacto");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* BOTÓN VOLVER FLOTANTE (Superior Izquierda) */}
      <div className="fixed top-24 left-6 z-[60] hidden md:block">
        <Link to="/">
          <Button 
            variant="outline" 
            className="gap-2 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            INICIO / VOLVER
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24">
        {/* Enlace volver normal (para móvil o si no se ve el flotante) */}
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8 md:hidden">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6">Reprogramación ECU</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            Optimización de software de motor a medida. Máximo rendimiento manteniendo la fiabilidad mecánica.
          </p>
        </motion.div>

        {/* LOS TRES CUADROS IGUALES */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              stage: "STAGE 1",
              desc: "Optimización por Software",
              power: "+20-40% HP / +30-50% Nm",
              info: "Ideal para conductores que buscan más potencia manteniendo la fiabilidad de serie sin cambiar piezas.",
              items: ["Mapas de inyección", "Presión de turbo", "Sin mods mecánicas"]
            },
            {
              stage: "STAGE 2",
              desc: "Software + Hardware Básico",
              power: "+40-60% HP / +50-80% Nm",
              info: "Requiere modificaciones mecánicas clave (Downpipe, Admisión) para liberar más potencia de forma segura.",
              items: ["Downpipe deportivo", "Intercooler mayor", "Admisión directa"]
            },
            {
              stage: "STAGE 3",
              desc: "Máximo Rendimiento",
              power: "+80-200% HP",
              info: "Transformación completa para los que buscan el límite: Turbo híbrido y componentes reforzados.",
              items: ["Turbo kit grande", "Inyectores mayor flujo", "Internos forjados"]
            }
          ].map((item, index) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 border border-primary/20 rounded-lg shadow-xl shadow-primary/5 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">{item.stage}</h2>
                <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">{item.desc}</p>
                <div className="text-xl font-bold mb-6 text-foreground">{item.power}</div>
                <p className="text-sm mb-6 leading-relaxed text-muted-foreground">{item.info}</p>
                <ul className="space-y-3 text-sm mb-8">
                  {item.items.map(i => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="px-12 py-8 text-xl uppercase font-bold hover:scale-105 transition-transform"
            onClick={handleContactClick}
          >
            Solicitar Presupuesto
          </Button>
        </div>
      </div>

      <Footer />
      
      {/* ELEMENTOS FLOTANTES */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default ServiceDetail;
