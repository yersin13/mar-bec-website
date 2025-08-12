import React, { useContext } from "react";
import { LangContext } from "../i18n/LanguageContext";
import "./Contact.css";

const Contact: React.FC = () => {
  const { lang } = useContext(LangContext);

  const t = {
    title: lang === "fr" ? "Contactez-nous" : "Contact Us",
    sub: lang === "fr"
      ? "Réponse rapide, service fiable. Dites-nous ce dont vous avez besoin et nous vous reviendrons dans les plus brefs délais."
      : "Quick replies, reliable service. Tell us what you need and we’ll get back to you shortly.",
    call: lang === "fr" ? "Appelez-nous" : "Call us",
    email: lang === "fr" ? "Écrivez-nous" : "Email us",
    hours: lang === "fr" ? "Heures d’ouverture" : "Business hours",
    areas: lang === "fr" ? "Secteurs desservis" : "Service areas",
    why: lang === "fr" ? "Pourquoi nous contacter" : "Why reach out",
    fastQuotes: lang === "fr" ? "Soumissions rapides" : "Fast, no‑pressure quotes",
    flexible: lang === "fr" ? "Horaires flexibles" : "Flexible scheduling",
    insured: lang === "fr" ? "Entreprise assurée" : "Fully insured company",
    privacy: lang === "fr"
      ? "Nous respectons votre vie privée. Vos informations ne seront jamais partagées."
      : "We respect your privacy. Your information will never be shared.",
    name: lang === "fr" ? "Nom" : "Name",
    message: lang === "fr" ? "Votre message" : "Your message",
    send: lang === "fr" ? "Envoyer" : "Send"
  };

  return (
    <main className="contact-wrap">
      <header className="contact-header">
        <h1>{t.title}</h1>
        <p className="contact-sub">{t.sub}</p>
      </header>

      <section className="contact-grid">
        {/* LEFT: the form */}
        <div className="contact-form-card">
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thanks"
          >
            <input type="hidden" name="form-name" value="contact" />
            {/* keep the honeypot hidden */}
            <p style={{ display: "none" }}>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <input type="text" name="name" placeholder={t.name} required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder={t.message} required />
            <button type="submit">{t.send}</button>

            <small className="privacy-note">{t.privacy}</small>
          </form>
        </div>

        {/* RIGHT: quick info */}
        <aside className="contact-aside">
          <div className="info-cards">
            <div className="info-card">
              <h3>{t.call}</h3>
              <a href="tel:5145542827">514‑554‑2827</a>
              <p>{lang === "fr" ? "Réponse rapide" : "Fast response"}</p>
            </div>

            <div className="info-card">
              <h3>{t.email}</h3>
              {/* Keep the client email visible for the real site;
                  during testing the Netlify email goes to you */}
              <a href="mailto:adm@mar-bec.com">adm@mar-bec.com</a>
              <p>{lang === "fr" ? "Support en français et en anglais" : "Support in French & English"}</p>
            </div>
          </div>

          <div className="info-block">
            <h4>{t.hours}</h4>
            <ul>
              <li>{lang === "fr" ? "Lun–Ven : 8h–18h" : "Mon–Fri: 8am–6pm"}</li>
              <li>{lang === "fr" ? "Sam : 9h–14h" : "Sat: 9am–2pm"}</li>
            </ul>
          </div>

          <div className="info-block">
            <h4>{t.areas}</h4>
            <p>{lang === "fr"
              ? "Rive‑Sud de Montréal : Brossard, Longueuil, St‑Hubert, La Prairie et environs."
              : "South Shore of Montreal: Brossard, Longueuil, St‑Hubert, La Prairie, and nearby."
            }</p>
          </div>

          <div className="info-block">
            <h4>{t.why}</h4>
            <ul className="why-list">
              <li>• {t.fastQuotes}</li>
              <li>• {t.flexible}</li>
              <li>• {t.insured}</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
