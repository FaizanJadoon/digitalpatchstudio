import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Patch Studio — Design, Web, and Branding",
  description: "We build fast, elegant websites and brand systems that convert.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
