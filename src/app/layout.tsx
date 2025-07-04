import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reelay - Automate Your YouTube Potential",
  description:
    "Automate video creation, editing, and publishing with AI-powered precision.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#6e00ff] to-[#120020] text-white font-sans`}
      >
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#6e00ff] to-[#120020] flex items-center justify-center h-16">
          <Image
            src="/reelay-logo.png"
            alt="Reelay Logo"
            width={100}
            height={100}
            style={{ height: "40px", width: "auto", objectFit: "contain" }}
          />
        </header>
        <div style={{ paddingTop: "64px" }}>{children}</div>
      </body>
    </html>
  );
}
