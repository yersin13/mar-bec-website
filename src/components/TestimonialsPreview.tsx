import React from "react";
import { testimonialsData } from "../data/testimonials";
import "./TestimonialsPreview.css";

// ✅ Updated Props interface to include new props
interface Props {
  lang: "en" | "fr";
  maxItems?: number;   // optional: limit number shown
  linkHref?: string;   // optional: "See more" link
}

const TestimonialsPreview: React.FC<Props> = ({ lang, maxItems, linkHref }) => {
  const t = testimonialsData[lang];
  const items = maxItems ? t.items.slice(0, maxItems) : t.items;

  return (
    <section className="testimonials-preview">
      <h2>{t.title}</h2>

      <div className="testimonial-cards">
        {items.map((it, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-quote">“{it.quote}”</p>
            <p className="testimonial-name">— {it.name}</p>
          </div>
        ))}
      </div>

      {linkHref && (
        <a href={linkHref} className="testimonials-link">
          {lang === "fr" ? "Voir plus de témoignages →" : "See more testimonials →"}
        </a>
      )}
    </section>
  );
};

export default TestimonialsPreview;
