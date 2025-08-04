import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from 'next/font/google';

// Основной текст — Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Заголовки — Playfair Display (красивый, элегантный)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-display',
  display: 'swap',
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
    <html lang="sk" className={`${inter.variable} ${playfair.variable}`}>
        <body className={`${playfair.variable} font-display`}>
        {children}
      </body>
    </html>
  );
}
