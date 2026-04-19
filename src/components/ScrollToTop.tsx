import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Icono limpio y profesional
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"; // Reutilizamos tu componente de botón

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Controlamos la visibilidad según el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Si bajamos más de 300px, aparece
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <Button
            variant="primary" // Usa el color principal de tu marca
            size="icon"
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
