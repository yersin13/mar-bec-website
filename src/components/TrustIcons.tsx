import React from "react";
import "./TrustIcons.css";

interface Props {
  lang: "en" | "fr";
}

const TrustIcons: React.FC<Props> = ({ lang }) => {
  const items = [
    {
      image: "/assets/eco.png",
      label: lang === "fr" ? "Produits écologiques" : "Eco-Friendly Products",
    },
    {
      image: "/assets/certified.png",
      label: lang === "fr" ? "Entreprise assurée et certifiée" : "Insured & Certified",
    },
    {
      image: "/assets/fast.png",
      label: lang === "fr" ? "Réponse rapide" : "Fast Response",
    },
    {
      image: "/assets/satisfaction.png",
      label: lang === "fr" ? "Satisfaction garantie" : "Satisfaction Guaranteed",
    },
  ];

  return (
    <section className="trust-icons">
      <h2 className="trust-icons-title">
        {lang === "fr" ? "Nos engagements" : "What Sets Us Apart"}
      </h2>
      <div className="trust-icons-grid">
        {items.map((item, index) => (
          <div key={index} className="trust-icon">
            <div className="trust-icon-image-wrapper">
              <img src={item.image} alt={item.label} className="trust-icon-image" />
              <div className="trust-icon-overlay">
                <p className="trust-icon-label">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustIcons;
