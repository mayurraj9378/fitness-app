import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import BMISection from "../components/BMISection";
import WorkoutPlans from "../components/WorkoutPlans";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

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