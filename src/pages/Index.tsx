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

const Index = () => {
  const [vehiclePreset, setVehiclePreset] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* SECCIÓN SERVICIOS */}
      <div id="servicios">
        <ServicesSection />
      </div>

      {/* SECCIÓN BUSCADOR */}
      <div id="buscador">
        <TuningSearch onRequestQuote={setVehiclePreset} />
      </div>

      {/* SECCIÓN TRABAJOS (Builds) */}
      <div id="trabajos">
        <BuildsSection />
      </div>

      {/* SECCIÓN RESEÑAS */}
      <div id="reseñas">
        <ReviewsSection />
      </div>

      {/* SECCIÓN CONTACTO */}
      <div id="contacto">
        <ContactSection vehiclePreset={vehiclePreset} />
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
