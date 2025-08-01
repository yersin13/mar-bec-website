import React, { useContext } from "react";
import { LangContext } from "../i18n/LanguageContext";

const Contact: React.FC = () => {
  const { lang } = useContext(LangContext);

  return (
    <main className="main-content">
      <h1>{lang === "fr" ? "Contactez-nous" : "Contact Us"}</h1>

      <p>
        {lang === "fr"
          ? "Vous avez une question ou besoin d’une soumission rapide? Remplissez le formulaire ci-dessous ou appelez-nous au "
          : "Have a question or need a quick quote? Fill out the form below or call us at "}
        <a href="tel:5145542827">514-554-2827</a>.
      </p>

      <p>
        <strong>Adresse:</strong> 6185, boulevard Taschereau, porte 118, Brossard (Québec) J4Z 1A6
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:adm@mar-bec.com">adm@mar-bec.com</a>
      </p>

      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder={lang === "fr" ? "Nom" : "Name"}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          placeholder={lang === "fr" ? "Votre message" : "Your message"}
          required
        />
        <button type="submit">
          {lang === "fr" ? "Envoyer" : "Send"}
        </button>
      </form>
    </main>
  );
};

export default Contact;
