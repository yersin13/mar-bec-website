import React from "react";
import "./ServiceSection.css";

interface Props {
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  details?: { en: string[]; fr: string[] };
  image: string;
  lang: "en" | "fr";
  reverse?: boolean;
}

const ServiceSection: React.FC<Props> = ({ title, description, details, image, lang, reverse }) => {
  return (
    <div className="service-wrapper">
    <section className={`service-section ${reverse ? "reverse" : ""}`}>
      <div className="service-text">
        <h2>{title[lang]}</h2>
        <p>{description[lang]}</p>
        {details && (
          <ul>
            {details[lang].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="service-image">
        <img src={image} alt={title[lang]} />
      </div>
    </section>
    </div>
  );
};

export default ServiceSection;
