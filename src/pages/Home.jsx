import Navbar from "../components/layout/Navbar";

import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";

import Stats from "../components/sections/Stats";

import BMISection from "../components/sections/BMISection";

import WorkoutPlans from "../components/sections/WorkoutPlans";

import Testimonials from "../components/sections/Testimonials";

import Pricing from "../components/sections/Pricing";

import { useTheme } from "../context/ThemeContext";

function Home() {

  const { darkMode } = useTheme();

  return (

    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen transition-all duration-300"
          : "bg-white text-black min-h-screen transition-all duration-300"
      }
    >

      <Navbar />

      <Hero />

      <Stats />

      <BMISection />

      <WorkoutPlans />

      <Testimonials />

      <Pricing />

      <Footer />

    </div>
  );
}

export default Home;