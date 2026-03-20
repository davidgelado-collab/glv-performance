import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoGlv from "@/assets/logo-glv.png";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Servicios", id: "servicios" },
  { label: "Buscador", id: "buscador" },
  { label: "Trabajos", id: "trabajos" },
  { label: "Contacto", id: "contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // FUNCIÓN MÁGICA PARA EVITAR EL 404
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Cierra el menú móvil si está abierto
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
              className="font-body text-sm uppercase tracking-wider text-muted-foreground transition-colors duration-150 hover:text-primary cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="border-t border-border bg-background md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-body text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary py-2"
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
