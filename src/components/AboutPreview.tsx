import React, { useContext } from 'react';
import { Link } from 'react-router-dom';         // ⬅️ add this
import './AboutPreview.css';
import { LangContext } from '../i18n/LanguageContext';

const AboutPreview: React.FC = () => {
  const { lang } = useContext(LangContext);
  const isFr = lang === 'fr';

  return (
    <section className="about-preview">
      <div className="about-bg"></div>

      <div className="about-content">
        <div className="about-images">
          <img
            src="/assets/about1.png"
            alt={isFr ? "Équipe de nettoyage professionnelle" : "Professional cleaning team"}
          />
        </div>

        <div className="about-text">
          <h4>{isFr ? "À PROPOS" : "ABOUT US"}</h4>
          <h2>{isFr ? "Des services de nettoyage de qualité depuis 2001" : "Best Cleaning Services Provider Since 2001"}</h2>
          <p>{isFr ? "Nous sommes fiers d'offrir un service personnalisé, fiable et rigoureux à nos clients résidentiels et commerciaux."
                   : "We are proud to offer personalized, reliable and thorough cleaning services to residential and commercial clients."}</p>

          <ul className="features-list">
            <li>{isFr ? "Équipe honnête et professionnelle" : "Honest and Professional Team"}</li>
            <li>{isFr ? "Produits de nettoyage de haute qualité" : "High-Quality Cleaning Products"}</li>
            <li>{isFr ? "Satisfaction garantie à 100 %" : "100% Satisfaction Guarantee"}</li>
            <li>{isFr ? "Entreprise assurée et certifiée" : "Licensed and Insured Company"}</li>
          </ul>

          {/* Link styled as button */}
          <Link
            to="/apropos"                         // your About route
            className="about-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {isFr ? "En savoir plus" : "Learn More"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
