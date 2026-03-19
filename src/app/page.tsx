// Server Component — SSR enabled for SEO indexing

import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GoogleSection from "@/components/GoogleSection";
import AutomationSection from "@/components/AutomationSection";

import PortfolioShowcase from "@/components/PortfolioShowcase";

import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Synapse Studio",
    "image": "https://synapsestudio.pro/screenshot.webp",
    "@id": "https://synapsestudio.pro",
    "url": "https://synapsestudio.pro",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL"
    },
    "description": "Tworzę szybkie, nowoczesne strony internetowe i sklepy e-commerce, które zdobywają klientów. Sprawdź portfolio i zamów darmową wycenę.",
    "priceRange": "$$"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StickyNav />
      <HeroSection />
      <ServicesSection />
      <GoogleSection />
      <AutomationSection />
      <ProcessSection />

      <PortfolioShowcase />

      <PricingSection />
      <FAQSection />
      <ContactSection />

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Synapse Studio. Wszelkie prawa zastrzeżone.</p>
        <div style={{ marginTop: '0.5rem' }}>
          <a href="https://synapsestudio.pro">synapsestudio.pro</a>
        </div>
      </footer>
    </main>
  );
}

