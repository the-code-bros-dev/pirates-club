import type { Metadata } from "next";
import {
  Barlow_Condensed,
  DM_Sans,
  JetBrains_Mono,
} from "next/font/google";

import "./globals.css";

const barlow = Barlow_Condensed({
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const jb = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jb",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.basefitclub.in"),

  title: {
    default: "Pirates Club | Best Gym in Thudiyalur, Coimbatore",
    template: "%s | Pirates Club",
  },

  description:
    "Pirates Club is a premium fitness gym in Thudiyalur, Coimbatore specializing in body transformation, strength training, fat loss, cardio workouts, and personal coaching.",

  keywords: [
    "Pirates Club",
    "best gym in Thudiyalur",
    "gym in Coimbatore",
    "fitness center Coimbatore",
    "body transformation gym",
    "strength training Coimbatore",
    "personal trainer Coimbatore",
    "fat loss gym CBE",
    "premium gym Coimbatore",
  ],

  authors: [{ name: "Pirates Club" }],

  creator: "Pirates Club",

  publisher: "Pirates Club",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.basefitclub.in",
  },

  openGraph: {
    title: "Pirates Club — Forge Your Limits",
    description:
      "Premium gym in Thudiyalur, Coimbatore with expert trainers, elite transformation programs, and world-class fitness equipment.",

    url: "https://www.basefitclub.in",

    siteName: "Pirates Club",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pirates Club Gym",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Pirates Club — Best Gym in Coimbatore",

    description:
      "Premium gym in Thudiyalur, Coimbatore offering transformation programs and strength coaching.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${barlow.variable}
          ${dm.variable}
          ${jb.variable}
          antialiased
        `}
      >
        {/* =========================================
            LOCAL BUSINESS SEO SCHEMA
        ========================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Gym",

              name: "Pirates Club",

              image: "https://www.basefitclub.in/og-image.jpg",

              url: "https://www.basefitclub.in",

              telephone: "+91 8778840553",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Coimbatore",
                addressRegion: "Tamil Nadu",
                postalCode: "641034",
                addressCountry: "IN",
              },

              openingHours: "Mo-Sa 05:30-21:00",

              priceRange: "₹₹",

              sameAs: [
                "https://instagram.com/basefitclub",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}