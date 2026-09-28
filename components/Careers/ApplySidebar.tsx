// components/Careers/ApplySidebar.tsx
import Link from "next/link";
import {
    Phone,
    Mail,
    Clock,
    CheckCircle2,
    FileText,
    Sparkles,
    GraduationCap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const steps = [
    "Submit your application",
    "We call you within 2 business days",
    "Background check & health screening",
    "Free HHA training (if needed)",
    "Start working with a family",
];

const requiredDocs = [
    "Government-issued ID",
    "Social Security card",
    "Proof of address",
    "HHA/PCA certificate (if you have one)",
];

export function ApplySidebar() {
    return (
        <aside className="space-y-6 lg:sticky ">
            {/* What to expect */}
            <div className="rounded-3xl border border-sand-200 bg-white p-7 shadow-soft">
                <div className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-8 bg-red-600" />
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                        What to Expect
                    </p>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-semibold text-sand-900">
                    From Apply to First Day
                </h3>

                <ol className="mt-6 space-y-4">
                    {steps.map((step, i) => (
                        <li key={step} className="flex items-start gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-bold text-red-600">
                                {i + 1}
                            </span>
                            <p className="text-sm leading-relaxed text-sand-700">{step}</p>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Why us */}
            <div className="rounded-3xl border border-sand-200 bg-gradient-to-br from-red-50 via-white to-amber-50 p-7 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white shadow-card">
                    <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-sand-900">
                    Why Caregivers Choose Us
                </h3>
                <ul className="mt-4 space-y-3">
                    {[
                        "Free HHA certification training",
                        "Weekly direct deposit",
                        "Flexible part-time & full-time",
                        "Bilingual support (Bengali, Spanish)",
                        "Work near your home borough",
                    ].map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-sand-700"
                        >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Required documents */}
            <div className="rounded-3xl border border-sand-200 bg-white p-7 shadow-soft">
                <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                        <FileText className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-sand-900">
                        Have These Ready
                    </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                    {requiredDocs.map((doc) => (
                        <li
                            key={doc}
                            className="flex items-start gap-2.5 text-sm text-sand-700"
                        >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                            {doc}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact card */}
            <div className="rounded-3xl border border-sand-200 bg-sand-50 p-7 shadow-soft">
                <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                        <GraduationCap className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-sand-900">
                        Questions?
                    </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-sand-600">
                    Talk to our hiring team directly — we&apos;re happy to walk you
                    through the process.
                </p>
                <div className="mt-5 space-y-3">
                    <a
                        href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                        className="flex items-center gap-3 text-sm font-medium text-sand-800 hover:text-red-700"
                    >
                        <Phone className="h-4 w-4 text-red-600" />
                        {siteConfig.phone}
                    </a>
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="flex items-center gap-3 text-sm font-medium text-sand-800 hover:text-red-700"
                    >
                        <Mail className="h-4 w-4 text-red-600" />
                        {siteConfig.email}
                    </a>
                    <div className="flex items-start gap-3 text-sm text-sand-700">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                        <span>
                            Mon–Fri · 9:00 AM – 6:00 PM
                            <br />
                            Sat · By appointment
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    );
}