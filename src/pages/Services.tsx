import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LangContext } from "../i18n/LanguageContext";
import { services } from "../data/ServicesData";
import "./Services.css";

type Lang = "en" | "fr";

const ServiceBlock: React.FC<{
  lang: Lang;
  id: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  details?: { en?: string[]; fr?: string[] };
  benefits?: { en?: string; fr?: string };
  cta?: { en?: string; fr?: string };
  image: string;
  emoji?: string;
  reverse?: boolean;
}> = ({ lang, id, title, description, details, benefits, cta, image, emoji, reverse }) => {
  return (
    <section id={id} className={`svc-block ${reverse ? "reverse" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="svc-text">
        <h2 id={`${id}-title`} className="svc-title">
          {emoji ? `${emoji} ` : ""}{title[lang]}
        </h2>

        <p className="svc-desc">{description[lang]}</p>

        {details?.[lang]?.length ? (
          <ul className="svc-list" aria-label={lang === "fr" ? "Caractéristiques du service" : "Service features"}>
            {details[lang]!.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ) : null}

        {benefits?.[lang] && <p className="svc-benefits"><em>{benefits[lang]}</em></p>}
        {cta?.[lang] && <p className="svc-cta-text">{cta[lang]}</p>}
      </div>

      <div className="svc-image">
        <img className="svc-img" src={image} alt={title[lang]} loading="lazy" />
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const { lang } = useContext(LangContext);
  const location = useLocation();
  const [activeId, setActiveId] = useState<string>(services[0]?.id || "");
  const ids = useMemo(() => services.map((s) => s.id), []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if (v?.target?.id) setActiveId(v.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, .25, .5, .75, 1] }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <main className="svc-wrapper">
      <header className="svc-hero" role="banner" aria-label={lang === "fr" ? "Nos services de nettoyage" : "Our cleaning services"}>
        <div className="svc-hero-inner">
          <h1>{lang === "fr" ? "Nos services de nettoyage" : "Our Cleaning Services"}</h1>
          <p className="svc-hero-sub">
            {lang === "fr"
              ? "Des services fiables et professionnels pour chaque espace — du commercial au résidentiel."
              : "Reliable, professional services for every space — commercial or residential."}
          </p>
          <Link to="/contact" className="btn-primary" aria-label={lang === "fr" ? "Demander une soumission" : "Request a Quote"}>
            {lang === "fr" ? "Demander une soumission" : "Request a Quote"}
          </Link>
        </div>
        <div className="svc-wave" aria-hidden="true" />
      </header>

      <nav className="svc-toc" aria-label={lang === "fr" ? "Navigation des services" : "Services navigation"}>
        <div className="svc-toc-inner">
          {services.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`svc-chip ${activeId === s.id ? "active" : ""}`}
              onClick={() => scrollTo(s.id)}
              aria-current={activeId === s.id ? "true" : undefined}
            >
              {s.emoji ? `${s.emoji} ` : ""}{s.title[lang as Lang]}
            </button>
          ))}
        </div>
      </nav>

      <section className="svc-section" aria-label={lang === "fr" ? "Liste des services" : "Service list"}>
        {services.map((s, i) => (
          <ServiceBlock
            key={s.id}
            id={s.id}
            lang={lang as Lang}
            title={s.title}
            description={s.description}
            details={s.details}
            benefits={s.benefits}
            cta={s.cta}
            image={s.image}
            emoji={s.emoji}
            reverse={i % 2 === 1}
          />
        ))}
      </section>

      <section className="svc-cta" aria-label={lang === "fr" ? "Appel à l'action" : "Call to action"}>
        <div className="svc-cta-inner">
          <h2>{lang === "fr" ? "Obtenez un espace impeccable dès aujourd’hui" : "Get a Sparkling Space Today"}</h2>
          <p>{lang === "fr" ? "Contactez‑nous pour une soumission rapide et personnalisée." : "Reach out now for a fast, personalized quote."}</p>
          <Link to="/contact" className="btn-primary" aria-label={lang === "fr" ? "Demander une soumission" : "Request a Quote"}>
            {lang === "fr" ? "Demander une soumission" : "Request a Quote"}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
