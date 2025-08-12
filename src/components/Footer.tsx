// src/components/Footer.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../i18n/LanguageContext";
import { labels } from "../i18n/lang";
import "./Footer.css";

const Footer: React.FC = () => {
  const { lang } = useContext(LangContext);
  const t = labels[lang];
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="foot-brand">Mar-Bec Entretien Inc.</div>

        <nav
          className="foot-links"
          aria-label={lang === "fr" ? "Liens de pied de page" : "Footer navigation"}
        >
          <Link to="/" onClick={scrollTop}>{t.home}</Link>
          <Link to="/services" onClick={scrollTop}>{t.services}</Link>
          <Link to="/apropos" onClick={scrollTop}>{t.about}</Link>
          <Link to="/contact" onClick={scrollTop}>{t.contact}</Link>
        </nav>

        <div className="foot-contact">
          <a href="tel:5145542827">514-554-2827</a>
          <span className="dot" aria-hidden="true">•</span>
          <a href="mailto:adm@mar-bec.com">adm@mar-bec.com</a>
        </div>
      </div>

      <div className="foot-bottom">© {year} Mar-Bec Entretien Inc.</div>
    </footer>
  );
};

export default Footer;
