import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shivam Deshwal — Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years of experience in designing and building scalable backend systems and distributed services across financial, telecom, and retail supply chain domains.",
  openGraph: {
    title: "Shivam Deshwal — Senior Software Engineer",
    description:
      "Senior Software Engineer specialising in distributed systems, microservices, and high-throughput Java platforms.",
    url: "https://deshwal36.github.io",
    siteName: "Shivam Deshwal",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-text font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
