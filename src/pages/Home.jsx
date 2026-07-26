import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import BMISection from "../components/sections/BMISection";
import HowItWorks from "../components/sections/HowItWorks";
import CTASection from "../components/sections/CTASection";

import { useTheme } from "../context/ThemeContext";

const SECTION_DIVIDER = (darkMode) => `
  absolute inset-x-0 top-0 h-px
  ${darkMode
    ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
    : "bg-gradient-to-r from-transparent via-gray-300 to-transparent"}
`;

function Home() {
  const { darkMode } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-black via-zinc-950 to-black text-white"
          : "bg-gradient-to-b from-white via-gray-50 to-white text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] transition-colors duration-500"
        style={{ background: darkMode ? "rgba(239,68,68,0.10)" : "rgba(239,68,68,0.06)" }}
      />
      <div className="pointer-events-none absolute top-[35%] -left-40 w-[350px] h-[350px] rounded-full blur-[120px] transition-colors duration-500"
        style={{ background: darkMode ? "rgba(220,38,38,0.10)" : "rgba(220,38,38,0.05)" }}
      />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full blur-[150px] transition-colors duration-500"
        style={{ background: darkMode ? "rgba(239,68,68,0.10)" : "rgba(239,68,68,0.05)" }}
      />

      {/* Navbar */}
      <Navbar />

      <main className="relative z-10">

        {/* Hero */}
        <section id="home" className="min-h-[90vh] flex items-center">
          <Hero />
        </section>

        {/* Features */}
        <section id="features" className="relative py-16">
          <div className={SECTION_DIVIDER(darkMode)} />
          <Features />
        </section>

        {/* BMI Calculator */}
        <section id="bmi" className="relative py-16">
          <div className={SECTION_DIVIDER(darkMode)} />
          <BMISection />
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="relative py-16">
          <div className={SECTION_DIVIDER(darkMode)} />
          <HowItWorks />
        </section>

        {/* CTA */}
        <section id="cta" className="relative py-20">
          <div className={SECTION_DIVIDER(darkMode)} />
          <CTASection />
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        } ${
          darkMode
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        <HiArrowUp className="text-xl" />
      </button>
    </div>
  );
}

export default Home;