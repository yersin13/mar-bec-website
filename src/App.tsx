// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";

import { LanguageProvider } from "./i18n/LanguageContext";

import "./styles/global.css";
import "./styles/theme.css";

// Optional tiny switcher button (only shows with ?themes)
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  // Safe theme init: keep current look unless user picks a theme or passes ?theme=
  useEffect(() => {
    const root = document.documentElement;

    const apply = (name: string | null) => {
      if (!name || name === "navy") root.removeAttribute("data-theme");
      else root.setAttribute("data-theme", name);
    };

    // 1) saved choice (if any)
    const saved = localStorage.getItem("theme");
    if (saved) apply(saved);

    // 2) ?theme=teal|midnight|royal|navy overrides & persists
    const qp = new URLSearchParams(window.location.search);
    const fromQuery = qp.get("theme");
    if (fromQuery) {
      apply(fromQuery);
      localStorage.setItem("theme", fromQuery);
    }
  }, []);

  // Only show the floating theme button when URL has ?themes
  const showThemeToggle = new URLSearchParams(window.location.search).has(
    "themes"
  );

  return (
    <LanguageProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>

        <Footer />

        {showThemeToggle && <ThemeToggle />}
      </Router>
    </LanguageProvider>
  );
};

export default App;
