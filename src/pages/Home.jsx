import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import BMISection from "../components/sections/BMISection";
import WorkoutPlans from "../components/sections/WorkoutPlans";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";

function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
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