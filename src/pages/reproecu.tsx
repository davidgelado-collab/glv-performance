import { Link, useNavigate } from "react-router-dom"; // Añadimos useNavigate
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-center"; // Revisa si es lucide-react o lucide-center según tu proyecto
import { ArrowLeft as ArrowIcon, CheckCircle2 as CheckIcon } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const ServiceDetail = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navega a la home y añade el ancla de contacto
    navigate("/#contacto");
    // Forzamos el scroll si ya estamos en la home
    setTimeout(() => {
      const element = document.getElementById("contacto");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Si tu Navbar no funciona bien aquí, puedes optar por un Navbar simplificado 
         o simplemente confiar en el botón "Volver al inicio" que está debajo.
      */}
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-24">
        {/* Enlace para volver a la Home */}
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8 font-bold">
          <ArrowIcon className="mr-2 h-4 w-4" /> INICIO / VOLVER
        </Link>

        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6">Reprogramación ECU</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-12">
          Libera todo el potencial de tu motor con nuestras reprogramaciones personalizadas.
        </p>

        {/* Los tres cuadros ahora son iguales */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* STAGE 1 */}
          <div className="bg-card p-8 border border-primary/30 rounded-lg shadow-xl shadow-primary/5">
            <h2 className="text-2xl font-bold text-primary mb-2">STAGE 1</h2>
            <p className="text-sm text-muted-foreground mb-4">Optimización por Software</p>
            <div className="text-xl font-bold mb-6">+20-40% HP / +30-50% Nm</div>
            <p className="text-sm mb-6 font-body">Ideal para conductores que buscan más potencia manteniendo la fiabilidad de serie.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center"><CheckIcon className="h-4 w-4 text-primary mr-2" /> Mapas de inyección</li>
              <li className="flex items-center"><CheckIcon className="h-4 w-4 text-primary mr-2" /> Presión de turbo</li>
            </ul>
          </div>

          {/* STAGE 2 */}
          <div className="bg-card p-8 border border-primary/30 rounded-lg shadow-xl shadow-primary/5">
            <h2 className="text-2xl font-bold text-primary mb-2">STAGE 2</h2>
            <p className="text-sm text-muted-foreground mb-4">Software + Hardware Básico</p>
            <div className="text-xl font-bold mb-6">+40-60% HP / +50-80% Nm</div>
            <p className="text-sm mb-6 font-body">Requiere modificaciones mecánicas clave como Downpipe o Admisión.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center"><CheckIcon className="h-4 w-4 text-primary mr-2" /> Downpipe deportivo</li>
              <li className="flex items-center"><CheckIcon className="h-4 w-4 text-primary mr-2" /> Intercooler mayor</li>
            </ul>
          </div>

          {/* STAGE 3 */}
          <div className="bg-card p-8 border border-primary/30 rounded-lg shadow-xl shadow-primary/5">
            <h2 className="text-2xl font-bold text-primary mb-2">STAGE 3</h2>
            <p className="text-sm text-muted-foreground mb-4">Máximo Rendimiento</p>
            <div className="text-xl font-bold mb-6">+80-200% HP</div>
            <p className="text-sm mb-6 font-body">Transformación completa: Turbo híbrido y componentes forjados.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center"><CheckIcon className="h-4 w-4 text-primary mr-2" /> Turbo kit grande</li>
              <li className="flex items-center"><CheckIcon className="h-4 w-4 text-primary mr-2" /> Internos forjados</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          {/* Botón que lleva al formulario de contacto en la Home */}
          <Button 
            size="lg" 
            className="px-12 py-6 text-lg uppercase font-bold"
            onClick={handleContactClick}
          >
            Solicitar Presupuesto
          </Button>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServiceDetail;
