// components/Careers/CareersBenefits.tsx
import {
    DollarSign,
    Heart,
    Clock,
    GraduationCap,
    ShieldCheck,
    MapPin,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const benefits = [
    {
        icon: DollarSign,
        title: "Weekly Pay",
        description: "Direct deposit every Friday. No waiting.",
    },
    {
        icon: Heart,
        title: "Health Coverage",
        description: "Full-time staff get medical, dental, and vision.",
    },
    {
        icon: Clock,
        title: "Flexible Hours",
        description: "Part-time and full-time. You choose your schedule.",
    },
    {
        icon: GraduationCap,
        title: "Free Training",
        description: "HHA certification — tuition covered by us.",
    },
    {
        icon: ShieldCheck,
        title: "Paid Time Off",
        description: "Earned PTO plus paid holidays for full-time staff.",
    },
    {
        icon: MapPin,
        title: "Work Near Home",
        description: "We place you with families in your borough.",
    },
];

export function CareersBenefits() {
    return (
        <Section className="bg-sand-50">
            <SectionHeading
                eyebrow="The Perks"
                title="What You Get When You Join"
                description="We know caregivers give so much. Here's what we give back."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((b) => {
                    const Icon = b.icon;
                    return (
                        <div
                            key={b.title}
                            className="group relative rounded-2xl border border-sand-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lift"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                                <Icon className="h-5 w-5" strokeWidth={2} />
                            </span>
                            <h3 className="mt-5 font-serif text-lg font-semibold text-sand-900 transition-colors group-hover:text-red-700">
                                {b.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-sand-600">
                                {b.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}