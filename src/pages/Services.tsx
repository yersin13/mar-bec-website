import React, { useContext } from "react";
import ServiceSection from "../components/ServiceSection";
import { LangContext } from "../i18n/LanguageContext";

const Services: React.FC = () => {
  const { lang } = useContext(LangContext);

  return (
    <main>
      
      <ServiceSection
        lang={lang}
        title={{ en: "Commercial Cleaning", fr: "Entretien commercial" }}
        description={{
          en: "Professional maintenance for offices, clinics, retail spaces, and institutions. Ideal for businesses that need consistent and discreet cleaning services.",
          fr: "Entretien professionnel pour bureaux, cliniques, commerces et institutions. Idéal pour les entreprises qui ont besoin d’un service de nettoyage régulier et discret."
        }}
        details={{
          en: [
            "Daily, weekly, or custom schedules",
            "Disinfection of high-touch surfaces",
            "Restroom, kitchen, and floor maintenance",
            "Reliable, uniformed staff with attention to detail"
          ],
          fr: [
            "Fréquences personnalisées : quotidien, hebdomadaire, etc.",
            "Désinfection des surfaces fréquemment touchées",
            "Entretien des toilettes, cuisines et planchers",
            "Personnel fiable en uniforme, souci du détail"
          ]
        }}
        image="/assets/services/comercial.png"
      />

      <ServiceSection
        lang={lang}
        title={{ en: "Residential Cleaning", fr: "Entretien résidentiel" }}
        description={{
          en: "Detailed, respectful cleaning for homes, condos, and apartments — perfect for families, professionals, or elderly residents.",
          fr: "Nettoyage soigné et respectueux pour maisons, condos et appartements — idéal pour les familles, professionnels ou personnes âgées."
        }}
        details={{
          en: [
            "Flexible recurring or one-time cleanings",
            "Use of non-toxic, family-safe products",
            "Dusting, bathrooms, kitchens, floors",
            "Respectful of personal space and privacy"
          ],
          fr: [
            "Entretien récurrent ou ponctuel flexible",
            "Produits non toxiques et sécuritaires pour la famille",
            "Époussetage, salle de bain, cuisine, sols",
            "Respect de la vie privée et de l’espace personnel"
          ]
        }}
        image="/assets/services/demenagement.png"
        reverse
      />

      <ServiceSection
        lang={lang}
        title={{ en: "Deep Cleaning", fr: "Grand ménage" }}
        description={{
          en: "Intensive cleaning for neglected areas or before special occasions. Perfect after long absences or seasonal changes.",
          fr: "Nettoyage intensif pour zones négligées ou avant des événements spéciaux. Parfait après une longue absence ou un changement de saison."
        }}
        details={{
          en: [
            "Detailed cleaning behind and under furniture",
            "Scrubbing baseboards, doors, vents, and corners",
            "Removal of built-up grime and dust",
            "Tailored checklist based on your space"
          ],
          fr: [
            "Nettoyage derrière et sous les meubles",
            "Récurage des plinthes, portes, grilles et coins",
            "Élimination des accumulations de saleté et poussière",
            "Liste de tâches adaptée à votre espace"
          ]
        }}
        image="/assets/services/menage.png"
      />

      <ServiceSection
        lang={lang}
        title={{ en: "Post-Construction", fr: "Après-construction" }}
        description={{
          en: "Thorough cleanup after renovation or construction. We remove dust, debris, and residues to make the space ready to use.",
          fr: "Nettoyage complet après travaux ou rénovations. Nous enlevons poussière, débris et résidus pour rendre l’espace utilisable."
        }}
        details={{
          en: [
            "Debris and dust removal from all surfaces",
            "Window and frame cleaning",
            "Safe handling of construction residues",
            "Preparation for move-in or staging"
          ],
          fr: [
            "Élimination des débris et poussière sur toutes les surfaces",
            "Nettoyage des vitres et cadres",
            "Manipulation sécuritaire des résidus de chantier",
            "Préparation à l’emménagement ou à la mise en valeur"
          ]
        }}
        image="/assets/services/construction.png"
        reverse
      />

      <ServiceSection
        lang={lang}
        title={{ en: "Window Cleaning", fr: "Lavage de vitres" }}
        description={{
          en: "Spotless windows for homes or storefronts. Inside and out — no streaks, no drips, just clear results.",
          fr: "Vitres impeccables pour maisons ou vitrines. Intérieur et extérieur — sans traces ni coulures."
        }}
        details={{
          en: [
            "Interior and exterior glass cleaning",
            "Safe work on ladders or high-reach poles",
            "Removal of dirt, smudges, tape, and residue",
            "Final polish with lint-free cloths"
          ],
          fr: [
            "Nettoyage intérieur et extérieur des vitres",
            "Travail sécuritaire avec échelles ou perches",
            "Élimination de saleté, traces, rubans, résidus",
            "Finition avec chiffon sans peluches"
          ]
        }}
        image="/assets/services/vitres.png"
      />

      <ServiceSection
        lang={lang}
        title={{ en: "Security & Monitoring", fr: "Surveillance" }}
        description={{
          en: "Reliable on-site presence for peace of mind. Ideal for residential complexes, events, and business properties.",
          fr: "Présence sur place fiable pour votre tranquillité d’esprit. Idéal pour complexes résidentiels, événements et locaux commerciaux."
        }}
        details={{
          en: [
            "Trained personnel for night and day shifts",
            "Check-ins, reporting, and incident response",
            "Uniformed presence for deterrence",
            "Custom protocols for your needs"
          ],
          fr: [
            "Personnel formé pour quarts de jour et nuit",
            "Rondes, rapports et intervention en cas d’incident",
            "Présence en uniforme pour effet dissuasif",
            "Protocoles personnalisés selon vos besoins"
          ]
        }}
        image="/assets/services/securite.png"
        reverse
      />
    </main>
  );
};

export default Services;
