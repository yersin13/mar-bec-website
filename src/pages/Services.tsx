import React, { useContext } from "react";
import { LangContext } from "../i18n/LanguageContext";

const Services: React.FC = () => {
  const { lang } = useContext(LangContext);

  return (
    <main className="main-content">
      <h1>{lang === "fr" ? "Nos Services" : "Our Services"}</h1>

      <section>
        <h2>{lang === "fr" ? "Entretien ménager" : "Cleaning Services"}</h2>
        <ul>
          <li>{lang === "fr" ? "Nettoyage quotidien ou hebdomadaire de bureaux" : "Daily or weekly office cleaning"}</li>
          <li>{lang === "fr" ? "Désinfection des surfaces à contact fréquent" : "Disinfection of high-contact surfaces"}</li>
          <li>{lang === "fr" ? "Entretien de commerces et espaces publics" : "Maintenance of retail and public spaces"}</li>
        </ul>
      </section>

      <section>
        <h2>{lang === "fr" ? "Placement de personnel" : "Staff Placement"}</h2>
        <ul>
          <li>{lang === "fr" ? "Agents de propreté formés" : "Trained cleaning agents"}</li>
          <li>{lang === "fr" ? "Remplacements temporaires ou assignations longues" : "Temporary or long-term assignments"}</li>
          <li>{lang === "fr" ? "Support logistique pour grandes surfaces" : "Logistics support for large spaces"}</li>
        </ul>
      </section>

      <section>
        <h2>{lang === "fr" ? "Produits & équipements" : "Products & Equipment"}</h2>
        <p>
          {lang === "fr"
            ? "Nous utilisons des produits écologiques et de qualité professionnelle pour assurer un environnement sain et propre."
            : "We use eco-friendly, professional-grade products to ensure a clean and healthy environment."}
        </p>
      </section>
    </main>
  );
};

export default Services;
