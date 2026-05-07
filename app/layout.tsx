import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nisar Ahmad — Data Scientist & BI Developer",
  description:
    "Data Scientist, Analyst, and Power BI Developer with 4+ years turning complex datasets into decision-ready dashboards. $500K+ in identified savings, 18% churn reduction, 15+ production dashboards.",
  keywords: [
    "Data Scientist",
    "Power BI Developer",
    "Data Analyst",
    "Tableau",
    "DAX",
    "Python",
    "SQL",
    "Nisar Ahmad",
  ],
  authors: [{ name: "Nisar Ahmad" }],
  openGraph: {
    title: "Nisar Ahmad — Data Scientist & BI Developer",
    description:
      "Turning complex datasets into decision-ready dashboards. Power BI · Tableau · Python · SQL.",
    type: "website",
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
