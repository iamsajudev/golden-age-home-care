// app/(main)/careers/page.tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CareersIntro } from "@/components/Careers/CareersIntro";
import { CareersBenefits } from "@/components/Careers/CareersBenefits";
import { CareersOpenings } from "@/components/Careers/CareersOpenings";
import { CareersTraining } from "@/components/Careers/CareersTraining";
import { CareersCTA } from "@/components/Careers/CareersCTA";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Join Golden Age Home Care. Free HHA training, weekly pay, flexible schedules, and meaningful work caring for New York families.",
};

export default function CareersPage() {
    return (
        <>
            <PageHero
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
                eyebrow="Join Our Team"
                title="Become a Caregiver"
                description="No experience needed — we train you for free. Start a career that changes lives, including your own."
                backgroundImage="/images/hero-1.jpg"
                ctaLabel="Apply Now"
                ctaHref="/careers/apply"
                showPhone={false}
            />

            <CareersIntro />
            <CareersBenefits />
            <CareersOpenings />
            <CareersTraining />
            <CareersCTA />
        </>
    );
}