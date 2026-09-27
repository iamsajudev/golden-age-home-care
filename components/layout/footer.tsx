// components/site-footer.tsx
import Link from "next/link";
import { Sun, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/careers", label: "Become a Caregiver" },
  { href: "/contact", label: "Check Eligibility" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-200 bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sun-400 to-sun-600 text-white">
              <Sun className="h-5 w-5" />
            </span>
            <span className="font-serif text-lg font-semibold text-sand-900">
              Golden Age
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand-600">
            The leading home health care provider serving New York families.
            Medicaid accepted. HHA training provided.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sand-900">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-sand-600 transition-colors hover:text-sun-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sand-900">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-600">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun-600" />
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-sun-700"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun-600" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-sun-700"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sun-600" />
              <span>
                {siteConfig.hours.weekdays}
                <br />
                {siteConfig.hours.saturday}
                <br />
                {siteConfig.hours.sunday}
              </span>
            </li>
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-sand-900">
            Branch Locations
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-sand-600">
            {siteConfig.branches.map((branch) => (
              <li key={branch.name} className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 shrink-0 text-sun-600" />
                {branch.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-sand-200">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-sand-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Licensed Home Care Services Agency · New York State</p>
        </Container>
      </div>
    </footer>
  );
}