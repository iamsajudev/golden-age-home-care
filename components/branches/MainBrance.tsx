// components/branches/MainBrance.tsx
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

const MainBrance = () => {
    return (
        <Section className="bg-sand-50">
            <SectionHeading
                eyebrow="Find Us"
                title="Visit Any of Our Offices"
                description="Walk in during business hours or call ahead for an appointment. Every branch has bilingual staff ready to help."
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
                {/* Map — spans 8 of 12 */}
                <div className="lg:col-span-8">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200">
                        <iframe
                            title="Golden Age Home Care service area map"
                            src="https://www.google.com/maps?q=Jackson+Heights,+Queens,+NY&output=embed"
                            className="h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Contact sidebar — spans 4 */}
                <aside className="lg:col-span-4">
                    <div className="rounded-3xl border border-sand-200 bg-white p-8 shadow-soft">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                            <Navigation className="h-5 w-5" />
                        </span>

                        <h3 className="mt-5 font-serif text-2xl font-semibold text-sand-900">
                            Head Office
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-sand-600">
                            Our main office is in Jackson Heights, Queens — easily accessible
                            by subway, bus, and car. Free parking available.
                        </p>

                        <div className="mt-6 space-y-3 border-t border-sand-100 pt-5">
                            <div className="flex items-start gap-3 text-sm text-sand-700">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                                <span>
                                    71-24 39th Ave
                                    <br />
                                    Jackson Heights, NY 11372
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-sand-700">
                                <Phone className="h-4 w-4 shrink-0 text-red-600" />
                                <a
                                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                                    className="font-medium hover:text-red-700"
                                >
                                    {siteConfig.phone}
                                </a>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-sand-700">
                                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                                <span>
                                    Mon–Fri · 9:00 AM – 6:00 PM
                                    <br />
                                    Sat · By appointment
                                </span>
                            </div>
                        </div>

                        <a
                            href="https://maps.google.com/?q=71-24+39th+Ave+Jackson+Heights+NY+11372"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
                        >
                            Get Directions
                        </a>
                    </div>
                </aside>
            </div>
        </Section>
    );
};

export default MainBrance;