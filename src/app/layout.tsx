import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { Header } from "@/components/base/header/header";
import { Footer } from "@/components/base/footer/footer";
import { Providers } from "@/components/providers/providers";
import { siteConfig } from "@/config/site.config";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: "%s | Eric Quelch",
    default: "Eric Quelch - Full Stack Developer",
  },
  description: "Eric Quelch's personal website and blog",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/avatar.jpg`,
        width: 1200,
        height: 630,
        alt: "Eric Quelch's Blog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development" ? true : false;
  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
