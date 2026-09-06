export const defaultLanguage = "fr";

export const languages = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export const brand = {
  name: "Green Events Maroc",
  logo: "/images/brand/green-events-monogram.png",
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
      "Bonjour Green Events Maroc, je souhaite demander un devis pour un événement à Marrakech. Voici les premières informations: date, type d’événement, nombre d’invités, lieu.",
    hero: {
      navLabel: "Mariages & événements privés",
      eyebrow: "Organisation de mariages & événements à Marrakech",
      title: "Créateurs d’expériences sur mesure à Marrakech.",
      subtitle:
        "Green Events Maroc imagine, planifie et coordonne mariages, fiançailles, événements privés et réceptions d’entreprise. Traiteur, décoration, art de table et gestion du jour J, réunis dans une expérience fluide.",
      primaryCta: "Demander un devis sur WhatsApp",
      secondaryCta: "Voir les réalisations",
      menuLabel: "Ouvrir le menu",
      closeMenuLabel: "Fermer le menu",
      navigation: [
        { label: "Services", href: "/#services" },
        { label: "Réalisations", href: "/#realisations" },
        { label: "Méthode", href: "/#process" },
        { label: "Témoignages", href: "/testimonials" },
        { label: "Contact", href: "/#contact" },
      ],
      image: {
        desktopSrc: productionImages.hero.desktop,
        mobileSrc: productionImages.hero.mobile,
        alt: "Dîner de mariage joyeux à Marrakech avec invités, bougies, fleurs blanches et lanternes",
      },
      videoSrc: productionImages.hero.video,
      highlightsLabel: "Domaines d’expertise",
      highlights: [
        "Organisation de mariages",
        "Traiteur & art de table",
        "Décoration événementielle",
      ],
    },
    brandPromise: {
      eyebrow: "Une maison événementielle à Marrakech",
      title:
        "Du choix du lieu à l’élégance de chaque table, jusqu’à la lumière qui sublime l’instant, chaque détail est soigneusement imaginé pour créer une expérience harmonieuse, raffinée et inoubliable.",
      introPrefix: "Chez ",
      introBrand: "Green Events Maroc",
      introSuffix:
        ", nous croyons que les plus beaux événements naissent de l’harmonie entre chaque détail.",
      introBody:
        "Du choix du lieu à la décoration, de la mise en scène des tables à l’éclairage, nous imaginons chaque élément avec soin pour créer une atmosphère élégante, authentique et parfaitement adaptée à votre vision.",
      introGoal:
        "Notre objectif : transformer chaque occasion en un moment unique, mémorable et à votre image.",
      statement:
        "Planification, traiteur et décoration, pensés comme une seule expérience.",
      image: {
        src: productionImages.portfolio.floralCandles,
        alt: "Table de réception avec bougies, fleurs et lumière chaude",
      },
      pillars: [
        {
          title: "Planification complète",
          description:
            "Du premier échange à la coordination du jour J, chaque étape est préparée avec calme et précision.",
        },
        {
          title: "Traiteur & art de table",
          description:
            "Menus, service, dressage et rythme de table sont pensés pour accompagner naturellement la célébration.",
        },
        {
          title: "Décoration & mise en scène",
          description:
            "Fleurs, bougies, matières, lumière et mobilier composent une atmosphère fidèle à votre événement.",
        },
      ],
    },
    servicesHeader: {
      eyebrow: "Savoir-faire",
      title: "L’art de créer des événements qui vous ressemblent",
      intro:
        "Un accompagnement complet pour mariages, fiançailles, anniversaires, baptêmes, soirées privées, événements d’entreprise et célébrations du Nouvel An.",
    },
    services: [
      {
        label: "Mariage",
        title: "Wedding Planner",
        description:
          "Parce que chaque mariage est unique, nous concevons des célébrations sur mesure, de la conception à la coordination du jour J. Nous prenons en charge chaque étape afin que vous puissiez vivre pleinement votre mariage, sans vous soucier de l’organisation.",
        image: {
          src: productionImages.portfolio.weddingTable,
          alt: "Réception de mariage en extérieur avec invités et table fleurie",
        },
      },
      {
        label: "Gastronomie",
        title: "Traiteur & Gastronomie",
        description:
          "Une expérience réussie passe aussi par les sens. Notre service traiteur propose une cuisine raffinée, généreuse et adaptée à chaque occasion, avec une attention particulière portée à la présentation, à la qualité des produits et au service.",
        image: {
          src: productionImages.portfolio.cateringDetail,
          alt: "Bouchées raffinées présentées parmi les bougies et les fleurs",
        },
      },
      {
        label: "Décoration",
        title: "Décoration & Mise en scène",
        description:
          "Nous transformons chaque espace en un univers qui vous ressemble. Décoration florale, mobilier, art de la table, éclairage, scénographie et détails personnalisés : nous créons des atmosphères harmonieuses et élégantes, pensées autour de votre thème et de votre identité.",
        image: {
          src: productionImages.portfolio.floralCandles,
          alt: "Décoration florale et bougies composant une table élégante",
        },
      },
      {
        label: "Organisation",
        title: "Event Planner – Organisation sur mesure",
        description:
          "Séminaires, célébrations, lancements, soirées privées ou événements professionnels : nous concevons des événements sur mesure en fonction de vos objectifs, de votre style et de votre budget. Notre équipe coordonne chaque aspect pour garantir une expérience fluide et parfaitement maîtrisée.",
        image: {
          src: productionImages.portfolio.nightAmbiance,
          alt: "Événement nocturne organisé dans un jardin illuminé à Marrakech",
        },
      },
      {
        label: "Privé",
        title: "Private Events",
        description:
          "Anniversaires, dîners privés, célébrations familiales, demandes en mariage ou occasions particulières : nous créons des événements intimistes et exclusifs, avec une attention particulière portée à l’expérience de vos invités et à chaque détail qui rendra votre moment inoubliable.",
        image: {
          src: productionImages.portfolio.privateDinner,
          alt: "Dîner privé aux chandelles dans un jardin à Marrakech",
        },
      },
    ],
    portfolio: {
      eyebrow: "Réalisations",
      title: "Des mariages et événements pensés dans les moindres détails.",
      intro:
        "Un aperçu de l’univers Green Events Maroc: tables, lumière, fleurs, cuisine et lieux choisis pour créer une présence mémorable.",
      controls: {
        previous: "Réalisation précédente",
        next: "Réalisation suivante",
        choose: "Voir cette réalisation",
      },
      items: [
        {
          label: "Mariage",
          title: "Mariage en plein air",
          quote:
            "Une table longue, des fleurs blanches et une lumière douce pour un mariage à Marrakech pensé autour de l’accueil.",
          image: {
            src: productionImages.portfolio.weddingTable,
            alt: "Table de mariage en extérieur à Marrakech",
          },
        },
        {
          label: "Dîner privé",
          title: "Dîner aux chandelles",
          quote:
            "Un moment plus intime, porté par les bougies, la table et un service discret.",
          image: {
            src: productionImages.portfolio.privateDinner,
            alt: "Longue table de dîner privé éclairée aux bougies",
          },
        },
        {
          label: "Décoration",
          title: "Décoration florale",
          quote:
            "Fleurs, matières et lumière donnent le ton avant même l’arrivée des invités.",
          image: {
            src: productionImages.portfolio.floralCandles,
            alt: "Décoration florale avec bougies et lanternes",
          },
        },
        {
          label: "Traiteur",
          title: "Détail traiteur",
          quote:
            "La cuisine s’intègre à la scène: présentation, rythme et service restent alignés.",
          image: {
            src: productionImages.portfolio.cateringDetail,
            alt: "Bouchées traiteur présentées sur une table élégante",
          },
        },
        {
          label: "Anniversaire",
          title: "Anniversaire privé",
          quote:
            "Une célébration familiale avec le même soin qu’un mariage: table, gâteau, décor et ambiance.",
          image: {
            src: productionImages.portfolio.birthdaySetup,
            alt: "Table d'anniversaire raffinée avec gâteau et fleurs",
          },
        },
        {
          label: "Ambiance",
          title: "Ambiance de nuit",
          quote:
            "Lanternes, bougies et chaleur du soir créent une atmosphère mémorable.",
          image: {
            src: productionImages.portfolio.nightAmbiance,
            alt: "Lieu de réception illuminé le soir à Marrakech",
          },
        },
      ],
    },
    processHeader: {
      eyebrow: "Méthode",
      title: "De votre première idée au jour de l’événement.",
      intro:
        "Nous clarifions vos envies, votre lieu, vos invités et votre budget, puis nous coordonnons les équipes pour une célébration fluide.",
      image: {
        src: productionImages.portfolio.nightAmbiance,
        alt: "Réception de nuit à Marrakech avec lumières chaudes et ambiance de célébration",
      },
    },
    process: [
      {
        step: "01",
        title: "Échange",
        description:
          "Nous comprenons votre événement, vos priorités, vos invités et votre niveau d’accompagnement souhaité.",
      },
      {
        step: "02",
        title: "Direction",
        description:
          "Nous construisons une proposition claire: planification, décoration, traiteur, table, lumière et organisation.",
      },
      {
        step: "03",
        title: "Préparation",
        description:
          "Les prestataires, les détails et le déroulé sont alignés avant l’événement.",
      },
      {
        step: "04",
        title: "Jour J",
        description:
          "L’équipe coordonne la mise en place, le service et le rythme pour que vous puissiez profiter du moment.",
      },
    ],
    whyGreenEvents: {
      eyebrow: "Pourquoi Green Events",
      title:
        "Pourquoi confier votre événement à Green Events Maroc?",
      intro:
        "Parce qu’un événement réussi demande plus qu’un beau décor: il faut une vision, une organisation claire, une table soignée et une équipe présente au bon moment.",
      image: {
        src: productionImages.portfolio.privateDinner,
        alt: "Dîner privé chaleureux à Marrakech avec table élégante et invités",
      },
      highlights: [
        {
          title: "Basés à Marrakech",
          description:
            "Une connaissance du terrain, des lieux, des rythmes et des attentes des événements au Maroc.",
        },
        {
          title: "Clients internationaux",
          description:
            "Un accompagnement clair pour les couples, familles et entreprises qui organisent leur événement à distance.",
        },
        {
          title: "Une seule direction",
          description:
            "Planning, traiteur, décoration et art de table avancent ensemble.",
        },
        {
          title: "Des événements variés",
          description:
            "Mariages, fiançailles, anniversaires, baptêmes, soirées privées, Nouvel An et réceptions d’entreprise.",
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
      title: "Parlons de votre événement à Marrakech.",
      intro:
        "Envoyez-nous la date, le type d’événement, le nombre d’invités et le lieu si vous l’avez déjà. Nous vous répondrons avec une première direction claire.",
      primaryCta: "Demander mon devis sur WhatsApp",
      instagramCta: "Voir l’univers Instagram",
      image: {
        src: productionImages.hero.mobile,
        alt: "Célébration de mariage joyeuse à Marrakech autour d’une table aux bougies",
      },
    },
    footer: {
      description:
        "Organisateur d’événements et traiteur à Marrakech, Green Events Maroc crée des mariages, événements privés et réceptions d’entreprise sur mesure, avec décoration, art de table et coordination complète.",
      location: "Targa, Rue AL Argane, Marrakech 40000",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      whatsappLabel: "Demander un devis sur WhatsApp",
      phoneLabel: "Téléphone",
      instagramLabel: "Instagram",
      legal: "Green Events Maroc. Organisation de mariages, traiteur et événements privés à Marrakech.",
      links: [
        { label: "Services", href: "/#services" },
        { label: "Réalisations", href: "/#realisations" },
        { label: "Méthode", href: "/#process" },
        { label: "Témoignages", href: "/testimonials" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    testimonialsPage: {
      eyebrow: "Témoignages",
      title: "Ils en parlent mieux que nous.",
      intro:
        "Derrière chaque événement, il y a une histoire, une émotion et des souvenirs qui restent. Retrouvez bientôt ici les témoignages des clients qui ont confié leurs moments précieux à Green Events Maroc.",
      backLabel: "Retour à l’accueil",
    },
    stickyWhatsApp: {
      label: "Devis événement",
      ariaLabel: "Demander un devis événement sur WhatsApp",
    },
    scrollStory: {
      title: "De l’idée à la célébration",
      subtitle:
        "Chaque événement commence par une intention. Nous la transformons en lieu, en table, en saveurs, en lumière et en souvenirs.",
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
          title: "Composer la scénographie",
          image: {
            src: productionImages.scrollStory.images[1],
            alt: "Détails de table avec fleurs, bougies, assiettes et textures",
          },
        },
        {
          number: "03",
          title: "Dresser la table",
          image: {
            src: productionImages.scrollStory.images[2],
            alt: "Détail traiteur raffiné sur une table événementielle",
          },
        },
        {
          number: "04",
          title: "Régler le service",
          image: {
            src: productionImages.scrollStory.images[3],
            alt: "Ambiance de nuit avec lanternes, bougies et lumière chaude",
          },
        },
        {
          number: "05",
          title: "Vivre le moment",
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
      "Hello Green Events Maroc, I would like to request a quote for an event in Marrakech. First details: date, event type, guest count, venue.",
    hero: {
      navLabel: "Weddings & private events",
      eyebrow: "Wedding planner & event planner in Marrakech",
      title: "Tailor-made event experiences in Marrakech.",
      subtitle:
        "Green Events Maroc designs, plans, and manages weddings, engagements, private events, and corporate celebrations. Catering, decoration, table styling, and event-day coordination come together in one refined experience.",
      primaryCta: "Request a WhatsApp quote",
      secondaryCta: "View our work",
      menuLabel: "Open menu",
      closeMenuLabel: "Close menu",
      navigation: [
        { label: "Services", href: "/#services" },
        { label: "Work", href: "/#realisations" },
        { label: "Process", href: "/#process" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/#contact" },
      ],
      image: {
        desktopSrc: productionImages.hero.desktop,
        mobileSrc: productionImages.hero.mobile,
        alt: "Joyful wedding dinner in Marrakech with guests, candles, white flowers and lanterns",
      },
      videoSrc: productionImages.hero.video,
      highlightsLabel: "Areas of expertise",
      highlights: [
        "Wedding planning",
        "Catering & table styling",
        "Event decoration",
      ],
    },
    brandPromise: {
      eyebrow: "A Marrakech event house",
      title:
        "From choosing the venue to the elegance of each table, and the lighting that enhances the moment, every detail is carefully imagined to create a harmonious, refined, and unforgettable experience.",
      introPrefix: "At ",
      introBrand: "Green Events Maroc",
      introSuffix:
        ", we believe the most beautiful events are born from harmony in every detail.",
      introBody:
        "From the choice of venue to the decoration, from table styling to lighting, we imagine every element with care to create an elegant, authentic atmosphere perfectly aligned with your vision.",
      introGoal:
        "Our goal: to turn every occasion into a unique, memorable moment that feels entirely your own.",
      statement:
        "Planning, catering, and decoration designed as one experience.",
      image: {
        src: productionImages.portfolio.floralCandles,
        alt: "Reception table with candles, flowers and warm light",
      },
      pillars: [
        {
          title: "Complete planning",
          description:
            "From the first conversation to event-day coordination, every step is prepared with calm precision.",
        },
        {
          title: "Catering & table styling",
          description:
            "Menus, service, table setting, and pacing are designed around the rhythm of your celebration.",
        },
        {
          title: "Decoration & staging",
          description:
            "Florals, candles, materials, light, and furniture create an atmosphere true to your event.",
        },
      ],
    },
    servicesHeader: {
      eyebrow: "Expertise",
      title: "The art of creating events that feel like you",
      intro:
        "Complete support for weddings, engagements, birthdays, baptisms, private dinners, New Year celebrations, corporate events, and destination weddings in Morocco.",
    },
    services: [
      {
        label: "Wedding",
        title: "Wedding Planner",
        description:
          "Because every wedding is unique, we design tailor-made celebrations from the first concept through to coordination on the wedding day. We manage every stage so you can experience your wedding fully, without worrying about the organisation.",
        image: {
          src: productionImages.portfolio.weddingTable,
          alt: "Outdoor wedding reception with guests and a flower-filled table",
        },
      },
      {
        label: "Gastronomy",
        title: "Catering & Gastronomy",
        description:
          "A successful experience also speaks to the senses. Our catering service offers refined, generous cuisine tailored to every occasion, with particular attention to presentation, product quality, and service.",
        image: {
          src: productionImages.portfolio.cateringDetail,
          alt: "Refined bites presented among candles and flowers",
        },
      },
      {
        label: "Decoration",
        title: "Decoration & Styling",
        description:
          "We transform every space into a world that feels like you. Floral design, furniture, table styling, lighting, scenography, and personalised details come together in harmonious, refined settings shaped around your theme and identity.",
        image: {
          src: productionImages.portfolio.floralCandles,
          alt: "Floral decoration and candles arranged across an elegant table",
        },
      },
      {
        label: "Planning",
        title: "Event Planner – Tailor-made Organisation",
        description:
          "Seminars, celebrations, launches, private evenings, and professional events are designed around your objectives, style, and budget. Our team coordinates every aspect to ensure a fluid and carefully managed experience.",
        image: {
          src: productionImages.portfolio.nightAmbiance,
          alt: "Night-time event arranged in an illuminated Marrakech garden",
        },
      },
      {
        label: "Private",
        title: "Private Events",
        description:
          "Birthdays, private dinners, family celebrations, marriage proposals, and special occasions become intimate, exclusive events with careful attention to your guests’ experience and every detail that makes the moment unforgettable.",
        image: {
          src: productionImages.portfolio.privateDinner,
          alt: "Candlelit private dinner in a Marrakech garden",
        },
      },
    ],
    portfolio: {
      eyebrow: "Portfolio",
      title: "Weddings and events shaped through every detail.",
      intro:
        "A glimpse into Green Events Maroc: tables, light, flowers, cuisine and venues selected to create a memorable presence.",
      controls: {
        previous: "Previous realization",
        next: "Next realization",
        choose: "View this realization",
      },
      items: [
        {
          label: "Wedding",
          title: "Outdoor wedding",
          quote:
            "A long table, white flowers, and soft light for a Marrakech wedding designed around hospitality.",
          image: {
            src: productionImages.portfolio.weddingTable,
            alt: "Outdoor wedding table in Marrakech",
          },
        },
        {
          label: "Private dinner",
          title: "Candlelit dinner",
          quote:
            "A more intimate moment, shaped by candles, table setting, and discreet service.",
          image: {
            src: productionImages.portfolio.privateDinner,
            alt: "Long private dinner table lit by candles",
          },
        },
        {
          label: "Decoration",
          title: "Floral decoration",
          quote:
            "Flowers, materials, and light set the tone before guests arrive.",
          image: {
            src: productionImages.portfolio.floralCandles,
            alt: "Floral decoration with candles and lanterns",
          },
        },
        {
          label: "Catering",
          title: "Catering detail",
          quote:
            "Cuisine becomes part of the scene: presentation, pacing, and service stay aligned.",
          image: {
            src: productionImages.portfolio.cateringDetail,
            alt: "Catering bites presented on an elegant table",
          },
        },
        {
          label: "Birthday",
          title: "Private birthday",
          quote:
            "A family celebration with the same care as a wedding: table, cake, decor, and ambience.",
          image: {
            src: productionImages.portfolio.birthdaySetup,
            alt: "Refined birthday table with cake and flowers",
          },
        },
        {
          label: "Ambience",
          title: "Night ambience",
          quote:
            "Lanterns, candles, and warm evening air create a memorable atmosphere.",
          image: {
            src: productionImages.portfolio.nightAmbiance,
            alt: "Evening reception venue illuminated in Marrakech",
          },
        },
      ],
    },
    processHeader: {
      eyebrow: "Method",
      title: "From your first idea to event day.",
      intro:
        "We clarify your vision, venue, guests, and priorities, then coordinate the teams so the celebration feels fluid.",
      image: {
        src: productionImages.portfolio.nightAmbiance,
        alt: "Night reception in Marrakech with warm lights and celebration atmosphere",
      },
    },
    process: [
      {
        step: "01",
        title: "Conversation",
        description:
          "We understand your event, priorities, guests, and level of support needed.",
      },
      {
        step: "02",
        title: "Direction",
        description:
          "We build a clear proposal: planning, decoration, catering, table styling, lighting, and organization.",
      },
      {
        step: "03",
        title: "Preparation",
        description:
          "Suppliers, details, and timing are aligned before the event.",
      },
      {
        step: "04",
        title: "Event day",
        description:
          "The team coordinates setup, service, and flow so you can enjoy the moment.",
      },
    ],
    whyGreenEvents: {
      eyebrow: "Why Green Events",
      title:
        "Why choose Green Events Maroc for your event?",
      intro:
        "A successful event needs more than beautiful styling. It needs a clear vision, calm organization, a thoughtful table, and a team present at the right moments.",
      image: {
        src: productionImages.portfolio.privateDinner,
        alt: "Warm private dinner in Marrakech with elegant table and guests",
      },
      highlights: [
        {
          title: "Based in Marrakech",
          description:
            "Local knowledge of venues, timing, suppliers, and event expectations in Morocco.",
        },
        {
          title: "International clients",
          description:
            "Clear support for couples, families, and companies planning their event from abroad.",
        },
        {
          title: "One direction",
          description:
            "Planning, catering, decoration, and table styling move together.",
        },
        {
          title: "Many event formats",
          description:
            "Weddings, engagements, birthdays, baptisms, private parties, New Year events, and corporate receptions.",
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
          alt: "Evening light atmosphere in Marrakech",
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
      title: "Tell us about your event in Marrakech.",
      intro:
        "Send us the date, event type, guest count, and venue if you already have one. We will reply with a clear first direction.",
      primaryCta: "Request my WhatsApp quote",
      instagramCta: "View Instagram",
      image: {
        src: productionImages.hero.mobile,
        alt: "Joyful wedding celebration in Marrakech around a candlelit table",
      },
    },
    footer: {
      description:
        "Event planner and caterer in Marrakech, Green Events Maroc creates tailor-made weddings, private events, and corporate receptions with decoration, table styling, and full coordination.",
      location: "Targa, Rue AL Argane, Marrakech 40000",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      whatsappLabel: "Request a WhatsApp quote",
      phoneLabel: "Phone",
      instagramLabel: "Instagram",
      legal: "Green Events Maroc. Wedding planning, catering, and private events in Marrakech.",
      links: [
        { label: "Services", href: "/#services" },
        { label: "Work", href: "/#realisations" },
        { label: "Process", href: "/#process" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    testimonialsPage: {
      eyebrow: "Testimonials",
      title: "Their words tell the story best.",
      intro:
        "Every event carries a story, an emotion and memories that last. This page will soon bring together the words of clients who entrusted their most meaningful occasions to Green Events Maroc.",
      backLabel: "Return home",
    },
    stickyWhatsApp: {
      label: "Event quote",
      ariaLabel: "Request an event quote on WhatsApp",
    },
    scrollStory: {
      title: "From vision to celebration",
      subtitle:
        "Every event begins with an intention. We turn it into a venue, a table, flavors, light and lasting memories.",
      progressLabel: "Step",
      steps: [
        {
          number: "01",
          title: "Imagine the atmosphere",
          image: {
            src: productionImages.scrollStory.images[0],
            alt: "Marrakech reception venue prepared for an elegant wedding",
          },
        },
        {
          number: "02",
          title: "Compose the styling",
          image: {
            src: productionImages.scrollStory.images[1],
            alt: "Table details with flowers, candles, plates and textures",
          },
        },
        {
          number: "03",
          title: "Set the table",
          image: {
            src: productionImages.scrollStory.images[2],
            alt: "Refined catering detail on an event table",
          },
        },
        {
          number: "04",
          title: "Shape the service",
          image: {
            src: productionImages.scrollStory.images[3],
            alt: "Night ambience with lanterns, candles and warm light",
          },
        },
        {
          number: "05",
          title: "Live the moment",
          image: {
            src: productionImages.scrollStory.images[4],
            alt: "Final celebration with illuminated wedding table in Marrakech",
          },
        },
      ],
    },
  },
};
