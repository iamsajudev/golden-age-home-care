"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Sun, Calendar, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-sand-200 bg-sand-50/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      {/* ═══════════ TOP UTILITY BAR — RED ═══════════ */}
      <div
        className={cn(
          "border-b border-red-900/20 bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white transition-all duration-300",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"
        )}
      >
        <div className="container-page flex h-9 items-center justify-between text-xs">
          {/* Left: tagline or location */}
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 sm:flex">
              <MapPin className="h-3 w-3" />
              Serving all 5 boroughs &amp; Westchester
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock className="h-3 w-3" />
              {siteConfig.hours.weekdays}
            </span>
          </div>

          {/* Right: contact links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden items-center gap-1.5 transition hover:text-red-100 sm:flex"
            >
              <Mail className="h-3 w-3" />
              {siteConfig.email}
            </a>
            <span className="hidden h-3 w-px bg-white/30 sm:inline-block" />
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 font-medium transition hover:text-red-100"
            >
              <Phone className="h-3 w-3" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════ MAIN NAV ═══════════ */}
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex items-center justify-center text-white shadow-soft">
            <Image
              src="/logo.png"
              alt="Golden Age Home Care Logo"
              width={36}
              height={36}
              className="rounded-full"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold text-sand-900">
              Golden Age
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-sand-500">
              Home Care
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition",
                  active
                    ? "text-red-700"
                    : "text-sand-700 hover:bg-sand-100 hover:text-sand-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-sand-700 hover:bg-sand-100 lg:hidden xl:flex"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link href="/contact">
            <Button size="sm" className="bg-red-600 text-white hover:bg-red-700">
              <Calendar className="h-4 w-4" />
              Check Eligibility
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-sand-800 hover:bg-sand-100 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-sand-200 bg-sand-50 md:hidden">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-sand-800 hover:bg-sand-100"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-sand-200 pt-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-sand-300 py-3 text-sm font-medium"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                  <Calendar className="h-4 w-4" />
                  Check Eligibility
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}