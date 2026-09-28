// components/Careers/CareersOpenings.tsx
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const openings = [
    {
        title: "Certified Home Health Aide (HHA)",
        type: "Full-time / Part-time",
        location: "Queens, Brooklyn, Bronx",
        description:
            "Provide in-home personal care to seniors. State certification required (or complete our free training program).",
        requirements: [
            "HHA certification (or willing to train)",
            "Authorized to work in the US",
            "18 years or older",
            "Compassionate and reliable",
        ],
    },
    {
        title: "Personal Care Aide (PCA)",
        type: "Full-time / Part-time",
        location: "All 5 boroughs",
        description:
            "Assist with daily activities and companionship for clients in their homes.",
        requirements: [
            "PCA certification (or willing to train)",
            "Bilingual a plus (Bengali, Spanish, Hindi)",
            "Valid driver's license preferred",
        ],
    },
    {
        title: "Bilingual Care Coordinator",
        type: "Full-time",
        location: "Jackson Heights, Queens",
        description:
            "Manage client cases, coordinate caregiver schedules, and support families through the enrollment process.",
        requirements: [
            "1+ year experience in care coordination",
            "Fluent in English and Bengali (required)",
            "Strong communication skills",
        ],
    },
];

export function CareersOpenings() {
    return (
        <Section id="openings" className="bg-white">
            <SectionHeading
                eyebrow="Open Positions"
                title="Current Openings"
                description="Ready to start? Apply for any role below — most caregivers are placed within two weeks."
            />

            <div className="mt-14 space-y-6">
                {openings.map((job) => (
                    <JobCard key={job.title} {...job} />
                ))}
            </div>
        </Section>
    );
}

function JobCard({
    title,
    type,
    location,
    description,
    requirements,
}: {
    title: string;
    type: string;
    location: string;
    description: string;
    requirements: string[];
}) {
    return (
        <article className="group relative overflow-hidden rounded-3xl border border-sand-200 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-red-300 hover:shadow-lift">
            {/* Top accent line */}
            <span
                aria-hidden
                className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-300 transition-all duration-500 group-hover:w-full"
            />

            <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
                {/* Left: title + meta + description */}
                <div className="lg:col-span-8">
                    <div className="flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                            <Briefcase className="h-5 w-5" />
                        </span>
                        <div>
                            <h3 className="font-serif text-xl font-semibold leading-tight text-sand-900 transition-colors group-hover:text-red-700 md:text-[22px]">
                                {title}
                            </h3>

                            {/* Meta row */}
                            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-wider text-sand-500">
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="h-3.5 w-3.5 text-red-600" />
                                    {location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="h-3.5 w-3.5 text-red-600" />
                                    {type}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-sand-600">
                        {description}
                    </p>

                    {/* Requirements */}
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {requirements.map((r) => (
                            <li
                                key={r}
                                className="flex items-start gap-2 text-xs text-sand-700"
                            >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                                {r}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: CTA */}
                <div className="lg:col-span-4 lg:text-right">
                    <Link
                        href="/careers/apply"
                        className="group/btn inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
                    >
                        Apply Now
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                    <p className="mt-3 text-xs text-sand-500">
                        Or call{" "}
                        <a
                            href="tel:7187757852"
                            className="font-medium text-red-600 hover:text-red-700"
                        >
                            (718) 775-7852
                        </a>
                    </p>
                </div>
            </div>
        </article>
    );
}