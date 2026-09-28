// components/Contact/ContactMap.tsx
import { Section } from "@/components/ui/section";

export function ContactMap() {
    return (
        <Section className="bg-sand-50">
            <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                    Visit Us
                </p>
            </div>

            <h2 className="mt-5 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight text-sand-900 md:text-4xl">
                Stop by Our Queens Office
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-sand-600">
                Free parking available. Accessible by subway (7, E, F, M, R) and
                multiple bus lines.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl shadow-lift ring-1 ring-sand-200">
                <iframe
                    title="Golden Age Home Care head office map"
                    src="https://www.google.com/maps?q=71-24+39th+Ave+Jackson+Heights+NY+11372&output=embed"
                    className="h-[420px] w-full border-0 md:h-[520px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </Section>
    );
}