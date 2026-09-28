// components/About/AboutValues.tsx
import { Heart, ShieldCheck, Users, Sparkles, GraduationCap, Home } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every decision starts with one question: what would we want for our own parent?",
  },
  {
    icon: ShieldCheck,
    title: "Dignity Always",
    description:
      "We help without taking over. We assist without condescending. Independence is preserved.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    description:
      "We treat families as partners in care — not bystanders. Communication is constant.",
  },
  {
    icon: Sparkles,
    title: "Genuine Connection",
    description:
      "Caregivers are matched by personality, language, and interests — not just skills.",
  },
  {
    icon: GraduationCap,
    title: "Trained Excellence",
    description:
      "Every caregiver is state-certified and continuously trained on the latest best practices.",
  },
  {
    icon: Home,
    title: "Home Is Everything",
    description:
      "We keep elders in the place they love — surrounded by memories and their own routines.",
  },
];

export function AboutValues() {
  return (
    <Section className="bg-sand-50">
      <SectionHeading
        eyebrow="What We Believe"
        title="Our Core Values"
        description="Six principles that guide every caregiver we train and every family we serve."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.title}
              className="group relative rounded-2xl border border-sand-200 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all duration-500 group-hover:bg-red-600 group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-sand-900 transition-colors group-hover:text-red-700">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand-600">
                {v.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}