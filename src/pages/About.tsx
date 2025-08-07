import React, { useContext } from "react";
import { LangContext } from "../i18n/LanguageContext";
import "./About.css";

const About: React.FC = () => {
  const { lang } = useContext(LangContext);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="overlay">
          <h1>
            {lang === "fr" ? "À propos de nous" : "About Us"}
          </h1>
          <p>
            {lang === "fr"
              ? "Un service de nettoyage professionnel, fiable et personnalisé, au cœur de la Rive-Sud de Montréal."
              : "Professional, reliable, and personalized cleaning service at the heart of Montreal’s South Shore."}
          </p>
        </div>
      </section>

      <section className="about-intro">
        <p>
          {lang === "fr"
            ? "Chez Mar-Bec Entretien Inc., nous croyons que la propreté est plus qu’un simple service — c’est un engagement envers le bien-être et la confiance. Depuis notre création, nous accompagnons entreprises et particuliers avec une approche rigoureuse, humaine et locale."
            : "At Mar-Bec Entretien Inc., we believe that cleaning is more than just a service — it’s a commitment to well-being and trust. Since our beginning, we’ve supported businesses and homeowners with a meticulous, human, and local approach."}
        </p>
      </section>

      <section className="about-values">
        <h2>{lang === "fr" ? "Nos engagements" : "Our Commitments"}</h2>
        <ul>
          <li>{lang === "fr" ? "✔ Service ponctuel et fiable" : "✔ Reliable and on-time service"}</li>
          <li>{lang === "fr" ? "✔ Produits écoresponsables" : "✔ Eco-conscious products"}</li>
          <li>{lang === "fr" ? "✔ Satisfaction garantie" : "✔ Satisfaction guaranteed"}</li>
          <li>{lang === "fr" ? "✔ Respect des lieux et des personnes" : "✔ Respect for your space and people"}</li>
        </ul>
      </section>

      <section className="about-founder">
        <h2>{lang === "fr" ? "Une équipe de confiance" : "A Trustworthy Team"}</h2>
        <p>
          {lang === "fr"
            ? "Dirigée par Azael Marte, Mar-Bec Entretien Inc. regroupe une équipe expérimentée, attentive et dédiée à l’excellence. Chaque mission est effectuée avec soin, discrétion et professionnalisme."
            : "Led by Azael Marte, Mar-Bec Entretien Inc. brings together a skilled, attentive team committed to excellence. Every job is handled with care, discretion, and professionalism."}
        </p>
      </section>

      <section className="about-testimonials">
        <h2>{lang === "fr" ? "Ce que disent nos clients" : "What Our Clients Say"}</h2>
        <div className="testimonial-card">
          <p>
            {lang === "fr"
              ? "“Service impeccable, équipe toujours ponctuelle et souriante. Je recommande Mar-Bec les yeux fermés.”"
              : "“Impeccable service — always on time and friendly. I recommend Mar-Bec without hesitation.”"}
          </p>
          <span>– {lang === "fr" ? "Julie L., Brossard" : "Julie L., Brossard"}</span>
        </div>
      </section>
    </main>
  );
};

export default About;
