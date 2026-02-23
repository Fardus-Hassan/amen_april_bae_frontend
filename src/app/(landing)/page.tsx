import { Banner } from "@/components/landing/Banner";
import { StatsSection } from "@/components/landing/StatsSection";
import { FamilyTreeSection } from "@/components/landing/FamilyTreeSection";
import { StoryGlimpseSection } from "@/components/landing/StoryGlimpseSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HeritageExploreSection } from "@/components/landing/HeritageExploreSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { PrivacySection } from "@/components/landing/PrivacySection";

export default function LandingPage() {
  return (
    <>
      <Banner />
      <StatsSection />
      <FeaturesSection />
      <JourneySection />
      <FamilyTreeSection />
      <StoryGlimpseSection />
      <HeritageExploreSection />
      <PricingSection />
      <TestimonialSection />
      <PrivacySection />
    </>
  );
}
