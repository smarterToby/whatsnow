import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metaKeywords: string[] = [
  "WhatsApp chat starter",
  "Direct WhatsApp messages",
  "WhatsApp without saving contacts",
  "Quick messages WhatsApp",
  "WhatsApp link generator",
  "WhatsApp web tool",
  "WhatsApp chat without saving",
  "WhatsApp direct message",
  "WhatsApp number chat",
  "Simplify WhatsApp communication",
  "Start WhatsApp chat with number"
];

export const metadata: Metadata = {
  title: "WhatsNow",
  description: "Start a WhatsApp chat without saving contacts",
  keywords: metaKeywords
};

export const viewport: Viewport = {
  themeColor: "#010203"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
