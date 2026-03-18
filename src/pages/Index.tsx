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
      <ServicesSection />
      <TuningSearch onRequestQuote={setVehiclePreset} />
      <BuildsSection />
      <ReviewsSection />
      <ContactSection vehiclePreset={vehiclePreset} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
