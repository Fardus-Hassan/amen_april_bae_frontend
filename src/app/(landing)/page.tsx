import { Navbar } from "@/components/landing/Navbar";
import { Banner } from "@/components/landing/Banner";
import { StatsSection } from "@/components/landing/StatsSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-landing-bg">
      <Navbar />
      <Banner />
      <StatsSection />
    </div>
  );
}
