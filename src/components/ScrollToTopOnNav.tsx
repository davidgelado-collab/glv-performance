import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNav = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar de página, vamos arriba sin suavidad (instantáneo) 
    // para que el usuario no vea el "vuelo" de la página anterior
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnNav;
