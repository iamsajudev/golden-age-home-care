// components/About/AboutTeam.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';

// ============================================================
// TEAM DATA
// ============================================================
const team = [
  {
    id: 'shah-nawaz',
    name: 'Shah Nawaz',
    role: 'Founder & CEO',
    image: '/images/President-CEO-Shah-Nawaz-2.jpg',
    bio: 'Building a care agency that treats every client like family — because they are.',
    location: 'New York',
    email: 'shah@goldenagehomecare.com',
    linkedin: 'https://linkedin.com/in/shahnawaz',
    accent: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    id: 'nusrat-jahan',
    name: 'Nusrat Jahan',
    role: 'Director of Operations',
    image: '/images/team-nusrat.jpg',
    bio: 'Oversees scheduling, compliance, and case management across all six branches.',
    location: 'Queens',
    email: 'nusrat@goldenagehomecare.com',
    linkedin: 'https://linkedin.com/in/nusratjahan',
    accent: 'from-amber-500/20 to-amber-500/0',
  },
  {
    id: 'rahul-ahmed',
    name: 'Rahul Ahmed',
    role: 'Head of Caregiver Training',
    image: '/images/team-rahul.jpg',
    bio: 'Certifies every HHA in our program and leads ongoing education for the team.',
    location: 'Bronx',
    email: 'rahul@goldenagehomecare.com',
    linkedin: 'https://linkedin.com/in/rahulahmed',
    accent: 'from-sky-500/20 to-sky-500/0',
  },
  {
    id: 'priya-chowdhury',
    name: 'Priya Chowdhury',
    role: 'Medicaid Coordination Lead',
    image: '/images/team-priya.jpg',
    bio: 'Walks families through every step of the Medicaid and MLTC approval process.',
    location: 'Brooklyn',
    email: 'priya@goldenagehomecare.com',
    linkedin: 'https://linkedin.com/in/priyachowdhury',
    accent: 'from-rose-500/20 to-rose-500/0',
  },
  {
    id: 'michael-torres',
    name: 'Michael Torres',
    role: 'Client Relations Manager',
    image: '/images/team-michael.jpg',
    bio: 'First point of contact for new families — available in English and Spanish.',
    location: 'Manhattan',
    email: 'michael@goldenagehomecare.com',
    linkedin: 'https://linkedin.com/in/michaeltorres',
    accent: 'from-violet-500/20 to-violet-500/0',
  },
  {
    id: 'fatima-rahman',
    name: 'Fatima Rahman',
    role: 'Care Quality Supervisor',
    image: '/images/team-fatima.jpg',
    bio: 'Conducts home visits and quality reviews to ensure our standards hold.',
    location: 'Staten Island',
    email: 'fatima@goldenagehomecare.com',
    linkedin: 'https://linkedin.com/in/fatimarahman',
    accent: 'from-teal-500/20 to-teal-500/0',
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================
export function AboutTeam() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-sand-50 via-white to-sand-50">
      {/* Ambient gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-red-100/40 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-amber-100/40 blur-[120px]"
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative">
        <SectionHeading
          eyebrow="Our People"
          title="Meet the team"
          description="The people behind every visit, every phone call, and every family we serve."
        />

        {/* Team grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {team.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}

// ============================================================
// TEAM CARD
// ============================================================
function TeamCard({
  member,
  index,
}: {
  member: (typeof team)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-sand-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-sand-300 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* ---------- PHOTO ---------- */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-sand-100 to-sand-200">
        {!imgError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
            className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          // Fallback: initials block
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sand-100 to-sand-200">
            <span className="font-serif text-6xl font-semibold text-sand-400">
              {member.name
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')}
            </span>
          </div>
        )}

        {/* Grain overlay for premium feel */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        {/* Bottom gradient for text readability */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-sand-950/80 via-sand-950/20 to-transparent"
        />

        {/* Location pill (top-left) */}
        {member.location && (
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {member.location}
          </div>
        )}

        {/* Name + role (bottom overlay) */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-serif text-xl font-semibold leading-tight text-white drop-shadow-sm">
            {member.name}
          </h3>
          <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.15em] text-red-300">
            {member.role}
          </p>
        </div>
      </div>

      {/* ---------- BIO + ACTIONS ---------- */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <p className="text-[13.5px] leading-relaxed text-sand-600">
          {member.bio}
        </p>

        {/* Contact row */}
        <div className="flex items-center justify-between border-t border-sand-100 pt-4">
          {/* Icons */}
          <div className="flex items-center gap-1">
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sand-500 transition-colors hover:bg-sand-50 hover:text-sand-900"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${member.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-sand-500 transition-colors hover:bg-sand-50 hover:text-sand-900"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* View link */}
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-sand-700 transition-colors hover:text-red-600"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}