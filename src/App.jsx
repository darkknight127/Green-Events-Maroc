import { useState } from "react";
import BrandPromiseSection from "./components/sections/BrandPromiseSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import FooterSection from "./components/sections/FooterSection";
import HeroSection from "./components/sections/HeroSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ProcessSection from "./components/sections/ProcessSection";
import ScrollStorySection from "./components/sections/ScrollStorySection";
import ServicesSection from "./components/sections/ServicesSection";
import SocialProofSection from "./components/sections/SocialProofSection";
import StickyWhatsAppButton from "./components/sections/StickyWhatsAppButton";
import WhyGreenEventsSection from "./components/sections/WhyGreenEventsSection";
import { brand, defaultLanguage, siteContent } from "./data/siteContent";

function App() {
  const [language, setLanguage] = useState(defaultLanguage);
  const content = siteContent[language];

  return (
    <main
      className="min-h-screen bg-[var(--color-page)] text-[var(--color-ink)]"
      id="top"
      lang={language}
    >
      <HeroSection
        brand={brand}
        content={content.hero}
        language={language}
        languageLabel={content.languageLabel}
        onLanguageChange={setLanguage}
        whatsappMessage={content.whatsappMessage}
      />
      <BrandPromiseSection content={content.brandPromise} />
      <ScrollStorySection content={content.scrollStory} />
      <ServicesSection
        header={content.servicesHeader}
        services={content.services}
      />
      <PortfolioSection content={content.portfolio} />
      <ProcessSection header={content.processHeader} process={content.process} />
      <WhyGreenEventsSection content={content.whyGreenEvents} />
      <SocialProofSection brand={brand} content={content.socialProof} />
      <FinalCtaSection
        brand={brand}
        content={content.finalCta}
        whatsappMessage={content.whatsappMessage}
      />
      <FooterSection
        brand={brand}
        content={content.footer}
        whatsappMessage={content.whatsappMessage}
      />
      <StickyWhatsAppButton
        brand={brand}
        content={content.stickyWhatsApp}
        whatsappMessage={content.whatsappMessage}
      />
    </main>
  );
}

export default App;
