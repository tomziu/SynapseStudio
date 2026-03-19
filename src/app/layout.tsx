import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://synapsestudio.pro"),
  title: "Synapse Studio | Nowoczesne Strony WWW i Sklepy e-Commerce",
  description:
    "Tworzę szybkie, nowoczesne strony internetowe i sklepy e-commerce, które zdobywają klientów. Sprawdź portfolio i zamów darmową wycenę. Zoptymalizowane pod SEO i UX.",
  keywords: ["tworzenie stron www", "sklepy internetowe", "agencja interaktywna", "Next.js", "nowoczesne strony internetowe", "e-commerce"],
  authors: [{ name: "Synapse Studio", url: "https://synapsestudio.pro" }],
  creator: "Synapse Studio",
  publisher: "Synapse Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Synapse Studio | Nowoczesne Strony WWW i Sklepy e-Commerce",
    description:
      "Tworzę szybkie, nowoczesne strony internetowe i sklepy e-commerce, które zdobywają klientów. Sprawdź portfolio i zamów darmową wycenę.",
    url: "https://synapsestudio.pro",
    siteName: "Synapse Studio",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapse Studio | Nowoczesne Strony WWW",
    description:
      "Tworzę szybkie, nowoczesne strony internetowe i sklepy e-commerce. Zamów darmową wycenę.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}

