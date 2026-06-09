import { useState } from "react";
import BrandPromiseSection from "./components/sections/BrandPromiseSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import HeroSection from "./components/sections/HeroSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ProcessSection from "./components/sections/ProcessSection";
import ScrollStorySection from "./components/sections/ScrollStorySection";
import ServicesSection from "./components/sections/ServicesSection";
import StickyWhatsAppButton from "./components/sections/StickyWhatsAppButton";
import { brand, defaultLanguage, siteContent } from "./data/siteContent";

function App() {
  const [language, setLanguage] = useState(defaultLanguage);
  const content = siteContent[language];

  return (
    <main
      className="min-h-screen bg-[#070605] text-[#F7F1E7]"
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
      <FinalCtaSection
        brand={brand}
        content={content.finalCta}
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
