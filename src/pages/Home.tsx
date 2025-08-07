import React, { useContext} from "react";
import { LangContext } from "../i18n/LanguageContext";
import ServicesPreview from "../components/ServicesPreview";
import "./Home.css";
import AboutPreview from "../components/AboutPreview";
import TrustIcons from "../components/TrustIcons";
import TestimonialsPreview from "../components/TestimonialsPreview";
import ContactCTA from "../components/ContactCTA";

const Home: React.FC = () => {
  const { lang } = useContext(LangContext);





  return (
    <main className="main-content">
      <section
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: "url('/assets/hero.png')",
          backgroundSize: 'cover',
         backgroundPosition: 'right 50% center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(1, 42, 74, 0.64)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '2rem',
            textAlign: 'center',
            flexDirection: 'column',
          }}
        >
          <img
            src="/assets/mar-bec-logo-white-transparent.png"
            alt="Mar-Bec Entretien Inc. logo"
            style={{
              maxWidth: '400px',
              width: '80%',
              marginBottom: '1rem',
            }}
          />

          <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', marginBottom: '0.5rem', color: '#E1F3FF' }}>
            {lang === 'fr'
              ? 'Experts en propreté professionnelle sur la Rive-Sud de Montréal'
              : 'Professional Cleaning Experts on Montreal’s South Shore'}
          </h2>

          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#E1F3FF' }}>
            {lang === 'fr'
              ? 'Ménage commercial et résidentiel – Service personnalisé, fiable et rigoureux'
              : 'Commercial and residential cleaning – Personalized, reliable, and thorough'}
          </p>

          <a href="/contact">
            <button
              style={{
                backgroundColor: '#2986CC',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              {lang === 'fr' ? 'Demander une soumission' : 'Request a Quote'}
            </button>
          </a>
        </div>
      </section>

      <TrustIcons lang={lang} />
         <ServicesPreview lang={lang} />
         <AboutPreview lang={lang} />
      <TestimonialsPreview lang={lang} />

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
