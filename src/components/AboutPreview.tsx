import React, { useContext } from 'react';
import './AboutPreview.css';
import { LangContext } from '../i18n/LanguageContext';

const AboutPreview: React.FC = () => {
  const { lang } = useContext(LangContext);

  const isFr = lang === 'fr';

  return (
   <section className="about-preview">
  <div className="about-images">
    <img
      src="/assets/about1.png"
      alt={isFr ? "Nettoyage professionnel" : "Professional cleaner"}
    />
    {/* <div className="experience-box">
      <span>20+</span>
      <small>{isFr ? "Années d'expérience" : "Years Experience"}</small>
    </div> */}
  </div>

  <div className="about-text">
    <h4>{isFr ? "À propos" : "About Us"}</h4>
    <h2>
      {isFr
        ? "Des services de nettoyage de qualité depuis 2001"
        : "Best Cleaning Services Provider Since 2001"}
    </h2>
    <p>
      {isFr
        ? "Nous sommes fiers d'offrir un service personnalisé, fiable et rigoureux à nos clients résidentiels et commerciaux."
        : "We are proud to offer personalized, reliable and thorough cleaning services to residential and commercial clients."}
    </p>

    <ul className="features-list">
      <li>
        {isFr
          ? "Équipe honnête et professionnelle"
          : "Loaded with Professional and Honest Cleaners"}
      </li>
      <li>
        {isFr
          ? "Produits de nettoyage de haute qualité"
          : "Provide the Finest Cleaning Supplies"}
      </li>
      <li>
        {isFr
          ? "Satisfaction garantie à 100 %"
          : "100% Satisfaction Cleaning Service"}
      </li>
      <li>
        {isFr
          ? "Entreprise assurée et certifiée"
          : "We are bonded and insured"}
      </li>
    </ul>

    <button className="about-btn">
      {isFr ? "En savoir plus" : "More About Us"}
    </button>
  </div>
</section>

  );
};

export default AboutPreview;
