import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Supports navigation like "/#services" from other pages.
    const hash = location.hash || window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (!element) return;

    // Wait a tick for sections to mount/layout.
    const t = window.setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    return () => window.clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
