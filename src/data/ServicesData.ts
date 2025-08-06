// src/data/servicesData.ts

export interface Service {
  id: string;
  emoji: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  details?: { en: string[]; fr: string[] };
  features?: { en: string[]; fr: string[] };
  benefits?: { en: string; fr: string };
  cta?: { en: string; fr: string };
  tags?: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "commercial",
    emoji: "🧽",
    title: {
      en: "Commercial Cleaning",
      fr: "Entretien commercial",
    },
    description: {
      en: "Professional maintenance for offices, clinics, retail spaces, and institutions. Ideal for businesses that need consistent and discreet cleaning services.",
      fr: "Entretien professionnel pour bureaux, cliniques, commerces et institutions. Idéal pour les entreprises qui ont besoin d’un service de nettoyage régulier et discret.",
    },
    details: {
      en: [
        "Daily, weekly, or custom schedules",
        "Disinfection of high-touch surfaces",
        "Restroom, kitchen, and floor maintenance",
        "Reliable, uniformed staff with attention to detail",
      ],
      fr: [
        "Fréquences personnalisées : quotidien, hebdomadaire, etc.",
        "Désinfection des surfaces fréquemment touchées",
        "Entretien des toilettes, cuisines et planchers",
        "Personnel fiable en uniforme, souci du détail",
      ],
    },
    features: {
      en: [
        "No disruption to your business hours",
        "Eco-friendly, professional-grade products",
        "Fully insured and background-checked staff",
      ],
      fr: [
        "Aucun dérangement durant vos heures d'ouverture",
        "Produits professionnels écologiques",
        "Personnel assuré et vérifié",
      ],
    },
    benefits: {
      en: "Keep your workplace spotless and welcoming for both employees and clients. Our discreet and detail-oriented team ensures a hygienic, safe environment every time.",
      fr: "Gardez votre lieu de travail impeccable et accueillant pour vos employés et clients. Notre équipe discrète et minutieuse assure un environnement propre et sécuritaire à chaque visite.",
    },
    cta: {
      en: "Let’s keep your business spotless.",
      fr: "Confiez-nous la propreté de votre entreprise.",
    },
    tags: ["office", "clinic", "retail", "institution", "weekly", "eco"],
    image: "/assets/services/comercial.png",
  },
  {
    id: "residential",
    emoji: "🏠",
    title: {
      en: "Residential Cleaning",
      fr: "Entretien résidentiel",
    },
    description: {
      en: "Detailed, respectful cleaning for homes, condos, and apartments — perfect for families, professionals, or elderly residents.",
      fr: "Nettoyage soigné et respectueux pour maisons, condos et appartements — idéal pour les familles, professionnels ou personnes âgées.",
    },
    details: {
      en: [
        "Flexible recurring or one-time cleanings",
        "Use of non-toxic, family-safe products",
        "Dusting, bathrooms, kitchens, floors",
        "Respectful of personal space and privacy",
      ],
      fr: [
        "Entretien récurrent ou ponctuel flexible",
        "Produits non toxiques et sécuritaires pour la famille",
        "Époussetage, salle de bain, cuisine, sols",
        "Respect de la vie privée et de l’espace personnel",
      ],
    },
    features: {
      en: [
        "Ideal for busy households",
        "Pet- and child-friendly cleaning",
        "Customizable room-by-room approach",
      ],
      fr: [
        "Idéal pour les foyers occupés",
        "Nettoyage adapté aux enfants et aux animaux",
        "Approche personnalisée pièce par pièce",
      ],
    },
    benefits: {
      en: "Enjoy a cleaner, healthier living space without lifting a finger. We adapt to your schedule and lifestyle.",
      fr: "Profitez d’un espace de vie plus propre et sain sans lever le petit doigt. Nous nous adaptons à votre horaire et style de vie.",
    },
    cta: {
      en: "Get your home professionally cleaned.",
      fr: "Offrez à votre maison un nettoyage professionnel.",
    },
    tags: ["home", "family", "condo", "one-time", "recurring", "eco"],
    image: "/assets/services/demenagement.png",
  },
  {
    id: "deep",
    emoji: "🧼",
    title: {
      en: "Deep Cleaning",
      fr: "Grand ménage",
    },
    description: {
      en: "Intensive cleaning for neglected areas or before special occasions. Perfect after long absences or seasonal changes.",
      fr: "Nettoyage intensif pour zones négligées ou avant des événements spéciaux. Parfait après une longue absence ou un changement de saison.",
    },
    details: {
      en: [
        "Detailed cleaning behind and under furniture",
        "Scrubbing baseboards, doors, vents, and corners",
        "Removal of built-up grime and dust",
        "Tailored checklist based on your space",
      ],
      fr: [
        "Nettoyage derrière et sous les meubles",
        "Récurage des plinthes, portes, grilles et coins",
        "Élimination des accumulations de saleté et poussière",
        "Liste de tâches adaptée à votre espace",
      ],
    },
    features: {
      en: [
        "Ideal for spring or move-in/out cleaning",
        "High-attention to detail",
        "Top-to-bottom refresh for any space",
      ],
      fr: [
        "Idéal pour le ménage de printemps ou déménagement",
        "Soin méticuleux des moindres recoins",
        "Rafraîchissement complet de l’espace",
      ],
    },
    benefits: {
      en: "Rediscover the full potential of your space with a deep clean that removes the toughest dirt and buildup.",
      fr: "Redécouvrez tout le potentiel de votre espace avec un nettoyage en profondeur qui élimine la saleté incrustée.",
    },
    cta: {
      en: "Let’s deep clean your space.",
      fr: "Faisons un grand ménage chez vous.",
    },
    tags: ["deep", "move-in", "move-out", "spring", "thorough"],
    image: "/assets/services/menage.png",
  },
  {
    id: "post-construction",
    emoji: "👷",
    title: {
      en: "Post-Construction",
      fr: "Après-construction",
    },
    description: {
      en: "Thorough cleanup after renovation or construction. We remove dust, debris, and residues to make the space ready to use.",
      fr: "Nettoyage complet après travaux ou rénovations. Nous enlevons poussière, débris et résidus pour rendre l’espace utilisable.",
    },
    details: {
      en: [
        "Debris and dust removal from all surfaces",
        "Window and frame cleaning",
        "Safe handling of construction residues",
        "Preparation for move-in or staging",
      ],
      fr: [
        "Élimination des débris et poussière sur toutes les surfaces",
        "Nettoyage des vitres et cadres",
        "Manipulation sécuritaire des résidus de chantier",
        "Préparation à l’emménagement ou à la mise en valeur",
      ],
    },
    features: {
      en: [
        "Rapid turnaround for move-in",
        "Heavy-duty equipment used as needed",
        "Attention to post-renovation details",
      ],
      fr: [
        "Délai rapide pour emménagement",
        "Équipements spécialisés utilisés au besoin",
        "Détails post-rénovation pris en compte",
      ],
    },
    benefits: {
      en: "Your space will be dust-free, clean, and fully ready to occupy. We handle the mess so you don’t have to.",
      fr: "Votre espace sera sans poussière, propre et prêt à être utilisé. On s’occupe du désordre pour vous.",
    },
    cta: {
      en: "Finish your renovation the clean way.",
      fr: "Finalisez vos travaux avec une touche de propreté.",
    },
    tags: ["renovation", "construction", "move-in", "after-reno"],
    image: "/assets/services/construction.png",
  },
  {
    id: "windows",
    emoji: "🔷",
    title: {
      en: "Window Cleaning",
      fr: "Lavage de vitres",
    },
    description: {
      en: "Spotless windows for homes or storefronts. Inside and out — no streaks, no drips, just clear results.",
      fr: "Vitres impeccables pour maisons ou vitrines. Intérieur et extérieur — sans traces ni coulures.",
    },
    details: {
      en: [
        "Interior and exterior glass cleaning",
        "Safe work on ladders or high-reach poles",
        "Removal of dirt, smudges, tape, and residue",
        "Final polish with lint-free cloths",
      ],
      fr: [
        "Nettoyage intérieur et extérieur des vitres",
        "Travail sécuritaire avec échelles ou perches",
        "Élimination de saleté, traces, rubans, résidus",
        "Finition avec chiffon sans peluches",
      ],
    },
    features: {
      en: [
        "Crystal-clear results",
        "No streaks or water spots",
        "Ideal for storefronts and homes",
      ],
      fr: [
        "Résultats transparents",
        "Sans traces ni auréoles",
        "Idéal pour vitrines et résidences",
      ],
    },
    benefits: {
      en: "Enhance curb appeal and visibility with perfectly clean windows.",
      fr: "Améliorez l’apparence et la luminosité avec des vitres impeccables.",
    },
    cta: {
      en: "Let your windows shine.",
      fr: "Faites briller vos vitres.",
    },
    tags: ["windows", "storefront", "residential", "glass", "seasonal"],
    image: "/assets/services/vitres.png",
  },
  {
    id: "security",
    emoji: "🛡️",
    title: {
      en: "Security & Monitoring",
      fr: "Surveillance",
    },
    description: {
      en: "Reliable on-site presence for peace of mind. Ideal for residential complexes, events, and business properties.",
      fr: "Présence sur place fiable pour votre tranquillité d’esprit. Idéal pour complexes résidentiels, événements et locaux commerciaux.",
    },
    details: {
      en: [
        "Trained personnel for night and day shifts",
        "Check-ins, reporting, and incident response",
        "Uniformed presence for deterrence",
        "Custom protocols for your needs",
      ],
      fr: [
        "Personnel formé pour quarts de jour et nuit",
        "Rondes, rapports et intervention en cas d’incident",
        "Présence en uniforme pour effet dissuasif",
        "Protocoles personnalisés selon vos besoins",
      ],
    },
    features: {
      en: [
        "Visible deterrent and peace of mind",
        "Flexible coverage (nights, events, etc.)",
        "Trained to follow custom protocols",
      ],
      fr: [
        "Effet dissuasif et tranquillité d’esprit",
        "Horaires flexibles (nuit, événements, etc.)",
        "Suivi de protocoles personnalisés",
      ],
    },
    benefits: {
      en: "Prevent issues before they arise. Our presence protects your property and ensures professional incident response.",
      fr: "Prévenez les problèmes avant qu’ils ne surviennent. Notre présence protège vos biens et garantit une réponse professionnelle en cas d’incident.",
    },
    cta: {
      en: "Secure your space with confidence.",
      fr: "Protégez votre espace en toute confiance.",
    },
    tags: ["security", "event", "residential", "monitoring", "night shift"],
    image: "/assets/services/securite.png",
  }
];
