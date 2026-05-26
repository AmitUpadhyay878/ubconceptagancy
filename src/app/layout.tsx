import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/footer-section";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ubconcept.verncel.app"),
  title: {
    default: "UBConcept: AI-Powered Web & Mobile App Development Company.",
    template: "%s | UBConcept",
  },
  description:
    "UBConcept is a web and mobile app development company using AI to build powerful digital products. We craft custom applications with cutting-edge technology to help your business scale and succeed.",
  applicationName: "UBConcept",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "UBConcept",
    "web development company",
    "mobile app development",
    "AI development agency",
    "custom software development",
    "MobileApp Development Company",
    "WebApp Development Company",
    "AI app development",
  ],
  authors: [{ name: "UBConcept" }],
  creator: "UBConcept",
  publisher: "UBConcept",
  category: "technology",
  alternates: {
    canonical: "https://ubconcept.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "UBConcept",
    title: "UBConcept: AI-Powered Web & Mobile App Development Company.",
    description:
      "UBConcept is a web and mobile app development company using AI to build powerful digital products.",
    url: "https://ubconcept.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UBConcept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UBConcept: Revolutionize Your Business.",
    description:
      "UBConcept is a web and mobile app development company using AI to build powerful digital products.",
    images: ["/og-image.png"],
    creator: "@ubconcept",
  },
  verification: {
    google: "google-site-verification=google2f44b44c882c1b38.html",
  },
  appleWebApp: {
    title: "UBConcept",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <GoogleTagManager gtmId="GTM-MXKW5S5C" />
        <GoogleAnalytics gaId="G-CHSKCQSRS6" />

      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXKW5S5C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
