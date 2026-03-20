import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquareEdit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  name: string;
  vehicle: string | null;
  service_type: string | null; // <-- AÑADIDO
  rating: number;
  message: string;
  approved?: string | number;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("https://glvperformance.com/api/reviews.php")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filtramos las aprobadas
          const approved = data.filter((r: any) => r.approved == 1 || r.approved === "1");
          setReviews(approved);
        }
      })
      .catch((error) => console.error("Error cargando reseñas de Arsys:", error));
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section id="reseñas" className="border-t border-border bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">
            Testimonios
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase md:text-5xl">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex flex-col rounded-sm border border-border bg-card p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-primary/30" />

              <p className="mb-4 flex-grow font-body text-sm leading-relaxed text-muted-foreground">
                "{review.message}"
              </p>

              <div className="mb-4 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-3.5 w-3.5 ${
                      star <= review.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/20"
                    }`}
                  />
                ))}
              </div>

              <div className="border-t border-border/50 pt-4">
                <p className="font-display text-sm font-bold text-foreground">
                  {review.name}
                </p>
                <div className="mt-1 flex flex-col gap-0.5">
                  {review.vehicle && (
                    <p className="font-body text-[11px] uppercase tracking-wider text-muted-foreground">
                      {review.vehicle}
                    </p>
                  )}
                  {review.service_type && (
                    <p className="font-body text-[11px] font-medium text-primary/80">
                      🛠 {review.service_type}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÓN PARA DEJAR RESEÑA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <Button 
            variant="outline" 
            onClick={() => window.location.href = "/#/feedback"}
            className="group border-primary/20 hover:border-primary"
          >
            <MessageSquareEdit className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
            ¿Has trabajado con nosotros? Déjanos tu reseña
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
