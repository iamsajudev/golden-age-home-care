// lib/site-config.ts
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
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  /* ── Hours ── */
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 6:00 PM",
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
  ],

  /* ── Social ── */
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
export type Branch = (typeof siteConfig.branches)[number];