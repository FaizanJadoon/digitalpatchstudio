import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalpatchstudio.com"),
  title: "Digital Patch Studio — Digitizing, Vector & Web",
  description: "Fast, export-ready digitizing, vector art, and modern web development.",
  openGraph: {
    title: "Digital Patch Studio",
    description: "Digitizing, Vector, Web & Marketing Services",
    url: "https://digitalpatchstudio.com",
    siteName: "Digital Patch Studio",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
