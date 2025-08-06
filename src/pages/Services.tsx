import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LangContext } from "../i18n/LanguageContext";
import { services } from "../data/ServicesData";
import "./Services.css";

const Services: React.FC = () => {
  const { lang } = useContext(LangContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const serviceIndex = services.findIndex((s) => s.id === hash);
    if (serviceIndex !== -1) {
      setActiveIndex(serviceIndex);
    }
  }, [location]);

  const renderServiceDetails = (service: typeof services[number]) => (
    <div className="service-block">
      <h2>{service.title[lang]}</h2>
      <p>{service.description[lang]}</p>
      {service.details && (
        <ul>
          {service.details[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {service.features && (
        <div className="features">
          <h4>{lang === "fr" ? "Caractéristiques" : "Features"}</h4>
          <ul>
            {service.features[lang].map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {service.benefits && (
        <div className="benefits">
          <h4>{lang === "fr" ? "Avantages" : "Benefits"}</h4>
          <p>{service.benefits[lang]}</p>
        </div>
      )}
      {service.cta && (
        <div className="cta">
          <strong>{service.cta[lang]}</strong>
        </div>
      )}
      <br />
      <img
        src={service.image}
        alt={service.title[lang]}
        className="services-image"
      />
    </div>
  );

  return (
    <main className="services-container">
      {!isMobile && (
        <div className="services-sidebar">
          {services.map((service, index) => (
            <button
              key={index}
              className={`service-tab ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-selected={index === activeIndex}
              role="tab"
            >
              <span className="service-icon" role="img" aria-label="icon">
                {service.emoji} 
              </span>
              {service.title[lang]}
            </button>
          ))}
        </div>
      )}

      <div className="services-details">
        {isMobile
          ? services.map((service, sIndex) => (
              <div key={sIndex}>{renderServiceDetails(service)}</div>
            ))
          : renderServiceDetails(services[activeIndex])}
      </div>
    </main>
  );
};

export default Services;
