import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
  id: string | number;
  name: string;
  message: string;
  rating: string | number;
  vehicle?: string;
  service_type?: string;
  approved: number | string; // Cambiado a número por el TinyInt(1)
}

const API_BASE = "https://glvperformance.com/api";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/reviews.php`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // FILTRO CORREGIDO: 
          // Comprobamos si 'approved' es 1 (número) o "1" (texto)
          const approvedReviews = data.filter((r) => 
            r.approved == 1 || r.approved === "1"
          );
          setReviews(approvedReviews);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando reseñas:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="reseñas" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <motion.div
                key={review.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col rounded-sm border border-border bg-card p-6"
              >
                <Quote className="mb-4 h-6 w-6 text-primary/30" />
                <p className="mb-4 flex-grow font-body text-sm italic text-muted-foreground">
                  "{review.message}"
                </p>

                <div className="mb-4 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-3.5 w-3.5 ${
                        star <= Number(review.rating)
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
                  <div className="mt-1">
                    {review.vehicle && (
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {review.vehicle}
                      </p>
                    )}
                    {review.service_type && (
                      <p className="text-[11px] font-medium text-primary/80">
                        🛠 {review.service_type}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-muted-foreground">
              {loading ? "Cargando reseñas..." : "No hay reseñas aprobadas todavía."}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
