import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TuningSearch from "@/components/TuningSearch";
import BuildsSection from "@/components/BuildsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop"; // 1. Importamos la flecha

const Index = () => {
  const [vehiclePreset, setVehiclePreset] = useState("");

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      
      <main className="flex flex-col">
        <HeroSection />
        
        <div id="servicios" className="scroll-mt-24">
          <ServicesSection />
        </div>

        <div id="buscador" className="scroll-mt-24">
          <TuningSearch onRequestQuote={setVehiclePreset} />
        </div>

        <div id="trabajos" className="scroll-mt-24">
          <BuildsSection />
        </div>

        <div id="reseñas" className="scroll-mt-24">
          <ReviewsSection />
        </div>

        <div id="contacto" className="scroll-mt-24">
          <ContactSection vehiclePreset={vehiclePreset} />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop /> {/* 2. La añadimos aquí */}
    </div>
  );
};

export default Index;
