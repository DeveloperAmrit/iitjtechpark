import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IIT Jodhpur Tech Park - Innovation Hub",
    template: "%s | IIT Jodhpur Tech Park",
  },
  description: "Fostering innovation, entrepreneurship, and technological advancement. A premier tech park supporting startups, research, and industry collaboration in Rajasthan.",
  keywords: ["IIT Jodhpur", "Tech Park", "Innovation", "Startups", "Incubation", "AIOT", "Deep Tech", "Rajasthan", "Technology"],
  authors: [{ name: "IIT Jodhpur Tech Park" }],
  creator: "IIT Jodhpur Tech Park",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iitjtechpark.com", // Replace with your actual domain
    title: "IIT Jodhpur Tech Park - Innovation Hub",
    description: "Fostering innovation, entrepreneurship, and technological advancement. A premier tech park supporting startups, research, and industry collaboration in Rajasthan.",
    siteName: "IIT Jodhpur Tech Park",
    images: [
      {
        url: "/og-image.jpg", // Add an OG image to your public folder
        width: 1200,
        height: 630,
        alt: "IIT Jodhpur Tech Park",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IIT Jodhpur Tech Park - Innovation Hub",
    description: "Fostering innovation, entrepreneurship, and technological advancement.",
    images: ["/og-image.jpg"],
    creator: "@iitjodhpur", // Replace with actual handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
