import logoGlv from "@/assets/logo-glv.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <a href="#">
          <img src={logoGlv} alt="GLV Performance" className="h-[5.625rem] w-auto" />
        </a>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} GLV Performance. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
