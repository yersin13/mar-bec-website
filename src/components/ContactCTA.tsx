// src/components/ContactCTA.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./ContactCTA.css";

interface Props {
  lang: "en" | "fr";
}

const ContactCTA: React.FC<Props> = ({ lang }) => {
  return (
    <section className="contact-cta">
      <div className="contact-cta-content">
        <h2>
          {lang === "fr"
            ? "Prêt à faire briller votre espace ?"
            : "Ready to make your space shine?"}
        </h2>

        <p>
          {lang === "fr"
            ? "Contactez notre équipe dès aujourd’hui pour une soumission gratuite et rapide."
            : "Reach out to our team today for a fast and free quote."}
        </p>

        {/* SPA link, no full reload */}
        <Link
          to="/contact"
          className="cta-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {lang === "fr" ? "Demander une soumission" : "Request a Quote"}
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
