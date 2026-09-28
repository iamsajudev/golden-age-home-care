// lib/site-config.ts

/* ─────────────────────────────────────────────
   TYPES
   ───────────────────────────────────────────── */

export type NavChild = {
  href: string;
  label: string;
  description?: string; // optional — useful if you later add mega-menu descriptions
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export type Branch = {
  name: string;
  region: string;
};

/* ─────────────────────────────────────────────
   CONFIG
   ───────────────────────────────────────────── */

export const siteConfig = {
  name: "Golden Age Home Care",
  shortName: "Golden Age",
  tagline: "New York's #1 by Client Choice",
  description:
    "Home care assistance for NYC families. Medicaid accepted. Family members can become paid caregivers. HHA training provided.",
  url: "https://goldenagehomecare.com",

  /* ── Contact ── */
  phone: "(718) 775-7852",
  email: "info@goldenagehomecare.com",
  contact: {
    phone: "(718) 775-7852",
    email: "info@goldenagehomecare.com",
  },

  /* ── Navigation ── */
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/resource", label: "Resource" },
    { href: "/branches", label: "Branches" },
    {
      href: "/about",
      label: "About",
      children: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/video-gallery", label: "Video Gallery" },
      ],
    },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ] as NavItem[],

  /* ── Hours ── */
  hours: {
    weekdays: "Monday–Friday: 9:00 AM–6:00 PM",
    saturday: "Saturday: By appointment",
    sunday: "Sunday: Emergency line only",
  },

  /* ── Branch locations ── */
  branches: [
    { name: "Queens", region: "Queens County" },
    { name: "Brooklyn", region: "Kings County" },
    { name: "The Bronx", region: "Bronx County" },
    { name: "Staten Island", region: "Richmond County" },
    { name: "Manhattan", region: "New York County" },
    { name: "Westchester", region: "Westchester County" },
  ] as Branch[],

  /* ── Social ── */
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

/* ─────────────────────────────────────────────
   OPTIONAL CONVENIENCE EXPORTS
   ───────────────────────────────────────────── */

export type SiteConfig = typeof siteConfig;