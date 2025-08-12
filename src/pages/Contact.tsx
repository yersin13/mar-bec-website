import React, { useContext, useState } from "react";
import { LangContext } from "../i18n/LanguageContext";
import "./Contact.css";

const Contact: React.FC = () => {
  const { lang } = useContext(LangContext);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  const t = {
    title: lang === "fr" ? "Contactez-nous" : "Contact Us",
    sub:
      lang === "fr"
        ? "Réponse rapide, service fiable. Dites-nous ce dont vous avez besoin et nous vous reviendrons dans les plus brefs délais."
        : "Quick replies, reliable service. Tell us what you need and we’ll get back to you shortly.",
    call: lang === "fr" ? "Appelez-nous" : "Call us",
    email: lang === "fr" ? "Écrivez-nous" : "Email us",
    hours: lang === "fr" ? "Heures d’ouverture" : "Business hours",
    areas: lang === "fr" ? "Secteurs desservis" : "Service areas",
    why: lang === "fr" ? "Pourquoi nous contacter" : "Why reach out",
    fastQuotes: lang === "fr" ? "Soumissions rapides" : "Fast, no-pressure quotes",
    flexible: lang === "fr" ? "Horaires flexibles" : "Flexible scheduling",
    insured: lang === "fr" ? "Entreprise assurée" : "Fully insured company",
    privacy:
      lang === "fr"
        ? "Nous respectons votre vie privée. Vos informations ne seront jamais partagées."
        : "We respect your privacy. Your information will never be shared.",
    name: lang === "fr" ? "Nom" : "Name",
    message: lang === "fr" ? "Votre message" : "Your message",
    send: lang === "fr" ? "Envoyer" : "Send",
    sending: lang === "fr" ? "Envoi..." : "Sending...",
    sentTitle: lang === "fr" ? "Message envoyé" : "Message sent",
    sentText:
      lang === "fr"
        ? "Merci! Nous répondons sous 24 h (jours ouvrables). Pour toute urgence, appelez-nous."
        : "Thanks! We reply within 24h (business hours). For urgent needs, please call us.",
    errorText:
      lang === "fr" ? "Un problème est survenu. Veuillez réessayer." : "Something went wrong. Please try again.",
  };

  // Inline Netlify submit (no redirect)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    // IMPORTANT for Netlify: include the form-name key in the payload
    data.set("form-name", "contact");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(data.entries()) as [string, string][]
        ).toString(),
      });

      form.reset();
      setStatus("success");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3500);
    }
  }

  return (
    <main className="contact-wrap">
      <header className="contact-header">
        <h1>{t.title}</h1>
        <p className="contact-sub">{t.sub}</p>
      </header>

      {/* Inline success banner */}
      {status === "success" && (
        <div className="success-banner" role="status" aria-live="polite">
          <strong>{t.sentTitle}.</strong> {t.sentText}{" "}
          — <a href="tel:5145542827">514-554-2827</a>
        </div>
      )}
      {status === "error" && (
        <div className="error-banner" role="alert">{t.errorText}</div>
      )}

      <section className="contact-grid">
        {/* LEFT: the form */}
        <div className="contact-form-card">
          <form
            className="contact-form"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Netlify needs this hidden input */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Optional tag to mark this site as staging while testing */}
            {/* <input type="hidden" name="source" value="STAGING — mar-bec-website.netlify.app" /> */}

            {/* Honeypot (hidden) */}
            <p style={{ display: "none" }}>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <input type="text" name="name" placeholder={t.name} required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder={t.message} required />

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? t.sending : t.send}
            </button>

            <small className="privacy-note">{t.privacy}</small>
          </form>
        </div>

        {/* RIGHT: quick info (unchanged) */}
        <aside className="contact-aside">
          <div className="info-cards">
            <div className="info-card">
              <h3>{t.call}</h3>
              <a href="tel:5145542827">514-554-2827</a>
              <p>{lang === "fr" ? "Réponse rapide" : "Fast response"}</p>
            </div>

            <div className="info-card">
              <h3>{t.email}</h3>
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
            <p>
              {lang === "fr"
                ? "Rive-Sud de Montréal : Brossard, Longueuil, St-Hubert, La Prairie et environs."
                : "South Shore of Montreal: Brossard, Longueuil, St-Hubert, La Prairie, and nearby."}
            </p>
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

      {/* Small toast (auto-fades) */}
      <div className={`contact-toast ${showToast ? "show" : ""}`} aria-live="polite">
        {status === "success" ? t.sentTitle : status === "error" ? t.errorText : ""}
      </div>
    </main>
  );
};

export default Contact;
