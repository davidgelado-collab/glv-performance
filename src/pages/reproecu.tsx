import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop"; // 1. Importamos la flecha

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

        {/* ... (Aquí van tus cuadros de Stage 1, 2 y 3 que ya tienes) ... */}

        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="px-12 py-6 text-lg uppercase font-bold"
            onClick={() => window.location.href = "/#contacto"}
          >
            Solicitar Presupuesto
          </Button>
        </div>
      </div>

      <Footer />
      <ScrollToTop /> {/* 2. Añadimos la flecha al final */}
    </div>
  );
};

export default ServiceDetail;
