import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoGlv from "@/assets/logo-glv.png";
import { motion, AnimatePresence } from "framer-motion";

// Añadimos "reseñas" que faltaba para que sea igual que tu Index.tsx
const navItems = [
  { label: "Servicios", id: "servicios" },
  { label: "Buscador", id: "buscador" },
  { label: "Trabajos", id: "trabajos" },
  { label: "Reseñas", id: "reseñas" }, // Agregado
  { label: "Contacto", id: "contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajuste para que el Navbar fijo no tape el título de la sección
      const offset = 90; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false); 
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center">
          <img src={logoGlv} alt="GLV Performance" className="h-[5.625rem] w-auto" />
        </button>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="font-body text-sm uppercase tracking-wider text-muted-foreground transition-colors duration-150 hover:text-primary cursor-pointer outline-none"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background md:hidden overflow-hidden"
          >
            <div className="container mx-auto flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-body text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary py-4 border-b border-border/50 last:border-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
