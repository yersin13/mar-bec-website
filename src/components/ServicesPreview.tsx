import React from "react";
import "./ServicesPreview.css";

const services = [
  {
    id: "commercial",
    icon: "/assets/icon-office.png",
    titleFr: "Entretien commercial",
    titleEn: "Commercial Cleaning",
    descFr: "Service fiable pour les bureaux et espaces d'affaires.",
    descEn: "Reliable service for offices and business spaces.",
  },
  {
    id: "residential",
    icon: "/assets/icon-move.png",
    titleFr: "Entretien résidentiel",
    titleEn: "Residential Cleaning",
    descFr: "Nettoyage soigné pour maisons, condos et appartements.",
    descEn: "Careful cleaning for houses, condos, and apartments.",
  },
  {
    id: "deep",
    icon: "/assets/icon-deep.png",
    titleFr: "Grand ménage",
    titleEn: "Deep Cleaning",
    descFr: "Nettoyage complet pour les zones très sales.",
    descEn: "Thorough cleaning for high-traffic or dirty areas.",
  },
  {
    id: "post-construction",
    icon: "/assets/icon-construction.png",
    titleFr: "Après-construction",
    titleEn: "Post-Construction",
    descFr: "Nettoyage professionnel après travaux ou rénovations.",
    descEn: "Professional cleanup after construction or renovations.",
  },
  {
    id: "windows",
    icon: "/assets/icon-windows.png",
    titleFr: "Lavage de vitres",
    titleEn: "Window Cleaning",
    descFr: "Vitrines et fenêtres éclatantes, sans traces.",
    descEn: "Streak-free, sparkling windows and glass surfaces.",
  },
  {
    id: "security",
    icon: "/assets/icon-security.png",
    titleFr: "Surveillance",
    titleEn: "Security Services",
    descFr: "Agents fiables pour la sécurité des lieux.",
    descEn: "Reliable personnel for site and building security.",
  },
];

const ServicesPreview = ({ lang }: { lang: "fr" | "en" }) => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h4>{lang === "fr" ? "CE QUE NOUS FAISONS" : "WHAT WE DO"}</h4>
        <h2>
          {lang === "fr"
            ? "Nous offrons différents services pour votre espace"
            : "We Offer Different Services to Clean Your Area"}
        </h2>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <a href={`/services#${s.id}`} className="service-card" key={i}>
            <img src={s.icon} alt={s[`title${lang === "fr" ? "Fr" : "En"}`]} />
            <h3>{s[`title${lang === "fr" ? "Fr" : "En"}`]}</h3>
            <p>{s[`desc${lang === "fr" ? "Fr" : "En"}`]}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
