import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: 'Predaj bytov | GOLD TRADE',
  description: 'Moderné bývanie v centre mesta. Katalóg bytov s výhodnými cenami a detailnými informáciami.',
  keywords: ['predaj bytov', 'novostavba', 'realitná kancelária', 'moderné bývanie'],
  openGraph: {
    title: 'Predaj bytov | GOLD TRADE',
    description: 'Moderné bývanie v centre mesta.',
    url: 'https://gold-trade.eu',
  },
};

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
