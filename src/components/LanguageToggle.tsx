import React, { useContext } from "react";
import { LangContext } from "../i18n/LanguageContext";

const LanguageToggle: React.FC = () => {
  const { lang, toggleLang } = useContext(LangContext);
  return (
    <button onClick={toggleLang} className="lang-toggle">
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
};

export default LanguageToggle;
