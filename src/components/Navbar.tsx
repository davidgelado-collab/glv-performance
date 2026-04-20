import { useState } from "react";
// 1. Importamos Link y useLocation para gestionar la navegación
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoGlv from "@/assets/logo-glv.png";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Servicios", id: "servicios" },
  { label: "Buscador", id: "buscador" },
  { label: "Trabajos", id: "trabajos" },
  { label: "Reseñas", id: "reseñas" },
  { label: "Contacto", id: "contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // 2. Obtenemos la ubicación actual
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleLinkClick = () => {
    // Cerramos el menú en móvil al pulsar
    setOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO: Siempre lleva a la Home y hace scroll arriba */}
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src={logoGlv} alt="GLV Performance" className="h-[5.625rem] w-auto" />
        </Link>

        {/* Desktop - Usamos componente reutilizable */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavAction
              key={item.label}
              item={item}
              isHome={isHome}
              className="font-body text-sm uppercase tracking-wider text-muted-foreground transition-colors duration-150 hover:text-primary cursor-pointer outline-none"
            />
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
                <NavAction
                  key={item.label}
                  item={item}
                  isHome={isHome}
                  onClick={handleLinkClick} // Cierra el menú al pulsar
                  className="text-left font-body text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary py-4 border-b border-border/50 last:border-none"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- COMPONENTE AUXILIAR PARA COMPORTAMIENTO INTELIGENTE ---
// Reemplaza tus <button> originales y gestiona si es scroll suave o navegación.
const NavAction = ({
  item,
  isHome,
  className,
  onClick,
}: {
  item: { label: string; id: string };
  isHome: boolean;
  className: string;
  onClick?: () => void;
}) => {
  // Función para scroll suave (tu lógica original mejorada)
  const scrollToSection = () => {
    // Offset para el Navbar fijo
    const offset = 90;
    const element = document.getElementById(item.id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Llama a onClick si existe (ej. para cerrar el menú móvil)
    if (onClick) onClick();
  };

  // --- LÓGICA CLAVE ---
  // Si estamos en la Home, usamos un botón con scroll suave.
  if (isHome) {
    return (
      <button onClick={scrollToSection} className={className}>
        {item.label}
      </button>
    );
  }

  // Si estamos en otra página, usamos un Link para navegar a la Home + Ancla (/#servicios).
  return (
    <Link to={`/#${item.id}`} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
};

export default Navbar;
