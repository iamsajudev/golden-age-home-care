// components/About/AboutTimeline.tsx
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2015",
    title: "Founded in Jackson Heights",
    description:
      "Mr. Shah Nawaz opens the first office with a small team of caregivers and a big promise: treat every client like family.",
  },
  {
    year: "2017",
    title: "HHA Training Program Launched",
    description:
      "Free certification training begins — 100% of tuition covered by the agency. First class graduates 12 caregivers.",
  },
  {
    year: "2019",
    title: "Brooklyn & Bronx Branches Open",
    description:
      "Expansion across NYC brings care closer to families in the outer boroughs and cuts emergency response times in half.",
  },
  {
    year: "2021",
    title: "Medicaid Coordination Service Added",
    description:
      "Dedicated benefits team formed to handle eligibility screening and MLTC coordination for every new client.",
  },
  {
    year: "2023",
    title: "Manhattan & Staten Island Branches",
    description:
      "Now serving all five boroughs. Multi-lingual staff expanded to include Bengali, Spanish, Hindi, and Urdu.",
  },
  {
    year: "2024",
    title: "Westchester County Opens",
    description:
      "First branch outside NYC — bringing our model of dignified in-home care to suburban families.",
  },
];

export function AboutTimeline() {
  return (
    <Section className="relative overflow-hidden bg-white">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"
      />

      <div className="relative">
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones That Shaped Us"
          description="From one small office in Queens to six branches across New York — here's how we grew."
        />

        {/* Timeline wrapper */}
        <div className="relative mt-16">
          {/* Vertical connector line (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sand-300 to-transparent lg:block"
          />

          <ol className="space-y-12 lg:space-y-20">
            {milestones.map((m, i) => (
              <MilestoneRow key={m.year} {...m} reverse={i % 2 === 1} />
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function MilestoneRow({
  year,
  title,
  description,
  reverse = false,
}: {
  year: string;
  title: string;
  description: string;
  reverse?: boolean;
}) {
  return (
    <li className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      {/* Center dot on the timeline */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-red-600 shadow-card" />
      </div>

      {/* Content side */}
      <div
        className={cn(
          reverse
            ? "lg:order-2 lg:pl-16"
            : "lg:order-1 lg:pr-16 lg:text-right"
        )}
      >
        <div
          className={cn(
            "rounded-2xl border border-sand-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lift md:p-7",
            reverse ? "lg:text-left" : ""
          )}
        >
          <p className="font-serif text-3xl font-semibold leading-none text-red-600 md:text-4xl">
            {year}
          </p>
          <h3 className="mt-3 font-serif text-xl font-semibold leading-tight text-sand-900 md:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-sand-600">
            {description}
          </p>
        </div>
      </div>

      {/* Empty column — creates the alternating rhythm */}
      <div
        className={cn(reverse ? "lg:order-1" : "lg:order-2")}
        aria-hidden
      />
    </li>
  );
}