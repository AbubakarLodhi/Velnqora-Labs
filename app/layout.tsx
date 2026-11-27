import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollFX } from "@/components/ScrollFX";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Inter_Tight({ subsets: ["latin"], variable: "--font-display-face", weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Velnqora Labs | Digital Technology Agency", template: "%s | Velnqora Labs" },
  description:
    "A digital technology agency building custom websites, mobile applications, AI and machine learning solutions, and digital marketing strategies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Velnqora Labs",
    title: "Velnqora Labs | Digital Technology Agency",
    description: "Digital products, practical AI, and thoughtful growth for ambitious businesses.",
  },
  twitter: {
    card: "summary",
    title: "Velnqora Labs | Digital Technology Agency",
    description: "Digital products, practical AI, and thoughtful growth for ambitious businesses.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f4ef",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollFX />
      </body>
    </html>
  );
}
