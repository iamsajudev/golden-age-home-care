// app/(main)/about/page.tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutFounder } from "@/components/Home/AboutFounder";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Golden Age Home Care is New York's leading Bangladeshi-owned home care agency. Learn our story, meet our team, and see our milestones.",
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
                eyebrow="About Golden Age"
                title="Caring for New York Families"
                description="Founded on family values, built on trust. We've been serving NYC's seniors with dignity and compassion since day one."
                backgroundImage="/images/hero-2.jpg"
                ctaLabel="Meet Our Team"
                ctaHref="/contact"
                showPhone={false}
            />

            <AboutIntro />
            <AboutStats />
            <AboutValues />
            <AboutFounder />
            <AboutTeam />
            <AboutTimeline />
            <AboutCTA />
        </>
    );
}