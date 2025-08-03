import React from "react";
import "./TestimonialsPreview.css";

interface Props {
  lang: "en" | "fr";
}

const TestimonialsPreview: React.FC<Props> = ({ lang }) => {
  const testimonials = [
    {
      quote: lang === "fr"
        ? "Service exceptionnel, rapide et très professionnel. Je recommande vivement!"
        : "Exceptional service — fast and very professional. Highly recommended!",
      name: lang === "fr" ? "Client résidentiel à Brossard" : "Residential Client in Brossard",
    },
    {
      quote: lang === "fr"
        ? "Notre bureau n’a jamais été aussi propre. L’équipe est fiable et efficace."
        : "Our office has never been so clean. The team is reliable and efficient.",
      name: lang === "fr" ? "Gestionnaire d’immeuble à Longueuil" : "Building Manager in Longueuil",
    },
    {
      quote: lang === "fr"
        ? "Ils ont respecté les délais et ont fait un excellent travail pour notre déménagement."
        : "They met our deadlines and did an excellent job for our move-out cleaning.",
      name: lang === "fr" ? "Client commercial à La Prairie" : "Commercial Client in La Prairie",
    },
  ];

  return (
    <section className="testimonials-preview">
      <h2>{lang === "fr" ? "Témoignages" : "Testimonials"}</h2>
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-name">— {t.name}</p>
          </div>
        ))}
      </div>
      <a href="/testimonials" className="testimonials-link">
        {lang === "fr" ? "Voir plus de témoignages →" : "See more testimonials →"}
      </a>
    </section>
  );
};

export default TestimonialsPreview;
