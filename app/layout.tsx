import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { SITE_NAME } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — Director`,
  description: "Portfolio cinematográfico de un director de cine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Header />
        {children}
      </body>
    </html>
  );
}
