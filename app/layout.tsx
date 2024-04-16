import React from "react";
import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "@/scss/globals.scss";
import Providers from '@/app/providers';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipToMain from "@/components/SkipToMain";
import Breadcrumbs from "@/components/Breadcrumbs";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: "700", variable: '--font-roboto-condensed' });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: '--font-roboto' });

export const metadata: Metadata = {
  robots: "index, follow",
  openGraph: {
    siteName: 'Aha Digital',
    locale: 'sv_SE',
    type: 'website',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="sv">
      <body className={`${roboto.variable} ${robotoCondensed.variable}`}>
        <Providers>
          <SkipToMain />
          <Header />
          <div>
            <Breadcrumbs />
            <main tabIndex={-1} id="mainContent">
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
