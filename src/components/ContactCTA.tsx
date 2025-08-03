import React from "react";
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
        <a href="/contact">
          <button className="cta-button">
            {lang === "fr" ? "Demander une soumission" : "Request a Quote"}
          </button>
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
