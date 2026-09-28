// components/Contact/ContactInfo.tsx
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  FileCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const quickActions = [
  {
    icon: MessageSquare,
    label: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\D/g, "")}`,
    external: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: true,
  },
  {
    icon: Users,
    label: "Careers",
    value: "Join our team",
    href: "/careers",
    external: false,
  },
  {
    icon: FileCheck,
    label: "Check Eligibility",
    value: "Free screening",
    href: "/contact#form",
    external: false,
  },
];

export function ContactInfo() {
  return (
    <aside className="space-y-6">
      {/* Quick contact card */}
      <div className="rounded-3xl border border-sand-200 bg-white p-8 shadow-soft">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-red-600" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
            Get in Touch
          </p>
        </div>

        <h3 className="mt-5 font-serif text-2xl font-semibold text-sand-900">
          Talk to a Real Person
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-sand-600">
          Our team is available Monday through Saturday. Call us or send an
          email — we respond within one business day.
        </p>

        {/* Contact rows */}
        <div className="mt-6 space-y-4 border-t border-sand-100 pt-6">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="group flex items-start gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-sand-500">
                Phone
              </p>
              <p className="font-medium text-sand-900 transition-colors group-hover:text-red-700">
                {siteConfig.phone}
              </p>
            </div>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-start gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-sand-500">
                Email
              </p>
              <p className="font-medium text-sand-900 transition-colors group-hover:text-red-700">
                {siteConfig.email}
              </p>
            </div>
          </a>

          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-sand-500">
                Office
              </p>
              <p className="font-medium leading-snug text-sand-900">
                71-24 39th Ave
                <br />
                Jackson Heights, NY 11372
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Clock className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-sand-500">
                Hours
              </p>
              <p className="font-medium leading-snug text-sand-900">
                Mon – Fri · 9:00 AM – 6:00 PM
                <br />
                Sat · By appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions — now rounded */}
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-2 rounded-xl border border-sand-200 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lift"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-sand-500">
                  {action.label}
                </p>
                <p className="text-sm font-medium text-sand-900 transition-colors group-hover:text-red-700">
                  {action.value}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}