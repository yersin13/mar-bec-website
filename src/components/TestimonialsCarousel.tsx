import React, { useMemo, useState, useEffect } from "react";
import { testimonialsData } from "../data/testimonials";
import "./TestimonialsCarousel.css";

interface Props {
  lang: "en" | "fr";
}

const TestimonialsCarousel: React.FC<Props> = ({ lang }) => {
  const t = testimonialsData[lang];
  const [index, setIndex] = useState(0);

  // Responsive slides per view
  const slidesPerView = useMemo(() => {
    if (typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w >= 1100) return 3;
    if (w >= 700) return 2;
    return 1;
  }, []);

  // Auto-advance (optional; 6s)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + slidesPerView) % t.items.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slidesPerView, t.items.length]);

  const prev = () =>
    setIndex((prev) => (prev - slidesPerView + t.items.length) % t.items.length);
  const next = () =>
    setIndex((prev) => (prev + slidesPerView) % t.items.length);

  // Build visible slice (circular)
  const visible = Array.from({ length: slidesPerView }).map((_, i) => {
    const pos = (index + i) % t.items.length;
    return { ...t.items[pos], key: pos };
  });

  return (
    <div className="tcar-root" aria-label={t.title}>
      <div className="tcar-track" role="list">
        {visible.map((it) => (
          <article className="tcar-card" role="listitem" key={it.key}>
            <p className="tcar-quote">“{it.quote}”</p>
            <p className="tcar-name">— {it.name}</p>
          </article>
        ))}
      </div>

      <div className="tcar-controls">
        <button className="tcar-btn" onClick={prev} aria-label={lang === "fr" ? "Précédent" : "Previous"}>‹</button>
        <button className="tcar-btn" onClick={next} aria-label={lang === "fr" ? "Suivant" : "Next"}>›</button>
      </div>

      <div className="tcar-dots" role="tablist" aria-label="carousel pagination">
        {t.items.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              className={`tcar-dot ${active ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`${lang === "fr" ? "Aller au témoignage" : "Go to testimonial"} ${i + 1}`}
              aria-selected={active}
              role="tab"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
