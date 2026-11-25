import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://portfolio-tan-rho-39.vercel.app";
const title = "Nisar Ahmad — Data Analyst & BI Developer (Power BI · Python · AI)";
const description =
  "Data analyst and Power BI developer with 4+ years turning operational, financial and field data into decision-ready dashboards, KPI reporting and predictive insights. 50+ dashboards shipped, $500K+ in savings identified, AI-augmented analytics with Claude and MCP.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Nisar Ahmad — Portfolio",
  keywords: [
    "Nisar Ahmad",
    "Data Analyst",
    "BI Developer",
    "Power BI Developer",
    "Data Scientist",
    "AI-Augmented Analytics",
    "DAX",
    "Power Query",
    "Python",
    "SQL",
    "BigQuery",
    "Tableau",
    "Monitoring and Evaluation",
    "Model Context Protocol",
    "MCP",
    "Gilgit Baltistan",
    "Pakistan",
  ],
  authors: [{ name: "Nisar Ahmad", url: siteUrl }],
  creator: "Nisar Ahmad",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Nisar Ahmad — Portfolio",
    locale: "en_US",
    title,
    description:
      "Data, made decision-ready. Power BI dashboards, ETL pipelines and AI-augmented analytics for teams in the US, UAE and Pakistan.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nisar Ahmad — Data Analyst & BI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Data, made decision-ready. Power BI · Python · SQL · AI-augmented analytics.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nisar Ahmad",
  jobTitle: "Data Analyst & BI Developer",
  email: "mailto:nisarahmad.py@gmail.com",
  telephone: "+92 344 4601408",
  url: siteUrl,
  image: `${siteUrl}/og.png`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gilgit-Baltistan",
    addressCountry: "PK",
  },
  worksFor: {
    "@type": "Organization",
    name: "Aga Khan Rural Support Programme (AKRSP)",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Karakoram International University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "National University of Sciences & Technology (NUST)",
    },
  ],
  knowsAbout: [
    "Power BI",
    "DAX",
    "SQL",
    "Python",
    "Data Engineering",
    "Machine Learning",
    "Monitoring and Evaluation",
    "AI-augmented analytics",
  ],
  sameAs: [
    "https://linkedin.com/in/nisarahmadpy5",
    "https://github.com/iamnisarahmad1408-pixel",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
