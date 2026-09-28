// components/Service/ServiceRichText.tsx
import { Section, SectionHeading } from "@/components/ui/section";
import type { Service } from "@/lib/services-data";

export function ServiceRichText({
    data,
}: {
    data: NonNullable<Service["richTextSection"]>;
}) {
    return (
        <Section className="bg-white">
            <SectionHeading eyebrow={data.eyebrow} title={data.title} />

            <div className="mx-auto mt-12 max-w-7xl">
                <div
                    className={[
                        // Paragraphs
                        "[&_p]:text-pretty [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-sand-600 [&_p]:mb-4",
                        // Headings
                        "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-sand-900 [&_h2]:mt-8 [&_h2]:mb-4",
                        "[&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-sand-900 [&_h3]:mt-7 [&_h3]:mb-3",
                        // Lists
                        "[&_ul]:my-5 [&_ul]:space-y-2 [&_ul]:pl-0 [&_ul]:list-none",
                        "[&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:text-sm [&_li]:text-sand-700",
                        "[&_li]:before:content-[''] [&_li]:before:mt-2 [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:shrink-0 [&_li]:before:rounded-full [&_li]:before:bg-red-500",
                        // Inline
                        "[&_strong]:font-semibold [&_strong]:text-sand-900",
                        "[&_em]:italic [&_em]:text-sand-700",
                        "[&_a]:text-red-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-700",
                    ].join(" ")}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            </div>
        </Section>
    );
}