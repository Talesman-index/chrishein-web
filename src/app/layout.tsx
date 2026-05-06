import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chrishein | Le monde entier, livré chez vous au Bénin",
  description: "Chrishein commande à votre place sur SHEIN, Temu, Alibaba, Amazon et bien d'autres — sans stress, sans frontières, sans mauvaises surprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${fraunces.variable} ${dmSans.variable} font-body antialiased text-brand-black bg-white`}>
        {children}
      </body>
    </html>
  );
}
