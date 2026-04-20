import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoGlv from "@/assets/logo-glv.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Inicio", id: "hero" }, // Añadido Inicio
  { label: "Servicios", id: "servicios" },
  { label: "Buscador", id: "buscador" },
  { label: "Trabajos", id: "trabajos" },
  { label: "Reseñas", id: "reseñas" },
  { label: "Contacto", id: "contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (id: string) => {
    setOpen(false);

    if (isHome) {
      // Si ya estamos en Home, scroll suave normal
      const element = document.getElementById(id);
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (element) {
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
    } else {
      // Si NO estamos en Home, navegamos a la raíz con el hash
      if (id === "hero") {
        navigate("/");
        window.scrollTo(0, 0);
      } else {
        navigate(`/#${id}`);
        // Nota: El navegador detectará el id al cargar la home.
      }
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO clickable para volver arriba/home */}
        <button onClick={() => handleNavClick("hero")} className="flex items-center">
          <img src={logoGlv} alt="GLV Performance" className="h-[5.625rem] w-auto" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
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
                  onClick={() => handleNavClick(item.id)}
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
