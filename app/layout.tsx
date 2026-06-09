import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { FloatingCTA } from "@/components/floating-cta";
import { Preloader } from "@/components/preloader";
import { site } from "@/data/site";

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://perrinsgrading.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.legalName} — Land Grading & Septic Systems`,
    template: `%s · ${site.name}`,
  },
  description: site.shortDesc,
  keywords: [
    "land grading",
    "septic system installation",
    "septic repair",
    "excavation",
    "land clearing",
    "grading contractor",
    "Perrin's Grading & Septic",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${site.legalName} — Land Grading & Septic Systems`,
    description: site.shortDesc,
    siteName: site.name,
    images: [{ url: "/gallery/work-09.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName}`,
    description: site.shortDesc,
    images: ["/gallery/work-09.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.legalName,
  description: site.shortDesc,
  telephone: site.phone,
  email: site.email,
  slogan: site.slogan,
  url: siteUrl,
  image: `${siteUrl}/gallery/work-09.jpg`,
  areaServed: "Asheville, NC & surrounding areas",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="min-h-screen bg-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Preloader />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
