// app/(main)/contact/page.tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactMap } from "@/components/contact/ContactMap";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Golden Age Home Care. Free eligibility check, no obligation. Call (718) 775-7852 or send a message — we respond within one business day.",
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
                eyebrow="Get in Touch"
                title="Let's Talk About Your Family"
                description="Whether you're checking eligibility, exploring services, or just have a question — our team is here. Free consultation, no obligation."
                backgroundImage="/images/callto-action.jpg"
                ctaLabel="Call Now"
                ctaHref={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                showPhone={false}
            />

            {/* ═══════════ FORM + INFO ═══════════ */}
            <section id="form" className="relative overflow-hidden bg-white py-20 md:py-28">
                <div
                    aria-hidden
                    className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl"
                />

                <div className="container-page relative grid gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Form — spans 7 of 12 */}
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>

                    {/* Info — spans 5 */}
                    <div className="lg:col-span-5">
                        <ContactInfo />
                    </div>
                </div>
            </section>

            {/* ═══════════ MAP ═══════════ */}
            <ContactMap />
        </>
    );
}