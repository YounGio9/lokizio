import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOKIZIO | Conciergerie de Locations Courte Durée - Paris & Île-de-France",
  description: "LOKIZIO prend en charge la gestion de vos locations saisonnières à Paris, Île-de-France, Chartres et Orléans. Déléguez la gestion des voyageurs, des entrées/sorties et du ménage. Service réactif et personnalisé.",
  keywords: "conciergerie, location courte durée, Airbnb, gestion locative, Paris, Île-de-France, Chartres, Orléans, ménage, check-in, check-out",
  authors: [{ name: "LOKIZIO" }],
  openGraph: {
    title: "LOKIZIO | Conciergerie de Locations Courte Durée",
    description: "Déléguez enfin la gestion quotidienne de votre logement. LOKIZIO prend en charge vos locations saisonnières.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOKIZIO | Conciergerie de Locations Courte Durée",
    description: "Déléguez enfin la gestion quotidienne de votre logement. LOKIZIO prend en charge vos locations saisonnières.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo-without-bg.png" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
