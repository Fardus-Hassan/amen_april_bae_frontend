import { Banner } from "@/components/landing/Banner";
import { StatsSection } from "@/components/landing/StatsSection";
import { FamilyTreeSection } from "@/components/landing/FamilyTreeSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";

export default function LandingPage() {
  return (
    <>
      <Banner />
      <StatsSection />
      <FeaturesSection />
      <JourneySection />
      <FamilyTreeSection />
    </>
  );
}
