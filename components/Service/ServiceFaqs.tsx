// components/Service/ServiceFaqs.tsx
import { Section, SectionHeading } from "@/components/ui/section";
import type { Service } from "@/lib/services-data";

export function ServiceFaqs({ service }: { service: Service }) {
    if (!service.faqs || service.faqs.length === 0) return null;

    return (
        <Section className="bg-sand-50">
            <SectionHeading
                eyebrow="Common Questions"
                title="Frequently Asked"
                description="Answers to what families ask us most about this service."
            />

            <div className="mx-auto mt-14 max-w-3xl space-y-4">
                {service.faqs.map((item) => (
                    <details
                        key={item.q}
                        className="group rounded-2xl border border-sand-200 bg-white p-6 transition-all duration-300 hover:border-red-200 open:shadow-soft"
                    >
                        <summary className="flex cursor-pointer items-center justify-between gap-4 font-serif text-lg font-semibold text-sand-900 transition-colors group-open:text-red-700">
                            {item.q}
                            <span
                                aria-hidden
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sand-300 text-red-600 transition-transform duration-300 group-open:rotate-45 group-open:border-red-600 group-open:bg-red-600 group-open:text-white"
                            >
                                +
                            </span>
                        </summary>
                        <p className="mt-4 text-sm leading-relaxed text-sand-600">
                            {item.a}
                        </p>
                    </details>
                ))}
            </div>
        </Section>
    );
}