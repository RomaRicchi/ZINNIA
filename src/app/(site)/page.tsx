import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Hero />
        <Services />
        <Technologies />
        <Portfolio />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
