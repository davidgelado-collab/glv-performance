import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "34696608547";
  const message = encodeURIComponent("Hola, me interesa información sobre sus servicios de GLV Performance.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-150 hover:scale-110 animate-red-pulse"
      style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
    >
      <MessageCircle className="h-7 w-7 text-[#fff]" />
    </a>
  );
};

export default WhatsAppButton;
