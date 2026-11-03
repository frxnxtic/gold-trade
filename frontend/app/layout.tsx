import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="sk">
      <body>
        {children}
      </body>
    </html>
  );
}
