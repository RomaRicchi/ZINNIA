'use client';

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ZinniaInfo from "@/components/sections/ZinniaInfo";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";
import { SectionProvider, useSection } from "@/components/layout/SectionProvider";

function ActiveSection() {
  const { activeSection } = useSection();

  switch (activeSection) {
    case 'hero':
      return <Hero />;
    case 'zinnia':
      return <ZinniaInfo />;
    case 'services':
      return <Services />;
    case 'technologies':
      return <Technologies />;
    case 'portfolio':
      return <Portfolio />;
    case 'about':
      return <About />;
    case 'contact':
      return <ContactCTA />;
    default:
      return <Hero />;
  }
}

export default function HomePage() {
  return (
    <SectionProvider>
      <Header />
      <main className="flex flex-col w-full flex-1 overflow-y-auto">
        <ActiveSection />
      </main>
      <Footer />
    </SectionProvider>
  );
}
