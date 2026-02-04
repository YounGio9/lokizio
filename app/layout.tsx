import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
