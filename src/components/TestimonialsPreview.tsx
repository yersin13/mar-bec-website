import React from "react";
import { Link } from "react-router-dom";
import { testimonialsData } from "../data/testimonials";
import "./TestimonialsPreview.css";

interface Props {
  lang: "en" | "fr";
  maxItems?: number;     // optional: limit number shown
  linkHref?: string;     // optional: "See more" link (internal or external)
}

const TestimonialsPreview: React.FC<Props> = ({ lang, maxItems, linkHref }) => {
  const t = testimonialsData[lang];
  const items = maxItems ? t.items.slice(0, maxItems) : t.items;

  // Treat paths like "/testimonials" as SPA links; anything else is external
  const isSpaLink = !!linkHref && /^\/(?!\/)/.test(linkHref);

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
        isSpaLink ? (
          <Link
            to={linkHref}
            className="testimonials-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {lang === "fr" ? "Voir plus de témoignages →" : "See more testimonials →"}
          </Link>
        ) : (
          <a
            href={linkHref}
            className="testimonials-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === "fr" ? "Voir plus de témoignages →" : "See more testimonials →"}
          </a>
        )
      )}
    </section>
  );
};

export default TestimonialsPreview;
