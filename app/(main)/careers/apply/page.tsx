// app/(main)/careers/apply/page.tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ApplyForm } from "@/components/Careers/ApplyForm";
import { ApplySidebar } from "@/components/Careers/ApplySidebar";

export const metadata: Metadata = {
    title: "Apply — Become a Caregiver",
    description:
        "Apply to join Golden Age Home Care. Free HHA training, weekly pay, flexible schedules. Submit your application in 5 minutes.",
};

export default function ApplyPage() {
    return (
        <>
            <PageHero
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Careers", href: "/careers" },
                    { label: "Apply" },
                ]}
                eyebrow="Join Our Team"
                title="Apply to Become a Caregiver"
                description="Fill out the application below. It takes about 5 minutes — we'll call you within 2 business days."
                backgroundImage="/images/careers-hero.jpg"
                showCtas={false}
            />

            <section className="relative overflow-hidden bg-sand-50 py-20 md:py-24">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
                />

                <div className="container-page relative grid gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Form — spans 8 of 12 */}
                    <div className="lg:col-span-8">
                        <ApplyForm />
                    </div>

                    {/* Sidebar — spans 4 */}
                    <div className="lg:col-span-4">
                        <ApplySidebar />
                    </div>
                </div>
            </section>
        </>
    );
}