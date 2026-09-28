// components/Blog/AuthorBox.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AuthorBox({
  name,
  role,
}: {
  name: string;
  role?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="mx-auto mt-16 max-w-7xl rounded-3xl border border-sand-200 bg-sand-50 p-8">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        {/* Avatar */}
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 font-serif text-lg font-bold text-white shadow-card">
          {initials}
        </span>

        {/* Info */}
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
            Written By
          </p>
          <p className="mt-1 font-serif text-lg font-semibold text-sand-900">
            {name}
          </p>
          {role && (
            <p className="text-xs font-medium uppercase tracking-wider text-sand-500">
              {role}
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-sand-600">
            Helping New York families navigate home care with dignity and
            clarity. Reach out anytime — free consultation.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lift"
        >
          Contact
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}