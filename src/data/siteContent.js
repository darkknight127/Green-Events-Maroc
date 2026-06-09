export const defaultLanguage = "fr";

export const languages = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export const brand = {
  name: "Green Events Maroc",
  instagram: "https://www.instagram.com/greenevents_maroc/",
  whatsapp: "",
};

export const productionImages = {
  hero: {
    desktop: "/images/hero/hero-desktop.webp",
    mobile: "/images/hero/hero-mobile.webp",
    video: "",
  },
  portfolio: {
    weddingTable: "/images/portfolio/wedding-table.webp",
    privateDinner: "/images/portfolio/private-dinner.webp",
    floralCandles: "/images/portfolio/floral-candles.webp",
    cateringDetail: "/images/portfolio/catering-detail.webp",
    birthdaySetup: "/images/portfolio/birthday-setup.webp",
    nightAmbiance: "/images/portfolio/night-ambiance.webp",
  },
  scrollStory: {
    images: [
      "/images/scroll-story/story-01.webp",
      "/images/scroll-story/story-02.webp",
      "/images/scroll-story/story-03.webp",
      "/images/scroll-story/story-04.webp",
      "/images/scroll-story/story-05.webp",
    ],
  },
};

export const siteContent = {
  fr: {
    languageLabel: "Choisir la langue",
    whatsappMessage:
      "Bonjour Green Events Maroc, je souhaite demander un devis pour un événement.",
    hero: {
      navLabel: "Mariages & événements privés",
      eyebrow: "Wedding & Private Events · Marrakech",
      title: "Créateurs d’expériences sur mesure.",
      subtitle:
        "Traiteur & décorateur événementiel pour mariages, anniversaires et événements privés — pensés avec élégance, du décor à l’art de recevoir.",
      primaryCta: "Demander un devis",
      secondaryCta: "Voir les réalisations",
      menuLabel: "Ouvrir le menu",
      closeMenuLabel: "Fermer le menu",
      navigation: [
        { label: "Réalisations", href: "#realisations" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
      image: {
        desktopSrc: productionImages.hero.desktop,
        mobileSrc: productionImages.hero.mobile,
        alt: "Dîner privé à Marrakech avec table élégante, bougies et ambiance de mariage",
      },
      videoSrc: productionImages.hero.video,
      highlights: [
        "Mariages sur mesure",
        "Traiteur & décoration",
        "Private events",
      ],
    },
    brandPromise: {
      eyebrow: "Créateurs d’expérience",
      title:
        "Une table, une lumière, un service: tout doit raconter la même histoire.",
      intro:
        "Green Events Maroc réunit traiteur, décoration, art de recevoir et coordination pour créer des célébrations fluides, élégantes et profondément personnelles.",
      statement:
        "Une atmosphère sur mesure, portée par le goût du détail.",
      caption:
        "Le décor, les fleurs, la table et le rythme du service sont pensés comme une seule composition.",
      image: {
        src: productionImages.portfolio.floralCandles,
        alt: "Table de réception avec bougies, fleurs et lumière chaude",
      },
      pillars: [
        {
          title: "Direction artistique",
          description:
            "Une vision claire pour aligner le lieu, les matières, les fleurs, la table et la lumière.",
        },
        {
          title: "Service maîtrisé",
          description:
            "Une présence discrète, précise, pour que vos invités vivent le moment sans rupture.",
        },
        {
          title: "Atmosphère marocaine",
          description:
            "Des détails chaleureux, des matières naturelles et une élégance adaptée à Marrakech.",
        },
      ],
    },
    servicesHeader: {
      eyebrow: "Savoir-faire",
      title: "Mariages, anniversaires et événements privés.",
      intro:
        "Chaque service est pensé comme une partie d’un ensemble: décor, table, cuisine, lumière et rythme.",
    },
    services: [
      {
        label: "Mariage",
        title: "Mariages",
        description:
          "Cérémonies, dîners et soirées imaginés avec émotion, précision et élégance.",
        image: {
          src: productionImages.portfolio.weddingTable,
          alt: "Table de mariage en extérieur avec fleurs blanches et invités",
        },
      },
      {
        label: "Privé",
        title: "Événements privés",
        description:
          "Dîners, réceptions et moments exclusifs avec une mise en scène intime et raffinée.",
        image: {
          src: productionImages.portfolio.privateDinner,
          alt: "Dîner privé aux chandelles dans un jardin à Marrakech",
        },
      },
      {
        label: "Traiteur",
        title: "Traiteur",
        description:
          "Une expérience culinaire soignée, servie au rythme de votre événement.",
        image: {
          src: productionImages.portfolio.cateringDetail,
          alt: "Détail traiteur avec bouchées raffinées, bougies et fleurs",
        },
      },
      {
        label: "Décor",
        title: "Décoration événementielle",
        description:
          "Fleurs, bougies, art de la table et matières composés avec justesse.",
        image: {
          src: productionImages.portfolio.birthdaySetup,
          alt: "Table d'anniversaire élégante avec gâteau, bougies et fleurs",
        },
      },
    ],
    portfolio: {
      eyebrow: "Réalisations",
      title: "Des atmosphères qui donnent envie de recevoir.",
      intro:
        "Un aperçu de l’univers Green Events Maroc: tables, lumière, fleurs, cuisine et lieux choisis pour créer une présence mémorable.",
      items: [
        {
          label: "Mariage",
          title: "Table de mariage en plein air",
          image: {
            src: productionImages.portfolio.weddingTable,
            alt: "Table de mariage en extérieur à Marrakech",
          },
        },
        {
          label: "Dîner privé",
          title: "Dîner aux chandelles",
          image: {
            src: productionImages.portfolio.privateDinner,
            alt: "Longue table de dîner privé éclairée aux bougies",
          },
        },
        {
          label: "Décoration",
          title: "Fleurs et bougies",
          image: {
            src: productionImages.portfolio.floralCandles,
            alt: "Décoration florale avec bougies et lanternes",
          },
        },
        {
          label: "Traiteur",
          title: "Détails culinaires",
          image: {
            src: productionImages.portfolio.cateringDetail,
            alt: "Bouchées traiteur présentées sur une table élégante",
          },
        },
        {
          label: "Anniversaire",
          title: "Table privée avec gâteau",
          image: {
            src: productionImages.portfolio.birthdaySetup,
            alt: "Table d'anniversaire raffinée avec gâteau et fleurs",
          },
        },
        {
          label: "Ambiance",
          title: "Nuit chaude à Marrakech",
          image: {
            src: productionImages.portfolio.nightAmbiance,
            alt: "Lieu de réception illuminé le soir à Marrakech",
          },
        },
      ],
    },
    processHeader: {
      eyebrow: "Méthode",
      title: "De la première intention au dernier service.",
      intro:
        "Une préparation calme, précise, pensée pour que le jour de l’événement semble naturellement fluide.",
    },
    process: [
      {
        step: "01",
        title: "Écoute",
        description:
          "Nous découvrons votre lieu, vos invités, votre rythme et l’atmosphère recherchée.",
      },
      {
        step: "02",
        title: "Direction",
        description:
          "Nous construisons une proposition cohérente: décor, table, cuisine, lumière et expérience.",
      },
      {
        step: "03",
        title: "Préparation",
        description:
          "Les détails sont alignés avec les équipes pour une exécution précise et sereine.",
      },
      {
        step: "04",
        title: "Jour J",
        description:
          "La célébration prend vie avec élégance, rythme et attention discrète.",
      },
    ],
    finalCta: {
      eyebrow: "Votre événement",
      title: "Parlons de la célébration que vous imaginez.",
      intro:
        "Mariage, anniversaire ou dîner privé: envoyez-nous quelques détails et nous vous répondrons avec une première direction claire.",
      primaryCta: "Écrire sur WhatsApp",
      instagramCta: "Voir Instagram",
    },
    stickyWhatsApp: {
      label: "Devis WhatsApp",
      ariaLabel: "Demander un devis WhatsApp",
    },
    scrollStory: {
      title: "From vision to celebration",
      subtitle:
        "Chaque événement commence par une intention. Nous la transformons en décor, en saveurs, en lumière — et en souvenirs.",
      progressLabel: "Étape",
      steps: [
        {
          number: "01",
          title: "Imaginer l’atmosphère",
          image: {
            src: productionImages.scrollStory.images[0],
            alt: "Lieu de réception à Marrakech préparé pour un mariage élégant",
          },
        },
        {
          number: "02",
          title: "Composer les détails",
          image: {
            src: productionImages.scrollStory.images[1],
            alt: "Détails de table avec fleurs, bougies, assiettes et textures",
          },
        },
        {
          number: "03",
          title: "Sublimer la table",
          image: {
            src: productionImages.scrollStory.images[2],
            alt: "Détail traiteur raffiné sur une table événementielle",
          },
        },
        {
          number: "04",
          title: "Allumer l’émotion",
          image: {
            src: productionImages.scrollStory.images[3],
            alt: "Ambiance de nuit avec lanternes, bougies et lumière chaude",
          },
        },
        {
          number: "05",
          title: "Créer le moment",
          image: {
            src: productionImages.scrollStory.images[4],
            alt: "Célébration finale avec table de mariage illuminée à Marrakech",
          },
        },
      ],
    },
  },
  en: {
    languageLabel: "Choose language",
    whatsappMessage:
      "Hello Green Events Maroc, I would like to request a quote for an event.",
    hero: {
      navLabel: "Weddings & private events",
      eyebrow: "Wedding & Private Events · Marrakech",
      title: "Tailor-made celebrations, beautifully staged.",
      subtitle:
        "Catering and event decoration for weddings, birthdays, and private events — crafted with elegance from styling to hospitality.",
      primaryCta: "Request a quote",
      secondaryCta: "View our work",
      menuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      navigation: [
        { label: "Work", href: "#realisations" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
      image: {
        desktopSrc: productionImages.hero.desktop,
        mobileSrc: productionImages.hero.mobile,
        alt: "Private dinner in Marrakesh with an elegant table, candles and wedding atmosphere",
      },
      videoSrc: productionImages.hero.video,
      highlights: ["Bespoke weddings", "Catering & styling", "Private events"],
    },
    brandPromise: {
      eyebrow: "Experience creators",
      title:
        "A table, a light, a service rhythm: everything should tell one story.",
      intro:
        "Green Events Maroc brings catering, event decoration, hosting detail and coordination together to create celebrations that feel refined, fluid and deeply personal.",
      statement:
        "A tailor-made atmosphere shaped by careful detail.",
      caption:
        "Decor, flowers, table styling and service rhythm are composed as one experience.",
      image: {
        src: productionImages.portfolio.floralCandles,
        alt: "Reception table with candles, flowers and warm light",
      },
      pillars: [
        {
          title: "Creative direction",
          description:
            "A clear vision to align the venue, materials, florals, table styling and light.",
        },
        {
          title: "Controlled service",
          description:
            "A discreet, precise presence so guests experience the moment without interruption.",
        },
        {
          title: "Marrakesh atmosphere",
          description:
            "Warm details, natural textures and an elegance shaped for Marrakesh.",
        },
      ],
    },
    servicesHeader: {
      eyebrow: "Expertise",
      title: "Weddings, birthdays and private events.",
      intro:
        "Each service is designed as part of a complete atmosphere: decor, table, cuisine, light and rhythm.",
    },
    services: [
      {
        label: "Wedding",
        title: "Weddings",
        description:
          "Ceremonies, dinners and evenings designed with emotion, precision and elegance.",
        image: {
          src: productionImages.portfolio.weddingTable,
          alt: "Outdoor wedding table with white flowers and guests",
        },
      },
      {
        label: "Private",
        title: "Private events",
        description:
          "Dinners, receptions and exclusive moments with intimate, refined staging.",
        image: {
          src: productionImages.portfolio.privateDinner,
          alt: "Candlelit private dinner in a Marrakesh garden",
        },
      },
      {
        label: "Catering",
        title: "Catering",
        description:
          "A polished culinary experience served at the pace of your event.",
        image: {
          src: productionImages.portfolio.cateringDetail,
          alt: "Catering detail with refined bites, candles and flowers",
        },
      },
      {
        label: "Decor",
        title: "Event decoration",
        description:
          "Flowers, candles, table styling and materials composed with restraint.",
        image: {
          src: productionImages.portfolio.birthdaySetup,
          alt: "Elegant birthday table with cake, candles and flowers",
        },
      },
    ],
    portfolio: {
      eyebrow: "Portfolio",
      title: "Atmospheres that make people want to gather.",
      intro:
        "A glimpse into Green Events Maroc: tables, light, flowers, cuisine and venues selected to create a memorable presence.",
      items: [
        {
          label: "Wedding",
          title: "Outdoor wedding table",
          image: {
            src: productionImages.portfolio.weddingTable,
            alt: "Outdoor wedding table in Marrakesh",
          },
        },
        {
          label: "Private dinner",
          title: "Candlelit dinner",
          image: {
            src: productionImages.portfolio.privateDinner,
            alt: "Long private dinner table lit by candles",
          },
        },
        {
          label: "Decoration",
          title: "Flowers and candles",
          image: {
            src: productionImages.portfolio.floralCandles,
            alt: "Floral decoration with candles and lanterns",
          },
        },
        {
          label: "Catering",
          title: "Culinary details",
          image: {
            src: productionImages.portfolio.cateringDetail,
            alt: "Catering bites presented on an elegant table",
          },
        },
        {
          label: "Birthday",
          title: "Private table with cake",
          image: {
            src: productionImages.portfolio.birthdaySetup,
            alt: "Refined birthday table with cake and flowers",
          },
        },
        {
          label: "Ambience",
          title: "Warm night in Marrakesh",
          image: {
            src: productionImages.portfolio.nightAmbiance,
            alt: "Evening reception venue illuminated in Marrakesh",
          },
        },
      ],
    },
    processHeader: {
      eyebrow: "Method",
      title: "From first intention to final service.",
      intro:
        "A calm, precise preparation process designed to make the event day feel naturally fluid.",
    },
    process: [
      {
        step: "01",
        title: "Listening",
        description:
          "We understand your venue, guests, rhythm and desired atmosphere.",
      },
      {
        step: "02",
        title: "Direction",
        description:
          "We build one coherent proposal: decor, table, cuisine, lighting and experience.",
      },
      {
        step: "03",
        title: "Preparation",
        description:
          "Details are aligned with the teams for a precise and calm execution.",
      },
      {
        step: "04",
        title: "Event day",
        description:
          "The celebration comes to life with elegance, rhythm and discreet attention.",
      },
    ],
    finalCta: {
      eyebrow: "Your event",
      title: "Let’s talk about the celebration you have in mind.",
      intro:
        "Wedding, birthday or private dinner: send us a few details and we will reply with a clear first direction.",
      primaryCta: "Write on WhatsApp",
      instagramCta: "View Instagram",
    },
    stickyWhatsApp: {
      label: "WhatsApp quote",
      ariaLabel: "Request a WhatsApp quote",
    },
    scrollStory: {
      title: "From vision to celebration",
      subtitle:
        "Every event begins with an intention. We turn it into styling, flavors, light — and lasting memories.",
      progressLabel: "Step",
      steps: [
        {
          number: "01",
          title: "Imagine the atmosphere",
          image: {
            src: productionImages.scrollStory.images[0],
            alt: "Marrakesh reception venue prepared for an elegant wedding",
          },
        },
        {
          number: "02",
          title: "Compose the details",
          image: {
            src: productionImages.scrollStory.images[1],
            alt: "Table details with flowers, candles, plates and textures",
          },
        },
        {
          number: "03",
          title: "Elevate the table",
          image: {
            src: productionImages.scrollStory.images[2],
            alt: "Refined catering detail on an event table",
          },
        },
        {
          number: "04",
          title: "Light the emotion",
          image: {
            src: productionImages.scrollStory.images[3],
            alt: "Night ambience with lanterns, candles and warm light",
          },
        },
        {
          number: "05",
          title: "Create the moment",
          image: {
            src: productionImages.scrollStory.images[4],
            alt: "Final celebration with illuminated wedding table in Marrakesh",
          },
        },
      ],
    },
  },
};
