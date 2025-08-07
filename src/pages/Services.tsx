import React, { useContext } from "react";
import { LangContext } from "../i18n/LanguageContext";
import { services } from "../data/ServicesData";
import { Link } from "react-router-dom";
import "./Services.css";

const Services: React.FC = () => {
  const { lang } = useContext(LangContext);

  return (
    <main className="services-premium-wrapper">
      {/* Hero */}
      <section className="services-premium-hero">
  <div className="hero-overlay" />
  <div className="hero-container">
    <h1>{lang === "fr" ? "Nos services de nettoyage" : "Our Cleaning Services"}</h1>
    <p>
      {lang === "fr"
        ? "Des services fiables et professionnels pour chaque espace, du commercial au résidentiel."
        : "Reliable, professional services for every space — commercial or residential."}
    </p>
    <Link to="/contact" className="hero-btn">
      {lang === "fr" ? "Demander une soumission" : "Request a Quote"}
    </Link>
  </div>
</section>


      {/* Service Blocks */}
      <section className="services-premium-section">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`premium-service-block ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="premium-text">
              <h2>{service.emoji} {service.title[lang]}</h2>
              <p className="desc">{service.description[lang]}</p>

              {service.details?.[lang] && (
                <ul>
                  {service.details[lang].map((item, i) => (
                    <li key={i}> {item}</li>
                  ))}
                </ul>
              )}

              {service.benefits?.[lang] && (
                <p className="benefits"><em>{service.benefits[lang]}</em></p>
              )}

              {service.cta?.[lang] && (
                <p className="cta"><strong>{service.cta[lang]}</strong></p>
              )}
            </div>

            <div className="premium-image">
              <img src={service.image} alt={service.title[lang]} />
            </div>
          </div>
        ))}
      </section>
      <section className="services-cta-footer">
  <div className="cta-overlay" />
  <div className="cta-inner">
    <h2>
      {lang === "fr"
        ? "Obtenez un espace impeccable dès aujourd’hui"
        : "Get a Sparkling Space Today"}
    </h2>
    <p>
      {lang === "fr"
        ? "Contactez-nous pour une soumission rapide et personnalisée."
        : "Reach out now for a fast, personalized quote."}
    </p>
    <Link to="/contact" className="cta-button">
      {lang === "fr" ? "Demander une soumission" : "Request a Quote"}
    </Link>
  </div>
</section>

    </main>
  );
};

export default Services;
