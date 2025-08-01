import React, { useContext } from "react";
import { LangContext } from "../i18n/LanguageContext";

const About: React.FC = () => {
  const { lang } = useContext(LangContext);

  return (
    <main className="main-content">
      <h1>{lang === "fr" ? "À propos de Mar-Bec" : "About Mar-Bec"}</h1>

      <p>
        {lang === "fr"
          ? "Fondée et dirigée par Azael Marte, Mar-Bec Entretien Inc. est une entreprise familiale reconnue pour sa fiabilité et son professionnalisme."
          : "Founded and led by Azael Marte, Mar-Bec Entretien Inc. is a family-owned company known for reliability and professionalism."}
      </p>

      <p>
        {lang === "fr"
          ? "Nous croyons que la propreté est synonyme de respect, d'organisation et de qualité. Chaque client est traité comme un partenaire."
          : "We believe cleanliness reflects respect, organization, and quality. Every client is treated as a partner."}
      </p>

      <h2>{lang === "fr" ? "Notre mission" : "Our Mission"}</h2>
      <p>
        {lang === "fr"
          ? "Offrir un environnement impeccable pour chaque entreprise tout en soutenant la communauté locale avec du personnel fiable et qualifié."
          : "To provide spotless environments for every business while supporting the local community with reliable and qualified personnel."}
      </p>
    </main>
  );
};

export default About;
