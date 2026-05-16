import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ArchitectureFlow from "@/components/sections/ArchitectureFlow";
import RepositoryValidation from "@/components/sections/RepositoryValidation";
import WhySection from "@/components/sections/WhySection";
import CliShowcase from "@/components/sections/CliShowcase";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <hr className="section-divider" />
        <FeaturesSection />
        <hr className="section-divider" />
        <ArchitectureFlow />
        <hr className="section-divider" />
        <RepositoryValidation />
        <hr className="section-divider" />
        <WhySection />
        <hr className="section-divider" />
        <CliShowcase />
      </main>

      <Footer />
    </>
  );
}