// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenagehomecare.com"),
  title: {
    default:
      "Golden Age Home Care — New York's #1 by Client Choice",
    template: "%s | Golden Age Home Care",
  },
  description:
    "Home care assistance for NYC families. Medicaid accepted. Family members can become paid caregivers. HHA training provided. Six branches across Queens, Brooklyn, the Bronx, Staten Island, Manhattan, and Westchester.",
  keywords: [
    "home care",
    "home health aide",
    "HHA training",
    "Medicaid home care",
    "NYC home care",
    "elderly care New York",
    "senior care Queens",
    "senior care Brooklyn",
    "caregiver jobs NYC",
    "family caregiver program",
  ],
  authors: [{ name: "Golden Age Home Care" }],
  creator: "Golden Age Home Care",
  publisher: "Golden Age Home Care",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Golden Age Home Care",
    url: "https://goldenagehomecare.com",
    title: "Golden Age Home Care — New York's #1 by Client Choice",
    description:
      "Home care assistance for NYC families. Medicaid accepted. Family members can become paid caregivers.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Age Home Care — Compassionate care for New York families",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Age Home Care — New York's #1 by Client Choice",
    description:
      "Home care assistance for NYC families. Medicaid accepted. Family members can become paid caregivers.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-dvh flex flex-col bg-sand-50 font-sans text-sand-900 antialiased">
        {children}
      </body>
    </html>
  );
}