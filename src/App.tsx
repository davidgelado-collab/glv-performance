import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom"; // Añadido useLocation
import { useEffect } from "react"; // Añadido useEffect
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Feedback from "./pages/Feedback.tsx";
import Admin from "./pages/Admin.tsx";
import ReproEcu from "./pages/reproecu.tsx"; 
import NotFound from "./pages/NotFound.tsx";

// --- COMPONENTE INTERNO PARA RESETEAR EL SCROLL ---
const ScrollToTopOnNav = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar de ruta, subimos arriba del todo ipso facto
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        {/* Colocamos el vigilante aquí dentro para que detecte los cambios de ruta */}
        <ScrollToTopOnNav /> 
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* Ruta específica para la página de Reprogramación */}
          <Route path="/reprogramacion-ecu" element={<ReproEcu />} />
          
          {/* RUTA CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
