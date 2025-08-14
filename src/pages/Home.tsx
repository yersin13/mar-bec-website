import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../i18n/LanguageContext";

import ServicesPreview from "../components/ServicesPreview";
import AboutPreview from "../components/AboutPreview";
import TrustIcons from "../components/TrustIcons";
import TestimonialsPreview from "../components/TestimonialsPreview";
import ContactCTA from "../components/ContactCTA";

import "./Home.css";

type ThemeName =
  | "navy"
  | "teal"
  | "midnight"
  | "royal"
  | "ocean"
  | "slate"
  | "sky"
  | "steel"
  | "spruce"
  | "gold"
  | "mono"
  | "contrast";

const THEMES: ThemeName[] = [
  "navy",
  "teal",
  "midnight",
  "royal",
  "ocean",
  "slate",
  "sky",
  "steel",
  "spruce",
  "gold",
  "mono",
  "contrast",
];

const THEME_LABELS: Record<ThemeName, string> = {
  navy: "Navy (current)",
  teal: "Teal",
  midnight: "Midnight",
  royal: "Royal",
  ocean: "Ocean",
  slate: "Slate",
  sky: "Sky",
  steel: "Steel",
  spruce: "Spruce",
  gold: "Gold",
  mono: "Mono",
  contrast: "Contrast",
};

const THEME_KEY = "theme";

// apply/remove the theme attribute on <html> and persist + reflect in URL (?theme=...)
function applyTheme(name: ThemeName) {
  const root = document.documentElement;
  if (name === "navy") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", name);
  localStorage.setItem(THEME_KEY, name);

  // reflect in URL (no reload)
  const url = new URL(window.location.href);
  if (name === "navy") {
    url.searchParams.delete("theme");
  } else {
    url.searchParams.set("theme", name);
  }
  window.history.replaceState({}, "", url.toString());
}

const Home: React.FC = () => {
  const { lang } = useContext(LangContext);
  const [theme, setTheme] = useState<ThemeName>("navy");

  // Initialize from ?theme= or localStorage (with validation). URL wins.
  useEffect(() => {
    const q = (new URLSearchParams(window.location.search).get("theme") ||
      "") as ThemeName;
    if (THEMES.includes(q)) {
      setTheme(q);
      applyTheme(q);
      return;
    }
    const saved = (localStorage.getItem(THEME_KEY) as ThemeName | null) || "navy";
    const initial = THEMES.includes(saved) ? saved : "navy";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const onThemeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const next = e.target.value as ThemeName;
    if (!THEMES.includes(next)) return;
    setTheme(next);
    applyTheme(next);
  };

  return (
    <main className="main-content">
      {/* Hero */}
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
      <AboutPreview />

      <TestimonialsPreview lang={lang} maxItems={3} linkHref="/apropos" />
      <ContactCTA lang={lang} />

      {/* Always-visible theme switcher + live swatches */}
      <div
        style={{
          position: "fixed",
          right: 12,
          bottom: 12,
          zIndex: 3000,
          display: "flex",
          gap: 10,
          alignItems: "center",
          background: "rgba(255,255,255,.95)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(0,0,0,.08)",
          borderRadius: 12,
          padding: "8px 12px",
          boxShadow: "0 12px 24px rgba(0,0,0,.18)",
        }}
      >
        <span style={{ fontSize: 18 }} aria-hidden>
          🎨
        </span>
        <select
          value={theme}
          onChange={onThemeChange}
          style={{
            background: "transparent",
            border: "1px solid rgba(0,0,0,.15)",
            borderRadius: 8,
            padding: "6px 10px",
            fontWeight: 600,
            cursor: "pointer",
          }}
          aria-label="Theme"
        >
          {THEMES.map((t) => (
            <option key={t} value={t}>
              {THEME_LABELS[t]}
            </option>
          ))}
        </select>

        {/* live token swatches (brand / accent / surface) */}
        <div style={{ display: "flex", gap: 6 }}>
          {["--brand", "--accent", "--surface"].map((token) => (
            <div
              key={token}
              title={token}
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.12)",
                background: `var(${token})`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
