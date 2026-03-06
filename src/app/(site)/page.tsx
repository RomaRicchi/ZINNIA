'use client';

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ZinniaInfo from "@/components/sections/ZinniaInfo";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";
import { SectionProvider } from "@/components/layout/SectionProvider";

export default function HomePage() {
  return (
    <SectionProvider>
      <Header />
      <main className="flex flex-col w-full flex-1">
        <Hero />
        <ZinniaInfo />
        <Services />
        <Technologies />
        <Stats />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </SectionProvider>
  );
}
