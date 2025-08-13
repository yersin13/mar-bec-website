import React, { useContext} from "react";
import { LangContext } from "../i18n/LanguageContext";
import ServicesPreview from "../components/ServicesPreview";
import "./Home.css";
import AboutPreview from "../components/AboutPreview";
import TrustIcons from "../components/TrustIcons";
import TestimonialsPreview from "../components/TestimonialsPreview";
import ContactCTA from "../components/ContactCTA";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { lang } = useContext(LangContext);





  return (
    <main className="main-content">
<section className="hero">
  <div className="hero__overlay" aria-hidden="true" />

  <div className="hero__inner">
    <img
      src="/assets/mar-bec-logo-white-transparent.png"
      alt="Mar-Bec Entretien Inc. logo"
      className="hero__logo"
    />

    <h2 className="hero__subtitle">
      {lang === "fr"
        ? "Experts en propreté professionnelle sur la Rive-Sud de Montréal"
        : "Professional Cleaning Experts on Montreal’s South Shore"}
    </h2>

    <p className="hero__tagline">
      {lang === "fr"
        ? "Ménage commercial et résidentiel – Service personnalisé, fiable et rigoureux"
        : "Commercial and residential cleaning – Personalized, reliable, and thorough"}
    </p>

    <Link
      to="/contact"
      className="hero__cta"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {lang === "fr" ? "Demander une soumission" : "Request a Quote"}
    </Link>
  </div>
</section>


      <TrustIcons lang={lang} />
         <ServicesPreview lang={lang} />
         <AboutPreview lang={lang} />
{/* Old: <TestimonialsPreview lang={lang} /> */}
<TestimonialsPreview
  lang={lang}
  maxItems={3}
  linkHref="/apropos"
/>


<ContactCTA lang={lang} />
   

      {/* <h1>
        {lang === "fr"
          ? "Bienvenue chez Mar-Bec Entretien Inc."
          : "Welcome to Mar-Bec Entretien Inc."}
      </h1>
      <p>
        {lang === "fr"
          ? "Spécialistes en entretien ménager commercial et placement de personnel sur la Rive-Sud de Montréal."
          : "Specialists in commercial cleaning and staffing on Montreal’s South Shore."}
      </p>

      <section>
        <h2>{lang === "fr" ? "Pourquoi nous choisir?" : "Why Choose Us?"}</h2>
        <ul>
          <li>{lang === "fr" ? "✔ Service fiable, rapide et personnalisé" : "✔ Reliable, fast, and personalized service"}</li>
          <li>{lang === "fr" ? "✔ Plus de 10 ans d’expérience" : "✔ Over 10 years of experience"}</li>
          <li>{lang === "fr" ? "✔ Équipe formée et professionnelle" : "✔ Trained and professional team"}</li>
          <li>{lang === "fr" ? "✔ Satisfaction garantie" : "✔ Satisfaction guaranteed"}</li>
        </ul>
      </section>

      <section>
        <h2>{lang === "fr" ? "Demandez une soumission gratuite!" : "Request a Free Quote!"}</h2>
        <p>
          {lang === "fr"
            ? "Contactez-nous dès aujourd’hui pour discuter de vos besoins en nettoyage ou en personnel."
            : "Contact us today to discuss your cleaning or staffing needs."}
        </p>
        <a href="/contact">
          <button type="button">
            {lang === "fr" ? "Contactez-nous" : "Contact Us"}
          </button>
        </a>
      </section> */}
    </main>
  );
};

export default Home;
