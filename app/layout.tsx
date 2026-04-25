import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  contactEmail,
  openGraphImage,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Wedding photography and videography",
  keywords: [
    "Sydney wedding photographer",
    "Sydney wedding videographer",
    "wedding photography Sydney",
    "wedding videography Sydney",
    "cinematic wedding films",
    "wedding photo and video team",
    "Sefton wedding photographer",
    "Australian wedding photography",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/Landing%20Page/Logo_s/2.png",
    apple: "/Landing%20Page/Logo_s/2.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: openGraphImage,
        width: 1200,
        height: 630,
        alt: `${siteName} wedding photography and videography`,
      },
    ],
    locale: "en_AU",
    type: "website",
    emails: [contactEmail],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: openGraphImage,
        alt: `${siteName} wedding photography and videography`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
