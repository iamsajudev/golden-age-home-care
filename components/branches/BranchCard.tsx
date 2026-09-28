// components/branches/BranchCard.tsx
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import type { Branch } from "@/lib/branches-data";

export function BranchCard({ branch }: { branch: Branch }) {
    return (
        <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-red-300 hover:shadow-lift">
            {/* Top gradient wash on hover */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Corner glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-100/60 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
            />

            <div className="relative flex flex-1 flex-col">
                {/* Icon + branch code */}
                <div className="flex items-start justify-between">
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                        <span
                            aria-hidden
                            className="absolute inset-0 rounded-2xl bg-red-400/40 opacity-0 transition-opacity duration-500 group-hover:animate-ping-slow group-hover:opacity-100"
                        />
                        <MapPin className="relative h-6 w-6" strokeWidth={2} />
                    </span>

                    <span className="font-serif text-xs font-semibold tracking-[0.15em] text-sand-400 transition-colors duration-300 group-hover:text-red-500">
                        {branch.code}
                    </span>
                </div>

                {/* Name + region */}
                <h3 className="mt-6 font-serif text-xl font-semibold leading-snug text-sand-900 transition-colors duration-300 group-hover:text-red-700 md:text-[22px]">
                    {branch.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-red-600">
                    {branch.region}
                </p>

                {/* Address */}
                <p className="mt-4 text-sm leading-relaxed text-sand-600">
                    {branch.address.street}
                    <br />
                    {branch.address.city}, {branch.address.state} {branch.address.zip}
                </p>

                {/* Hours + Phone */}
                <div className="mt-5 space-y-2.5 border-t border-sand-100 py-5">
                    <div className="flex items-center gap-2.5 text-xs text-sand-600">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-red-500" />
                        <span>{branch.hours}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-sand-600">
                        <Phone className="h-3.5 w-3.5 shrink-0 text-red-500" />
                        <a
                            href={`tel:${branch.phone.replace(/\D/g, "")}`}
                            className="font-medium text-sand-700 transition-colors hover:text-red-700"
                        >
                            {branch.phone}
                        </a>
                    </div>
                </div>

                {/* CTA row */}
                <div className="mt-auto flex items-center justify-between border-t border-sand-100 pt-5 mt-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-sand-500 transition-colors duration-300 group-hover:text-red-600">
                        Get Directions
                    </span>
                    <a
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Get directions to ${branch.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-sand-500 transition-all duration-300 group-hover:rotate-45 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white"
                    >
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                    </a>
                </div>
            </div>

            {/* Bottom accent bar */}
            <span
                aria-hidden
                className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 via-red-500 to-red-400 transition-all duration-500 group-hover:w-full"
            />
        </article>
    );
}