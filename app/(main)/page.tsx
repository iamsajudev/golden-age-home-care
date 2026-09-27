// app/(main)/page.tsx
import HeroSection from "@/components/Home/HeroSection";
import { TrustBar } from "@/components/Home/TrustBar";
import { HowItWorks } from "@/components/Home/HowItWorks";
import { Services } from "@/components/Home/Services";
// import { CaregiverCTA } from "@/components/Home/CaregiverCTA";
import { Testimonials } from "@/components/Home/Testimonials";
import { Branches } from "@/components/Home/Branches";
import { FinalCTA } from "@/components/Home/FinalCTA";
import { HomeServices } from "@/components/Home/HomeServices";
import { Gallery } from "@/components/Home/Gallery";
import { HomeBranches } from "@/components/Home/HomeBranches";
import { Blogs } from "@/components/Home/Blogs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <HomeServices />
      <Services />
      {/* <CaregiverCTA /> */}
      <HomeBranches/>
      <Gallery/>
      <Testimonials />
      <Branches />
      <Blogs />
      <FinalCTA />
    </>
  );
}