import DomainCategories from "@/sections/firstSection/DomainCategories";
import FAQ from "@/sections/firstSection/Faqs";
import HeroSection from "@/sections/firstSection/HeroSection";
import TrendingDomains from "@/sections/firstSection/TrendingDomains";
import StepCards from "@/sections/firstSection/stepCard";
import TestimonialSlider from "@/sections/firstSection/Testimonials";
import TrustSection from "@/sections/firstSection/TrustSection";
import WhyChooseUs from "@/sections/firstSection/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StepCards />
      <WhyChooseUs />
      <TrendingDomains />
      <DomainCategories />
      <TestimonialSlider />
      <TrustSection />
      <FAQ />
    </main>
  );
}
