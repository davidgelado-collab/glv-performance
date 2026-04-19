import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ServiceDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6">Reprogramación ECU</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-12">
          Libera todo el potencial de tu motor con nuestras reprogramaciones personalizadas. Desde optimizaciones seguras hasta builds de competición.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* STAGE 1 */}
          <div className="bg-card p-8 border border-border rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-2">STAGE 1</h2>
            <p className="text-sm text-muted-foreground mb-4">Optimización por Software</p>
            <div className="text-xl font-bold mb-6">+20-40% HP / +30-50% Nm</div>
            <p className="text-sm mb-6">Ideal para conductores que buscan más potencia manteniendo la fiabilidad de serie sin cambiar piezas.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Mapas de inyección</li>
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Presión de turbo</li>
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Sin mods mecánicas</li>
            </ul>
          </div>

          {/* STAGE 2 */}
          <div className="bg-card p-8 border border-primary/30 rounded-lg scale-105 shadow-xl shadow-primary/10">
            <h2 className="text-2xl font-bold text-primary mb-2">STAGE 2</h2>
            <p className="text-sm text-muted-foreground mb-4">Software + Hardware Básico</p>
            <div className="text-xl font-bold mb-6">+40-60% HP / +50-80% Nm</div>
            <p className="text-sm mb-6">Requiere modificaciones mecánicas clave (Downpipe, Admisión) para liberar más potencia.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Downpipe deportivo</li>
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Intercooler mayor</li>
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Dyno tuning</li>
            </ul>
          </div>

          {/* STAGE 3 */}
          <div className="bg-card p-8 border border-border rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-2">STAGE 3</h2>
            <p className="text-sm text-muted-foreground mb-4">Máximo Rendimiento</p>
            <div className="text-xl font-bold mb-6">+80-200% HP</div>
            <p className="text-sm mb-6">Transformación completa: Turbo híbrido, inyectores y componentes forjados.</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Turbo kit grande</li>
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Internos forjados</li>
              <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-primary mr-2" /> Competición</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="px-12 py-6 text-lg uppercase font-bold">
            Solicitar Presupuesto
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
