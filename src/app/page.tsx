import React from "react";
import HomeHero from "@/components/home/HomeHero";
import BrandPhilosophy from "@/components/home/BrandPhilosophy";
import HomeServices from "@/components/home/HomeServices";
import FeaturedSpecialist from "@/components/home/FeaturedSpecialist";
import CareJourney from "@/components/home/CareJourney";
import WhySakina from "@/components/home/WhySakina";
import HomeArticles from "@/components/home/HomeArticles";
import HomeFAQ from "@/components/home/HomeFAQ";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Brand Philosophy & Trust */}
      <BrandPhilosophy />

      {/* 3. Services Preview */}
      <HomeServices />

      {/* 4. Featured Specialist Spotlight */}
      <FeaturedSpecialist />

      {/* 5. The Care Journey Progression */}
      <CareJourney />

      {/* 6. Why SAKINA Principles & Architecture */}
      <WhySakina />

      {/* 7. Knowledge Center Preview */}
      <HomeArticles />

      {/* 8. FAQ Interactive Preview */}
      <HomeFAQ />

      {/* 9. Final Conversion Section */}
      <HomeCTA />
    </div>
  );
}
