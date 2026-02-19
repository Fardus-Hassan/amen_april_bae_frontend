import { Navbar } from "@/components/landing/Navbar";
import { Banner } from "@/components/landing/Banner";
import { StatsSection } from "@/components/landing/StatsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-landing-bg">
      <Navbar />
      <Banner />
      <StatsSection />
      <FeaturesSection />
    </div>
  );
}
