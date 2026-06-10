export const defaultLanguage = "fr";

export const languages = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export const brand = {
  name: "Green Events Maroc",
  instagram: "https://www.instagram.com/greenevents_maroc/",
  instagramHandle: "@greenevents_maroc",
  phone: "+212 663 730 183",
  whatsapp: "+212663730183",
};

export const productionImages = {
  hero: {
    desktop: "/images/hero/hero-wedding-joy-desktop-v2.webp",
    mobile: "/images/hero/hero-wedding-joy-mobile-v2.webp",
    originalDesktop: "/images/hero/hero-desktop.webp",
    originalMobile: "/images/hero/hero-mobile.webp",
    video: "/videos/hero_section_video.mp4",
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
      eyebrow: "Mariages & événements privés · Marrakech",
      title: "Créateurs d’expériences sur mesure.",
      subtitle:
        "Traiteur & décorateur événementiel pour mariages, anniversaires et événements privés, pensés avec élégance, du décor à l’art de recevoir.",
      primaryCta: "Demander un devis",
      secondaryCta: "Voir les réalisations",
      menuLabel: "Ouvrir le menu",
      closeMenuLabel: "Fermer le menu",
      navigation: [
        { label: "Réalisations", href: "#realisations" },
        { label: "Services", href: "#services" },
        { label: "Méthode", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
      image: {
        desktopSrc: productionImages.hero.desktop,
        mobileSrc: productionImages.hero.mobile,
        alt: "Dîner de mariage joyeux à Marrakech avec invités, bougies, fleurs blanches et lanternes",
      },
      videoSrc: productionImages.hero.video,
      highlights: [
        "Mariages sur mesure",
        "Traiteur & décoration",
        "Événements privés",
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
      image: {
        src: productionImages.portfolio.nightAmbiance,
        alt: "Réception de nuit à Marrakech avec lumières chaudes et ambiance de célébration",
      },
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
    whyGreenEvents: {
      eyebrow: "Pourquoi Green Events",
      title:
        "Le goût du beau, la précision du service et la chaleur d’une vraie célébration.",
      intro:
        "Un événement réussi ne se limite pas à un décor. Il se ressent dans l’accueil, la table, la lumière, la cuisine et la sérénité de chaque moment.",
      image: {
        src: productionImages.portfolio.privateDinner,
        alt: "Dîner privé chaleureux à Marrakech avec table élégante et invités",
      },
      highlights: [
        {
          title: "Une vision unique",
          description:
            "Décoration, traiteur, fleurs et art de la table avancent dans la même direction.",
        },
        {
          title: "Une présence discrète",
          description:
            "L’équipe accompagne le rythme de la journée sans alourdir l’expérience des invités.",
        },
        {
          title: "Un sens du détail",
          description:
            "Les matières, les bougies, les assiettes et les saveurs créent une atmosphère cohérente.",
        },
        {
          title: "L’esprit de Marrakech",
          description:
            "La lumière, les jardins, les lanternes et l’hospitalité marocaine donnent au moment sa chaleur.",
        },
      ],
    },
    socialProof: {
      eyebrow: "Sur Instagram",
      title: "L’art de recevoir, en images.",
      intro:
        "Retrouvez nos tables, nos fleurs, nos détails traiteur et nos ambiances de nuit sur Instagram.",
      cta: "Voir Instagram",
      items: [
        {
          label: "Tables",
          image: productionImages.portfolio.weddingTable,
          alt: "Table de mariage dressée avec fleurs et bougies",
        },
        {
          label: "Détails",
          image: productionImages.portfolio.cateringDetail,
          alt: "Détail traiteur raffiné pour réception privée",
        },
        {
          label: "Lumière",
          image: productionImages.portfolio.nightAmbiance,
          alt: "Ambiance lumineuse de soirée à Marrakech",
        },
        {
          label: "Fleurs",
          image: productionImages.portfolio.floralCandles,
          alt: "Fleurs blanches et bougies sur table de réception",
        },
      ],
    },
    finalCta: {
      eyebrow: "Votre événement",
      title: "Parlons de la célébration que vous imaginez.",
      intro:
        "Mariage, anniversaire ou dîner privé: envoyez-nous quelques détails et nous vous répondrons avec une première direction claire.",
      primaryCta: "Écrire sur WhatsApp",
      instagramCta: "Voir Instagram",
      image: {
        src: productionImages.hero.mobile,
        alt: "Célébration de mariage joyeuse à Marrakech autour d’une table aux bougies",
      },
    },
    footer: {
      description:
        "Traiteur et décorateur événementiel à Marrakech pour mariages, anniversaires et événements privés pensés sur mesure.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      whatsappLabel: "Écrire sur WhatsApp",
      phoneLabel: "Téléphone",
      instagramLabel: "Instagram",
      legal: "Green Events Maroc. Mariages & événements privés à Marrakech.",
      links: [
        { label: "Réalisations", href: "#realisations" },
        { label: "Services", href: "#services" },
        { label: "Méthode", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
    },
    stickyWhatsApp: {
      label: "Devis WhatsApp",
      ariaLabel: "Demander un devis WhatsApp",
    },
    scrollStory: {
      title: "From vision to celebration",
      subtitle:
        "Chaque événement commence par une intention. Nous la transformons en décor, en saveurs, en lumière et en souvenirs.",
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
        "Catering and event decoration for weddings, birthdays, and private events, crafted with elegance from styling to hospitality.",
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
        alt: "Joyful wedding dinner in Marrakesh with guests, candles, white flowers and lanterns",
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
      image: {
        src: productionImages.portfolio.nightAmbiance,
        alt: "Night reception in Marrakesh with warm lights and celebration atmosphere",
      },
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
    whyGreenEvents: {
      eyebrow: "Why Green Events",
      title:
        "Taste, service precision, and the warmth of a true celebration.",
      intro:
        "A successful event is more than styling. It is felt through the welcome, the table, the light, the cuisine and the calm behind every moment.",
      image: {
        src: productionImages.portfolio.privateDinner,
        alt: "Warm private dinner in Marrakesh with elegant table and guests",
      },
      highlights: [
        {
          title: "One clear vision",
          description:
            "Decoration, catering, florals and table styling move in the same direction.",
        },
        {
          title: "A discreet presence",
          description:
            "The team supports the pace of the day without weighing down the guest experience.",
        },
        {
          title: "Attention to detail",
          description:
            "Materials, candles, plates and flavors create one coherent atmosphere.",
        },
        {
          title: "Marrakesh warmth",
          description:
            "Light, gardens, lanterns and Moroccan hospitality give the moment its feeling.",
        },
      ],
    },
    socialProof: {
      eyebrow: "On Instagram",
      title: "Hospitality, seen through the details.",
      intro:
        "Discover our tables, florals, catering details and evening atmospheres on Instagram.",
      cta: "View Instagram",
      items: [
        {
          label: "Tables",
          image: productionImages.portfolio.weddingTable,
          alt: "Wedding table set with flowers and candles",
        },
        {
          label: "Details",
          image: productionImages.portfolio.cateringDetail,
          alt: "Refined catering detail for a private reception",
        },
        {
          label: "Light",
          image: productionImages.portfolio.nightAmbiance,
          alt: "Evening light atmosphere in Marrakesh",
        },
        {
          label: "Flowers",
          image: productionImages.portfolio.floralCandles,
          alt: "White flowers and candles on a reception table",
        },
      ],
    },
    finalCta: {
      eyebrow: "Your event",
      title: "Let’s talk about the celebration you have in mind.",
      intro:
        "Wedding, birthday or private dinner: send us a few details and we will reply with a clear first direction.",
      primaryCta: "Write on WhatsApp",
      instagramCta: "View Instagram",
      image: {
        src: productionImages.hero.mobile,
        alt: "Joyful wedding celebration in Marrakesh around a candlelit table",
      },
    },
    footer: {
      description:
        "Catering and event decoration in Marrakesh for bespoke weddings, birthdays and private events.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      whatsappLabel: "Write on WhatsApp",
      phoneLabel: "Phone",
      instagramLabel: "Instagram",
      legal: "Green Events Maroc. Marrakesh Wedding & Private Events.",
      links: [
        { label: "Work", href: "#realisations" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
    },
    stickyWhatsApp: {
      label: "WhatsApp quote",
      ariaLabel: "Request a WhatsApp quote",
    },
    scrollStory: {
      title: "From vision to celebration",
      subtitle:
        "Every event begins with an intention. We turn it into styling, flavors, light and lasting memories.",
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
