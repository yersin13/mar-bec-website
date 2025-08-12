import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { LangContext } from "../i18n/LanguageContext";
import { labels } from "../i18n/lang";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const { lang } = useContext(LangContext);
  const t = labels[lang];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen((v) => !v);
  const closeMenu  = () => setIsMobileMenuOpen(false);

  // Scroll to top + close (for nav links)
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (isMobileMenuOpen) closeMenu();
  };

  // Close on route change (safety)
  useEffect(() => { closeMenu(); }, [location.pathname]);

  // Close if resizing to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 992) closeMenu(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close with ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <div className="navbar-brand">
        <Link
          to="/"
          className="nav-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/assets/mar-bec-logo-white-transparent.png"
            alt="Mar-Bec Entretien Inc."
            className="logo"
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMobileMenuOpen
            ? (lang === "fr" ? "Fermer le menu" : "Close menu")
            : (lang === "fr" ? "Ouvrir le menu" : "Open menu")}
        >
          ☰
        </button>
      </div>

      {/* Overlay (tap/click to close) */}
      <div
        className={`nav-overlay ${isMobileMenuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      <ul id="primary-navigation" className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={handleLinkClick}>{t.home}</Link></li>
        <li><Link to="/services" onClick={handleLinkClick}>{t.services}</Link></li>
        <li><Link to="/apropos" onClick={handleLinkClick}>{t.about}</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>{t.contact}</Link></li>
        <li className="lang-li"><LanguageToggle /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
