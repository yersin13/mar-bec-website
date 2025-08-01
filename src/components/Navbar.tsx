import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { LangContext } from "../i18n/LanguageContext";
import { labels } from "../i18n/lang";
import "../styles/Navbar.css"; // <-- link to your custom CSS

const Navbar: React.FC = () => {
  const { lang } = useContext(LangContext);
  const t = labels[lang];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="/assets/mar-bec-logo-white-transparent.png"
            alt="Mar-Bec Entretien Inc."
            className="logo"
          />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>{t.home}</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>{t.services}</Link></li>
        <li><Link to="/apropos" onClick={toggleMenu}>{t.about}</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>{t.contact}</Link></li>
        <li><LanguageToggle /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
