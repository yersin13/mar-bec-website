import React, { useContext } from "react";
import { LangContext } from "../i18n/LanguageContext";
import TestimonialsPreview from "../components/TestimonialsPreview"; // keep or remove if you prefer
import "./About.css";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const { lang } = useContext(LangContext);
  const t = lang === "fr" ? fr : en;

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="overlay">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
        </div>
        <div className="divider-wave" aria-hidden="true" />
      </section>

      {/* INTRO */}
      <section className="section section-light">
        <div className="container narrow">
          <p className="lead">{t.intro.p1}</p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section section-split">
        <div className="container split">
          <div className="panel">
            <h2>{t.mission.title}</h2>
            <p>{t.mission.p1}</p>
          </div>
          <div className="panel">
            <h2>{t.vision.title}</h2>
            <p>{t.vision.p1}</p>
          </div>
        </div>
      </section>

      {/* STORY TIMELINE (no hard numbers, just narrative milestones) */}
      <section className="section section-pattern">
        <div className="container">
          <h2 className="center">{t.story.title}</h2>
          <ul className="timeline">
            {t.story.items.map((it, i) => (
              <li key={i}>
                <span className="dot" />
                <div className="timeline-card">
                  <h3>{it.h}</h3>
                  <p>{it.p}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY MAR-BEC */}
      <section className="section section-cards">
        <div className="container">
          <h2 className="center">{t.why.title}</h2>
          <div className="cards">
            {t.why.cards.map((c, i) => (
              <div className="card" key={i}>
                <div className="icon">{c.icon}</div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECO / QUALITY */}
      <section className="section section-eco">
        <div className="container narrow">
          <h2 className="center">{t.eco.title}</h2>
          <ul className="checklist">
            {t.eco.items.map((li, i) => <li key={i}>✔ {li}</li>)}
          </ul>
        </div>
      </section>

      {/* AREAS */}
      <section className="section section-light">
        <div className="container">
          <h2 className="center">{t.areas.title}</h2>
          <p className="center">{t.areas.desc}</p>
          <div className="chips">
            {t.areas.cities.map((c, i) => <span className="chip" key={i}>{c}</span>)}
          </div>
        </div>
      </section>

      {/* GUARANTEES BAND */}
      <section className="section section-band">
        <div className="container band">
          {t.band.items.map((b, i) => (
            <div className="band-item" key={i}>
              <strong>{b.h}</strong>
              <span>{b.p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container narrow">
          <h2 className="center">{t.team.title}</h2>
          <p className="center">{t.team.p1}</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-testimonials">
        <div className="container">
          <h2 className="center">{t.testimonials.title}</h2>
          <TestimonialsPreview lang={lang as "en" | "fr"} />
        </div>
      </section>

     {/* CTA */}
<section className="section section-cta">
  <div className="container cta">
    <h3>{t.cta.title}</h3>
    <p>{t.cta.subtitle}</p>

    {/* SPA navigation, keeps styling */}
    <Link
      to="/contact"
      className="btn-primary"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.cta.button}
    >
      {t.cta.button}
    </Link>
  </div>
</section>

    </main>
  );
};

export default About;

/* ---------- COPY ---------- */

const fr = {
  hero: {
    title: "À propos de nous",
    subtitle:
      "Un service de nettoyage professionnel, fiable et personnalisé — au cœur de la Rive‑Sud de Montréal.",
  },
  intro: {
    p1: "Mar‑Bec Entretien Inc. accompagne entreprises et particuliers avec une approche rigoureuse, humaine et locale. Notre promesse : des espaces impeccables, des équipes respectueuses et une communication claire du premier contact jusqu’au contrôle qualité.",
  },
  mission: {
    title: "Notre mission",
    p1: "Créer des environnements propres, sains et rassurants grâce à des méthodes éprouvées, discrètes et orientées résultats.",
  },
  vision: {
    title: "Notre vision",
    p1: "Être la référence locale en propreté et en placement d’équipes fiables sur la Rive‑Sud.",
  },
  story: {
    title: "Notre histoire en quelques étapes",
    items: [
      { h: "Des débuts sur le terrain", p: "Une demande simple : un entretien enfin fiable, constant et humain." },
      { h: "Bouche‑à‑oreille et services élargis", p: "De nouveaux secteurs (bureaux, commerces, copropriétés) et des procédures standardisées." },
      { h: "Ajout du placement de personnel", p: "Des remplacements ponctuels ou récurrents avec supervision et suivi." },
      { h: "Aujourd’hui", p: "Une équipe expérimentée, des checklists par tâche et une culture d’amélioration continue." },
    ],
  },
  why: {
    title: "Pourquoi Mar‑Bec",
    cards: [
      { icon: "🧭", h: "Fiabilité & ponctualité", p: "Équipes assignées, horaires respectés, service constant." },
      { icon: "🧼", h: "Qualité visible", p: "Checklists, contrôle qualité et retours rapides." },
      { icon: "🌿", h: "Écoresponsable", p: "Produits certifiés, dosages sécuritaires et microfibres réutilisables." },
      { icon: "🤝", h: "Service personnalisé", p: "Plan adapté à vos priorités, accès direct au gestionnaire." },
    ],
  },
  eco: {
    title: "Qualité & écoresponsabilité",
    items: [
      "Procédures normalisées par zone (bureaux, sanitaires, aires communes)",
      "Fiches techniques & formation continue",
      "Réduction des déchets et tri responsable",
      "Traçabilité des tâches et suivi après service",
    ],
  },
  areas: {
    title: "Secteurs desservis",
    desc: "Basés sur la Rive‑Sud de Montréal — intervention rapide et souple selon vos besoins.",
    cities: ["Brossard", "Longueuil", "Saint‑Hubert", "La Prairie", "Boucherville", "Candiac", "Greenfield Park", "Saint‑Lambert"],
  },
  band: {
    items: [
      { h: "Communication claire", p: "Un interlocuteur dédié et des comptes‑rendus simples." },
      { h: "Discrétion & respect", p: "Sites traités avec soin, confidentialité intégrée." },
      { h: "Suivi après service", p: "Ajustements rapides jusqu’à satisfaction." },
    ],
  },
  team: {
    title: "Une équipe de confiance",
    p1: "Dirigée par Azael Marte, notre équipe privilégie la transparence, le respect des lieux et le souci du détail. Chaque mission est effectuée avec soin et professionnalisme.",
  },
  testimonials: { title: "Ce que disent nos clients" },
  cta: {
    title: "Parlons de vos besoins",
    subtitle: "Demandez une estimation gratuite — réponse rapide et plan clair.",
    button: "Contactez‑nous",
  },
};

const en = {
  hero: {
    title: "About Us",
    subtitle:
      "Professional, reliable, and personalized cleaning — serving Montreal’s South Shore.",
  },
  intro: {
    p1: "Mar‑Bec Entretien Inc. supports businesses and homeowners with a meticulous, human, local approach. Our promise: spotless spaces, respectful teams, and clear communication from first contact to quality check.",
  },
  mission: {
    title: "Our Mission",
    p1: "Create clean, healthy, reassuring spaces through proven, discreet, results‑driven methods.",
  },
  vision: {
    title: "Our Vision",
    p1: "Be the local benchmark for cleaning and reliable staffing on the South Shore.",
  },
  story: {
    title: "Our story in a few steps",
    items: [
      { h: "Hands‑on beginnings", p: "A simple request from clients: reliable, consistent, human cleaning." },
      { h: "Word‑of‑mouth growth", p: "Expanded to offices, retail and condos with standardized procedures." },
      { h: "Staffing added", p: "Occasional or recurring coverage with supervision and follow‑up." },
      { h: "Today", p: "Experienced teams, task checklists, and a culture of continuous improvement." },
    ],
  },
  why: {
    title: "Why Choose Mar‑Bec",
    cards: [
      { icon: "🧭", h: "Reliable & on‑time", p: "Assigned teams, respected schedules, consistent results." },
      { icon: "🧼", h: "Visible quality", p: "Checklists, quality control, fast feedback loops." },
      { icon: "🌿", h: "Eco‑conscious", p: "Certified products, safe dilution, reusable microfibers." },
      { icon: "🤝", h: "Personalized service", p: "Plan tailored to your priorities, direct access to the manager." },
    ],
  },
  eco: {
    title: "Quality & Eco‑Responsibility",
    items: [
      "Standardized procedures by zone (offices, washrooms, common areas)",
      "Technical sheets & ongoing training",
      "Waste reduction and responsible sorting",
      "Task traceability and post‑service follow‑up",
    ],
  },
  areas: {
    title: "Service Areas",
    desc: "Based on Montreal’s South Shore — fast coverage adapted to your needs.",
    cities: ["Brossard", "Longueuil", "Saint‑Hubert", "La Prairie", "Boucherville", "Candiac", "Greenfield Park", "Saint‑Lambert"],
  },
  band: {
    items: [
      { h: "Clear communication", p: "A dedicated contact and simple reporting." },
      { h: "Discretion & respect", p: "Spaces handled with care, confidentiality included." },
      { h: "After‑service follow‑up", p: "Quick adjustments until you’re satisfied." },
    ],
  },
  team: {
    title: "A Trustworthy Team",
    p1: "Led by Azael Marte, our team values transparency, respect for your space, and attention to detail. Every job is handled with care and professionalism.",
  },
  testimonials: { title: "What Our Clients Say" },
  cta: {
    title: "Tell us what you need",
    subtitle: "Request a free estimate — quick response and a clear plan.",
    button: "Contact Us",
  },
};
