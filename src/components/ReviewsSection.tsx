import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Review {
  id: string;
  name: string;
  vehicle: string | null;
  rating: number;
  message: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    supabase
      .from("reviews")
      .select("id, name, vehicle, rating, message")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(6)
      .then(({ data }) => {
        if (data) setReviews(data);
      });
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
              className="rounded-sm border border-border bg-card p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-primary/30" />

              <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                "{review.message}"
              </p>

              <div className="mb-3 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/20"
                    }`}
                  />
                ))}
              </div>

              <div>
                <p className="font-display text-sm font-bold text-foreground">
                  {review.name}
                </p>
                {review.vehicle && (
                  <p className="font-body text-xs text-muted-foreground">
                    {review.vehicle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
